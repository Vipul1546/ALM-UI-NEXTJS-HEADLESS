const getRatingsSrOnlyText = (templateString, ratings, users) => {
    const result = templateString?.replace("{ratings}", ratings).replace("{users}", users);
    const usersPluralCase = users > 1 ? "s" : "";
    return result + usersPluralCase;
}

export {
    getRatingsSrOnlyText
};
