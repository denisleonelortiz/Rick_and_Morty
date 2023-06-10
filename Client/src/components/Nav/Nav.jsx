import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav(props) {
    const { onSearch } = props;

    return (
        <div className={styles.nav}>
            <div className={styles.search}>
                <SearchBar onSearch={onSearch} />
            </div>
            <div className={styles.options}>
                <NavLink    
                to={"/home"} 
                className={({isActive}) => isActive ? styles.active : ''}>
                    <button>Home</button>
                </NavLink>
                <NavLink    
                to={"/favorites"} 
                className={({isActive}) => isActive ? styles.active : ''}>
                    <button>Favorites</button>
                </NavLink>
                <NavLink 
                to={"/about"} 
                className={({isActive}) => isActive ? styles.active : ''}>
                    <button >About</button>
                </NavLink>
                <button onClick={props.logOut}>Log Out</button>
            </div>
        </div>
    );
}
