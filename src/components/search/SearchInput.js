import React from 'react';
import {InputGroup,Button,Input} from "reactstrap"

const SearchInput =props=>(
    <form onSubmit={props.getDrink} style={{marginBottom:"2rem"}}>
        <InputGroup>
        <InputGroup addonType="prepend"><Button className="searchBar__input">Search</Button></InputGroup>
        <Input className="searchBar__input" type="text" name="drinkName" />
        </InputGroup>
        
    </form>
)

export default SearchInput;