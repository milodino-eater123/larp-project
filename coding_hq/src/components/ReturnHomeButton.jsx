import { useNavigate } from "react-router-dom";
export default function ReturnHomeButton(){
    const navigate = useNavigate(); 
    return( 
        <button className="btn taskcard" onClick={() => navigate(`/`)}>
            Return Home
        </button>
    
    )
}