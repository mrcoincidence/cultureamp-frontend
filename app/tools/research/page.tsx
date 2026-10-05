'use client';

import Link from "next/link";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

export default function PeopleScienceResearchPage() {
  // メディアロゴデータ
  const mediaLogos = [
    { name: "The Times", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/1Rg6UauBLGAg-pB3i-O6hgvi4ZQ=/0x100/cultureampcom/production/fec/ec7/e63/fecec7e6364885364173ff24/logo-the-times.png" },
    { name: "MIT Sloan", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/seEaSquYeK9AcHHxU6dtThFRqnc=/0x100/cultureampcom/production/14e/8f5/9c5/14e8f59c5a86ea16a12befa8/logo-mit-sloan.png" },
    { name: "Inc.", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/wXezlf9EegCSc8-udCEeBI1EcjQ=/0x100/cultureampcom/production/72c/87e/80c/72c87e80c9334801b3a311cb/logo-inc.png" },
    { name: "Harvard Business Review", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/oCr98bIR5EP8Gb-OZ3RbgJ13zSU=/0x100/cultureampcom/production/555/0e6/311/5550e6311626321a95db82df/logo-harvard-business-review.png" },
    { name: "Fortune", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/1kWnLFhhGylH4Ue8GocN0pcSa6Y=/0x100/cultureampcom/production/5bf/e60/15f/5bfe6015fc685c904f91946a/logo-fortune.png" },
    { name: "Forbes Australia", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/449iWtTbuvtyDMS-Llr9j9gqIG8=/0x100/cultureampcom/production/96c/82e/31b/96c82e31b9244abe9b468451/logo-forbes-australia.png" },
    { name: "Fast Company", src: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/yBHhNFpLx4xZ0zfdpDvLbuB7WwE=/0x100/cultureampcom/production/f82/6db/3f5/f826db3f5d201e4c5f7c2cf9/logo-fast-company.png" },
  ];

  // ニュース掲載記事データ
  const newsArticles = [
    {
      source: "Inc.",
      title: "優れたリーダーが従業員のモチベーションを高め、「静かな退職」を防ぐ方法",
      url: "https://www.inc.com/marcel-schwantes/great-leaders-boost-motivation-prevent-quiet-quitting/91253027",
    },
    {
      source: "Forbes Australia",
      title: "職場におけるAIの主導権は誰にあるのか？分散型ガバナンスの必要性",
      url: "https://www.forbes.com.au/news/innovation/who-owns-ai-at-work-the-case-for-distributed-stewardship/",
    },
    {
      source: "Inc.",
      title: "年々の持続的成長を牽引する要素とは？最新研究が明かす回答",
      url: "https://www.inc.com/marcel-schwantes/what-drives-fast-growth-new-research-has-answers-culture-amp/91220524",
    },
    {
      source: "Fortune",
      title: "役員層における性別による格差と、それが企業成果に与える影響",
      url: "https://fortune.com/2025/01/30/women-business-leaders-respect-c-suite/",
    },
  ];

  // 最新研究レポートデータ
  const latestResearch = [
    {
      tag: "記事",
      title: "AI導入がプロフェッショナルサービス企業にもたらす実質コスト",
      desc: "AIは士業や専門サービスの知見を再定義しています。人材育成スコアの低下リスクと、エンゲージメント維持のための3つの施策を解説します。",
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/TqcRtEYJseVxp9GJRSudCX4inJw=/500x0/cultureampcom/production/4c8/f77/76f/4c8f7776f93bb35ba704a72d/26Q3-ProfServ-Blog-hero-banner.png",
      link: "/blog/ai-in-professional-services-2026",
    },
    {
      tag: "記事",
      title: "人事（HR）におけるAI活用課題とその解決プロセス",
      desc: "人事領域でのAI活用には固有の課題が存在します。Culture Ampのピープルサイエンティストがデータに基づいてその要因と対策を分析します。",
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/MMSIB6l8lAhiYfkfSetcyUb1tVI=/500x0/cultureampcom/production/a73/3ab/eeb/a733abeeb4ef2499bb09a93f/Banner-HRs-big-AI-problem-how-we-got-here-.png",
      link: "/blog/state-of-ai-in-hr-2026",
    },
    {
      tag: "記事",
      title: "「パッシブリスニング」の期待と注意すべきポイント",
      desc: "AIを活用したパッシブリスニングが注目を集めていますが、実際の運用にあたって留意すべき注意点と科学的根拠を解説します。",
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/xXdqx5ErlqvO2Z7FxouGKUp8eIc=/500x0/cultureampcom/production/3c4/c4e/859/3c4c4e85939f50c29206f015/Copy-of-Blog-header-Customer-Spotlight-880x440-1.png",
      link: "/blog/passive-listening",
    },
    {
      tag: "記事",
      title: "最新ベンチマーク調査：職場における組織信頼度の動向",
      desc: "最新のグローバルベンチマークデータによると、組織に対する信頼・確信スコアの変動が見られます。データ分析の詳細結果を公開します。",
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/uIzjKSfnrg4mecj1D9DM-N6mCRM=/500x0/cultureampcom/production/f80/b4f/331/f80b4f33138862be2ce2662e/25Q3-Benchmarks-Blog1-Hero-Banner.png",
      link: "/blog/company-workplace-confidence-factors",
    },
    {
      tag: "記事",
      title: "PCQ（パフォーマンス・カルチャー・クアドラント）で目指すピークパフォーマンス",
      desc: "Culture Ampの「ピークパフォーマンス・クアドラント（PCQ）」の背景にある科学と、組織を最高成果へ導くフレームワークについて学びます。",
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/gy2o4DnTVvxyCWNNQRgpiGRl850=/500x0/cultureampcom/production/067/69a/a42/06769aa4253549be7e146408/26Q1-PCQ-Science-Blog-hero-banner.png",
      link: "/blog/science-behind-pcq",
    },
    {
      tag: "ホワイトペーパー",
      title: "47%のアドバンテージ：AI時代にカルチャーを戦略へ昇華させる手法",
      desc: "エンゲージメントとパフォーマンスへの確信を統合し、持続可能な競争優位性を生み出すための人事リーダー向け研究レポート。",
      image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/bWD3GhC_CP6aIcWItQXDbseXWb4=/500x0/cultureampcom/production/7f7/f3c/829/7f7f3c8297d6ea7f7912f0ae/26Q1-cdp-report-thumb2x.png",
      link: "/resources/reports/performance-culture-research",
    },
  ];

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200 min-h-screen">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側：見出しと概要 */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 col-start-1 tablet:col-start-2 items-center desktop:items-start desktop:col-span-5 desktop:col-start-1 mb-60 desktop:mb-0">
            <h1 className="eyebrow">People Science Research</h1>
            <h2 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              これからの働き方を導く、研究データとインサイト
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left text-muted leading-relaxed">
              <p>
                世界最大級の従業員意識調査データセットを活用し、人事リーダーが最も重要な組織課題に先手を打てるよう、最新トレンドの分析と科学的根拠に基づく調査結果を提供しています。
              </p>
            </div>
            <div className="flex flex-col tablet:flex-row items-center gap-16">
              <a href="#latest-research" className="button button--primary">
                最新の研究を見る
              </a>
            </div>
          </div>

          {/* 右側：ヒーローグラフィック画像 */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <picture>
              <source 
                media="(min-width: 768px)" 
                srcSet="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9jSUhabkM-gxnD2EAVcR24ebTww=/1250x0/cultureampcom/production/1e2/ba0/dfc/1e2ba0dfc46777288dc84930/people-science-hero-research2x.png" 
              />
              <source 
                media="(max-width: 768px)" 
                srcSet="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/iG0fNg6eAD9ZwKKThX98bR6YrOw=/750x0/cultureampcom/production/1e2/ba0/dfc/1e2ba0dfc46777288dc84930/people-science-hero-research2x.png" 
              />
              <img 
                alt="People Science Research Hero Graphic" 
                className="w-full h-auto object-contain" 
                height="1458" 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9jSUhabkM-gxnD2EAVcR24ebTww=/1250x0/cultureampcom/production/1e2/ba0/dfc/1e2ba0dfc46777288dc84930/people-science-hero-research2x.png" 
                width="1944" 
              />
            </picture>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. MEDIA MARQUEE SECTION (メディア掲載実績)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full">
            
            <div className="flex items-center justify-center gap-x-12 mb-24 desktop:mb-36">
              <p className="font-heading font-medium text-20 tablet:text-24 text-center">
                メディア・研究機関での掲載実績
              </p>
            </div>

            {/* Marquee スクロール表示 */}
            <div className="marquee marquee--enabled">
              <ul className="marquee__group">
                {mediaLogos.map((logo, idx) => (
                  <li key={idx}>
                    <img 
                      alt={logo.name} 
                      className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" 
                      src={logo.src} 
                    />
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. BEHIND THE RESEARCH SECTION (研究のアプローチと背景)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="flex flex-col items-center col-start-1 desktop:col-start-3 col-span-full desktop:col-span-8 mb-48 desktop:mb-60">
            <h2 className="font-heading font-medium heading-md text-center text-balance">
              研究のアプローチと手法
            </h2>
          </div>

          <div className="col-start-1 col-span-full flex gap-24 justify-center flex-wrap">
            
            {/* カード 1 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(33.33%-24px)] relative bg-white flex flex-col justify-between p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-400 transition-transform shadow-0 hover:shadow-1 rounded-b-xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  ピープルサイエンス研究への独自アプローチとは？
                </h3>
                <div className="copy text-14 text-muted leading-relaxed">
                  <p>
                    産業・組織心理学の専門知識とデータサイエンスを融合させ、当社独自の巨大データレイクから実用的なインサイトを抽出しています。財務指標や市場動向などの外部データともクロス検証し、客観的で高精度なデータを提供します。
                  </p>
                </div>
              </div>
              <img 
                alt="Approach Unique Graphic" 
                className="h-full w-full object-contain max-h-[180px] rounded-lg mt-auto" 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/kPIpPbybiBuerjtfCChXJzfYQxk=/500x0/cultureampcom/production/dd9/2ff/58b/dd92ff58ba7d9319fdff3c3e/ps-highlights-approach-unique.png" 
              />
            </div>

            {/* カード 2 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(33.33%-24px)] relative bg-white flex flex-col justify-between p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-400 transition-transform shadow-0 hover:shadow-1 rounded-b-xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  長期的な業界トレンドをどのように捉えているか？
                </h3>
                <div className="copy text-14 text-muted leading-relaxed">
                  <p>
                    数年間にわたる蓄積データから、業界・地域・企業規模ごとの経年変化パターンを明らかにしています。6ヶ月ごとに更新される業界ベンチマークにより、一時的な流行と長期的な組織課題を明確に区別できます。
                  </p>
                </div>
              </div>
              <img 
                alt="Long term trends Graphic" 
                className="h-full w-full object-contain max-h-[180px] rounded-lg mt-auto" 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/U0wLG_9lWjJZnLEm-WVsEztFXyY=/500x0/cultureampcom/production/69a/771/92d/69a77192d283f2c22ba59a96/ps-highlights-long-term-trends.png" 
              />
            </div>

            {/* カード 3 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(33.33%-24px)] relative bg-white flex flex-col justify-between p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-400 transition-transform shadow-0 hover:shadow-1 rounded-b-xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-heading font-medium text-16 desktop:text-20 desktop:leading-[26px]">
                  どのような領域・テーマを研究対象にしているか？
                </h3>
                <div className="copy text-14 text-muted leading-relaxed">
                  <p>
                    ハイパフォーマンス文化の醸成からAIが働き方に与える影響、人材育成、エンゲージメントまで多岐にわたります。従業員の体験全体をカバーする多角的なデータにより、組織のあらゆる疑問に回答します。
                  </p>
                </div>
              </div>
              <img 
                alt="Research Topics Graphic" 
                className="h-full w-full object-contain max-h-[180px] rounded-lg mt-auto" 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/SkDMu1h_QyfW9lHvTSmn2hC0E7s=/500x0/cultureampcom/production/212/dd0/df7/212dd0df7a4890b339558a7f/ps-highlights-research.png" 
              />
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
         4. PEAK PERFORMANCE (PCQ) FEATURE SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-5 flex flex-col justify-center text-center desktop:text-left desktop:col-start-2">
            <h2 className="font-heading font-medium heading-sm mb-24">
              ピークパフォーマンス（最高業績）へのロードマップを構築
            </h2>
            <div className="text-md copy mb-36 text-muted leading-relaxed">
              <p>
                パフォーマンス・カルチャー・クアドラント（PCQ）は、職場環境へのエンゲージメントとパフォーマンスに対する確信度の相関関係を可視化し、持続可能な最高成果へと導くフレームワークです。
              </p>
            </div>
            <div>
              <a href="/platform/engage/performance-culture-quadrant" className="button button--secondary">
                PCQの詳細を見る
              </a>
            </div>
          </div>

          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden relative bg-black/5 aspect-video flex items-center justify-center border border-black/10">
              {/* 動画サムネイルプレイヤーイメージ */}
              <img 
                alt="PCQ Video Thumbnail" 
                className="w-full h-full object-cover" 
                src="https://embed-ssl.wistia.com/deliveries/ed71da22a08fa53bd32a0ca14a6b6402.jpg?image_crop_resized=640x480" 
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <Play size={28} className="text-black ml-1 fill-black" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         5. RESEARCH IN THE NEWS (メディア掲載記事)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="text-center col-start-1 tablet:col-start-3 col-end-full tablet:col-end-11 mb-36 tablet:mb-48 desktop:mb-60">
            <h2 className="font-heading font-medium heading-md">
              ニュース・メディア掲載記事
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-24">
            {newsArticles.map((article, idx) => (
              <article key={idx} className="bg-white border border-black/10 rounded-xl p-24 flex flex-col justify-between shadow-0 hover:shadow-1 hover:-translate-y-2 transition-all">
                <div className="flex flex-col gap-12 mb-24">
                  <p className="eyebrow text-muted">{article.source}</p>
                  <h3 className="font-heading font-medium text-16 desktop:text-18 leading-relaxed">
                    {article.title}
                  </h3>
                </div>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button button--secondary text-13 self-start mt-auto"
                >
                  記事を読む
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         6. LATEST RESEARCH (最新研究・レポート)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84" id="latest-research">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="text-center col-start-1 tablet:col-start-3 col-end-full tablet:col-end-11 mb-36 tablet:mb-48 desktop:mb-60">
            <h2 className="font-heading font-medium heading-md">
              最新の研究・レポート
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-24">
            {latestResearch.map((item, idx) => (
              <article key={idx} className="bg-white border border-black/10 rounded-xl overflow-hidden flex flex-col justify-between shadow-0 hover:shadow-1 hover:-translate-y-2 transition-all">
                <div className="p-24 pb-0">
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-16">
                    <img 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                      src={item.image} 
                    />
                  </div>
                  <p className="eyebrow text-muted mb-8">{item.tag}</p>
                  <h3 className="font-heading font-medium text-18 mb-12 leading-relaxed">
                    {item.title}
                  </h3>
                  <p className="text-14 text-muted leading-relaxed mb-24">
                    {item.desc}
                  </p>
                </div>
                <div className="p-24 pt-0 mt-auto">
                  <a href={item.link} className="button button--secondary text-13 self-start">
                    続きを読む
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         7. BOTTOM CTA SECTION (全ページ統一文言 ＆ 装飾なし)
         ========================================================================== */}
      <div className="container grid gap-x-24 grid-cols-1 tablet:grid-cols-12 tablet:mb-120 pb-60 tablet:pb-84 desktop:pb-132">
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

    </div>
  );
}