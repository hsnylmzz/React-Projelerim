import React,{ Component } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import NoMatchPage from "./NoMatchPage";
import {Route,Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
class App extends Component{
    render()
    {
        return(
            <BrowserRouter>
                <Navbar/>
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/customers" element={<CustomersList/>} />
                        <Route path="/cart" element={<ShoppingCart/>} />
                        <Route path="*" element={<NoMatchPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;