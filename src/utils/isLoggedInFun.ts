export function getLoggedInFun():boolean{
    return localStorage.getItem('isLoggedIn') === "true" ? true : false;
}
export function setLoggedInFun(value:boolean):void{
     localStorage.setItem('isLoggedIn',`${value}`);
}