'use client';

import { useState } from "react";
import { Plus, ChevronRight } from "lucide-react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const personas = [
    {
      id: "leaders",
      label: "リーダー",
      title: "リーダー向け",
      heading: "パフォーマンスを促進するデータに基づく意思決定に必要なインサイトを取得",
      description:
        "Culture AmpのAIとピープルサイエンスによるレコメンデーションは、ビジネスの画期的なパフォーマンスを解き放つための、より良い意思決定を可能にします。",
      bgImage:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/VFQ4H7Q23r8DGMzAR4YluDUJn9Y=/750x0/cultureampcom/production/0f0/715/fa0/0f0715fa00e594569b090ec0/set-persona-managers.jpg",
      wistiaId: "hasx2xhtgd",
    },
    {
      id: "managers",
      label: "マネージャー",
      title: "マネージャー向け",
      heading: "チームのエンゲージメントを高め、確信を持ってチームを牽引",
      description:
        "データに基づいたタイムリーなフィードバックとガイドにより、現場のマネージャーがチームの課題を早期に発見し、アクションへ移せるよう支援します。",
      bgImage:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OAwmUeJ5nnbrXSopJXARGPXv_ZU=/750x0/cultureampcom/production/570/97c/50c/57097c50ca948577c14d4718/set-persona-leaders.jpg",
      wistiaId: "7oaad21wk7",
    },
    {
      id: "employees",
      label: "従業員",
      title: "従業員向け",
      heading: "自らの成長を実感し、働きがいのある職場環境を実現",
      description:
        "明確な目標設定、継続的なフィードバック、キャリア開発プランを通じて、すべての従業員が自らの可能性を最大限に発揮できる環境を提供します。",
      bgImage:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AY0lhZpGGGR5gI3Q1Sy1bKrRucc=/750x0/cultureampcom/production/ac3/b01/80a/ac3b0180a81c4d20f05e0a23/set-differentiator-people-science.jpg",
      wistiaId: "2zlq3b9i8z",
    },
    {
      id: "hr",
      label: "人事チーム",
      title: "人事チーム向け",
      heading: "戦略的人事の推進とオペレーション効率化を両立",
      description:
        "一元化されたデータプラットフォームと高度なアナリティクスにより、人事の事務負担を軽減し、全社的な組織変革にリソースを集中させます。",
      bgImage:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/vs4zvb8Uyi65Ec24pVeP1s2s6Xk=/750x0/cultureampcom/production/c87/c4a/21a/c87c4a21af4c307cd8d46ca1/content-drawer-feature-service-model.png",
      wistiaId: "nhe4y03lqf",
    },
  ];

  const currentPersona = personas[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? personas.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === personas.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION (グレーはみ出し解消・背景画像内部へ動画を精密レイヤー配置)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-24 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-36 tablet:mb-60 desktop:mb-0">
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              組織文化を最大の競争優位性に
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              ピープルサイエンスとAIを活用したCulture Ampは、パフォーマンス、定着率、増収を推進するためのインサイトと実践的ツールを提供します。
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16">
              <button className="button button--primary">
                デモを予約
              </button>
            </div>
          </div>

          {/* 右側：背景写真の中に動画がぴったり収まる精密構造 */}
          <div className="row-start-2 desktop:row-start-1 col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center relative overflow-hidden rounded-[32px]">
            {/* 奥：背景画像 */}
            <img 
              src="https://www.cultureamp.com/assets/slices/main/assets/public/media/home/home-hero-background-ab3d3e5c7416a1ae74e2.webp" 
              alt="Hero Background" 
              className="w-full h-auto rounded-[32px] object-cover block"
            />

            {/* 手前：背景写真の中央に配置される動画カード */}
            <div className="absolute inset-0 p-16 tablet:p-28 desktop:p-36 flex flex-col justify-center items-center pointer-events-none">
              <div className="shadow-1 rounded-3xl overflow-hidden w-full h-full pointer-events-auto flex items-center justify-center">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/yd587c9730" 
                  title="Culture Amp Demo Video"
                  className="w-full h-full object-cover rounded-3xl"
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
            
            <div className="flex items-center justify-center gap-x-8 tablet:gap-x-12 mb-24 desktop:mb-36">
              <p className="font-camper text-20 tablet:text-24 text-center">
                世界6,000社以上の先進企業に導入されています
              </p>
              <img 
                src="/camper-arrow-e2d67d1bcdf9465b66c2.svg" 
                alt="" 
                className="self-end mb-1 w-[36px] h-[27px] object-contain" 
              />
            </div>
            
            <div className="marquee">
              <ul className="marquee__group">
                <li><img alt="Bombas" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/b6ZXYvdnew5ULTc-k4nNoAd6zVk=/0x100/cultureampcom/production/ded/10e/fa8/ded10efa8b3082f295719db8/bombas-mono-black.png" /></li>
                <li><img alt="Etsy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lQ56D3kL32OzhBEpm7qbDLjvcYQ=/0x100/cultureampcom/production/1a5/d6b/02b/1a5d6b02b8261221d8d32439/etsy-mono-black.png" /></li>
                <li><img alt="McDonalds" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/sYNvNugRjnrZGnAO1dZ8hAt7T-8=/0x100/cultureampcom/production/ed0/812/6ef/ed08126ef3e15d0cbef09b98/mcdonalds-mono-black.png" /></li>
                <li><img alt="Intercom" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/WHMqmyo_eVeYB1DZjlKGrfD9GrE=/0x100/cultureampcom/production/882/ff4/338/882ff4338eff1c8e2b2b5ba0/logo-intercom-black2x.png" /></li>
                <li><img alt="MLB" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/94NqRtiAO8teiGEnB2QmrzYkwGI=/0x100/cultureampcom/production/6cf/986/4da/6cf9864dab1de1b0f6fd7f0e/mlb-logo-monochrome.png" /></li>
                <li><img alt="On" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JUH89YmI4JIsUAaM3kFTJeuHb3k=/0x100/cultureampcom/production/cb4/ded/466/cb4ded466d0a038c5c408622/on-black.png" /></li>
              </ul>
              <ul aria-hidden="true" className="marquee__group">
                <li><img alt="Bombas" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/b6ZXYvdnew5ULTc-k4nNoAd6zVk=/0x100/cultureampcom/production/ded/10e/fa8/ded10efa8b3082f295719db8/bombas-mono-black.png" /></li>
                <li><img alt="Etsy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lQ56D3kL32OzhBEpm7qbDLjvcYQ=/0x100/cultureampcom/production/1a5/d6b/02b/1a5d6b02b8261221d8d32439/etsy-mono-black.png" /></li>
                <li><img alt="McDonalds" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/sYNvNugRjnrZGnAO1dZ8hAt7T-8=/0x100/cultureampcom/production/ed0/812/6ef/ed08126ef3e15d0cbef09b98/mcdonalds-mono-black.png" /></li>
                <li><img alt="Intercom" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/WHMqmyo_eVeYB1DZjlKGrfD9GrE=/0x100/cultureampcom/production/882/ff4/338/882ff4338eff1c8e2b2b5ba0/logo-intercom-black2x.png" /></li>
                <li><img alt="MLB" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/94NqRtiAO8teiGEnB2QmrzYkwGI=/0x100/cultureampcom/production/6cf/986/4da/6cf9864dab1de1b0f6fd7f0e/mlb-logo-monochrome.png" /></li>
                <li><img alt="On" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JUH89YmI4JIsUAaM3kFTJeuHb3k=/0x100/cultureampcom/production/cb4/ded/466/cb4ded466d0a038c5c408622/on-black.png" /></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. PRODUCT FEATURE PERSONA SET SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container">
          
          <div className="bg-tan rounded-none p-24 tablet:p-36 desktop:p-60">
            
            {/* タブメニュー */}
            <div className="hidden tablet:flex gap-x-36 desktop:gap-x-48 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              {personas.map((persona, idx) => (
                <button 
                  key={persona.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer transition-all ${
                    activeIndex === idx 
                      ? "text-black font-bold border-b-2 border-black pb-12 -mb-[14px]" 
                      : "text-muted hover:text-black pb-12"
                  }`}
                >
                  {persona.label}
                </button>
              ))}
            </div>

            {/* メインコンテンツ */}
            <div className="grid grid-cols-1 desktop:grid-cols-12 gap-x-24 gap-y-36 items-center">
              
              {/* 左カラム：テキスト ＋ 矢印ボタン */}
              <div className="desktop:col-span-5 flex flex-col justify-between h-full py-12 text-black">
                <div>
                  <p className="tablet:hidden text-14 font-semibold mb-24">{currentPersona.title}</p>
                  <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-36">
                    {currentPersona.heading}
                  </h2>
                  <div className="copy text-md mb-24">
                    <p>{currentPersona.description}</p>
                  </div>
                </div>

                <div className="flex gap-16 items-center pt-24">
                  <button 
                    onClick={handlePrev}
                    className="w-[52px] h-[52px] rounded-full border border-black flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors cursor-pointer p-0"
                    aria-label="前のペルソナへ"
                  >
                    <img 
                      src="/arrow-left-969b7714038056ac77d3.svg" 
                      alt="前へ" 
                      className="w-full h-full p-2.5 object-contain"
                    />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-[52px] h-[52px] rounded-full border border-black flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors cursor-pointer p-0"
                    aria-label="次のペルソナへ"
                  >
                    <img 
                      src="/arrow-right-f851d389833939f2a311.svg" 
                      alt="次へ" 
                      className="w-full h-full p-2.5 object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* 右カラム：背景写真 ＋ 重ね合わせ動画UI */}
              <div className="desktop:col-span-7 relative min-h-[360px] desktop:min-h-[440px] flex items-center justify-end">
                <img 
                  src={currentPersona.bgImage} 
                  alt={currentPersona.label} 
                  className="w-[85%] desktop:w-[80%] h-auto rounded-2xl object-cover shadow-1 transition-all duration-300"
                />

                <div className="absolute left-0 bottom-0 tablet:-bottom-4 w-[70%] tablet:w-[65%] z-10 shadow-2 rounded-2xl overflow-hidden bg-white border border-black/10">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <iframe 
                      src={`https://fast.wistia.net/embed/iframe/${currentPersona.wistiaId}`}
                      title={`${currentPersona.label} Demo`}
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
              より良い組織文化と、より良い業績の構築をどう支援してきたかをご覧ください
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
              "スケーラブル、安全、画面の相互運用性",
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
              人への投資が、確かなインパクトを創り出す
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