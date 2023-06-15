import { getShoppingCart } from "../utilities/fakedb";

const LocalStorageData = async () => {
    const res = await fetch('/job_available.json');
    const data = await res.json();

    const localData = getShoppingCart();
    const saveCart = [];
    for (const id in localData) {
        const exist = data.find(dt => dt.id === id);

        if (exist) {
            saveCart.push(exist);
        }
    }

    return saveCart;
}
export default LocalStorageData;