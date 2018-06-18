import React from "react";
import styled from "styled-components";
import search from "./search.svg";

const Search = styled.form`
  position: relative;
`;

const SearchField = styled.input`
  border-radius: 100px;
  border: 1px solid #e6ecf0;
  background-color: #f5f8fa;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 9px;
  padding-bottom: 8px;
  min-width: 220px;
  font-weight: normal;
  line-height: 14px;
  font-size: 12px;

  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;

const SearchBtn = styled.button`
  background-image: url(${search});
  position: absolute;
  height: 19px;
  width: 19px;
  background-color: #f5f8fa;
  background-position: center;
  background-repeat: no-repeat;
  border-color: transparent;
  right: 10px;
  top: 6px;
`;

export default () => {
  return (
    <Search action="/search">
      <SearchField type="text" id="search-input" placeholder="Search Twitter" />
      <SearchBtn />
    </Search>
  );
};
