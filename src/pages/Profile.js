import { useParams } from "react-router-dom";

export default function Profile() {

    const { name } = useParams();

    return (
        <div>
            <h1>Perfil de usuário</h1>
            <h3>Hola, {name}! Este es tu perfil</h3>
        </div>
    )
};