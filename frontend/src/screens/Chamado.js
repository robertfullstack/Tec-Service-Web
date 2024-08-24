import React, { useState } from 'react';
import { database, ref, set } from '../screens/firebase'; // Importar apenas o necessário
import '../styles/Chamado.scss';

export const Chamado = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [desiredDate, setDesiredDate] = useState('');
    const [preferredTechnician, setPreferredTechnician] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gerar um ID único para o novo chamado
        const newChamadoRef = ref(database, 'Chamados/' + Date.now());

        // Salvar os dados no Firebase
        set(newChamadoRef, {
            name,
            phone,
            serviceType,
            desiredDate,
            preferredTechnician,
            image: image ? image.name : '' // Caso a imagem seja opcional
        });

        // Limpar os campos após o envio, se desejado
        setName('');
        setPhone('');
        setServiceType('');
        setDesiredDate('');
        setPreferredTechnician('');
        setImage(null);
    };

    return (
        <div className="chamado-container">
            <h1>Faça o seu chamado</h1>
            <form onSubmit={handleSubmit} className="chamado-form">
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="phone">Número de Telefone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <label htmlFor="serviceType">Tipo de Serviço:</label>
                    <select
                        id="serviceType"
                        className='service-type'
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                    >
                        <option value="">Selecione um serviço</option>
                        <option value="Reparo de Computadores">Reparo de computadores</option>
                        <option value="Reparo de Computadores">Reparo de dispositivos móveis</option>
                        <option value="Manutenção de Redes">Manutenção de redes</option>
                        <option value="Instalação de Softwares">Instalação de softwares</option>
                    </select>
                    <label htmlFor="desiredDate">Data Pretendida Para Resolução do Problema:</label>
                    <input
                        type="date"
                        id="desiredDate"
                        value={desiredDate}
                        onChange={(e) => setDesiredDate(e.target.value)}
                        required
                    />
                    <label htmlFor="preferredTechnician">Preferência Por Técnico (Não obrigatório):</label>
                    <input
                        type="text"
                        id="preferredTechnician"
                        value={preferredTechnician}
                        onChange={(e) => setPreferredTechnician(e.target.value)}
                    />
                    <label htmlFor="image">Imagem:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
};

export default Chamado;
