import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cartClass = [] } = useQuery({
        queryKey: ['cartClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartClass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [cartClass, refetch];
};

export default useCart;