import { Link } from "react-router-dom"
import { useContext } from "react"
import { StaticDataContext } from "global/context/StaticDataContext"
import { CartDataContext } from "global/context/CartDataContext";
import { AddToCart, QuantityCart } from "components";


export const SeriesCategoryCard = ({ seriesCategory = [] }) => {
    const { language } = useContext(StaticDataContext);
    const { isInCart } = useContext(CartDataContext)
    const placeholderImage = "https://via.placeholder.com/150";



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {seriesCategory.map((seriesCategory, index) => (
                        <div key={`seriesCategory${index}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link to={`/${language}/products/${seriesCategory.id}`} className="block relative h-42 rounded overflow-hidden"  style={{ height: "400px" }}>
                            <img 
                                        alt="ecommerce" 
                                        className="object-cover object-center w-full h-full block" 
                                        src={seriesCategory.pictures || placeholderImage} 
                                        onError={(e)=>{e.target.onerror = null; e.target.src=placeholderImage;}}
                                    />
                            </Link>
                            <div className="mt-4">
                                <h2 className="text-center text-gray-900 title-font text-lg font-medium h-[80px] overflow-hidden">{seriesCategory.name}</h2>
                                <div className="flex justify-between mt-4 items-center">
                                    <h2 className="text-center text-orange-500 title-font text-lg font-medium">{seriesCategory.variations[0].price}₾</h2>
                                    {isInCart(seriesCategory.id) ? (
                                        <QuantityCart
                                            bookId={seriesCategory.id}
                                        />
                                    ) : (
                                        <AddToCart
                                            book={seriesCategory}
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
