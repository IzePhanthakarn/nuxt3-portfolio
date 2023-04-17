<script setup lang="ts">
import { Gatget, TodoItem } from '~/assets/interface'
definePageMeta({
    middleware: 'auth',
    layout: "admin",
});

const testimonial = 52.5;
const totalPlan = 20.51;
const statusHealth = 1600;
const totalWallet = 1259;
const profitLoss = 35.5
const typeSelected = ref('All')
const typeList = ['All', 'Cryptocurrency', 'Fund', 'Stock']
const planTitle = ref('today')
const gatgets: Gatget[] = [
    { title: 'Total Cryptocurrency', icon: 'uil:bitcoin-circle', value: `${testimonial} Baht`, link: '/user' },
    { title: 'Total Fund', icon: 'ri:funds-box-line', value: `${totalPlan} Baht`, link: '/plan' },
    { title: 'Total Stock', icon: 'icon-park-outline:stock-market', value: `${totalWallet} Baht`, link: '/wallet' },
    { title: 'Profit/Loss', icon: 'fluent:wallet-credit-card-32-regular', value: `${statusHealth} Baht`, link: '/health' },
    { title: 'Total Balance', icon: 'tabler:plus-minus', value: `${profitLoss} %`, link: '/health' },
]

const todoList = ref<TodoItem[]>([
    { text: 'Have a lunch', done: false },
    { text: 'Learn to Code', done: false },
    { text: 'Go jogging', done: false },
])

const todoInput = ref('')
function addList() {
    todoList.value.push({
        text: todoInput.value,
        done: false
    })
    todoInput.value = ''
}

useHead({
    title: 'ISV | Dashboard'
})

</script>

<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full flex items-center justify-between bg-neutral rounded-xl text-base-100 px-3 py-1.5 shadow">
            <div class="flex items-center space-x-2">
                <Icon name="uil:chart" size="40" />
                <h1 class="text-3xl font-medium py-1">Investment</h1>
            </div>
        </div>

        <div class="w-full grid grid-cols-5 gap-5 mt-5">
            <div v-for="(gatget, index) in gatgets" :key="index">
                <nuxt-link :to=gatget.link
                    class="h-full bg-neutral-content border-4 border-neutral hover:border-primary shadow-md hover:shadow-lg text-neutral-focus py-4 rounded-xl flex items-center justify-evenly duration-300">
                    <div class="hidden 2xl:block">
                        <Icon :name=gatget.icon size="65" />
                    </div>
                    <div class="block 2xl:hidden">
                        <Icon :name=gatget.icon size="55" />
                    </div>
                    <div class="flex flex-col text-center">
                        <p class="text-2xl font-bold">{{ gatget.value }}</p>
                        <p class="text-lg font-semibold">{{ gatget.title }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>

        <div class="w-full mt-6 h-full rounded-xl column-1">
            <div class="w-full height-content grid grid-cols-1 gap-6">
                <div class="w-full height-table overflow-y-scroll rounded-xl">
                    <div
                        class="h-full flex flex-col p-4 bg-neutral border-4 border-neutral shadow-md text-neutral-focus rounded-xl">
                        <div class="w-full flex justify-between items-center mb-2">
                            <div class="flex items-center space-x-2 text-2xl font-medium text-base-100">
                                <Icon name="icon-park-outline:history-query" size="32" />
                                <p>Investment History</p>
                            </div>

                            <!-- The button to open modal -->
                            <div class="flex items-end space-x-4">
                                <div class="w-full h-full flex flex-col justify-end text-white">
                                    <h1>Type of Investment:</h1>
                                    <div class="w-full mt-0.5">
                                        <select v-model="typeSelected" name="" id=""
                                            class="w-full bg-transparent cursor-pointer border-2 h-8 px-2 rounded-lg">
                                            <option class="bg-neutral" v-for="(type, index) in typeList" :key="index"
                                                :value=type>{{
                                                    type }}</option>
                                        </select>
                                    </div>
                                </div>
                                <label for="my-modal-1"
                                    class="bg-primary text-base-100 font-semibold py-1 px-2 rounded-md hover:bg-primary-focus cursor-pointer whitespace-nowrap active:scale-95">Add
                                    list</label>
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
                            <div class="overflow-y-auto height-data">
                                <table class="table border-collapse table-auto w-full">
                                    <!-- head -->
                                    <thead>
                                        <tr>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">Date</th>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">Time</th>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">List</th>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">Type</th>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">Entry
                                                Price</th>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">Current
                                                Price</th>
                                            <th class="sticky top-0 text-center bg-neutral-content text-base py-2">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- row 1 -->
                                        <tr class="text-center">
                                            <td class="py-2">Apr 11, 2023</td>
                                            <td class="py-2">20.00</td>
                                            <td class="py-2">ผัดกะเพราไก่ไข่ดาว</td>
                                            <td class="py-2">Cryptocurrency</td>
                                            <td class="py-2">630</td>
                                            <td class="py-2">670</td>
                                            <td class="py-2">
                                                <Icon name="line-md:edit" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.height-content {
    height: calc(100vh - 364px);
}

.height-table {
    height: calc(100vh - 334px);
}

.height-data {
    height: calc(100vh - 454px);
}

th {
    border: 1px solid black;
    border-collapse: collapse;
}

tr:nth-child(even) td {
    background-color: #D1D1D6;
}

tr:last-child td:first-child {
    border-bottom-left-radius: 5px;
}

tr:last-child td:last-child {
    border-bottom-right-radius: 5px;
}</style>