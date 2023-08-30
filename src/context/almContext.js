'use client';

import { createContext, useContext, useMemo, useState } from "react";

const AlmContext = createContext({})

export const AlmContextProvider = ({ children }) => {
    const [courseListing, setCourseListing] = useState({});
    const [filters, setFilters] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState({
        filters: {},
        sort: {}
    });

    const updateCourseListing = (courseListing) => {
        setCourseListing(courseListing);
    };
    const updateFilters = (filters) => {
        setFilters(filters);
    };
    const updateAppliedFilter = (appliedFilters) => {
        setAppliedFilters(appliedFilters);
    };

    const storeData = useMemo(
        () => ({
            courseListing,
            filters,
            appliedFilters,
            updateFilters: updateFilters,
            updateCourseListing: updateCourseListing,
            updateAppliedFilter: updateAppliedFilter
        }), [courseListing, filters, appliedFilters, updateCourseListing, updateFilters, updateAppliedFilter]
    )

    return (
        <AlmContext.Provider value={storeData}>
            {children}
        </AlmContext.Provider>
    )
};

export const useAlmContext = () => useContext(AlmContext);