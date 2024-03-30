import { _getRequest } from "./axios";
import { _postRequest } from "./axios";
import {_getRequestUsr} from "./axios"

export const getAllProducts = async () => {
    return await _getRequest('slider')
}

export const getBestOfWeekAuthor = async () => {
    return await _getRequest('author/best_of_week')
}

export const gettAllCategory = async () => {
    return await _getRequest('category')
}

export const getAllCategoryID = async (id) => {
    return await _getRequest(`book?author=1&category_id[]=${id}&serie_id=&type=&block=&best=&year=&discount=&discount_id=`)
}

export const getSingleProductID = async (productID) => {
    return await _getRequest(`book/${productID}?author=1&category=1&series=1&limit=5`)
}

//this is single page API
// https://api.palitral.ge/api/book/5658?author=1&category=1&series=1&limit=5

//this is event single page
//https://api.palitral.ge/api/event/31

//pagination
//00https://api.palitral.ge/api/book?page=3&type=&best=&block=&year=&author=1&price_from=&price_to=&discount=&serie_id=&discount_id=

export const getAllEvents = async () => {
    return await _getRequest(`event?page=1/`)
}

export const getSeries = async () => {
    return await _getRequest('serie')
}

export const getSeriesCategory = async (categoryId) => {
    return await _getRequest(`serie${categoryId}`)
}

export const getSeriesCategoryID = async (seriesCategoryId) => {
    return await _getRequest(`book?author=1&serie_id=${seriesCategoryId}&type=&block=&best=&year=&discount=&discount_id=`)
}

export const getSingleEvents = async (eventsId) => {
    return await _getRequest(`event/${eventsId}`)
}

export const getCarousel = async () => {
    return await _getRequest('carousel')
}

export const userLogin = async (params) => {
    return await _postRequest('auth/login', params)
}

export const getUserInfo = async () => {
    return await _getRequestUsr('users/1', );
  }

export const getCart = async () => {
    return await _getRequestUsr('carts/user/1')
}