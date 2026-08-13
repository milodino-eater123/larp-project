import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
export default function ReturnHomeButton(){
    const navigate = useNavigate(); 
    return( 
        <button className="" onClick={() => navigate(`/`)}>
            <ChevronLeft className = "w-10 h-10"/>
        </button>
    
    )
}