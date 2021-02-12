import React,{useState} from 'react';

const Header = () => {

    const [isHide, setIsHide] = useState(true);

    const onHide = () => {
        setIsHide(!isHide);
    };

    return(
        <header className="container-fuild header">
            <div className="container">
                <div className="flex align-items justify-content">
                    <div className="logo" style={{fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF'}}>
                        <a href="/home" style={{color: '#FFFFFF'}}><u>GIᖴT ᑕᗩᖇᗪ GEᑎEᖇᗩTOᖇ</u> </a>
                    </div>
                    <div className={`menu ${isHide && "xs-hide sm-hide"}`} itemScope itemType="https://schema.org/SiteNavigationElement">
                        <ul>
                            <li><a title="Home" itemProp="url" href="/home" className="active">Home</a></li>
                            <li><a title="India" itemProp="url" href="/amazon">Amazon</a></li>
                            <li><a title="Home" itemProp="url" href="/ebay">eBay</a></li>
                            <li><a title="United Kingdom" itemProp="url" href="/american-express">American Express</a>
                            </li>
                            <li><a title="Canada" itemProp="url" href="/disney">Disney</a></li>
                            <li><a title="Australia" itemProp="url" href="/fortnite">Fortnite</a></li>
                        </ul>
                    </div>
                    <div className="md-hide lg-hide" onClick={onHide}>
                        <div className="menu-btn">
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
};

export default Header;