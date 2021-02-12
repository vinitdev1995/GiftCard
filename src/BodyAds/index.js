import React from 'react';
import {Bling as GPT} from "react-gpt";


const BodyAds = () => {
    return(
        <div >
            <GPT
                adUnitPath="/4595/nfl.test.open"
                slotSize={[728, 90]}
            />
        </div>
    )
};

export default BodyAds;
