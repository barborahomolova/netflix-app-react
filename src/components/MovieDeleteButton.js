import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) =>{
    //bere si props deleteMovie z Movie
    return(
<button className="movie-delete-button" onClick={props.deleteMovie}>Vymazat film</button>

    )
}

export default MovieDeleteButton