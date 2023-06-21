import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: approvedClass = [] } = useQuery({
        queryKey: ['approvedClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/approvedClass`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [approvedClass, refetch];
};

export default useClass;