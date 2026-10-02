import { Plus, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-24 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-36 tablet:mb-60 desktop:mb-0">
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left break-keep">
              組織文化を最大の<br className="hidden desktop:block" />競争優位性に
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              ピープルサイエンスとAIを活用したCulture Ampは、パフォーマンス、定着率、そして組織の持続的成長を推進するためのインサイトと実践的ツールを提供します。
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
            </div>
          </div>

          {/* 右側ヒーロービジュアル */}
          <div className="row-start-2 desktop:row-start-1 col-span-full tablet:col-span-10 desktop:col-span-6 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OAwmUeJ5nnbrXSopJXARGPXv_ZU=/750x0/cultureampcom/production/570/97c/50c/57097c50ca948577c14d4718/set-persona-leaders.jpg" 
              alt="Culture Amp Platform" 
              className="w-full rounded-[32px] object-cover shadow-1"
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
                世界6,000社以上の先進企業に導入されています
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
         3. PRODUCT FEATURE PERSONA SET SECTION (Tan Background)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* ペルソナタブ */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer">リーダー</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">マネージャー</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">従業員</span>
              <span className="text-muted cursor-pointer hover:text-black transition-colors">人事チーム</span>
            </div>

            {/* ペルソナグリッド */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24">リーダー向け</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48">
                  パフォーマンスを促進する<span className="font-camper camper-underline camper-underline--long">データに基づく</span>意思決定に必要なインサイトを取得
                </h2>
                <div className="copy text-md">
                  <p>Culture AmpのAIとピープルサイエンスによるレコメンデーションは、ビジネスの画期的なパフォーマンスを解き放つための、より良い意思決定を可能にします。</p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/VFQ4H7Q23r8DGMzAR4YluDUJn9Y=/750x0/cultureampcom/production/0f0/715/fa0/0f0715fa00e594569b090ec0/set-persona-managers.jpg" 
                  alt="Persona Showcase" 
                  className="w-full rounded-2xl object-cover shadow-1"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. BADGE SET SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 col-span-full text-center">
            <h2 className="font-heading font-medium heading-sm text-balance mb-24 tablet:mb-36 desktop:mb-48">
              人のために構築され、結果で証明されています
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
         5. CASE STUDY CAROUSEL PREVIEW SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full desktop:col-span-6 flex flex-col justify-center mb-36 desktop:mb-0">
            <h2 className="font-heading font-medium heading-md text-center desktop:text-left text-pretty mb-24">
              より良い<span className="font-camper camper-underline">組織文化</span>と、より良い<span className="font-camper camper-underline">業績の構築</span>をどう支援してきたかをご覧ください
            </h2>
            <div className="flex justify-center desktop:justify-start">
              <a href="/case-studies" className="button button--primary">
                すべての導入事例を見る
              </a>
            </div>
          </div>

          <div className="col-span-full desktop:col-span-6 rounded-3xl overflow-hidden bg-tan p-8 tablet:p-12">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JoJaqpuyknGmSnkt8LtVvizQ_jc=/1000x1000/cultureampcom/production/9c7/1c0/0ce/9c71c00cecd2b929734d7c46/case-study-unifonic2x.png" 
              alt="Case Study Showcase" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. CONTENT DRAWER / ACCORDION SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 py-24 desktop:py-48 bg-white shadow-2 rounded-3xl px-24 tablet:px-36">
            {[
              "スケーラブル、安全、そして相互運用可能",
              "迅速に立ち上げるためのサービスとサポート",
              "お客様のデータを安全に保ちます",
              "専門的な人事リソースへのアクセス",
              "世界最大の人事ネットワークとグローバルコミュニティに参加"
            ].map((title, i) => (
              <div key={i} className="group border-b last:border-b-0 border-black-10 py-12 desktop:py-24 cursor-pointer flex justify-between items-center transition-all">
                <h2 className="font-main text-lg transition duration-500 group-hover:translate-x-10">
                  {title}
                </h2>
                <span className="border border-black-30 rounded-full p-12 transition-all group-hover:bg-black-10 group-hover:border-black flex-shrink-0 ml-4">
                  <Plus size={20} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. RESOURCES / BRAND CAMPAIGN SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 col-span-full tablet:col-span-6 desktop:col-span-5 flex flex-col justify-center mb-36 tablet:mb-60">
            <h2 className="heading-md font-heading font-medium text-pretty mb-16 tablet:mb-24">
              リーダーはいかにして高業績を形成するか
            </h2>
            <div className="text-lg">
              優れた職場を築くためのアイデア、ツール、視点をご覧ください。
            </div>
          </div>
          
          <div className="col-span-full grid grid-cols-1 tablet:grid-cols-2 gap-y-16 tablet:gap-y-24 gap-x-24 desktop:gap-x-84">
            {[
              "Culture drives performance",
              "Tennis Australia",
              "Emerging Culture Creators",
              "Esther Perel, managers guide",
              "Culture First podcast",
              "Performance Unlocked"
            ].map((item, idx) => (
              <div key={idx} className="group relative col-span-1 border-l border-b border-black-30">
                <a href="#" className="flex items-center justify-between px-16 py-12 desktop:px-24 desktop:py-16">
                  <h3 className="text-16 tablet:text-24 font-heading font-medium group-hover:text-purple-400 transition-colors">
                    {item}
                  </h3>
                  <ChevronRight size={20} className="text-black group-hover:text-purple-400 transition-colors" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
         8. FINAL BOTTOM CTA SECTION
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