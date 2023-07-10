import React, {Component} from 'react';
import axios from "axios";
class ApiComponent extends Component {

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
                },
                params:{
                    Code_ID:"MNT_STS"
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
                Api Message :
                {this.state.message}
            </div>
        )
    }
}

export default ApiComponent