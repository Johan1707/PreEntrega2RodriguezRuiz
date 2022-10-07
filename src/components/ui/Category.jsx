import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { newProducts } from '../../data/data'
import { categories } from '../../data/categories'

import '../../style/category.css'

import { Products } from './Products'

export const Category = () => {
    const [productsCategory, setProductsCategory] = useState([])
    const [category, setCategory] = useState({})
    const { categoryId } = useParams()

    useEffect(() => {
        const newProductsCategory = newProducts.filter(product => product.idCategori === Number(categoryId))
        const newCategory = categories.find(category => category.id === Number(categoryId))

        setProductsCategory(newProductsCategory)
        setCategory(newCategory)
    }, [categoryId])

    return (
        <div className='container__category'>
            <div className='category__title'>
                <h2>{category.name}</h2>
            </div>
            <Products products={productsCategory} />
        </div>
    )
}