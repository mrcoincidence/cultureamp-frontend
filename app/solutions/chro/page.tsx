import { ChevronRight } from "lucide-react";

export default function ChroSolutionPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <p className="eyebrow">
              最高人事責任者（CPO &amp; CHRO）向け 戦略的人事アナリティクス＆ツール
            </p>
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              ピープルの<span className="font-camper camper-underline">インサイト</span>を、<br className="hidden desktop:block" />確かな事業<span className="font-camper camper-underline camper-underline--short">インパクト</span>へ
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                ビジネス成果を力強く牽引するハイパフォーマンスカルチャーを構築。15年以上にわたるピープルサイエンスの研究成果と最先端AIの融合により、Culture Ampは持続的な高業績、組織文化、そして日々の業務の実態を深く紐づけ、人事リーダーの確信に満ちた意思決定とアクションを強力に支援します。
              </p>
            </div>
            
            {/* 評価バッジ */}
            <ul className="flex gap-x-24">
              <li className="flex items-center">
                <div className="w-[30px] h-[30px] mr-8 bg-black flex items-center justify-center rounded-sm text-white font-bold text-12">G2</div>
                <span className="text-20 font-bold mr-4">4.5</span>
                <span className="text-10 text-muted">on G2</span>
              </li>
              <li className="flex items-center">
                <div className="w-[30px] h-[30px] mr-8 bg-black flex items-center justify-center rounded-sm text-white font-bold text-12">C</div>
                <span className="text-20 font-bold mr-4">4.6</span>
                <span className="text-10 text-muted">on Capterra</span>
              </li>
            </ul>

            <div className="flex flex-col tablet:flex-row items-center gap-16">
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/U-y4J-q1Jigs0ozg6reZRwJlWsE=/1250x0/cultureampcom/production/ccf/333/955/ccf3339555b70b8a0693e5da/Solutions-Hero-Leadership-CHRO.png" 
              alt="CHRO Leadership Solution" 
              className="w-full h-auto rounded-[32px] object-cover shadow-1"
            />
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. LOGO MARQUEE SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full">
            <div className="flex items-center justify-center gap-x-8 tablet:gap-x-12 mb-24 desktop:mb-36">
              <p className="font-camper text-20 tablet:text-24 text-center">
                世界6,000社以上の先進企業に選ばれています
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 tablet:gap-16 opacity-80">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/b6ZXYvdnew5ULTc-k4nNoAd6zVk=/0x100/cultureampcom/production/ded/10e/fa8/ded10efa8b3082f295719db8/bombas-mono-black.png" alt="Bombas" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lQ56D3kL32OzhBEpm7qbDLjvcYQ=/0x100/cultureampcom/production/1a5/d6b/02b/1a5d6b02b8261221d8d32439/etsy-mono-black.png" alt="Etsy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/sYNvNugRjnrZGnAO1dZ8hAt7T-8=/0x100/cultureampcom/production/ed0/812/6ef/ed08126ef3e15d0cbef09b98/mcdonalds-mono-black.png" alt="McDonalds" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/WHMqmyo_eVeYB1DZjlKGrfD9GrE=/0x100/cultureampcom/production/882/ff4/338/882ff4338eff1c8e2b2b5ba0/logo-intercom-black2x.png" alt="Intercom" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JUH89YmI4JIsUAaM3kFTJeuHb3k=/0x100/cultureampcom/production/cb4/ded/466/cb4ded466d0a038c5c408622/on-black.png" alt="On" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. FEATURE 1: Strategic Powerhouse
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              人事部門を組織の戦略的推進力（パワーハウス）へ
            </h2>
            <div className="text-md copy">
              <p>
                人事責任者であるあなたは、企業の成否が「人」にかかっていることを誰よりも理解しています。Culture Ampは、組織のインサイトを測定可能なビジネス成果へと変え、経営陣の意思決定テーブルで人事としての強力なリーダーシップを発揮するために必要なデータ、分析、各種ツールを提供します。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AY0lhZpGGGR5gI3Q1Sy1bKrRucc=/750x0/cultureampcom/production/ac3/b01/80a/ac3b0180a81c4d20f05e0a23/set-differentiator-people-science.jpg" 
                alt="Strategic Powerhouse Analytics" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Real-time Insights
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              リアルタイムのピープルインサイトで急速な変化に対応
            </h2>
            <div className="text-md copy">
              <p>
                組織変革の波が訪れた時、的確な答えを持って臨むことができます。Culture Ampのリアルタイム・インサイトは、変化へ素早く適応し、事業成長に不可欠な影響をもたらし、ビジネスの加速するスピード感に合わせて変革を舵取りする手助けをします。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/03iIME84dK7rGywI4yGdREp0kRo=/750x0/cultureampcom/production/8c0/3cb/938/8c03cb93808e5737d9033209/set-differentiator-purposeful-ai.jpg" 
                alt="Real-time Insights" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Proven ROI
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              活気ある組織がもたらす高いROI（投資対効果）を数値化
            </h2>
            <div className="text-md copy mb-36">
              <p>
                ピープルへの投資は大きなリターンを生み出します。Culture Ampがいかにエンゲージメントを高め、離職率を低下させ、人事チームが本来注力すべきコア戦略に充てる時間を生み出すかを証明するレポートをご覧ください。
              </p>
            </div>
            <div>
              <a href="#" className="button button--secondary">
                調査レポートを読む
              </a>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/jo0aSS84IYeN1dTDy6_0tBDieKs=/750x0/cultureampcom/production/dfb/61b/51f/dfb61b51fbaac94c8ca6da01/set-differentiator-data-insights.jpg" 
                alt="ROI Report Insights" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. BADGE SET SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 col-span-full text-center">
            <h2 className="font-heading font-medium heading-sm text-pretty text-center mb-24 tablet:mb-36 desktop:mb-48">
              6,000社以上、300万人以上のユーザーに活用されています
            </h2>
            <ul className="flex flex-wrap gap-24 tablet:gap-36 desktop:gap-48 items-center justify-center">
              <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
                <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/Q1MFCXP-KmUsHkHKbPCgPw5AT4k=/0x500/cultureampcom/production/f6c/32f/7d0/f6c32f7d0e1c7c8be851a746/EmployeeEngagement-Leader-Enterprise-Leader.png" alt="G2 Badge" className="w-full h-auto" />
              </li>
              <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
                <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/dBKRW3K-EaqrV_mwewMPkZ21IGE=/0x500/cultureampcom/production/20d/252/f80/20d252f8085653948e28a0d8/EmployeeEngagement-Leader-Mid-Market-Leader.png" alt="G2 Badge" className="w-full h-auto" />
              </li>
              <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
                <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9HsIwuc3rcDMMUl3gl43MrEgb3k=/0x500/cultureampcom/production/cb9/8ec/dfc/cb98ecdfca76c8b9bdd058bc/CareerManagement-BestResults-Enterprise-Total.png" alt="G2 Badge" className="w-full h-auto" />
              </li>
              <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
                <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/yWo7sKnFPSItRUbQ4F47uH3Syek=/0x500/cultureampcom/production/5d2/cb4/224/5d2cb42243b7ebf6c4dd647e/HRAnalytics-HighPerformer-Enterprise-HighPerformer.png" alt="G2 Badge" className="w-full h-auto" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. CAROUSEL FEATURE SET (Purple Background)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-white/20 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              <span className="border-b-2 border-white pb-12 -mb-[14px] cursor-pointer">パフォーマンスの向上</span>
              <span className="text-white/70 cursor-pointer hover:text-white transition-colors">インサイトの可視化</span>
              <span className="text-white/70 cursor-pointer hover:text-white transition-colors">離職防止・定着率向上</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center">
                <p className="tablet:hidden text-14 font-semibold mb-24">パフォーマンスの向上</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-white">
                  全社規模でハイパフォーマンスを生み出すカルチャーを醸成
                </h2>
                <div className="copy text-md text-white/90">
                  <p>
                    一貫性があり、明確な目標に向かって進む組織を構築します。科学的に検証されたツールを活用して、より価値の高い業務を後押しし、人材を育成。社員が最大限の力を発揮できる環境を整えることで、事業成果は劇的に飛躍します。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AY0lhZpGGGR5gI3Q1Sy1bKrRucc=/750x0/cultureampcom/production/ac3/b01/80a/ac3b0180a81c4d20f05e0a23/set-differentiator-people-science.jpg" 
                  alt="High Performance Culture" 
                  className="w-full rounded-2xl object-cover shadow-1"
                />
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
              
              {/* 人物画像 */}
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-5 desktop:col-span-5">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/UGdPgo4TWYTHdrzX6_-dmQaFcNo=/500x500/cultureampcom/production/041/59e/315/04159e315a1e40efdb6e625d/headshot-nascar-john-ferguson.jpg" 
                  alt="John Ferguson - NASCAR" 
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>

              {/* 引用文コピー */}
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-6 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 font-heading font-medium mb-36 leading-relaxed">
                  「組織のポリシー変更を推し進める際、客観的なデータは極めて不可欠です。Culture Ampを通じて得られたインサイトは、私たちの重要な意思決定や具体的アクションをかたち作る鍵となっています」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/3LMMoMHyhyyH1JxSCymcev7bxCU=/0x100/cultureampcom/production/9c7/31b/4ee/9c731b4ee904b672140ff56f/nascar-white.png" alt="NASCAR Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">John Ferguson</p>
                <p className="text-14 text-white/80">NASCAR / Chief Human Resources Officer</p>
                <div className="mt-36">
                  <a href="/case-studies" className="button button--secondary-reversed">
                    事例の詳細を見る
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         9. FINAL BOTTOM CTA SECTION
         ========================================================================== */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-heading font-medium heading-lg mb-36">
              革新的な企業がCulture Ampを活用し、より良い<span className="font-camper camper-underline camper-underline--short">働き方</span>を創り出しています
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16">
              <button className="button button--primary">
                デモを予約
              </button>
              <a href="/platform" className="button button--secondary">
                機能を見る
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}