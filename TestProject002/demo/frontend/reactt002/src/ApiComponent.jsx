import React, {Component} from 'react';
import axios from "axios";
class ApiComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            CodeModel:""
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
                    Code_ID:"RECIPE"
                }
            })
             .then(res => {
                console.log(res);
                this.setState({
                    CodeModel:res.data.CodeModel
                })
             })
             .catch(res => console.log(res))
    }
    render() {
        return (
            <div>
                <table>
                    <thead>

                    <tr>
                        <th>Code ID</th>
                        <td>{this.state.CodeModel.Code_ID}</td>
                    </tr>
                    <tr>
                        <th>Parent Code ID</th>
                        <td>{this.state.CodeModel.Parent_Code_ID}</td>
                    </tr>
                    <tr>
                        <th>Code Name</th>
                        <td>{this.state.CodeModel.Code_NM}</td>
                    </tr>
                    <tr>
                        <th>Code Kor Name</th>
                        <td>{this.state.CodeModel.Code_KOR_NM}</td>
                    </tr>
                    <tr>
                        <th>Code Eng Name</th>
                        <td>{this.state.CodeModel.Code_ENG_NM}</td>
                    </tr>
                    </thead>

                </table>
            </div>
        )
    }
}

export default ApiComponent