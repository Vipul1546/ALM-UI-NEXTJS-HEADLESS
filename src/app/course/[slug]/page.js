import Header from "@/components/Header";
import { getCoursesDetails } from "@/services/alm";


const Pdp = async ({ params }) => {
    const { slug } = params
    const data = await getCoursesDetails(slug, {
        'include': 'instances.loResources'
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
                    : <div>
                        <h1> {attributes?.localizedMetadata[0]?.name}</h1>
                        <p>{attributes?.localizedMetadata[0]?.overview}</p>
                    </div>
            }
            <FluidicPlayer
                data={data}
                testData
                loid='course:6037764'
                accountId='116411'
                userId='19381376'
                token='0712d892a44e2bdd2354ff525eeb7903'
            />
        </>
    )
}

export default Pdp