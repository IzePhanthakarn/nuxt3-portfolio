<script setup lang="ts">
let name: string = ""
let relationship: string = ""
let description: string = ""
const score = ref(0)
const displayScoreAll = ref(true)
const showImg = ref('')
const profileImage = ref([])
function clearScore() {
    score.value = 0
    displayScoreAll.value = true
}
function selectScore() {
    displayScoreAll.value = false
}
const isBot = ref(true);
function checkHuman() {
    isBot.value = false
}

function selectFile(e: any) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;
    createImage(files[0]);
    profileImage.value = files;

}

function createImage(file: File) {
    var reader = new FileReader();
    reader.onload = (e: any) => {
        showImg.value = e.target.result;

    };
    reader.readAsDataURL(file);
}
async function formRequest(formData: any) {
    return await $fetch('https://go-portfolio.onrender.com/testimonials', {
        method: 'POST',
        body: formData,
    });
}

function validateForm(form: any) {
    let error = ""
    if (form.name === "") error = "Please enter your name"
    else if (form.relationship === "") error = "Please enter your relationship"
    else if (form.image === "") error = "Please choose your image"
    else if (form.description === "") error = "Please enter your opinion"
    else error = ""
    return error
}

function formSubmit() {
    let form = {
        name,
        relationship,
        description,
        score: score.value,
        image: profileImage.value,
    };

    let error = validateForm(form);
    if (error != "") {
        // @ts-ignore
        $toast.open({
            message: error,
            type: "error",
            position: "top-right"
        });
        return;
    }

    let formData = new FormData();
    formData.append('name', name);
    formData.append('relationship', relationship);
    formData.append('description', description);
    formData.append('score', score.value.toString());
    formData.append('image', profileImage.value[0]);

    formRequest(formData).then((result) => {
        isOpen.value = true
    }).catch((error) => {
        notification(error, 'error', 3000)
    });
}

// Notification Toast
const { $toast  } = useNuxtApp();
function notification(message: string, type: string, duration: number) {
    // @ts-ignore
    $toast.open({
        message: message,
        type: type,
        position: 'top-right',
        duration
    });
}

const isOpen = ref(false);

function toTestimonial() {
    navigateTo('/testimonials');
}

</script>

