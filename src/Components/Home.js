import { Link } from "react-router-dom";

function Home (){
    return(
 <div className='hero bg-slate-200' style={{height:"70vh"}}>
   <div className="relative flex justify-center items-center ">
 
    <img src="/images/world-removebg-preview.png" alt="" style={{height:"500px"}}/>
  
  <div className="justify-center">
  <h2 className="absolute top-20 left-0 w-full text-center text-black font-bold text-4xl z-10 mt-20">
    Welcome to <span className="text-orange-500 font-bold">CROENG </span>ltd
  </h2>
  <p className="absolute top-32 left-0 w-full text-center text-black text-xl font-sans mt-20">
    Touring all destinations to your<br />pleasing and wish.
  </p>
       <Link
            to="/destinations"
            className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full text-black text-xl font-bold hover:bg-orange-500 hover:text-white transition duration-200 mt-40">
          
            Get Started

          </Link>

   </div>
</div>
      
 </div>
       
   
    )
}
export default Home;