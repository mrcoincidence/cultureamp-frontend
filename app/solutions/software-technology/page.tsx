'use client';

import LogoMarquee from "@/components/LogoMarquee";
import CaseStudyFeature from "@/components/CaseStudyFeature";

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
            <p className="eyebrow font-sans">
              テック企業向け 従業員エンゲージメント・プラットフォーム
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              次世代ツールでハイパフォーマンスをスケール
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                Culture Ampで組織の将来性を担保し、AIトランスフォーメーションを加速。エンゲージメントとパフォーマンスデータを統合し、マネージャーの意思決定を確かなものにすることで、成長を拡大する高業績カルチャーを構築します。
              </p>
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16 font-sans">
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
      <LogoMarquee />

      {/* ==========================================================================
         3. FEATURE 1: Accelerate AI Transformation (Wistia btx5pewhi8)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              組織におけるAIトランスフォーメーションの加速
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                マネージャー、リーダー、人事チームが一体となってAI導入を推進。安全かつスピーディーに明確な事業成果をもたらします。AI適応度の診断、ガイドラインの設定、そして「AI Coach」や専用サーベイによるフィードバックの迅速なアクション化を支援します。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/btx5pewhi8" 
                  title="Accelerate AI Transformation"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Empower Managers (Wistia jq8opw7rou)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              マネージャーの確信に満ちたリーダーシップを支援
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                エンゲージメントとパフォーマンスのデータを具体的な次のステップに変換し、現場リーダーのインパクトを最大化。Culture Ampはタイムリーなインサイト、最適化されたアクションプラン、専門的なコーチングによりリーダーシップの質を高めます。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/jq8opw7rou" 
                  title="Empower Managers"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: High Performance at Scale (Wistia xrlhua4ke2)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              規模拡大に応じたハイパフォーマンスカルチャーの構築
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                エンゲージメントのシグナルとパフォーマンス結果を繋ぐ直感的な統合プラットフォームで、成果創出を加速。定着率を高め、チームのアジリティ（機敏性）と目標のベクトルを揃え、組織のスケールに応じた成功を実現します。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/xrlhua4ke2" 
                  title="High Performance at Scale"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
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
            <h2 className="font-serif font-medium heading-md text-balance mb-20 tablet:mb-24 text-black">
              トップパフォーマンスを誇るテック企業のインサイトを取得
            </h2>
            <div className="flex flex-col tablet:flex-row tablet:justify-center gap-16 font-sans">
              <a href="/science/insights" className="button button--secondary">
                業界ベンチマークを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. CAROUSEL FEATURE SET (Tan Background Card - Wistia hasx2xhtgd)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">パフォーマンス向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">エンゲージメント向上</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">迅速な導入</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">パフォーマンス向上</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  社員とビジネス双方の成果を最大化
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    プロダクトリリースや目標達成に向け、結束した組織を構築。1-on-1や目標管理機能で課題をスピーディーに解決し、フィードバックで人材の強みを伸ばします。
                  </p>
                </div>
                <div className="font-sans">
                  <a href="/platform/perform" className="button button--secondary">
                    Performを見る
                  </a>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <div className="shadow-1 rounded-3xl overflow-hidden bg-white p-12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                    <iframe 
                      src="https://fast.wistia.net/embed/iframe/hasx2xhtgd" 
                      title="Unlock High Performance Demo"
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
         8. CASE STUDY FEATURE (Omio事例 モジュール呼び出し)
         ========================================================================== */}
      <CaseStudyFeature
        title="急成長テックチームのためのCultureOS™"
        companyLogo="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/J_eOVgoS89dDBGyX4_M4zbn9z1s=/0x100/cultureampcom/production/d28/340/cb6/d28340cb6fa83d9286559d8a/logo-omio-travel2x.png"
        companyName="Omio"
        headline="データ主導の従業員体験戦略がいかにOmioの危機拡大を防止し成長を加速させたか"
        statNumber="23%"
        statLabel="前年比での離職率抑制実績"
        caseStudyUrl="/case-studies/omio"
        heroImageUrl="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/HNWxIHBJLTSCf3SR1Rg6I1jNL4Y=/1000x1000/cultureampcom/production/a1a/4c5/df2/a1a4c5df20e6c7c3652c8aeb/case-study-omio-travel2x.png"
        heroImageAlt="Omio employees working"
      />

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