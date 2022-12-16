<template>
  <div class="page-widget">
    <SectionImageCrop/>
  </div>
</template>
<script lang="ts">
import SectionImageCrop from "@/components/og/sections/imageCrop/sectionImageCrop.vue";

export default {
  name: "page-image-crop",
  display: "Image Crop",
  order: 1,
  components: {
    SectionImageCrop
},
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function () {
      //@ts-ignore
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      //@ts-ignore
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el: any) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function (evt: any) {
      window.console.log(evt);
    }
  }
};
</script>

<style>
</style>