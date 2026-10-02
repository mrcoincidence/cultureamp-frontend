export default function SoftwareTechnologySolutionPage() {
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
              テック企業向け 従業員エンゲージメント・プラットフォーム
            </p>
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              次世代ツールで<br className="hidden desktop:block" />ハイパフォーマンスを<span className="font-camper camper-underline">スケール</span>
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                Culture Ampで組織の将来性を担保し、AIトランスフォーメーションを加速。エンゲージメントとパフォーマンスデータを統合し、マネージャーの意思決定を確かなものにすることで、成長を拡大する高業績カルチャーを構築します。
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/nJHAMuByTcKitgfQzK9722f98io=/1250x0/cultureampcom/production/7ee/903/738/7ee903738a0db2bffb681900/Solutions-Hero-Industry-Software-Tech.png" 
              alt="Software Technology Solution" 
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
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/RP0lFWFb5H0GtkhqXzx16CmlDhk=/0x100/cultureampcom/production/c85/099/4b2/c850994b2f62507a91a59804/logo-unifonic2x.png" alt="Unifonic" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/TpfAZYDbr566TXEd4Q_XEd0cUsY=/0x100/cultureampcom/production/329/456/671/3294566715344ce511e4cf1f/logo-freeagent2x.png" alt="FreeAgent" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/TicojrYKOQ0YiBcBW0SyvzG095k=/0x100/cultureampcom/production/443/e31/222/443e31222f5213645d3964e9/logo-foundry2x.png" alt="Foundry" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/llZOPnKu4nc7QPlQU5Ll9g0f3FM=/0x100/cultureampcom/production/891/78f/434/89178f4343590b7f6ef4b2f6/logo-intercom2x.png" alt="Intercom" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/J_eOVgoS89dDBGyX4_M4zbn9z1s=/0x100/cultureampcom/production/d28/340/cb6/d28340cb6fa83d9286559d8a/logo-omio-travel2x.png" alt="Omio" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/xewqYZ41-5YcUGV_CRzefLHgSjs=/0x100/cultureampcom/production/501/a36/893/501a3689379625cb8fc8f8ae/olx-group-black.png" alt="OLX Group" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. FEATURE 1: Accelerate AI Transformation
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              組織におけるAIトランスフォーメーションの加速
            </h2>
            <div className="text-md copy">
              <p>
                マネージャー、リーダー、人事チームが一体となってAI導入を推進。安全かつスピーディーに明確な事業成果をもたらします。AI適応度の診断、ガイドラインの設定、そして「AI Coach」や専用サーベイによるフィードバックの迅速なアクション化を支援します。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/03iIME84dK7rGywI4yGdREp0kRo=/750x0/cultureampcom/production/8c0/3cb/938/8c03cb93808e5737d9033209/set-differentiator-purposeful-ai.jpg" 
                alt="AI Transformation" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Empower Managers
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              マネージャーの確信に満ちたリーダーシップを支援
            </h2>
            <div className="text-md copy">
              <p>
                エンゲージメントとパフォーマンスのデータを具体的な次のステップに変換し、現場リーダーのインパクトを最大化。Culture Ampはタイムリーなインサイト、最適化されたアクションプラン、専門的なコーチングによりリーダーシップの質を高めます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OAwmUeJ5nnbrXSopJXARGPXv_ZU=/750x0/cultureampcom/production/570/97c/50c/57097c50ca948577c14d4718/set-persona-leaders.jpg" 
                alt="Empower Managers" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: High Performance at Scale
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              規模拡大に応じたハイパフォーマンスカルチャーの構築
            </h2>
            <div className="text-md copy">
              <p>
                エンゲージメントのシグナルとパフォーマンス結果を繋ぐ直感的な統合プラットフォームで、成果創出を加速。定着率を高め、チームのアジリティ（機敏性）と目標のベクトルを揃え、組織のスケールに応じた成功を実現します。
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
         6. POWER CTA COMPONENT
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/INx819CH0pQIET5X7Q4LFNv4uxI=/250x0/cultureampcom/production/05a/7e0/b66/05a7e0b66b297739dae900da/insights-cta-software-tech.png" 
              alt="Tech Industry Insights" 
              className="mb-36 max-w-132 mx-auto" 
            />
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              トップパフォーマンスを誇るテック企業のインサイトを取得
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
         7. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer">パフォーマンス向上</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">エンゲージメント向上</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">迅速な導入</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24">パフォーマンス向上</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48">
                  社員とビジネス双方の成果を最大化
                </h2>
                <div className="copy text-md">
                  <p>
                    プロダクトリリースや目標達成に向け、結束した組織を構築。1-on-1や目標管理機能で課題をスピーディーに解決し、フィードバックで人材の強みを伸ばします。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AY0lhZpGGGR5gI3Q1Sy1bKrRucc=/750x0/cultureampcom/production/ac3/b01/80a/ac3b0180a81c4d20f05e0a23/set-differentiator-people-science.jpg" 
                  alt="Performance Feature" 
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
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-10 desktop:col-start-3 desktop:col-span-8 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 desktop:text-40 font-heading font-medium mb-36 leading-relaxed">
                  「データに基づく従業員体験戦略を採用したことで、急激な環境変化や危機を乗り越えることができました。年間の離職率は23%削減されました」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/J_eOVgoS89dDBGyX4_M4zbn9z1s=/0x100/cultureampcom/production/d28/340/cb6/d28340cb6fa83d9286559d8a/logo-omio-travel2x.png" alt="Omio Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">Omio 事例</p>
                <p className="text-14 text-white/80">前年比 23% の離職率抑制を達成</p>
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