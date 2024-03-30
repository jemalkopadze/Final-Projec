import { Link } from "react-router-dom"
import { useContext } from "react"
import { StaticDataContext } from "global/context/StaticDataContext"
import img1 from "theme/arrayImg/img1.jpg"
import img2 from "theme/arrayImg/img2.jpg"
import img3 from "theme/arrayImg/img3.jpg"
import img4 from "theme/arrayImg/img4.jpg"
import img5 from "theme/arrayImg/img5.jpg"
import img6 from "theme/arrayImg/img6.jpg"
import img7 from "theme/arrayImg/img7.jpg"
import img8 from "theme/arrayImg/img8.jpg"
import img9 from "theme/arrayImg/img9.jpg"
import img10 from "theme/arrayImg/img10.jpg"
import img11 from "theme/arrayImg/img11.jpg"
import img12 from "theme/arrayImg/img12.jpg"
import img13 from "theme/arrayImg/img13.jpg"
import img14 from "theme/arrayImg/img14.jpg"
import img15 from "theme/arrayImg/img15.jpg"
import img16 from "theme/arrayImg/img16.jpg"
import img17 from "theme/arrayImg/img17.jpg"



export const CategoryCards = ({ category = [] }) => {
    const { language } = useContext(StaticDataContext);
    const imgArry = [img1, img2, img3, img4, img5, img6, img7,
        img8, img9, img10, img11, img12, img13, img14, img15, img16, img17]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {category.map((category, index) => (
                        <div key={`category-${index}`} className="lg:w-1/4 md:w-1/3 p-4">
                            <Link to={`/${language}/books/${category.id}`} className="block relative rounded-lg overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_20px_40px_-4px]">
                                <img src={imgArry[index]} alt={index} />
                            </Link>
                            <h2 className="text-center flex items-center justify-center mt-4 text-amber-600 title-font text-lg font-medium cursor-pointer">{category.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}



// cart:[{id:5, quantity:1}, {id:2, quantity:4}]

// fav: [1,2,4,6]