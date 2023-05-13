import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
    const [id, setID] = useState("")
    const {onSearch} = props;

    function handleChange  (event) {
        const {value} = event.target
        setID(`${value}`)
    }

    return (
        <div className={styles.container}>
                <input type='search' className={styles.input} onChange={handleChange} value={id} />
                <button className={styles.boton} onClick={() => {onSearch(id)}}>Agregar</button>
        </div>
    );
}
