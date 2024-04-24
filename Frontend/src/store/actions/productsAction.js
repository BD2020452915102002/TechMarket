export const productsActionType = {
    FETCH_DATA:'FETCH_DATA',
}
export const fetchData=(data)=>{
    return {
        type: productsActionType.FETCH_DATA,
        data
    }
}