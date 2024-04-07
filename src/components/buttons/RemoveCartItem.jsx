import { useContext } from 'react';
import { CartDataContext } from 'global/context/CartDataContext';

export const RemoveCartItem = (props) => {
    const { bookId } = props;
    const { removeFromCart } = useContext(CartDataContext)

    const removeItem = () => {
        removeFromCart(bookId);
    }

    return (
        <button className={`cart_btn flex w-1/3 justify-center bg-red-500 text-white px-3 py-1 rounded-md`}
            onClick={removeItem}
        >
            {'წაშლა'}
        </button>
    )
}