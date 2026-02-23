'use client'
import { toast } from "sonner";

import FriendsList from "./FriendsList"



function FriendsMain() {
    return (
        <main className="mx-auto flex flex-col items-center justify-center">
            <Hero/>
        </main>
    )
}

function Hero() {
    return (
        <div className="bg-white dark:bg-black w-full h-lvh flex flex-col items-center justify-center text-center gap-y-3">
            <h1 className="text-4xl font-bold text-text-primary dark:text-text-secondary">
                友链站点
            </h1>
            <p className="text-lg text-text-secondary font-medium">
                这里是友链站点，你可以在里面找到我分享的一些有趣的东西，也可以在里面找到一些有趣的人。
            </p>
            <p className="text-lg text-text-secondary font-medium">
                您可以在下面的表单中添加您的站点，我会在审核通过后添加到友链中。
            </p>
            <h2 className="text-2xl font-bold text-text-primary dark:text-text-secondary mt-10">
                添加您的站点
            </h2>

            <button className="rounded-md p-2 border border-primary text-primary font-bold text-sm transition-colors duration-300 px-4 py-2" onClick={() => toast.info("请联系我添加友链")}>
                添加您的站点
            </button>

            <FriendsList />
            
        </div>
    )
}

export default FriendsMain
