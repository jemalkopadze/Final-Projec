import { Link } from "react-router-dom"
import { useContext } from "react"
import { StaticDataContext } from "global/context/StaticDataContext"
import img0 from "theme/arrayImg/img0.jpeg"
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
import img18 from "theme/arrayImg/img18.jpg"
import img19 from "theme/arrayImg/img19.jpg"
import img20 from "theme/arrayImg/img20.jpg"
import img21 from "theme/arrayImg/img21.jpg"
import img22 from "theme/arrayImg/img22.jpg"
import img23 from "theme/arrayImg/img23.jpg"
import img24 from "theme/arrayImg/img24.jpg"
import img25 from "theme/arrayImg/img25.jpg"
import img26 from "theme/arrayImg/img26.jpg"
import img27 from "theme/arrayImg/img27.jpg"
import img28 from "theme/arrayImg/img28.jpg"
import img29 from "theme/arrayImg/img29.jpg"
import img30 from "theme/arrayImg/img30.jpg"
import img31 from "theme/arrayImg/img31.jpg"
import img32 from "theme/arrayImg/img32.jpg"
import img33 from "theme/arrayImg/img33.jpg"
import img34 from "theme/arrayImg/img34.jpg"
import img35 from "theme/arrayImg/img35.jpg"
import img36 from "theme/arrayImg/img36.jpg"
import img37 from "theme/arrayImg/img37.jpg"
import img38 from "theme/arrayImg/img38.jpg"
import img39 from "theme/arrayImg/img39.jpg"




export const CategoryCards = ({ category = [] }) => {
    const { language } = useContext(StaticDataContext);
    const imgArry = [
        img0,img1, img2, img3, img4, img5, img6, img7,
        img8, img9, img10, img11, img12, img13, img14, img15, 
        img16, img17, img18, img19, img20, img21, img22,img23, 
        img24, img25, img26, img27, img28, img29, img30, img31, 
        img32, img33, img34, img35, img36, img37, img38, img39
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {category.map((category, index) => (
                        <div key={`category-${index}`} className="lg:w-1/4 md:w-1/3 p-4">
                            <Link to={`/${language}/books/${category.id}`} className="block relative h-[140px] rounded-lg overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_20px_40px_-4px]">
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