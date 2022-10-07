import '../../style/container.css'

export const Container = ({ children }) => {
    return (
        <div className='maincontainer'>
            {children}
        </div>
    )
}