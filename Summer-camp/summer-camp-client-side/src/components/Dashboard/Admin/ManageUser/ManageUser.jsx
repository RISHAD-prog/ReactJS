import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import UserTable from "./UserTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTile/SectionTitle";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: user = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleRoleUpdate = async (userId, role) => {
        try {
            await axiosSecure.patch(`https://little-chams-server-side.vercel.app/users/${userId}`, { role });
            refetch(); // Refetch the data after successful update
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `successfully set as ${role}!`,
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
    console.log(user);

    return (
        <div>
            <Helmet>
                <title>Little Champ | Manage User</title>
            </Helmet>
            <SectionTitle
                heading={"--All approved class--"}
                subHeading={" Classes for instructors"}
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users, index) =>
                                <UserTable
                                    key={users._id}
                                    user={users}
                                    index={index}
                                    handleRoleUpdate={handleRoleUpdate}
                                ></UserTable>

                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUser;