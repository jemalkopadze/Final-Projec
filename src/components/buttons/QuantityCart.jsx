import {useState, useEffect, useContext} from 'react';
import { CartDataContext } from 'global/context/CartDataContext';

export const QuantityCart = (props) => {
    const { bookId } = props;
    const { getQuantity, updateQuantity } = useContext(CartDataContext)
    const [quantity, setQuantity] = useState(getQuantity(bookId));
    // console.log(bookId)
    const changeQuantity = (e) => {
        let value = e.target.value;
        if (value && parseInt(value) > 0){
            setQuantity(value);
        }
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (quantity && quantity !== getQuantity(bookId)) {
                updateQuantity(bookId, quantity);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [quantity, bookId, updateQuantity, getQuantity])


    return (
        <div className={`cart_btn flex w-1/2 justify-end`}>
            <input 
                type="number" 
                value={quantity}
                min={1}
                onChange={changeQuantity} 
                className='text-center py-1 pl-3 w-full bg-transparent text-slate-800 font-bold border-1 border-sky-600 rounded-md' 
            />
        </div>
    )
}