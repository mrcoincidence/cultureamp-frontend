'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

export default function Header() {
  // デスクトップ用ドロップダウン状態管理 ('platform' | 'solutions' | 'tools' | 'info' | 'company' | null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // モバイル用メニューの開閉状態
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (menuKey: string) => {
    setOpenMobileSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
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
                        <Link href="/solutions/cto" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors whitespace-nowrap">
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
              href="/tools/benchmark" 
              className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'tools' ? 'bg-[#FAF5F2]' : ''}`}
            >
              ツール <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
            </Link>

            {activeDropdown === 'tools' && (
              <div className="absolute top-full left-0 w-[220px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-16 text-left">
                  <ul className="space-y-1">
                    <li>
                      <Link href="/tools/benchmark" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                        ベンチマーク
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools/roi-calculator" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
                        ROI 計算機
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools/research" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
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
              href="/company/about" 
              className={`nav-link-btn flex items-center gap-x-1.5 whitespace-nowrap ${activeDropdown === 'company' ? 'bg-[#FAF5F2]' : ''}`}
            >
              会社 <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
            </Link>

            {activeDropdown === 'company' && (
              <div className="absolute top-full left-0 w-[240px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#EFE7E0] p-16 text-left">
                  <ul className="space-y-1">
                    <li>
                      <Link href="/company/about" className="block px-12 py-8 rounded-lg hover:bg-[#FAF5F2] font-semibold text-[15px] text-black transition-colors">
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
                      <li><Link href="/solutions/cto" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-black">CIO / CTO</Link></li>
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
                  <li><Link href="/tools/benchmark" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ベンチマーク</Link></li>
                  <li><Link href="/tools/roi-calculator" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">ROI 計算機</Link></li>
                  <li><Link href="/tools/research" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">リサーチ</Link></li>
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
                  <li><Link href="/company/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 hover:text-black">Culture Ampについて</Link></li>
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
  );
}