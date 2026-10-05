'use client';

import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function Footer() {
  return (
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
              <li><Link href="/solutions/cto" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">CIO / CTO</Link></li>
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
            <li><Link href="/tools/benchmark" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ベンチマーク</Link></li>
            <li><Link href="/tools/roi-calculator" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">ROI 計算機</Link></li>
            <li><Link href="/tools/research" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">リサーチ</Link></li>
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
            <li><Link href="/company/about" className="text-[12px] text-black hover:underline underline-offset-2 transition-colors">Culture Ampについて</Link></li>
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
                <li><Link href="/solutions/cto" className="hover:underline">CIO / CTO</Link></li>
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
            <li><Link href="/tools/benchmark" className="hover:underline">ベンチマーク</Link></li>
            <li><Link href="/tools/roi-calculator" className="hover:underline">ROI 計算機</Link></li>
            <li><Link href="/tools/research" className="hover:underline">リサーチ</Link></li>
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
            <li><Link href="/company/about" className="hover:underline">Culture Ampについて</Link></li>
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
  );
}