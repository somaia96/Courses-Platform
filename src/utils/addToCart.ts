import { ICourses } from "@/interfaces"

export const addToCart =(course:ICourses)=>{

    let {id,title,price}=course;
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
    const isExist = cart.find((item:ICourses) => item.id === id);
    if (!isExist) localStorage.setItem("cart", JSON.stringify([...cart, {id,title,price}])); 

}