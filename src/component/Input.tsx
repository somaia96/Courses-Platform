const Input = ({value, name,setter,placeholder}:{value:string,placeholder:string,name:string,setter:(val:string)=>void}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="capitalize" htmlFor={name}>
                {name}:
            </label>
            <input value={value} onChange={(e) => setter(e.target.value)} className="px-3 placeholder:text-sm py-2 rounded-md" type={name} placeholder={placeholder} id={name} />

        </div>
    )
}
export default Input