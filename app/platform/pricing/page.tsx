'use client';

import { useState } from "react";
import { ChevronRight, Plus, Minus, ChevronDown, Check, Building } from "lucide-react";
import LogoMarquee from "@/components/LogoMarquee";

export default function PlansAndPricingPage() {
  // FAQアコーディオン状態管理
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // FAQデータ
  const faqs = [
    {
      question: "Culture Ampの料金体系はどのようになっていますか？",
      answer: "料金プランは対象となる従業員数、選択いただく製品モジュール（Engage / Perform）、およびサポート階層によって決定されます。すべてのCulture Amp製品は年単位でのご契約・お支払いとなります。",
    },
    {
      question: "Culture Ampで自社のデータは安全に保護されますか？",
      answer: "Culture Ampでは、データプライバシーとセキュリティへの取り組みを事業の中心に据えています。GDPR、CCPA、ISO 27001、SOC 2 Type II認証など、グローバルで認められた最先端のセキュリティ要件およびプライバシー規格に厳格に準拠しています。",
    },
    {
      question: "導入時にはどのようなオンボーディングサポートを受けられますか？",
      answer: "選択いただくサポート階層（エンタープライズ／成長企業等）によってオンボーディング内容は異なります。ただし、Culture Ampをご利用いただくすべてのお客様が、週5日/24時間のチャット＆メールサポート、各種オンデマンドトレーニングリソース、製品ガイドにアクセスいただけます。",
    },
    {
      question: "1-on-1対話、Shoutouts、Skills Coach機能はすべてのプランに含まれますか？",
      answer: "はい。これらの機能はマネージャーと従業員の体験を高め、日常的なフィードバックと成長のカルチャーを創出するための基本機能として、すべての標準プランに含まれています。",
    },
    {
      question: "なぜCulture Ampを選ぶべきなのですか？",
      answer: "他社と一線を画す最大の理由は、学術的・実践的に裏付けられた独自の「ピープルサイエンス」、10億件以上の意識調査データに基づく圧倒的なベンチマークインサイト、そしてお客様の成功に伴走する高品質なサポート体制です。詳細についてはデモにてご案内いたしますので、お気軽にお問い合わせください。",
    },
  ];

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200">
      
      {/* ==========================================================================
         1. HERO SECTION
         ========================================================================== */}
      <section className="pt-60 desktop:pt-84 mb-48 text-center">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="tablet:col-start-2 col-span-full tablet:col-span-10">
            <h1 className="font-heading font-medium heading-lg text-center text-balance mb-24 tablet:mb-36">
              統合型 CultureOS™ でハイパフォーマンスを実現
            </h1>
            <div className="copy text-lg text-balance text-center leading-relaxed text-[#524F4C] max-w-[900px] mx-auto">
              <p>
                エンゲージメント、パフォーマンス、人材育成をサイロ化された状態で行うのはもうやめましょう。Culture Ampはこれらを一元化し、数十年にわたるピープルサイエンスの知見と全モジュールに組み込まれたAI Coachにより、組織データを単なるレポートではなく、確かな事業成果へと結びつけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         2. LOGO MARQUEE SECTION (共通モジュール呼び出し)
         ========================================================================== */}
      <LogoMarquee />

      {/* ==========================================================================
         3. MAIN PRODUCT PLANS COMPARISON (Engage vs Perform 2大カード)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          {/* 2カラムカード枠 */}
          <div className="desktop:col-start-2 col-span-full desktop:col-span-10 grid grid-cols-1 tablet:grid-cols-2 gap-x-36 gap-y-24 mb-36">
            
            {/* Engage Card */}
            <div className="bg-white p-24 tablet:p-36 rounded-3xl border border-purple-400 flex flex-col justify-between shadow-0">
              <div>
                <h2 className="heading-sm font-medium font-heading text-purple-600 mb-16">Engage</h2>
                <p className="mb-36 text-balance text-14 tablet:text-16 text-[#524F4C] leading-relaxed">
                  単なるアンケートの枠を超えたサーベイ。組み込まれたAI Coachがテーマ、トレンド、潜在的な課題を抽出し、ダッシュボードの提示にとどまらない明確なアクションプランを提示します。
                </p>
                
                <ul className="flex flex-col gap-y-12 mb-36">
                  <li className="flex text-14 gap-16 items-center">
                    <img src="/assets/slices/main/assets/public/media/icons/ai-coach-56a1d8190e385ceea4a9.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                    <a href="/platform/ai-coach" className="text-link font-medium">AI Coach</a>
                  </li>
                  <li className="flex text-14 gap-16 items-center">
                    <span className="bg-purple-100 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-purple-600" />
                    </span>
                    <a href="/platform/engage/performance-culture-quadrant" className="text-link">Performance Culture Quadrant（パフォーマンス・カルチャー診断）</a>
                  </li>
                  {[
                    { title: "Retention Insights（離職防止インサイト）", link: "/platform/engage/retention-software-insights" },
                    { title: "DEI サーベイ（ダイバーシティ＆インクルージョン）", link: "/platform/engage/diversity-inclusion-survey" },
                    { title: "即戦力サーベイテンプレート（40種以上）", link: "/platform/engage/survey-tools-templates" },
                    { title: "AIフリーコメント要約", link: "/platform/engage/ai-comment-summaries" },
                    { title: "検証済みアクションプランガイド", link: "/platform/engage/proven-action-plans" },
                    { title: "パルスサーベイ", link: "/platform/engage/pulse-surveys" },
                    { title: "オンボーディング／オフボーディングサーベイ", link: "/platform/engage/offboarding-onboarding-survey" },
                    { title: "業界ベンチマーク（10億件以上のデータ）", link: "/platform/engage/benchmarking" },
                  ].map((item, i) => (
                    <li key={i} className="flex text-14 gap-16 items-center">
                      <span className="bg-purple-100 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-purple-600" />
                      </span>
                      <a href={item.link} className="text-link">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col desktop:flex-row items-start desktop:items-center gap-16 desktop:gap-20 mt-auto pt-24 border-t border-black/10">
                <button className="button button--primary">見積もりを依頼</button>
                <a href="/platform/engage" className="text-link text-14 font-semibold">Engageについて詳しく見る →</a>
              </div>
            </div>

            {/* Perform Card */}
            <div className="bg-white p-24 tablet:p-36 rounded-3xl border border-emerald-600 flex flex-col justify-between shadow-0">
              <div>
                <h2 className="heading-sm font-medium font-heading text-emerald-700 mb-16">Perform</h2>
                <p className="mb-36 text-balance text-14 tablet:text-16 text-[#524F4C] leading-relaxed">
                  従来の評価の枠を超えて。AI Coachが組み込まれたパフォーマンス管理、コーチング、人材育成ツールにより、マネージャーとチームを変革。質の高い評価作成や難しい対話の実施をサポートします。
                </p>
                
                <ul className="flex flex-col gap-y-12 mb-36">
                  <li className="flex text-14 gap-16 items-center">
                    <img src="/assets/slices/main/assets/public/media/icons/ai-coach-56a1d8190e385ceea4a9.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                    <a href="/platform/ai-coach" className="text-link font-medium">AI Coach</a>
                  </li>
                  {[
                    { title: "継続的なフィードバック", link: "/platform/perform/employee-feedback-software" },
                    { title: "人事評価＆キャリブレーション", link: "/platform/perform/performance-review-software" },
                    { title: "1-on-1対話機能", link: "/platform/perform/1-1-meeting-software" },
                    { title: "従業員育成プラン（Development Plans）", link: "/platform/perform/employee-development-plans" },
                    { title: "Skills Coach（スキルコーチ）", link: "/platform/perform/employee-coaching-software" },
                    { title: "Shoutouts（称賛機能）", link: "/platform/perform/employee-shout-outs" },
                    { title: "目標管理（OKRs）", link: "/platform/perform/goal-management-software" },
                    { title: "多面評価・効力感診断（360度フィードバック）", link: "/platform/perform/360-degree-feedback-tool" },
                    { title: "パフォーマンス・インサイト＆レポート", link: "/platform/perform/performance-insights-reporting" },
                  ].map((item, i) => (
                    <li key={i} className="flex text-14 gap-16 items-center">
                      <span className="bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-emerald-700" />
                      </span>
                      <a href={item.link} className="text-link">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col desktop:flex-row items-start desktop:items-center gap-16 desktop:gap-20 mt-auto pt-24 border-t border-black/10">
                <button className="button button--primary">見積もりを依頼</button>
                <a href="/platform/perform" className="text-link text-14 font-semibold">Performについて詳しく見る →</a>
              </div>
            </div>

          </div>

          {/* Enterprise pricing note */}
          <div className="col-span-full flex justify-center items-center gap-8 mb-36 text-[#524F4C]">
            <Building size={18} />
            <p className="text-14 font-medium">大企業・エンタープライズ向けの特別料金プランもご用意しています</p>
          </div>

          {/* People Science Consulting Add-on Card */}
          <div className="grid grid-cols-subgrid col-start-1 desktop:col-start-2 col-span-full desktop:col-span-10 bg-white rounded-2xl shadow-1 mb-36 tablet:mb-60 p-24 tablet:p-36 items-center">
            <div className="col-span-full tablet:col-span-4 desktop:col-span-3 mb-20 tablet:mb-0">
              <img 
                src="https://www.cultureamp.com/assets/slices/main/assets/public/media/pricing/people-science-consulting-981ca4e1d158cb810c76.webp" 
                alt="People Science Consulting" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-full tablet:col-span-8 desktop:col-span-7 tablet:pl-24 flex flex-col justify-between">
              <div>
                <h3 className="heading-xxs font-semibold mb-12">ピープルサイエンス・コンサルティング（オプション）</h3>
                <p className="text-14 desktop:text-16 text-[#524F4C] mb-16 leading-relaxed">
                  高度な人事専門知識、産業・組織心理学、アナリティクスにより、ピープル戦略を高め、組織変革を舵取りします。Culture AmpのデータとAIに支えられ、貴社ビジネスを熟知した専門家が直接ガイドします。
                </p>
                <div className="flex gap-x-8 items-center text-12 font-semibold mb-20">
                  <span className="text-[#8C8784]">追加可能対象:</span>
                  <span className="rounded-md bg-purple-100 text-purple-700 px-8 py-2 text-11">Engage</span>
                  <span className="rounded-md bg-emerald-100 text-emerald-800 px-8 py-2 text-11">Perform</span>
                </div>
              </div>
              <div>
                <button className="button button--secondary">見積もりを依頼</button>
              </div>
            </div>
          </div>

          {/* Every plan includes Section */}
          <div className="col-start-1 desktop:col-start-2 col-span-full desktop:col-span-10 mb-36 tablet:mb-60 bg-tan/40 p-24 tablet:p-36 rounded-3xl">
            <h3 className="font-heading font-medium text-22 desktop:text-24 mb-24">すべてのプランに含まれる標準機能：</h3>
            <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-y-16 gap-x-24">
              {[
                "AI Coach",
                "多言語対応プラットフォーム",
                "SSO（シングルサインオン）＆データ暗号化",
                "称賛機能「Shoutouts」",
                "HRIS（人事基幹システム）自動連携",
                "エンタープライズグレードのセキュリティ",
                "1-on-1テンプレートライブラリ",
                "Slack & MS Teams ツール連携",
                "GDPR & SOC 2 完全準拠",
              ].map((feature, idx) => (
                <li key={idx} className="flex text-14 gap-12 items-center">
                  <span className="bg-white rounded-full p-4 border border-black/10 shadow-0 flex-shrink-0">
                    <Check size={14} className="text-black" />
                  </span>
                  <span className="font-medium text-15">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise vs SMB Support Tiers */}
          <div className="col-span-full desktop:col-span-10 desktop:col-start-2 bg-white rounded-3xl border border-[#EFE7E0] grid grid-cols-1 tablet:grid-cols-2 overflow-hidden shadow-1">
            
            {/* Enterprise Tier */}
            <div className="p-24 tablet:p-36 border-b tablet:border-b-0 tablet:border-r border-[#EFE7E0] flex flex-col justify-between">
              <div>
                <h3 className="heading-xxs font-semibold mb-12">大企業・エンタープライズ組織</h3>
                <p className="font-bold text-14 text-purple-700 mb-20">従業員数 1,000名以上</p>
                <ul className="flex flex-col gap-y-12 mb-36 text-14 text-[#524F4C]">
                  {[
                    "マネージャー＆エグゼクティブ向け個別トレーニング",
                    "ピープルサイエンティストによる結果分析伴走セッション",
                    "1対1の個別の導入コーチング",
                    "グループ組織コーチング",
                    "サーベイ・施策全社配信前のレビュー体制",
                    "Culture Ampオンデマンド学習リソース",
                    "週5日/24時間のチャット＆メールサポート",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-12 items-center">
                      <span className="bg-tan rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex flex-col gap-12">
                <button className="button button--secondary w-full">担当者に相談する</button>
              </div>
            </div>

            {/* SMB Tier */}
            <div className="p-24 tablet:p-36 flex flex-col justify-between">
              <div>
                <h3 className="heading-xxs font-semibold mb-12">中小・成長企業</h3>
                <p className="font-bold text-14 text-emerald-800 mb-20">従業員数 200名未満</p>
                <ul className="flex flex-col gap-y-12 mb-24 text-14 text-[#524F4C]">
                  {[
                    "グループカスタマーサクセスサポート",
                    "Culture Ampオンデマンド学習リソース",
                    "週5日/24時間のチャット＆メールサポート",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-12 items-center">
                      <span className="bg-tan rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-bold text-14 text-emerald-800 mb-16 pt-16 border-t border-black/10">
                  200〜999名の組織にはさらに以下を提供：
                </p>
                <ul className="flex flex-col gap-y-12 mb-36 text-14 text-[#524F4C]">
                  {[
                    "専任カスタマーサクセスパートナーシップ",
                    "導入プロジェクトマネジメントサポート",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-12 items-center">
                      <span className="bg-tan rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button className="button button--secondary w-full">担当者に相談する</button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
         4. AI SPOTLIGHT FEATURE
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          
          <div className="desktop:col-start-2 col-span-full desktop:col-span-5 flex flex-col justify-center text-center desktop:text-left mb-36 desktop:mb-0">
            <div className="mb-16 flex items-center gap-8 justify-center desktop:justify-start text-14 font-semibold">
              <img src="/assets/slices/main/assets/public/media/icons/ai-coach-56a1d8190e385ceea4a9.svg" alt="" className="w-5 h-5" />
              <span>ピープルサイエンスに根ざしたAIテクノロジー</span>
            </div>
            <h2 className="font-heading font-medium heading-sm mb-20 tablet:mb-24 text-pretty">
              パーソナライズされたコーチングでアクションを即座に実行
            </h2>
            <div className="text-md copy mb-24 text-[#524F4C] leading-relaxed">
              <p>
                AI Coachは組織データを即座のインサイト、専門的ガイド、個別アクションプランへと変化させます。EngageとPerform双方に組み込まれ、数十年のピープルサイエンスに支えられているため、すべてのマネージャーが専任コーチをポケットに入れているような安心感を得られます。
              </p>
            </div>
            <div className="flex flex-col tablet:flex-row items-center justify-center desktop:justify-start gap-16">
              <a href="/platform/ai-coach" className="button button--secondary">AI Coachを見る</a>
              <a href="/platform/ai" className="text-link text-14 font-medium">Culture AmpのAIへの取り組み →</a>
            </div>
          </div>

          <div className="col-span-full desktop:col-span-5 desktop:col-start-7 flex justify-center">
            <div className="shadow-1 rounded-3xl overflow-hidden bg-white p-12 w-full max-w-[480px]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/1subi7qca1" 
                  title="AI Coach Overview"
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         5. TESTIMONIAL SECTION (Warby Parker)
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-span-full bg-purple-400 rounded-[32px] p-24 tablet:p-36 desktop:p-60 text-white">
            <div className="grid grid-cols-12 gap-x-24 gap-y-36 items-center">
              
              <div className="col-start-1 tablet:col-start-2 col-span-12 tablet:col-span-5 desktop:col-span-5">
                <img 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/NziwI_VZz9tuum1D1bjUlDns6sI=/500x500/cultureampcom/production/272/551/fa3/272551fa371e1b514bc000af/headshot-warby-parker-neil-blumenthal.jpg" 
                  alt="Neil Blumenthal" 
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>

              <div className="col-span-12 tablet:col-span-6 desktop:col-span-6 flex flex-col justify-center">
                <div className="text-24 tablet:text-32 font-heading font-medium mb-36 leading-relaxed">
                  「Culture Ampは改善点を発見し、業界最高峰の企業と比較ベンチマークを行い、ビジネスのあらゆる領域でデータ駆動を徹底するというコミットメントを果たす手助けをしてくれます」
                </div>
                <div className="mb-20">
                  <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/v654bbAVDyzYcFIuGfhj2hxMdtU=/0x100/cultureampcom/production/d49/ad4/f8c/d49ad4f8c23438636bde2111/logo-warby-parker-white.png" alt="Warby Parker Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-bold text-16">Neil Blumenthal</p>
                <p className="text-14 text-white/80">Warby Parker / CEO</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. ROI CALCULATOR FEATURE
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24 items-center">
          <div className="desktop:row-start-1 tablet:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-5 desktop:col-start-7 flex flex-col justify-center text-center desktop:text-left">
            <h2 className="font-heading font-medium heading-sm mb-24">
              Culture AmpのROI（投資対効果）を計算
            </h2>
            <div className="text-md copy mb-36 text-[#524F4C]">
              <p>
                組織カルチャーへの投資効果の証明は、価値の数値化から始まります。Culture Ampが貴社の業績にもたらすインパクトの推定額をご確認ください。
              </p>
            </div>
            <div>
              <a href="/science/roi-calculator" className="button button--secondary">
                ROI計算機を試す
              </a>
            </div>
          </div>

          <div className="row-start-1 col-span-full tablet:col-span-8 tablet:col-start-3 desktop:col-span-5 desktop:col-start-1 flex justify-center mb-36 desktop:mb-0">
            <div className="w-full max-w-[420px] aspect-square rounded-full border-8 border-purple-200 bg-white flex flex-col items-center justify-center p-24 text-center shadow-1">
              <span className="text-14 text-[#524F4C] font-semibold mb-4">推定創出価値</span>
              <span className="font-heading text-48 tablet:text-56 font-bold text-purple-700">¥2,740万</span>
              <span className="text-12 text-[#8C8784] mt-8">※平均的な従業員数・離職率削減に基づく自社試算</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. FAQ SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-2 col-span-full tablet:col-end-12 desktop:col-span-4 mb-36 desktop:mb-0">
            <div className="desktop:sticky top-132">
              <h2 className="font-heading font-medium heading-md mb-24">
                よくある質問
              </h2>
              <div className="text-lg copy mb-24 text-[#524F4C]">
                <p>他にご不明な点はありますか？お気軽にお問い合わせください。</p>
              </div>
              <button className="button button--secondary">営業担当に問い合わせる</button>
            </div>
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
         8. FINAL BOTTOM CTA SECTION
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