'use client';

import LogoMarquee from "@/components/LogoMarquee";
import BadgeSet from "@/components/BadgeSet";

export default function CioSolutionPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION (G2/Capterra表記削除)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <p className="eyebrow font-sans">
              CIO &amp; ITリーダー向け スケーラブルで安全なHRテクノロジー
            </p>
            <h1 className="font-serif font-medium heading-lg text-center text-balance desktop:text-left text-black">
              安全なHRテックでビジネスの将来性を担保
            </h1>
            <div className="copy text-lg text-balance text-center desktop:text-left font-sans text-black leading-relaxed">
              <p>
                データの堅牢な保護と統合を維持しながら、組織の生産性を解き放つ。Culture Ampは、HRオペレーションの合理化、ピープルデータの一元化、リアルタイムインサイトの可視化をエンタープライズレベルのセキュリティで支援します。
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
              src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/gpJzZNY3rURs7keDkEnK_9JzlmQ=/1250x0/cultureampcom/production/fc0/3c9/18e/fc03c918e56781016b1e4174/Solutions-Hero-Leadership-CIO.png" 
              alt="CIO Leadership Solution" 
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
         3. FEATURE 1: Streamline & Operational Efficiency
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-8">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              オペレーションの合理化と業務効率の飛躍的向上
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                拡張性の高いソリューションで、チームのよりスマートな働き方を実現。一元化されたデータと自動化されたインサイトにより、手作業のプロセスを最小限に抑え、組織全体の生産性を向上させます。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-2">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/jo0aSS84IYeN1dTDy6_0tBDieKs=/750x0/cultureampcom/production/dfb/61b/51f/dfb61b51fbaac94c8ca6da01/set-differentiator-data-insights.jpg" 
                alt="Streamline Operations" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. FEATURE 2: Seamless Integrations
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-4 flex flex-col justify-center text-center desktop:text-left text-pretty desktop:col-start-2">
            <h2 className="font-serif font-medium heading-sm mb-24 text-black">
              シームレスなシステム連携で成果を最大化
            </h2>
            <div className="text-md copy font-sans text-black leading-relaxed">
              <p>
                HRIS、基幹システム、コミュニケーションツールなど、社員が日々利用する主要ツールとスムーズに連携。データ連携の工数を大幅に削減し、必要なインサイトにいつでもアクセスできる環境を構築します。
              </p>
            </div>
          </div>
          <div className="row-start-1 col-span-4 tablet:col-span-6 desktop:col-span-5 col-start-2 tablet:col-start-4 flex flex-col justify-center mb-36 desktop:mb-0 desktop:col-start-7">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-tan p-12">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/SuqNWZJPa7Yi3oSwBHdw78bizUU=/750x0/cultureampcom/production/33b/9a0/80f/33b9a080f9ddfd7b629fb47f/hero-integrations.png" 
                alt="Seamless Integrations" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. ACCORDION / SECURITY & INTEGRATIONS DRAWER SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full tablet:col-span-10 tablet:col-start-2 bg-white rounded-3xl p-24 tablet:p-36 shadow-2 border border-[#EFE7E0]">
            {[
              "スケーラブル、安全、そして高い相互運用性",
              "高水準のセキュリティとデータ保護規格（SOC II, ISO, GDPR準拠）",
              "迅速な導入と運用定着を支えるサポート＆サービス"
            ].map((title, i) => (
              <div key={i} className="group border-b last:border-b-0 border-black-10 py-12 desktop:py-24 cursor-pointer flex justify-between items-center transition-all">
                <h3 className="font-serif text-[18px] tablet:text-[22px] font-medium text-black transition-transform duration-300 group-hover:translate-x-2">
                  {title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center group-hover:border-black group-hover:bg-black/5 transition-all flex-shrink-0 ml-4 font-sans text-black">
                  +
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. BADGE SET SECTION
         ========================================================================== */}
      <BadgeSet />

      {/* ==========================================================================
         7. HIGHLIGHTS CAROUSEL CARDS SECTION (Security, Support, API)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full flex gap-24 justify-center flex-wrap">
            
            {/* Card 1 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(33.33%-24px)] relative bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 hover:shadow-1 transition-all rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-serif font-medium text-16 desktop:text-20 text-black">セキュリティ・トラストセンター</h3>
                <div className="copy text-sm font-sans text-black leading-relaxed">
                  <p>データプライバシーとセキュリティへの取り組みはCulture Ampの基盤です。最新のセキュリティ体制の確認や各種ドキュメントのリクエストが可能です。</p>
                </div>
              </div>
              <div className="font-sans">
                <a href="https://security.cultureamp.com/" className="text-14 text-link" target="_blank" rel="noopener noreferrer">詳細を見る</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(33.33%-24px)] relative bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 hover:shadow-1 transition-all rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-serif font-medium text-16 desktop:text-20 text-black">サポートガイド</h3>
                <div className="copy text-sm font-sans text-black leading-relaxed">
                  <p>充実したサポートガイドで、各種設定手順や疑問点に対する解答をステップバイステップで提供します。</p>
                </div>
              </div>
              <div className="font-sans">
                <a href="https://support.cultureamp.com/en/" className="text-14 text-link" target="_blank" rel="noopener noreferrer">詳細を見る</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full tablet:w-[calc(33.33%-24px)] desktop:w-[calc(33.33%-24px)] relative bg-white flex flex-col items-start p-24 gap-16 desktop:gap-24 border-t-2 border-t-purple-300 shadow-0 hover:shadow-1 transition-all rounded-b-2xl">
              <div className="flex flex-col gap-12 grow">
                <h3 className="font-serif font-medium text-16 desktop:text-20 text-black">Culture Amp API</h3>
                <div className="copy text-sm font-sans text-black leading-relaxed">
                  <p>ピープルデータを連結し、強力なインサイトを解き放ちます。APIを活用して組織ニーズに応じたオンデマンドなデータ連携を可能にします。</p>
                </div>
              </div>
              <div className="font-sans">
                <a href="/platform/api" className="text-14 text-link">詳細を見る</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         8. FINAL BOTTOM CTA SECTION (全ページ共通)
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