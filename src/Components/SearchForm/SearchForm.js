import React from 'react';
import './SearchForm.scss'



const SearchForm = () => {
    return (
        
        <form className='searchform'>
            <select name="insurance" className="searchform__dropdown" >
                <option disabled selected>your insurance plan</option>
                <option value="1">SELECTION 1</option>
                <option value="2">SELECTION 2</option>
                <option value="2">SELECTION 3</option>
            </select>

            <input placeholder='zip code (5-digit)' className='searchform__zipcode'></input>

            <select name="" className="searchform__dropdown">
                <option disabled selected>Type of visit</option>
                <option value="1">SELECTION 1</option>
                <option value="2">SELECTION 2</option>
                <option value="2">SELECTION 3</option>
            </select>

            <button className="searchform__btn">SEARCH</button>
        </form>
    );
};

export default SearchForm;