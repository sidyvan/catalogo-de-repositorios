import React from 'react';
import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';

import {FiChevronRight} from 'react-icons/fi'


export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios</Title>
      <Form>

        <input placeholder='username/repository_name' />
        <button type='submit'>Buscar</button>
      </Form>
      <Repos>
          <a href='/repositories'>
            <img src='https://avatars.githubusercontent.com/u/24855486?v=4' alt='Repositorio' />
            <div>
              <strong>repositorio/sidyvan</strong>
              <p>Repositorio do Sidyvan</p>

            </div>
            <FiChevronRight size={20}/>
          </a>
      </Repos>
    </>
   );
};




