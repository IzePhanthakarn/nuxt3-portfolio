// import VueFriendlyCaptcha from '@somushq/vue3-friendly-captcha';

// export default defineNuxtPlugin(function (nuxtApp) {
//     nuxtApp.vueApp.component('VueFriendlyCaptcha', VueFriendlyCaptcha);
//   });
import QrcodeVue from 'qrcode.vue';

export default defineNuxtPlugin(function (nuxtApp) {
    nuxtApp.vueApp.component('qrcode-vue', QrcodeVue);
  });