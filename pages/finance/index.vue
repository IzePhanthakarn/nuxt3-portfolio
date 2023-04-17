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
const viewSelected = ref('Daily')
const viewList = ['All', 'Daily', 'Monthly', 'Yearly']
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const d = new Date();
const thisMonth = monthName[d.getMonth()]
const monthSelected = ref(thisMonth)
const yearList = ['2023']
const yearSelected = d.getFullYear();
const gatgets: Gatget[] = [
   { title: 'Total Income', icon: 'uil:money-withdraw', value: `${testimonial} Baht`, link: '/user' },
   { title: 'Total Expenses', icon: 'uil:money-insert', value: `${totalPlan} Baht`, link: '/plan' },
   { title: 'Total Balance', icon: 'uil:wallet', value: `${statusHealth} Baht`, link: '/health' },
   { title: 'Investment', icon: 'material-symbols:savings-outline-rounded', value: `${temperature} Baht`, link: '/' },
   { title: 'Total asset', icon: 'streamline:money-safe-vault-saving-combo-payment-safe-money-combination-finance', value: `${totalWallet} Baht`, link: '/wallet' }
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
            <Icon name="uil:wallet" size="40" />
            <h1 class="text-3xl font-medium">Finance</h1>
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
         <div class="w-full height-content">
            <div class="w-full height-table overflow-y-scroll rounded-xl">
               <div
                  class="h-full flex flex-col p-4 bg-neutral border-4 border-neutral shadow-md text-neutral-focus rounded-xl">
                  <div class="w-full flex justify-between items-center mb-4">
                     <div class="flex items-center space-x-2 text-2xl font-medium text-base-100">
                        <Icon name="icon-park-outline:notebook" size="32" />
                        <p>Cashbook</p>
                     </div>

                     <!-- The button to open modal -->
                     <div class="flex items-center space-x-2 text-white">
                        <form onsubmit="return false;" class="flex items-center space-x-2">
                           <select v-model="yearSelected" name="" id=""
                              v-show="viewSelected === 'Yearly' || viewSelected === 'Monthly'"
                              class="w-full bg-transparent cursor-pointer border-2 h-8 px-2 rounded-lg">
                              <option class="bg-neutral" v-for="(year, index) in yearList" :key="index" :value=year>{{
                                 year }}</option>
                           </select>

                           <select v-model="monthSelected" name="" id="" v-show="viewSelected === 'Monthly'"
                              class="w-full bg-transparent cursor-pointer border-2 h-8 px-2 rounded-lg">
                              <option class="bg-neutral" v-for="(month, index) in monthName" :key="index" :value=month>{{
                                 month }}</option>
                           </select>

                           <select v-model="viewSelected" name="" id=""
                              class="w-full bg-transparent cursor-pointer border-2 h-8 px-2 rounded-lg">
                              <option class="bg-neutral" v-for="(view, index) in viewList" :key="index" :value=view>{{
                                 view }}</option>
                           </select>

                           <Button type="submit" class="bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded-md font-semibold active:scale-95">Submit</Button>
                        </form>

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
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">Date</th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">List</th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">Type</th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">Type of List
                                    Color</th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">Amount</th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">Money Source
                                 </th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base py-2" colspan="4">Total
                                 </th>
                                 <th class="sticky top-0 text-center bg-neutral-content text-base" rowspan="2">Note</th>
                              </tr>
                              <tr>
                                 <th
                                    class="sticky top-10 text-center py-2 bg-violet-800 text-violet-100 text-base font-medium">
                                    SCB</th>
                                 <th
                                    class="sticky top-10 text-center py-2 bg-green-500 text-green-100 text-base font-medium">
                                    Cash</th>
                                 <th
                                    class="sticky top-10 text-center py-2 bg-orange-500 text-orange-100 text-base font-medium">
                                    TrueMoney</th>
                                 <th class="sticky top-10 text-center py-2 bg-gray-200 text-black text-base font-medium">
                                    All</th>
                              </tr>
                           </thead>
                           <tbody>
                              <!-- row 1 -->
                              <tr class="text-center">
                                 <td class="py-2">Apr 11, 2023</td>
                                 <td class="py-2">Remaining money from last month</td>
                                 <td class="py-2">-</td>
                                 <td class="py-2">-</td>
                                 <td class="py-2">-</td>
                                 <td class="py-2">-</td>
                                 <td class="py-2 bg-violet-200 text-violet-900">4000</td>
                                 <td class="py-2 bg-green-200 text-green-900">200</td>
                                 <td class="py-2 bg-orange-200 text-orange-900">200</td>
                                 <td class="py-2 bg-gray-100 text-black">4400</td>
                                 <td class="py-2">-</td>
                              </tr>

                              <!-- row 2 -->
                              <tr class="text-center">
                                 <td class="py-2">Apr 11, 2023</td>
                                 <td class="py-2">Money transfer from dad</td>
                                 <td class="py-2">Income</td>
                                 <td class="py-2">Salary</td>
                                 <td class="py-2">13000</td>
                                 <td class="py-2">SCB</td>
                                 <td class="py-2">17000</td>
                                 <td class="py-2">200</td>
                                 <td class="py-2">200</td>
                                 <td class="py-2">17400</td>
                                 <td class="py-2">-</td>
                              </tr>

                              <!-- row 3 -->
                              <tr class="text-center">
                                 <td class="py-2">Apr 11, 2023</td>
                                 <td class="py-2">Lunch</td>
                                 <td class="py-2">Expenses</td>
                                 <td class="py-2">Food</td>
                                 <td class="py-2">45</td>
                                 <td class="py-2">SCB</td>
                                 <td class="py-2">16955</td>
                                 <td class="py-2">200</td>
                                 <td class="py-2">200</td>
                                 <td class="py-2">16355</td>
                                 <td class="py-2">-</td>
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
   height: calc(100vh - 434px);
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
}
</style>