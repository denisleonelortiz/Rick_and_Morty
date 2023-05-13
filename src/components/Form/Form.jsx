import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password:""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const property = event.target.name;
        const value= event.target.value;

        setUserData ({
            ...userData,
            [property]: value
        })

        setErrors (validation({
            ...userData,
            [property]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }

    return (
        <div className={styles.mainbox}>
            <div className={styles.container}>
                <img src="https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg?v=1623834383" alt="" className={styles.img} />
                <form action="" className={styles.form}>
                    <label htmlFor="" className={styles.label}>
                        EMAIL
                    </label>
                    <input 
                        type="text" 
                        value={userData.email} 
                        name="email" 
                        onChange={handleChange}
                        className={errors.email1 || errors.email2 || errors.email3 ? styles.warning : null}
                    />
                    {errors.email1 ? (<p className={styles.errors}>{errors.email1}</p>)
                    : errors.email2 ? (<p className={styles.errors}>{errors.email2}</p>)
                    : errors.email3 ? (<p className={styles.errors}>{errors.email3}</p> )
                    : null
                }

                    <label htmlFor="" className={styles.label}>
                        PASSWORD
                    </label>
                    <input 
                        type="password" 
                        value={userData.password} 
                        name="password" 
                        onChange={handleChange}  
                        className={errors.password1 || errors.password2 ? styles.warning : null}
                    />
                    {errors.password1 ? <p className={styles.errors}>{errors.password1}</p> 
                    : errors.password2 ? <p className={styles.errors}>{errors.password2}</p>
                    : null
                    }

                    <button className={styles.button} onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    );
}
