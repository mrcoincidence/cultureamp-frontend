'use client';

import LogoMarquee from "@/components/LogoMarquee";
import CaseStudyFeature from "@/components/CaseStudyFeature";

export default function ProfessionalServicesSolutionPage() {
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
              プロフェッショナルサービス業界向け 従業員体験（EX）ソフトウェア
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              プロフェッショナルサービスにおいて、専門性こそが商品です
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                クライアントは高度な専門性に相応の対価を支払いますが、それは人材がスキルを発揮し、伸ばし続けてこそ維持されます。AIが専門性の価値を再定義する現代において、人材育成は業界最大のエンゲージメント要因です。<strong>Culture Ampは組織が取るべき具体的なアクションを明確にし、請求単価の低下や離職に繋がる前に育成ギャップを埋められるようマネージャーを強力に支援します。</strong>
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/z7EzujMXjcfuyOmQusx9ueYbd8g=/1250x0/cultureampcom/production/e6a/39d/9ab/e6a39d9ab549aa67f8e0bc5a/26Q3-Professional-Services.png" 
              alt="Professional Services Solution" 
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
         3. FEATURE 1: Understand Drivers
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              部門・プラクティスごとに、エンゲージメントと定着率の真の要因を把握
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                人材育成における課題が明確なシグナルとして表れることは稀です。多くの場合、成果を出していたハイフォーマーの不意の退職や、スキル向上に意欲的な若手が活かせる場を見出せないといったかたちで表面化します。Culture Ampは同業他社とのベンチマーク比較を通じて、手遅れになる前に育成のボトルネックを可視化します。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/7NNjwxfRiQsRjR_rW8ZVrP8P4bU=/750x0/cultureampcom/production/859/4bb/f0a/8594bbf0a759a5e626efbc43/Solutions-LP-Product-Feature-Understand-whats-driving-engagement-and-retention-practice-by-practice.png" 
                alt="Engagement Drivers" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Clear Growth Path
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              すべてのプロフェッショナルに、専門性を深める明確な成長パスを提示
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                プロジェクトごとにチームが結成・再編される業界だからこそ、成長に関する対話は年1評価よりもスピード感が重要です。「Develop」は次に目指すべきスキルパスを明示し、「目標管理」でアサイン変更時も優先順位を維持。「1-on-1」によって成長の対話を日常の習慣へと落とし込みます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/8nVbMrKkzj3-4HPEkC8eeUSo2pw=/750x0/cultureampcom/production/ba0/c34/69b/ba0c3469bcc88ef20ecfc3a5/Solutions-LP-Product-Feature-Give-every-employee-a-clear-path-to-deepen-their-expertise.png" 
                alt="Clear Growth Path" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. FEATURE 3: Equip Project Leaders
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              プロジェクトリーダーが基準を設定し、メンバーを育成できる環境を整備
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                プロジェクトマネージャーは案件成果で評価されることが多く、ピープルマネジメントのトレーニングを受ける機会が限られがちです。「Perform」は課題の早期発見と品質維持をサポートし、「AI Coach」がピープルサイエンスに基づく助言を提供することで、組織全体のスキルと単価価値を守ります。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9iymnsPBEwX7L0U4HIfBKlJb_Mw=/750x0/cultureampcom/production/1de/209/b37/1de209b375ecc378d967fc54/Solutions-LP-Product-Feature-Equip-project-leaders-to-set-standards-and-develop-their-people.png" 
                alt="Equip Project Leaders" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. FEATURE 4: Keep Best Experts
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              トッププロフェッショナルの流出を防止
            </h2>
            <div className="text-md copy mb-36 font-sans text-black leading-relaxed">
              <p>
                AIが業界を再定義する中、Lycopodiumのような企業がCulture Ampを活用していかにクライアント関係を守り、キーマンの定着を実現しているかをご覧ください。
              </p>
            </div>
            <div className="font-sans">
              <a href="/resources/guides-and-toolkits/4-reasons-professional-services-choose-culture-amp" className="button button--secondary">
                ソリューションガイドを見る
              </a>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/ziFgzyjgp3AsMSJJZxb1x3p6RM8=/750x0/cultureampcom/production/ec5/7dc/49f/ec57dc49f97166babd7f2b50/ProfServ-Diff-Guide-cover.png" 
                alt="Professional Services Guide" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. POWER CTA COMPONENT
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <img 
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/o8aIj_SKz6QHw0G8sQD9ZlwdHKc=/250x0/cultureampcom/production/add/cb4/a38/addcb4a384c86d0a4e171683/solutions-spot-1K-prof-services.png" 
              alt="1K Professional Services Firms" 
              className="mb-36 max-w-132 mx-auto" 
            />
            <h2 className="font-serif font-medium heading-md text-balance mb-20 tablet:mb-24 text-black">
              1,000社のプロフェッショナルサービス企業が明かすエンゲージメントの実態
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
         8. CAROUSEL FEATURE SET (Tan Background Card)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 overflow-hidden">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="row-start-1 col-start-1 col-span-full -mx-20 tablet:mx-0 bg-tan rounded-[32px] p-24 tablet:p-36 desktop:p-60">
            
            {/* タブナビゲーション */}
            <div className="hidden tablet:flex gap-x-24 border-b border-black-10 pb-12 mb-36 desktop:mb-48 font-semibold text-14 desktop:text-16 font-sans">
              <span className="border-b-2 border-black pb-12 -mb-[14px] cursor-pointer text-black">専門性の育成</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">エンゲージメント推進</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">AI Coach</span>
              <span className="text-black/70 cursor-pointer hover:text-black transition-colors">迅速な導入</span>
            </div>

            {/* スライドコンテンツ */}
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 desktop:gap-y-84 items-center">
              <div className="col-start-1 tablet:col-start-2 col-end-full tablet:col-end-12 desktop:col-end-6 h-full flex flex-col justify-center text-black">
                <p className="tablet:hidden text-14 font-semibold mb-24 font-sans">専門性の育成</p>
                <h2 className="font-serif font-medium heading-sm mb-20 tablet:mb-24 desktop:mb-48 text-black">
                  AI時代に求められるスピードでスキルと知識を強化
                </h2>
                <div className="copy text-md mb-20 tablet:mb-36 desktop:mb-48 font-sans text-black leading-relaxed">
                  <p>
                    すべての社員に新たなスキル習得の道筋を提供。目標管理と定期的な1-on-1で成長機会を継続的に与え、急速に進化する専門知識をサポートします。
                  </p>
                </div>
              </div>

              <div className="row-start-2 desktop:row-start-1 tablet:col-start-2 desktop:col-start-7 col-end-full tablet:col-end-12 h-full flex flex-col justify-center">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/8nVbMrKkzj3-4HPEkC8eeUSo2pw=/750x0/cultureampcom/production/ba0/c34/69b/ba0c3469bcc88ef20ecfc3a5/Solutions-LP-Product-Feature-Give-every-employee-a-clear-path-to-deepen-their-expertise.png" 
                  alt="Develop Expertise" 
                  className="w-full rounded-2xl object-cover shadow-1"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         9. CASE STUDY FEATURE (Robidus事例 モジュール呼び出し)
         ========================================================================== */}
      <CaseStudyFeature
        title="エンゲージメントが高まれば、優秀な人材は定着する"
        companyLogo="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/EubI3lxDFnY-on3YKrbZ9upp_U8=/0x100/cultureampcom/production/818/afd/c53/818afdc53b7b344ea7058b3f/Robidus-logo-LP-case-study-430x100.png"
        companyName="Robidus"
        headline="Robidusがエンゲージメント向上を通じて離職率・病欠率を大幅に改善した方法"
        statNumber="−6%"
        statLabel="離職率の削減"
        caseStudyUrl="/case-studies/robidus"
        heroImageUrl="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/AKECVQagTEEAGi__pJQTv3rIBqg=/1000x1000/cultureampcom/production/a9d/588/39f/a9d58839f48a52ae4d77acde/2309-case-study-feature-Robidus-1440x960.png"
        heroImageAlt="Robidus team photo"
      />

      {/* ==========================================================================
         10. FINAL BOTTOM CTA SECTION (全ページ共通)
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