const BASE_URL = 'https://javascript27g-default-rtdb.firebaseio.com/products'

export default async function postProduct(product) {

    const response = await fetch(`${BASE_URL}/.json`,
        {
            method: 'POST',
            body: JSON.stringify(product)
        });

    return await response.json();

};