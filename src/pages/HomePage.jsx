import { Slider, HomeProduct } from "../components"
import { CategoriesProvider } from "../context/CategoriesContext"

export const HomePage = () => {
    return (
        <>
            <Slider />
            <CategoriesProvider>
                <HomeProduct />
            </CategoriesProvider>
        </>
    )
}