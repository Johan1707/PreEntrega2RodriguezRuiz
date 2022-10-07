import { useContext } from 'react'

import { newProducts } from '../../data/data'

import { CategoriesContext } from '../../context/CategoriesContext'
import { Categories } from '../ui/Categories'
import { Products } from '../ui/Products'

export const HomeProduct = () => {
    const { idCategori } = useContext(CategoriesContext)
    const products = newProducts.filter(d => d.idCategori === idCategori)

    return (
        <section className='hp'>
            <div className='hp__container'>                
                <Categories />
                <Products products={products}/>                           
            </div>
        </section>
    )
}