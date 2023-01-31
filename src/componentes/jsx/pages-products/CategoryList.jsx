import { Productos } from "../products/item";
import List from "./List";
import { useParams } from 'react-router-dom';


const CategoryList = () => {
    window.scrollTo(0, 0)
    const { category } = useParams()

    const title = () => {
        if (category === 'usopp') return 'God Usopp'
        if (category === 'zoro') return 'Roronoa Zoro'
        if (category === 'sanji') return 'Vinsmoke Sanji'
        return false
    }

    const Lista = () => {
        return <Productos
            title={title()}
            image={`${category}.jpg`}
            list={<List category={`${category}`}
            />}
        />
    }


    return (
        title() ?
            <Lista />
            :
            <div className="contain">
                <h2> La categoria que buscas no se encuentra en nuestro sitio!</h2>
                <img src={require('../../images/error.png')} />
            </div>
    )
}










export default CategoryList
