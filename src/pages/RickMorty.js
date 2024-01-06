import { useState } from 'react';
import '../api-style.css';
import Personajes from '../components/Personajes';
import mainImage from '../assets/rick-morty.png';

export default function RickMorty() {

    const [personajes, setPersonajes] = useState(null);

    const reqApi = async ()=> {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const characterapi = await api.json();

        setPersonajes(characterapi.results)

    };

    return (

        <div className="App">
            <header className='App-header'>
                <h1 className='title'>Rick & Morty API</h1>
                {personajes ? (
                    <Personajes personajes={personajes} setPersonajes={setPersonajes} />
                ) : (
                    <>
                    <img src={mainImage} alt="Rick & Morty" className='img-home' />
                    <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
                    </>
                )}
            </header>
        </div>
    )
};