import { useParams } from 'react-router-dom'

import { newProducts } from '../../data/data'

import '../../style/productdetail.css'

export const ProductDetail = () => {
    const { idProduct } = useParams()
    const { name, url, value } = newProducts.find(product => product.id === Number(idProduct))

    return (
        <div className='dp__container'>
            <div className='container__img'>
                <div className='img__product'>
                    <div className='img__content'>
                        <img src={require(`../../assets/${url}`)} alt={name} />
                    </div>
                </div>
            </div>
            <div className='container__detail'>
                <div className='detail__product'>
                    <h2>{name}</h2>
                    <div className='product__description'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, cumque cum recusandae vel neque sunt, ratione quis distinctio error, sapiente quo eos eligendi quisquam maiores asperiores dolor eum nesciunt quae!q</p>
                    </div>
                    <ul className='product__price'>
                        <li>
                            <span>{value}</span>
                        </li>
                    </ul>
                    <div className='product__quantity'>
                        <div className='quantity__text'>
                            <span>Quantity:</span>
                        </div>
                        <div className='quantity__card'>
                            <button>-</button>
                            <input type='text' defaultValue='1'/>
                            <button>+</button>
                        </div>
                    </div>
                    <ul className='product__btn'>
                        <li>
                            <button className='add_cart'>ADD TO CART</button>
                        </li>
                        <li>
                            <button className='buy_now'>BUY IT NOW</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}