const currentYear = new Date().getFullYear();
const data = {
    sitename: "Cosmeticure",
    sitetagline: "Something great is on the way! ✨ 🔥",
    siteurl: "https://maps.app.goo.gl/N2KQHupDAMFPZC2JA?g_st=aw",
    sitelogo: "/cosmeticure-logo.png",
    title: "Coming Soon!",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://appcorp.org">App Corp</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/p/CosmetiCure-100065163091928/",
        },
        {
            icon: "instagram",
            link: "https://www.instagram.com/cosmeticure/",
        },
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
