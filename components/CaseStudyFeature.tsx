'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface CaseStudyFeatureProps {
  title?: string;           // セクション見出し
  companyLogo: string;      // 企業ロゴ画像URL
  companyName: string;      // 企業名 (alt属性用)
  headline: string;         // 事例の見出し・タイトル
  statNumber: string;       // 定量成果数値（例: "<50%"）
  statLabel: string;        // 定量成果のラベル文言
  caseStudyUrl: string;     // 事例詳細ページへのURL
  heroImageUrl: string;     // 右側アーチ画像のURL
  heroImageAlt?: string;    // 右側画像のアルトテキスト
}

export default function CaseStudyFeature({
  title = "We’ve helped build better cultures and better bottom lines",
  companyLogo,
  companyName,
  headline,
  statNumber,
  statLabel,
  caseStudyUrl,
  heroImageUrl,
  heroImageAlt,
}: CaseStudyFeatureProps) {
  // 数値記号（< や %）を分解して本国通りのタイポグラフィ構造を適用
  const match = statNumber.match(/^([<>]?)([\d\.]+)(%?)$/);
  const prefix = match ? match[1] : "";
  const num = match ? match[2] : statNumber;
  const suffix = match ? match[3] : "";

  return (
    <section className="mb-60 tablet:mb-108 desktop:mb-156">
      <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
        
        {/* 本国ソースコード通りの12カラム・マルチRowグリッド構造 */}
        <div className="row-start-1 row-span-4 col-start-1 col-span-full grid grid-cols-6 tablet:grid-cols-12 gap-x-24 desktop:gap-y-60">
          
          {/* 1. セクションタイトル (モバイル: row-start-1 / デスクトップ: desktop:col-start-2 desktop:col-end-7) */}
          {title && (
            <div className="row-start-1 col-start-1 desktop:col-start-2 col-span-full desktop:col-end-7 flex flex-col z-10 mb-24 desktop:mb-0">
              <h2 className="font-heading font-medium heading-md text-center desktop:text-left text-pretty text-black">
                {title}
              </h2>
            </div>
          )}

          {/* 2. 右側アーチ画像 (モバイル: row-start-2 / デスクトップ: desktop:row-start-1 desktop:row-span-4 desktop:col-start-7 desktop:col-end-13) */}
          <div className="row-start-2 desktop:row-start-1 desktop:row-span-4 col-start-1 tablet:col-start-3 desktop:col-start-7 col-span-full tablet:col-span-6 desktop:col-end-13 flex items-center desktop:items-end z-0">
            <div className="mask mask--6 rounded-t-full overflow-hidden shadow-1 w-full">
              <img 
                src={heroImageUrl} 
                alt={heroImageAlt || companyName} 
                className="w-full h-auto object-cover block" 
              />
            </div>
          </div>

          {/* 3. 重なり事例カード (モバイル: row-start-3 で -mt-84 ネガティブマージン / デスクトップ: desktop:col-start-2 desktop:col-span-6) */}
          <div className="-mx-12 tablet:mx-0 row-start-3 col-start-1 tablet:col-start-2 desktop:col-start-2 col-span-full tablet:col-span-10 desktop:col-span-6 z-10 h-fit -mt-84 tablet:-mt-108 desktop:mt-0">
            <div className="shadow-0 rounded-2xl overflow-hidden border border-black/10 bg-white">
              
              {/* カード上部：タン背景 ＋ ロゴ幅の完全補正 */}
              <div className="shadow-0 flex justify-center items-center desktop:justify-between bg-tan p-16 tablet:p-20 desktop:p-16 desktop:pl-36">
                <img 
                  src={companyLogo} 
                  alt={companyName} 
                  className="w-[120px] tablet:w-[150px] desktop:w-[175px] h-auto object-contain block" 
                />
                <div className="hidden desktop:flex">
                  <Link href={caseStudyUrl} className="button button--secondary">
                    事例を見る
                  </Link>
                </div>
              </div>

              {/* カード下部：白背景 */}
              <div className="flex flex-col items-center tablet:items-start gap-y-24 tablet:gap-y-20 desktop:gap-16 bg-white shadow-0 p-24 pt-16 tablet:p-36 tablet:pb-24">
                <div className="flex flex-col justify-center tablet:justify-start gap-16 tablet:gap-20 desktop:gap-16 text-center tablet:text-left w-full">
                  
                  <h3 className="font-heading font-medium heading-xxs text-black leading-snug">
                    {headline}
                  </h3>

                  {/* 本国ソースコード通りの heading-xl ＋ heading-lg 記号構造 */}
                  <div className="flex flex-col tablet:flex-row gap-x-24 items-center text-balance px-12 tablet:px-0 justify-center tablet:justify-start">
                    <p className="font-heading font-medium heading-xl flex justify-center tablet:justify-start items-center tablet:mb-8 desktop:mb-0 text-black">
                      {prefix && <span className="heading-lg pr-2 desktop:pr-6">{prefix}</span>}
                      {num}
                      {suffix && <span className="heading-lg pl-2 desktop:pl-6">{suffix}</span>}
                    </p>
                    <p className="font-normal text-balanced text-md text-black">
                      {statLabel}
                    </p>
                  </div>

                </div>

                {/* モバイル用リンク (事例を見る →) */}
                <div className="w-full flex justify-center tablet:justify-start items-center desktop:hidden pt-8">
                  <Link href={caseStudyUrl} className="text-link text-14 flex gap-4 items-center font-semibold text-black underline underline-offset-4">
                    事例を見る
                    <ArrowRight size={16} />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}