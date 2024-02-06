import CourseRating from './course-rating';

export default {
  title: "components/molecules/Course Rating",
  component: CourseRating,
  parameters: {
    docs: {
      description: {
        component: 'Course rating component documentation.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
      source: { type: 'code' },
    },
  },
};

export const courseRatingComponent = (args) => (
      <CourseRating rating={3} handleSubmit={(data)=>{alert(data)}} />
);
