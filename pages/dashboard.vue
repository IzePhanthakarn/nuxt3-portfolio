<script setup lang="ts">
import { Gatget, TodoItem } from '~/assets/interface'
definePageMeta({
    middleware: 'auth',
    layout: "admin",
});

const serverUsed = 28.4;
const testimonial = 2;
const totalPlan = 4;
const statusHealth = 'Good'
const temperature = 31;
const totalWallet = '43.20K';
const planTitle = ref('today')
const gatgets: Gatget[] = [
   { title: 'Total Testimonial', icon: 'lucide:quote', value: `${testimonial} Opinions`, link: '/user' },
   { title: 'Unfinished', icon: 'uil:clipboard-notes', value: `${totalPlan} Plans`, link: '/plan' },
   { title: 'Health today', icon: 'icon-park-outline:muscle', value: `${statusHealth}`, link: '/health' },
   { title: 'Clear sky', icon: 'uil:clouds', value: `${temperature} Celsius`, link: '/' },
   { title: 'In the wallet', icon: 'uil:wallet', value: `${totalWallet} Baht`, link: '/wallet' }
]

const todoList = ref<TodoItem[]>([
   { text: 'Have a lunch', done: false },
   { text: 'Learn to Code', done: false },
   { text: 'Go jogging', done: false }
])

// const getWindowHeight = () =>{
    // const windowHeight = innerHeight;
    //   return windowHeight
// }
// function getWindowHeight() {
//    try {
//       const windowHeight = innerHeight;
//       return windowHeight
//    } catch (e) {
//       // [Vue warn]: Hydration node mismatch
//    }
// }
// const chartHeight = ` ${getWindowHeight() - 433.469}`;
// const planHeight = ` ${getWindowHeight() - 460}`;

// function definePlanHeight(){
//    try{
    //   const todoListEl = document.getElementById('todoListEl')
    //   todoListEl.style.height = `${planHeight}px`;
//    } catch(e){
      // Hydration completed but contains mismatches.
//    }
// }
// definePlanHeight();

const todoInput = ref('')
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

useHead({
   title: 'ISV | Dashboard'
})

</script>

<template>
   <div class="w-full h-full flex flex-col">
      <div class="w-full flex items-center justify-between bg-neutral rounded-xl text-base-100 px-3 py-1.5 shadow">
         <div class="flex items-center space-x-2">
            <Icon name="ic:outline-space-dashboard" size="40" />
            <h1 class="text-3xl font-medium">Dashboard</h1>
         </div>
         <div class="bt flex items-center text-base-100 space-x-2 mx-2 py-0">
            <Icon name="uil:server" size="36" />
            <div class="flex flex-col items-center -space-y-1.5">
               <h1 class="text-xl font-semibold tracking-wide">{{ serverUsed }} MB</h1>
               <p class="mb-1.5 font-medium">Server Used</p>
            </div>
         </div>
      </div>

      <div class="w-full grid grid-cols-5 gap-5 mt-5" >
         <div v-for="(gatget, index) in gatgets" :key="index">
            <nuxt-link :to=gatget.link
               class="h-full bg-neutral-content border-4 border-neutral hover:border-primary shadow-md hover:shadow-lg text-neutral-focus py-4 rounded-xl flex items-center justify-evenly duration-300">
               <div class="hidden 2xl:block">
                   <Icon :name=gatget.icon size="65" />
                </div>
                <div class="block 2xl:hidden">
                    <Icon :name=gatget.icon size="55"/>
                </div>
               <div class="flex flex-col text-center">
                  <p class="text-2xl font-bold">{{ gatget.value }}</p>
                  <p class="text-lg font-semibold">{{ gatget.title }}</p>
               </div>
            </nuxt-link>
         </div>
      </div>
      <div class="w-full h-full grid grid-cols-3 gap-5 mt-5">
         <div
            class="h-full flex flex-col p-4 bg-neutral border-4 border-neutral shadow-md text-neutral-focus rounded-xl">
            <div class="w-full flex justify-between items-center mb-4">
               <div class="flex items-center space-x-2 text-2xl font-medium text-base-100">
                  <Icon name="uil:clipboard-notes" size="32" />
                  <p>Your plan</p>
               </div>
               <!-- The button to open modal -->
               <label for="my-modal-1"
                  class="bg-primary text-base-100 font-semibold py-1 px-2 rounded-md hover:bg-primary-focus cursor-pointer">Add
                  list</label>

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
            <div class="w-full grid grid-cols-3 bg-neutral-content text-base-100">
               <div class="w-full h-8 bg-neutral flex items-end ">
                  <button class="w-full px-2 duration-300"
                     :class="{ 'h-full bg-neutral-content rounded-t-md text-neutral font-semibold': planTitle === 'today' }">Today</button>
               </div>
               <div class="w-full h-8 bg-neutral flex items-center justify-start rounded-bl-md ">
                  <button class="px-2 duration-300">
                     <Icon name="uil:plus" size="32" class="p-1 rounded-lg duration-300 hover:bg-neutral-focus" />
                  </button>
               </div>
               <div class="w-full bg-neutral"></div>
               <!-- <div class="w-full h-8 bg-neutral flex items-end rounded-bl-md duration-300" :class="{'rounded-bl-none':planTitle ==='week'}">
                  <button class="w-full px-2 duration-300" :class="{ 'h-full bg-neutral-content rounded-t-md text-neutral': planTitle === 'week' }" @click="planTitle = 'week'">Week</button>
               </div>
               <div class="w-full h-8 bg-neutral flex items-end">
                  <button class="w-full px-2 duration-300" :class="{ 'h-full bg-neutral-content rounded-t-md text-neutral': planTitle === 'month' }" @click="planTitle = 'month'">Month</button>
               </div> -->
            </div>
            <div class="w-full h-full rounded-lg rounded-tl-none bg-neutral-content p-1.5">
               <ul id="todoListEl"
                  class="w-full bg-base-100 font-semibold rounded-lg overflow-y-auto px-4 py-2 divide-y-2">
                  <li v-for="(todo, index) of todoList" class="flex items-center space-x-1 py-2">
                     <input v-model="todo.done" type="checkbox" class="checkbox border-2 checkbox-primary">
                     <span class="grow mb-1 px-2 decoration-2 decoration-double decoration-primary"
                        :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
                     <button class="mb-1 underline underline-offset-2 text-primary hover:text-primary-focus"
                        @click="deleteList(index)">remove</button>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>
