'use client'
import Image from "next/image"
import { toast } from "sonner";
import CardItem from "./CardItem";



function Main() {
    return (
        <main className=" mx-auto flex flex-col items-center justify-center">
            <Hero/>
            <Iam/>
            <About/>
        </main>
    )
}

function Hero() {

    const toastTool = (type: string, index: string) => {
    if (type === "success") toast.success(index);
    else if (type === "error") toast.error(index);
    else if (type === "info") toast.info(index);
    else if (type === "warning") toast.warning(index);
    else toast(index);
  };

    const about_toast = () => {

    const AboutText = [
        { text: '你好～我是CaYiHuo，很高兴认识你！', type: 'success' },
        { text: '欢迎来到我的个人博客，这里是我的小天地～', type: 'info' },
        { text: '我是一个喜欢二次元的普通人类，偶尔写点东西～', type: 'info' },
        { text: '很高兴你能来我的博客玩！', type: 'success' },
        
        { text: '我喜欢看动漫、玩游戏，还喜欢分享有趣的事～', type: 'info' },
        { text: '最近在追什么番？推荐给我吧！', type: 'info' },
        { text: '你喜欢二次元吗？我们可以一起讨论哦～', type: 'success' },
        { text: '游戏荒了，有什么好玩的游戏推荐吗？', type: 'warning' },
  
        { text: '今天天气真好，适合看动漫～', type: 'info' },
        { text: '最近有点忙，更新可能会慢一点～', type: 'warning' },
        { text: '今天也要开心哦！', type: 'success' },
        { text: '谢谢你的支持，我会继续努力的！', type: 'success' },
  
        { text: '你发现了一个小秘密！', type: 'success' },
        { text: '恭喜你，获得了一个虚拟的小礼物～', type: 'success' },
        { text: '你的手速真快！', type: 'warning' },
        { text: '别戳我啦，我会害羞的～', type: 'info' },
  
        { text: '如果你有什么想对我说的，欢迎告诉我～', type: 'info' },
        { text: '你喜欢这个博客的风格吗？', type: 'info' },
        { text: '有什么想看的内容？我会尽力更新的～', type: 'success' },
        { text: '期待和你成为朋友！', type: 'success' },
      
    ];
    const maxindex = Math.floor(Math.random() * AboutText.length);
    const index = AboutText[maxindex];
     toastTool(index.type, index.text);
}
    

    return (
        <section className="about bg-white dark:bg-black w-full min-h-lvh flex flex-col items-center justify-center gap-y-3">
            <button onClick={() => about_toast()} className="transition-colors">
                <Image 
                    src="/cayihuo.png"
                    alt="avatar"
                    className="w-32 h-32 rounded-full"
                    width={128}
                    height={128}
                />
            </button>
            <h1 className="text-4xl font-bold text-text-primary dark:text-text-secondary">
                CaYiHuo
            </h1>
            <div className="tags flex flex-wrap items-center justify-center gap-2">
                <span className="tag bg-primary text-white dark:text-black px-2 py-1 rounded-full text-sm">
                    二次元
                </span>
                <span className="tag bg-primary text-white dark:text-black px-2 py-1 rounded-full text-sm">
                    编程
                </span>
                <span className="tag bg-primary text-white dark:text-black px-2 py-1 rounded-full text-sm">
                    分享
                </span>
            </div>
            <p className="text-lg text-text-secondary font-medium">
                喜欢创造有趣的东西，很高兴认识你～
            </p>
        </section>
    )
}

function Iam() {
    return (
        <section className="about bg-white dark:bg-black w-full min-h-lvh flex flex-col items-center justify-center gap-y-3">
            <h1 className="text-4xl font-bold text-text-primary dark:text-text-secondary">
                i am 
            </h1>
            <div className="container grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <CardItem 
                title="CEO & 核心创始人" 
                description="负责管理和发展EXOHUON团队, 确保其在技术领域的创新和发展." 
            />
            <CardItem 
                title="开源社区贡献者" 
                description="活跃在多个开源项目中，为技术社区做出了贡献" 
            />
            <CardItem 
                title="Web 开发者 " 
                description="精通 React, Next.js, Tailwind CSS 等前后端技术, 能够独立开发和维护 Web 应用."  
            />
            </div>
        </section>
    )
}

function About() {
    return (
        <section className="about bg-white dark:bg-black w-full min-h-lvh flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-4xl font-bold text-text-primary dark:text-text-secondary">
                About me
            </h1>
            <div className="max-w-2xl text-center space-y-4">
                <p className="text-lg text-text-secondary font-medium">
                    我是CaYiHuo，一名提倡开源和现代化开发的前端开发者。
                </p>
                <p className="text-lg text-text-secondary font-medium">
                    我热爱编程，尤其是Web开发，擅长使用 React、Next.js、Tailwind CSS、Bun 等现代化技术栈。
                    我相信技术的力量，希望通过代码创造出有趣且实用的产品。
                </p>
                <p className="text-lg text-text-secondary font-medium">
                    作为开源的坚定支持者，我积极参与开源社区，为各种项目贡献代码。
                    我认为开源精神不仅能推动技术进步，还能让开发者们互相学习、共同成长。
                </p>
                <p className="text-lg text-text-secondary font-medium">
                    在开发过程中，我追求代码的优雅性和可维护性，注重用户体验。
                    我相信好的代码应该像艺术品一样，既美观又实用。
                </p>
                <p className="text-lg text-text-secondary font-medium">
                    除了编程，我也是一名二次元爱好者，喜欢追番、玩游戏。
                    我觉得编程和二次元并不冲突，反而能给我带来更多创意和灵感。
                </p>
                <p className="text-lg text-text-secondary font-medium">
                    如果你对我的项目感兴趣，或者想和我交流技术，欢迎随时联系我！
                </p>
            </div>
        </section>
    )
}

export default Main