import { useState } from "react";
import darkAbstract from "../../imgs/backgrounds/dark-abstract.jpg"

const Curriculum = () => {
    const googleDocId:string = import.meta.env.VITE_GOOGLE_DOC_ID;
    const [isLoading, setIsLoading] = useState(true);

    return ( 
        <div className="w-full bg-red-300 h-dvh flex justify-center items-center" style={{'background': `url(${darkAbstract}) center / cover`,}}>

            {/* Componentizar esse load, e colocar o icone azul do react no lugar do circulo azul */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-2 text-gray-600">Carregando currículo...</p>
                </div>
            )}

            <iframe
                src={`https://docs.google.com/document/d/${googleDocId}/preview`}
                className="w-[98%] md:w-[80%] h-[90%] rounded-lg shadow-lg"
                onLoad={() => setIsLoading(false)}
            ></iframe>
        </div>
     );
}
 
export default Curriculum;