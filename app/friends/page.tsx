import Nav from "@/components/Nav"
import Main from "@/components/FriendsMain"
import Footer from "@/components/Footer"




function Friends() {
  return (
    <>
        <Nav />
        <Main />
        <Footer />
    
    </>
  )
}

export const metadata = {
    title: "友链 | CaYiHuo(@CaYiHuo)",
    description: "这里是我的朋友们，它们都是我关注的人，分享了他们的技术、项目、生活经验。",
    authors: [{ name: "CaYiHuo" }],
    openGraph: {
    title: "友链 | CaYiHuo(@CaYiHuo)",
    description: "这里是我的朋友们，它们都是我关注的人，分享了他们的技术、项目、生活经验。",
    url: "https://cayihuo.xyz/friends",
    siteName: "CaYiHuo(@CaYiHuo)",
    locale: "zh-CN",
    type: "website",
  },
  twitter: {
    title: "友链 | CaYiHuo(@CaYiHuo)",
    description: "这里是我的朋友们，它们都是我关注的人，分享了他们的技术、项目、生活经验。",
    card: "summary_large_image",
  },
}
export default Friends
