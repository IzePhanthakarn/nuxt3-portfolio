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
   other? : string
}
