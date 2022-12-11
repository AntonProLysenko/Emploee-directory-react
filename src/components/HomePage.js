import {Route,Routes}from "react-router-dom"

import dataArr from "../data"

import Header from "./Header";
import SearchBar from "./SearchBar";
import List from "./List";
import EmploeePage from './EmploeePage';

const contact = dataArr.map((elm, idx)=>{
    return {...elm}
})
    





export default function HomePage(props) {
  return (
    <div className="homepage">
        <div className="homapagebody">
            <Header />
             <SearchBar />
            <List/>
      </div>
      <div className="emploeebody">
            <Routes>
                <Route path = "/:id" element = {<EmploeePage contact = {contact}/>}/>
            </Routes>
        </div>
    </div>
  );
}
