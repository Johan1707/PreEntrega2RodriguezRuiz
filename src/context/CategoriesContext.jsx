import { createContext, useState } from 'react';

export const CategoriesContext = createContext()

export const CategoriesProvider = ({ children }) => {
    const [idCategori, setIdCategori] = useState(0)

    return (
        <CategoriesContext.Provider value={{ idCategori, setIdCategori }}>
            {children}
        </CategoriesContext.Provider>
    )
}