export interface Menu {
   name: string
   link: string
   activeLink: string[]
   icon: string
}

export interface homeAbout {
   year: string
   line1: string
   line2: string
}

export interface homeExperience {
   location: string
   department: string
   year: string
   duration: string
   detail: string
   link: string
   img?: string
   gpa?: string
   other?: string
}

export interface homeSkillTag {
   icon?: string
   name: string
   iconSize?: string
   link?: string
}

export interface homeProject {
   name: string
   description: string
   link: string
   tag: object
}

export interface homePricing {
   icon: String
   name: String
   price: String
   checkLists: String[]
   link: String
}

export interface portfolioCard {
   img: string
   name: string
   icon: string
   lastUpdate: string
   link: string
   description: string
   projectTag: string
   tags: object
   button?: string
}

export interface faqAccording {
   title: string
   isShow: boolean
   description: string
}

export interface Gatget {
   title: string
   icon: string
   value: string
   link: string
   role?: string
}

export interface TodoItem {
   text: string
   done: boolean
}