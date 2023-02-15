
import products from "./Products";
const ArrayFilter = () => {


    return <ol>
        {
            products.filter(( {id, onSale} ) => (id, onSale)).map(({id, name, price, onSale}) => <li key={id}>{name} , {price} {onSale}</li>)
        }
    </ol>
}

export default ArrayFilter;