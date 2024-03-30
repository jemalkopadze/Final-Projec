import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AddToCart } from 'components'
import { StaticDataContext } from 'global/context/StaticDataContext'

export const ProductCards = ({ product }) => {
    const { translate } = useContext(StaticDataContext)
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full  h-[1%] object-cover object-center rounded" src={product.pictures} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest"></h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <p class="leading-relaxed">{product.description}</p>

                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-orange-500">{}</span>
                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                <AddToCart BookId={product.id} />
                            </button>
                            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            </button>
                        </div>
                    </div>
                    <div>
                        <p>{translate.details.author} - - - - - - - - - - - - - - - - - - - - - -  {product.author?.fullname}</p>
                        <p>{translate.details.genre} - - - - - - - - - - - - - - - - - - - - - - {product.category?.name}</p>
                        <p>{translate.details.serie} - - - - - - - - - - - - - - - - - - - - - - -   {product.series?.title}</p>
                        <p>{translate.details.ISBN} - - - - - - - - - - - - - - - - - - -   {product.isbn}</p>
                        <p>{translate.details.bookLang} - - - - - - - - - - - - - - - - - - -  {product.language}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
