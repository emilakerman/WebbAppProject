
import { getAuth } from "firebase/auth";

const ShoppingCart = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
    // User signed in. TODO: Get users cart.
    } else {
    // No user is signed in: Empty cart
    }

}

export default ShoppingCart;