import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropDownContainer = styled('div')`
  width: 10.5em;
  position: relative;
`;

const DropDownHeader = styled('div')`
  margin: 0.8em 0;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: #fff;
  color: #e50914;
  background: #1d1d1d;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const DropDownListContainer = styled('div')`
  position: absolute;
  top: 60px;
  z-index: 10;
  width: 100%;
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding: 1em;
  background: #000;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  margin: 0 -1em;
  padding: 0.8em;
`;

const filterCategories = ['All', 'Trending', 'Male', 'Female', 'Non-Binary'];

export default function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  const { filterHandler } = props;

  const handleFilterChange = (selectedOption) => {
    filterHandler(selectedOption);
  };
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (e) => {
    setSelectedOption(e.target.textContent);
    handleFilterChange(e.target.textContent);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <p>{selectedOption || 'All'}</p>
        {(isOpen && <i className="las la-angle-up" />)
           || <i className="las la-angle-down" />}
      </DropDownHeader>
      {isOpen && (
      <DropDownListContainer>
        <DropDownList>
          {filterCategories.map((option) => (
            <ListItem onClick={onOptionClicked} key={Math.random()}>
              {option}
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

DropDown.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};
