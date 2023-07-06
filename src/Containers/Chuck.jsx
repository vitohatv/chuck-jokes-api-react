import { useState } from "react";
import Menu from "../Components/Menu";
import axios from "axios";


const Chuck = () => {
    const [jokes, setJokes] = useState('');

    function jokesGenerate() { 
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((res) => {
            setJokes(res.data.value);
        }).catch((e) => console.log(e.name, e.message));
    }
    return (
        <Menu key={jokes.id} joke={jokes} generateJoke={jokesGenerate}/> 
    )
}

export default Chuck; 