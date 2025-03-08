import { useState } from "react";
import Load from "../../components/Load"

const Curriculum = () => {
    const googleDocId:string = import.meta.env.VITE_GOOGLE_DOC_ID;
    const [isLoading, setIsLoading] = useState(true);

    return ( 
        <div className="w-full bg-red-300 h-dvh flex justify-center items-center" style={{'background': "url(/dark-abstract.jpg) center / cover",}}>
            
            {isLoading && <Load />}

            <iframe
                src={`https://docs.google.com/document/d/${googleDocId}/preview`}
                className="w-[98%] md:w-[80%] h-[90%] rounded-lg shadow-lg"
                onLoad={() => setIsLoading(false)}
            ></iframe>
        </div>
     );
}
 
export default Curriculum;