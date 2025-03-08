const Load = () => {
    return ( 
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-600">Carregando currículo...</p>
        </div>
     );
}
 
export default Load;