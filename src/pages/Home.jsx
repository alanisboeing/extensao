import BotaoNavegacao from "../components/botao-navegacao";


export function Home(){
    return (
    <div>
        <BotaoNavegacao label={'cadastro'} rota={'/cadastro'}/>
    </div>
    )
}