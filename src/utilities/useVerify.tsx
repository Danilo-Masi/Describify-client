// Axios
import axios from 'axios';

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

// Funzione per verificare se un utente è già loggato nella piattaforma
export const checkAuth = async () => {
    // Preleva il token dal local storage
    const token = localStorage.getItem('authToken');
    // Se non c'è un token, l'utente non è autenticato
    if (!token) {
        return false;
    }
    try {
        // Fa la chiamata all'endpoint del server che si occupa di verificare il token
        const response = await axios.get(`${SERVER_URL}/verify-token`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        // Se il server risponde con successo, il token è valido
        return response.status === 200;
    } catch (error: any) {
        console.error("Token non valido o scaduto", error.message);
        // Rimuovi il token se non è valido
        localStorage.removeItem('authToken');
        return false;
    }
};