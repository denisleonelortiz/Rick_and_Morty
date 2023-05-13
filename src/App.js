import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    const EMAIL = 'ejemplo@gmail.com';
    const PASSWORD = 'Pass1234';
    const location = useLocation()

    function login(userData) {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
        } else {
            alert ("Usuario o contraseña incorrecta")
        }
    }

    function logOut () {
        navigate("/")
    }

    function onSearch(id) {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                for (let i = 0; i < characters.length; i++) {
                    if (id == characters[i].id) {
                        return alert("El personaje ya esta en pantalla")
                    }
                }
                setCharacters([...characters, data]);
            } else {
                return alert("¡No hay personajes con este ID!");
            }
        }).catch(error => alert("No hay personajes con este id!"))
    }

    const onClose = (id) => {
        setCharacters(characters.filter(char => char.id !== Number(id)))
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    return (
        <div className='App'>
            {(location.pathname !== '/') && < Nav onSearch={onSearch} logOut = {logOut} />}
            <Routes>
                <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/' element={<Form login = {login} />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </div>
    );
}

export default App;
