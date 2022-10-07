import { useState } from 'react'

import '../../style/carbubble.css'

export const CarBubble = () => {
    const [quantityItems, setQuantityItems] = useState(0)

    return (
        <div className='carbubble'>{quantityItems}</div>
    )
}