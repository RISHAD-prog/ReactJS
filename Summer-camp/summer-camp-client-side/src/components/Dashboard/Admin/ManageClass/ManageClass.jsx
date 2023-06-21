import ClassTable from "./ClassTable";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTile/SectionTitle";
const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes');
            return res.data;
        }
    })
    const handleStatusUpdate = async (classId, status) => {
        try {
            await axiosSecure.patch(`https://little-chams-server-side.vercel.app/classes/${classId}`, { status });
            refetch(); // Refetch the data after successful update
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `class is ${status}`,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };
    console.log(classes);
    return (
        <div>
            <Helmet>
                <title>Little Champ | Dashboard-Manage Class</title>
            </Helmet>
            <SectionTitle
                heading={"--All  class--"}
                subHeading={" Classes needs to be edited"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Name of class</th>
                            <th>Name of Instructor</th>
                            <th>Instructor Email</th>
                            <th>Pending</th>
                            <th>Approved</th>
                            <th>Denied</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((allclass, index) =>
                                <ClassTable
                                    key={allclass._id}
                                    allclass={allclass}
                                    index={index}
                                    handleStatusUpdate={handleStatusUpdate}
                                ></ClassTable>

                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default ManageClass;