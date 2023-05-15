import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'


const ShowOne = (props) => {

    const nav = useNavigate()
    // state variables
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // get the id from the :id in the route
    const { id } = useParams();


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

    // delete function
    const deleteMe = () => {
        console.log("delete", id)
        axios.delete("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data)
                nav("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>
                <Link to = {`/products/${id}/edit`}>
                    Edit
                </Link> |
                <button onClick={() => deleteMe(id)}>Delete</button>
            </p>
        </div>
    )
}

export default ShowOne