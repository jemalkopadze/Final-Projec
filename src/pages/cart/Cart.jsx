import React, { useContext } from 'react'
import { CartDataContext } from 'global/context/CartDataContext'
import { QuantityCart, RemoveCartItem } from 'components';

export const Cart = () => {
  const { cart } = useContext(CartDataContext)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* <CartProductsCard /> */}
      <ul>
        {cart.map((item, index) => (
          <li key={`Book-${index}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            {/* <Link to={`/${language}/products/${Book.id}`} className="block relative h-48 rounded overflow-hidden"> */}
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.Image} />
            {/* </Link> */}
            <div className="mt-4">
              <h2 className="text-center text-gray-900 title-font text-lg font-medium h-[80px] overflow-hidden">{item.Name}</h2>
              <div className="flex justify-between mt-4 items-center">
                <h2 className="text-center text-orange-500 title-font text-lg font-medium">{item.Price}₾</h2>
                <QuantityCart
                  bookId={item.BookId}
                />
                <RemoveCartItem
                  bookId={item.BookId}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
