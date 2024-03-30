import { Link } from "react-router-dom"
import { useContext } from "react"
import { StaticDataContext } from "global/context/StaticDataContext"

export const SeriesCategoryCard = ({ seriesCategory = [] }) => {
    const { language } = useContext(StaticDataContext);


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {seriesCategory.map((seriesCategory, index) => (
                        <div key={`seriesCategory${index}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link to={`/${language}/products/${seriesCategory.id}`} className="block relative h-42 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={seriesCategory.pictures} />
                            </Link> 
                            <div className="mt-4">
                                <h2 className="text-center text-gray-900 title-font text-lg font-medium">{seriesCategory.name}</h2>
                                <h2 className="text-center text-orange-500 title-font text-lg font-medium">{seriesCategory.variations[0].price}₾</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
