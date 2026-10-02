// dataフォルダからJSONデータを読み込む
import solutionsDataRaw from "../../../data/solutions.json";

// Turbopack特有のラップ現象を解除
const rawData = (solutionsDataRaw as any).default || solutionsDataRaw;
const solutionsData = Array.isArray(rawData) ? rawData : [rawData];

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // URLのslugと一致するデータをJSONから探す
  const data = solutionsData.find((item: any) => item?.slug === slug);

  // ★一致するデータがなければ、クラッシュさせずに原因を画面に出力する（デバッグモード）
  if (!data) {
    return (
      <div className="min-h-screen p-10 bg-red-50 text-red-900 font-mono text-sm break-all">
        <h1 className="text-2xl font-bold mb-4">データ取得エラー（デバッグ）</h1>
        <p><strong>アクセスしたURLのslug:</strong> {slug}</p>
        <p><strong>JSONファイル内に存在するslug:</strong> {solutionsData.map((d: any) => d?.slug).join(", ") || "見つかりません"}</p>
        <hr className="my-6 border-red-200" />
        <p className="mb-2 font-bold">【JSONファイルから読み込めた生データ】</p>
        <pre className="bg-white p-6 rounded-lg border border-red-200 overflow-auto whitespace-pre-wrap">
          {JSON.stringify(solutionsDataRaw, null, 2)}
        </pre>
      </div>
    );
  }

  // データが正しく見つかった場合は、Culture Amp本国仕様のデザインを表示
  return (
    <div className="min-h-screen bg-white text-[#1A2530] font-sans pb-32">
      <section className="bg-[#F4F6F8] pt-32 pb-24 px-6 md:px-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-[#1A2530]"
              dangerouslySetInnerHTML={{ __html: data.hero?.heading || data.title }}
            />
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              {data.hero?.description || data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#00B4EF] text-white px-8 py-3.5 rounded font-bold hover:bg-[#0090C0] transition-colors">
                {data.hero?.primaryCta || "Book a demo"}
              </button>
              <button className="border border-[#1A2530] text-[#1A2530] px-8 py-3.5 rounded font-bold hover:bg-[#1A2530] hover:text-white transition-colors">
                {data.hero?.secondaryCta || "Watch video"}
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md h-80 bg-white rounded-lg shadow-2xl border border-gray-100 flex items-center justify-center p-6">
              <span className="text-gray-400 font-bold text-lg border-2 border-dashed border-gray-300 p-8 rounded text-center">
                Culture Amp UI<br/>Mockup Image
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-32 pt-24 px-6 md:px-10 max-w-7xl mx-auto">
        {data.sections?.map((section: any, index: number) => (
          <section key={section.id || index} className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2530] tracking-tight">
                {section.heading}
              </h2>
              {/* ★ここが原因でした。正しく )} で閉じています */}
              {section.description && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.items?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-5">
                  <div className="w-full h-48 bg-[#F4F6F8] rounded-md border border-gray-200 flex items-center justify-center overflow-hidden">
                     <span className="text-gray-400 font-medium">Graphic Asset</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2530] leading-snug">{item.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}