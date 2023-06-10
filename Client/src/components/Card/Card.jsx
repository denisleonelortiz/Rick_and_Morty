import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";

export default function Card(props) {
    const { id } = props;
    const [isFav, setIsFav] = useState(false);
    const myFavorites = useSelector ((state) => state.myFavorites)
    const dispatch = useDispatch()

    function handleFavorite() {
        if (isFav) {
            dispatch(removeFav(id));
            setIsFav(false);
        } else {
            dispatch(addFav(props));
            setIsFav(true);
        }
    }

    useEffect(() => {
        myFavorites?.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        }); console.log(myFavorites);
    }, [myFavorites]);

    const location = useLocation();

    return (
        <div className={styles.container}>
            {isFav ? (
                <button onClick={handleFavorite} className={styles.fav}>
                    ❤️
                </button>
            ) : (
                <button onClick={handleFavorite} className={styles.fav}>
                    🤍
                </button>
            )}

            {location.pathname !== "/favorites" ? (
                <button
                    className={styles.btn}
                    onClick={() => {
                        props.onClose(id);
                    }}
                >
                    X
                </button>
            ) : null}

            <img src={props.image} alt="" className={styles.img} />
            <Link to={`/detail/${id}`}>
                <h2 className={styles.nombre}>{props.name}</h2>
            </Link>
            <div className={styles.caracteristicas}>
                <h2>{props.species}</h2>
                <h2>{props.gender}</h2>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addFav: (character) => {
            dispatch(addFav(character));
        },
        removeFav: (id) => {
            dispatch(removeFav(id));
        },
    };
}



