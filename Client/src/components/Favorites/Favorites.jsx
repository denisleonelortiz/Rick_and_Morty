import { connect } from "react-redux";
import Card from "../Card/Card";
import React, { useEffect, useState } from "react";
import styles from "./Favorites.module.css";
import { filterCards, orderCards, reset } from "../../redux/action";
import { useDispatch } from "react-redux";

function Favorites(props) {
    let { myFavorites } = props;
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (e) => {
        dispatch (orderCards(e.target.value))
        setAux(!aux)
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    useEffect(() => {
        dispatch(reset())
    }, [ ])
    return (
        <div>
            <div className={styles.selectors}>
                <select name="" id="" onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select name="" id="" onChange={handleFilter} defaultValue="allCharacters">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="allCharacters">All Characters</option>
                </select>
            </div>
            <div className={styles.containerCards}>
                {myFavorites.map(
                    ({ id, name, status, species, gender, image }) => (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            image={image}
                        />
                    )
                )}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
        allCharacters: state.allCharacters
    };
}

export default connect(mapStateToProps, null)(Favorites);
