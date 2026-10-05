'use client';

import Link from "next/link";
import { Building2, ChevronRight } from "lucide-react";

export default function BenchmarkPage() {
  // 日本国内の4つのベンチマークデータ
  const japanBenchmarks = [
    {
      title: "日本総合ベンチマーク (Japan)",
      date: "2026年7月版",
      companies: "約150社",
      responses: "約17.5万件の回答データ",
      link: "/tools/benchmark/japan",
      description: "日本国内の多様な業界・規模の企業データを網羅した標準ベンチマーク",
    },
    {
      title: "日本 大企業ベンチマーク (Japan 1000+)",
      date: "2026年7月版",
      companies: "約90社",
      responses: "約14万件の回答データ",
      link: "/tools/benchmark/japan-1000-plus",
      description: "従業員数1,000名以上の日本の大企業に特化したベンチマーク",
    },
    {
      title: "日本 中堅・大手企業ベンチマーク (Japan 1000-5000)",
      date: "2026年7月版",
      companies: "約65社",
      responses: "約8.5万件の回答データ",
      link: "/tools/benchmark/japan-1000-5000",
      description: "従業員数1,000名〜5,000名規模の組織に焦点を当てたベンチマーク",
    },
    {
      title: "日本 製造業ベンチマーク (Manufacturing Japan)",
      date: "2026年7月版",
      companies: "約35社",
      responses: "約7.5万件の回答データ",
      link: "/tools/benchmark/manufacturing-japan",
      description: "日本の製造業・モノづくり企業における現場およびオフィス層の比較データ",
    },
  ];

  // 高業績企業のスコア比較データ（平均との差分）
  const highPerformerFactors = [
    { name: "事業業績・パフォーマンス", diff: "+12", color: "bg-teal-400", width: "w-full" },
    { name: "リーダーシップ", diff: "+12", color: "bg-teal-400", width: "w-full" },
    { name: "エンゲージメント", diff: "+11", color: "bg-teal-400", width: "w-11/12" },
    { name: "品質・サービスへの注力", diff: "+10", color: "bg-teal-400", width: "w-10/12" },
    { name: "イノベーション", diff: "+10", color: "bg-teal-400", width: "w-10/12" },
    { name: "組織の一体感・つながり", diff: "+9", color: "bg-purple-300", width: "w-9/12" },
    { name: "コラボレーション＆対話", diff: "+8", color: "bg-purple-300", width: "w-8/12" },
    { name: "フィードバック＆承認（称賛）", diff: "+8", color: "bg-purple-300", width: "w-8/12" },
    { name: "人材育成＆能力開発", diff: "+7", color: "bg-purple-300", width: "w-7/12" },
    { name: "改善アクションの実行", diff: "+6", color: "bg-purple-300", width: "w-6/12" },
    { name: "意思決定の迅速さ", diff: "+6", color: "bg-purple-300", width: "w-6/12" },
  ];

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 pt-60 desktop:pt-84 desktop:mb-108">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          
          {/* 左側コピーエリア */}
          <div className="z-40 flex flex-col gap-24 desktop:gap-36 justify-center row-start-1 col-span-full tablet:col-span-10 tablet:col-start-2 desktop:col-span-5 desktop:col-start-1 items-center desktop:items-start text-center desktop:text-left mb-60 desktop:mb-0">
            <h1 className="eyebrow">ベンチマークインサイト</h1>
            <h2 className="font-heading font-medium heading-lg text-center text-balance desktop:text-left">
              高業績な組織のカルチャーをデータで可視化
            </h2>
            <div className="copy text-lg text-balance text-center desktop:text-left text-[#524F4C] leading-relaxed">
              <p>
                Culture Ampは世界中の数百万件に及ぶ回答データを集計し、組織カルチャーと事業パフォーマンスの相関を解明しています。同業他社や市場平均と比較できる正確なベンチマークを提供し、自社の立ち位置と改善ポイントを明確にします。
              </p>
            </div>
          </div>

          {/* 右側ヒーロービジュアル（修正: 正しい画像URL参照） */}
          <div className="col-span-full tablet:col-span-10 desktop:col-span-6 col-start-1 tablet:col-start-2 desktop:col-start-7 flex flex-col justify-center">
            <img 
              src="https://www.cultureamp.com/assets/slices/main/assets/public/media/benchmarks/insights-index-blue@2x-846e97875da29343eb48.webp" 
              alt="Benchmark Insights" 
              className="w-full h-auto rounded-3xl object-contain shadow-1"
            />
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. STATS & DATA LAKE SECTION (Hero直下に追加された既存サイト同等セクション)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full desktop:col-span-6 mb-24 desktop:mb-0">
            <p className="text-lg leading-relaxed text-[#524F4C]">
              インサイトは、何千もの企業から集められた何百万もの従業員サーベイデータから、統計的に妥当な集計（業界、地域、個別属性）によって構成されており、世界最大級の従業員サーベイデータレイクを形成しています。
            </p>
          </div>
          <div className="col-span-full desktop:col-span-6 flex desktop:justify-self-end desktop:align-self-end items-end">
            <div className="flex items-center gap-x-10 text-14 text-[#524F4C]">
              <p className="text-sm">Data provided by <span className="font-semibold text-black">Culture Amp</span></p>
            </div>
          </div>
          <div className="col-span-full mt-36">
            <ul className="flex flex-col desktop:flex-row w-full justify-between gap-24 border-t border-black/10 pt-36">
              <li>
                <p className="heading-lg font-bold text-teal-500">16.1億件</p>
                <p className="text-md tablet:text-lg font-bold text-[#524F4C]">回答された設問数</p>
              </li>
              <li className="hidden desktop:block">
                <span className="text-orange-200 leading-tight heading-lg font-bold">/</span>
              </li>
              <li>
                <p className="heading-lg font-bold text-purple-500">7,415万件</p>
                <p className="text-md tablet:text-lg font-bold text-[#524F4C]">回答されたサーベイ数</p>
              </li>
              <li className="hidden desktop:block">
                <span className="text-orange-200 leading-tight heading-lg font-bold">/</span>
              </li>
              <li>
                <p className="heading-lg font-bold text-teal-500">8,900社以上</p>
                <p className="text-md tablet:text-lg font-bold text-[#524F4C]">調査企業数</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. JAPAN BENCHMARKS LIST (国内4つのデータカード)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container">
          <h2 className="font-heading font-medium heading-sm mb-24 tablet:mb-36">
            日本国内ベンチマークデータ一覧
          </h2>

          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-24">
            {japanBenchmarks.map((bm, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#EFE7E0] rounded-3xl p-24 tablet:p-36 shadow-0 hover:shadow-1 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-12 mb-16">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <span className="text-12 font-bold text-[#8C8784] uppercase tracking-wider">{bm.date}</span>
                      <h3 className="font-heading font-semibold text-18 tablet:text-20 group-hover:text-purple-600 transition-colors">
                        {bm.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-14 text-[#524F4C] leading-relaxed mb-24">
                    {bm.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-12 text-[#8C8784] pt-16 border-t border-black/10 mb-20">
                    <span>対象企業数: <strong className="text-black font-semibold">{bm.companies}</strong></span>
                    <span>回答データ数: <strong className="text-black font-semibold">{bm.responses}</strong></span>
                  </div>

                  <Link 
                    href={bm.link}
                    className="button button--secondary w-full justify-between group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    <span>ベンチマーク詳細を見る</span>
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. HIGH PERFORMERS INSIGHTS SECTION (修正: カード囲み・背景色を削除)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          
          <div className="col-span-full desktop:col-span-5 mb-36 desktop:mb-0">
            <p className="eyebrow mb-12">グローバル分析インサイト</p>
            <h2 className="mb-16 desktop:mb-24 heading-md font-medium font-heading">
              高業績組織に共通するスコアの特徴
            </h2>
            <div className="text-md copy text-[#524F4C] leading-relaxed space-y-16">
              <p>
                高い事業成長と強い従業員エンゲージメントを両立している高業績組織（Engaging Growth）は、一般的な平均企業と比較して特定のサーベイ要素で顕著に高いスコアを示しています。
              </p>
              <p>
                業界を問わず、高業績企業は特に「事業パフォーマンス」「リーダーシップ」「エンゲージメント」「品質へのこだわり」「イノベーション」の項目において、全体平均を10ポイント以上上回っています。
              </p>
            </div>
          </div>

          {/* 右側：フラットなグラフ表示（カード囲み・背景色なし） */}
          <div className="col-span-full desktop:col-span-7">
            <ul className="space-y-12">
              {highPerformerFactors.map((factor, idx) => (
                <li key={idx} className="flex items-center text-13 tablet:text-14">
                  <span className="w-2/5 pr-16 text-right font-medium truncate text-[#524F4C]">{factor.name}</span>
                  <div className="w-3/5 flex items-center gap-12">
                    <div className="grow bg-black/5 h-6 rounded-full overflow-hidden">
                      <div className={`h-full ${factor.color} ${factor.width}`} />
                    </div>
                    <span className="font-bold text-13 w-8">{factor.diff}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-12 text-center text-[#8C8784] mt-24">
              ※ Culture Amp「Engaging Growth」ベンチマークとグローバル平均との主要要素比較
            </p>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         5. UNDERSTANDING VARIATION SECTION (修正: 背景色を #F6EFEA に変更)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full desktop:col-span-10 desktop:col-start-2 text-center text-balance bg-[#F6EFEA] rounded-3xl p-24 tablet:p-48">
            <h2 className="heading-sm font-medium font-heading mb-16">
              適切なベンチマークで確かな比較・分析を
            </h2>
            <div className="text-md text-[#524F4C] leading-relaxed max-w-[800px] mx-auto space-y-16">
              <p>
                Culture Ampのサーベイ設問は、従業員体験の特定の側面を表す「ファクター（要素）」ごとにまとめられています。企業規模や業界構造によって自社の「当たり前」は大きく異なるため、一般的な全体平均だけでなく自社の規模や業界に近いベンチマークと比較することが、信頼性の高い改善施策につながります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. FINAL BOTTOM CTA SECTION
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