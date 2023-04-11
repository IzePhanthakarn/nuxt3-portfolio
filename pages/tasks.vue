<script setup lang="ts">
import { TodoItem } from '~/assets/interface'
definePageMeta({
    middleware: 'auth',
    layout: "admin",
});

const todoList = ref<TodoItem[]>([
    { text: 'Have a lunch', done: false },
    { text: 'Learn to Code', done: false },
    { text: 'Go jogging', done: false },
])

const todoInput = ref('')
const planTitle = ref('today')
function addList() {
    todoList.value.push({
        text: todoInput.value,
        done: false
    })
    todoInput.value = ''
}

function deleteList(index: number) {
    todoList.value.splice(index, 1)
}

</script>

<template>
    <div class="w-full h-full flex flex-col space-y-8">
        <div class="w-full flex items-center justify-between bg-neutral rounded-xl text-base-100 px-3 py-1.5 shadow">
            <div class="flex items-center space-x-2">
                <Icon name="uil:clipboard-blank" size="40" />
                <h1 class="text-3xl font-medium">Tasks</h1>
            </div>
        </div>

        <div class="w-full h-full rounded-xl column-1 shadow-lg">
            <div class="w-full height-content">
                    <div class="w-full height-table overflow-y-scroll rounded-xl grid grid-cols-3 gap-4">
                        <div
                            class="h-full flex flex-col p-4 bg-neutral border-4 border-neutral shadow-md text-neutral-focus rounded-xl">
                            <div class="w-full flex justify-between items-center mb-4">
                                <div class="flex items-center space-x-2 text-2xl font-medium text-base-100">
                                    <Icon name="uil:clipboard-notes" size="32" />
                                    <p>Everyday task</p>
                                </div>

                                <!-- The button to open modal -->
                                <div class="flex items-center space-x-2">

                                    <label for="my-modal-1"
                                    class="bg-primary text-base-100 font-semibold py-1 px-2 rounded-md hover:bg-primary-focus cursor-pointer">Add
                                    list</label>
                                    
                                    <button class="w-8">
                                        <Icon name="solar:trash-bin-trash-outline" class="text-white duration-100 hover:text-primary hover:scale-110 active:scale-100" size="30"/>
                                    </button>
                                </div>

                                <!-- Put this part before </body> tag -->
                                <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                                <label for="my-modal-1" class="modal">
                                    <label class="modal-box relative p-4" for="">
                                        <h1 class="mb-2 text-2xl font-bold">Add list</h1>
                                        <label for="my-modal-1" class="cursor-pointer hover:text-primary">
                                            <Icon name="uil:x" class="absolute top-4 right-4" />
                                        </label>
                                        <hr>
                                        <div class="flex flex-col font-medium">
                                            <label class="mt-1">Add list to {{ planTitle }} plan</label>
                                            <input type="text" autofocus placeholder="What will you do?" v-model="todoInput"
                                                class="bg-gray-200 mt-2 mb-3 py-2 px-3 text-lg rounded-md">
                                            <div class="modal-action mt-0" @click="addList">
                                                <button
                                                    class="w-full flex text-lg font-bold bg-primary hover:bg-primary-focus text-base-100 rounded-md shadow">
                                                    <label for="my-modal-1" class="w-full h-full py-2 cursor-pointer">Add
                                                    </label>
                                                </button>
                                            </div>
                                        </div>
                                    </label>
                                </label>
                            </div>

                            <div class="w-full h-full rounded-lg bg-neutral-content p-1.5">
                                <ul id="todoListEl"
                                    class="w-full height-tasks bg-base-100 font-semibold rounded-lg overflow-y-scroll px-4 py-2 divide-y-2">
                                    <li v-for="(todo, index) of todoList" class="flex items-center space-x-1 py-2">
                                        <input v-model="todo.done" type="checkbox"
                                            class="checkbox border-2 checkbox-primary">
                                        <span class="grow mb-1 px-2 decoration-2 decoration-double decoration-primary"
                                            :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
                                        <button
                                            class="mb-1 underline underline-offset-2 text-primary hover:text-primary-focus"
                                            @click="deleteList(index)">remove</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.height-content {
    height: calc(100vh - 264px);
}

.height-table {
    height: calc(100vh - 210px);
}
.height-tasks {
    height: calc(100vh - 310px);
}

.login__box {
    grid-template-columns: max-content 1fr;
}

input::-ms-reveal {
    display: none;
}

.login__box:nth-child(2) input {
    padding-right: 1.8rem;
}

.login__input:focus+.login__label {
    top: -20px;
    font-size: 16px;
}

.login__input:not(:placeholder-shown).login__input:not(:focus)+.login__label {
    top: -20px;
    font-size: 16px;
}

</style>