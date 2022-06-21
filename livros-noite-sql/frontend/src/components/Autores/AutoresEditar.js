import React from "react";
import Cabecalho from '../Cabecalho/Cabecalho'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal'

import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import api from "../../service/api";

import './AutoresEditar.css'

export default function AutoresEditar() {
    const navigate = useNavigate()
    // const history = useHistory()
    const [codigo, setCodigo] = useState(0)
    const [nome, setNome] = useState('')
    const [ativoInativo, setAtivo] = useState('')
    const [apelido, setApelido] = useState('')
    const [sexo, setSexo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const { idAutor } = useParams()


    useEffect(() => {
        async function getAutores() {
            console.log('Autor: ' + idAutor)
            if (idAutor == 0) {
                console.log('Inclusão de registro')
            }
            else {
                const { data } = await api.get('/autores/' + idAutor)
                console.log("Retorno editar: " + data)

                setCodigo(data[0].aut_codigo)
                setNome(data[0].aut_nome)
                setAtivo(data[0].aut_ativoinativo)
                setApelido(data[0].aut_apelido)
                setSexo(data[0].aut_sexo)
                setTelefone(data[0].aut_telefone)
                setEmail(data[0].aut_email)
            }
        }
        getAutores()
    }, [])

    async function handleAutores(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        console.log("Dados form: Código:  " + data.aut_codigo + " -- Nome: " + data.aut_nome)

        try {
            if (nome.length === 0) {
                alert('Nome vazio!')
            }
            else {
                if (idAutor == 0) {
                    await api.post('autores', data)
                }
                else {
                    await api.put('/autores/' + idAutor, data)
                }
                navigate('/autores')

            }
        }
        catch (error) {
            alert('Erro ao gravar.... Verifique')
        }
    }
    return (
        <div>
            <section className="SectionTable">
                <form className="form--autor" onSubmit={handleAutores}>
                    {/* Código do autor */}
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>Código</label>
                            <input type='text' className="form-control"
                                name="aut_codigo" value={codigo} onChange={e => setCodigo(e.target.value)} readOnly>
                            </input>
                        </div>
                    </div>

                    {/* Nome do autor */}
                    <div className="form-row">
                        <div className="col-md-7 offset-md-1">
                            <label>Nome do Autor</label>
                            <input type='text' className="form-control"
                                name="aut_nome" value={nome} onChange={e => setNome(e.target.value)} maxLength='20'>
                            </input>
                        </div>
                    </div>

                    {/* Ativo - Inativo */}
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>Aitvo/Inativo</label>
                            <input type='text' className="form-control"
                                name="aut_ativoinativo" value={ativoInativo} onChange={e => setAtivo(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    {/* Apelido do autor */}
                    <div className="form-row">
                        <div className="col-md-3 offset-md-1">
                            <label>Apelido</label>
                            <input type='text' className="form-control"
                                name="aut_apelido" value={apelido} onChange={e => setApelido(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    {/* Sexo do autor */}
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>Sexo do Autor</label>
                            <input type='text' className="form-control"
                                name="aut_sexo" value={sexo} onChange={e => setSexo(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    {/* Telefone do autor */}
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>Telefone do Autor</label>
                            <input type='text' className="form-control"
                                name="aut_telefone" value={telefone} onChange={e => setTelefone(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    {/* Email do autor */}
                    <div className="form-row">
                        <div className="col-md-5 offset-md-1">
                            <label>Email do Autor</label>
                            <input type='text' className="form-control"
                                name="aut_email" value={email} onChange={e => setEmail(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div>
                        <button id="btnSalvar" type="onSubmit" className="btn btn-success btn-block">Salvar</button>
                        <button type="button" id="btnVoltar" onClick={() => navigate('/autores')} className='btn btn-secondary'>Voltar</button>
                    </div>
                </form>
            </section>
        </div>
    )
}