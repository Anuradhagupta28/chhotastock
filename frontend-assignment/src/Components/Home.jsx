// import React from 'react';
// import "./Home.css"
// import CurveImg  from "../logo/imagecurve.svg"
// import threeDot from "../logo/Threediv.svg"
// import midDiv from "../logo/somediv.svg"
// import stock  from "../logo/StockInvesting.svg"
// import partner from "../logo/partners.svg"
// import reviever from "../logo/Reviewer.svg"
// import Navbar from "./navbar"
// function Home(props) {
//     return (
//         <div >
//             <Navbar/>
//             <div className="upperAreadiv">

//             <div className="heading-knowledge">
//             Knowledge Based 
// Investing & Trading
//             </div>
//             <div className="subheading-knowledge">
//             Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools
//             </div>
//             <div className="img-phone">
//                 <img  src="https://s3-alpha-sig.figma.com/img/0a9c/acc2/80afd24b59f7c10d1a270caeb6b35045?Expires=1694390400&Signature=LmxclayzP48eKpQLTr5gNME8XiFnwk7rgkkWBeHvpAnG5AFG2ZIeZJkAcYLemrXpDvFMQ7jL84XZ5CWlE8140Nc2pPN54kAFFwKCkDSO6iPS8cSbelp9ZErterwtn0n809baE9oxFeHZtl7GZK~lDO45quWB2u3wb7UJ0W~xbSGyGUg31CFnP9NoQGt9crmMe5Y6oS32TbcZ8ZIljYR7qwq4iYDo9FeuJe~tUc31jm3cwRJY~khx3VYPAcNpWUV~Xx2ak21o~bqFI4VuKtHuKVnAq0G2N48MnaBBDKjeu4oEOl762dWYdR~Z7bp8gRvStM-peDDvmr-4zq9Eu9kksw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" srcset="" />
//             </div>
//             </div>
//             <div className="featuresdiv">
//                 <div className="feature-get-app">
//                     <h3>
//                     FEATURES
//                     </h3>
//                     <h2>
//                     SAVE NOW. BUY LATER. SIMPLE & REALISTIC 
//                     </h2>
//                     <p>
//                     Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.
//                     </p>
//                     <div className="lower-get-app-box">
//                     <div className="get-app-button">
//                     Get the App
//                     </div>
//                     <div className="learn-more">
//                     Learn More
//                     </div>
//                     </div>
                    
//                 </div>
//                 <div className="grige-fretures-box">
//                     <div id="C-bridge">
//  <img  className='i1'src={CurveImg} alt="" />
//                     </div>
//                    <div className="threeDbox">
//                     <img src={threeDot} alt="" />
//                    </div>
                  
//                 </div>
//             </div>
//             <div className="midDiv">
//                 <img src={midDiv} alt="" />
//             </div>
//             <div className='stockInvestingDiv'>
//                 <img src={stock} alt="" />
//             </div>
//             <div className='PartnerImg'>
//                 <img src={partner} alt="" />
//             </div>
//             <div className="reviewerImg">
//                 <img src={reviever} alt="" />
//             </div>
          
//         </div>
//     );
// }

// export default Home;


                  
import React from 'react';
import "./Home.css";
import { StockCard } from "./StockCard";


import ess_img1 from "../logo/essential_img1.png";
import ess_img2 from "../logo/essential_img2.png";
import ess_img3 from "../logo/essential_img3.png";
import bulb from "../logo/bulb.svg";

import valueDealsLogo from "../logo/Value-Deals.svg";
import evRevolutionLogo from "../logo/EV-Revolution.svg";
import hiddenGemsLogo from "../logo/Outperformers.svg";
import hiddenGemsLogo1 from "../logo/hiddenGems.svg";

import kotak from "../logo/kotak.png";
import angelOne from "../logo/angelone.png";
import upstox from "../logo/upstox.png";
import amfi from "../logo/amfi.png";
import lendbox from "../logo/lendbox.png";
import liquiloans from "../logo/liquiloans.png";
import siply from "../logo/siply.png";
import jupiter from "../logo/jupiter.png";
import reviever from "../logo/Reviewer.svg"
import Navbar from './navbar';

