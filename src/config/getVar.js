/**
 * 得到产品列表
 * @returns 
 */
export const getProductList = ()=>{
    const list = window.productList || [];
    return list;
}

/**
 * 得到标签列表
 * @returns 
 */
export const getTagList = ()=>{
    const list = window.tagList || [];
    return list;
}