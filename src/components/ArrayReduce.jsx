import products from "./Products";
const ArrayReduce = () => {

    const totalPrice = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    return  <div>
                <p className="text-center">Product total price is ${totalPrice} dollar.</p>
            </div>
}

export default ArrayReduce;