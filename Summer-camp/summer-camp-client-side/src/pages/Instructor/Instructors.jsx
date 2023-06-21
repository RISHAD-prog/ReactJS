import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTile/SectionTitle";
import useInstructor from "../../hooks/useInstructor";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
    const [instructor] = useInstructor();
    return (
        <div>
            <Helmet>
                <title>Little Champ | Instructor</title>
            </Helmet>
            <div className="px-56 mb-48">
                <SectionTitle
                    heading={"--All  Instructors--"}
                    subHeading={"All the Instructors are presented here"}
                ></SectionTitle>
            </div>
            <div className="grid grid-cols-1 gap-x-16 gap-y-4  lg:grid-cols-3 mx-32" >

                {
                    instructor.map((allClass) =>
                        <InstructorCard
                            instructors={allClass}
                            key={allClass._id}
                        ></InstructorCard>
                    )
                }

            </div>
        </div>
    );
};

export default Instructors;