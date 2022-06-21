import React from 'react';
import './MenuHorizontal.css';
import { Link } from 'react-router-dom';

export default function MenuHorizontal() {
  return (
    <div className='menuHorizontal'>
      <button type='button' id='btnAutores' className='btn btn-secondary'>Autores</button>
      <button type='button' id='btnEditoras' className='btn btn-success'>Editoras</button>
      <button type='button' id='btnLivros' className='btn btn-danger'>Livros</button>
      <button type='button' id='btnUsuarios' className='btn btn-warning'>Usuários</button>
      <button type='button' id='btnConfig' className='btn btn-info'>Configurações</button>

      <nav className='navMenu'>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/autores">Autores</Link>
          </li>
          <li>
            <Link to="/editoras">Editoras</Link>
          </li>
          <li>
            <Link to="/livros">Livros</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuários</Link>
          </li>
          <li>
            <Link to="/config">Configurações</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}