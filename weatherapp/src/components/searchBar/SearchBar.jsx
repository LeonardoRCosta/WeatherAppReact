import React from 'react';
import { Search } from '../../style/styled';
import { SearchIcon } from '../../style/styled';
import { SearchDiv } from '../../style/styled';
export default function SearchBar() {
  return (
    <SearchDiv className="searchDiv">
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
      <Search type="text" placeholder="Pesquise uma cidade..." />
    </SearchDiv>
  );
}
