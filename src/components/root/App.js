import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { Route,Routes} from "react-router-dom";
import Main from '../main/Main';
import SeachPage from "../search/SearchPage";
import Cocktails from '../cocktail/Cocktails';
import FirstPage from '../firstPage/FirstPage';
import NotFound from '../empty/NotFound';
import Footer from '../navi/Footer';
import SelectedCocktail from '../search/SelectedCocktail';

export default class App extends Component {

render(){
  return (
    <div style={{
      backgroundColor: 'white' ,
      //backgroundPosition : 'center',
      backgroundRepeat : "no-repeat",
      backgroundAttachment : "fixed",
      backgroundPosition : 'sticky',
      backgroundSize :"100% 100%",
      backgroundColor :'black',
      color:'white',
      
      }}>
    
      <Container>
      <Routes>
          <Route path="/" exact element={<FirstPage />}/>
          <Route path="/main" exact element={<Main />}/>
          <Route path="/search" exact element={<SeachPage />}/>
          <Route path="/cocktails/" exact element={<Cocktails/>}/> 
          <Route path="/search/:idDrink" exact element={<SelectedCocktail />}/>
          <Route element={NotFound} />

          </Routes>
        <Footer></Footer>

      </Container>
    </div>
  );
  }
  }
