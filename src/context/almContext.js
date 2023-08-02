'use client';

import { createContext, useContext, useMemo, useState } from "react";

const AlmContext = createContext({})

export const AlmContextProvider = ({ children }) => {
    const [courseListing, setCourseListing] = useState({});

    const updateCourseListing = (courseListing) => {
        setCourseListing(courseListing);
    };

    const storeData = useMemo(
        () => ({
            courseListing,
            updateCourseListing: updateCourseListing
        }), [courseListing, updateCourseListing]
    )

    return (
        <AlmContext.Provider value={storeData}>
            {children}
        </AlmContext.Provider>
    )
};

export const useAlmContext = () => useContext(AlmContext);