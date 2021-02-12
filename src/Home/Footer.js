import React from 'react';

const Footer = () => {
    return(
        <footer className="container-fluid footer">
            <div className="container" itemScope itemType="https://schema.org/WPFooter">
                <div className="row">
                    <div className="xs-12" style={{textAlign: 'center', color: '#ffffff'}}>
                        <p style={{textAlign: 'justify'}}>
                            <b>Disclaimer: </b>It is important to check their approaches and terms of utilization before
                            utilizing their information or transferring any information on their platforms. by using this
                            website, you fully accept all the risk and liability that might arise by using these generated codes
                            and gift cards. There's no surety that the codes generated using our generators are valid or not in
                            use by any other person. Codes generated on this site is only for educational purpose.
                        </p>
                        <hr />
                        <p>© 2021 <a style={{color: '#ffffff'}}>GiftCardGenerator</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
