import React from 'react';
import styled from 'styled-components';
import { BsCaretDownFill } from "react-icons/bs";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 4px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  font-family: "Noto Sans";
  font-size: 16px;
  color: #1B1B1B;
  cursor: pointer;
  
  &:hover {
    background: #F2F2F2;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #E5E5E5;
  }
`;

const SelectButton = styled.button`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.selected ? '#1B1B1B' : '#7F7F7F'};
  box-sizing: border-box;
  cursor: pointer;

  .svg{
    width: 20px;
    height: 30px;
    color: #3A00F9;
  }
  
  &:focus {
    outline: none;
    border-color: #3A00F9;
  }
`;

export const Dropdown = ({ 
  isOpen, 
  onToggle, 
  selected, 
  options, 
  onSelect, 
  placeholder 
}) => {
  return (
    <DropdownContainer>
      <SelectButton 
        onClick={onToggle}
        selected={selected}
      >
        {selected ? selected.title : placeholder}
        <BsCaretDownFill color='#3A00F9'/>
      </SelectButton>
      
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option.id}
              onClick={() => onSelect(option)}
            >
              {option.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};