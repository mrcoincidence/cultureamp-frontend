'use client';

export default function BadgeSet() {
  return (
    <section className="mb-60 tablet:mb-108 desktop:mb-156">
      <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
        <div className="col-start-1 col-span-full text-center">
          <h2 className="font-heading font-medium heading-sm text-balance mb-24 tablet:mb-36 desktop:mb-48">
            皆様のおかげで、世界最大級のIT製品レビュープラットフォーム「G2」で高い評価をいただいております。
          </h2>
          <ul className="flex flex-wrap gap-24 tablet:gap-36 desktop:gap-48 items-center justify-center">
            <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/Q1MFCXP-KmUsHkHKbPCgPw5AT4k=/0x500/cultureampcom/production/f6c/32f/7d0/f6c32f7d0e1c7c8be851a746/EmployeeEngagement-Leader-Enterprise-Leader.png" alt="Enterprise Leader G2 badge" className="w-full h-auto" />
            </li>
            <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/dBKRW3K-EaqrV_mwewMPkZ21IGE=/0x500/cultureampcom/production/20d/252/f80/20d252f8085653948e28a0d8/EmployeeEngagement-Leader-Mid-Market-Leader.png" alt="Mid-Market Leader G2 badge" className="w-full h-auto" />
            </li>
            <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/9HsIwuc3rcDMMUl3gl43MrEgb3k=/0x500/cultureampcom/production/cb9/8ec/dfc/cb98ecdfca76c8b9bdd058bc/CareerManagement-BestResults-Enterprise-Total.png" alt="Best Results Enterprise G2 badge" className="w-full h-auto" />
            </li>
            <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/yWo7sKnFPSItRUbQ4F47uH3Syek=/0x500/cultureampcom/production/5d2/cb4/224/5d2cb42243b7ebf6c4dd647e/HRAnalytics-HighPerformer-Enterprise-HighPerformer.png" alt="High Performer Enterprise G2 badge" className="w-full h-auto" />
            </li>
            <li className="max-w-[66px] tablet:max-w-84 desktop:max-w-[110px]">
              <img src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JQI2rxTeVixI-2kxdo5BaXQGLtc=/0x500/cultureampcom/production/684/e26/fe2/684e26fe22d534171a874d2a/ObjectivesandKeyResultsOKR-MostImplementable-Mid-Market-Total.png" alt="Most Implementable Mid-Market G2 badge" className="w-full h-auto" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}