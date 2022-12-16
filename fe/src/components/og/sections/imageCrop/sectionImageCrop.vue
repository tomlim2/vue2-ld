<template>
    <div class="section-listener-checker">
        <TextTitle>
            Image Crop
        </TextTitle>
        <TextParagraph>file-saver & vue-advanced-cropper</TextParagraph>
        <div class="content">
            <div class="upload-example__cropper-wrapper">
                <cropper ref="cropper" class="upload-example__cropper" check-orientation :src="image.src"
                    :stencil-props="{
                        aspectRatio: 1 / 1
                    }" />
                <ButtonBasic class="upload-example__reset-button" title="Reset Image" :onClick="reset">
                    RESET
                </ButtonBasic>
                <div class="upload-example__file-type" v-if="image.type">
                    {{ image.type }}
                </div>
            </div>
            <div class="upload-example__buttons-wrapper">
                <ButtonBasic class="upload-example__button" :onClick="uploadImage">
                    <input :style="{ position: 'absolute', top: 0, opacity: '0', width: 0, height: 0 }" ref="file"
                        type="file" accept="image/*" @change="loadImage($event)" />UploadImage</ButtonBasic>
                <ButtonBasic v-if="image.src" class="upload-example__button" :onClick="crop">DownloadResult
                </ButtonBasic>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import store from '@/store'

import TextTitle from '@/components/og/components/texts/TextTitle.vue';
import TextParagraph from '@/components/og/components/texts/TextParagraph.vue';

import { Cropper } from 'vue-advanced-cropper';
import { saveAs } from 'file-saver';
import 'vue-advanced-cropper/dist/style.css';
import ButtonBasic from '../../components/buttons/ButtonBasic.vue';


function getMimeType(file, fallback = null) {
    const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
        header += byteArray[i].toString(16);
    }
    switch (header) {
        case "89504e47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}


export default defineComponent({
    name: "section-popcorn",
    display: "Section Popcorn",
    components: {
        TextTitle,
        TextParagraph,
        Cropper,
        ButtonBasic
    },
    data() {
        return {
            image: {
                src: null,
                type: null
            }
        };
    },
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget' }
    },
    methods: {
        uploadImage(){
            this.$refs.file.click()
        },
        crop() {
            const { canvas } = this.$refs.cropper.getResult();
            canvas.toBlob((blob) => {
                saveAs(blob);
            }, this.image.type);
        },
        reset() {
            this.image = {
                src: null,
                type: null,
            };
        },
        loadImage(event) {
            // Reference to the DOM input element
            const { files } = event.target;
            // Ensure that you have a file before attempting to read it
            if (files && files[0]) {
                // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                if (this.image.src) {
                    URL.revokeObjectURL(this.image.src);
                }
                // 2. Create the blob link to the file to optimize performance:
                const blob = URL.createObjectURL(files[0]);
                // 3. The steps below are designated to determine a file mime type to use it during the
                // getting of a cropped image from the canvas. You can replace it them by the following string,
                // but the type will be derived from the extension and it can lead to an incorrect result:
                //
                // this.image = {
                //    src: blob;
                //    type: files[0].type
                // }
                // Create a new FileReader to read this image binary data
                const reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.image" refers to the image of Vue component
                    this.image = {
                        // Read image as base64 and set it as src:
                        src: blob,
                        // Determine the image type to preserve it during the extracting the image from canvas:
                        type: getMimeType(e.target.result, files[0].type),
                    };
                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsArrayBuffer(files[0]);
            }
        },
    },
    mounted() {

    }
})
</script>

<style scoped>
.section-listener-checker {
    padding: 16px;
    color: #252525;
}

.cropper {
    width: 30vw;
    width: 30vw;
}

.content {
    margin-top: 16px;
}

.upload-example {
    margin-top: 20px;
    margin-bottom: 20px;
    user-select: none;

}

.upload-example__cropper {
    border: solid 1px #eee;
    min-height: 300px;
    max-height: 500px;
    width: 100%;
}

.upload-example__cropper-wrapper {
    position: relative;
}

.upload-example__reset-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.upload-example__buttons-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 17px;
}

.upload-example__button {
    margin: 0 16px;
}

.upload-example__button:focus {
    display: none;
}

.upload-example__file-type {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #0d0d0d;
    border-radius: 5px;
    padding: 0px 10px;
    padding-bottom: 2px;
    font-size: 12px;
    color: white;
}
</style>