<script setup>
definePageMeta({
    layout: "service",
});

const textInput = ref('');
const marginQR = ref(1);
const backgroundQR = ref('#ffffff')
const foregroundQR = ref('#000000')
function downloadQR() {
    var link = document.createElement("a");
    link.setAttribute('download', "QRCodeGenerator");
    let canvas = document.getElementById("qrcanvas");
    let image = canvas.toDataURL("image/png");
    link.href = image;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
</script>

<template>
    <div class="w-full pt-20 text-white">
        <div class="w-full height-screen-content flex flex-col items-center justify-center relative">
            <div class="w-full flex items-center space-between pr-8">

                <div class="text-lg text-white breadcrumbs pl-8">
                    <ul>
                        <li>
                            <NuxtLink to="/services">
                                <Icon name="uil:shutter-alt" class="mr-1" />
                                Web Services
                            </NuxtLink>
                        </li>

                        <li>
                            <Icon name="uil:qrcode-scan" class="mr-1" />
                            QR Code Generator
                        </li>
                    </ul>
                </div>

                <div @click="navigateTo(`/services`)"
                    class="flex mr-0 ml-auto items-center space-x-1 border-2 w-fit py-1 pl-0.5 pr-2 rounded-lg cursor-pointer duration-100 hover:border-primary">
                    <Icon name="material-symbols:arrow-right-alt-rounded" class="rotate-180" />
                    <p>Back</p>
                </div>
            </div>

            <div class="w-11/12 h-full mx-auto flex items-center justify-center">
                <div class="border-[3px] rounded-2xl p-4 pt-5 w-[500px]">
                    <div class="w-full flex items-center justify-between text-xl mb-2 font-medium">
                        <h1 class="text-2xl">QR Code Generator</h1>

                        <p>Web <span class="text-primary">Services</span></p>
                    </div>
                    <hr>
                    <div class="mt-3 text-white">
                        <div class="w-full flex items-center space-x-2">
                            <label class="text-lg mb-1 whitespace-nowrap">Text Input:</label>
                            <input type="text" v-model="textInput" class="w-full bg-color-base2 p-2 outline-0 rounded-lg">
                        </div>
                        <div class="flex justify-around mt-3">
                            <div class="flex items-center space-x-2">
                                <label>Margin:</label>
                                <input type="number" min="1" max="3" v-model="marginQR" class="text-center bg-color-base2 h-8 font-medium text-lg rounded-lg">
                            </div>
                            <div class="flex items-center space-x-2">
                                <label>Background:</label>
                                <input type="color" v-model="backgroundQR" class="color-input" />
                            </div>
                            <div class="flex items-center space-x-2">
                                <label>Foreground:</label>
                                <input type="color" v-model="foregroundQR" class="color-input" />
                            </div>
                        </div>
                        <div class="w-full mt-4 flex justify-center h-80">
                            <div class="border w-[300px] h-[300px] rounded-xl">
                                <qrcode-vue id="qrcanvas" :value="textInput" :size=300 :margin=marginQR :background=backgroundQR :foreground=foregroundQR  level="H"
                                    class="rounded-lg" :class="{ 'hidden': textInput === '' }" />
                            </div>
                        </div>
                        <button @click="downloadQR"
                            class="w-full py-4 flex itmes-center justify-center bg-primary uppercase rounded-xl text-xl font-medium tracking-wide hover:bg-red-600 duration-100"
                            :class="{ 'opacity-50 pointer-events-none': textInput === '' }">Download</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.height-screen-content {
    height: calc(100vh - 144px);
}

.color-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.color-input::-webkit-color-swatch {
  border-radius: 50%;
  border: 2px solid #fff;
}
.color-input::-moz-color-swatch {
  border-radius: 50%;
  border: 2px solid #fff;
}
</style>