function Home(props) {
    return (
        <div >
            <Navbar/>
            <div className="upperAreadiv">

            <div className="heading-knowledge">
            Knowledge Based 
Investing & Trading
            </div>
            <div className="subheading-knowledge">
            Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools
            </div>
            <div className="img-phone">
                <img  src="https://s3-alpha-sig.figma.com/img/0a9c/acc2/80afd24b59f7c10d1a270caeb6b35045?Expires=1694390400&Signature=LmxclayzP48eKpQLTr5gNME8XiFnwk7rgkkWBeHvpAnG5AFG2ZIeZJkAcYLemrXpDvFMQ7jL84XZ5CWlE8140Nc2pPN54kAFFwKCkDSO6iPS8cSbelp9ZErterwtn0n809baE9oxFeHZtl7GZK~lDO45quWB2u3wb7UJ0W~xbSGyGUg31CFnP9NoQGt9crmMe5Y6oS32TbcZ8ZIljYR7qwq4iYDo9FeuJe~tUc31jm3cwRJY~khx3VYPAcNpWUV~Xx2ak21o~bqFI4VuKtHuKVnAq0G2N48MnaBBDKjeu4oEOl762dWYdR~Z7bp8gRvStM-peDDvmr-4zq9Eu9kksw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" srcset="" />
            </div>
            </div>
            <div className="featuresdiv">
                <div className="feature-get-app">
                    <h3>
                    FEATURES
                    </h3>
                    <h2>
                    SAVE NOW. BUY LATER. SIMPLE & REALISTIC 
                    </h2>
                    <p>
                    Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.
                    </p>
                    <div className="lower-get-app-box">
                    <div className="get-app-button">
                    Get the App
                    </div>
                    <div className="learn-more">
                    Learn More
                    </div>
                    </div>
                    
                </div>
                <div className="grige-fretures-box">
                    <div id="C-bridge">
 <img  className='i1'src="https://s3-alpha-sig.figma.com/img/aa3b/d6fd/894042cde3ddade7c88504c38d8c917d?Expires=1694390400&Signature=ENAUrxgExtKshRd3CBLtO2sVuzDrqTCk3X5-RAgCHmNSH8S9-FzOiW~2VoUL9bcnSUc1RPUupT8JGLbzYG8ZAeNIKqXO5JTy8Jko~Upry14eK~ak2KH0LJP4v4s6ArbfbPk8GqWTh0eIq7in3mTaFiL8er~phCoO58gDFoXkdrRWwBxL4l9AQMV9AvA9mtVxxH0O-sRN31N1kZ-M6pm2YHAhLFS4Vt1xd151fYOlgeD92D6EEiDYnRG4rxgynpnekstX86yCGdkNZndBEaccd5usWSLJFxH0~QDFXRA-jOqfMjBW8MZ7FZKHbkXzWiXWo5ma5MAthU0SW7HO-~HbOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i2'src="https://s3-alpha-sig.figma.com/img/f711/f765/384d429255640683dab4ff7b8cde2e43?Expires=1694390400&Signature=EGEhMkuToOEuz8KbkERSMHTEpZZsz7AVqru9~YV9J3zPOrROjyPsojrixB9ITZDPZuvpMtfZ~0AQpMxPz4zdMpNYNkUw5NVlxvUIdwVPwh6xdmp7M~byttyhqazsl3qKnUwIEsKq3KIfZeSKS117c7vWiiVwdKdEkMfvKOWowpqObdQRf8dFLdH9O5z-BRBZ8BT-AKMGxLgeP0-fJycWwh0aFfons4i1IiX2TSDJoE4EaZ7sXqd5s7gN7pk6VtfnP2VsNM~ukWrO4VzD1nkVGsg1A48b23SJC-gZqm7jICn4zKtD5YxNnGmHCgAvaHTTp5fozAsMkgp~EU9QYj7CDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i3'src="https://s3-alpha-sig.figma.com/img/1980/3aef/bf55177b46dc20df85ff5a4450f61ca2?Expires=1694390400&Signature=A7wX0WHXspwnQs8JICA6W8Jm3jFfPtlq0ENmrneSVsapZVCASLHoazfWpjE8-1PQ2GONWiYq3oLITATSC33MYcc-iyCIZJWtyM7Rim0HQ0Y167DucRfZm4TQdp9GNdb3wrbpnswfHHD2flb86fw8u50c8bb4TyxiUgi5yIdKtOTfS85AyDRzmsqZ1o3o3tkZi~c1cxuXP6DpJBLqKc5wPGOxe8cTOQHe7sjVs5G4l5n9u-GKiy-rMRkusRoKCvoodSmYxhnxOe1rHShd2TNhMEBDWT30yVBXyj6hqBmDwNzq-AsLr~9arOlmj0NH3v3WQF12mfj1ctriPRYMwA3kUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i4'src="https://s3-alpha-sig.figma.com/img/142c/4732/b6fdee6d7ecb29d718db2726bc1576b2?Expires=1694390400&Signature=Kku~zBQRj3f8NsciR0c4YvXXJghk~VeICeu33Pa6BoS7PwcgVvU7YKk314FKwYLU74mxWZXu~5dH85q6hCyaDAcn8duQhDnQOt27FBdKrspIUiB6h1cBEprHoiGyNpmRPm6Ad7dfA4OX23INWgcHwu9dyd7FIy523~Wu~Y6GRXse32VsWgj2x0WwobQAuh59cg3G6ItLC0u10yl8ngjxjEmmz32UQqtxUf4LtoNnLjIBsle0uveHMBaNVpJbvT-efKIn1F3MMivdTm3HGV64VWa90Ryi-qv2kZTYEfDsZit12J2PeHtfCoHzq3jrYm2gQEIDl6EqKuf3iAMLpl7MmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i5'src="https://s3-alpha-sig.figma.com/img/a389/2d45/8b8466c4d66ffdce89f7abe959a71b72?Expires=1694390400&Signature=ci4yDiQ5FL~IRCA22bpEkTJ-Zk0AFf-HQn0TpGNOZ64Q8H6A6TwDmG-o~fcU~g6XwQWinin1JKepJzmkFJT2yJLEjRb8B4hIHAhxklO-7qrTTwiRifeiKIR5q66LHvRIrDV7ooaHFh56MhCXPFwg7of00ZcRwiTkMLC1BLSF7aZPqDwxwHt0K2JsCah9KtTECQod32aYsWgdW2aqKgAByFalHoEELjUTsSwfo5JjIoExI~KM12FTQccskawnucY5aT9NmitJkDsPuvqHoDrr5Bx0iKkF42~fyQkpapPEw6wDy1ug~C0Vnw8QaLiHrR~PXMgUrILPPsUB3cOMrfI8CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i6'src="https://s3-alpha-sig.figma.com/img/1713/62f2/284010653f4109cea2ede778aff742f5?Expires=1694390400&Signature=JoNS8cdTysX8Ax5C2UeBiOeYib89RCeGtrEBMdwLTPw~1l2qMHWWe-FE9aPaSjZ~RUsnFNql54J1IM2XQs7env-WGhK76YAvEzG-jkU9I9PKUB65q~ySnm1k4ECQadagS-GuvRnPAovRIdxqkSyohK-lu4glmTpgdGGm4wxPu6g93-x~ifeQs9K2vMEBlnxjVWGHRULltoMYvJRy7R9196N4ZOuGdL-HMgtA7nbRM0jrg~k3ahTkeoFXoyV4ihjHxfZ6MOI2EdTKPUn1Lhl3Q-da22R0G11DOTPK6jCE0SauvAoXALB0uzEDBdgPqgDeRCy6XeWBLPkU1cCxBbwYZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i7'src="https://s3-alpha-sig.figma.com/img/c123/ef7a/13f146fed022d82a55fa9996740e28c4?Expires=1694390400&Signature=CPshi5Co0TZqUuv00RlX0tXvexZcvVrqODnJ50z~r6WLoOmy-fE3ZvVdEvkq4SJ9h1swucdykPHjO4u2NxUe4MWrsYuk~ACtr0ZGu5utmskebQFFbWVApAzeKUxeQTdik6MELXkkmqS6rYUL5-ymxfW4p6e9NHE7~8E6PTg7njt01VBg9J-eu5hpapkD2W9-0ScwRGJCvdGTrkbuRl9Al8iUum3-9wLLCtuAklBdFPM8F5bIadvtGBfY5mdqEmstk0gHj8fiMMVM30~okIMoAkiQGsIOZ3R5eM97dUAg9Ukn5w47Um3MjEVArWwGvJlP2eUSZRh5V8YW0d6~faqS-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i8'src="https://s3-alpha-sig.figma.com/img/2a45/67bc/9423ee360f9c4622d91d99ac79a89355?Expires=1694390400&Signature=iAvtzHsXcBmCBRND3aSNb5xIAWSSUjlN7WkU8hCtNUnnWpEpjCYRCd9noFLF2JiOfYrc1PJBc9zwZA7tgxBKWiA0THKm3u6QZWPvMXV4wbdN2FdPzPXY-EcVcmWyXs3nM1MF2uPWVsZrPG5PZCcHsKeTyWTij4gdWaFCXH7ZEkFHTAXJU0J6RPBO-rmAprGKXLdwdAcb8LMliI4T1NxGZCD1GLk76a2~HuTBmRvEFRH1Ui-5W4e5j~nsATktN2BomJBAzMeRjlJvGDRif57u3UxVKfhO6rD9IHYZj7QWM6J9fvcA-z5rMryQyQEIgUIlJHKAI3GKXqOF-tMMUAGqwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /><img  className='i9'src="https://s3-alpha-sig.figma.com/img/0fc7/cdce/eb7e2b64bbdb17c0d5234dfe437210ac?Expires=1694390400&Signature=gw0E5zSX6I-1ybP8LZ8ZZjl4oPhZAf~AdFpWF2CJg8pwXWuUWFj6LaXVf7~gxVIAK0ljk4MKTZSJgphk6xLXHpZNIIOi2hLyBGZE2laxBVKGQnjeK2VA5UKGYz-8JfdhNkD151-VzIB0Fb~x-nU4nknaVsEzG7xq6ADJATYKMG3gAv2YRcsxCxNw98WFmizkuoDfiPn9RKSi3P5Ed2J1e3MVnMNP9aCgLbhBvtavDYi7fxQm3kfJ2xer--o62d9MptSht2uMd1hb90R3Z4s0Aeyl~ZM3bo0Iv-Ac96tDvxzimvwRH9JDQaEMbsyoBgFVnj4~0Ba3qFyEHPaY4R1O2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                   
                </div>
            </div>

            {/* ////////////////////////////////////////////////////////////////// */}
            <div className='essentials_section'>
        <div className='essentials'>
          <div className='essentialsHeading'>
            <p>
              Essential Features for the Super Trader in You - All in{" "}
              <span>One Platform</span>
            </p>
          </div>
          <div className='essentialsSubHeading'>
            <p>
              Save hours of research by using our readymade screens to find your
              next investment
            </p>
            <div className='bulbContainer'>
              <img className='bulb' src={bulb} />
              <p>
                30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS &
                MUCH MORE
              </p>
            </div>
          </div>
          <div className='essentials_buttons'>
            <button>Get start now</button>
            <p>See all features</p>
          </div>
        </div>
        <div className='ess_imgs'>
          <img src={ess_img3} />
          <img src={ess_img1} />
          <img src={ess_img2} />
        </div>
      </div>
      {/* ///////////////////////////////////////stock */}

      
      {/*stock investing section*/}

      <div className='stock_section'>
        <div>
          <p className='stock_section_heading'>
            STOCK INVESTING, SIMPLIFIED
          </p>
          <div className='stock_section_text'>
            <p>
              Online trading and investing in the market does not have to be
              boring.
            </p>
            <p>
              While we adopt a technology-led approach in building our product,
              we are keeping our users-investors and traders even before that
            </p>
          </div>
        </div>
        <div className='cardSection'>
          <StockCard logo={valueDealsLogo} heading={"Value Deals"} />
          <StockCard logo={evRevolutionLogo} heading={"EV Revolution"} />
          <StockCard logo={hiddenGemsLogo} heading={"Hidden Gems"} />
          <StockCard logo={hiddenGemsLogo1} heading={"Hidden Gems"} />
        </div>
        <hr className='bar1'></hr>
      </div>

      <div className='partnersSection'>
        <div className='partnersSectionText'>
          <p>Some partners who make InvestPe products possible—</p>
          <p>
            ...and a few of the businesses building some incredible solutions
            with InvestPe
          </p>
        </div>
        <div className='partnersSectionImg'>
          <div className='partnersSectionImg1'>
            <img src={kotak} />
            <img src={angelOne} />
            <img src={upstox} />
            
            <img src={amfi} />
            <img src={lendbox} />
            <img src={liquiloans} />
            <br />
          </div>
          <div className='partnersSectionImg2'>
            <div>
              <img src={siply} />
            </div>
            <div>
              <img src={jupiter} />
            </div>
          </div>
        </div>
      </div>
      <hr className='bar2'></hr>
      {/* ////////// */}
      <div className="reviewerImg">
                <img src={reviever} alt="" />
            </div>
      
          
        </div>
    );
}

export default Home;