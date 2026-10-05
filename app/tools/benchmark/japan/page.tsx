'use client';

import Link from "next/link";
import { ChevronLeft, Frown, Smile } from "lucide-react";

export default function JapanBenchmarkDetailPage() {
  // 性別分布データ
  const genderData = [
    { label: "男性", percent: "57%", width: "100.0%" },
    { label: "女性", percent: "43%", width: "75.4%" },
    { label: "ノンバイナリー", percent: "0.04%", width: "0.07%" },
  ];

  // 勤続年数分布データ
  const tenureData = [
    { label: "3ヶ月未満", percent: "1%", width: "3.4%" },
    { label: "3ヶ月〜6ヶ月未満", percent: "3%", width: "10.3%" },
    { label: "6ヶ月〜1年未満", percent: "6%", width: "20.6%" },
    { label: "1年〜2年未満", percent: "10%", width: "34.4%" },
    { label: "2年〜4年未満", percent: "20%", width: "68.9%" },
    { label: "4年〜6年未満", percent: "13%", width: "44.8%" },
    { label: "6年〜10年未満", percent: "17%", width: "58.6%" },
    { label: "10年以上", percent: "29%", width: "100.0%" },
  ];

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200 min-h-screen">
      
      {/* ==========================================================================
         1. BREADCRUMB
         ========================================================================== */}
      <nav className="pt-24 tablet:pt-36">
        <ol className="container flex gap-x-6 items-center text-12">
          <li className="flex gap-x-6 items-center">
            <ChevronLeft size={16} className="text-black opacity-75" />
            <Link 
              href="/tools/benchmark" 
              className="text-black-50 transition-all hover:text-black hover:bg-black-10 active:bg-black-30 text-nowrap"
            >
              ベンチマーク一覧
            </Link>
          </li>
        </ol>
      </nav>

      {/* ==========================================================================
         2. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 py-48 desktop:py-60">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側：タイトルと数値概要 */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 col-start-1 tablet:col-start-2 items-center desktop:items-start desktop:col-span-5 desktop:col-start-1 mb-60 desktop:mb-0">
            <h1 className="font-heading heading-md font-medium text-center text-balance desktop:text-left">
              Japan July 2026 (日本総合ベンチマーク)
            </h1>

            <ul className="flex w-full gap-24 justify-center desktop:justify-start items-baseline">
              <li className="text-center desktop:text-left">
                <p className="heading-lg font-bold text-teal-500">~17.5万件</p>
                <p className="text-14 font-bold text-teal-500">回答データ数（過去12ヶ月）</p>
              </li>
              <li className="hidden desktop:block">
                <span className="text-orange-200 leading-tight heading-lg font-bold">/ </span>
              </li>
              <li className="text-center desktop:text-left">
                <p className="heading-lg font-bold text-purple-500">~150社</p>
                <p className="text-14 font-bold text-purple-500">対象組織数</p>
              </li>
            </ul>

            <div className="copy text-balance text-center desktop:text-left">
              <p>
                これらのインサイトは、2025年7月から2026年6月の間に収集された約150社・約17.5万件の回答データを表しています。
              </p>
              <p>
                新興ベンチマークの精度と安定性を確保するため、統計的なサンプリング手法を使用しています。
              </p>
              <p className="flex items-center gap-x-10 justify-center desktop:justify-start text-14 text-black font-medium">
                Culture Amp実施データより
              </p>
            </div>
          </div>

          {/* 右側：主要業界 ＆ 性別内訳 */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center gap-36">
            <div>
              <h2 className="text-center font-bold mb-20">本ベンチマークにおける主要対象業界</h2>
              <p className="tablet:px-24 text-center text-14 leading-relaxed">
                コンピューターソフトウェア、金融サービス、電器・電子機器製造、情報セキュリティ、マーケティング・広告、消費財、IT・情報通信サービス、インターネット、医薬品、防衛・宇宙
              </p>
            </div>

            <div>
              <h2 className="text-center font-bold mb-20">回答者の性別構成比</h2>
              <ul>
                {genderData.map((gender, idx) => (
                  <li key={idx} className="flex items-center">
                    <p className="pb-2 min-h-[2rem] w-2/5 text-sm border-r border-black-30 pr-16 text-right leading-tight flex items-center justify-end">
                      {gender.label}
                    </p>
                    <div className="relative w-3/5 flex">
                      <div className="bg-purple-200 h-24" style={{ width: gender.width }} />
                      <p className="bg-pale pl-12 w-[3.5rem] text-sm flex items-center">{gender.percent}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         3. ENGAGEMENT ANALYSIS SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側：セクション見出し */}
          <div className="col-start-1 col-span-full desktop:col-span-6 mb-48">
            <h2 className="heading-sm mb-24 font-medium font-heading text-balance">
              従業員は組織にコミット（エンゲージ）しているか？
            </h2>
            <div className="copy text-lg text-balance">
              <p>
                エンゲージメントの高い従業員は、組織に対して感情的にコミットしています。こうした従業員はより長く組織にとどまり、高い生産性と効果を発揮します。優れた組織には、より多くのエンゲージされた従業員が存在します。
              </p>
            </div>
          </div>

          {/* 右側：スコアサマリーカード */}
          <div className="col-span-full desktop:col-span-6 bg-white shadow-2 rounded-lg p-36 mb-48">
            <div>
              <h3 className="heading-xs mb-20 font-bold text-teal-500">
                日本の従業員の 61% がエンゲージしています
              </h3>
              <p className="text-lg">
                これは、他の地域と比較して下位 28% に位置しています。
              </p>
              <hr className="border-b border-teal-200 my-36" />
              <p className="text-lg">
                本ベンチマークに含まれる組織の eNPS スコアの中央値は -8 であり、他の国々と比較して下位 3% にあたります。
              </p>
            </div>
          </div>

          {/* 中央：パーセンタイル分布チャート */}
          <div className="flex items-center col-span-full mb-36">
            <div className="flex-1 flex desktop:mb-24 mb-16">
              
              <div className="w-1/12 hidden desktop:block"></div>
              
              {/* チャート本体 */}
              <div className="relative desktop:w-10/12 w-full" style={{ height: "400px" }}>
                <div className="relative w-full mt-24 mb-48" style={{ height: "260px" }}>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "0%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "12.5%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "25%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "37.5%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border hidden" style={{ top: "50%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "62.5%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "75%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "87.5%" }}></div>
                  <div className="absolute w-full -mt-1 border-black-30 border" style={{ top: "100%" }}></div>

                  <div className="absolute w-full flex" style={{ top: "50%" }}>
                    <div className="absolute w-full border-b-2 border-black-30 border-dashed" style={{ bottom: "50px", marginTop: "-1px" }}>
                      <span className="absolute text-right mr-16 transform -translate-y-1/2 text-sm hidden desktop:block" style={{ right: "100%", width: "160px" }}>
                        グローバル平均中央値: 71%
                      </span>
                    </div>

                    <div className="w-1/5 relative">
                      <div className="absolute bg-purple-300 transform -translate-x-1/2" style={{ left: "50%", height: "130px", maxWidth: "120px", top: "100%", width: "60%" }}>
                        <div className="text-purple-500 tablet:text-lg font-bold text-center mt-4 absolute w-full" style={{ top: "100%" }}>
                          35%
                        </div>
                      </div>
                    </div>

                    <div className="w-1/5 relative">
                      <div className="absolute bg-purple-300 transform -translate-x-1/2" style={{ left: "50%", height: "65px", maxWidth: "120px", top: "100%", width: "60%" }}>
                        <div className="text-purple-500 tablet:text-lg font-bold text-center mt-4 absolute w-full" style={{ top: "100%" }}>
                          48%
                        </div>
                      </div>
                    </div>

                    <div className="w-1/5 relative">
                      <span className="absolute w-full text-teal-500 tablet:text-lg font-bold text-center transform -translate-y-1/2">
                        61% エンゲージ
                      </span>
                    </div>

                    <div className="w-1/5 relative">
                      <div className="absolute bg-teal-300 transform -translate-x-1/2" style={{ left: "50%", height: "75px", maxWidth: "120px", bottom: "100%", width: "60%" }}>
                        <div className="text-teal-500 tablet:text-lg font-bold text-center mb-4 absolute w-full" style={{ bottom: "100%" }}>
                          76%
                        </div>
                      </div>
                    </div>

                    <div className="w-1/5 relative">
                      <div className="absolute bg-teal-300 transform -translate-x-1/2" style={{ left: "50%", height: "115px", maxWidth: "120px", bottom: "100%", width: "60%" }}>
                        <div className="text-teal-500 tablet:text-lg font-bold text-center mb-4 absolute w-full" style={{ bottom: "100%" }}>
                          84%
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="flex tablet:text-sm text-xs">
                  <p className="flex-1 text-center">下位 10%</p>
                  <p className="flex-1 text-center">下位 25%</p>
                  <div className="flex-1 text-center">
                    <p>日本中央値</p>
                  </div>
                  <p className="flex-1 text-center">上位 25%</p>
                  <p className="flex-1 text-center">上位 10%</p>
                </div>

                <div className="text-sm mt-24 flex items-center">
                  <span className="border-b-2 border-black-30 border-dashed mr-12" style={{ width: "24px" }}></span>
                  <p>グローバル平均中央値 (71%)</p>
                </div>
              </div>

              <div className="relative hidden tablet:block desktop:w-1/12 tablet:w-1/5 mt-24 mb-48" style={{ height: "260px" }}>
                <div className="absolute flex flex-col transform -translate-y-1/2 -translate-x-1/2" style={{ top: "50%", left: "50%", marginTop: "21.68px", height: "240px" }}>
                  <p className="text-sm text-center font-bold mb-8" style={{ height: "16px" }}>100</p>
                  <div className="relative border-2 border-black-30 rounded-lg flex-1" style={{ width: "24px" }}>
                    <div className="border border-purple-300 absolute w-full" style={{ top: "65%", marginTop: "-1px" }}>
                      <span className="absolute font-bold text-sm mr-12" style={{ right: "100%", marginTop: "-8px" }}>35</span>
                    </div>
                    <div className="border border-purple-300 absolute w-full" style={{ top: "52%", marginTop: "-1px" }}>
                      <span className="absolute font-bold text-sm ml-12" style={{ left: "100%", marginTop: "-8px" }}>48</span>
                    </div>
                    <div className="border border-black-30 absolute w-full" style={{ top: "39%", marginTop: "-1px" }}>
                      <span className="absolute font-bold text-sm mr-12" style={{ right: "100%", marginTop: "-8px" }}>61</span>
                    </div>
                    <div className="border border-teal-300 absolute w-full" style={{ top: "24%", marginTop: "-1px" }}>
                      <span className="absolute font-bold text-sm ml-12" style={{ left: "100%", marginTop: "-8px" }}>76</span>
                    </div>
                    <div className="border border-teal-300 absolute w-full" style={{ top: "16%", marginTop: "-1px" }}>
                      <span className="absolute font-bold text-sm mr-12" style={{ right: "100%", marginTop: "-8px" }}>84</span>
                    </div>
                  </div>
                  <p className="text-sm text-center font-bold mt-8" style={{ height: "16px" }}>0</p>
                </div>
              </div>

            </div>
          </div>

          {/* 下部：比較カード 2列（Dark Tealヘッダー text-white 適用） */}
          <div className="col-span-full desktop:col-span-6 desktop:px-24 mb-36 desktop:mb-0">
            <div>
              <div className="bg-teal-500 rounded-t-lg p-36">
                <h4 className="text-white font-bold text-18">日本の組織における主な特徴と課題</h4>
              </div>
              <div className="bg-white rounded p-36 shadow-lg -mx-8">
                <div className="flex">
                  <div className="mr-36 mt-6">
                    <Frown size={24} className="text-purple-500 flex-shrink-0" />
                  </div>
                  <p className="text-lg">
                    否定的な側面として、日本の従業員は <strong>「改善アクションの実行（Action）」</strong>、<strong>「公平性（Equity）」</strong>、<strong>「事業パフォーマンス（Company Performance）」</strong> の項目において、全体平均を大幅に下回る肯定率となりました。
                  </p>
                </div>
              </div>
              <div className="bg-teal-500 rounded-b-lg h-10 shadow-lg"></div>
            </div>
          </div>

          <div className="col-span-full desktop:col-span-6 desktop:px-24">
            <div>
              <div className="bg-teal-500 rounded-t-lg p-36 copy copy--reversed">
                <p className="text-white text-16">
                  日本で働く人々は、スイス、アイルランド、スペイン、アルゼンチンなどの国々と比較してエンゲージメントが低い傾向にあります。
                </p>
              </div>
              <div className="bg-white rounded p-36 shadow-lg -mx-8">
                <div className="flex">
                  <div className="mr-36 mt-6">
                    <Smile size={24} className="text-purple-500 flex-shrink-0" />
                  </div>
                  <p className="text-lg">
                    日本で最もスコアが高かった設問は <strong>「自分の仕事が会社のミッションにどのように貢献しているか理解している」</strong> で、91%の人が肯定しました（全体平均比-2%）。「より広範な目的への貢献」に対して最もポジティブな評価を示しています。
                  </p>
                </div>
                <hr className="border-b border-teal-200 my-36" />
                <div className="flex">
                  <div className="mr-36 mt-6">
                    <Frown size={24} className="text-purple-500 flex-shrink-0" />
                  </div>
                  <p className="text-lg">
                    最も不満が強かったのは「改善アクションの実行」に関する項目で、特に「最近の従業員サーベイ結果に基づいて好ましい変化が起きているのを見た」に対して 24% の人が明確に否定しました（全体平均より 10% 高い否定率）。
                  </p>
                </div>
              </div>
              <div className="bg-teal-500 rounded-b-lg h-10 shadow-lg"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         4. TENURE & RETENTION SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 左側：定着率 */}
          <div className="col-span-full desktop:col-span-6 mb-36 desktop:mb-0 pr-0 desktop:pr-24">
            <h2 className="heading-sm mb-24 font-medium font-heading text-balance">
              従業員はどのくらい定着するか？
            </h2>
            <div className="text-lg copy text-balance">
              <p>
                短期的な視点では、本ベンチマークにおける従業員の 24% が他社への転職を検討または実際に求職中です（グローバル全体平均より +5% 高い）。
              </p>
              <p>
                一方、長期的な視点では、11% の人が2年以内に退職すると考えています（グローバル全体平均より +1% 高い）。
              </p>
            </div>
          </div>

          {/* 右側：勤続年数分布 */}
          <div className="col-span-full desktop:col-span-6 pl-0 desktop:pl-24">
            <h3 className="mb-20 heading-xxs font-bold">
              勤続年数分布（Tenure distributions）の理解
            </h3>
            <div className="copy text-balance mb-36">
              <p>
                勤続年数は従業員がその会社で働いた期間を表します。当社のリサーチにより、新入社員は勤続年数の長い社員よりもポジティブな傾向があることが分かっています。肯定率は2年〜6年の間で最も低く低下し、その後長く残る層によってわずかに回復します。
              </p>
              <p>
                ベンチマークの勤続年数構成は組織全体のスコアに影響を与えます。
              </p>
            </div>

            <h4 className="text-center font-bold mb-20">勤続年数の構成比</h4>

            <ul>
              {tenureData.map((tenure, idx) => (
                <li key={idx} className="flex items-center">
                  <p className="pb-2 min-h-[2rem] w-2/5 text-sm border-r border-black-30 pr-16 text-right leading-tight flex items-center justify-end">
                    {tenure.label}
                  </p>
                  <div className="relative w-3/5 flex">
                    <div className="bg-teal-300 h-24" style={{ width: tenure.width }} />
                    <p className="bg-pale pl-12 w-[3.5rem] text-sm flex items-center">{tenure.percent}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         5. BOTTOM CTA SECTION (装飾アンダーライン除去 ＆ 間隔統一致)
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