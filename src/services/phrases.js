import axios from 'axios'
const baseUrl = 'https://excuser.herokuapp.com/v1/excuse/'

export const categories = ["Family", "Office", "Children", "College", "Party"]

export const getExcuse = ( category, numExcuses ) => {

    const url = baseUrl + category.toLowerCase() + "/" + numExcuses + "/"
    const result = axios
        .get(url)
        .then(res => {
            return res.data
        })
    
    console.log('The URL is', url)
    console.log('The result is', result)
    return result
}

export default { getExcuse }
