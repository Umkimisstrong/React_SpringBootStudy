import React, {Component} from 'react';
import axios from "axios";

class MainComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            message:""
        }
    }

    componentDidMount(){
        this.getApi();
    }

    getApi = () => {
        axios.get("http://localhost:8080/api/hello", 
        {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type',
              }
        })
             .then(res => {
                console.log(res);
                this.setState({
                    message:res.data.message
                })
             })
             .catch(res => console.log(res))
    }
    render() {
        return (
            <div>
                Main 페이지
            </div>
        )
    }
}

export default MainComponent