<template>
    <div class="section-home">
        <main class="main">
            <TextTitle usage="main">
                TodoList
            </TextTitle>
            <div v-if="todos" class="todo-gird">
                <router-link v-for="todo in todos" :key="todo.title" :to='todo.to' class="todo-item"
                    :class="{ done: todo.isCompleted }">
                    <TextStatus class="status" :boolean="todo.isCompleted" />
                    <TextTitle usage="list">
                        {{ todo.title }}
                    </TextTitle>
                    <hr>
                    <TextParagraph>
                        <ul>
                            <li v-for="detail in todo.details" :key="detail.task">
                                <TextStatus class="status" :boolean="detail.isCompleted" />
                                {{ detail.task }}

                            </li>
                        </ul>
                    </TextParagraph>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

import TextTitle from '@/components/og/components/texts/TextTitle.vue';
import TextParagraph from '@/components/og/components/texts/TextParagraph.vue';
import TextStatus from '@/components/og/components/texts/TextStatus.vue';
import { useModel } from '@/models';

const model = useModel()

export default defineComponent({
    name: "section-home",
    display: "Section Home",
    computed: {
        widgetEditMode: () => { return store.state.appMode == 'widget'; },
        todos: () => { return store.state.todos; }
    },
    components: { TextTitle, TextParagraph, TextStatus },
    methods: {
        getTodos: async () => {
            await model.test.getTodoList()
        }
    },
    mounted() {
        this.getTodos()
    }
})
</script>

<style scoped>
.section-home {
    padding: 16px;
    color: black;
}

.todo-gird {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.todo-gird a {
    color: #000;
    text-decoration: none;
}

.todo-item {
    border: 2px solid #000;
    background-color: white;
    padding: 16px;
    transition: 150ms background-color ease-in-out;
}

.todo-item:hover {
    background-color: #eee;
}

.todo-item.done {
    background-color: greenyellow;
}

.todo-item.done:hover {
    background-color: mediumspringgreen;
}

hr {
    border: none;
    border-top: #000 solid 2px;
    margin-top: 8px;
}

.todo-item .status {
    margin-right: 4px;
}
</style>