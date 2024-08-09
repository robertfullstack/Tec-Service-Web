import axios from 'axios';
import { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/register', 
                JSON.stringify({ name, email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            setSuccess('Usuário cadastrado com sucesso!');
            setError('');
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 400) {
                setError('E-mail já registrado');
            }
        }
    };

    return (
        <div className="register-form-wrap">
            <h2>Cadastro</h2>
            <form className='register-form'>
                <input type="text" 
                        name="name" 
                        placeholder="Nome" 
                        required
                        onChange={(e) => setName(e.target.value)}
                        />
                <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                <input type="password" 
                        name="password" 
                        placeholder="Senha" 
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                <input type="password" 
                        name="confirmPassword" 
                        placeholder="Confirmar Senha" 
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" 
                        className='btn-register'
                        onClick={(e) => handleRegister(e)}>Cadastrar</button>
            </form>
            <p>{error}</p>
            <p>{success}</p>
        </div>
    );
}

export default Register;
