const axios = require ('axios')

// function getCharById (res, id) {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//         const { name, gender, species, origin, image, status} = data;
//         const character = {id, name, gender, species, origin, image, status}
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         return res.end(JSON.stringify(character))
//     })
//     .catch( (error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'})
//         return res.end(error.message)
//     })
// }

const URL = "https://rickandmortyapi.com/api/character/"

function getCharById (req, res) {
    const {id} = req.params;

    axios(URL + id)
        .then (({data}) => {
            const { name, gender, species, origin, image, status} = data;
            const character = {id, name, gender, species, origin, image, status}
            return character.name 
            ? res.status(200).json(character)
            : res.status(404).send('Not Found')
        })
        .catch ((err) => {
            console.log(err);
            return res.status(500).send(err.message)
        }) 
}


module.exports = getCharById