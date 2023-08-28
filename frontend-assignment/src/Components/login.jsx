import "./login.css"
import mainlogo from "../logo/mainlogo.png"
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
          
        </div>
    )
}
export default Login