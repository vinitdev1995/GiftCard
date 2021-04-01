import React from 'react';
import {Bling as GPT} from "react-gpt";

const HomeAds = () => {
    return(
        <div >
            <GPT
                adUnitPath="/4595/nfl.test.open"
                sizeMapping={[
                    {viewport: [0, 0], slot: [300,250]},
                    {viewport: [750, 0], slot: [728, 90]},
                    {viewport: [1050, 0], slot: [1024, 120]}
                ]}
            />
        </div>
    )
};

export default HomeAds;