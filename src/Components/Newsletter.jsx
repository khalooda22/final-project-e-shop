// eslint-disable-next-line react/prop-types
function Newsletter({backgroundImage,backgroundColor}) {
     return (
       <div className=" lg:w-4/5 md:w-4/5 w-full mx-auto flex flex-col lg:flex-row md:flex-row  justify-evenly gap-10 my-4 p-4 bg-cover" style={{backgroundImage:`url(${backgroundImage})`}}>
         <h1 className="lg:w-[500px] md:flex-col   self-center text-white font-bold text-3xl capitalize"> subscribe to our news letter and recieve exclusive offers every week</h1>
         <form action="" className="self-center flex lg:gap-5 md:gap-5 justify-around  lg:flex-row md:flex-row">
             <input type="email" placeholder="Enter your email" className="rounded-full p-2 w-80 text-center" />
             <button className="w-20  rounded-full py-2 px-4 mx-2 self-center" style={{backgroundColor:backgroundColor}}>submit</button>
         </form>
       </div>
     )
   }
   
   export default Newsletter
    