export default function ManufacturingSolutionPage() {
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
              製造業向け 従業員体験（EX）ソフトウェア
            </p>
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              現場の「人」の力で推進する<br className="hidden desktop:block" /><span className="font-camper camper-underline">モノづくり</span>の未来
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                テクノロジーが製造現場を再定義する中、Culture Ampは現場からのモバイル対応フィードバックやリーダーシップスキリングを提供。スーパーバイザーが変化を効果的にマネジメントできるように支援し、現場の安定と力強い生産性を維持します。
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/LrE2vw6dwNqrj4llFUtyS6IKfug=/1250x0/cultureampcom/production/7fe/425/0e3/7fe4250e309fbfb6d25aa9ca/26Q2-Image-Solutions-MFG-4.png" 
              alt="Manufacturing Solution" 
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
            <div className="flex flex-wrap justify-center items-center gap-12 tablet:gap-16 opacity-80">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/gJ4k0e2XUStNho9cRjJWJTOuWts=/0x100/cultureampcom/production/718/cf9/be7/718cf9be7449359416d5293d/brownes-dairy-black.png" alt="Brownes Dairy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/d8E5yXWGH-26t0SOwMpb8NQIoZ8=/0x100/cultureampcom/production/89b/742/e3d/89b742e3d835f1498ed208d8/hubexo-logo.png" alt="Hubexo" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/DyetypVYW0j4x13v_IfolXajwZk=/0x100/cultureampcom/production/728/ed2/ba1/728ed2ba1628908a6a47d6bc/PZ-Cussons-logo.svg.png" alt="PZ Cussons" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/noIWv3wnDIColq95y03_9Dg4FSI=/0x100/cultureampcom/production/671/9ef/6a9/6719ef6a965530ba611b401a/Elanco-Logo.png" alt="Elanco" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/8ketG2s6z-Juuu0GAydz3A_0274=/0x100/cultureampcom/production/7ae/953/bdb/7ae953bdbcd4e9eabc194891/Benchmark-RGB.png" alt="Benchmark" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/yBbph59KWJl5pL2MLLhp6eRmlHc=/0x100/cultureampcom/production/31b/987/225/31b98722579f1087db980dbd/logo-kind2x.png" alt="Kind" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. FEATURE 1: Understand Drivers for Deskless Workers
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              現場（デスクレスワーカー）のエンゲージメントと定着要因を把握
            </h2>
            <div className="text-md copy">
              <p>
                エンゲージメントデータは、現場の不確実性がどこでパフォーマンスを阻害しているかを明示します。AIを活用したインサイトとコーチングにより、工場床からの声を吸い上げ、チーム全体が素早く改善アクションを実行できる環境を整えます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/03iIME84dK7rGywI4yGdREp0kRo=/750x0/cultureampcom/production/8c0/3cb/938/8c03cb93808e5737d9033209/set-differentiator-purposeful-ai.jpg" 
                alt="Frontline Engagement Drivers" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Empower Frontline Managers
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              現場のマネージャーが確信を持ってリードできるよう支援
            </h2>
            <div className="text-md copy">
              <p>
                現場からのフィードバックを具体的な次のアクションへ変換。Culture Ampは個別に最適化されたガイドラインとAIコーチングを提供し、現場リーダーが即座に行動を起こし、測定可能な成果を生み出せるようサポートします。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AY0lhZpGGGR5gI3Q1Sy1bKrRucc=/750x0/cultureampcom/production/ac3/b01/80a/ac3b0180a81c4d20f05e0a23/set-differentiator-people-science.jpg" 
                alt="Empower Frontline Managers" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: High-Performance Culture at Scale
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              全社規模でハイパフォーマンスカルチャーを構築
            </h2>
            <div className="text-md copy">
              <p>
                エンゲージメントの兆候とパフォーマンス結果を統合したプラットフォームで、成果向上を加速。エンゲージメントを高め、チーム全体の方向性を一致させ、現場から経営まで一貫した成功を実現します。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/BY7fm_4rnNYDbUHli2rT2ZOc1XE=/750x0/cultureampcom/production/af4/e7e/bc9/af4e7ebc959d8c6b07d93488/Perform-Goal-Tracking-Alignment.png" 
                alt="High Performance Culture" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. FEATURE 4: Turn Frontline Signals into Plant-wide Success
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              現場のシグナルを工場・事業所全体の成功へ昇華
            </h2>
            <div className="text-md copy mb-36">
              <p>
                400社以上の製造事業者が、経営陣と工場現場のギャップを埋めるためにCulture Ampを選ぶ理由をご覧ください。
              </p>
            </div>
            <div>
              <a href="#" className="button button--secondary">
                ソリューションガイドを見る
              </a>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/tDOAdrTPuICKF44RJrz09tE_dNA=/750x0/cultureampcom/production/34b/ff0/40a/34bff040a025bac963ef3840/26Q2-4-pager-Solutions-page-2.png" 
                alt="Manufacturing Solution Guide" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. POWER CTA COMPONENT
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/ajlqchcy9DnXiQFH68htk6ZI2Tw=/250x0/cultureampcom/production/3c0/989/562/3c0989562636b98d07ddc6b3/insights-cta-manufacturing.png" 
              alt="Manufacturing Industry Insights" 
              className="mb-36 max-w-132 mx-auto" 
            />
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              優良製造事業者の知見とベンチマークを取得
            </h2>
            <div className="flex flex-col tablet:flex-row tablet:justify-center gap-16">
              <a href="/science/insights" className="button button--secondary">
                業界ベンチマークを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         8. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer">現場パフォーマンス向上</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">エンゲージメント推進</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">目的を持ったAI</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">迅速な導入</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24">現場パフォーマンス向上</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48">
                  製造現場のパフォーマンスを強化
                </h2>
                <div className="copy text-md">
                  <p>
                    <strong>モバイル対応の現場ワーカーとオフィス勤務者</strong>双方が成果を出せる環境を準備。1-on-1で目的意識を揃え、一元化されたフィードバックで質の高い評価を行い、目標追跡でスキル習得を促します。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OAwmUeJ5nnbrXSopJXARGPXv_ZU=/750x0/cultureampcom/production/570/97c/50c/57097c50ca948577c14d4718/set-persona-leaders.jpg" 
                  alt="Frontline Performance" 
                  className="w-full rounded-2xl object-cover shadow-1"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         9. TESTIMONIALS SECTION (Purple Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 items-center">
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-10 desktop:col-start-3 desktop:col-span-8 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 desktop:text-40 font-heading font-medium mb-36 leading-relaxed">
                  「Culture Ampの評価とエンゲージメントのフレームワークを導入したことで、毎週チーム全体で2日分に相当する作業時間を削減することができました」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/gJ4k0e2XUStNho9cRjJWJTOuWts=/0x100/cultureampcom/production/718/cf9/be7/718cf9be7449359416d5293d/brownes-dairy-black.png" alt="Brownes Dairy Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                </div>
                <p className="font-bold text-16">Brownes Dairy 事例</p>
                <p className="text-14 text-white/80">週2日相当の業務時間を削減</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         10. FINAL BOTTOM CTA SECTION
         ========================================================================== */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-heading font-medium heading-lg mb-36">
              人への投資が、確かな<span className="font-camper camper-underline camper-underline--short">インパクト</span>を創り出す
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