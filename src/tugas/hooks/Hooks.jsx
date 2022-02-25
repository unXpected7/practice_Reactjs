import React from "react"
import axios from 'axios'
import {Card} from "react-bootstrap"
import './index.scss'
import { useState } from "react"
import { useEffect } from "react"

function DataFetching() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=e70513e7c56a406fa8587bd8ecd6744f')
        .then (response => response.data)
        .then (response => {
            console.log(response.data)
            setPosts( response.articles)
            console.log(response.articles)
        })
        .catch(error => {
            console.log(error)
        })
    }, []
    )

    const handleSearch = (key)=>{
        console.log('Component Did Mount')
        
         axios.get('https://newsapi.org/v2/top-headlines?q='+key+'&country=id&apiKey=e70513e7c56a406fa8587bd8ecd6744f')
         .then (response => response.data)
         .then (response => {
             console.log(response.data)
             setPosts( response.articles)
             console.log(response.articles)
         })
         .catch(error => {
             console.log(error)
         })
        
    }
    return(
        <div className="utama">
            <h1>Berita Nasional</h1>
            <input className="input" type="text" onChange={(event) => handleSearch(event.target.value)} />

            <div className="body">
            <div>
                {
                 posts.length?
                 posts.map((item, index)=>
                 <div key={index} className="container">
                     
                 <Card style={{ width: '40rem' }}>
                 <Card.Img style={{width: '40rem'}} variant="top" src={item.urlToImage} />
                 <Card.Body>
                 <Card.Title>{item.title}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">{item.author} - {item.publishedAt}</Card.Subtitle>
                 <Card.Text className="text">{item.description}</Card.Text>
                 </Card.Body>
                 </Card>
                 </div>
                 ):
                 null
                }
                 </div>
                 </div>
                 </div>
    )
}
export default DataFetching