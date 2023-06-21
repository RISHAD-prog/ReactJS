import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userRole = [], } = useQuery({
        queryKey: ['admin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/validateRole/${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [userRole];
};

export default useRole;