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
            <p className="eyebrow">
              金融サービス業界向け 従業員体験（EX）ソフトウェア
            </p>
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              レジリエントで高業績な<br className="hidden desktop:block" /><span className="font-camper camper-underline">組織と人材</span>を構築
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                優秀な人材を引き留め、変化の激しい市場環境を確信を持ってナビゲート。Culture Ampは、データ駆動のアクションを推進してオペレーションを拡張し、生産性を向上させます。エンタープライズグレードのデータプライバシーとセキュリティで強力に守られています。
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
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full">
            <div className="flex flex-wrap justify-center items-center gap-12 tablet:gap-16 opacity-80">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/L_cKoKSl8-FJNv8kGTs8BXf1sEk=/0x100/cultureampcom/production/da4/691/a2a/da4691a2adf8350efa7c6aa1/logo-nasdaq2x.png" alt="Nasdaq" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/zjqdvUOTrLD-O5pup4HSaEmxazM=/0x100/cultureampcom/production/c18/0d8/182/c180d8182cc544eacc5e556c/logo-questrade2x.png" alt="Questrade" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/IMB14j_UzVxKMiCqANSiivD9ltI=/0x100/cultureampcom/production/1bb/530/006/1bb53000642195a8a6de0454/logo-sharesies2x.png" alt="Sharesies" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/K-UyD-zXyshc5XHSnsYJaDTAZ4c=/0x100/cultureampcom/production/4ba/b34/4b5/4bab344b597e6a3ffd49ea5c/legalsuper-mono.png" alt="LegalSuper" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/VaWWQTyI4t7mkq-SCRuxaiMNuE0=/0x100/cultureampcom/production/a73/ec4/7ca/a73ec47ca9e38834560e482e/logo-bankfirst2x.png" alt="Bank First" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/dpFp_p7K3zEPjBUjGUrQvdkjB9U=/0x100/cultureampcom/production/441/537/cf5/441537cf5ab566806e580cdc/PN-bank-logo.png" alt="P&amp;N Bank" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. FEATURE 1: Mitigate Risk & Retain Talent
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              リスクを軽減し、トップパーフォーマーを引き留める
            </h2>
            <div className="text-md copy">
              <p>
                「人」への投資不足は重大なコスト増につながります。Culture Ampは金融機関が早期に離職リスクを特定し、望まない退職を未然に防止。生産性の低下、不振、離職に伴う隠れたコスト発生を防ぎます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AY0lhZpGGGR5gI3Q1Sy1bKrRucc=/750x0/cultureampcom/production/ac3/b01/80a/ac3b0180a81c4d20f05e0a23/set-differentiator-people-science.jpg" 
                alt="Mitigate Risk Feature" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Data-driven Action
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              データに基づくアクションで効率性を拡大
            </h2>
            <div className="text-md copy">
              <p>
                人事インサイトとパフォーマンスデータのギャップを埋め、最もインパクトのある部分に集中投資。個人の成果と能力開発を組織の最優先事項と連結させ、業績を伸ばす従業員体験をかたち作ります。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/BY7fm_4rnNYDbUHli2rT2ZOc1XE=/750x0/cultureampcom/production/af4/e7e/bc9/af4e7ebc959d8c6b07d93488/Perform-Goal-Tracking-Alignment.png" 
                alt="Scale Efficiency Feature" 
                className="w-full h-auto rounded-2xl object-cover"
              />
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
            <h2 className="font-heading font-medium heading-sm mb-24">
              金融レベルの強固なプライバシーとセキュリティ
            </h2>
            <div className="text-md copy">
              <p>
                Culture Ampは、エンプライズ水準のデータプライバシー、厳格なセキュリティ管理、安全なAIガイドラインを備えて設計されています。セキュリティリスクに煩わされることなく「人」への施策に専念できます。
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
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              業界トップクラスのパフォーマンスを誇る金融機関のインサイトを取得
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
              <span className="text-muted cursor-pointer hover:text-black transition-colors">スムーズな導入</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24">パフォーマンス向上</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48">
                  社員とビジネス双方のハイパフォーマンスを引き出す
                </h2>
                <div className="copy text-md">
                  <p>
                    成果に向かって団結する組織を構築。1-on-1や目標管理によって意義のある対話を増やし、戦略的取り組みを軌道に乗せ、オペレーションの障壁を解消します。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OAwmUeJ5nnbrXSopJXARGPXv_ZU=/750x0/cultureampcom/production/570/97c/50c/57097c50ca948577c14d4718/set-persona-leaders.jpg" 
                  alt="High Performance" 
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
                  「高度なガバナンスと成果の計測可能性が両立したプラットフォーム。Culture Ampのアナリティクスによって離職リスクを的確にモニタリングし、業界平均（50%）を大幅に下回る離職率を維持できています」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/L_cKoKSl8-FJNv8kGTs8BXf1sEk=/0x100/cultureampcom/production/da4/691/a2a/da4691a2adf8350efa7c6aa1/logo-nasdaq2x.png" alt="Nasdaq Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">Nasdaq 事例</p>
                <p className="text-14 text-white/80">自主離職率 50% 未満を達成</p>
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