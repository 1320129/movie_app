import React  from 'react';
import './movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}){
    return(
            <div className="Movie">
                <div className="Movie__column">
                    <Movieposter poster={poster}/>
                </div>
                <div className="Movie__column">
                    <h1>{title}</h1>
                    <div className="Movie__genres">
                        {genres.map((genre, index) => <Moviegnere genre={genre} key={index} />)}
                    </div>
                    <p className="Movie__synopsis">
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                    </p>
                </div>
               

               
           </div>
    )
}


function Movieposter({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__poster"/>
    )
}

function Moviegnere({genre}){
    return(
        <span className="Movie__genre">{genre}</span>
    )
}






export default Movie;