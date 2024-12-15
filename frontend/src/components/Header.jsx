
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
            {/* LEFT SIDE */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] text-white"> 
                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight flex flex-col gap-1">
                    <p>Book Appoinment</p>
                    <p>With Trusted Doctors</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center text-sm font-light">
                    <img className="w-28" src="../../public/group_profiles.png" alt="" />
                    <div className="flex flex-col gap-0"> 
                        <p>Simply browse through our extensive list of trusted doctors,</p>
                        <p>schedule your appointment hassle-free.</p>
                    </div>
                </div>
                <a href="" className="flex items-center gap-2 bg-white text-gray-600 py-2 px-4 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
                    Book appointment
                </a>
            </div>
            {/* RIGTH SIDE */}
            <div className="md:w-1/2 relative"> 
                <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src="../../public/header.png" alt="" />
            </div>
        </div>
    )
}

export default Header