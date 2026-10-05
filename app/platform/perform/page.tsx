'use client';

import { useState } from "react";
import { ChevronRight, Plus, Minus, ChevronDown } from "lucide-react";

export default function PerformPlatformPage() {
  // アコーディオン / FAQ / タブの状態管理
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openDrawer, setOpenDrawer] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);

  // カルーセル機能タブ（Purple背景エリア 5タブ）
  const featureTabs = [
    {
      label: "Culture Quadrant",
      title: "日々のパフォーマンスへの確信を醸成",
      description: "1-on-1や目標設定など、インパクトの高いリーダーシップ行動をAIガイド付きコーチングで後押しし、パフォーマンス向上への確信を深めます。",
      linkText: "PCQについて調べる",
      linkUrl: "/platform/engage/performance-culture-quadrant",
      wistiaId: "9x6r5unz10",
      image: null,
    },
    {
      label: "人事評価＆キャリブレーション",
      title: "より公平で納得感のある評価プロセスを構築",
      description: "キャリブレーション（評価調整）と一元化されたリアルタイムフィードバックにより、評価プロセスにおける信頼を築き、バイアスを軽減します。",
      linkText: "人事評価機能を見る",
      linkUrl: "/platform/features/performance-reviews",
      wistiaId: "8kttv29t5z",
      image: null,
    },
    {
      label: "1-on-1対話",
      title: "インパクトのある1-on-1でパフォーマンスを推進",
      description: "マネージャーと従業員が継続的なパフォーマンスの対話を行い、重要な目標を整列させ、確固たる信頼関係を築きます。",
      linkText: "1-on-1機能を見る",
      linkUrl: "/platform/features/1on1conversations",
      wistiaId: "hpl0epe99b",
      image: null,
    },
    {
      label: "Shoutouts（称賛）",
      title: "賞賛と感謝のカルチャーを育む",
      description: "日常の業務フローの中で従業員の貢献を称え感謝を伝えることで、モチベーションとエンゲージメントを高めます。",
      linkText: "Shoutoutsを見る",
      linkUrl: "/platform/features/shoutouts",
      wistiaId: null,
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AtOFrP2NqP9Kh-g9_gKH43Ie-eU=/750x0/cultureampcom/production/f35/8af/b48/f358afb489cb6c5075f9e77b/Perform-Shoutouts-Values.png",
    },
    {
      label: "目標管理（OKRs）",
      title: "全社規模で重要なアライメント（目標の整合）を創出",
      description: "戦略目標に連動したモチベーションの上がる目標を設定・達成できるよう支援し、事業の成功を力強く推進します。",
      linkText: "目標管理機能を見る",
      linkUrl: "/platform/features/goal-management",
      wistiaId: null,
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/F003qPLAOAmyEV16nYqbWWTd1Pw=/750x0/cultureampcom/production/559/fc7/533/559fc7533efa4d4710da3952/Perform-Goal-Tracking-Layered.png",
    },
  ];

  // AI Coachコンテンツドロワー (Perform向け3機能)
  const drawers = [
    {
      title: "要約されたパフォーマンスデータで時間を大幅に節約",
      description: "AI Coachが過去の人事評価、同僚フィードバック、Shoutouts、セルフリフレクションから主要ポイントと成長機会を即座に抽出します。",
      linkUrl: "/platform/ai/coach",
      wistiaId: "26fo5773tk",
    },
    {
      title: "質の高い人事評価を簡単に作成・実施",
      description: "AI Coachがマネージャーと連携し、客観的で実践的かつバランスの取れた評価原稿を作成・調整し、評価業務の負担を軽減します。",
      linkUrl: "/platform/ai/coach",
      wistiaId: "hasx2xhtgd",
    },
    {
      title: "面談や対話に向けた準備をサポート",
      description: "思考の整理、質問の洗い出し、ロールプレイ、フォローアップメッセージの作成まで行える非公開の安全な対話スペースを提供します。",
      linkUrl: "/platform/ai/coach",
      wistiaId: "hfuv9naja6",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "なぜ企業にはパフォーマンス管理システムが必要なのですか？",
      answer: "人材を企業の戦略的目標とアライメントさせ、継続的なフィードバックカルチャーを醸成し、コミュニケーションを活性化させることで、組織の成功と持続的な成長を推進するために不可欠です。",
    },
    {
      question: "Culture Ampのパフォーマンスソリューションはどのように機能しますか？",
      answer: "目標管理、フィードバック、評価を一元化されたプラットフォームでシームレスに提供します。マネージャーにはチームの継続的成長を支える次世代ツールを提供し、人事チームには運用負担を大幅に減らして事業インパクトへ注力できる環境を提供します。",
    },
    {
      question: "継続的なパフォーマンス管理とは何ですか？",
      answer: "年1回の評価にとどまらず、従業員が自ら成長し主体的に能力開発に取り組めるよう日常的に支援するアプローチです。成長意識を育て、従業員・マネージャー・リーダー間の対話を深めます。",
    },
    {
      question: "PerformでAI Coachを活用する理由は何ですか？",
      answer: "パフォーマンス管理はデータ処理やフィードバック原稿の作成など、マネージャーにとって大きな認知負担がかかります。AI Coachは過去の評価やフィードバックから重要なインサイトを抽出し、成果につながるポイントをスピーディーに提示します。\n\n10年にわたるピープルサイエンスの知見を活用し、マネージャーと協働して客観的でバランスの取れた評価原稿を作成・ブラッシュアップします。時間の節約と品質向上を両立させながら、最終決定権は常にマネージャーが保持します。\n\nさらに、評価面談前の思考整理やロールプレイ、推奨トークトラックの提示、面談後のフォローアップ連絡案の作成まで包括的にサポートします。",
    },
  ];

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <h1 className="eyebrow">パフォーマンス管理プラットフォーム</h1>
            <h2 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              チームとビジネスのハイパフォーマンスを促進
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                人事評価プロセスを効率化し、マネージャーと従業員の対話を活性化させ、個人の目標と組織のゴールを揃えることで、チームが最高の成果を出せるよう支援します。
              </p>
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16">
              <button className="button button--primary">
                デモを予約
              </button>
            </div>
          </div>

          {/* 右側ヒーロービジュアル (Wistia動画 jq8opw7rou) */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-black/5 p-12">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/10">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/jq8opw7rou" 
                  title="Perform Overview Video"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. POWER CTA COMPONENT
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/XlKx6L-iW3LZKF1lMI16LRy4AAA=/250x0/cultureampcom/production/0aa/60c/de5/0aa60cde5fed027dd39757aa/product-spot-photo-perform.png" 
              alt="Perform Spot" 
              className="mb-36 max-w-132 mx-auto" 
            />
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              マネージャーとチームがより良く協働するために設計
            </h2>
            <div className="copy text-lg">
              <p>
                科学的根拠に基づいたパフォーマンス管理ツールにより、生産性を向上させ、業績の成長を後押しします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. HIGHLIGHTS CARDS COMPONENT (4つの柱)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full flex gap-24 justify-center flex-wrap">
            
            {/* Card 1 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  継続的なフィードバックカルチャーを醸成
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>リアルタイムな360度フィードバックにより責任感を醸成し、モチベーションを高めてパフォーマンスを最適化します。</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  人事評価の運用負担を軽減
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>年間を通じてフィードバックを収集・一元管理し、人事評価プロセスの手間と負担を大幅に削減します。</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  より公平で納得感のある評価プロセスを創出
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>キャリブレーション（評価調整）と一元化されたリアルタイムフィードバックにより、評価のバイアスを排除し信頼を築きます。</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  マネージャーを真のリーダーへ育成
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>必要なツールと知見をマネージャーに提供し、より建設的で生産的なパフォーマンス対話を可能にします。</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. CASE STUDY CAROUSEL SECTION (Wave Utilities)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 row-span-4 col-start-1 col-span-full flex flex-col grid grid-cols-subgrid grid-rows-subgrid desktop:gap-y-60">
            
            <div className="col-start-1 desktop:col-start-2 col-span-full desktop:col-end-7 flex flex-col">
              <h2 className="font-heading font-medium heading-md text-center desktop:text-left text-pretty mb-24">
                6,000社以上の企業がCulture Ampを活用し、インサイトを確かなアクションへ変えています
              </h2>
              <div className="flex justify-center desktop:justify-start">
                <a href="/case-studies" className="button button--primary">
                  すべての導入事例を見る
                </a>
              </div>
            </div>

            {/* 左側事例カード / 右側アーチ型画像 */}
            <div className="row-start-3 col-start-1 col-span-full grid grid-cols-12 gap-x-24 items-end mt-36 desktop:mt-0">
              
              <div className="col-span-12 desktop:col-span-6 bg-white shadow-1 rounded-3xl p-24 tablet:p-36 flex flex-col justify-between">
                <div>
                  <div className="bg-tan rounded-xl p-16 flex items-center justify-between mb-24">
                    <img 
                      src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/1f5w7yMSq8CtdprCYiss_kY8c_k=/0x100/cultureampcom/production/329/ed7/bdc/329ed7bdc3ffdd2015de4814/wave-utilties-black.png" 
                      alt="Wave Utilities" 
                      className="h-8 object-contain" 
                    />
                    <a href="/case-studies/wave" className="hidden desktop:inline-block button button--secondary">
                      事例を見る
                    </a>
                  </div>
                  <h3 className="font-heading font-medium heading-xxs mb-16">
                    WaveがCulture Ampにより人事評価の回答完了率を233%向上させた方法
                  </h3>
                  <div className="flex items-baseline gap-x-8 mb-24">
                    <span className="font-heading font-medium heading-xl">28日</span>
                    <span className="text-md text-muted">評価サイクルあたりのレポート作成時間を削減</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-16 border-t border-black/10">
                  <span className="inline-block rounded-full border border-black/30 px-12 py-6 text-12 font-semibold">
                    Perform
                  </span>
                  <a href="/case-studies/wave" className="desktop:hidden text-link text-14 font-semibold">
                    事例を見る →
                  </a>
                </div>
              </div>

              <div className="col-span-12 desktop:col-span-6 hidden desktop:flex justify-end">
                <div className="w-full max-w-[538px] h-[360px] rounded-t-full overflow-hidden shadow-1">
                  <img 
                    src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/cW6OeSPTlokdo9phC0kBon77DCs=/1000x1000/cultureampcom/production/8a3/2ce/a49/8a32cea493051e9e7d59d2a4/case-study-feature-wave-utilities.jpg" 
                    alt="Wave Case Study" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. PRODUCT FEATURE SET CAROUSEL (Purple Background 5タブ)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-white/20 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16">
              {featureTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer transition-colors ${
                    activeTab === idx ? "border-b-2 border-white pb-12 -mb-[14px] font-bold" : "text-white/70 hover:text-white pb-12"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* アクティブスライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center">
                <p className="tablet:hidden text-14 font-semibold mb-24">{featureTabs[activeTab].label}</p>
                <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-white">
                  {featureTabs[activeTab].title}
                </h2>
                <div className="copy text-md text-white/90 mb-24 desktop:mb-48">
                  <p>{featureTabs[activeTab].description}</p>
                </div>
                <div>
                  <a href={featureTabs[activeTab].linkUrl} className="button button--secondary-reversed">
                    {featureTabs[activeTab].linkText}
                  </a>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <div className="shadow-1 rounded-3xl overflow-hidden bg-black/10 p-12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20">
                    {featureTabs[activeTab].wistiaId ? (
                      <iframe 
                        src={`https://fast.wistia.net/embed/iframe/${featureTabs[activeTab].wistiaId}`}
                        title={featureTabs[activeTab].title}
                        className="w-full h-full object-cover"
                        allow="autoplay; fullscreen"
                      />
                    ) : (
                      <img 
                        src={featureTabs[activeTab].image!} 
                        alt={featureTabs[activeTab].title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. POWER CTA (AI Coach案内)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              常時利用可能なコーチングにより、パフォーマンスデータを効果的なアクションへ
            </h2>
            <div className="copy text-lg">
              <p>
                AI Coachは、マネージャーがパフォーマンスのインサイトを明確で優先度の高い、実行可能なアクションへと落とし込めるようサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. CONTENT DRAWER / ACCORDION SECTION (AI Coach 3機能)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container">
          
          <div className="-mx-20 tablet:mx-0 bg-white shadow-2 p-24 tablet:p-36">
            <div className="divide-y divide-black/10">
              {drawers.map((item, idx) => {
                const isOpen = openDrawer === idx;
                return (
                  <div key={idx} className="py-12 desktop:py-16">
                    
                    <button
                      onClick={() => setOpenDrawer(isOpen ? null : idx)}
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
                            <div className="flex gap-8 mb-16">
                              <span className="bg-white py-4 px-12 rounded-full border border-black/30 text-12 font-semibold">AI Coach</span>
                              <span className="bg-white py-4 px-12 rounded-full border border-black/30 text-12 font-semibold">Perform</span>
                            </div>
                            <h3 className="font-heading font-medium heading-sm mb-12 text-pretty">
                              {item.title}
                            </h3>
                            <div className="copy text-md text-[#524F4C] leading-relaxed mb-20">
                              <p>{item.description}</p>
                            </div>
                            <div>
                              <a href={item.linkUrl} className="button button--secondary">
                                AI Coachを見る
                              </a>
                            </div>
                          </div>

                          <div className="desktop:col-span-6 flex justify-center">
                            <div className="w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-1">
                              <iframe 
                                src={`https://fast.wistia.net/embed/iframe/${item.wistiaId}`}
                                title={item.title}
                                className="w-full h-full object-cover"
                                allow="autoplay; fullscreen"
                              />
                            </div>
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

      {/* ==========================================================================
         8. VIDEO TOUR SECTION (Take a tour of Perform)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 flex flex-col justify-center items-center mb-36 tablet:mb-60">
            <div className="mb-16 flex items-center text-black font-semibold gap-8 text-18">
              <span>Perform</span>
            </div>
            <h2 className="heading-md font-heading font-medium text-center">
              Performの機能ツアーを見る
            </h2>
          </div>

          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-black/5 p-12">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/10">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/h7h817jsfm" 
                  title="Perform Tour Video"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         9. TESTIMONIALS SECTION (Purple Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 items-center">
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-5 desktop:col-span-5">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/qCR8HFOI2beWQdrFRj8uafof_cQ=/500x500/cultureampcom/production/5a8/719/3a1/5a87193a1a89b259cdabc0b2/headshot-wave-utilities-mandy-rutherford.jpg" 
                  alt="Mandy Rutherford" 
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>

              <div className="col-span-12 tablet:col-span-6 desktop:col-span-6 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 font-heading font-medium mb-36 leading-relaxed">
                  「Culture Ampは会社と従業員の目標を整合させるため、社員は自分の業務がどのように全社戦略に貢献しているかを正確に把握できます。またキャリブレーション機能により人事評価の公平性が担保されています」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lTG0DpQby1bhYAZ7P1yzyxpBBZo=/0x100/cultureampcom/production/4dd/924/eb8/4dd924eb8e087914c499b7f3/wave-utilties-white.png" alt="Wave Utilities Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">Mandy Rutherford</p>
                <p className="text-14 text-white/80">Wave Utilities / L&amp;Dマネージャー</p>
                <div className="mt-36">
                  <a href="/case-studies/wave" className="button button--secondary-reversed">
                    事例を見る
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         10. CARD SET LIST (4つの知見・記事)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="col-start-1 col-span-6 tablet:col-start-2 tablet:col-span-8 desktop:col-start-2 desktop:col-span-4 flex flex-col items-start mb-48 desktop:mb-0">
            <h2 className="font-heading font-medium heading-md">
              従業員の成功が、ビジネスの成功につながります
            </h2>
            <div className="text-lg copy mt-16 text-[#524F4C]">
              <p>規模に応じたパフォーマンス向上を実現するために必要なツールをマネージャーに提供しましょう。</p>
            </div>
            <div>
              <a href="/resources" className="button button--secondary mt-24 desktop:mt-36">
                すべてのリソースを見る
              </a>
            </div>
          </div>

          <div className="col-start-1 col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-7 desktop:col-span-5 flex flex-col gap-y-24">
            {[
              {
                title: "ヒーロー（単独の英雄）に頼らない、ハイパフォーマンスカルチャーの構築方法",
                link: "/blog/build-high-performance-culture-not-heroes",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/_4CY2DiryvO3wx8HVcPwvpKOM0A=/500x0/cultureampcom/production/aee/9e9/c9e/aee9e9c9e4b7d582abf3d740/Justin-cff-blog.jpg",
                linkText: "記事を読む",
              },
              {
                title: "9ボックスグリッドモデルの理解と（より良く活用する方法）",
                link: "/blog/9-box-grid-model",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/NTPDfCt3abefOSXApraqA1XxuYI=/500x0/cultureampcom/production/164/265/0cd/1642650cd9bd475b970b5ec4/2209-blog-feature-pros-cons-9-box-grid2x.png",
                linkText: "記事を読む",
              },
              {
                title: "スキップレベルミーティングの質を高めて信頼関係を深める",
                link: "/blog/skip-level-meeting-guide",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uv1cfPQc569Aaph5-HRpy1DV5zY=/500x0/cultureampcom/production/964/cee/ffd/964ceeffdd7f3079bdf94fd6/blog-header-skip-level-meeting.png",
                linkText: "記事を読む",
              },
              {
                title: "Performの新機能：戦略を確かな成果につなぐ",
                link: "/blog/whats-new-perform-2026-q3",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/KvtFQFac_SA_sVEawnkuOWW-Rd8=/500x0/cultureampcom/production/48d/e30/4ae/48de304ae454818aa2cc26cd/Copy-of-blog-header-aligning-employee-development-goals.png",
                linkText: "記事を読む",
              },
            ].map((card, idx) => (
              <article key={idx} className="grid grid-cols-[auto,1fr] gap-x-16 items-center border-b border-black/10 pb-16">
                <img src={card.image} alt="" className="w-24 h-24 tablet:w-28 tablet:h-28 object-cover rounded-xl" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-15 font-semibold leading-snug">{card.title}</h3>
                  <a href={card.link} className="text-link text-13 font-medium mt-4 inline-flex items-center gap-4">
                    {card.linkText} <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         11. FAQ SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-2 col-span-full tablet:col-end-12 desktop:col-span-4 mb-36 desktop:mb-0">
            <h2 className="font-heading font-medium heading-md">
              よくある質問
            </h2>
          </div>

          <div className="col-start-1 tablet:col-start-2 desktop:col-start-7 col-span-full tablet:col-span-10 desktop:col-span-5 flex flex-col divide-y divide-black/10">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-20 first:pt-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left gap-16 group cursor-pointer"
                  >
                    <h4 className="text-16 tablet:text-18 font-medium">{faq.question}</h4>
                    <ChevronDown size={20} className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="pt-16 text-14 text-[#524F4C] leading-relaxed whitespace-pre-line animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         12. EXPLORE OUR FULL PLATFORM CARD SET (3プラットフォーム比較)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="text-center col-start-1 tablet:col-start-3 col-end-full tablet:col-end-11 mb-36 tablet:mb-48">
            <h2 className="font-heading font-medium heading-sm text-balance">
              Culture Amp フルプラットフォームを見る
            </h2>
          </div>

          <div className="col-start-1 desktop:col-start-2 col-span-full desktop:col-span-10 grid grid-cols-1 tablet:grid-cols-3 gap-24">
            
            {/* Engage */}
            <div className="bg-white shadow-0 border border-black/10 rounded-2xl overflow-hidden flex flex-col justify-between p-24">
              <div>
                <div className="flex items-center gap-8 mb-16">
                  <h3 className="font-heading font-medium heading-xxs">Engage（エンゲージメント）</h3>
                </div>
                <p className="mb-24 text-sm text-[#524F4C]">
                  リアルタイムのインサイトを取得してエンゲージメントを高め、定着率を改善し、従業員をサポートします。
                </p>
              </div>
              <a href="/platform/engage" className="text-link text-14 font-semibold flex items-center justify-between mt-auto">
                エンゲージメントを高める <ChevronRight size={16} />
              </a>
            </div>

            {/* Perform */}
            <div className="bg-white shadow-0 border-2 border-jade-400 rounded-2xl overflow-hidden flex flex-col justify-between p-24">
              <div>
                <div className="flex items-center gap-8 mb-16">
                  <h3 className="font-heading font-medium heading-xxs">Perform（パフォーマンス）</h3>
                </div>
                <p className="mb-24 text-sm text-[#524F4C]">
                  チームの有効性を高め、継続的なパフォーマンスを促進するツールで組織を強化します。
                </p>
              </div>
              <a href="/platform/perform" className="text-link text-14 font-semibold flex items-center justify-between mt-auto">
                ハイパフォーマンスを推進 <ChevronRight size={16} />
              </a>
            </div>

            {/* Develop */}
            <div className="bg-white shadow-0 border border-black/10 rounded-2xl overflow-hidden flex flex-col justify-between p-24">
              <div>
                <div className="flex items-center gap-8 mb-16">
                  <h3 className="font-heading font-medium heading-xxs">Develop（人材育成）</h3>
                </div>
                <p className="mb-24 text-sm text-[#524F4C]">
                  個人の成長目標と会社の事業目標を揃え、持続的な成長と育成を育みます。
                </p>
              </div>
              <a href="/platform/develop" className="text-link text-14 font-semibold flex items-center justify-between mt-auto">
                継続的な成長を促進 <ChevronRight size={16} />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
         13. FINAL BOTTOM CTA SECTION
         ========================================================================== */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-heading font-medium heading-lg mb-36">
              従業員への投資が、確かなインパクトを創り出します
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16">
              <button className="button button--primary">
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