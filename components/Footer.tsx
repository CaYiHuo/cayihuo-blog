import Link from "next/link";

import { Github, Mail, Tv } from "lucide-react";


function Footer() {
    return (
        <footer className="bg-white dark:bg-black shadow-md p-4 text-center border-t border-border">
            <div className="grid grid-cols-1 items-center gap-4 min-h-10 md:grid-cols-3 md:gap-0.5">
                <p className="text-sm text-text-secondary font-medium">
                    Copyright &copy; 2018-{new Date().getFullYear()} <Link href="https://github.com/cayihuo/cayihuo-blog" className="font-bold text-text-primary" target="_blank">CaYiHuo&apos;s Blog</Link>. 保留所有权利～
                </p>
                <p className="text-sm text-text-secondary font-medium">
                    谢谢你的来访，要常来玩哦～
                </p>
                <div className="flex justify-center items-center gap-4 text-sm text-text-secondary font-medium">
                    <Link href="https://github.com/cayihuo" className="text-text-primary font-bold" target="_blank">
                        <Github />
                    </Link>
                    <Link href="https://space.bilibili.com/3546972753496125" className="text-text-primary font-bold" target="_blank">
                        <Tv />
                    </Link>
                    <Link href="mailto:contact@cayihuo.com" className="text-text-primary font-bold" target="_blank">
                        <Mail />
                    </Link>
                </div>
            </div>
            <p className="text-sm text-text-secondary font-medium mt-4">
                Powered by :   
                <Link href="https://nextjs.org/" className="text-text-primary font-bold" target="_blank">Next.js</Link> 
                &amp; 
                <Link href="https://tailwindcss.com/" className="text-text-primary font-bold" target="_blank">Tailwind CSS</Link>
            </p>
        </footer>
    )
}

export default Footer