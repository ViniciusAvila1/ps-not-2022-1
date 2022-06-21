import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../service/api'

import './Autores.css'

export default function Autores() {
  const [autores, setAutores] = useState([])

  useEffect(() => {
    api.get("autores")
      .then(response => setAutores(response.data))
  }, [])
  return (
    <>
      <legend id='legenda'>Registros de Autores</legend>
      <table border="1" className='table table-responsive'>
        <thead>
          <tr id='titulo'>
            <th id='t_codigo'>Código</th>
            <th id='t_ativo'>A/I</th>
            <th id='t_nome'>Nome do Autor</th>
            <th id='t_apelido'>Apelido</th>
            <th id='t_sexo'>Sexo</th>
            <th id='t_telefone'>Telefone</th>
            <th id='t_email'>E-mail</th>
            <th id='novo' scope="col"> <a href={'/autores/0'} className='btn btn-success btn-clock'>Novo Autor</a></th>

            <th></th>
          </tr>
        </thead>
        <br></br>
        <tbody className='tabela'>
          {autores.map((item, i) => {
            return (
              <>
                <tr>
                  <td id='p_codigo'>{item.aut_codigo}</td>
                  <td id='p_ativo'>{item.aut_ativoinativo}</td>
                  <td id='p_nome'>{item.aut_nome}</td>
                  <td id='p_apelido'>{item.aut_apelido}</td>
                  <td id='p_sexo'>{item.aut_sexo}</td>
                  <td id='p_telefone'>{item.aut_telefone}</td>
                  <td id='p_email'>{item.aut_email}</td>

                  <td id='editar'> <a className='btn btn-primary btn-block' href={'/autores/' + item.aut_codigo}>Editar</a></td>
                  <td id='ativar'> <a className='btn btn-danger btn-block'>Ativar/Inativar</a></td>
                  <td />
                </tr>
              </>
            )
          })}
        </tbody>
        <tfoot>
          <tr id='registros'>
            <td>Total de registros: {autores.length}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}