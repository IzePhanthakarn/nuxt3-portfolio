import AOS from 'aos'

import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({
          delay: 50,
          easing: 'ease-in-out',
          duration: 500
      });
    }
})
// n = int(input())
// for i in range(1, n+1):
//     if i % 2 != 0: 
//         print(i) 