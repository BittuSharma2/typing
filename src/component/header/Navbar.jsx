

function Navbar(){

    return(
        <>
            <div class="border border-black  flex justify-between rounded-lg w-4/5 m-auto p-3 mt-3 ">
                <div class=" ">
                <img src="" alt="logo"/>
                </div>

                <div class="space-x-10 ">
                     <a href="">Home</a>
                     <a href="">number</a>
                     <a href="">about</a>
                     <a href="">learn</a>
                 </div>
  
                <div class="w-12 rounded-xl border border-black">
                    <div class="h-full w-1/2 rounded-xl bg-black border border-black active:float-end"></div>
                </div>
            </div>

        </>
    )
}

export default Navbar