
// eslint-disable-next-line react/prop-types
export function  ProfileContent({image,name1,email,mobile,address}){
    
    
   return<div className="flex justify-center">
      <div>
         <div className="h-[6rem]  bg-white px-1 my-6 ">
            <img src={image} className="h-full w-full object-cover"/>
        </div>

         <p>{name1}</p>
         <p className="hidden lg:block">{email}</p>
         <p>{mobile}</p>
         <p>{address}</p>
         </div>
         </div>
}