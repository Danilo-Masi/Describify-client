// Funzione per verificare se un utente è già loggato nella piattaforma
export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return !!token;
}