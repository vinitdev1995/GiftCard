import React from 'react';

const SelectAmount = () => {
    return(
        <select name="Select Amount" className="myselect form-control"
                id="selectammount">
            <option value="SelectAmount">Select Amount</option>
            <option value={5}>$5</option>
            <option value={10}>$10</option>
            <option value={15}>$15</option>
            <option value={20}>$20</option>
            <option value={25}>$25</option>
            <option value={50}>$50</option>
            <option value={100}>$100</option>
        </select>
    )
};

export default SelectAmount;
