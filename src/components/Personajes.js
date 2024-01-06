
export default function Personajes(props) {
  
  const {personajes, setPersonajes} = props;
  const resetPersonajes = () => {
    setPersonajes(null);
  }

  return (
    <div className="characters">
        <h1>Lista de personajes</h1>
        <span className="back-home" onClick={resetPersonajes}>Volver al inicio</span>
        <div className="container-characters">
            {personajes.map((personaje, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={personaje.image} alt={personaje.name}></img>
                    </div>
                    <div>
                        <h3>{personaje.name}</h3>
                        <h6>{personaje.status === "Alive" ? (
                            <>
                            <span className="alive" />Con vida
                            </>
                        ) : (
                            <>
                            <span className="dead" />Muerto
                            </>
                        )}
                        </h6>
                        <p>
                            <span className="text-gray">Episodios:</span>
                            <span> {personaje.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-gray">Especie:</span>
                            <span> {personaje.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetPersonajes}>Volver al inicio</span>
    </div>
  )
}
