import { useState } from 'react'

import '../../style/slider.css'

import { newProducts } from '../../data/data'

export const Slider = () => {
    const [index, setIndex] = useState(0)
    const [over, setOver] = useState(false)

    const selectNewImage = newIndex => {
        newIndex > newProducts.length - 1 
            ? setIndex(0) 
            : newIndex < 0
            ? setIndex(newProducts.length - 1) 
            : setIndex(newIndex)
    }

    const next = () =>
        selectNewImage(index + 1)

    const previus = () => 
        selectNewImage(index - 1)

    const { marca, name, url, value } = newProducts[index]

    return (
        <div 
            className='mainslider_area' 
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
        >
            <div className='slider'>
                <div className='slider__container'>
                    <div className='container__data'>
                        <h2>{marca}</h2>
                        <h3>{name}</h3>
                        <span>{value}</span>
                        <div className='data__btn'>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <img src={require(`../../assets/${url}`)} alt={`${name}`} />
            </div>
            <button className={`area__previus ${over && 'previus__active'}`} onClick={previus}>
                <i className="fa-solid fa-less-than"></i>
            </button>
            <button className={`area__next ${over && 'next__active'}`} onClick={next}>
                <i className="fa-solid fa-greater-than"></i>
            </button>
        </div>
    )
}