import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '../components'
import { 
    HomePage, 
    ProductsPages, 
    DetailPage,
    CategoryPage,
    AboutPages, 
    ContactsPages, 
    NotFoundPages } from '../pages/index'

const MainRouter = () => {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    return (
        <Routes>
            <Route path='/' element={ <MainLayout /> }>
                <Route index element={ <HomePage /> }/>
                <Route path='/products' element={ <ProductsPages /> }/>
                <Route path='/detail/:idProduct' element={ <DetailPage /> }/>
                <Route path='/category/:categoryId' element={ <CategoryPage /> }/>
                <Route path='/about' element={ <AboutPages /> }/>
                <Route path='/contact' element={ <ContactsPages /> }/>
                <Route path='*' element={ <NotFoundPages /> }/>
            </Route>
        </Routes>
    )
}

export default MainRouter