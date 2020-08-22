import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';


import {
  Wrapper
} from './styles';

interface IProps { children: ReactNode; }

const MainTemplate = ({ children }: IProps) => {
  return (
    <Wrapper>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/samples'>Sample</Link>
      </div>
      { children }
    </Wrapper>
  );
};

export default MainTemplate;
