'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Copy, Mail, Check } from "lucide-react";

export default function RoiCalculatorPage() {
  // --------------------------------==========================================
  // 1. シミュレーション用 State (単位: 万円 / 人 / %)
  // --------------------------------==========================================
  const [employees, setEmployees] = useState<number>(1000);         // 従業員数（人）
  const [turnoverRate, setTurnoverRate] = useState<number>(15);     // 離職率（%）
  const [avgSalary, setAvgSalary] = useState<number>(600);         // 平均年収（万円）
  const [managers, setManagers] = useState<number>(80);            // マネージャー数（人）
  const [managerSalary, setManagerSalary] = useState<number>(850);   // マネージャー平均年収（万円）
  const [hrEmployees, setHrEmployees] = useState<number>(10);       // 人事担当者数（人）
  const [hrSalary, setHrSalary] = useState<number>(650);          // 人事平均年収（万円）
  const [netProfit, setNetProfit] = useState<number>(50000);       // 当期純利益（万円 = 5億円）

  // FAQアコーディオン開閉State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState<boolean>(false);

  // --------------------------------==========================================
  // 2. 試算アルゴリズム (Forrester TEI 研究モデル準拠)
  // --------------------------------==========================================
  const savedEmployeesCount = Math.round(employees * (turnoverRate / 100) * 0.05 * 10) / 10;
  const attritionSavingsMan = Math.round(savedEmployeesCount * (avgSalary * 0.20));

  const managerProductivityMan = Math.round(managers * managerSalary * 0.20 * 0.50);
  const hrProductivityMan = Math.round(hrEmployees * hrSalary * 0.20 * 0.50);
  const profitImprovementMan = Math.round(netProfit * 0.005);

  const totalBenefitMan = attritionSavingsMan + managerProductivityMan + hrProductivityMan + profitImprovementMan;

  const totalForChart = totalBenefitMan || 1;
  const p1 = (attritionSavingsMan / totalForChart) * 100;
  const p2 = (managerProductivityMan / totalForChart) * 100;
  const p3 = (hrProductivityMan / totalForChart) * 100;

  const deg1 = (p1 / 100) * 360;
  const deg2 = deg1 + (p2 / 100) * 360;
  const deg3 = deg2 + (p3 / 100) * 360;

  const formatYen = (manYen: number) => {
    if (manYen >= 10000) {
      const oku = (manYen / 10000).toFixed(2);
      return `¥${oku} 億円`;
    }
    return `¥${manYen.toLocaleString()} 万円`;
  };

  const getPercent = (val: number, min: number, max: number) => {
    return Math.min(Math.max(((val - min) / (max - min)) * 100, 0), 100);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-pale text-black font-sans selection:bg-purple-200 min-h-screen">
      
      {/* ==========================================================================
         1. HERO SECTION (アンダーバー完全撤去)
         ========================================================================== */}
      <section className="container grid gap-x-24 grid-cols-6 desktop:grid-cols-12 mt-48 desktop:mt-60 mb-36 desktop:mb-60">
        
        <div className="col-start-1 col-end-full">
          <h1 className="text-center uppercase tracking-widest text-10 desktop:text-14 font-semibold mb-24 desktop:mb-60 text-muted">
            EMPLOYEE EXPERIENCE ROI CALCULATOR
          </h1>
        </div>

        <div className="col-start-1 col-end-full desktop:col-end-7 row-start-2 relative z-10">
          <h2 className="font-heading font-medium desktop:leading-tight text-36 tablet:text-60 desktop:text-[80px] text-center desktop:text-left mb-12 tablet:mb-24 desktop:mb-0 whitespace-nowrap">
            優れた カルチャー
          </h2>
        </div>

        <div className="col-start-1 desktop:col-start-6 col-end-full row-start-3 relative z-10 desktop:flex justify-center items-center">
          <h2 className="font-heading font-medium desktop:leading-tight text-36 tablet:text-60 desktop:text-[80px] text-center desktop:text-right mb-24 desktop:mb-0 whitespace-nowrap">
            確かな 事業成果
          </h2>
        </div>

        <div className="col-start-1 desktop:col-start-2 col-end-full desktop:col-end-12 desktop:row-start-2 desktop:row-end-4">
          <picture>
            <source media="(max-width: 1199px)" srcSet="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/lp-ropi-hero-graphic-responsive-6e64b0963e68e92cfcca.webp" />
            <source media="(min-width: 1200px)" srcSet="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/lp-ropi-hero-graphic-desktop-7fa3109ecfc86d3d935f.webp" />
            <img 
              alt="ROI Calculator Hero Graphic" 
              className="w-full desktop:px-24" 
              height="615" 
              src="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/lp-ropi-hero-graphic-responsive-6e64b0963e68e92cfcca.webp" 
              width="932" 
            />
          </picture>
        </div>

        <div className="col-start-1 desktop:col-start-2 col-end-full desktop:col-end-12 text-center">
          <h3 className="text-24 desktop:text-36 mb-[18px] desktop:mb-24 font-semibold mt-36 tablet:mt-60 desktop:mt-84">
            カルチャーへの投資効果を可視化。ROIシミュレーターをお試しください。
          </h3>
          <p className="text-16 tablet:text-20 leading-relaxed text-muted max-w-[880px] mx-auto">
            組織改善のビジネスケース構築は、その価値を定量化することから始まります。米Forrester Consulting社によるTotal Economic Impact™（TEI）研究報告書に基づき、Culture Ampの導入によって貴社が年間で創出できる推定リターンを算出します。
          </p>
        </div>

      </section>

      {/* ==========================================================================
         2. CALCULATOR COMPONENT
         ========================================================================== */}
      <div className="container grid grid-cols-12 mb-84 desktop:mb-132 scroll-mt-84" id="calculator">
        <div className="col-start-1 desktop:col-start-2 col-end-full desktop:col-end-12 border border-black rounded-[20px] bg-white shadow-2 overflow-hidden">
          <section className="grid grid-cols-1 desktop:grid-cols-10">
            
            {/* 左側：スライダー入力エリア */}
            <div className="desktop:flex flex-col justify-between pb-24 px-24 pt-24 tablet:px-36 tablet:pt-36 bg-white border-b desktop:border-b-0 desktop:border-r border-black/10 col-start-1 col-end-full desktop:col-end-7">
              
              {/* ① 離職削減 */}
              <div className="mb-32">
                <h3 className="font-semibold text-14 mb-20 text-black">1. 離職削減効果の試算</h3>
                
                <div className="mb-28">
                  <label htmlFor="number-of-employees" className="text-14 flex items-center mb-20 font-medium">従業員数</label>
                  <div className="relative mb-8">
                    <input
                      type="range"
                      id="number-of-employees"
                      min={50}
                      max={15000}
                      step={50}
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                    <div className="absolute bottom-full left-[9px] right-[9px]">
                      <span 
                        className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                        style={{ left: `${getPercent(employees, 50, 15000)}%` }}
                      >
                        {employees.toLocaleString()}人
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                    <span>50人</span>
                    <span>15,000人</span>
                  </div>
                </div>

                <div className="flex flex-col tablet:flex-row gap-x-24">
                  <div className="flex-1 mb-28">
                    <label htmlFor="turnover-rate" className="text-14 flex items-center mb-20 font-medium">現在の年間離職率</label>
                    <div className="relative mb-8">
                      <input
                        type="range"
                        id="turnover-rate"
                        min={1}
                        max={50}
                        step={1}
                        value={turnoverRate}
                        onChange={(e) => setTurnoverRate(Number(e.target.value))}
                        className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="absolute bottom-full left-[9px] right-[9px]">
                        <span 
                          className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                          style={{ left: `${getPercent(turnoverRate, 1, 50)}%` }}
                        >
                          {turnoverRate}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                      <span>1%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  <div className="flex-1 mb-28">
                    <label htmlFor="average-salary" className="text-14 flex items-center mb-20 font-medium">従業員の平均年収</label>
                    <div className="relative mb-8">
                      <input
                        type="range"
                        id="average-salary"
                        min={300}
                        max={2000}
                        step={25}
                        value={avgSalary}
                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                        className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="absolute bottom-full left-[9px] right-[9px]">
                        <span 
                          className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                          style={{ left: `${getPercent(avgSalary, 300, 2000)}%` }}
                        >
                          {avgSalary}万円
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                      <span>300万円</span>
                      <span>2,000万円</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-b border-x-0 border-t-0 border-dashed border-black/30 mb-32" />

              {/* ② 生産性向上 */}
              <div className="mb-32">
                <h3 className="font-semibold text-14 mb-20 text-black">2. マネージャー・人事チームの生産性向上試算</h3>
                
                <div className="flex flex-col tablet:flex-row gap-x-24">
                  <div className="flex-1 mb-28">
                    <label htmlFor="number-of-managers" className="text-14 flex items-center mb-20 font-medium">マネージャー人数</label>
                    <div className="relative mb-8">
                      <input
                        type="range"
                        id="number-of-managers"
                        min={5}
                        max={1000}
                        step={5}
                        value={managers}
                        onChange={(e) => setManagers(Number(e.target.value))}
                        className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="absolute bottom-full left-[9px] right-[9px]">
                        <span 
                          className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                          style={{ left: `${getPercent(managers, 5, 1000)}%` }}
                        >
                          {managers}人
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                      <span>5人</span>
                      <span>1,000人</span>
                    </div>
                  </div>

                  <div className="flex-1 mb-28">
                    <label htmlFor="manager-salary" className="text-14 flex items-center mb-20 font-medium">マネージャー平均年収</label>
                    <div className="relative mb-8">
                      <input
                        type="range"
                        id="manager-salary"
                        min={400}
                        max={2500}
                        step={25}
                        value={managerSalary}
                        onChange={(e) => setManagerSalary(Number(e.target.value))}
                        className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="absolute bottom-full left-[9px] right-[9px]">
                        <span 
                          className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                          style={{ left: `${getPercent(managerSalary, 400, 2500)}%` }}
                        >
                          {managerSalary}万円
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                      <span>400万円</span>
                      <span>2,500万円</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col tablet:flex-row gap-x-24">
                  <div className="flex-1 mb-28">
                    <label htmlFor="number-of-hr" className="text-14 flex items-center mb-20 font-medium">人事担当者数</label>
                    <div className="relative mb-8">
                      <input
                        type="range"
                        id="number-of-hr"
                        min={1}
                        max={200}
                        step={1}
                        value={hrEmployees}
                        onChange={(e) => setHrEmployees(Number(e.target.value))}
                        className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="absolute bottom-full left-[9px] right-[9px]">
                        <span 
                          className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                          style={{ left: `${getPercent(hrEmployees, 1, 200)}%` }}
                        >
                          {hrEmployees}人
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                      <span>1人</span>
                      <span>200人</span>
                    </div>
                  </div>

                  <div className="flex-1 mb-28">
                    <label htmlFor="hr-salary" className="text-14 flex items-center mb-20 font-medium">人事担当者平均年収</label>
                    <div className="relative mb-8">
                      <input
                        type="range"
                        id="hr-salary"
                        min={300}
                        max={2000}
                        step={25}
                        value={hrSalary}
                        onChange={(e) => setHrSalary(Number(e.target.value))}
                        className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="absolute bottom-full left-[9px] right-[9px]">
                        <span 
                          className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                          style={{ left: `${getPercent(hrSalary, 300, 2000)}%` }}
                        >
                          {hrSalary}万円
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                      <span>300万円</span>
                      <span>2,000万円</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-b border-x-0 border-t-0 border-dashed border-black/30 mb-32" />

              {/* ③ 事業収益性 */}
              <div>
                <h3 className="font-semibold text-14 mb-20 text-black">3. 事業収益性向上の試算</h3>
                <div className="mb-16">
                  <label htmlFor="net-profit" className="text-14 flex items-center mb-20 font-medium">
                    現在の年間純利益（売上高 × 利益率）
                  </label>
                  <div className="relative mb-8">
                    <input
                      type="range"
                      id="net-profit"
                      min={1000}
                      max={1000000}
                      step={1000}
                      value={netProfit}
                      onChange={(e) => setNetProfit(Number(e.target.value))}
                      className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                    <div className="absolute bottom-full left-[9px] right-[9px]">
                      <span 
                        className="ropi-calculator__range-value pointer-events-none -translate-x-1/2 z-10 bg-black text-white text-12 text-center font-bold uppercase absolute px-12 py-4 -top-[20px] rounded-md flex justify-center items-center after:border-x-4 after:border-t-4 after:border-t-black after:border-l-transparent after:border-r-transparent after:-bottom-4 after:h-0 after:left-1/2 after:absolute after:w-0 after:-ml-4 whitespace-nowrap"
                        style={{ left: `${getPercent(netProfit, 1000, 1000000)}%` }}
                      >
                        {netProfit >= 10000 ? `${(netProfit / 10000).toFixed(1)}億円` : `${netProfit.toLocaleString()}万円`}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-12 font-semibold text-muted pt-2">
                    <span>1,000万円</span>
                    <span>100億円</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 右側：グラフ＆結果出力エリア */}
            <div className="col-start-1 desktop:col-start-7 col-end-full desktop:col-end-11 p-24 tablet:p-36 flex flex-col justify-between bg-pale/30">
              
              <div>
                <span className="text-10 font-bold uppercase tracking-widest text-muted block mb-12">
                  ESTIMATED 1-YEAR BENEFIT
                </span>

                {/* 動的ドーナツ円グラフ */}
                <div className="flex items-center justify-center flex-col relative pt-[85%] self-center mb-24">
                  <div className="absolute inset-0 p-12">
                    <div 
                      className="h-full rounded-full flex justify-center items-center border border-black/20 relative shadow-1"
                      style={{
                        background: `conic-gradient(#7C316A 0deg ${deg1}deg, #C888E2 ${deg1}deg ${deg2}deg, #E4C8F2 ${deg2}deg ${deg3}deg, #FFD1B9 ${deg3}deg 360deg)`
                      }}
                    >
                      <div className="bg-white w-[75%] h-[75%] rounded-full flex flex-col justify-center items-center p-16 border border-black/10 shadow-inner text-center">
                        <span className="text-11 text-muted font-medium mb-2">年間創出価値総額</span>
                        <span className="font-heading font-bold text-20 tablet:text-28 text-teal-500 leading-tight">
                          {formatYen(totalBenefitMan)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4つの内訳リスト */}
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 mb-24">
                  <div>
                    <p className="text-12 font-semibold text-muted flex items-center gap-6">
                      <span className="h-10 w-10 rounded-full inline-block" style={{ backgroundColor: "#7C316A" }} />
                      離職削減効果
                    </p>
                    <p className="font-heading font-medium text-20 tablet:text-24 text-black">
                      {formatYen(attritionSavingsMan)}
                    </p>
                    <p className="text-10 text-muted uppercase tracking-widest mt-2">
                      約 {savedEmployeesCount} 名の離職回避
                    </p>
                  </div>

                  <div>
                    <p className="text-12 font-semibold text-muted flex items-center gap-6">
                      <span className="h-10 w-10 rounded-full inline-block" style={{ backgroundColor: "#C888E2" }} />
                      マネージャー生産性
                    </p>
                    <p className="font-heading font-medium text-20 tablet:text-24 text-black">
                      {formatYen(managerProductivityMan)}
                    </p>
                  </div>

                  <div>
                    <p className="text-12 font-semibold text-muted flex items-center gap-6">
                      <span className="h-10 w-10 rounded-full inline-block" style={{ backgroundColor: "#E4C8F2" }} />
                      人事チーム生産性
                    </p>
                    <p className="font-heading font-medium text-20 tablet:text-24 text-black">
                      {formatYen(hrProductivityMan)}
                    </p>
                  </div>

                  <div>
                    <p className="text-12 font-semibold text-muted flex items-center gap-6">
                      <span className="h-10 w-10 rounded-full inline-block" style={{ backgroundColor: "#FFD1B9" }} />
                      事業利益率向上
                    </p>
                    <p className="font-heading font-medium text-20 tablet:text-24 text-black">
                      {formatYen(profitImprovementMan)}
                    </p>
                  </div>
                </div>

                {/* 共有機能ボタン */}
                <div className="flex flex-col desktop:flex-row gap-12 pt-16 border-t border-black/10">
                  <button
                    onClick={handleCopyLink}
                    className="group flex items-center text-13 font-medium underline underline-offset-4 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={16} className="mr-6 text-teal-500" /> : <Copy size={16} className="mr-6" />}
                    <span>{copied ? "コピー完了" : "結果リンクをコピー"}</span>
                  </button>

                  <a
                    href={`mailto:?subject=${encodeURIComponent("Culture Amp ROIシミュレーション結果")}&body=${encodeURIComponent(
                      `【試算結果】\n年間推定創出価値: ${formatYen(totalBenefitMan)}\n- 離職削減効果: ${formatYen(attritionSavingsMan)}\n- マネージャー生産性向上: ${formatYen(managerProductivityMan)}\n- 人事チーム生産性向上: ${formatYen(hrProductivityMan)}\n- 事業利益率向上: ${formatYen(profitImprovementMan)}`
                    )}`}
                    className="group flex items-center text-13 font-medium underline underline-offset-4 hover:text-purple-400 transition-colors"
                  >
                    <Mail size={16} className="mr-6" />
                    <span>結果をメールで送る</span>
                  </a>
                </div>
              </div>

              <p className="text-11 text-muted italic mt-20">
                ※ 導入後1年間で期待できる推定創出価値です。詳細な試算と導入費用のお見積もりはCulture Ampチームまでお問い合わせください。
              </p>

            </div>

          </section>
        </div>

        {/* 算出根拠テキスト */}
        <div className="col-start-1 desktop:col-start-2 col-end-full desktop:col-end-11 mt-48">
          <h4 className="font-heading font-medium heading-sm mb-12">
            社内でのビジネスケース（投資稟議）の構築に向けて
          </h4>
          <p className="text-18 text-muted mb-24 leading-relaxed">
            本シミュレーターの試算結果は、<strong className="font-bold text-black">Forrester ConsultingによるTotal Economic Impact™（TEI）研究成果</strong> に基づいています。導入初年度に期待できる価値の根拠は以下の通りです：
          </p>

          <div className="flex flex-wrap gap-18 mb-60">
            <a href="https://www.cultureamp.com/resources/report/economic-impact-of-culture-amp" className="button button--primary" target="_blank" rel="noopener noreferrer">
              Forresterレポート（PDF）をダウンロード
            </a>
            <a href="#faq" className="button button--secondary">
              算出方法のFAQを見る ↓
            </a>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-48 gap-y-24">
            <div>
              <h3 className="font-semibold text-16 text-purple-400 mb-10">離職コストの削減効果:</h3>
              <p className="text-14 text-muted leading-relaxed">
                サーベイと分析に基づき離職率を約5%削減。離職補充にかかる諸費用（平均年収の20%と試算）を直接抑制します。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-16 text-purple-400 mb-10">マネージャーの生産性向上:</h3>
              <p className="text-14 text-muted leading-relaxed">
                1-on-1や評価・フィードバックプロセスの標準化により生産性を20%改善し、より戦略的な組織運営に時間（50%）を再投資します。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-16 text-purple-400 mb-10">人事チームの業務自動化:</h3>
              <p className="text-14 text-muted leading-relaxed">
                サーベイ作成・配信・集計・AIテキスト要約の自動化により人事の作業時間を20%削減。高度な人事戦略立案に注力できます。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-16 text-purple-400 mb-10">事業収益性の向上:</h3>
              <p className="text-14 text-muted leading-relaxed">
                エンゲージメント向上に伴うサービス品質や顧客体験の改善を通じて、組織の純利益率を平均0.5%向上させます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
         3. FORRESTER TEI BANNER & PICTOGRAMS (既存ソース通りのクラス名 bg-purple-400 等を直接指定)
         ========================================================================== */}
      <section className="container grid grid-cols-6 desktop:grid-cols-12 gap-x-24 mb-84 desktop:mb-132">
        <div className="col-start-1 desktop:col-start-3 col-end-full desktop:col-end-11">
          <h2 className="font-heading font-medium heading-lg text-center mb-24 tablet:mb-36 desktop:mb-48">
            従業員エンゲージメントの改善（最大20%）がもたらす 定量成果
          </h2>
        </div>

        <div className="col-start-1 desktop:col-start-2 col-end-full desktop:col-end-12">
          
          {/* ソース通りの背景色クラス bg-purple-400, bg-orange-400, bg-teal-400, bg-green-400 を適用 */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-9 gap-12 tablet:gap-24 mb-18">
            {/* 311% ROI */}
            <div className="desktop:col-span-3 text-white text-center border border-black bg-purple-400 p-24 flex flex-col justify-center rounded-xl">
              <p className="font-heading font-medium text-[84px] tablet:text-[100px] leading-tight text-white">311%</p>
              <p className="text-20 font-medium text-white">3年間の推定ROI</p>
            </div>

            {/* 1.5% 利益率向上 */}
            <div className="desktop:col-span-2 flex flex-col justify-center text-center border border-black bg-orange-400 p-24 rounded-xl items-center">
              <img 
                alt="Profit Pictogram" 
                className="max-w-[80px] tablet:max-w-[100px] mb-12" 
                src="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/pictogram-profit-9b18e304f9ef72fe7d46.webp" 
              />
              <p className="font-heading font-medium text-48 mb-4 text-black">1.5%</p>
              <p className="text-14 desktop:text-16 text-black">純利益率の向上</p>
            </div>

            {/* 20% 生産性向上 */}
            <div className="desktop:col-span-2 flex flex-col justify-center text-center border border-black bg-teal-400 p-24 rounded-xl items-center">
              <img 
                alt="Productivity Pictogram" 
                className="max-w-[80px] tablet:max-w-[100px] mb-12" 
                src="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/pictogram-productivity-2a8c0c222f1d83ebd0d1.webp" 
              />
              <p className="font-heading font-medium text-48 mb-4 text-black">20%</p>
              <p className="text-14 desktop:text-16 text-black">マネージャー・人事の生産性向上</p>
            </div>

            {/* 5% 離職削減 */}
            <div className="desktop:col-span-2 flex flex-col justify-center text-center border border-black bg-green-400 p-24 rounded-xl items-center">
              <img 
                alt="Attrition Pictogram" 
                className="max-w-[80px] tablet:max-w-[100px] mb-12" 
                src="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/pictogram-attrition-f582bba92c24d1b8a20c.webp" 
              />
              <p className="font-heading font-medium text-48 mb-4 text-black">5%</p>
              <p className="text-14 desktop:text-16 text-black">離職率および関連コストの削減</p>
            </div>
          </div>

          <p className="text-center text-12 text-muted italic mb-24 desktop:mb-48">
            ※ Forrester社がモデル企業（複合組織）を対象に3年間にわたり検証した調査成果
          </p>

          {/* レポートダウンロード案内 */}
          <div className="flex flex-col tablet:flex-row gap-24 desktop:gap-36 desktop:items-center p-24 tablet:p-36 border border-black rounded-2xl bg-white">
            <div className="flex-none">
              <img 
                alt="Forrester report cover" 
                className="w-full max-w-[120px] tablet:max-w-[160px] mx-auto" 
                src="https://www.cultureamp.com/assets/slices/main/assets/public/media/calculator/forrester-report-71d91a2b53254369ec12.webp" 
              />
            </div>
            <div className="flex-1 flex flex-col desktop:flex-row gap-24 items-start desktop:items-center justify-between">
              <div>
                <h3 className="text-20 tablet:text-24 mb-12 font-heading font-medium">
                  Forrester研究レポート全文を入手
                </h3>
                <p className="text-14 text-muted mb-12 leading-relaxed">
                  Culture Ampがどのように組織カルチャーを事業成長のレバーに変えるかについての詳細な報告書『The Total Economic Impact™ of Culture Amp』をダウンロードいただけます。
                </p>
                <p className="text-11 text-muted italic">※ 本調査はForrester ConsultingがCulture Ampの委託を受けて2024年に実施した検証報告書です。</p>
              </div>
              <div className="flex-none">
                <a href="https://www.cultureamp.com/resources/report/economic-impact-of-culture-amp" className="button button--primary" target="_blank" rel="noopener noreferrer">
                  レポートをダウンロード
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         4. FAQ ACCORDION SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156 scroll-mt-84" id="faq">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          
          <div className="col-start-1 tablet:col-start-2 desktop:col-start-2 col-span-full desktop:col-span-4 mb-36 desktop:mb-0">
            <div className="desktop:sticky top-32">
              <h2 className="font-heading font-medium heading-md mb-24">
                よくある ご質問
              </h2>
              <div className="text-lg text-muted">
                <p>試算の算出ロジックと根拠についてご案内します</p>
              </div>
            </div>
          </div>

          <div className="col-start-1 tablet:col-start-2 desktop:col-start-7 col-span-full desktop:col-span-5 flex flex-col">
            {[
              {
                q: "1人あたりの離職・補充コスト（20%）の試算根拠は？",
                a: "ForresterがCulture Amp導入企業へ実施したインタビュー調査で得られた平均値です。退職手続き費用、採用求人費、面接担当者の時間、入社後のトレーニング期間や立ち上がりまでの生産性損失等、離職1人あたり平均年収の20%相当のコストが発生すると試算されています。"
              },
              {
                q: "「当期純利益（Net Profit）」の定義と効果は？",
                a: "売上高からすべての営業費用・税金等を差し引いた最終的な利益です。カルチャー改善によるサービス品質向上や顧客満足度・業務精度の改善が、最終的に純利益率を0.5%向上させるモデルに基づいています。"
              },
              {
                q: "従業員の平均年収には何が含まれますか？",
                a: "基本給、賞与（ボーナス）、各種手当を含めた1人あたりの年間総支給額を指します。"
              },
              {
                q: "純利益の増加率はどのように算出していますか？",
                a: "Culture Amp導入前後の純利益率の変化を比較して算出されています。計算式: 利益増加額 = (導入後純利益 − 導入前純利益) / 導入前純利益 × 100%"
              },
              {
                q: "離職率低下（5%）の算出根拠は？",
                a: "Forresterのインタビュー調査において、Culture Ampで課題特定と改善アクションを実施した企業が実感した平均的な離職率改善幅に基づいています。"
              },
              {
                q: "「生産性向上（20%）」と「再投資率（50%）」の意味は？",
                a: "サーベイ配信や結果集計の自動化により削減できた時間（20%向上）のうち、半分（50%）を戦略的な人事企画や1-on-1コーチングなどの直接成果を生む業務へ再割り当て（リカバリー）できる前提で計算されています。"
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-t border-black/10 last:border-b py-20">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-semibold text-18 text-black cursor-pointer group"
                >
                  <span className="pr-16">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-teal-500" : "text-black"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="pt-12 text-14 text-muted leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         5. RESOURCE CARDS SECTION
         ========================================================================== */}
      <section className="mb-60 tablet:mb-108 desktop:mb-156">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="text-center col-start-1 tablet:col-start-3 col-end-full tablet:col-end-11 mb-36 tablet:mb-48 desktop:mb-60 flex flex-col items-center">
            <h2 className="font-heading font-medium heading-md">関連リソース</h2>
          </div>

          <div className="col-span-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-24">
            <article className="grid grid-rows-[auto_1fr] gap-y-16 h-full transition-all shadow-0 hover:shadow-1 hover:-translate-y-2 bg-white border border-black/10 rounded-xl overflow-hidden">
              <div className="px-24 pt-24">
                <img 
                  alt="Nasdaq Case Study" 
                  className="w-full h-48 object-cover rounded-lg" 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/N8hpn6CFnFnqVsfw0CrQDoNuBlc=/500x0/cultureampcom/production/a5a/40a/c46/a5a40ac46d9f2909ce6d7f90/case-study-nasdaq2x.png" 
                />
              </div>
              <div className="p-24 flex flex-col justify-between">
                <h3 className="font-heading font-medium text-16 desktop:text-18 mb-16">
                  NasdaqがCulture Ampのデータ分析を活用して離職リスクを監視した方法
                </h3>
                <a href="/case-studies/nasdaq" className="button button--secondary text-13 self-start">
                  事例を読む
                </a>
              </div>
            </article>

            <article className="grid grid-rows-[auto_1fr] gap-y-16 h-full transition-all shadow-0 hover:shadow-1 hover:-translate-y-2 bg-white border border-black/10 rounded-xl overflow-hidden">
              <div className="px-24 pt-24">
                <img 
                  alt="Industry Insights" 
                  className="w-full h-48 object-cover rounded-lg" 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/wlC-1u0qI8ZfF0NVa6cARxcyR1s=/500x0/cultureampcom/production/18b/179/7e7/18b1797e708e33809fae3267/insights.png" 
                />
              </div>
              <div className="p-24 flex flex-col justify-between">
                <h3 className="font-heading font-medium text-16 desktop:text-18 mb-16">
                  業界をリードするベンチマークとデータインサイト
                </h3>
                <a href="/tools/benchmark" className="button button--secondary text-13 self-start">
                  ベンチマークを見る
                </a>
              </div>
            </article>

            <article className="grid grid-rows-[auto_1fr] gap-y-16 h-full transition-all shadow-0 hover:shadow-1 hover:-translate-y-2 bg-white border border-black/10 rounded-xl overflow-hidden">
              <div className="px-24 pt-24">
                <img 
                  alt="Culture First Community" 
                  className="w-full h-48 object-cover rounded-lg" 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JFwonl5z4RNuU6ci4oC1xo4Ox0M=/500x0/cultureampcom/production/116/c15/e31/116c15e31a2f3e8d56578ed6/homepage-community2x.png" 
                />
              </div>
              <div className="p-24 flex flex-col justify-between">
                <h3 className="font-heading font-medium text-16 desktop:text-18 mb-16">
                  受賞歴を誇る「Culture First コミュニティ」に参加
                </h3>
                <a href="/community" className="button button--secondary text-13 self-start">
                  コミュニティを見る
                </a>
              </div>
            </article>

            <article className="grid grid-rows-[auto_1fr] gap-y-16 h-full transition-all shadow-0 hover:shadow-1 hover:-translate-y-2 bg-white border border-black/10 rounded-xl overflow-hidden">
              <div className="px-24 pt-24">
                <img 
                  alt="Quantifiable Benefits" 
                  className="w-full h-48 object-cover rounded-lg" 
                  src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/U36WaA62QqUCobQlEuLyf5G8L0o=/500x0/cultureampcom/production/743/0aa/b25/7430aab258ad38400502fc45/quantifiable-benefits.png" 
                />
              </div>
              <div className="p-24 flex flex-col justify-between">
                <h3 className="font-heading font-medium text-16 desktop:text-18 mb-16">
                  カルチャーがもたらす定量的な事業メリット資料
                </h3>
                <a href="/quantitative-benefits-deck" className="button button--secondary text-13 self-start">
                  スライド資料を入手
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. 免責事項 ＆ 全ページ共通 BOTTOM CTA SECTION
         ========================================================================== */}
      <section className="bg-tan py-36 desktop:py-48 mb-60">
        <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
          <div className="col-start-1 desktop:col-start-2 col-end-full desktop:col-end-12">
            <p className="text-12 text-muted leading-relaxed">
              ※ Culture Ampは無料ツールとして本ROIシミュレーターを提供しています。本ツールで出力される結果は入力データに基づく概算値であり、導入による投資対効果の検討ガイドとしてのみご利用ください。実際の導入効果は各組織の状況により変動します。本ツールの背景にある財務モデルはForrester Consulting社のTotal Economic Impact™手法に基づき作成されていますが、結果の完全性や確実性を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

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