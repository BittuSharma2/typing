

function Navbar(){

    return(
        <>
            <div className="flex justify-between border-2 border-black px-6 py-1">
                <div>
                    <img src="" alt="logo" />
                </div>
                <div className="flex space-x-8">
                    <a href="">Home</a>
                    <a href="">Number</a>
                    <a href="">Lession</a>
                    <a href="">About</a>

                </div>
                <div>
                    <p>mode</p>

                </div>
            </div>

        </>
    )
}

export default Navbar