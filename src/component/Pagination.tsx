import {  ArrowLeftCircle, ArrowRightCircle } from "lucide-react"

const Pagination = ({ total, setPage,page }: {page:number, total: number, setPage: (val: ((val:number)=>number)|number) => void }) => {
    if(Math.ceil(total / 6) > 0) {
        const handleNext=()=>{
            setPage((prev:number)=>prev >= (total / 6)?prev:prev + 1)
        }
        const handlePrev=()=>{
             setPage((prev:number)=>prev <= 0?prev:prev - 1)
        }
    return <div className="flex my-5 gap-3 items-center justify-center">
            <ArrowLeftCircle className="cursor-pointer" onClick={()=>handlePrev()} size={45} color="#1565c0" strokeWidth={1} />
            {Math.ceil(total / 6) < 5 && Array.from({ length: Math.ceil(total / 6) }, (_, i) => {
                return <span key={i}
                    onClick={() => setPage(i)}
                    className={`cursor-pointer
                        ${page === i ? "text-white bg-blue-800":"text-blue-800"}
                     hover:bg-blue-800 hover:text-white sm:flex justify-center
                      items-center font-semibold p-1 rounded-full w-10
                      hidden
                      h-10 border-2 border-blue-800`}>
                    {i + 1}
                </span>
            })}
            <ArrowRightCircle className="cursor-pointer" onClick={()=>handleNext()} size={45} color="#1565c0" strokeWidth={1} />
        </div>
    }
    
}
export default Pagination