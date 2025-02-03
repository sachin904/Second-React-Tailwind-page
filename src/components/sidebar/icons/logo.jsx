import imgsrc from "D:/100xdevs/week-13-tailwind/week-13.2/src/components/sidebar/images/image.png"

export function Headers1(){
    return<div className="w-28 ">
    <span className="flex bg-blue-800 rounded-md  ">
       <img src={imgsrc} className="h-4 mx-2 my-1"></img>
       <div className=" flex text-sm font-bold text-white"><p >Webinar</p><p className=" text-green-400">.gg</p>
       </div>
       </span>
    </div>
  }