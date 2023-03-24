export interface Menu {
   name: string
   link: string
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
