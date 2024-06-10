import axios from "axios";

export async function postCriarPix(body: any) {
    return await axios.post('http://localhost:3000/criar-pix',
        { body }
    )
    // .then(response => {
    //     response
    // })
    // .catch(error => {
    //     console.error(error);
    // });
}