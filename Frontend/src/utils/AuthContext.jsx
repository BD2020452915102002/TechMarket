//
// import React, { createContext, useState, useContext, useEffect } from 'react';
//
// const AuthContext = createContext();
//
// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//
//     useEffect(() => {
//         const sessionData = localStorage.getItem('session');
//         if (sessionData) {
//             const { isLoggedIn } = JSON.parse(sessionData);
//             setIsLoggedIn(isLoggedIn);
//         }
//     }, []);
//
//     const login = (email) => {
//         setIsLoggedIn(true);
//         localStorage.setItem('session', JSON.stringify({ isLoggedIn: true , email: email}));
//     };
//
//     const logout = () => {
//         setIsLoggedIn(false);
//         localStorage.removeItem('session');
//     };
//
//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// export const useAuth = () => useContext(AuthContext);
