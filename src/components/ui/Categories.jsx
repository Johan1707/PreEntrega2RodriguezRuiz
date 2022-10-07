import { useState, useContext } from 'react'

import { categories } from '../../data/categories'

import '../../style/categories.css'

import { CategoriesContext } from '../../context/CategoriesContext'

export const Categories = () => {
    const { idCategori, setIdCategori } = useContext(CategoriesContext)

    return (
        <div className="categories__container">
            <div className="categories">
                <ul>
                    {categories.map(categori =>
                        <li key={categori.id}>
                            <button
                                className={`categori__btn ${idCategori === categori.id && 'categori__active'}`}
                                onClick={() => setIdCategori(categori.id)}
                            >{categori.name}</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}