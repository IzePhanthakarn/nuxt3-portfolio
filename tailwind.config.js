import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  theme: {
    extend: {
      colors: {
        'primary' : "#f13637",
        'color-base' : "#171820",
        'color-base2' : "#222434"
      },
      keyframes: {
         floaty: {
           "0%": { transform: "translateY(0)" },
           "100%": { transform: "translateY(15px)" },
         },
         scrolldown: {
           "0%": { opacity: 0, height: "6px" },
           "40%": { opacity: 1, height: "10px" },
           "80%": { transform: "translate(0, 10px)", height: "10px", opacity: 0 },
           "100%": { height: "3px", opacity: 0 },
         },
         pulse: {
           "from": { opacity: '0' },
           "to": { opacity: '.5' }
         }
       },
       animation: {
         floaty: "floaty 2.5s infinite alternate",
         scrolldown: "scrolldown 1.2s infinite",
         pulse: "pulse 500ms ease infinite alternate",
         pulse2: "pulse 500ms ease infinite alternate 250ms"
       },
       backgroundImage:{
        'login-page' : "url('/bg/relax-cafe.jpg')"
       }
    }
  }
}
