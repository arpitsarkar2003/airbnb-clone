function Banner() {
  return (
    <div className="relative">
        <img 
            src="https://links.papareact.com/0fm"
            className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[600px] 2xl:h-[600px]"
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

            <button className="bg-white text-purple-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-lg hover:shadow-white active:scale-90 transition duration-150">I'm flexible</button>
        </div>
    </div>
  )
}
export default Banner;
