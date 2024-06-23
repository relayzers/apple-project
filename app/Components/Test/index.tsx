'use client'

import { Button } from '@mui/material';
import React, { useState } from 'react';

const Test = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <h1><img src="/Home/searchlogo.svg" alt="" /></h1>
      <button onMouseEnter={handleClick}>{menuOpen ? "" : <img src="/Home/searchlogo.svg" alt="" className='bg-red-500 p-5' />}</button>
      {menuOpen && <Menu />}
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <input type="text" name="" />
      <Button>Axtar</Button>
    </div>
  );
};

export default Test;

