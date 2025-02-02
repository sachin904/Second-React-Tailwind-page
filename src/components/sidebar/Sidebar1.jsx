
export function SidebarClass1(){

    return <div className="flex ">
        <div className=" transition-all duration-1000 ease-in-out md:w-96 w-0 h-screen bg-blue-200">
           sidebar
           <button onClick={()=>{
            document.querySelector("html").classList.toggle("dark")
           }}>toggle theme</button>
        </div>
        <div className="h-screen w-full">
            content
        </div>
    </div>
}