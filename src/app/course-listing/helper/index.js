import { LISTING } from "@/constants/almConstant"

const { FILTERS } = LISTING

export const getFiltersFromUrlParam = (params) => {
    const obj = {}
    for (const filter of FILTERS) {
        const selectedOptions = params.get(filter)
        if (selectedOptions)
            obj[filter] = [...decodeURIComponent(selectedOptions).split(',')]
    }
    return obj
}