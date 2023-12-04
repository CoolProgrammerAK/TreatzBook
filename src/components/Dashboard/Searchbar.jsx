import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import symptoms from '../../assets/symptoms'
import items from '../../assets/symptoms'
import { connect } from "react-redux";
import { getDoctorsBySearch } from '../../redux/actions/doctor';

const Searchbar=({getDoctorsBySearch})=> {
    // console.log(symptoms)
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // getDoctorsBySearch(string)
      }
    const handleOnSelect = (item) => {
        // the item selected
       getDoctorsBySearch(item.name)
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span >{item.name}</span>
          </>
        )
      }

  return (
    <div style={{margin:"25px 0px"}}>
        <div style={{width:'50%',margin:'0px auto'}}>

       
        <ReactSearchAutocomplete
           placeholder='Find your doctor'
          items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
    </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
    doctors: state.doctors,
  });
export default connect(mapStateToProps,{getDoctorsBySearch})(Searchbar)
