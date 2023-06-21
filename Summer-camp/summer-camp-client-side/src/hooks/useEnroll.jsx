import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useEnroll = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enroll = [] } = useQuery({
        queryKey: ['enrolled'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [enroll];

};

export default useEnroll;