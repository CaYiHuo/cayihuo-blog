"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { Contrast, Star } from "lucide-react";

function Nav() {
  const pathname = usePathname();

  const [LogotoastValue, setLogotoastValue] = useState(0);
  const [lastToastTime, setLastToastTime] = useState(0);
  const [linkToastValue, setLinkToastValue] = useState(0);

  const toastTool = (type: string, index: string) => {
    if (type === "success") toast.success(index);
    else if (type === "error") toast.error(index);
    else if (type === "info") toast.info(index);
    else if (type === "warning") toast.warning(index);
    else toast(index);
  };

  const logo_toastx = () => {
    const now = Date.now();
    const cooldown = 1000;
    if (now - lastToastTime < cooldown) return;

    setLastToastTime(now);
    setLogotoastValue(LogotoastValue + 1);

    const eggText = [
      { text: "欢迎来到我的小窝！", type: "success" },
      { text: "这里是我的秘密基地，专门分享有趣的事～", type: "success" },
      { text: "你发现这个彩蛋啦？真是个小机灵鬼！", type: "info" },
      { text: "初次见面，请多关照～", type: "success" },
      { text: "欢迎回来！又见面啦～", type: "success" },
      { text: "嗨～今天过得怎么样？", type: "info" },

      { text: "试试点击友链，看看我的朋友们～", type: "info" },
      { text: "切换一下主题，感受不同的氛围！", type: "warning" },
      { text: "博客还在建设中，会慢慢更新更多有趣内容～", type: "info" },
      { text: "往下翻翻看，有更多惊喜哦～", type: "info" },
      { text: "你已经探索得很深入了呢～", type: "success" },
      { text: "继续加油，还有更多彩蛋等你发现！", type: "success" },

      { text: "恭喜你发现了一个小惊喜！", type: "success" },
      { text: "给你一个虚拟的小礼物～", type: "success" },
      { text: "今天的幸运值爆表啦！", type: "success" },
      { text: "解锁成就：彩蛋探索者！", type: "success" },
      { text: "你是第一个看到这里的人吗？", type: "success" },
      { text: "哇～你真的很有耐心呢！", type: "success" },

      { text: "如果你有喜欢的兴趣，欢迎告诉我～", type: "info" },
      { text: "最近在忙什么？分享给我吧！", type: "info" },
      { text: "你最喜欢的事情是什么？", type: "info" },
      { text: "有什么想看的内容？我会尽力更新的～", type: "info" },
      { text: "你的支持是我最大的动力！", type: "success" },
      { text: "谢谢你的喜欢，我会继续努力的！", type: "success" },

      { text: "今天天气真好，适合做喜欢的事～", type: "info" },
      { text: "记得多喝水，保持元气满满！", type: "warning" },
      { text: "休息一下，再继续探索吧～", type: "info" },
      { text: "最近有没有遇到什么有趣的事？", type: "info" },
      { text: "今天也要开心哦～", type: "success" },
      { text: "加油，你是最棒的！", type: "success" },

      { text: "叮！触发随机事件：获得幸运星×1", type: "success" },
      { text: "恭喜你，抽到了一张幸运卡！", type: "success" },
      { text: "你的幸运值上升了！", type: "success" },
      { text: "触发隐藏剧情：与神秘朋友相遇", type: "info" },
      { text: "解锁新场景：神奇世界", type: "success" },
      { text: "获得成就：幸运星", type: "success" },

      { text: "今天的运势：大吉！", type: "success" },
      { text: "祝你今天一切顺利～", type: "success" },
      { text: "愿你的每一天都充满阳光！", type: "success" },
      { text: "送给你满满的正能量！", type: "success" },
      { text: "希望你能找到属于自己的快乐～", type: "success" },
      { text: "祝你和喜欢的人永远在一起！", type: "success" },

      { text: "你已经觉醒了神奇力量！", type: "success" },
      { text: "获得道具：幸运符", type: "success" },
      { text: "你的能量爆发了！", type: "success" },
      { text: "发动技能：快乐光波！", type: "success" },
      { text: "召唤成功：幸运精灵！", type: "success" },
      { text: "进入神秘空间：快乐星球", type: "success" },

      { text: "你又来啦～欢迎欢迎！", type: "success" },
      { text: "点击的感觉怎么样？", type: "info" },
      { text: "我就知道你会喜欢这里～", type: "success" },
      { text: "继续点击，还有更多惊喜哦～", type: "info" },
      { text: "你真是个有趣的人呢～", type: "success" },
      { text: "今天的点击次数达标啦！", type: "success" },

      { text: "这是最后一个彩蛋啦，谢谢你的陪伴！", type: "success" },
      { text: "期待下次和你在这里相遇～", type: "success" },
      { text: "彩蛋之旅结束啦，希望你玩得开心～", type: "success" },

      { text: "彩蛋收集完成！刷新页面可以重新体验哦～", type: "success" },
    ];

    const maxIndex = eggText.length - 1;
    const index = LogotoastValue <= maxIndex ? LogotoastValue : maxIndex;
    const egg = eggText[index];
    toastTool(egg.type, egg.text);
  };

  const link_toastx = (href: string) => {
    if (!(href === pathname)) return;

    setLinkToastValue(linkToastValue + 1);

    const linkText = [
      { text: "你已经在这里啦～", type: "info" },
      { text: "不要重复点击啦～", type: "warning" },
      { text: "这里就是你的目的地！", type: "success" },
      { text: "你已经在正确的位置了～", type: "info" },
      { text: "别着急，慢慢来～", type: "warning" },
      { text: "这里的风景不错吧？", type: "success" },
      { text: "继续探索其他地方吧～", type: "info" },
      { text: "你对这里很感兴趣嘛～", type: "success" },
    ];
    const maxindex = linkToastValue % linkText.length;
    const index = linkText[maxindex];

    toastTool(index.type, index.text);
  };

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-border">
      <div className="container flex justify-between items-center mx-auto py-4">
        <div className="logo-connent flex items-center gap-2">
          <Link
            href="/"
            onClick={logo_toastx}
            className="logo flex items-center gap-2"
          >
            <Avatar>
              <AvatarImage src="/cayihuo.png" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <span className="logo-text font-bold text-sm text-primary">
              CaYiHuo
            </span>
          </Link>
        </div>
        <div className="text-content flex flex-1 justify-end md:justify-between items-center mx-auto px-4 gap-4">
          <div className="left-content flex items-center gap-2">
            <Link
              href="/"
              className="transition-colors flex items-center gap-1 group hover:text-purple-600"
              onClick={() => link_toastx("/")}
            >
              <Star className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              首页
            </Link>
            <Link
              href="/friends"
              className="transition-colors flex items-center gap-1 group hover:text-purple-600"
              onClick={() => link_toastx("/friends")}
            >
              <Star className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              友链
            </Link>
          </div>
          <div className="right-content flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    return (
      <button className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toast.success(theme === "dark" ? "切换到浅色模式" : "切换到深色模式");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <Contrast className="h-5 w-5" />
    </button>
  );
}

export default Nav;
