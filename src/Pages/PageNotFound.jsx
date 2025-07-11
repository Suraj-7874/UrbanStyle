

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-11/12 sm:w-3/4 md:w-1/2">
        <img 
          src="/Error.jpg" 
          alt="Page_not_found" 
          className="w-full object-contain mb-6 rounded-lg"
        />
        <h2 className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/80 px-2 py-1 sm:px-4 sm:py-2 rounded font-serif text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 shadow text-center w-11/12 sm:w-auto">
          Page Not Found
        </h2>
      </div>
    </div>
  );
}

export default PageNotFound;