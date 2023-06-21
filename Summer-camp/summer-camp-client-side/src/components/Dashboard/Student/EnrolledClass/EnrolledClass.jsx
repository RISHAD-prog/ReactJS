import { Helmet } from "react-helmet-async";
import useEnroll from "../../../../hooks/useEnroll";
import SectionTitle from "../../../SectionTile/SectionTitle";

const EnrolledClass = () => {
    const [enroll] = useEnroll();
    return (
        <div>
            <Helmet>
                <title>Little Champ | Enrolled</title>
            </Helmet>
            <SectionTitle
                heading={"--All enrolled class--"}
                subHeading={" Enrolled class for student"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Instructor</th>
                            <th>Email Instructor</th>
                            <th>Total Student</th>
                            <th>Available Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enroll.map((enrollClass, index) =>
                                <tr key={enrollClass._id} >
                                    <th>{index + 1}</th>
                                    <td>{enrollClass.className}</td>
                                    <td>{enrollClass.price}</td>
                                    <td>{enrollClass.instructorName}</td>
                                    <td>{enrollClass.instructorEmail}</td>
                                    <td>{enrollClass.totalStudent}</td>
                                    <td>{enrollClass.availableSeats}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;