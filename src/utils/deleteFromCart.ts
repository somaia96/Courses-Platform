import { ICourses } from "@/interfaces"

export const deleteFromCart =(id:number,setMyCart:(val:ICourses[])=>void)=>{

    const cart :ICourses[]|[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];

    localStorage.setItem("cart", JSON.stringify(cart.filter(item=>item.id !== id))); 
    setMyCart(JSON.parse(localStorage.getItem("cart")!))

}