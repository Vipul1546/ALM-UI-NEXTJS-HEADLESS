import RecommendedCard from "./RecommendedCard";

export default {
    title: 'components/Molecules/RecommendedCard',
    component: RecommendedCard,
};

export const Default = (args) => <RecommendedCard {...args} variant="recommended" notRatedSrOnlyText="Not Rated yet" notRatedText="NR" ratedSrOnlyTemplate={"Rated {ratings} from {users} user"} imgSrc='https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772243_1280.jpg' courseRecommendationReason="Highly rated by peers" />

export const Rated = () => <Default courseTitle="Testing" ratings={3} usersRated={2} courseSkills="Java" courseAuthorName="Mr. Neo" courseDuration="5m" coursePublishDate="01-01-2022" />
export const NotRated = () => <Default courseTitle="Automated testing using Java and Selenium" courseSkills="Test automation" courseAuthorName="James Kelly" courseDuration="1.5h" coursePublishDate="01-01-2023" />