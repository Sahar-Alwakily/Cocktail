import React, {UseState , useState,useEffect } from 'react';
import TextField from "@mui/material/TextField";
import "./Styles.css";
import Select from 'react-select';
import { MDBRow, MDBCol,grid } from 'mdb-react-ui-kit';
import Logo from '../header/image/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import DrinksTitle from "./DrinksTitle";
import {SerachNameDrink} from '../actions/cocAction'



function Bodyer () {
    const [query, setQuery] = useState("");
    const Drinks = useSelector((state) => state.searchDrinks.Drinks);
    const dispatch = useDispatch();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    const fetchProducts = async () => {

        const response = await axios
          .get(url)
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(SerachNameDrink(response.data));

      };

      useEffect(() => {
        fetchProducts();
      }, []);


    return (
        <div className="main">
            <div className="search">
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search" />
                <h1> Previous search name </h1>          
                    </div>            
            <MDBRow>
                 <MDBCol md='2' className='col'>
                      <div className="serach" >
                         <Select className="west"
                             value={null}
                             onChange={null}
                             options={options}
                         /> 
                         <TextField
                             id="outlined-basic"
                             variant="outlined"
                             width="200%"
                             label="Search"/>
                     </div>     
                 </MDBCol>

                 <MDBCol md='8' className='col'>
                 </MDBCol>

                 <MDBCol md='2' className='col'>
                 <div className="serach" >
                         <Select className="west"
                             value={null}
                             onChange={null}
                             options={options}
                         /> 
                     </div> 
                 </MDBCol>
            </MDBRow>
            <div className="wrapper">
                 <div>
                    <DrinksTitle />
                 </div>
                 <div> Two </div>
                 <div>                
                     <div className='image'>
                         <img src={Logo} alt='logo image' width='200px'></img>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Bodyer;