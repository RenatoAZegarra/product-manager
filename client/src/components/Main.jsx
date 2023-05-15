import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = (props) => {
    // destructure props
    const {products, setProducts} = props

    // state vars for the input
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // get the data right away
    useEffect(() => {
        // make the call to the server
        axios.get("http://localhost:8000/api/products")
            .then((serverRes) => {
                // ! always clog the server response 
                console.log("✅ SERVER SUCCESS => ", serverRes.data)
                setProducts(serverRes.data)
            })
            .catch(err => {
                console.log("❌ SERVER ERROR", err)
            })
    }, [])

    // form submission
    const createProduct = (e) => {
        e.preventDefault()

        // create the object that mimics the MODEL
        const tempObjToSendToServer = {
            title: title,
            price: price,
            description: description
        }

        // send it to the server
        axios.post("http://localhost:8000/api/products", tempObjToSendToServer)
            .then((serverRes) => {
                console.log("✅", serverRes)
                // we could add the serverRes.data to the DOM ourselves
                // ! always clog the server response 
                setProducts([...products, serverRes.data])
            })
            .catch((errRes) => {
                console.log("❌", errRes)
            })
    }

    // delete function
    const deleteMe = (heroId) => {
        console.log("delete", heroId)
        axios.delete("http://localhost:8000/api/heroes/" + heroId)
            .then( res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            {/* FORM */}
            <form onSubmit={createProduct}>
                <h1>Product Manager</h1>
                <p>
                Title: 
                <input  value={title} onChange={e => setTitle(e.target.value)} />
                </p>
                <p>
                Price: 
                <input type="number"  value={price} onChange={e => setPrice(e.target.value)} />
                </p>
                <p>
                Description: 
                <input  value={description} onChange={e => setDescription(e.target.value)} />
                </p>
                <button>Create</button>
            </form>
            <hr />
            <h1>All Products</h1>
            {/* Show All */}
            {
                products.map((product) => {
                    return <div key={product._id}>
                        {/* {JSON.stringify(hero)} */}
                            <p>
                            <Link to={`/products/${product._id}`}>
                            {product.title}
                            </Link>
                            </p>

                    </div>
                })
            }
        </div>
    )
}

export default Main