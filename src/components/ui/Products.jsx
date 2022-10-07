import '../../style/products.css'

import { CardProduct } from './CardProduct'

export const Products = ({ products }) => {
    return (
        <div className='products__container'>
            {products.map(product => 
                <CardProduct 
                    key={product.id} 
                    idProduct={product.id} 
                    url={`${product.url}`} 
                    name={`${product.name}`}
                    price={`${product.value}`}
                />
            )}
        </div>
    )
}