<template>
    <div class="w-full height-screen text-white flex pt-24 ">
        <div class="container mx-auto px-5 flex flex-col">

            <!-- Title -->
            <div data-aos="fade">
                <h1 class="head after:content-['what_people_say'] after:bg-color-base before:bg-primary mx-auto">
                    Testimonials</h1>
            </div>

            <div @click="$router.go(-1)"
                class="flex mr-0 ml-auto items-center space-x-1 border-2 w-fit py-1 pl-0.5 pr-2 rounded-lg cursor-pointer duration-100 hover:border-primary">
                <Icon name="material-symbols:arrow-right-alt-rounded" class="rotate-180" />
                <p>Back</p>
            </div>

            <div class="w-full mt-4 bg-[#222434] p-4 pb-2 rounded-xl">
                <div class="flex space-x-2 items-center">
                    <Icon name="line-md:document-add" size="40" />
                    <h1 class="text-3xl font-medium">Add your opinion</h1>
                </div>
                <hr class="mt-4">
                <form onsubmit="return false;" class="p-4 grid grid-cols-12 gap-x-8 pt-8">
                    <div
                        class="login__box mb-0 mt-auto h-14 col-span-3 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                        <Icon name="uil:user-square" class="login__icon" size="36" />
                        <div class="relative">
                            <input type="text" v-model="name"
                                class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]"
                                placeholder=" " spellcheck="false">
                            <label class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Name</label>
                        </div>
                    </div>

                    <div
                        class="login__box mb-0 mt-auto h-14 col-span-3 grid pb-[2px] items-center gap-x-2 border-b-2 border-white">
                        <Icon name="uil:users-alt" class="login__icon" size="36" />
                        <div class="relative">
                            <input type="text" v-model="relationship"
                                class="login__input w-full py-3 pb-2 outline-none bg-transparent relative z-[1]"
                                placeholder=" " spellcheck="false">
                            <label
                                class="login__label absolute left-0 top-2 duration-300 font-medium text-lg">Relationship</label>
                        </div>
                    </div>

                    <div class="col-span-3 h-16 flex items-end space-x-2">
                        <div v-if="showImg" class="w-16">
                            <div class="w-20 rounded-full">
                                <img :src="showImg" class="h-16 w-16 object-cover rounded-full border-2 border-white" />
                            </div>
                        </div>

                        <div class="form-control w-full max-w-xs -mb-1">
                            <label class="label">
                                <span class="label-text text-white text-lg">Choose your image</span>
                            </label>
                            <input type="file" accept=".jpeg,.jpg,.png,image/jpeg,image/png" @change="selectFile"
                                class="file-input bg-color-base file-input-bordered file-input-sm w-full max-w-xs" />
                        </div>
                    </div>

                    <div class="w-full flex space-x-4 col-span-3 items-end justify-center">
                        <div class="column-1 -mb-1">
                            <p class="text-lg font-medium ml-2.5">Select my score: <span>{{
                                score }}/10</span> </p>
                            <div class="w-full flex rating rating-lg rating-half">
                                <input type="radio" name="rating-10" value="0" v-model="score" class="rating-hidden" />
                                <input type="radio" name="rating-10" value="1" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="2" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="3" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="4" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="5" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="6" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="7" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="8" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                                <input type="radio" name="rating-10" value="9" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-1" @change="selectScore" />
                                <input type="radio" name="rating-10" value="10" v-model="score"
                                    class="bg-primary mask mask-star-2 mask-half-2" @change="selectScore" />
                            </div>
                        </div>
                        <div @click="clearScore"
                            class="border-2 flex py-1 px-2 justify-center items-center rounded cursor-pointer duration-300 hover:border-primary active:scale-95">
                            Clear score</div>
                    </div>

                    <div class="col-span-12 flex flex-col mt-8 pb-0.5">
                        <label for="description" class="mb-1 text-lg font-medium">Your Opinion:</label>
                        <textarea name="description" v-model="description" rows="5" class="rounded-xl bg-gray-700 p-2"
                            spellcheck=false></textarea>
                    </div>

                    <div class="mt-4 flex flex-col sm:flex-row col-span-12 items-center justify-end space-x-4">

                        <vue-friendly-captcha sitekey="FCMLH6SG8H3PT7BE" :dark=true startMode="none" :onDone="checkHuman" />
                        <div
                            class="w-full sm:w-fit pr-2 mr-0 sm:mr-auto ml-auto mt-4 sm:mt-0 mb-2 sm:mb-0 col-span-3 sm:col-span-1 flex items-center justify-end"
                            :class="{ 'pointer-events-none border-gray-500 text-gray-500': isBot }" >
                            <button type="submit" @click="formSubmit"
                                class="px-2.5 py-1.5 border-2 rounded-xl text-lg flex items-center overflow-hidden duration-300 hover:border-primary">
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <Icon name="lucide:send" />
                                    </div>
                                </div>
                                <span class="font-medium">Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="prevent-box bg-color-base2 border-2 border-color-base w-11/12 sm:w-2/3 lg:w-auto flex flex-col items-center justify-center text-default font-medium"
            :class="{ 'active': isOpen }">
            <h1 class="py-4 px-8 text-2xl">Your opinion has been submitted successfully</h1>
            <hr class="border-t w-full">
            <Icon class="p-5" name="line-md:confirm-circle" size="200" />
            <p class="px-8 text-center">Thank you for your interest and telling me about your opinion of me.<br>I will
                review and take your comments as soon as possible.</p>
            <BaseButton class="mb-6 mt-8 mr-6 ml-auto" @click="toTestimonial">Thanks !</BaseButton>
        </div>
        <div class="overlay" :class="{ 'active': isOpen }"></div>
    </div>
</template>

<style scoped>
.height-screen {
    height: calc(100vh - 64px);
}

.login__box {
    grid-template-columns: max-content 1fr;
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