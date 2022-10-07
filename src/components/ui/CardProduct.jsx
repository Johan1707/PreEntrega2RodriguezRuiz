import { Link } from 'react-router-dom'

import '../../style/cardproduct.css'

export const CardProduct = ({ idProduct, url, name, price }) => {
    return (
        <div className='cp__container'>
            <div className='cp__product'>
                <div className='product__inner'>
                    <Link to={`/detail/${idProduct}`}>
                        <img src={require(`../../assets/${url}`)} alt={name}/>
                    </Link>
                </div>
                <div className='cp__details'>
                    <h2>{name}</h2>
                    <ul className='details__price'>
                        <li>
                            <span>{price}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}