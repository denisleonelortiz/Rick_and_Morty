import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            }
        );
        return setCharacter({});
    }, [id]);

    function back () {
        navigate(-1)
    }

    return (
        <div className= {styles.main}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <h1>{character.name}</h1>
                    <h3>STATUS | {character.status}</h3>
                    <h3>GENDER | {character.gender}</h3>
                    <h3>SPECIE | {character.species}</h3>
                    <h3>ORIGIN | {character.origin?.name}</h3>
                </div>
                <div className={styles.photo}>
                    <div className={styles.imgContainer}>
                        <img
                            className={styles.img}
                            src={character.image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.botonBack}>
                    <button className={styles.button} onClick={back}>Back</button>
                </div>
        </div>
    );
}
