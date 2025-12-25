
export const getCartCourses =()=>{
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
}