import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://bourhanbouacida-github-io.pages.dev/",
    title: "B0urh4n",
    description: "Newbie today, but not tomorrow.",
    author: "Bourhan Bouacida",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Africa/Algiers",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/BourhanBouacida" },
    { name: "linkedin", url: "https://www.linkedin.com/in/bourhan-bouacida/" },
    { name: "x",        url: "https://x.com/BourhanBouacida" },
    { name: "facebook", url: "https://www.facebook.com/Bourhan.Bouacida.OFFICIEL1/" },
    { name: "mail",     url: "mailto:goldenbourhane@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});