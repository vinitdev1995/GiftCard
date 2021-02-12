import React, {useState} from 'react';
import CardDropDown from "../card-DropDown";

const SearchBar = () => {
    const[searchText, setSearchText] = useState("");

    const onSearch = (e) => {
        setSearchText(e.target.value);
    };
    return(
        <div className="search-tools-wrap">
            <div className="serach-box">
                <input type="text" name="tools_search" id="search-tools"
                       className="search-tool-holder" placeholder="Select Brand"
                       onChange={onSearch} value={searchText}/>
                <i className="fa fa-search"/>
            </div>
            <CardDropDown searchText={searchText}/>
        </div>
    )
};

export default SearchBar;