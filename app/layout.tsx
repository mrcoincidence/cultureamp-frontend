'use client';

import { useState } from "react";
import Link from "next/link";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { ChevronDown, Menu } from "lucide-react";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans text-black bg-[#FEFBF9] antialiased overflow-x-hidden min-h-screen flex flex-col justify-between`}>
        
        {/* ==================== HEADER ==================== */}
        <header className="sticky top-0 z-50 bg-[#FEFBF9] border-b border-[#EFE7E0]">
          <nav className="container py-[14px] grid grid-cols-[auto_1fr] desktop:grid-cols-[1fr_auto_1fr] gap-x-6 items-center">
            
            {/* 1. 左: ロゴ */}
            <div className="flex items-center">
              <Link href="/" className="py-2 px-2.5 -ml-2.5 w-fit hover:opacity-80 transition-opacity">
                <img 
                  src="/Logo-black.svg" 
                  alt="Culture Amp" 
                  className="w-[130px] tablet:w-[160px] h-auto object-contain block" 
                />
              </Link>
            </div>
            
            {/* 2. 中央: ナビゲーション (5項目) */}
            <div className="hidden desktop:flex items-center justify-center gap-x-1.5 relative">
              
              <Link href="/platform" className="nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap">
                プラットフォーム <ChevronDown size={14} />
              </Link>

              {/* ソリューション (メガドロップダウン) */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${isSolutionsOpen ? 'bg-[#FAF5F2]' : ''}`}>
                  ソリューション <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* メガドロップダウン（余白サイズ適正化 ＋ 各項目1行表示） */}
                {isSolutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-24 grid grid-cols-3 gap-x-20 text-left">
                      
                      {/* 1. リーダークラス */}
                      <div>
                        <p className="text-[11px] font-bold text-[#524F4C] uppercase tracking-wider mb-12 px-12">
                          リーダークラス
                        </p>
                        <ul className="space-y-1">
                          <li>
                            <Link href="/solutions/chro" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              人事代表 (CHRO)
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/hr-director" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              人事リーダー
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/cfo" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              CFO
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/cio" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              CIO / CTO
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* 2. 業界 */}
                      <div>
                        <p className="text-[11px] font-bold text-[#524F4C] uppercase tracking-wider mb-12 px-12">
                          業界
                        </p>
                        <ul className="space-y-1">
                          <li>
                            <Link href="/solutions/professional-services" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              専門職サービス
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/financial-services" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              金融サービス
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/software-technology" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              IT＆テック系スタートアップ
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/manufacturing" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              製造業
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* 3. 会社規模 */}
                      <div>
                        <p className="text-[11px] font-bold text-[#524F4C] uppercase tracking-wider mb-12 px-12">
                          会社規模
                        </p>
                        <ul className="space-y-1">
                          <li>
                            <Link href="/solutions/enterprise" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              大企業エンタープライズ
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/commercial" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
                              中小・成長企業
                            </Link>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              <Link href="/science/people-science" className="nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap">
                ツール <ChevronDown size={14} />
              </Link>
              <Link href="/resources" className="nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap">
                情報 <ChevronDown size={14} />
              </Link>
              <Link href="/company" className="nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap">
                会社 <ChevronDown size={14} />
              </Link>
            </div>

            {/* 3. 右: CTAボタン */}
            <div className="flex items-center justify-end gap-x-4">
              <button className="button button--primary text-16">
                デモを予約
              </button>
              <button className="desktop:hidden p-2 nav-link-btn">
                <Menu size={20} />
              </button>
            </div>

          </nav>
        </header>

        {/* ==================== MAIN CONTENT ==================== */}
        <main className="grow relative text-black">
          {children}
        </main>

        {/* ==================== FOOTER ==================== */}
        <footer className="border-t border-[#EFE7E0] pt-12 desktop:pt-16 pb-0 text-black">
          <div className="hidden tablet:grid container grid-cols-5 gap-x-6 mb-9 desktop:mb-12">
            
            {/* 1. プラットフォーム */}
            <div className="col-span-1">
              <span className="inline-block mb-4 font-medium text-[16px]">プラットフォーム</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/platform/engage" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">エンゲージメント</Link></li>
                <li><Link href="/platform/perform" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">パフォーマンス</Link></li>
                <li><Link href="/platform/plans-and-pricing" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">料金表</Link></li>
              </ul>
            </div>
            
            {/* 2. ソリューション */}
            <div className="col-span-1">
              <span className="inline-block mb-4 font-medium text-[16px]">ソリューション</span>
              
              <div className="mb-6">
                <p className="text-[10px] text-[#524F4C] mb-3 font-semibold uppercase tracking-wider">リーダークラス</p>
                <ul className="flex flex-col gap-y-[6px]">
                  <li><Link href="/solutions/chro" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">人事代表 (CHRO)</Link></li>
                  <li><Link href="/solutions/hr-director" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">人事リーダー</Link></li>
                  <li><Link href="/solutions/cfo" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">CFO</Link></li>
                  <li><Link href="/solutions/cio" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">CIO / CTO</Link></li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-[10px] text-[#524F4C] mb-3 font-semibold uppercase tracking-wider">業界</p>
                <ul className="flex flex-col gap-y-[6px]">
                  <li><Link href="/solutions/professional-services" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">専門職サービス</Link></li>
                  <li><Link href="/solutions/financial-services" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">金融サービス</Link></li>
                  <li><Link href="/solutions/software-technology" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">IT＆テック系スタートアップ</Link></li>
                  <li><Link href="/solutions/manufacturing" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">製造業</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] text-[#524F4C] mb-3 font-semibold uppercase tracking-wider">会社規模</p>
                <ul className="flex flex-col gap-y-[6px]">
                  <li><Link href="/solutions/enterprise" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">大企業エンタープライズ</Link></li>
                  <li><Link href="/solutions/commercial" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">中小・成長企業</Link></li>
                </ul>
              </div>
            </div>

            {/* 3. ツール */}
            <div className="col-span-1">
              <span className="inline-block mb-4 font-medium text-[16px]">ツール</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/science/insights" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ベンチマーク</Link></li>
                <li><Link href="/science/roi-calculator" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ROI 計算機</Link></li>
                <li><Link href="/science/research" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">リサーチ</Link></li>
              </ul>
            </div>

            {/* 4. 情報 */}
            <div className="col-span-1">
              <span className="inline-block mb-4 font-medium text-[16px]">情報</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/blog" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ブログ</Link></li>
                <li><Link href="/events" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">イベント</Link></li>
                <li><Link href="/case-studies" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ケーススタディ</Link></li>
              </ul>
            </div>

            {/* 5. 会社 */}
            <div className="col-span-1">
              <span className="inline-block mb-4 font-medium text-[16px]">会社</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/company" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">Culture Ampについて</Link></li>
                <li><Link href="/company/careers" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">採用情報</Link></li>
                <li><Link href="/company/contact-us" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">問合せ</Link></li>
                <li><Link href="/company/trust" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">サポート・セキュリティ</Link></li>
                <li><Link href="/company/legal" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">リーガル</Link></li>
              </ul>
            </div>

          </div>

          <div className="container grid grid-cols-2 tablet:grid-cols-5 gap-x-6 gap-y-6 desktop:gap-y-0 mb-[48px] desktop:mb-[60px] items-start">
            <div className="col-span-1">
              <Link href="/" className="block w-[130px] tablet:w-[160px]">
                <img 
                  src="/Logo-black.svg" 
                  alt="Culture Amp" 
                  className="w-[130px] tablet:w-[160px] h-auto object-contain block" 
                />
              </Link>
            </div>
            
            <div className="col-span-1 flex items-center justify-end tablet:justify-start h-full">
              <a 
                href="https://www.linkedin.com/company/cultureamp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <div className="col-span-full desktop:col-start-3 desktop:col-span-3 text-[10px] text-black">
              <p className="mb-2">
                © 2026 Culture Amp Pty Ltd, <a href="#" className="border-b border-black">Subscribe</a>, <a href="#" className="border-b border-black">Terms</a>, <a href="#" className="border-b border-black">Privacy</a>, <a href="#" className="border-b border-black">Your Privacy Choices</a>
              </p>
            </div>

            <div className="col-span-full desktop:col-start-3 desktop:col-span-3 text-[10px] text-[#524F4C]">
              <p className="leading-relaxed">
                日本国内における Culture Amp プラットフォームの提供およびサポートは、認定パートナーである Laboratik 株式会社が推進しています。グローバルで実証されたピープルサイエンスとテクノロジーを通じて、日本の組織におけるエンゲージメント向上と持続的な成長を強力に支援します。
              </p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}