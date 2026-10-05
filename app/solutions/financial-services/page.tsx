'use client';

import LogoMarquee from "@/components/LogoMarquee";
import CaseStudyFeature from "@/components/CaseStudyFeature";

export default function FinancialServicesSolutionPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <p className="eyebrow font-sans">
              金融サービス業界向け 従業員体験（EX）ソフトウェア
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              レジリエントで高業績な組織と人材を構築
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                優秀な人材を引き留め、変化の激しい市場環境を確信を持ってナビゲート。Culture Ampは、データ駆動のアクションを推進してオペレーションを拡張し、生産性を向上させます。エンタープライズグレードのデータプライバシーとセキュリティで強力に守られています。
              </p>
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16 font-sans">
              <button className="page-form-dialog__trigger button button--primary">
                デモを予約
              </button>
              <a href="/platform" className="button button--secondary">
                プラットフォームを見る
              </a>
            </div>
          </div>

          {/* 右側ヒーロービジュアル */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/qEXozzm2B1l5iLrVYYgAURnszEI=/1250x0/cultureampcom/production/405/557/69d/40555769dccb4cfee28ded82/Solutions-Hero-Industry-Financial-Services.png" 
              alt="Financial Services Solution" 
              className="w-full h-auto rounded-[32px] object-cover shadow-1"
            />
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. LOGO MARQUEE SECTION
         ========================================================================== */}
      <LogoMarquee />

      {/* ==========================================================================
         3. FEATURE 1: Mitigate Risk & Retain Talent (Wistia btx5pewhi8)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              リスクを軽減し、トップパーフォーマーを引き留める
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                「人」への投資不足は重大なコスト増につながります。Culture Ampは金融機関が早期に離職リスクを特定し、望まない退職を未然に防止。生産性の低下、不振、離職に伴う隠れたコスト発生を防ぎます。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/btx5pewhi8" 
                  title="Mitigate Risk Feature"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Data-driven Action (Wistia xrlhua4ke2)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              データに基づくアクションで効率性を拡大
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                人事インサイトとパフォーマンスデータのギャップを埋め、最もインパクトのある部分に集中投資。個人の成果と能力開発を組織の最優先事項と連結させ、業績を伸ばす従業員体験をかたち作ります。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/xrlhua4ke2" 
                  title="Scale Efficiency Feature"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Data Privacy & Security
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              金融レベルの強固なプライバシーとセキュリティ
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                Culture Ampは、エンタープライズ水準のデータプライバシー、厳格なセキュリティ管理、安全なAIガイドラインを備えて設計されています。セキュリティリスクに煩わされることなく「人」への施策に専念できます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/rMBcRDNXvAmsqlxLggiFcgSQwvA=/750x0/cultureampcom/production/179/29f/c23/17929fc233b649f2c55b08db/content-drawer-feature-security.png" 
                alt="Data Security Badges" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. POWER CTA COMPONENT
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/-Gto4dpN_ZuvzbJ2VR6Hn62p5AY=/250x0/cultureampcom/production/0aa/394/90a/0aa39490a50b8d2507026e0b/insights-cta-financial-services.png" 
              alt="Financial Services Insights" 
              className="mb-36 max-w-132 mx-auto" 
            />
            <h2 className="font-serif font-medium heading-md text-balance mb-20 tablet:mb-24 text-black">
              業界トップクラスのパフォーマンスを誇る金融機関のインサイトを取得
            </h2>
            <div className="flex flex-col tablet:flex-row tablet:justify-center gap-16 font-sans">
              <a href="/science/insights" className="button button--secondary">
                業界ベンチマークを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. CAROUSEL FEATURE SET (Tan Background Card - Wistia hasx2xhtgd)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">パフォーマンス向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">エンゲージメント向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">スムーズな導入</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">パフォーマンス向上</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  社員とビジネス双方のハイパフォーマンスを引き出す
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    成果に向かって団結する組織を構築。1-on-1や目標管理によって意義のある対話を増やし、戦略的取り組みを軌道に乗せ、オペレーションの障壁を解消します。
                  </p>
                </div>
                <div className="font-sans">
                  <a href="/platform/perform" className="button button--secondary">
                    Performを見る
                  </a>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <div className="shadow-1 rounded-3xl overflow-hidden bg-white p-12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                    <iframe 
                      src="https://fast.wistia.net/embed/iframe/hasx2xhtgd" 
                      title="Unlock High Performance Demo"
                      className="w-full h-full object-cover"
                      allow="autoplay; fullscreen"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         8. CASE STUDY FEATURE (Nasdaq事例 モジュール呼び出し)
         ========================================================================== */}
      <CaseStudyFeature
        title="ガバナンスと測定可能なROIの両立を実現"
        companyLogo="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/L_cKoKSl8-FJNv8kGTs8BXf1sEk=/0x100/cultureampcom/production/da4/691/a2a/da4691a2adf8350efa7c6aa1/logo-nasdaq2x.png"
        companyName="Nasdaq"
        headline="NasdaqがCulture Ampのデータアナリティクスを活用して離職リスクをモニタリングした方法"
        statNumber="<50%"
        statLabel="業界平均の自主離職率を下回る実績"
        caseStudyUrl="/case-studies/nasdaq"
        heroImageUrl="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/swZ0uYGjyeaKzZVCXT2sChL8BxM=/1000x1000/cultureampcom/production/a5a/40a/c46/a5a40ac46d9f2909ce6d7f90/case-study-nasdaq2x.png"
        heroImageAlt="Nasdaq New York City"
      />

      {/* ==========================================================================
         9. FINAL BOTTOM CTA SECTION (全ページ共通)
         ========================================================================== */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-serif font-medium heading-lg mb-36 text-black">
              従業員への投資が、確かなインパクトを創り出します
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16 font-sans">
              <button className="page-form-dialog__trigger button button--primary">
                デモを予約
              </button>
              <a href="/platform" className="button button--secondary">
                仕組みを見る
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}