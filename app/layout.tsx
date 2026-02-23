import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaYiHuo(@CaYiHuo) - 全栈开发者 & 开源爱好者",
  description: "CaYiHuo - 提倡开源和现代化开发的全栈开发者，涉及前后端、Web移动端/桌面端应用、Godot游戏开发，掌握React、Zig、C#、Bun、Elysia等技术栈。",
  keywords: ["CaYiHuo", "全栈开发者", "开源爱好者", "React", "Zig", "C#", "Bun", "Elysia", "Web开发", "Godot游戏开发"],
  authors: [{ name: "CaYiHuo" }],
  openGraph: {
    title: "CaYiHuo(@CaYiHuo) - 全栈开发者 & 开源爱好者",
    description: "CaYiHuo - 提倡开源和现代化开发的全栈开发者，涉及前后端、Web移动端/桌面端应用、Godot游戏开发，掌握React、Zig、C#、Bun、Elysia等技术栈。",
    url: "https://cayihuo.xyz",
    siteName: "CaYiHuo(@CaYiHuo)",
    locale: "zh-CN",
    type: "website",
  },
  twitter: {
    title: "CaYiHuo(@CaYiHuo) - 全栈开发者 & 开源爱好者",
    description: "CaYiHuo - 提倡开源和现代化开发的全栈开发者，涉及前后端、Web移动端/桌面端应用、Godot游戏开发，掌握React、Zig、C#、Bun、Elysia等技术栈。",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'CaYiHuo',
              alternateName: 'CaYiHuo(@CaYiHuo)',
              description: '提倡开源和现代化开发的全栈开发者，涉及前后端、Web移动端/桌面端应用、Godot游戏开发，掌握React、Zig、C#、Bun、Elysia等技术栈。',
              url: 'https://cayihuo.xyz',
              image: 'https://cayihuo.xyz/cayihuo.png',
              jobTitle: '全栈开发者',
              worksFor: {
                '@type': 'Organization',
                name: 'EXOHUON',
                url: 'https://cayihuo.xyz'
              },
              knowsAbout: [
                'Web开发',
                '前端开发',
                '后端开发',
                'React',
                'Next.js',
                'Zig',
                'C#',
                'Bun',
                'Elysia',
                'Godot游戏开发'
              ],
              mainEntityOfPage: {
                '@type': 'WebSite',
                '@id': 'https://cayihuo.xyz',
                name: 'CaYiHuo(@CaYiHuo)',
                url: 'https://cayihuo.xyz',
                description: 'CaYiHuo的个人主页，展示技术能力、项目经验和开源贡献。',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://cayihuo.xyz/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <main>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}