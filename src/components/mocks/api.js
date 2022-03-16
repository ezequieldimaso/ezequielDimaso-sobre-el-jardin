const APIURL = "https://62310d2b05f5f4d40d7294df.mockapi.io/productos/:1"
function getPlantaA(id){
    fetch(`${APIURL}/${id}`)
            fetch(`${APIURL}/${id}`)
            .then((resultado)=> resultado.json())
            .then((planta)=>{
                console.log(planta)
            })
}

getPlantaA(1);

export function getPlantas(){
    return fetch(`${APIURL}`)
}



