import { useNavigate } from "react-router-dom";

export default function BotaoNavegacao({rota, label}){
    const navigate = useNavigate();
    function navegar(){
        navigate(rota)
    }
    return(
        <button onClick={navegar}>
            {label}
        </button>
    )
}

