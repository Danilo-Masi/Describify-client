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
            headers: { Authorization: `Bearer ${token}` }
        });
        // Invia una risposta di successo
        return response.status === 200;
    } catch (error: any) {
        // Gestione degli errori
        console.error("Token non valido o scaduto", error.message);
        // Rimuovi il token non valido dal localStorage
        localStorage.removeItem('authToken');
        return false;
    }
};

// Funzione per verificare il numero di crediti disponibili dalla tabella nel DB di Supabase
export const checkCredits = async () => {
    try {
        // Preleva il token dal local storage
        const token = localStorage.getItem('authToken');
        // Se non c'è un token, l'utente non è autenticato
        if (!token) {
            return null;
        }
        // Richiesta all'endpoint presente nel server
        const response = await axios.get(`${SERVER_URL}/verify-credits`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        // Risponde con il numero di crediti disponibili
        if (response.status === 200) {
            return response.data.numero_crediti;
        }
    } catch (error: any) {
        // Gestione degli errori
        console.error('Errore nel recuperare i crediti', error.stack);
    }
    return null;
};