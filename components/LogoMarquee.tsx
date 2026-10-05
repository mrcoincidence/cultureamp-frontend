'use client';

export default function LogoMarquee() {
  return (
    <section className="mb-60 tablet:mb-108 desktop:mb-156">
      <div className="container grid grid-cols-6 tablet:grid-cols-12 gap-x-24">
        <div className="row-start-1 col-start-1 col-span-full">
          <div className="flex items-center justify-center gap-x-8 tablet:gap-x-12 mb-24 desktop:mb-36">
            <p className="font-camper text-20 tablet:text-24 text-center">
              世界6,000社以上の先進企業に導入されています
            </p>
            <img 
              src="/camper-arrow-e2d67d1bcdf9465b66c2.svg" 
              alt="" 
              className="self-end mb-1 w-[36px] h-[27px] object-contain" 
            />
          </div>
          
          <div className="marquee">
            <ul className="marquee__group">
              <li><img alt="Bombas" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/b6ZXYvdnew5ULTc-k4nNoAd6zVk=/0x100/cultureampcom/production/ded/10e/fa8/ded10efa8b3082f295719db8/bombas-mono-black.png" /></li>
              <li><img alt="Etsy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lQ56D3kL32OzhBEpm7qbDLjvcYQ=/0x100/cultureampcom/production/1a5/d6b/02b/1a5d6b02b8261221d8d32439/etsy-mono-black.png" /></li>
              <li><img alt="McDonalds" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/sYNvNugRjnrZGnAO1dZ8hAt7T-8=/0x100/cultureampcom/production/ed0/812/6ef/ed08126ef3e15d0cbef09b98/mcdonalds-mono-black.png" /></li>
              <li><img alt="Intercom" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/WHMqmyo_eVeYB1DZjlKGrfD9GrE=/0x100/cultureampcom/production/882/ff4/338/882ff4338eff1c8e2b2b5ba0/logo-intercom-black2x.png" /></li>
              <li><img alt="MLB" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/94NqRtiAO8teiGEnB2QmrzYkwGI=/0x100/cultureampcom/production/6cf/986/4da/6cf9864dab1de1b0f6fd7f0e/mlb-logo-monochrome.png" /></li>
              <li><img alt="On" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JUH89YmI4JIsUAaM3kFTJeuHb3k=/0x100/cultureampcom/production/cb4/ded/466/cb4ded466d0a038c5c408622/on-black.png" /></li>
            </ul>
            <ul aria-hidden="true" className="marquee__group">
              <li><img alt="Bombas" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/b6ZXYvdnew5ULTc-k4nNoAd6zVk=/0x100/cultureampcom/production/ded/10e/fa8/ded10efa8b3082f295719db8/bombas-mono-black.png" /></li>
              <li><img alt="Etsy" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/lQ56D3kL32OzhBEpm7qbDLjvcYQ=/0x100/cultureampcom/production/1a5/d6b/02b/1a5d6b02b8261221d8d32439/etsy-mono-black.png" /></li>
              <li><img alt="McDonalds" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/sYNvNugRjnrZGnAO1dZ8hAt7T-8=/0x100/cultureampcom/production/ed0/812/6ef/ed08126ef3e15d0cbef09b98/mcdonalds-mono-black.png" /></li>
              <li><img alt="Intercom" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/WHMqmyo_eVeYB1DZjlKGrfD9GrE=/0x100/cultureampcom/production/882/ff4/338/882ff4338eff1c8e2b2b5ba0/logo-intercom-black2x.png" /></li>
              <li><img alt="MLB" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/94NqRtiAO8teiGEnB2QmrzYkwGI=/0x100/cultureampcom/production/6cf/986/4da/6cf9864dab1de1b0f6fd7f0e/mlb-logo-monochrome.png" /></li>
              <li><img alt="On" className="max-h-24 tablet:max-h-36 max-w-108 desktop:max-w-132 object-contain" src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/JUH89YmI4JIsUAaM3kFTJeuHb3k=/0x100/cultureampcom/production/cb4/ded/466/cb4ded466d0a038c5c408622/on-black.png" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}