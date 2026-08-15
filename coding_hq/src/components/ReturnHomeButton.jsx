import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
export default function ReturnHomeButton(){
    const navigate = useNavigate(); 
    return( 
        <button className="active:scale-95 active:opacity-75 transition-all" onClick={() => navigate(`/`)}>
            <ChevronLeft className = "text-white w-10 h-10"/>
        </button>
    
    )
}