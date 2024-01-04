const filterByType = (type) => item => item?.type === type;

const getFormmatedDate = (date, formatOptions = null) => {
    const options = formatOptions || {
        day: '2-digit',
        month: 'short',
    }
    return new Intl.DateTimeFormat('en-IN', options).format(new Date(date));
}

const getCourseDuration = (duration) => {
    if (duration >= 60) {
        const hours = parseInt(duration / 60);
        const minutes = duration % 60;
        if (minutes) {
            return `${hours}h ${minutes}m`;
        }
        return `${hours}h`;
    }
    return `${duration}m`;
}


const getCourseRecommendationReasons = (list = []) => list.reduce((acc, cur) => {
    const reason = cur?.attributes?.reason || '';
    const courseId = cur?.relationships?.learningObject?.data?.id || '';
    if (reason && courseId) {
        if (courseId) {
            acc[courseId] = reason
        }
    }
    return acc;
}, {});

const getCourseCredits = (list = []) => list.reduce((acc, cur) => {
    const attributes = cur?.attributes || null;
    if (attributes) {
        const { credits, learningObjectId } = attributes;
        if (credits && learningObjectId) {
            const skillLevel = cur?.relationships?.skillLevel?.data?.id || "";
            acc[learningObjectId] = { credits, skillLevel, id: cur.id };
        }
    }
    return acc;
}, {});

const getCourseSkills = (list = []) => list.reduce((acc, cur) => {
    const attributes = cur?.attributes || null;
    if (attributes) {
        const { name: skillName } = attributes;
        if (skillName) {
            const skillLevels = cur?.relationships?.levels?.data?.map(skillLevel => skillLevel.id) || [];
            acc[cur.id] = { skillName, skillLevels }
        }
    }
    return acc;
}, {});

const getCourseSkillLevels = (list = []) => list.reduce((acc, cur) => {
    const { id, attributes, relationships: { skill: { data: { id: skill } } } } = cur;
    if (attributes) {
        acc[id] = { ...attributes, skill }
    }
    return acc;
}, {});

const getCourses = (list = []) => list.map((course) => {
    const { id, attributes: { authorNames, datePublished, duration, imageUrl, isBookmarked, rating: { averageRating, ratingsCount }, state } } = course;
    const authors = authorNames?.join(", ") || "";
    const publishedDate = getFormmatedDate(datePublished);
    return {
        id,
        authors,
        isBookmarked,
        ratingsCount,
        publishedDate,
        averageRating,
        imgSrc: imageUrl,
        courseState: state,
        duration: getCourseDuration(duration),
    }
});


const prepRecommendedCardData = (apiResponse) => {
    const { included, data } = apiResponse;
    let results = null;
    if (apiResponse.included && apiResponse.included.length) {
        const courses = getCourses(included?.filter(filterByType("learningObject")));
        const courseSkillsMap = getCourseSkills(included?.filter(filterByType("skill")));
        const courseCreditMap = getCourseCredits(included?.filter(filterByType("learningObjectSkill")));
        const courseSkillLevelsMap = getCourseSkillLevels(included?.filter(filterByType("skillLevel")));
        const recommendationReasonMap = getCourseRecommendationReasons(data?.filter(filterByType("recommendation")));
        const skills = Object.keys(courseCreditMap).reduce((acc, key) => {
            let skill = { ...courseCreditMap[key], ...courseSkillLevelsMap[courseCreditMap[key].skillLevel] };
            const skillMap = courseSkillsMap[skill.skill]
            skill = { ...skill, ...skillMap }
            acc[key] = skill;
            return acc;
        }, {})
        if (courses && skills && recommendationReasonMap) {
            results = {};
            courses.forEach(course => {
                const recommendationReason = recommendationReasonMap[course.id]?.[0] || "";
                if (recommendationReason) {
                    course.recommendationReason = recommendationReason;
                    course.skills = skills[course.id];
                    if (!results[recommendationReason]) {
                        results[recommendationReason] = [];
                    }
                    results[recommendationReason].push(course);
                }
            });
        }
    }
    console.log("results :: ", results);
    return results;
}

export { prepRecommendedCardData };

