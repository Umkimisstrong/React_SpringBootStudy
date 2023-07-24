import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Layout from './components/shared/Layout';
import Footer from "../src/components/shared/Footer"

import TopMenuComponent from "./TopMenuComponent"
function App() {


  // -- App 생성 시 기본으로 제공하는 return div
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

    // return (
    //   <div className="App">
    //       <div>
    //         <TopMenuComponent>

    //         </TopMenuComponent>
    //       </div>
    //   </div>
    // )

    return (
      <div className="App">
          <div>
            <Layout>
              
            </Layout>
            
          </div>
          <Footer></Footer>    
      </div>
      
    )

}





export default App;
