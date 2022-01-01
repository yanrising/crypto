import './HomeScreen.css';
import Nav from './Nav';
//import backgroundImage from './Images/backgroundImage.jpg'
function HomeScreen() {
    return (
        <div className="HomeScreen">
            <Nav />
           <div className="HomeScreen__blurSide">
               <div className="HomeScreen__blurSide--left">
                    <h1>FAST & SECURE PLATFORM MADE FOR <span>CRYPTO TRADING</span></h1>
                    <h6>Buy and sell 100+ cryptocurrencies with 25+ flat currencies. Access, manage and spend funds anytime with this platform.</h6>
                    <div className="buttons"> 
                        <button class="btn-hover color-7">Start Trading</button>
                    </div>
                    <div className="HomeScreen__blurSide--left--info">
                        <div className="HomeScreen__blurSide--left--info--stat">
                            <h4>5M+</h4>
                            <p>Customers</p>
                        </div>
                        <div className="HomeScreen__blurSide--left--info--stat">
                            <h4>280M</h4>
                            <p>Coverage</p>
                        </div>
                        <div className="HomeScreen__blurSide--left--info--stat">
                            <h4>22%</h4>
                            <p>Earnings</p>
                        </div>
                    </div>
                </div>
                
           </div>
        </div>
    )
}

export default HomeScreen
