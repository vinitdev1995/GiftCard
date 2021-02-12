import React, {useEffect, useState} from 'react';
import DisplayCode from "../DisplayCode";
import ProgressBar from "react-bootstrap/ProgressBar";

const Generate = () => {
    const [progressbarShow, setProgressbarShow] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [generateCodeCount, setGenerateCodeCount] = useState(0);
    const [code, setCode] = useState('');

    const onGenerate = () => {
        setCode('');
        setProgressbarShow(true)
    };
    useEffect(() => {
        if (percentage === 100) {
            Generatecode();
            return true
        } else {
            if (progressbarShow) {
                setTimeout(() => {
                    setPercentage(percentage + 1)
                }, 100)
            }
        }
    }, [percentage, progressbarShow]);

    const Generatecode = () => {
        let i;
        var e = new Array("2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"),
            r = "";
        for (i = 0; i < 5; i++) {
            r += e[Math.floor(32 * Math.random())]
        }
        for (r += "-", i = 0; i < 6; i++) {
            r += e[Math.floor(32 * Math.random())]
        }
        for (r += "-", i = 0; i < 5; i++) {
            r += e[Math.floor(32 * Math.random())]
        }
        setCode(r);
        setPercentage(0);
        // jQuery("#generate_card").text("Generate Again");
        setProgressbarShow(false);
        setGenerateCodeCount(generateCodeCount + 1);
        return true
    };

    return (
        <>
            <br/>
            {code && <DisplayCode code={code}/>}
            <div id="myProgress">
                <div id="myBar"><span id="per">1%</span></div>
            </div>

            {progressbarShow && <ProgressBar now={percentage} label={`${percentage}%`} max="100"/>}

            <div className="sec-btn text-center" style={{marginTop: '20px'}}>
                <a id="generate_card"
                   className="btn btn-md btn-primary"
                   onClick={onGenerate}>{percentage === 100 ? "Generate again" : "Generate Now"} </a>
            </div>
        </>
    )
};

export default Generate;
