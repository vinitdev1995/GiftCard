import React from 'react';

const SelectDevice = () => {
    return(
        <select name="Select Device" className="myselect form-control"
                id="selectdevice">
            <option value="SelectDevice">Select Device</option>
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
            <option value="MAC">MAC</option>
            <option value="Windows">Windows</option>
            <option value="Linux">Linux</option>
            <option value="Other">Other</option>
        </select>
    )
};

export default SelectDevice;