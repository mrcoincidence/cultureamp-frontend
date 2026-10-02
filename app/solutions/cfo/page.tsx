export default function CfoSolutionPage() {
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
              CFO（最高財務責任者）向け ピープル戦略のROI
            </p>
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              成果と成長を<br className="hidden desktop:block" />力強く駆動する<span className="font-camper camper-underline">ピープル戦略</span>
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                ピープル戦略を売上、利益率、業務効率と確実に連動。Culture Ampは人とパフォーマンスを統合し、持続可能な事業成長の促進、高コストな離職の防止、そして組織全体のオペレーション効率向上を実現します。
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/fuXbN7RxmVSwyhbl8JegN26gMJc=/1250x0/cultureampcom/production/a34/f68/ebb/a34f68ebb803d9508909f096/Solutions-Hero-Leadership-CFO.png" 
              alt="CFO Leadership Solution" 
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
         3. FEATURE 1: Fuel Financial Performance
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              財務パフォーマンスと持続可能な成長の加速
            </h2>
            <div className="text-md copy">
              <p>
                組織のパフォーマンス、生産性、エンゲージメントへの戦略的投資により、売上成長と利益率を推進。従業員が活き活きとポテンシャルを発揮するとき、ビジネスもまた飛躍的な成果を上げます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/Kp1GqyF8GX41MXF3mHohX2YrjPs=/750x0/cultureampcom/production/519/702/193/51970219334b16ffaf51f7f0/Shape.png" 
                alt="Fuel Financial Performance" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Boost Productivity
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              組織全体の生産性とフォーカス領域の向上
            </h2>
            <div className="text-md copy">
              <p>
                科学的根拠に基づいた目標設定により、チームが最重要課題に集中できるよう整列。OKRや1-on-1を通じて業務の透明性と個々の達成責任感を醸成し、全社的なパフォーマンスを底上げします。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/BY7fm_4rnNYDbUHli2rT2ZOc1XE=/750x0/cultureampcom/production/af4/e7e/bc9/af4e7ebc959d8c6b07d93488/Perform-Goal-Tracking-Alignment.png" 
                alt="Boost Productivity" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Prove Workforce ROI
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-heading font-medium heading-sm mb-24">
              成長する組織がもたらす高いROI（投資対効果）を可視化
            </h2>
            <div className="text-md copy mb-36">
              <p>
                テクノロジー、人材、インフラへの投資は確実に成果を結びます。Culture Ampがいかに業務効率を高め、高コストな離職を抑え、持続可能な収益性を生み出すかを裏付ける調査結果をご覧ください。
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
                alt="Workforce ROI Report" 
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
         7. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer">パフォーマンスの向上</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">インサイトの可視化</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">離職防止・定着率向上</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24">パフォーマンスの向上</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48">
                  全社規模でハイパフォーマンスカルチャーを醸成
                </h2>
                <div className="copy text-md">
                  <p>
                    一貫性があり、目標に向かって突き進む強固な組織を構築。科学的に検証されたツールを活用して成果に繋がる対話を促し、才能を伸ばします。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OAwmUeJ5nnbrXSopJXARGPXv_ZU=/750x0/cultureampcom/production/570/97c/50c/57097c50ca948577c14d4718/set-persona-leaders.jpg" 
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
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-10 desktop:col-start-3 desktop:col-span-8 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 desktop:text-40 font-heading font-medium mb-36 leading-relaxed">
                  「人事チームの信頼性は劇的に向上しました。経営的な議論に必要なデータをCulture Ampが提供してくれたおかげです。経営陣がレポートに迅速にアクセスし、組織データを深掘りできることは非常に価値がありました」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/UsLBTyB4gteojorvSgxP903gM-8=/0x100/cultureampcom/production/23b/08a/640/23b08a640a11a5a874d04bda/logo-ticketmaster-white.png" alt="Ticketmaster Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">Paula de Haen</p>
                <p className="text-14 text-white/80">Ticketmaster / VP of People Programs</p>
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