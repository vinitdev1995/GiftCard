import React from 'react';
import { Card } from 'antd';
import pic1 from '../assets/images/amazon.png'
import pic2 from '../assets/images/americanexpress.png'
import pic3 from '../assets/images/americanairlines.png'
import pic4 from '../assets/images/applebees.png'
import pic5 from '../assets/images/applestore.png'
import pic6 from '../assets/images/bestbuy.png'
import pic7 from '../assets/images/cabelas.png'
import pic8 from '../assets/images/chickfila.png'
import pic9 from '../assets/images/chipotle.png'
import pic10 from '../assets/images/cinemark.png'
import pic11 from '../assets/images/costco.png'
import pic12 from '../assets/images/disney.png'
import pic13 from '../assets/images/dunkindonuts.png'
import pic14 from '../assets/images/ebey.png'
import pic15 from '../assets/images/etsy.png'
import pic16 from '../assets/images/fandango.png'
import pic17 from '../assets/images/forever21.png'
import pic18 from '../assets/images/fortnite.png'
import HomeAds from "../HomeAds";
import BodyAds from "../BodyAds";

const Body = () => {
    return(
        <div className="container">
            <br/>
            <HomeAds/>
            <div>
                <div className="container">
                    <div className="container">
                        <div className="row" itemScope itemType="http://schema.org/Article">
                            <div className="xs-12">
                                <div className="sec-head-row text-center">
                                    <div className="sec-head">
                                        <h1 itemProp="headline" className="page-title">Gift Card generator</h1>
                                        <h3>Random Gift Card Generator</h3>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>Allow you to create the gift card details of the most well known brands in the
                                        market. Details
                                        produced are created with the genuine algorithm which goes on with all genuine
                                        gift
                                        card rules.
                                        gift card Details can be used anyplace, for example, for booking restaurants or
                                        hotels, paying
                                        for in-application buys, purchasing games for free and at e-commerce websites
                                        where
                                        you don't
                                        wish to share your real financial Details as it is constantly recommended to not
                                        share your
                                        genuine account Details with any irregular site.</p>
                                </div>
                            </div>
                            <div>
                                <div className="row card">
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}>
                                        <a href="/amazon" title="Amazon Gift Card Generator">
                                            <img src={pic1} alt="Amazon Gift Card Generator"
                                                 title="Amazon Gift Card Generator" className="gift-card-img"/>
                                        </a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}>
                                        <a href="/american-express" title="American Express Gift Card Generator">
                                            <img src={pic2} alt="American Express Gift Card Generator"
                                                 title="American Express Gift Card Generator"
                                                 className="gift-card-img"/>
                                        </a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/american-airlines" title="American Airlines Gift Card Generator">
                                        <img src={pic3}
                                             alt="American Airlines Gift Card Generator"
                                             title="American Airlines Gift Card Generator"
                                             className="gift-card-img"/></a></div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/applebees" title="Applebees Gift Card Generator">
                                        <img src={pic4} alt="Applebees Gift Card Generator"
                                             title="Applebees Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/applestore" title="Apple Store Gift Card Generator">
                                        <img src={pic5} alt="Apple Store Gift Card Generator"
                                             title="Apple Store Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/bestbuy" title="Best Buy Gift Card Generator">
                                        <img src={pic6} alt="Best Buy Gift Card Generator"
                                             title="Best Buy Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/cabelas" title="Cabelas Gift Card Generator">
                                        <img src={pic7} alt="Cabelas Gift Card Generator"
                                             title="Cabelas Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/chickfile" title="Chick-Fil-A Gift Card Generator">
                                        <img src={pic8} alt="Chick-Fil-A Gift Card Generator"
                                             title="Chick-Fil-A Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/chipotle" title="Chipotle Gift Card Generator">
                                        <img src={pic9} alt="Chipotle Gift Card Generator"
                                             title="Chipotle Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/cinemark" title="Cinemark Gift Card Generator">
                                        <img src={pic10} alt="Cinemark Gift Card Generator"
                                             title="Cinemark Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/costco" title="Costco  Gift Card Generator">
                                        <img src={pic11} alt="Costco  Gift Card Generator"
                                             title="Costco  Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/disney" title="Disney Gift Card Generator">
                                        <img src={pic12} alt="Disney Gift Card Generator"
                                             title="Disney Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div>
                                        <br/>
                                    <BodyAds/>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/dunkindonuts" title="Dunkin Donuts Gift Card Generator">
                                        <img src={pic13} alt="Dunkin Donuts Gift Card Generator"
                                             title="Dunkin Donuts Gift Card Generator"
                                             className="gift-card-img"/></a></div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/ebay" title="eBay Gift Card Generator">
                                        <img src={pic14} alt="eBay Gift Card Generator"
                                             title="eBay Gift Card Generator" className="gift-card-img"/></a></div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/etsy" title="Etsy Gift Card Generator">
                                        <img src={pic15} alt="Etsy Gift Card Generator"
                                             title="Etsy Gift Card Generator" className="gift-card-img"/></a></div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/fandango" title="Fandango Gift Card Generator">
                                        <img src={pic16} alt="Fandango Gift Card Generator"
                                             title="Fandango Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/forever" title="Forever 21 Gift Card Generator">
                                        <img src={pic17} alt="Forever 21 Gift Card Generator"
                                             title="Forever 21 Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <div className="col col-md-2 col-xs-6" style={{marginTop: '25px'}}><a
                                        href="/fortnite" title="Fortnite Gift Card Generator">
                                        <img src={pic18} alt="Fortnite Gift Card Generator"
                                             title="Fortnite Gift Card Generator" className="gift-card-img"/></a>
                                    </div>
                                    <br/>
                                    <div>
                                        <BodyAds/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Body;