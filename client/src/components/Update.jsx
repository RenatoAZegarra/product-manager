import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = (props) => {

    const nav = useNavigate()

    // get the id from the :id in the route
    const { id } = useParams();
    console.log(id)

    // state vars for the input
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // find that one obj from the DB aka READ ONE
    // make it execute right away
    useEffect(() => {
        // go to the server route, get the obj
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(serverRes => {
                setTitle(serverRes.data.title)
                setPrice(serverRes.data.price)
                setDescription(serverRes.data.description)
            })
            .catch(serverErr => console.log(serverErr))
    }, [id])

    // update form submit
    // form submission
    const updateProduct = (e) => {
        e.preventDefault()

        // create the object that mimics the MODEL
        const tempObjToSendToServer = {
            title: title,
            price: price,
            description: description
        }

        // send it to the server
        axios.patch("http://localhost:8000/api/products/"+id, tempObjToSendToServer)
            .then((serverRes) => {
                // ! always clog the server response 
                console.log("✅", serverRes.data)
                nav("/")
                
            })
            .catch((errRes) => {
                console.log("❌", errRes)
            })

    }

    return (
        <div>
            {/* update form */}
            <form onSubmit={updateProduct}>
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
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default Update