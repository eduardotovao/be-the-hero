import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatapp, setWhatapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handlerRegister(e) {
        e.preventDefault();

        const data = ({
            name,
            email,
            whatapp,
            city,
            uf
        });

        try {
            const response = await api.post('ongs', data);

            history.push('/');

            alert(`Seu ID de acesso: ${response.data.id}`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre a plataforma e ajude pessoas a encontrare os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handlerRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        placeholder="WhatApp"
                        value={whatapp}
                        onChange={e => setWhatapp(e.target.value)}
                        required
                    />

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            required
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}