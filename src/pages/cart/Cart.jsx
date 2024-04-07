import React, { useContext } from 'react'
import { CartDataContext } from 'global/context/CartDataContext'
import { QuantityCart, RemoveCartItem } from 'components';

export const Cart = () => {
  const { cart } = useContext(CartDataContext)

  const totalPrice = cart.reduce((acc, item) => acc + item.Price * item.Quantity, 0);

  return (
    <div className="">
      <h1 className="mb-10 mt-20 flex justify-center text-2xl font-bold">შენი კალათა </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((item, index) => (
            <div key={`Cart-${index}`} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={item.Image}  alt={item.Image} className="w-full rounded-lg sm:w-20" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.Name}</h2>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex  items-center justify-between border-gray-100">
                    <QuantityCart
                      bookId={item.BookId}
                    />
                    <RemoveCartItem
                      bookId={item.BookId}
                    />
                  </div>
                  <div className="flex items-center justify-end space-x-4">
                    <p className="text-sm">{item.Price * item.Quantity} ₾</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="flex justify-between">
            <p className="text-lg font-bold">ჯამი</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">{(totalPrice).toFixed(2)} ₾</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">ყიდვა</button>
        </div>
      </div>
    </div>
  )
}
