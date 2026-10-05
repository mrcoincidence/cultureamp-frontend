'use client';

import LogoMarquee from "@/components/LogoMarquee";
import BadgeSet from "@/components/BadgeSet";

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
            <p className="eyebrow font-sans">
              CFO（最高財務責任者）向け ピープル戦略のROI
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              成果と成長を力強く駆動するピープル戦略
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                ピープル戦略を売上、利益率、業務効率と確実に連動。Culture Ampは人とパフォーマンスを統合し、持続可能な事業成長の促進、高コストな離職の防止、手間の増える業務の効率化を実現します。
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
      <LogoMarquee />

      {/* ==========================================================================
         3. FEATURE 1: Fuel Financial Performance
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              財務パフォーマンスと持続可能な成長の加速
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
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
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              組織全体の生産性とフォーカス領域の向上
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
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
         5. FEATURE 3: Prove Workforce ROI (Wistia scf00r0ivt)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              成長する組織がもたらす高いROI（投資対効果）を可視化
            </h2>
            <div className="text-md copy mb-36 font-sans text-black leading-relaxed">
              <p>
                テクノロジー、人材、インフラへの投資は確実に成果へ結びつきます。Culture Ampがいかに業務効率を高め、高コストな離職を抑え、持続可能な収益性を生み出すかを裏付ける調査結果をご覧ください。
              </p>
            </div>
            <div className="font-sans">
              <a href="/resources/report/economic-impact-of-culture-amp" className="button button--secondary">
                調査レポートを読む
              </a>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/scf00r0ivt" 
                  title="Workforce ROI Report Demo"
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
         7. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">パフォーマンスの向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">インサイトの可視化</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">離職防止・定着率向上</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">パフォーマンスの向上</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  全社規模でハイパフォーマンスカルチャーを醸成
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
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
         8. TESTIMONIALS SECTION (Unifonic事例 / Ticketmaster事例)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 items-center">
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-10 desktop:col-start-3 desktop:col-span-8 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 desktop:text-40 font-serif font-medium mb-36 leading-relaxed text-white">
                  「人事チームの信頼性は劇的に向上しました。経営的な議論に必要なデータをCulture Ampが提供してくれたおかげです。経営陣がレポートに迅速にアクセスし、組織データを深掘りできることは非常に価値がありました」
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