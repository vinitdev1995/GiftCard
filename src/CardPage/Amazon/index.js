import React, {useState} from 'react';
import img from '../../assets/images/amazon.png'
import SelectDevice from "../../SelectDevice";
import SelectCountry from "../../SelectCountry";
import SelectAmount from "../../SelectAmount";
import Button4 from "../../Button";
import HeaderAds from "../../HeaderAds";
import BodyAds from "../../BodyAds";
import Generate from "../../generate";
import SearchBar from "../../SearchBar";

const Amazon = () => {

    return (
        <div className="container">
            <br/>
            <HeaderAds />
            <div className="container">
                <div className="breadcrumb-wrap">
                    <ul>
                        <li><a title="Home" itemProp="url" href="/home">
                            <svg version="1.1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 512 512">
                                <g>
                                    <path
                                        d="M512,296l-96-96V56h-64v80l-96-96L0,296v16h64v160h160v-96h64v96h160V312h64V296z"/>
                                </g>
                            </svg>
                        </a></li>
                        <li className="current"><a title="Amazon" itemProp="url" href="javascript:void(0)"> Amazon</a>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="xs-12 md-3">
                        <div className="sidebar-wrapper">
                            <div className="sidebar-active down"> Amazon <span className="drop-change"/></div>
                            <SearchBar/>
                        </div>
                    </div>
                    <div className="xs-12 md-9" itemScope itemType="http://schema.org/Article">
                        <div itemProp="articleBody">
                            <div className="sec-head-row text-center">
                                <div className="sec-head">
                                    <h1 className="page-title" itemProp="headline">Amazon Gift Card generator</h1>
                                    <h3>Random Amazon Gift Voucher Number Generator</h3>
                                </div>
                            </div>
                            <div className="description">
                                <p><b>Amazon gift card generator</b> is simple online utility tool by using You can
                                    create n number
                                    of Amazon gift voucher codes for amount $5, $25 and $100. All these <b>generated
                                        Amazon gift
                                        card</b> numbers are 100% random and follow the gift code rules and formula.</p>
                                <center>
                                    <BodyAds/>
                                </center>
                            </div>
                            <div className="row">
                                <div className="md-3 xs-12 text-center">
                                    <img src={img} alt="Amazon Gift Card Generator"/>
                                </div>
                                <div className="md-9 xs-12">
                                    <form className="gift-card-form" style={{marginTop: '40px'}}>
                                        <SelectDevice/>
                                        <br/>
                                        <SelectCountry/>
                                        <br/>
                                        <SelectAmount/>
                                        <Generate/>
                                    </form>
                                </div>
                            </div>
                            <hr/>
                            <Button4/>
                            <hr/>
                            <div className="description">
                                <h3>What is Amazon gift card generator?</h3>
                                <p><b>Amazon gift card </b> is an online tool that produces codes precisely like
                                    genuine <b>Amazon
                                        gift card codes</b>. Amazon code generator is simple and allowed to utilize the
                                    tool. You can
                                    create the boundless number of gift card codes utilizing this generator.</p>
                                <p>We found that lot's of online <b>Amazon gift card generator</b> force you to fill
                                    survey to see
                                    the full giftcard code that's why we created this free Amazon gift card generator
                                    where you can
                                    generator <b>Amazon gift card</b> just in single click with $5, $10, $25, $50 and
                                    $100 value.
                                </p>
                                <center>
                                    <BodyAds/>
                                </center>
                                <h3>How to generate Amazon gift card code free?</h3>
                                <p>Using out free online <b>Amazon gift card generator tool</b> you can easily generate
                                    completely
                                    free Amazon gift card code by following below steps.</p>
                                <b>Step:0- </b> GoTo Amazon Gift Card Generator Page.<br/>
                                <b>Step:1- </b> First select device form above select device dropdown.<br/>
                                <b>Step:2- </b> Select Country this is optional.<br/>
                                <b>Step:3- </b> After that select amount for your giftcard like $5, $10, $20,$25,$50 or
                                $100;<br/>
                                <b>Step:4- </b> Finally Click on Generate <b>Generate Now</b> button. it will take few
                                seconds to
                                process the Amazon gift card and then you can copy the <b>Amazon gift card</b>.
                                <br/>
                                <br/>
                                <h3>What is Gift Card &amp; How does it work?</h3>
                                <p>E-Gift cards stand for electronic gift cards. This means you won’t have a physical
                                    gift card when
                                    you buy an E-Gift card. Instead you will typically be emailed an E-Gift card number
                                    or bar code
                                    when you purchase from sites like Zeek, Amazon or cardpool. If you have ever looked
                                    at a
                                    traditional physical gift card, you have probably noticed the string of numbers.
                                    These numbers
                                    are the exact same as the numbers you will get for your E-Gift card. Advancements in
                                    technology
                                    have just made it so that we can step away from being forced to have a physical card
                                    to
                                    swipe.</p>
                                <p>When you are shopping you will use your E-Gift card the same way as you would a
                                    traditional gift
                                    card. If you are making a purchase online, simply enter the code in the appropriate
                                    field, the
                                    same way you would if you had the physical card sitting in front of you. If you are
                                    in a store,
                                    you can ask the salesperson to either scan the barcode or show them your E-Gift Card
                                    number from
                                    your email.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Amazon;