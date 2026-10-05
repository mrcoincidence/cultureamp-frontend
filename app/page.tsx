'use client';

import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import LogoMarquee from "@/components/LogoMarquee";
import BadgeSet from "@/components/BadgeSet";

export default function Home() {
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

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

  const currentPersona = personas[activePersonaIndex];

  const handlePrevPersona = () => {
    setActivePersonaIndex((prev) => (prev === 0 ? personas.length - 1 : prev - 1));
  };

  const handleNextPersona = () => {
    setActivePersonaIndex((prev) => (prev === personas.length - 1 ? 0 : prev + 1));
  };

  const accordions = [
    {
      title: "迅速な立ち上げを可能にするサービスとサポート",
      heading: "迅速な立ち上げを可能にするサポート体制",
      description:
        "当社のサポートプランは最高水準の品質と安心を提供します。業界トップクラスの導入スピードと親身なサポート体制で、組織の定着化を力強く後押しします。\n・エンタープライズ向けパフォーマンス管理導入で迅速性を実現\n・週5日/24時間のカスタマーサポート\n・充実したナレッジセンターと開発者向けドキュメント",
      image:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/vs4zvb8Uyi65Ec24pVeP1s2s6Xk=/750x0/cultureampcom/production/c87/c4a/21a/c87c4a21af4c307cd8d46ca1/content-drawer-feature-service-model.png",
      ctaText: null,
      ctaLink: "",
    },
    {
      title: "お客様のデータを安全に保ちます",
      heading: "強固なセキュリティとコンプライアンスでデータを保護",
      description:
        "従業員データの安全性確保は極めて重要です。Culture Ampは、お客様および従業員の皆様からお預かりしたすべてのシステムとデータの機密性・完全性・可用性を保護し、SOC 2、ISO 27001、GDPRなどの国際基準に準拠しています。",
      image:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/rMBcRDNXvAmsqlxLggiFcgSQwvA=/750x0/cultureampcom/production/179/29f/c23/17929fc233b649f2c55b08db/content-drawer-feature-security.png",
      ctaText: "セキュリティの詳細を見る",
      ctaLink: "/company/trust",
    },
    {
      title: "専門的な人事リソースへのアクセス",
      heading: "ピープル戦略のあらゆるステップで知見を活用",
      description:
        "組織文化とピープル戦略の強化をあらゆる段階でガイドします。業界を牽引する専門家による最新リサーチ、ベストプラクティス、実践ガイドにいつでもアクセス可能です。",
      image:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/mYVWgSHzjmoHLAcB3aCpOTGdklY=/750x0/cultureampcom/production/41c/a39/e08/41ca39e08512c5d4d28c25b9/content-drawer-feature-resources.png",
      ctaText: "リソースハブを見る",
      ctaLink: "/resources",
    },
    {
      title: "世界最大級の人事ネットワークとグローバルコミュニティに参加",
      heading: "グローバルな人事リーダーのコミュニティに参画",
      description:
        "「Culture First Community」は、より良い働き方の実現を目指すピープルリーダー、人事実務家、チェンジエージェントが集う世界最大級のコミュニティです。",
      image:
        "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JoJaqpuyknGmSnkt8LtVvizQ_jc=/1000x1000/cultureampcom/production/9c7/1c0/0ce/9c71c00cecd2b929734d7c46/case-study-unifonic2x.png",
      ctaText: "コミュニティに参加する",
      ctaLink: "/company/community",
    },
  ];

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* 1. HERO SECTION */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-24 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-36 tablet:mb-60 desktop:mb-0">
            <h1 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              組織文化を最大の競争優位性に
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              ピープルサイエンスとAIを活用したCulture Ampは、パフォーマンス、定着率、増収を推進するためのインサイトと実践的ツールを提供します。
            </div>
            <div className="flex flex-col tablet:flex-row items-center gap-16">
              <button className="button button--primary">デモを予約</button>
            </div>
          </div>

          <div className="row-start-2 desktop:row-start-1 col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center relative overflow-hidden rounded-[32px]">
            <img 
              src="https://www.cultureamp.com/assets/slices/main/assets/public/media/home/home-hero-background-ab3d3e5c7416a1ae74e2.webp" 
              alt="Hero Background" 
              className="w-full h-auto rounded-[32px] object-cover block"
            />
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

      {/* 2. LOGO MARQUEE SECTION (モジュール化コンポーネント) */}
      <LogoMarquee />

      {/* 3. PRODUCT FEATURE PERSONA SET SECTION */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container">
          <div className="bg-tan rounded-none p-24 tablet:p-36 desktop:p-60">
            <div className="hidden tablet:flex gap-x-36 desktop:gap-x-48 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              {personas.map((persona, idx) => (
                <button 
                  key={persona.id}
                  onClick={() => setActivePersonaIndex(idx)}
                  className={`cursor-pointer transition-all ${
                    activePersonaIndex === idx 
                      ? "text-black font-bold border-b-2 border-black pb-12 -mb-[14px]" 
                      : "text-muted hover:text-black pb-12"
                  }`}
                >
                  {persona.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 desktop:grid-cols-12 gap-x-24 gap-y-36 items-center">
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
                    onClick={handlePrevPersona}
                    className="w-[52px] h-[52px] rounded-full border border-black flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors cursor-pointer p-0"
                    aria-label="前のペルソナへ"
                  >
                    <img src="/arrow-left-969b7714038056ac77d3.svg" alt="前へ" className="w-full h-full p-2.5 object-contain" />
                  </button>
                  <button 
                    onClick={handleNextPersona}
                    className="w-[52px] h-[52px] rounded-full border border-black flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors cursor-pointer p-0"
                    aria-label="次のペルソナへ"
                  >
                    <img src="/arrow-right-f851d389833939f2a311.svg" alt="次へ" className="w-full h-full p-2.5 object-contain" />
                  </button>
                </div>
              </div>

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

      {/* 4. BADGE SET SECTION (モジュール化コンポーネント) */}
      <BadgeSet />

      {/* 5. CASE STUDY CAROUSEL PREVIEW SECTION */}
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

      {/* 6. CONTENT DRAWER / ACCORDION SECTION */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container">
          <div className="-mx-20 tablet:mx-0 bg-white shadow-2 p-24 tablet:p-36">
            <div className="divide-y divide-black/10">
              {accordions.map((item, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <div key={idx} className="py-12 desktop:py-16">
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer py-8"
                    >
                      <h2 className="font-main text-16 tablet:text-18 font-medium transition-transform duration-300 group-hover:translate-x-2 pr-16">
                        {item.title}
                      </h2>
                      <span className="border border-black/30 rounded-full p-8 transition-all group-hover:bg-black/10 group-hover:border-black flex-shrink-0">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-16 pb-12 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 desktop:grid-cols-12 gap-x-24 gap-y-24 items-center">
                          <div className="desktop:col-span-6 flex flex-col justify-center">
                            <h3 className="font-heading font-medium heading-sm mb-12 text-pretty">
                              {item.heading}
                            </h3>
                            <div className="copy text-md whitespace-pre-line text-[#524F4C] leading-relaxed mb-20">
                              <p>{item.description}</p>
                            </div>
                            {item.ctaText && (
                              <div>
                                <a href={item.ctaLink} className="button button--secondary">
                                  {item.ctaText}
                                </a>
                              </div>
                            )}
                          </div>
                          <div className="desktop:col-span-6 flex justify-center">
                            <img src={item.image} alt={item.title} className="w-full max-w-[420px] h-auto object-contain rounded-2xl" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESOURCES / BRAND CAMPAIGN SECTION */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          <div className="col-start-1 col-span-full tablet:col-span-6 desktop:col-span-5 flex flex-col justify-center mb-36 tablet:mb-48">
            <h2 className="heading-md font-heading font-medium text-pretty mb-16 tablet:mb-24">
              リーダーはいかにして高業績を形成するか
            </h2>
            <div className="text-lg text-[#524F4C]">
              優れた職場を築くためのアイデア、ツール、視点をご覧ください。
            </div>
          </div>
          
          <div className="col-span-full tablet:col-span-6 tablet:col-start-7 desktop:col-span-7 flex justify-center desktop:justify-end mb-36 tablet:mb-48">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/t5VmfpfCJnNo4X2gYreinM0BVy4=/1250x0/cultureampcom/production/ee6/924/c68/ee6924c6808530f048e963d9/brand-campaigns-home.png" 
              alt="How Leaders Shape High Performance" 
              className="w-full max-w-[480px] desktop:max-w-[540px] h-auto object-contain"
            />
          </div>

          <div className="col-span-full grid grid-cols-1 tablet:grid-cols-2 gap-y-16 tablet:gap-y-24 gap-x-24 desktop:gap-x-84">
            {[
              { title: "カルチャーがパフォーマンスを推進する", link: "/culture-drives-performance" },
              { title: "テニス・オーストラリア導入事例", link: "/tennis-australia" },
              { title: "次世代カルチャークリエイター", link: "/emerging-culture-creators" },
              { title: "エスター・ペレルによるマネージャーガイド", link: "/resources/guides-and-toolkits/esther-perel-managers-guide" },
              { title: "Culture First ポッドキャスト", link: "/podcast" },
              { title: "パフォーマンスの可能性を解き放つ", link: "/resources/tag/performance-unlocked" },
            ].map((item, idx) => (
              <div key={idx} className="group relative col-span-1 border-l border-b border-black/30">
                <a href={item.link} className="flex items-center justify-between px-16 py-12 desktop:px-24 desktop:py-16">
                  <h3 className="text-16 tablet:text-20 font-heading font-medium group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <ChevronRight size={20} className="text-black group-hover:text-purple-600 transition-colors flex-shrink-0 ml-8" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL BOTTOM CTA SECTION */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-heading font-medium heading-lg mb-36">
              従業員への投資が、確かなインパクトを創り出します
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16">
              <button className="button button--primary">デモを予約</button>
              <a href="/platform" className="button button--secondary">機能を見る</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}