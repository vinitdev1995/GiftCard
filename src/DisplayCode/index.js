import React from 'react';

const DisplayCode = ({code}) => {
    return(
        <>
        {!!code &&(<div style={{
            fontSize: '24px',
            color: 'green',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '10px',
            border: '1px dotted',
        }}>
            {code}
        </div>)}
        </>
    )
};

export default DisplayCode;