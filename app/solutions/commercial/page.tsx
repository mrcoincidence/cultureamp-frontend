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
            <h1 className="eyebrow">中面・成長企業向け 最優良HRソフトウェア</h1>
            <h2 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              持続可能なハイパフォーマンス<br className="hidden desktop:block" />
              <span className="font-camper camper-underline">カルチャー</span>を構築
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                人事部門の事務負担を増やすことなく、エンゲージメント、パフォーマンス管理、継続的育成を統合したオールインワン型プラットフォームを提供します。
              </p>
            </div>

            {/* G2 / Capterra 評価バッジ */}
            <ul className="flex gap-x-24">
              <li className="flex items-center">
                <div className="w-[30px] h-[30px] mr-8 bg-black flex items-center justify-center rounded-sm text-white font-bold text-12">G2</div>
                <span className="text-20 font-bold mr-4">4.5</span>
                <span className="text-10">on G2</span>
              </li>
              <li className="flex items-center">
                <div className="w-[30px] h-[30px] mr-8 bg-black flex items-center justify-center rounded-sm text-white font-bold text-12">C</div>
                <span className="text-20 font-bold mr-4">4.6</span>
                <span className="text-10">on Capterra</span>
              </li>
            </ul>

            <div className="flex flex-col tablet:flex-row items-center gap-16">
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
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full">
            <div className="flex flex-wrap justify-center items-center gap-12 tablet:gap-16 opacity-80">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/TpfAZYDbr566TXEd4Q_XEd0cUsY=/0x100/cultureampcom/production/329/456/671/3294566715344ce511e4cf1f/logo-freeagent2x.png" alt="FreeAgent" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/K7043thzbUuzbnEwt_G7D457OHM=/0x100/cultureampcom/production/d58/de3/ab8/d58de3ab86928031d12446f6/logo-the-iconic2x.png" alt="THE ICONIC" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/gJ4k0e2XUStNho9cRjJWJTOuWts=/0x100/cultureampcom/production/718/cf9/be7/718cf9be7449359416d5293d/brownes-dairy-black.png" alt="Brownes Dairy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/Ff5EVwN1fEB_3qs-tbPc8bSmh4M=/0x100/cultureampcom/production/56d/4fc/993/56d4fc993508cb705402c5d1/logo-richard-crookes-construction2x-1.png" alt="Richard Crookes Constructions" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uQzed_fC_w20TMaCkHRmEHhd6Wo=/0x100/cultureampcom/production/fc9/0b9/911/fc90b99110b9f83dbdd6ca2a/Hanna-Andersson-Logo-Vector.svg-.png" alt="Hanna Andersson" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/V1gll4aht4-FyDBMIXzCksyaKhc=/0x100/cultureampcom/production/892/9ef/8e6/8929ef8e6215e040eead4c71/blueprint-medicines-black.png" alt="Blueprint Medicines" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/pAQuzlk7pZEMAwTgu-7Dn3Fm5SI=/0x100/cultureampcom/production/14b/5b3/7c6/14b5b37c603235b582213f0a/logo-pampered-chef2x.png" alt="Pampered Chef" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/TicojrYKOQ0YiBcBW0SyvzG095k=/0x100/cultureampcom/production/443/e31/222/443e31222f5213645d3964e9/logo-foundry2x.png" alt="Foundry" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. FEATURE 1: One unified solution for your people
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              組織のための1つの統合ソリューション
            </h2>
            <div className="text-md copy">
              <p>
                エンゲージメントデータと人事評価を、科学的根拠に基づいた1つの洗練されたシステムに統合。従業員の成長を事業目標へ直結させます。
              </p>
            </div>
          </div>
          
          {/* 左側 Wistia動画プレイヤー (vkwdi9zr47) */}
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
            <h2 className="font-heading font-medium heading-sm mb-24">
              マネージャーが確信を持ってリーダーシップを発揮できるよう支援
            </h2>
            <div className="text-md copy">
              <p>
                マネージャーの成長が優れたリーダーシップを生みます。Culture Ampの「AI Coach」はリアルタイムのインサイトと個別に最適化されたガイドラインを提供し、フィードバックに基づく確実なアクションを後押しします。
              </p>
            </div>
          </div>
          
          {/* 右側 Wistia動画プレイヤー (a69157phjy) */}
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
            <h2 className="font-heading font-medium heading-sm mb-24">
              本当に重要な業務に時間を活用
            </h2>
            <div className="text-md copy">
              <p>
                自動化、テンプレート、リアルタイムのインサイトにより人事オペレーションを最適化。作業負担を軽減し、マネージャーの効果的なリーダーシップと本質的な重要施策へ集中できます。
              </p>
            </div>
          </div>
          
          {/* 左側 Wistia動画プレイヤー (hxn7lwyok2) */}
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
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              HRテクノロジー投資の価値を最大化
            </h2>
            <div className="copy text-lg mb-36 desktop:mb-48">
              <p>
                Culture Ampがいかに既存のHRIS（人事基幹システム）を補完・強化し、従来のシステムでは捉えきれない深いピープルインサイトをもたらすかをご覧ください。
              </p>
            </div>
            <div className="flex flex-col tablet:flex-row tablet:justify-center gap-16">
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
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer">Perform</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">離職リスク予防インサイト</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">拡張性とセキュリティ</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24">Perform</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48">
                  モダンで継続的なパフォーマンス管理を展開
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48">
                  <p>
                    形骸化した年1回の評価を、継続的フィードバック、目標管理、公正な評価に刷新。組織全体の成長とパフォーマンスを加速します。
                  </p>
                </div>
                <div>
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
         8. CASE STUDY CAROUSEL SECTION (Hanna Andersson, Brownes Dairy, FreeAgent)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 row-span-4 col-start-1 col-span-full flex flex-col grid grid-cols-subgrid grid-rows-subgrid desktop:gap-y-60">
            
            <div className="col-start-1 desktop:col-start-2 col-span-full desktop:col-end-7 flex flex-col">
              <h2 className="font-heading font-medium heading-md text-center desktop:text-left text-pretty mb-24">
                優れたカルチャーと強固な業績の両立を支援
              </h2>
            </div>

            {/* 左側：事例詳細カード / 右側：アーチ型画像 */}
            <div className="row-start-3 col-start-1 col-span-full grid grid-cols-12 gap-x-24 items-end">
              
              {/* 左側：事例カード (Hanna Andersson) */}
              <div className="col-span-12 desktop:col-span-6 bg-white shadow-1 rounded-3xl p-24 tablet:p-36 flex flex-col justify-between">
                <div>
                  <div className="bg-tan rounded-xl p-16 flex items-center justify-between mb-24">
                    <img 
                      src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uQzed_fC_w20TMaCkHRmEHhd6Wo=/0x100/cultureampcom/production/fc9/0b9/911/fc90b99110b9f83dbdd6ca2a/Hanna-Andersson-Logo-Vector.svg-.png" 
                      alt="Hanna Andersson" 
                      className="h-8 object-contain" 
                    />
                    <a href="/case-studies/hanna-andersson" className="hidden desktop:inline-block button button--secondary">
                      事例を見る
                    </a>
                  </div>
                  <h3 className="font-heading font-medium heading-xxs mb-16">
                    Hanna Anderssonがいかにトップダウンで組織カルチャーを変革したか
                  </h3>
                  <div className="flex items-baseline gap-x-8 mb-24">
                    <span className="font-heading font-medium heading-xl">95%</span>
                    <span className="text-md text-muted">エンゲージメントサーベイ回答率</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-16 border-t border-black-10">
                  <div className="flex gap-x-8">
                    <span className="inline-block rounded-full border border-black-30 px-12 py-6 text-12 font-semibold">
                      Engage
                    </span>
                    <span className="inline-block rounded-full border border-black-30 px-12 py-6 text-12 font-semibold">
                      Perform
                    </span>
                  </div>
                  <a href="/case-studies/hanna-andersson" className="desktop:hidden text-link text-14 font-semibold">
                    事例を見る →
                  </a>
                </div>
              </div>

              {/* 右側：アーチ型（半円ドーム型 mask--6）画像 */}
              <div className="col-span-12 desktop:col-span-6 hidden desktop:flex justify-end">
                <div className="w-full max-w-[538px] h-[360px] rounded-t-full overflow-hidden shadow-1">
                  <img 
                    src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uSUXh9xHwdBimO4_XwWZ0dnHQE8=/1000x1000/cultureampcom/production/133/6e4/48f/1336e448fde6e9e5a96b28cf/Hanna-Holiday25-Company-Photo-3x2-2.jpg" 
                    alt="Hanna Andersson employees" 
                    className="w-full h-full object-cover"
                  />
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
              あらゆるビジネスニーズに応えるフレキシブルなプラン
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16">
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