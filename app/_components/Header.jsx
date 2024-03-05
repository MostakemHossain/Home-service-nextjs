import { Button } from "@/components/ui/button"
import Image from "next/image"

function Header() {
  return (
   <div className="flex shadow-sm justify-between">
       <div className="flex items-center gap-8"> 
         <div>
           <Image src='/logo.jpeg' alt="logo" width={200} height={100} />
         </div>
         <div className="md:flex hidden items-center gap-6 font-semibold mx-auto">
           <h2 className="hover:text-primary hover:scale-105 cursor-pointer">Home</h2>
           <h2 className="hover:text-primary hover:scale-105 cursor-pointer">Services</h2>
           <h2 className="hover:text-primary hover:scale-105 cursor-pointer">About Us</h2>
         </div> 
       </div>
       <div className="flex items-center gap-5">
         <Button>Get Started</Button>
       </div>
    </div>
  )
}

export default Header