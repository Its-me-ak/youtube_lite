import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {

    }, [])

    return (
        <Context.Provider value={{
            loading,
            searchResult, 
            selectCategories, 
            mobileMenu,
            setLoading,
            setSearchResult, 
            setSelectCategories, 
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}