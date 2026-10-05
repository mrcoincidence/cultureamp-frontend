'use client';

import LogoMarquee from "@/components/LogoMarquee";
import BadgeSet from "@/components/BadgeSet";

export default function HrDirectorSolutionPage() {
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
              HRリーダー向け 従業員体験（EX）プラットフォーム
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              ハイパフォーマンスな組織カルチャーを構築・拡張
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                ピープルサイエンスに支えられ、AIによって拡張されたCulture Ampは、エンゲージメントとパフォーマンスを統合。組織カルチャーの真の推進要因を特定し、タイムリーなサポートを受けながら、ピープルインサイトに基づいた効果的なアクションを実行できます。
              </p>
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16 font-sans">
              <button className="button button--primary">
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/f2Kr2J0KZTSar2xnOJ2r9EwPqxI=/1250x0/cultureampcom/production/7ec/8bd/243/7ec8bd2433c2a144b7b32e04/Solutions-Hero-Leadership-HR-Leaders.png" 
              alt="HR Leaders Solution" 
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
         3. FEATURE 1: Engage Leader Reports
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              エンゲージメントの真の推進要因を理解し、アクションを起こす
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                フィードバックをスムーズに収集し、AIを活用したインサイトによって的を絞ったエンゲージメント＆定着率向上戦略を展開。直感的なヒートマップと詳細なレポートにより、重点的に取り組むべき領域を一目で把握し、施策の効果を継続的に追跡できます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/10lNZ7ekr59NvwPCq4ZIlfnT_ZU=/750x0/cultureampcom/production/11b/e91/e3c/11be91e3ce52aad184acb0c9/Engage-Leader-reports.png" 
                alt="Engage Leader Reports" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Effectiveness Templates
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              持続的な成功を生み出すハイパフォーマンスカルチャーを醸成
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                社員のモチベーションを高め、マネージャーのリーダーシップを強化し、離職を防ぐハイパフォーマンスカルチャーで、持続可能な組織の成長を実現。全社規模でパフォーマンスを加速させるための最適なインサイトが得られます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/SrWPiheJvUVTl9GL1mOA69EzfyA=/750x0/cultureampcom/production/ef0/3ac/b44/ef03acb448b3883768a3cb14/Effectiveness-Templates.png" 
                alt="Effectiveness Templates" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Focus Agent
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              真に重要な人事施策に充てる時間を創出
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                自動化、リアルタイムインサイト、推奨される注力エリア提示により人事オペレーションを最適化。手間の増える業務を削減し、マネージャーのリーダーシップを支援しながら、真にインパクトのある人事施策に集中できます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/TuksvQ1ob3uDTevU2rQyqyOfx2c=/750x0/cultureampcom/production/e36/05f/76b/e3605f76bc90efbf7f09de6a/Engage-Focus-Agent.png" 
                alt="Focus Agent" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. BADGE SET SECTION
         ========================================================================== */}
      <BadgeSet />

      {/* ==========================================================================
         7. CAROUSEL FEATURE SET (Tan Background Card - Wistia hpl0epe99b)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">パフォーマンスの向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">離職防止・定着率向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">目的を持ったAI活用</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">パフォーマンスの向上</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  組織全体でハイパフォーマンスカルチャーを推進
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    目標に向かって結束する組織を構築。1-on-1や目標管理によって成果につながる対話を促進し、パフォーマンスデータを活用して人材の強みを認識・育成します。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <div className="shadow-1 rounded-3xl overflow-hidden bg-white p-12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                    <iframe 
                      src="https://fast.wistia.net/embed/iframe/hpl0epe99b" 
                      title="Improve Performance Demo"
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
         8. TESTIMONIALS SECTION (Purple Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 items-center">
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-10 desktop:col-start-3 desktop:col-span-8 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 desktop:text-40 font-serif font-medium mb-36 leading-relaxed text-white">
                  「人事チームの信頼性は大きく向上しました。Culture Ampがビジネス上の議論に必要なデータを提供してくれたことが大きな要因です。経営陣にとっても、レポートへ迅速にアクセスし組織データを深掘りできることは非常に価値がありました」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/UsLBTyB4gteojorvSgxP903gM-8=/0x100/cultureampcom/production/23b/08a/640/23b08a640a11a5a874d04bda/logo-ticketmaster-white.png" alt="Ticketmaster Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16 font-sans">Paula de Haen</p>
                <p className="text-14 text-white/80 font-sans">Ticketmaster / VP of People Programs</p>
              </div>

            </div>
          </div>
        </div>
      </section>

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
              <button className="button button--primary">
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