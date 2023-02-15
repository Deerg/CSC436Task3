import { useState, useEffect } from "react";
import products from "./Products";
const ArraySort = () => {

    const [numbers, setNumbers] = useState(products);
    // useEffect listens for changes and fires when a change is made

    useEffect(() => {
        sortNumbers();
    }, [])

    const sortNumbers = () => {
        // take the numbers variable and sort them desc if current direction is asc and vice versa
        // change direction to desc if it was asc and vice versa
        // and set that sorted array into the numbers variable(piece of state)

        const sortedNumbers = [...numbers];
        sortedNumbers.sort((a,b) => a.price - b.price);
        setNumbers(sortedNumbers);
    }

    return numbers.map((prop) => {
        return <div> {prop.name}, ${prop.price}
        </div>
    })
        
}

export default ArraySort;