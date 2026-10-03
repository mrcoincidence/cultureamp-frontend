'use client';

import { useState } from "react";
import Link from "next/link";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

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
  // デスクトップ用ドロップダウン状態管理 ('platform' | 'solutions' | 'tools' | 'info' | 'company' | null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // モバイル用メニューの開閉状態
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (menuKey: string) => {
    setOpenMobileSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans text-black bg-[#FEFBF9] antialiased overflow-x-hidden min-h-screen flex flex-col justify-between`}>
        
        {/* ==================== HEADER (下部ボーダー線を完全削除) ==================== */}
        <header className={`sticky top-0 z-50 transition-colors duration-150 ${
          isMobileMenuOpen ? 'bg-white' : 'bg-[#FEFBF9]'
        }`}>
          <nav className="container py-[14px] flex items-center justify-between">
            
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
            
            {/* 2. 中央: デスクトップ用ナビゲーション (5項目すべてドロップダウン対応) */}
            <div className="hidden desktop:flex items-center justify-center gap-x-1.5 relative">
              
              {/* プラットフォーム */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("platform")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/platform" 
                  className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'platform' ? 'bg-[#FAF5F2]' : ''}`}
                >
                  プラットフォーム <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'platform' && (
                  <div className="absolute top-full left-0 w-[240px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-16 text-left">
                      <ul className="space-y-1">
                        <li>
                          <Link href="/platform/engage" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            エンゲージメント
                          </Link>
                        </li>
                        <li>
                          <Link href="/platform/perform" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            パフォーマンス
                          </Link>
                        </li>
                        <li>
                          <Link href="/platform/plans-and-pricing" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            料金表
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* ソリューション */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'solutions' ? 'bg-[#FAF5F2]' : ''}`}>
                  ソリューション <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-24 grid grid-cols-3 gap-x-20 text-left">
                      
                      {/* リーダークラス */}
                      <div>
                        <p className="text-[11px] font-bold text-[#8C8784] uppercase tracking-wider mb-12 px-12">
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

                      {/* 業界 */}
                      <div>
                        <p className="text-[11px] font-bold text-[#8C8784] uppercase tracking-wider mb-12 px-12">
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

                      {/* 会社規模 */}
                      <div>
                        <p className="text-[11px] font-bold text-[#8C8784] uppercase tracking-wider mb-12 px-12">
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

              {/* ツール */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("tools")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/science/people-science" 
                  className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'tools' ? 'bg-[#FAF5F2]' : ''}`}
                >
                  ツール <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'tools' && (
                  <div className="absolute top-full left-0 w-[220px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-16 text-left">
                      <ul className="space-y-1">
                        <li>
                          <Link href="/science/insights" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            ベンチマーク
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/roi-calculator" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            ROI 計算機
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/research" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            リサーチ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* 情報 */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("info")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/resources" 
                  className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'info' ? 'bg-[#FAF5F2]' : ''}`}
                >
                  情報 <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'info' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'info' && (
                  <div className="absolute top-full left-0 w-[220px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-16 text-left">
                      <ul className="space-y-1">
                        <li>
                          <Link href="/blog" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            ブログ
                          </Link>
                        </li>
                        <li>
                          <Link href="/events" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            イベント
                          </Link>
                        </li>
                        <li>
                          <Link href="/case-studies" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            ケーススタディ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* 会社 */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/company" 
                  className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'company' ? 'bg-[#FAF5F2]' : ''}`}
                >
                  会社 <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 w-[240px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-16 text-left">
                      <ul className="space-y-1">
                        <li>
                          <Link href="/company" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            Culture Ampについて
                          </Link>
                        </li>
                        <li>
                          <Link href="/company/careers" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            採用情報
                          </Link>
                        </li>
                        <li>
                          <Link href="/company/contact-us" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            問合せ
                          </Link>
                        </li>
                        <li>
                          <Link href="/company/trust" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            サポート・セキュリティ
                          </Link>
                        </li>
                        <li>
                          <Link href="/company/legal" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                            リーガル
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* 3. 右: CTAボタン ＆ モバイルハンバーガーボタン */}
            <div className="flex items-center gap-x-3">
              <button className="button button--primary text-14 desktop:text-16 py-8 px-16 desktop:px-20">
                デモを予約
              </button>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="desktop:hidden p-2 text-black hover:bg-[#FAF5F2] rounded-md transition-colors"
                aria-label="メニューを開閉"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </nav>

          {/* ==================== モバイルドロワーメニュー ==================== */}
          {isMobileMenuOpen && (
            <div className="desktop:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white z-50 overflow-y-auto px-20 pt-10 pb-20 animate-in fade-in duration-200">
              <ul className="space-y-0">
                
                {/* 1. プラットフォーム */}
                <li className="border-b border-[#EFE7E0] py-12">
                  <div 
                    onClick={() => toggleMobileSubmenu("platform")}
                    className="flex items-center justify-between font-medium text-18 cursor-pointer"
                  >
                    <span>プラットフォーム</span>
                    {openMobileSubmenu === "platform" ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  {openMobileSubmenu === "platform" && (
                    <ul className="pl-16 pt-12 pb-4 space-y-8 text-15 text-[#524F4C] animate-in fade-in duration-150">
                      <li><Link href="/platform/engage" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">エンゲージメント</Link></li>
                      <li><Link href="/platform/perform" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">パフォーマンス</Link></li>
                      <li><Link href="/platform/plans-and-pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">料金表</Link></li>
                    </ul>
                  )}
                </li>

                {/* 2. ソリューション */}
                <li className="border-b border-[#EFE7E0] py-12">
                  <div 
                    onClick={() => toggleMobileSubmenu("solutions")}
                    className="flex items-center justify-between font-medium text-18 cursor-pointer"
                  >
                    <span>ソリューション</span>
                    {openMobileSubmenu === "solutions" ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  {openMobileSubmenu === "solutions" && (
                    <div className="pl-16 pt-12 pb-4 space-y-16 text-15 animate-in fade-in duration-150">
                      <div>
                        <p className="text-11 font-bold text-[#8C8784] uppercase tracking-wider mb-6">リーダークラス</p>
                        <ul className="space-y-6 text-[#524F4C]">
                          <li><Link href="/solutions/chro" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">人事代表 (CHRO)</Link></li>
                          <li><Link href="/solutions/hr-director" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">人事リーダー</Link></li>
                          <li><Link href="/solutions/cfo" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">CFO</Link></li>
                          <li><Link href="/solutions/cio" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">CIO / CTO</Link></li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-11 font-bold text-[#8C8784] uppercase tracking-wider mb-6">業界</p>
                        <ul className="space-y-6 text-[#524F4C]">
                          <li><Link href="/solutions/professional-services" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">専門職サービス</Link></li>
                          <li><Link href="/solutions/financial-services" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">金融サービス</Link></li>
                          <li><Link href="/solutions/software-technology" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">IT＆テック系スタートアップ</Link></li>
                          <li><Link href="/solutions/manufacturing" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">製造業</Link></li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-11 font-bold text-[#8C8784] uppercase tracking-wider mb-6">会社規模</p>
                        <ul className="space-y-6 text-[#524F4C]">
                          <li><Link href="/solutions/enterprise" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">大企業エンタープライズ</Link></li>
                          <li><Link href="/solutions/commercial" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">中小・成長企業</Link></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                {/* 3. ツール */}
                <li className="border-b border-[#EFE7E0] py-12">
                  <div 
                    onClick={() => toggleMobileSubmenu("science")}
                    className="flex items-center justify-between font-medium text-18 cursor-pointer"
                  >
                    <span>ツール</span>
                    {openMobileSubmenu === "science" ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  {openMobileSubmenu === "science" && (
                    <ul className="pl-16 pt-12 pb-4 space-y-8 text-15 text-[#524F4C] animate-in fade-in duration-150">
                      <li><Link href="/science/people-science" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ピープルサイエンス</Link></li>
                      <li><Link href="/science/insights" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ベンチマーク</Link></li>
                      <li><Link href="/science/roi-calculator" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ROI 計算機</Link></li>
                    </ul>
                  )}
                </li>

                {/* 4. 情報 */}
                <li className="border-b border-[#EFE7E0] py-12">
                  <div 
                    onClick={() => toggleMobileSubmenu("resources")}
                    className="flex items-center justify-between font-medium text-18 cursor-pointer"
                  >
                    <span>情報</span>
                    {openMobileSubmenu === "resources" ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  {openMobileSubmenu === "resources" && (
                    <ul className="pl-16 pt-12 pb-4 space-y-8 text-15 text-[#524F4C] animate-in fade-in duration-150">
                      <li><Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">リソースハブ</Link></li>
                      <li><Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ブログ</Link></li>
                      <li><Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ケーススタディ</Link></li>
                    </ul>
                  )}
                </li>

                {/* 5. 会社 */}
                <li className="py-12">
                  <div 
                    onClick={() => toggleMobileSubmenu("company")}
                    className="flex items-center justify-between font-medium text-18 cursor-pointer"
                  >
                    <span>会社</span>
                    {openMobileSubmenu === "company" ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  {openMobileSubmenu === "company" && (
                    <ul className="pl-16 pt-12 pb-4 space-y-8 text-15 text-[#524F4C] animate-in fade-in duration-150">
                      <li><Link href="/company" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">Culture Ampについて</Link></li>
                      <li><Link href="/company/careers" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">採用情報</Link></li>
                      <li><Link href="/company/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">問合せ</Link></li>
                      <li><Link href="/company/trust" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">サポート・セキュリティ</Link></li>
                      <li><Link href="/company/legal" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">リーガル</Link></li>
                    </ul>
                  )}
                </li>

              </ul>
            </div>
          )}

        </header>

        {/* ==================== MAIN CONTENT ==================== */}
        <main className="grow relative text-black">
          {children}
        </main>

        {/* ==================== FOOTER ==================== */}
        <footer className="pt-12 desktop:pt-16 pb-0 text-black">
          
          {/* 上部 5カラムエリア (デスクトップ表示) */}
          <div className="hidden tablet:grid container grid-cols-5 gap-x-6 mb-18 desktop:mb-24">
            
            {/* 1. プラットフォーム */}
            <div className="col-span-1">
              <span className="inline-block mb-8 font-bold text-[16px]">プラットフォーム</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/platform/engage" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">エンゲージメント</Link></li>
                <li><Link href="/platform/perform" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">パフォーマンス</Link></li>
                <li><Link href="/platform/plans-and-pricing" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">料金表</Link></li>
              </ul>
            </div>
            
            {/* 2. ソリューション */}
            <div className="col-span-1">
              <span className="inline-block mb-8 font-bold text-[16px]">ソリューション</span>
              
              <div className="mb-9">
                <p className="text-[10px] text-[#8C8784] mb-3 font-semibold uppercase tracking-wider">リーダークラス</p>
                <ul className="flex flex-col gap-y-[6px]">
                  <li><Link href="/solutions/chro" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">人事代表 (CHRO)</Link></li>
                  <li><Link href="/solutions/hr-director" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">人事リーダー</Link></li>
                  <li><Link href="/solutions/cfo" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">CFO</Link></li>
                  <li><Link href="/solutions/cio" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">CIO / CTO</Link></li>
                </ul>
              </div>

              <div className="mb-9">
                <p className="text-[10px] text-[#8C8784] mb-3 font-semibold uppercase tracking-wider">業界</p>
                <ul className="flex flex-col gap-y-[6px]">
                  <li><Link href="/solutions/professional-services" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">専門職サービス</Link></li>
                  <li><Link href="/solutions/financial-services" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">金融サービス</Link></li>
                  <li><Link href="/solutions/software-technology" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">IT＆テック系スタートアップ</Link></li>
                  <li><Link href="/solutions/manufacturing" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">製造業</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] text-[#8C8784] mb-3 font-semibold uppercase tracking-wider">会社規模</p>
                <ul className="flex flex-col gap-y-[6px]">
                  <li><Link href="/solutions/enterprise" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">大企業エンタープライズ</Link></li>
                  <li><Link href="/solutions/commercial" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">中小・成長企業</Link></li>
                </ul>
              </div>
            </div>

            {/* 3. ツール */}
            <div className="col-span-1">
              <span className="inline-block mb-8 font-bold text-[16px]">ツール</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/science/insights" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ベンチマーク</Link></li>
                <li><Link href="/science/roi-calculator" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ROI 計算機</Link></li>
                <li><Link href="/science/research" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">リサーチ</Link></li>
              </ul>
            </div>

            {/* 4. 情報 */}
            <div className="col-span-1">
              <span className="inline-block mb-8 font-bold text-[16px]">情報</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/blog" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ブログ</Link></li>
                <li><Link href="/events" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">イベント</Link></li>
                <li><Link href="/case-studies" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ケーススタディ</Link></li>
              </ul>
            </div>

            {/* 5. 会社 */}
            <div className="col-span-1">
              <span className="inline-block mb-8 font-bold text-[16px]">会社</span>
              <ul className="flex flex-col gap-y-[6px]">
                <li><Link href="/company" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">Culture Ampについて</Link></li>
                <li><Link href="/company/careers" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">採用情報</Link></li>
                <li><Link href="/company/contact-us" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">問合せ</Link></li>
                <li><Link href="/company/trust" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">サポート・セキュリティ</Link></li>
                <li><Link href="/company/legal" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">リーガル</Link></li>
              </ul>
            </div>

          </div>

          {/* モバイル用アコーディオンフッター */}
          <div className="tablet:hidden container px-20 mb-24">
            
            {/* プラットフォーム */}
            <details className="group border-b border-[#EFE7E0] py-12">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-16 py-2 list-none">
                <span>プラットフォーム</span>
                <Plus size={18} className="group-open:hidden" />
                <Minus size={18} className="hidden group-open:block" />
              </summary>
              <ul className="pt-12 pb-8 space-y-8 text-14 text-[#524F4C]">
                <li><Link href="/platform/engage" className="hover:underline">エンゲージメント</Link></li>
                <li><Link href="/platform/perform" className="hover:underline">パフォーマンス</Link></li>
                <li><Link href="/platform/plans-and-pricing" className="hover:underline">料金表</Link></li>
              </ul>
            </details>

            {/* ソリューション */}
            <details className="group border-b border-[#EFE7E0] py-12">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-16 py-2 list-none">
                <span>ソリューション</span>
                <Plus size={18} className="group-open:hidden" />
                <Minus size={18} className="hidden group-open:block" />
              </summary>
              <div className="pt-12 pb-8 space-y-12 text-14 text-[#524F4C]">
                <div>
                  <p className="text-11 font-bold text-[#8C8784] uppercase tracking-wider mb-4">リーダークラス</p>
                  <ul className="space-y-6">
                    <li><Link href="/solutions/chro" className="hover:underline">人事代表 (CHRO)</Link></li>
                    <li><Link href="/solutions/hr-director" className="hover:underline">人事リーダー</Link></li>
                    <li><Link href="/solutions/cfo" className="hover:underline">CFO</Link></li>
                    <li><Link href="/solutions/cio" className="hover:underline">CIO / CTO</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-11 font-bold text-[#8C8784] uppercase tracking-wider mb-4">業界</p>
                  <ul className="space-y-6">
                    <li><Link href="/solutions/professional-services" className="hover:underline">専門職サービス</Link></li>
                    <li><Link href="/solutions/financial-services" className="hover:underline">金融サービス</Link></li>
                    <li><Link href="/solutions/software-technology" className="hover:underline">IT＆テック系スタートアップ</Link></li>
                    <li><Link href="/solutions/manufacturing" className="hover:underline">製造業</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-11 font-bold text-[#8C8784] uppercase tracking-wider mb-4">会社規模</p>
                  <ul className="space-y-6">
                    <li><Link href="/solutions/enterprise" className="hover:underline">大企業エンタープライズ</Link></li>
                    <li><Link href="/solutions/commercial" className="hover:underline">中小・成長企業</Link></li>
                  </ul>
                </div>
              </div>
            </details>

            {/* ツール */}
            <details className="group border-b border-[#EFE7E0] py-12">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-16 py-2 list-none">
                <span>ツール</span>
                <Plus size={18} className="group-open:hidden" />
                <Minus size={18} className="hidden group-open:block" />
              </summary>
              <ul className="pt-12 pb-8 space-y-8 text-14 text-[#524F4C]">
                <li><Link href="/science/insights" className="hover:underline">ベンチマーク</Link></li>
                <li><Link href="/science/roi-calculator" className="hover:underline">ROI 計算機</Link></li>
                <li><Link href="/science/research" className="hover:underline">リサーチ</Link></li>
              </ul>
            </details>

            {/* 情報 */}
            <details className="group border-b border-[#EFE7E0] py-12">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-16 py-2 list-none">
                <span>情報</span>
                <Plus size={18} className="group-open:hidden" />
                <Minus size={18} className="hidden group-open:block" />
              </summary>
              <ul className="pt-12 pb-8 space-y-8 text-14 text-[#524F4C]">
                <li><Link href="/blog" className="hover:underline">ブログ</Link></li>
                <li><Link href="/events" className="hover:underline">イベント</Link></li>
                <li><Link href="/case-studies" className="hover:underline">ケーススタディ</Link></li>
              </ul>
            </details>

            {/* 会社 */}
            <details className="group border-b border-[#EFE7E0] py-12">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-16 py-2 list-none">
                <span>会社</span>
                <Plus size={18} className="group-open:hidden" />
                <Minus size={18} className="hidden group-open:block" />
              </summary>
              <ul className="pt-12 pb-8 space-y-8 text-14 text-[#524F4C]">
                <li><Link href="/company" className="hover:underline">Culture Ampについて</Link></li>
                <li><Link href="/company/careers" className="hover:underline">採用情報</Link></li>
                <li><Link href="/company/contact-us" className="hover:underline">問合せ</Link></li>
                <li><Link href="/company/trust" className="hover:underline">サポート・セキュリティ</Link></li>
                <li><Link href="/company/legal" className="hover:underline">リーガル</Link></li>
              </ul>
            </details>

          </div>

          {/* コピーライトエリア */}
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