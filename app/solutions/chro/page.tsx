'use client';

import LogoMarquee from "@/components/LogoMarquee";
import BadgeSet from "@/components/BadgeSet";

export default function ChroSolutionPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION (G2 / Capterra 表記を完全削除)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <p className="eyebrow font-sans">
              最高人事責任者（CPO &amp; CHRO）向け 戦略的人事アナリティクス＆ツール
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              ピープルのインサイトを、確かな事業インパクトへ
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                ビジネス成果を力強く牽引するハイパフォーマンスカルチャーを構築。15年以上にわたるピープルサイエンスの研究成果と最先端AIの融合により、Culture Ampは持続的な高業績、組織文化、そして日々の業務の実態を深く紐づけ、人事リーダーの確信に満ちた意思決定とアクションを強力に支援します。
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
      <LogoMarquee />

      {/* ==========================================================================
         3. FEATURE 1: Turn HR into a strategic powerhouse (Wistia 2g2na1amn6)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              人事部門を組織の戦略的推進力（パワーハウス）へ
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                人事責任者であるあなたは、企業の成否が「人」にかかっていることを誰よりも理解しています。Culture Ampは、組織のインサイトを測定可能なビジネス成果へと変え、経営陣の意思決定テーブルで人事としての強力なリーダーシップを発揮するために必要なデータ、分析、各種ツールを提供します。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/2g2na1amn6" 
                  title="Strategic Powerhouse Analytics"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Navigate change with real-time people insights (Wistia 8ddzfmrmwh)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              リアルタイムのピープルインサイトで急速な変化に対応
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                組織変革の波が訪れた時、的確な答えを持って臨むことができます。Culture Ampのリアルタイム・インサイトは、変化へ素早く適応し、事業成長に不可欠な影響をもたらし、ビジネスの加速するスピード感に合わせて変革を舵取りする手助けをします。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/8ddzfmrmwh" 
                  title="Real-time Insights"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: See the ROI of a thriving workforce (Wistia scf00r0ivt)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              活気ある組織がもたらす高いROI（投資対効果）を数値化
            </h2>
            <div className="text-md copy mb-36 font-sans text-black leading-relaxed">
              <p>
                ピープルへの投資は大きなリターンを生み出します。Culture Ampがいかにエンゲージメントを高め、離職率を低下させ、人事チームが本来注力すべきコア戦略に充てる時間を生み出すかを証明するレポートをご覧ください。
              </p>
            </div>
            <div className="font-sans">
              <a href="https://www.cultureamp.com/forrester-study-2024" className="button button--secondary" target="_blank" rel="noopener noreferrer">
                調査レポートを読む
              </a>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/scf00r0ivt" 
                  title="ROI Report Insights"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. BADGE SET SECTION
         ========================================================================== */}
      <BadgeSet />

      {/* ==========================================================================
         7. CAROUSEL FEATURE SET (Purple Background Card - Wistia 8kttv29t5z)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-white/20 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-white pb-12 -mb-[14px] cursor-pointer text-white">パフォーマンスの向上</span>
              <span className="text-white/70 cursor-pointer hover:text-white transition-colors">インサイトの可視化</span>
              <span className="text-white/70 cursor-pointer hover:text-white transition-colors">離職防止・定着率向上</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-white">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">パフォーマンスの向上</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-white">
                  全社規模でハイパフォーマンスを生み出すカルチャーを醸成
                </h2>
                <div className="copy text-md font-sans text-white/90 leading-relaxed">
                  <p>
                    一貫性があり、明確な目標に向かって進む組織を構築します。科学的に検証されたツールを活用して、より価値の高い業務を後押しし、人材を育成。社員が最大限の力を発揮できる環境を整えることで、事業成果は劇的に飛躍します。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <div className="shadow-1 rounded-3xl overflow-hidden bg-white/10 p-12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/10">
                    <iframe 
                      src="https://fast.wistia.net/embed/iframe/8kttv29t5z" 
                      title="High Performance Culture Demo"
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
         8. CAROUSEL FEATURE SET 2 (Tan Background Card - Wistia oo42jowr0q)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">People Science</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">目的を持ったAI</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">データインサイト</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">優れた操作性（UX）</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">People Science</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  より良い働き方を実現する新しいアプローチを発見
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    ピープルサイエンスはCulture Ampのあらゆる機能の核となっています。組織心理学とデータサイエンスを融合させ、活力ある組織文化の構築に向けた推測を排除し、明確な根拠に基づいた変革をもたらします。
                  </p>
                </div>
                <div className="font-sans">
                  <a href="/science/people-science" className="button button--secondary">
                    アプローチを見る
                  </a>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <div className="shadow-1 rounded-3xl overflow-hidden bg-white p-12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                    <iframe 
                      src="https://fast.wistia.net/embed/iframe/oo42jowr0q" 
                      title="People Science Demo"
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
         9. TESTIMONIALS SECTION (John Ferguson - NASCAR)
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
                <div className="text-24 tablet:text-32 font-serif font-medium mb-36 leading-relaxed text-white">
                  「組織のポリシー変更を推し進める際、客観的なデータは極めて不可欠です。Culture Ampを通じて得られたインサイトは、私たちの重要な意思決定や具体的アクションをかたち作る鍵となっています」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/3LMMoMHyhyyH1JxSCymcev7bxCU=/0x100/cultureampcom/production/9c7/31b/4ee/9c731b4ee904b672140ff56f/nascar-white.png" alt="NASCAR Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16 font-sans">John Ferguson</p>
                <p className="text-14 text-white/80 font-sans">NASCAR / Chief Human Resources Officer</p>
                <div className="mt-36 font-sans">
                  <a href="/case-studies/nascar" className="button button--secondary-reversed">
                    事例の詳細を見る
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         10. FINAL BOTTOM CTA SECTION (全ページ共通)
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