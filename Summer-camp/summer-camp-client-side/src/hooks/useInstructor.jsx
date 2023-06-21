import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructor = () => {

    const { data: instructor = [] } = useQuery({
        queryKey: ['allinstructor'],
        queryFn: async () => {
            const res = await axios.get('https://little-chams-server-side.vercel.app/instructors')
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [instructor];
}

export default useInstructor;