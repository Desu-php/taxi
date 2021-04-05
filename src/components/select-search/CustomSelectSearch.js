import React from "react";
import SelectSearch from "react-select-search";
import './CustomSelectSearch.css'

export default function CustomSelectSearch({placeholder}){

    return(
        <>
            <SelectSearch
                options={[]}
                getOptions={(query) => {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
                            .then(response => response.json())
                            .then(({ drinks }) => {
                                if (!drinks){
                                    return false
                                }
                                resolve(drinks.map(({ idDrink, strDrink }) => ({ value: idDrink, name: strDrink })))
                            })
                            .catch(reject);
                    });
                }}
                search
                placeholder={placeholder}
            />
        </>
    )
}