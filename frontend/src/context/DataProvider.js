// src/context/DataProvider.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
    const [selectedCards, setSelectedCards] = useState(() => {
        const savedCards = localStorage.getItem('selectedCards');
        return savedCards ? JSON.parse(savedCards) : [];
    });

    const addCard = (card) => {
        setSelectedCards((prevCards) => {
            const updatedCards = [...prevCards, card];
            localStorage.setItem('selectedCards', JSON.stringify(updatedCards));
            return updatedCards;
        });
    };

    // Sync `selectedCards` state with localStorage
    useEffect(() => {
        localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
    }, [selectedCards]);

    return (
        <DataContext.Provider value={{ selectedCards, setSelectedCards, addCard }}>
            {children}
        </DataContext.Provider>
    );
};
