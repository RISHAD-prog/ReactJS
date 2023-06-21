import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";
import useRole from "../../hooks/useRole";
import ApprovedCard from "./ApprovedCard";
import SectionTitle from "../../components/SectionTile/SectionTitle";

const ApprovedClass = () => {
    const [userRole] = useRole();
    const [approvedClass, refetch] = useClass();

    return (
        <div>
            <Helmet>
                <title>Little Champ | Approved Class</title>
            </Helmet>
            <div className="mx-56 mb-48">
                <SectionTitle
                    heading={"--Approved Classes--"}
                    subHeading={"Select class to Enroll"}
                ></SectionTitle>
            </div>
            <div className="grid grid-cols-1 gap-x-16 gap-y-4 text-white lg:grid-cols-3 mx-32" >

                {
                    approvedClass.map((allClass) =>
                        <ApprovedCard
                            key={allClass._id}
                            allClass={allClass}
                            role={userRole?.role}
                            refetch={refetch}
                        ></ApprovedCard>
                    )
                }

            </div>
        </div>
    );
};

export default ApprovedClass;