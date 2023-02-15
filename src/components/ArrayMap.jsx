import products from "./Products";

const ArrayMap = () => {
    return <div>
        {products.map((prop) => {
            const {
                id,
                name,
                price,
                onSale

            } = prop;
            return <li key = {id}> {id} : {name}</li>
        })}
    </div>
}

export default ArrayMap;