import { Link } from "react-router-dom"
import { useContext } from "react"
import { StaticDataContext } from "global/context/StaticDataContext";
import { CartDataContext } from "global/context/CartDataContext";
import { AddToCart, QuantityCart } from "components";


export const BookCards = ({ Book = [] }) => {
    const {language} = useContext(StaticDataContext);
    const { isInCart } = useContext(CartDataContext)
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {Book.map((Book, index) => (
                        <div key={`Book-${index}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link to={`/${language}/products/${Book.id}`} className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Book.pictures} />
                            </Link> 
                            <div className="mt-4">
                                <h2 className="text-center text-gray-900 title-font text-lg font-medium h-[80px] overflow-hidden">{Book.name}</h2>
                                <div className="flex justify-between mt-4 items-center">
                                    <h2 className="text-center text-orange-500 title-font text-lg font-medium">{Book.variations[0].price}₾</h2>
                                    {isInCart(Book.id) ? (
                                        <QuantityCart 
                                            bookId={Book.id}
                                        />
                                    ) : (
                                        <AddToCart 
                                            book={Book}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}



