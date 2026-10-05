'use client';

import Link from "next/link";
import { ChevronRight, Award, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function AboutCultureAmpJapanPage() {
  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200 min-h-screen">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-6 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <h1 className="eyebrow">Culture Amp × Laboratik</h1>
            <h2 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              働くすべての人が、情熱と成果を高められる世界へ。
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left text-muted leading-relaxed">
              <p>
                オーストラリア・メルボルンで生まれたCulture Ampの志と、日本の職場に深く寄り添うLaboratikの専門性。2つの強みが融合し、日本企業の組織変革を強力に加速させます。
              </p>
            </div>

            <div className="flex flex-col tablet:flex-row items-center gap-16">
              <button className="button button--primary">
                デモを予約
              </button>
              <a href="/company/contact-us" className="button button--secondary">
                お問い合わせ
              </a>
            </div>
          </div>

          {/* 右側ヒーロービジュアル（カルチャー＆データのアートワーク） */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-white border border-black/10 p-24 tablet:p-36">
              <img 
                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9jSUhabkM-gxnD2EAVcR24ebTww=/1250x0/cultureampcom/production/1e2/ba0/dfc/1e2ba0dfc46777288dc84930/people-science-hero-research2x.png" 
                alt="Culture Amp Japan Partnership" 
                className="w-full h-auto object-contain rounded-2xl" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. SECTION 1: Culture Ampの原点と目指す世界観 (Power CTA風)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-3 col-span-full tablet:col-span-10 desktop:col-span-8 text-center text-balance">
            <span className="text-12 font-bold uppercase tracking-widest text-teal-500 block mb-12">
              OUR MISSION
            </span>
            <h2 className="font-heading font-medium heading-md text-balance mb-20 tablet:mb-24">
              より良い働き方の世界を創る（Create a better world of work）
            </h2>
            <div className="copy text-lg text-muted leading-relaxed max-w-[800px] mx-auto">
              <p className="mb-16">
                Culture Ampは2011年、オーストラリアのメルボルンで「組織文化（Culture）を最大の競争優位性に変える」という強い信念のもと誕生しました。
              </p>
              <p>
                ピープルサイエンス（組織心理学）とデータアナリティクス、そして最先端のテクノロジーを融合させ、従業員一人ひとりが価値を感じ、成長し、高い成果を発揮できる環境づくりを世界中で支援しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. SECTION 2: 日本におけるパートナーシップ (Laboratikの役割)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          
          <div className="col-span-full desktop:col-span-6 mb-36 desktop:mb-0">
            <div className="bg-white border border-black/10 shadow-2 rounded-3xl p-36">
              <div className="flex items-center gap-16 mb-24 pb-20 border-b border-black/10">
                <span className="text-20 font-bold tracking-tight text-black">Laboratik Inc.</span>
                <span className="bg-teal-200 text-teal-500 text-12 font-bold px-12 py-4 rounded-full">
                  Official Business Partner
                </span>
              </div>
              <h3 className="font-heading font-medium text-24 mb-16 text-black">
                日本企業固有の組織風土・人事課題に寄り添う専門サポート
              </h3>
              <p className="text-15 text-muted leading-relaxed">
                オフィシャルビジネスパートナーであるLaboratik株式会社が、販売・導入プロセスのサポートからカスタマーサクセスまで一貫して担当。日本の人事習慣や組織構造に対応した伴走型ソリューションを提供します。
              </p>
            </div>
          </div>

          <div className="col-span-full desktop:col-span-6 pl-0 desktop:pl-24">
            <span className="text-12 font-bold uppercase tracking-widest text-purple-500 block mb-12">
              JAPAN PARTNERSHIP
            </span>
            <h2 className="font-heading font-medium heading-sm mb-20">
              日本の組織変革に寄り添うオフィシャルパートナー「Laboratik」
            </h2>
            <div className="copy text-md text-muted leading-relaxed space-y-16">
              <p>
                Culture Ampの日本市場における販売・導入支援・カスタマーサクセスは、オフィシャルビジネスパートナーであるLaboratik（ラボラティック）株式会社が担当しています。
              </p>
              <p>
                グローバル先進プロダクトの魅力をそのままに、日本の独自のビジネス習慣、組織構造、労務環境に精通した専門チームが、日本語によるスムーズな立ち上げと手厚い伴走サポートを提供しています。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         4. SECTION 3: 唯一無二の提供価値 (3つの強みカード・Highlights Cards風)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="text-center col-start-1 tablet:col-start-3 col-end-full tablet:col-end-11 mb-36 tablet:mb-48">
            <span className="text-12 font-bold uppercase tracking-widest text-teal-500 block mb-12">
              UNIQUE VALUE PROPOSITION
            </span>
            <h2 className="font-heading font-medium heading-md text-balance">
              世界最大級のデータ × 日本の人事スペシャリストがもたらす唯一無二の価値
            </h2>
            <p className="text-16 text-muted mt-16 max-w-[720px] mx-auto">
              Culture AmpとLaboratikのタッグだからこそ実現できる、国内で他に類を見ない包括的なEX（従業員体験）ソリューションです。
            </p>
          </div>

          <div className="col-span-full grid grid-cols-1 tablet:grid-cols-3 gap-24">
            
            {/* 強み 1 */}
            <div className="bg-white border-t-2 border-t-purple-400 border border-black/10 shadow-0 rounded-b-2xl p-28 flex flex-col justify-between hover:shadow-1 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-200 flex items-center justify-center text-purple-500 mb-20">
                  <Award size={24} />
                </div>
                <h3 className="font-heading font-medium text-18 desktop:text-20 mb-12 leading-snug">
                  世界基準のピープルアナリティクス
                </h3>
                <p className="text-14 text-muted leading-relaxed">
                  2,500万人以上の回答データと豊富なグローバル/国内ベンチマークを活用し、自社の組織課題や立ち位置を客観的・科学的に把握できます。
                </p>
              </div>
            </div>

            {/* 強み 2 */}
            <div className="bg-white border-t-2 border-t-purple-400 border border-black/10 shadow-0 rounded-b-2xl p-28 flex flex-col justify-between hover:shadow-1 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-200 flex items-center justify-center text-teal-500 mb-20">
                  <Users size={24} />
                </div>
                <h3 className="font-heading font-medium text-18 desktop:text-20 mb-12 leading-snug">
                  日本企業に特化した高度な伴走支援
                </h3>
                <p className="text-14 text-muted leading-relaxed">
                  Laboratikの経験豊富な人事・組織変革スペシャリストが、サーベイ結果の分析から現場での具体的なアクションプラン策定まで、日本企業の文脈に合わせた伴走を行います。
                </p>
              </div>
            </div>

            {/* 強み 3 */}
            <div className="bg-white border-t-2 border-t-purple-400 border border-black/10 shadow-0 rounded-b-2xl p-28 flex flex-col justify-between hover:shadow-1 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-200 flex items-center justify-center text-orange-500 mb-20">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-heading font-medium text-18 desktop:text-20 mb-12 leading-snug">
                  持続可能な高業績組織の構築
                </h3>
                <p className="text-14 text-muted leading-relaxed">
                  単なるデータ収集や分析ツールの提供にとどまらず、現場の行動変容とエンゲージメント向上を促し、事業の成果へと直結させます。
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
         5. SECTION 4: 私たちの想い・メッセージ (Purple Banner)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white text-center">
            <div className="max-w-[800px] mx-auto flex flex-col items-center">
              <h2 className="font-heading font-medium heading-md mb-24 text-white text-balance">
                組織のカルチャーを、未来を開く最大の強みに
              </h2>
              <p className="text-16 tablet:text-18 text-white/90 leading-relaxed mb-36">
                「人に投資することが、事業の確かなインパクトを生み出す」——この価値観を日本中の組織へ広げていくことが私たちの使命です。データに基づく客観的な視点と、人に寄り添う対話を通じて、貴社が誇れる組織文化づくりを共に歩んでいきます。
              </p>
              <button className="button button--secondary-reversed">
                デモを予約
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. FINAL BOTTOM CTA SECTION (全ページ統一)
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