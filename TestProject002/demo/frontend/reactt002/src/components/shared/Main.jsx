// components / Shared / Main.jsx

import React from 'react'
import {Routes, Route} from "react-router-dom";

import IndexComponent from "../../components/default/Index";
import LoginComponent from "../../components/default/Login";
import SignUpComponent from "../../components/default/SignUp";
import FindIDComponent from "../../components/default/FindID";
import FindPWComponent from "../../components/default/FindPW";

import RecipeSaveComponent from "../../components/recipe/RecipeSave";
import RecipeDetailComponent from "../../components/recipe/RecipeDetail";


import styles from "../../components/cssModule/default/Main.module.css";


const Main = () => {

    return (

        <main className={styles.main}>
            <div>
                    <Routes>
                        <Route path="/" element={<IndexComponent />}></Route>
                        <Route path="/default/index" element={<IndexComponent />}></Route>
                        <Route path="/default/login" element={<LoginComponent />}></Route>
                        <Route path="/default/signup" element={<SignUpComponent />}></Route>
                        <Route path="/default/findid" element={<FindIDComponent />}></Route>
                        <Route path="/default/findpw" element={<FindPWComponent />}></Route>

                        <Route path="/recipe/saverecipe" element={<RecipeSaveComponent />}></Route>
                        <Route path="/recipe/recipedetail" element={<RecipeDetailComponent />}></Route>
                    </Routes>
            </div>
        </main>
    )
}

export default Main

