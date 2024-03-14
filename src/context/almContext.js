'use client';

import { createContext, useContext, useMemo, useState } from "react";

const AlmContext = createContext({})

export const AlmContextProvider = ({ children }) => {
    const [courseListing, setCourseListing] = useState({});
    const [filters, setFilters] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState({
        filters: {},
        sort: {},
        isSearch: false,
        searchPhrase: ''
    });
    const [isWhiteLogo, setIsWhiteLogo] = useState(false);

    const updateCourseListing = (courseListing) => {
        setCourseListing(courseListing);
    };
    const updateFilters = (filters) => {
        setFilters(filters);
    };
    const updateAppliedFilter = (appliedFilters) => {
        setAppliedFilters(appliedFilters);
    };

    const updateIsWhiteLogo = (isWhite)=>{
        setIsWhiteLogo(isWhite);
    }

    const storeData = useMemo(
        () => ({
            courseListing,
            filters,
            appliedFilters,
            isWhiteLogo,
            updateFilters: updateFilters,
            updateCourseListing: updateCourseListing,
            updateAppliedFilter: updateAppliedFilter,
            updateIsWhiteLogo : updateIsWhiteLogo,
        }), [courseListing, filters, appliedFilters,isWhiteLogo, updateCourseListing, updateFilters, updateAppliedFilter, updateIsWhiteLogo]
    )

    return (
        <AlmContext.Provider value={storeData}>
            {children}
        </AlmContext.Provider>
    )
};

export const useAlmContext = () => useContext(AlmContext);