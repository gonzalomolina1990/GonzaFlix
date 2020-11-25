import React from "react"

const Form =({searchUrl, searchRating}) => {

    function ratingStars(id) {
        for (let i = 1; i <= id; i++) {
            document.getElementById(i).className="fas fa-star starButton";        
        }

        for (let i = id+1; i <= 5; i++) {
            document.getElementById(i).className="far fa-star starButton";        
        }
        searchRating(id*2)
    }

    function resetRating(){
        searchRating("")  
    }
 
    
    return (
        <>
        <form className="bgMain">

            <div className="formContainer">
                <div className="container">

                    <h1>¡Tus películas favoritas!</h1>
                    <h3>Puedes buscarlas aquí</h3>
                    <input type="text" id="search" onChange={(event) => searchUrl(event.target.value)} />

                    <div className="rateStars">
                        <h5>Filtrar por Rating</h5>
                        <i className="far fa-star starButton" id="1" onClick={()=>ratingStars(1)}></i>
                        <i className="far fa-star starButton" id="2" onClick={()=>ratingStars(2)}></i>
                        <i className="far fa-star starButton" id="3" onClick={()=>ratingStars(3)}></i>
                        <i className="far fa-star starButton" id="4" onClick={()=>ratingStars(4)}></i>
                        <i className="far fa-star starButton" id="5" onClick={()=>ratingStars(5)}></i>
                        <p><button className="btn btn-dark rounded mt-2" onClick={()=>resetRating()}>Reestablecer</button></p>
                    </div>
                </div>

            </div>

        </form>       
        
        </>

    )

}

export default Form