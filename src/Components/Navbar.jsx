import { Link } from "react-router-dom";

const Navbar=()=>{
return(
    <>
    
    <div className="bg-amber-400 text-black p-5 flex justify-between items-center">
        <div className="bg-amber-600 p-1 rounded-2xl w-20 text-center font-extrabold">
            Logo
        </div>
        <div className="flex gap-10">
            <Link className="bg-amber-400 text-black hover:bg-amber-600 w-20 p-1 text-center font-bold rounded-2xl" to='/'>Home</Link>
            <Link className="bg-amber-400 text-black hover:bg-amber-600 w-30 p-1 text-center font-bold rounded-2xl" to='abuot'>Abuot</Link>
        </div>
    </div>
    
    
    
    </>
)
}
export default  Navbar;