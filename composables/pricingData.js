export default {
   title: "Pricing Plan",
   plans: [
      {
         title: "Landing Page Website",
         slug: "landing-page",
         icon: "fluent:document-page-24-regular",
         price: 39.99,
         thPrice: 1499,
         checkLists: [
            "Free Design",
            "Free Domain Name",
            "Free support for the first 3 months",
            "Free server fee for the first 3 months",
            "Completed in 7-14 days",
         ],
         link: "/pricing/landing-page"
      },
      {
         title: "Multi-Page Website",
         slug: "multi-page",
         icon: "fluent:document-copy-24-regular",
         price: 79.99,
         thPrice: 2999,
         checkLists: [
            "Free Design",
            "Free Domain Name",
            "Free 7 web pages",
            "Free support for the first 6 months",
            "Free server fee for the first 6 months",
            "Completed in 15-30 days",
         ],
         link: "/pricing/multi-page"
      },
      {
         title: "Web Application",
         slug: "web-application",
         icon: "mdi:application-brackets-outline",
         price: 169.99,
         thPrice: 5999,
         checkLists: [
            "Free Design",
            "Free Domain Name",
            "Free 12 web pages",
            "Free 12 Rest APIs",
            "Free support for the first 12 months",
            "Free server for the first 12 months",
            "Free database for the first 12 months.",
            "Completed in 1-3 months",
         ],
         link: "/pricing/web-application"
      }
   ]
};
