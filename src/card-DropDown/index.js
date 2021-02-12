import React, {useEffect, useState} from 'react';
const initialList = [
        {
                name: "Amazon",
                href: "/amazon"
        },
        {
                name: "American Express",
                href: "/american-express"
        },
        {
                name: "American Airlines",
                href: "/american-airlines"
        },
        {
                name: "Applebees",
                href: "/applebees"
        },
        {
                name: "Apple Store",
                href: "/applestore"
        },
        {
                name: "Best Buy",
                href: "/bestbuy"
        },
        {
                name: "Cabelas",
                href: "/cabelas"
        },
        {
                name: "Chick-Fil-A",
                href: "/chickfile"
        },
        {
                name: "Chipotle",
                href: "/chipotle"
        },
        {
                name: "Cinemark",
                href: "/cinemark"
        },
        {
                name: "Costco",
                href: "/costco"
        },
        {
                name: "Disney",
                href: "/disney"
        },
        {
                name: "Dunkin Donuts",
                href: "/dunkindonuts"
        },
        {
                name: "eBay",
                href: "/ebay"
        },
        {
                name: "Etsy",
                href: "/etsy"
        },
        {
                name: "Fandango",
                href: "/fandango"
        },
        {
                name: "Forever 21",
                href: "/forever"
        },
        {
                name: "Fortnite",
                href: "/fortnite"
        },
];

const CardDropDown = ({searchText}) => {
        const [navBar,setNavBar] = useState(initialList);

        useEffect(() => {
                if (searchText) {
                        const list =  navBar.filter((item) => {
                                if (item.name.toLowerCase().toString().includes(searchText.toLowerCase().toString()) ) return item
                        });
                        setNavBar(list)
                } else {
                        setNavBar(initialList)
                }
        }, [searchText]);

    return(
        <ul className="sidebar-wrapper-ul" id="tool-conversion-menu">
                {
                        navBar.map((cardList,index)=>{
                                return(
                                    <li key={index} className="cardsideber "><a className title="Amazon Gift Card Generator"
                                                                    itemProp="url" href={cardList.href}><i
                                        className="fa fa-gift" aria-hidden="true"/>{cardList.name}</a></li>
                                )

                        })
                }
        </ul>
    )
};

export default CardDropDown;
