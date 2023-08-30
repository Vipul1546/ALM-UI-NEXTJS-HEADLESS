export const LISTING = {
    FILTERS: ['skills', 'types', 'durations'],
    SORT: ['']
}

export const FILTERS = {
    TYPES: [
        {
            id: "certification",
            type: "types",
            attributes: {
                "description": "Certifications",
                "name": "certification",
                "state": "Active"
            },
        },
        {
            id: "Course",
            type: "types",
            attributes: {
                "description": "Courses",
                "name": "course",
                "state": "Active"
            },
        },
        {
            id: "jobAid",
            type: "types",
            attributes: {
                "description": "Job Aids",
                "name": "Job Aids",
                "state": "Active"
            },
        }
    ]
}

export const FILTER_PARAM_MAPPING = {
    skills: 'filter.skillName',
    types: 'filter.loTypes'
}