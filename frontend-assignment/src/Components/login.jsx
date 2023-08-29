import "./login.css"
import mainlogo from "../logo/mainlogo.png";
import image2 from "../logo/image2.png"
import tracking from "../logo/tracking.png"
import stick from "../logo/stick.png"
import fire from "../logo/fire.png"
import hand from "../logo/hand.png"
import pic1 from "../logo/pic1.png"
import pic2 from "../logo/pic2.png"
import pic3 from "../logo/pic3.png"
import pic4 from "../logo/pic4.png"
function Login (){
    return(
        <div>
           <div className="frame2">
               <div className="frame2-box">
                <div  className="box1">
                   <div className="smalldiv1">
                     <h1 className="box1-h">INVESTMENT STACK </h1>
                     <h1 className="box1-f">for India</h1>
                    </div>
                   <div className="smalldiv2"> 
                     <h2 className="box1-e">Elevate Your Investment Strategy </h2>
                     <h2 className="box1-w">with Our <scan>Comprehensive APIs</scan></h2>
                   </div>
                </div>
                <div className="box2">
                    <h2 className="box2-l">Launch financial services in a matter of  </h2>
                    <h2 className="box2-d">days. Take your pick from our flexible</h2>
                    <h2 className="box2-a">APIs, SDKs, or ready-to-use screens.</h2>
                    <p>See our products </p>
                   
                    <button>Contact Us</button>
                    
                </div>
               </div>
               <div className="box3">
                <div className="box3-1">
                    <div>
                    <img src={mainlogo}></img>
                    <h1>Stocks</h1>
                    </div>
                </div>
                <div className="box3-2">
                <div>
                <img src={mainlogo}></img>
                    <h1>Mutual Fund</h1>
                </div>
                </div>
                <div className="box3-3">
            <div>
            <img  src={mainlogo} className="mainlogo"></img>
                    <h1>Digital Gold</h1>
            </div>
            </div>
            </div>
           </div>

           {/* ///////////////////////////////////////////////////////////////////////////// */}
           <div className="frame3">
            <div className="frame3-box1">
                <h4>FEATURES</h4>
                <h1>Launch the most Engaging </h1>
                <h1 id="invest">Invest-Tech Solutions</h1>
                <h3 id="invest1">We offer a suite of B2B Invest-tech solutions, </h3>
                <h3 id="invest2">that are cost-effective way to offer an</h3>
                <h3 id="invest2" >engaging investment experience to your </h3>
                <h3 id="invest2">customers, with a faster time to market</h3>
                <div className="div1">
                    <button>Get Started</button>
                    <p>Learn more</p>
                </div>
            </div>
            <div  className="frame3-box2">
                <div>
                    <h3>Protection</h3>
                    <img src={image2}></img>
                    <p>Data protection guarentees</p>
                </div>
                <div id="blackdiv">
                <h3 >Tracking</h3>
                {/*  */}
                    <img src={tracking}></img>
                    <p>Track all your users’ financial transactions</p>
                </div>
                <div><h3>Flexibilty</h3>
                    <img src={stick}></img>
                    <p>Custom made for your requirements</p></div>
                <div>
                <h3>Easyness</h3>
                    <img src={fire}></img>
                    <p>Go-to market in less than 7 days</p>
                </div>
            </div>
           </div>
           {/* ////////////////////////////////////////////// */}

           <div className="frame4">
            <div className='frame4-box1'>
            <div className='firstbox'>
            <h1 id="main-c">Connect your platform finances </h1>
            <h1 id="firstbox-n">now with InvestPe Gateway</h1>
            <h3>We help brokers, wealth managers, fund managers & other</h3>
            <h3 id="firstbox-b"> businesses / startups server their customers better with our </h3>
            <h3 id="firstbox-b">suite of modern digital investment stack</h3>
            <button>Try Investpe now</button>
            </div>
            <div className='secondbox'>
                <img src={hand}></img>
            </div>
            </div>
           </div>
           {/* /////////////////////////////////// */}
           <div className="frame5">

           <div className="frames5-box1">
            <h4>SOLUTION</h4>
                
                <h1>Stay ahead with our</h1>
                <h1 className="investdown"> Wealth-tech as a service </h1>
            </div>


            <div  className="frames5-box2">
                <div className="inner1">
                <div id="boxx1"> 
                    <img src={pic1}></img>
                    <h4>Investpe</h4>
                    <h2>Why does it make sense to start with us?</h2>
                </div>

                <div id="boxx2">
                    <div >
                    <h2>We value your precious
                        <br/> 
                        time.</h2>
                    
                    <h2>No regulatory licenses required as we have everything for you to get started.</h2>
                    </div>

                    <div>
                        <img src={pic2}></img>
                    </div>
                </div>
               
                <div id="boxx3">
                    <h4>MUTUAL FUNDS</h4>
                    <h2>Get the complete MF Infra
                        <br/>
& focus on customer engagement</h2>
                    <p>SEBI compliant KYC process</p>
                    <p>Multi-AMC empanelments</p>
                    <p>Transact & Track orders</p>
                    <p>Advanced reporting</p>
                </div>

                <div id="boxx4">
                <h4> INDIAN EQUITY</h4>
                    <h2>One gateway for all top securities</h2>
                    <p>Enable stocks, ETFs & expert 
                        <br/>curated stock baskets in your app</p>
                    <p>Integrates with all major brokers</p>
                    <p>Offer expert curated & monitored 
                        <br/>stock basket solutions</p>
                    </div>

              </div>

            <div className="inner2">
            <div>
                    <img src={pic4}></img>
                    <h4>Fixed Deposits</h4>
                    <h2>Fully digital FDs for your users</h2>
                    <p>Offer fixed deposits on your app or website, from multiple banks. Embed a pre-built SDK and go live in weeks.</p>
                    <img src={pic3} id="imgmain"></img>
                </div>
            </div>
           </div> 
           </div>
          
        </div>
    )
}
export default Login