import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCoursesDetails } from "@/services/alm";
import DetailPage from "./courseDetails/courseDetails";


const Pdp = async ({ params }) => {
    const { slug } = params
    const data = await getCoursesDetails(slug, {
        'include': 'instances.loResources,instances.enrollment.loResourceGrades,skills.skillLevel.skill'
    });
    const {
        attributes,
        id: courseId,
    } = data?.data

    if (!attributes) {
        return <h2>Course not found.</h2>
    }
    return (
        <>
            <Header />

            {
                false
                    ? <h2>Course "{slug}" not found.</h2>
                    : <DetailPage data={data} />
            }

            <Footer />

        </>
    )
}

export default Pdp