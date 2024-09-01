const currentYear = new Date().getFullYear().toString()
const websiteLaunchYear = "2023"

export const SITE_METADATA = {
  // meta data
  title: "Sajid | Full Stack Web Devloper",
  description: "A Full Stack Web developer with experience in Node Js, Next Js, React Js and Laravel(PHP).",
  language: "en-us",
  siteUrl: "https://astro-starter-blog.yon.fun/",
  socialBanner: "/static/images/twitter-card.png",
  locale: "en-US",
  // owner
  author: "Sajid",
  email: "sajid153957@gmail.com",
  github: "https://github.com/sajid2000",
  linkedin: "https://www.linkedin.com/in/sajid-bin-islam-05561316b/",
  copywriteYears: currentYear === websiteLaunchYear ? currentYear : `${websiteLaunchYear}-${currentYear}`,
}

export const NAVIGATION = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/blog", title: "Blog" },
]
