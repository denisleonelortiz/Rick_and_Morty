import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards (props) {
    const {onClose, characters} = props;
    
    return (
        <div className={styles.containerCards}>
            {characters.map(({id, name, status, species, gender, image}) => {
                return (
                    <div>
                        <Card
                            id={id}
                            key={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            image={image}
                            onClose={onClose}
                        />
                    </div>
                );
            })}
        </div>
    );
}
