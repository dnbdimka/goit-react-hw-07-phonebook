import React from "react";
import { connect } from "react-redux";
import { filteredContacts } from "../../redux/contacts/contactsActions";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ onFilterInput }) => {
  const onFilterInputChange = (e) => {
    const { value } = e.target;

    onFilterInput(value);
  };

  return (
    <>
      <FilterStyled>
        <div className="filter-box">
          <input id="filterInput" type="text" onChange={onFilterInputChange} />
          <label htmlFor="filterInput">Find contacts by name</label>
        </div>
      </FilterStyled>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFilterInput: (query) => dispatch(filteredContacts(query)),
});

export default connect(null, mapDispatchToProps)(Filter);
