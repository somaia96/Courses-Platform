const Pagination = ({ total, setPage }: { total: number, setPage: (val: number) => void }) => {
    return (
        <div className="flex my-5 gap-3 items-center justify-center">
            {Array.from({ length: Math.ceil(total / 6) }, (_, i) => {
                return <span key={i}
                    onClick={() => setPage(i)}
                    className="cursor-pointer text-blue-800
                     hover:bg-blue-800 hover:text-white flex justify-center
                      items-center font-semibold p-1 rounded-full w-10 
                      h-10 border-2 border-blue-800">
                    {i + 1}
                </span>
            })}
        </div>
    )
}
export default Pagination