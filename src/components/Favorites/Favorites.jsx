import { connect } from "react-redux";
import { Card } from "../Card/Card";
import React from "react";
import  styles from './Favorites.module.css'

function Favorites(props) {
    const {myFavorites} = props
    return(
        <div className= {styles.containerCards}>
            { myFavorites.map(({id, name, status, species, gender, image}) => (
                <Card
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    image={image}
                />
            ))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    };
}

export default connect (mapStateToProps, null)(Favorites);
