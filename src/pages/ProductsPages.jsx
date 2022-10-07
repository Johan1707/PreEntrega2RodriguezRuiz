import { newProducts } from '../data/data'

import '../style/productspage.css'

import { Products } from '../components'

export const ProductsPages = () => {
    return (
        <div className='pp_container'>
            <Products products={newProducts} />
        </div>
    )
}