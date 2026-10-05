'use client';

import LogoMarquee from "@/components/LogoMarquee";
import CaseStudyFeature from "@/components/CaseStudyFeature";

export default function CommercialSolutionPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <h1 className="eyebrow font-sans">中堅・成長企業向け 最優良HRソフトウェア</h1>
            <h2 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              持続可能なハイパフォーマンスカルチャーを構築
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                人事部門の事務負担を増やすことなく、エンゲージメント、パフォーマンス管理、継続的育成を統合したオールインワン型プラットフォームを提供します。
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

          {/* 右側ヒーロービジュアル (Wistia動画 k58pm5bkv3) */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-black/5 p-12">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/10">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/k58pm5bkv3" 
                  title="web-solutions-hero-segment-commercial"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. LOGO MARQUEE SECTION
         ========================================================================== */}
      <LogoMarquee />

      {/* ==========================================================================
         3. FEATURE 1: One unified solution for your people
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              組織のための1つの統合ソリューション
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                エンゲージメントデータと人事評価を、科学的根拠に基づいた1つの洗練されたシステムに統合。従業員の成長を事業目標へ直結させます。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/vkwdi9zr47" 
                  title="AI Coach - Overview 1 Engage"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Empower your managers to lead with confidence
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              マネージャーが確信を持ってリーダーシップを発揮できるよう支援
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                マネージャーの成長が優れたリーダーシップを生みます。Culture Ampの「AI Coach」はリアルタイムのインサイトと個別に最適化されたガイドラインを提供し、フィードバックに基づく確実なアクションを後押しします。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/a69157phjy" 
                  title="Empower Managers Demo"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Save time for the things that matter
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              本当に重要な業務に時間を活用
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                自動化、テンプレート、リアルタイムのインサイトにより人事オペレーションを最適化。作業負担を軽減し、マネージャーの効果的なリーダーシップと本質的な重要施策へ集中できます。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/hxn7lwyok2" 
                  title="Save Time Demo"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
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
            <h2 className="font-serif font-medium heading-md text-balance mb-20 tablet:mb-24 text-black">
              HRテクノロジー投資の価値を最大化
            </h2>
            <div className="copy text-lg mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
              <p>
                Culture Ampがいかに既存のHRIS（人事基幹システム）を補完・強化し、従来のシステムでは捉えきれない深いピープルインサイトをもたらすかをご覧ください。
              </p>
            </div>
            <div className="flex flex-col tablet:flex-row tablet:justify-center gap-16 font-sans">
              <a href="/resources/guides-and-toolkits/an-hris-isnt-enough-why-you-need-a-dedicated-performance-tool" className="button button--secondary">
                ガイドを読む
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">Perform</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">離職リスク予防インサイト</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">拡張性とセキュリティ</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">Perform</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  モダンで継続的なパフォーマンス管理を展開
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    形骸化した年1回の評価を、継続的フィードバック、目標管理、公正な評価に刷新。組織全体の成長とパフォーマンスを加速します。
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
                      src="https://fast.wistia.net/embed/iframe/8kttv29t5z" 
                      title="Perform Feature Demo"
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
         8. CASE STUDY FEATURE (Hanna Andersson 事例モジュール呼び出し)
         ========================================================================== */}
      <CaseStudyFeature
        title="優れたカルチャーと強固な業績の両立を支援"
        companyLogo="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uQzed_fC_w20TMaCkHRmEHhd6Wo=/0x100/cultureampcom/production/fc9/0b9/911/fc90b99110b9f83dbdd6ca2a/Hanna-Andersson-Logo-Vector.svg-.png"
        companyName="Hanna Andersson"
        headline="Hanna Anderssonがいかにトップダウンで組織カルチャーを変革したか"
        statNumber="95%"
        statLabel="エンゲージメントサーベイ回答率"
        caseStudyUrl="/case-studies/hanna-andersson"
        heroImageUrl="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uSUXh9xHwdBimO4_XwWZ0dnHQE8=/1000x1000/cultureampcom/production/133/6e4/48f/1336e448fde6e9e5a96b28cf/Hanna-Holiday25-Company-Photo-3x2-2.jpg"
        heroImageAlt="Hanna Andersson employees"
      />

      {/* ==========================================================================
         9. FINAL BOTTOM CTA SECTION
         ========================================================================== */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-serif font-medium heading-lg mb-36 text-black">
              あらゆるビジネスニーズに応えるフレキシブルなプラン
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16 font-sans">
              <button className="page-form-dialog__trigger button button--primary">
                デモを予約
              </button>
              <a href="/platform/plans-and-pricing" className="button button--secondary">
                料金・プランを見る
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}