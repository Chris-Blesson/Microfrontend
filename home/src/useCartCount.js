import {useState, useEffect} from 'react';


export function useCartCount() {
    const [count, setCount] = useState(cart.cartItems.length);
    useEffect(() => {
        cart.subscribe(({cartItems}) => setCount(cartItems.length))
    }, []);

    return count;
}
