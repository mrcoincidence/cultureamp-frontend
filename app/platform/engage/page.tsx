'use client';

import { useState } from "react";
import { ChevronRight, Plus, Minus, ChevronDown } from "lucide-react";

export default function EngagePlatformPage() {
  // アコーディオン / FAQ 状態管理
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openDrawer, setOpenDrawer] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);

  // カルーセル機能タブ（Purple背景エリア）
  const featureTabs = [
    {
      label: "Culture Quadrant",
      title: "ピークパフォーマンスへの道筋を描く",
      description: "従業員エンゲージメントと事業成果への確信を直接紐づける、唯一の科学的根拠に基づいた診断ツールです。",
      linkText: "PCQについて調べる",
      linkUrl: "/platform/engage/performance-culture-quadrant",
      wistiaId: "dkttgmj94s",
    },
    {
      label: "即戦力サーベイテンプレート",
      title: "信頼性の高いサーベイテンプレートを活用",
      description: "データサイエンティストと組織心理学者が設計した、40以上の研究に支えられたサーベイテンプレートライブラリを利用できます。",
      linkText: "サーベイを見る",
      linkUrl: "/platform/features/ready-to-use-surveys",
      wistiaId: "ewbkbtfcu0",
    },
    {
      label: "パルスサーベイ",
      title: "エンゲージメント戦略の効果をリアルタイムに把握",
      description: "簡単に配信できる科学的根拠に基づいたパルスサーベイで、組織変更や各種施策の実効性を迅速に評価します。",
      linkText: "パルスサーベイを見る",
      linkUrl: "/platform/features/pulse-surveys",
      wistiaId: "ewbkbtfcu0",
    },
    {
      label: "ベンチマーク",
      title: "サーベイ結果に重要な業界コンテキストを付加",
      description: "地域、規模、業界にわたる10億件以上のサーベイ回答データに基づく業界最高水準のベンチマークで、施策の優先順位を明確にします。",
      linkText: "ベンチマークを見る",
      linkUrl: "/platform/features/benchmarks",
      wistiaId: "8ddzfmrmwh",
    },
  ];

  // AI Coachコンテンツドロワー
  const drawers = [
    {
      title: "エンゲージメントサーベイのインサイトを瞬時に要約",
      description: "AI Coachがサーベイデータから主要なテーマを即座に抽出し、エンゲージメントの要因と注力すべきポイントを明確にします。",
      linkUrl: "/platform/ai/coach",
      wistiaId: "2g2na1amn6",
    },
    {
      title: "データを個別に最適化されたアクションプランへ変換",
      description: "AI Coachがマネージャーと連携し、ピープルサイエンスに基づいたインパクト最大化のための段階的なアクションプランを策定します。",
      linkUrl: "/platform/ai/coach",
      wistiaId: "hxn7lwyok2",
    },
    {
      title: "対象に応じたカスタムコミュニケーションを自動作成",
      description: "チーム向けのSlack共有文から経営陣向けの報告メールまで、相手やチャネルに応じた明確なメッセージ案を作成し、組織変革を後押しします。",
      linkUrl: "/platform/ai/coach",
      wistiaId: "7oaad21wk7",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "Culture Ampのエンゲージメントソリューションは組織にどのように貢献しますか？",
      answer: "Culture Ampの従業員エンゲージメントソフトウェアは、従業員の意識や情緒を理解するための直感的なフレームワークを人事チームに提供します。リアルタイムアナリティクスや個別に最適化されたインサイト機能により、人事や経営陣が従業員のニーズにプロアクティブに対応し、職場全体の満足度を向上させることができます。",
    },
    {
      question: "エンゲージメントソリューションの主な機能は何ですか？",
      answer: "主な機能には、従業員体験の重要局面（オンボーディング、退職、パルスサーベイ等）に対応するカスタマイズ可能なサーベイテンプレートや、高度な集計・分析レポートが含まれます。さらに、日常の業務ツールとのシステム連携、ヒートマップ表示、業界ベンチマーク、柔軟なダッシュボード機能なども備えています。",
    },
    {
      question: "従業員エンゲージメントソフトウェアを導入する組織のメリットは何ですか？",
      answer: "エンゲージメントソフトウェアは、人事プロセスを効率化し、リアルタイムデータによってリーダーシップの意思決定精度を高め、生産的で活気ある組織カルチャーの醸成を可能にします。これにより社員の士気を高め、優秀な人材の離職を防ぎ、最終的に事業成果の拡大に貢献します。",
    },
    {
      question: "EngageでAI Coachを活用する理由は何ですか？",
      answer: "多くのマネージャーはサーベイ結果の膨大なデータに圧倒され、インサイトを明確で優先度の高いアクションへ落とし込むことに苦労しています。AI Coachは、複数の設問にわたる主要テーマを即座に抽出し、エンゲージメントの真の要因と注力ポイントを分かりやすく提示します。\n\nAI Coachは組織固有のコンテキストに合わせた対話型コーチングを通じてマネージャーを伴走支援し、次に取るべき行動の意思決定を劇的にスピーディーにします。\n\nまた、重要なテーマが定まった後は、アクションプランや対象別・チャネル別のコミュニケーション原稿（報告メールやSlack投稿案）の作成まで協働して行い、次のステップへ向けたメッセージを効果的に届けることができます。",
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
            <h1 className="eyebrow">従業員エンゲージメント・プラットフォーム</h1>
            <h2 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              従業員のモチベーションとインスピレーションの源泉を理解
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left">
              <p>
                柔軟なサーベイテンプレート、業界をリードするインサイト、高度なアナリティクスにより、従業員のやりがいを高め、ビジネスインパクトを最大化する注力エリアを明確にします。
              </p>
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16">
              <button className="button button--primary">
                デモを予約
              </button>
            </div>
          </div>

          {/* 右側ヒーロービジュアル (Wistia動画 btx5pewhi8) */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-black/5 p-12">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/10">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/btx5pewhi8" 
                  title="Engage Overview Video"
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/KioWLmECNpY00FI1crBg1h99OEw=/250x0/cultureampcom/production/82c/b60/cbd/82cb60cbda40c4a8f1c285ab/product-spot-photo-engage.png" 
              alt="Engage Spot" 
              className="mb-36 max-w-132 mx-auto" 
            />
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              エンゲージメントと貢献意欲が高く、生産的な組織を醸成
            </h2>
            <div className="copy text-lg">
              <p>
                Culture Ampのエンゲージメントプラットフォームにより、真のエンゲージメント推進要因を明確にし、事業成果を加速させます。
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
                  重要なピープルインサイトを可視化
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>信頼性の高いデータとプロアクティブなエンゲージメントツールで、全従業員やリーダーの意識を深く理解します。</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  生産性とパフォーマンスの向上
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>ハイフォーマーやハイパフォーマンスチームのモチベーション要因を特定し、全社規模へと拡張します。</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  望まない不意の離職を未然に防止
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>事業の成長ニーズに合わせて人材を引き留め、活力を再燃させる効果的なエンゲージメント戦略を構築します。</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(25%-24px)] bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  すべての従業員が輝ける職場環境を実現
                </h3>
                <div className="copy text-sm text-[#524F4C]">
                  <p>多様な従業員体験やニーズを理解し、エンゲージメント戦略のあらゆる側面へDEI（ダイバーシティ・公平性・包摂性）を組み込みます。</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. CASE STUDY CAROUSEL SECTION (NASCAR)
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
                      src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/ee4XFwXUw4cVt0TiKdlc4D8uO8w=/0x100/cultureampcom/production/2a0/512/5ae/2a05125aeaec022241c1e182/nascar-black.png" 
                      alt="NASCAR" 
                      className="h-8 object-contain" 
                    />
                    <a href="/case-studies/nascar" className="hidden desktop:inline-block button button--secondary">
                      事例を見る
                    </a>
                  </div>
                  <h3 className="font-heading font-medium heading-xxs mb-16">
                    NASCARがピープルシグナルを一元化し、L&amp;D（人材開発）のサイクルタイムを30%短縮した方法
                  </h3>
                  <div className="flex items-baseline gap-x-8 mb-24">
                    <span className="font-heading font-medium heading-xl">10%</span>
                    <span className="text-md text-muted">フィードバック効率向上</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-16 border-t border-black/10">
                  <span className="inline-block rounded-full border border-black/30 px-12 py-6 text-12 font-semibold">
                    Engage
                  </span>
                  <a href="/case-studies/nascar" className="desktop:hidden text-link text-14 font-semibold">
                    事例を見る →
                  </a>
                </div>
              </div>

              <div className="col-span-12 desktop:col-span-6 hidden desktop:flex justify-end">
                <div className="w-full max-w-[538px] h-[360px] rounded-t-full overflow-hidden shadow-1">
                  <img 
                    src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/fe5/e14/3bc/fe5e143bc48da672ad22fcb4/case-study-feature-nascar.jpg" 
                    alt="NASCAR Case Study" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. PRODUCT FEATURE SET CAROUSEL (Purple Background)
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
                    <iframe 
                      src={`https://fast.wistia.net/embed/iframe/${featureTabs[activeTab].wistiaId}`}
                      title={featureTabs[activeTab].title}
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
         6. POWER CTA (AI Coach案内)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              常時利用可能なコーチングにより、エンゲージメントデータを効果的なアクションへ
            </h2>
            <div className="copy text-lg">
              <p>
                AI Coachは、リーダーがいつでもどこでもエンゲージメントインサイトを明確で優先度の高い、実行可能なアクションへと落とし込めるよう支援します。
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
                              <span className="bg-white py-4 px-12 rounded-full border border-black/30 text-12 font-semibold">Engage</span>
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
         8. VIDEO TOUR SECTION (Take a tour of Engage)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 flex flex-col justify-center items-center mb-36 tablet:mb-60">
            <div className="mb-16 flex items-center text-black font-semibold gap-8 text-18">
              <span>Engage</span>
            </div>
            <h2 className="heading-md font-heading font-medium text-center">
              Engageの機能ツアーを見る
            </h2>
          </div>

          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-black/5 p-12">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/10">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/d5ofusq0o9" 
                  title="Engage Tour Video"
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
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/85VD53TUpIPWCoM3WQ1QU1Bea6Y=/500x500/cultureampcom/production/0fb/b05/3b0/0fbb053b0ac2e8a6f7934c78/headshot-on-sahra-kaboli-nejad.jpg" 
                  alt="Sahra Kaboli-Nejad" 
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>

              <div className="col-span-12 tablet:col-span-6 desktop:col-span-6 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 font-heading font-medium mb-36 leading-relaxed">
                  「包括的かつ分析的なアプローチにアクセスできたことで、過去3年間で最も高いインパクトをもたらす意思決定を行うことができました」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/vS6Xl8sJ8ZXq_XW0j2fcC9K9k_E=/0x100/cultureampcom/production/746/091/f5a/746091f5a369bc265df9234d/on-white.png" alt="On Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">Sahra Kaboli-Nejad</p>
                <p className="text-14 text-white/80">On / DEI &amp; ソーシャルインパクト責任者</p>
                <div className="mt-36">
                  <a href="/case-studies/on" className="button button--secondary-reversed">
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
              従業員の定着とエンゲージメントの向上
            </h2>
            <div className="text-lg copy mt-16 text-[#524F4C]">
              <p>従業員体験（EX）をはじめとする人事領域全般をサポートする、充実したHRリソースライブラリをご活用ください。</p>
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
                title: "従業員離職（アトリション）とは：定義と計算方法",
                link: "/blog/employee-attrition",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/5JeFs6yNpcY6bEL45bwluSBdY7w=/500x0/cultureampcom/production/860/761/594/860761594b935aa47d90092f/blog-header-attrition.png",
                linkText: "記事を読む",
              },
              {
                title: "リッカート尺度とは？定義と活用例",
                link: "/blog/what-is-a-likert-scale",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/oCM_WPf9pYMt9wasDlL7lq70v3w=/500x0/cultureampcom/production/695/5be/d48/6955bed48c2f595900afca33/blog-likert-scale-what-is.png",
                linkText: "記事を読む",
              },
              {
                title: "Moorabool Shire CouncilがCulture Ampによりマネジメント要因スコアを12%向上させた方法",
                link: "/case-studies/moorabool",
                image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9JvoOHiKSUTdLkoeOPUch2rl9UU=/500x0/cultureampcom/production/f99/8d7/4fc/f998d74fc3e6ae2d0240c702/Wallace-6-For-Web-.jpeg",
                linkText: "事例を読む",
              },
              {
                title: "HRにおけるAI：期待と現実",
                link: "/events",
                image: "https://www.cultureamp.com/assets/slices/main/assets/public/media/cards/fallback-webinar-bc05a6309f15d24e038e.webp",
                linkText: "イベントに参加登録",
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
            <div className="bg-white shadow-0 border-2 border-purple-300 rounded-2xl overflow-hidden flex flex-col justify-between p-24">
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
            <div className="bg-white shadow-0 border border-black/10 rounded-2xl overflow-hidden flex flex-col justify-between p-24">
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