import React, {Component} from "react"
import axios from 'axios'
import {Card} from "react-bootstrap"
import './index.scss'

export default class LifecycleComponent extends Component{
   constructor(props) {
       super(props)

       this.state = {
           searchData: null,
           result:[]

       }
   }

   componentDidMount(){
    console.log('Component Did Mount')
    
     axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=5180b276e4454ae683e1c13f25fd57b7')
     .then (response => response.data)
     .then (response => {
         console.log(response.data)
         this.setState({result: response.articles})
         console.log(response.articles)
     })
     .catch(error => {
         console.log(error)
     })
    
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
       }

    // componentWillUnmount(){
    //     console.log('component will Unmount')
    // }

    search(key){
       console.log('Component Did Mount')
       
        axios.get('https://newsapi.org/v2/top-headlines?q='+key+'&country=id&apiKey=e70513e7c56a406fa8587bd8ecd6744f')
        .then (response => response.data)
        .then (response => {
            console.log(response.data)
            this.setState({searchData: response.articles})
            console.log(response.articles)
        })
        .catch(error => {
            console.log(error)
        })
       
   }

   render(){

    const {result} = this.state
       return(
           <div className="utama">
               <h1>Berita Nasional</h1>
               <input className="input" type="text" onChange={(event) => this.search(event.target.value)} />

               <div className="body">
                   { this.state.searchData?
                   <div>
                   {
                       this.state.searchData.length?
                       this.state.searchData.map((item, index)=>
                       <div key={index}className="container">
                        
                    <Card className="card" style={{ width: '40rem' }}>
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
                   :
                   <div>
                   {
                    result.length?
                    result.map((item, index)=>
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
                    // result.map(post => <div key={post.author}>{post.title}</div>):
                    null
                     }
                     </div>
                   }
               </div>
           </div>
       )
   }
}