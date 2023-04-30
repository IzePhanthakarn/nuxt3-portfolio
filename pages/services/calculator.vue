<script setup lang="ts">
definePageMeta({
  layout: "service",
});

const pressedKey = ref("");
const keyEmit = (e: Event) => {
  const targetValue = (e.target as HTMLButtonElement).value;
  pressedKey.value = pressedKey.value.replaceAll("x", "*");
  switch (targetValue) {
    case "DEL":
      pressedKey.value = pressedKey.value.slice(0, -1);
      break;
    case "Reset":
      pressedKey.value = "";
      break;
    case "Enter":
      if (
        pressedKey.value.endsWith("*") ||
        pressedKey.value.endsWith("+") ||
        pressedKey.value.endsWith("-") ||
        pressedKey.value.endsWith("/") ||
        pressedKey.value.endsWith(".")
      ) {
        break;
      }
      pressedKey.value = eval(
        /^0+\D/.test(pressedKey.value)
          ? pressedKey.value.replace(/^0+/, "0")
          : pressedKey.value.replace(/^0+/, "")
      ).toString();
      break;
    case "+":
    case "-":
    case "/":
    case "x":
    case ".":
      const lastChar = pressedKey.value.slice(-1);
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "/" ||
        lastChar === "*" ||
        lastChar === "."
      ) {
        pressedKey.value = pressedKey.value.slice(0, -1) + targetValue;
      } else {
        pressedKey.value += targetValue;
      }
      break;
    default:
      pressedKey.value += targetValue;
      break;
  }
};
</script>

<template>
  <div class="w-full pt-20 text-white">
    <div class="w-full height-screen-content flex flex-col items-center justify-center">
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
              <Icon name="uil:calculator-alt" class="mr-1" />
              Calculator
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
        <div class="border-[3px] rounded-2xl p-4 pt-3 w-fit">
          <div class="w-full flex items-center justify-between text-xl mb-2 font-medium">
            <h1 class="text-3xl">Calculator</h1>
            <p>Web <span class="text-primary">Services</span></p>
          </div>
          <CalculatorDisplay :pressedKey="pressedKey" />
          <CalculatorBody @display:model-value="keyEmit" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.height-screen-content {
  height: calc(100vh - 144px);
}
</style>