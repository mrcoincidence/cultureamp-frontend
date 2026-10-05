'use client';

import LogoMarquee from "@/components/LogoMarquee";
import CaseStudyFeature from "@/components/CaseStudyFeature";

export default function EnterpriseSolutionPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <h1 className="eyebrow font-sans">エンタープライズ向け パフォーマンス管理ソリューション</h1>
            <h2 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              カルチャーとパフォーマンスのためのインテリジェンス・レイヤー
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                実証されたピープルサイエンスの上に構築された唯一の常時稼働インテリジェンス・レイヤーで、従業員のベクトルを揃え、責任感を醸成し、事業成果を拡大します。
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

          {/* 右側ヒーロービジュアル (Wistia動画 ek1dor60d0) */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-black/5 p-12">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/10">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/ek1dor60d0" 
                  title="web-solutions-hero-segment-enterprise"
                  className="w-full h-full object-cover"
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
      <LogoMarquee />

      {/* ==========================================================================
         3. FEATURE 1: Turn employee signals into drivers of performance
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              従業員のシグナルをパフォーマンスの原動力へ
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                エンゲージメントを単なる意識調査として終わらせない。従業員の感情や意識をパフォーマンスに直接結びつけることで、何が機能しているか、どこにリスクがあるか、どこに集中すべきかについての可視性と指針を経営陣に提供します。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/btx5pewhi8" 
                  title="Engage Merged"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Enterprise-grade partnership
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              初日から安心のエンタープライズ品質パートナーシップ
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                組織変革にリスクは不要です。専任の導入チーム、カスタマーサクセスマネージャー、ピープルサイエンティストが、展開・定着化・戦略的インパクト創出まで徹底サポートします。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/vs4zvb8Uyi65Ec24pVeP1s2s6Xk=/750x0/cultureampcom/production/c87/c4a/21a/c87c4a21af4c307cd8d46ca1/content-drawer-feature-service-model.png" 
              alt="24/5 support service model" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Purpose-built AI
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              複雑なグローバル組織のために特化したAI
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                単にデータを収集するだけでなく、アクションを起こしましょう。AI Coachはエンゲージメントサーベイやパフォーマンスレビューを統合要約し、即座に活用できるインサイト、専門的なコーチング、パーソナライズされたアクションプランを提供します。
              </p>
            </div>
          </div>
          
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/2g2na1amn6" 
                  title="AI Coach Demo"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. FEATURE 4: Central Surveys
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              一括デザイン、全社展開（Central Surveys）
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                セントラルサーベイ機能により、親会社組織は標準化された設問とエンタープライズグレードのプライバシーを備えた1つのサーベイを設計し、各子会社チームが実際の展開を担当できます。個別レポートと統合レポートにより、リーダーはスピーディーに結果に対処できます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/_SOzx8EH8iqpPTvUZXlUyU1lBvc=/750x0/cultureampcom/production/acf/c71/5c7/acfc715c7aaaa1ec014e907a/Feature-card-1.png" 
              alt="Central surveys feature card" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. POWER CTA COMPONENT
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <h2 className="font-serif font-medium heading-md text-balance mb-20 tablet:mb-24 text-black">
              カルチャー起点でROIを生み出すブループリントを取得
            </h2>
            <div className="copy text-lg mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
              <p>
                当社の調査によると、ピークパフォーマンスカルチャーを持つ企業は財務面で47%の優位性持っています。経営陣へ提示可能なビジネスケース構築に必要なデータを取得してください。
              </p>
            </div>
            <div className="flex flex-col tablet:flex-row tablet:justify-center gap-16 font-sans">
              <a href="/resources/reports/performance-culture-research" className="button button--secondary">
                レポートをダウンロード
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         8. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">Perform</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">離職リスク予防インサイト</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">拡張性とセキュリティ</span>
            </div>

            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">Perform</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  モダンで継続的なパフォーマンス管理をスケール
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    煩雑な年1回の評価を、継続的なフィードバック、目標管理、公正な評価に置き換え。大企業の何千人もの従業員の能力開発とパフォーマンスを強力に推進します。
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
                      src="https://fast.wistia.net/embed/iframe/8kttv29t5z" 
                      title="Perform Feature Demo"
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
         9. CASE STUDY FEATURE (モジュール呼び出し)
         ========================================================================== */}
      <CaseStudyFeature
        title="優れたカルチャーと強固な業績の両立を支援"
        companyLogo="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/L_cKoKSl8-FJNv8kGTs8BXf1sEk=/0x100/cultureampcom/production/da4/691/a2a/da4691a2adf8350efa7c6aa1/logo-nasdaq2x.png"
        companyName="Nasdaq"
        headline="NasdaqがCulture Ampのデータアナリティクスを活用して離職リスクをモニタリングした方法"
        statNumber="<50%"
        statLabel="業界平均の自主離職率を下回る実績"
        caseStudyUrl="/case-studies/nasdaq"
        heroImageUrl="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/swZ0uYGjyeaKzZVCXT2sChL8BxM=/1000x1000/cultureampcom/production/a5a/40a/c46/a5a40ac46d9f2909ce6d7f90/case-study-nasdaq2x.png"
        heroImageAlt="Nasdaq New York City"
      />

      {/* ==========================================================================
         10. FINAL BOTTOM CTA SECTION
         ========================================================================== */}
      <section className="pb-60 tablet:pb-84 desktop:pb-132">
        <div className="container grid grid-cols-1 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-8 desktop:col-span-6 tablet:col-start-3 desktop:col-start-4 text-balance text-center">
            <h2 className="font-serif font-medium heading-lg mb-36 text-black">
              従業員への投資が、確かなインパクトを創り出します
            </h2>
            <div className="flex flex-col tablet:flex-row items-center justify-center gap-16 font-sans">
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