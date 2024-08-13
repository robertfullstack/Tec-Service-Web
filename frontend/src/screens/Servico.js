import React from "react";
import '../styles/Servico.scss';

function Servico() {
    return (
        <div className="servico-container">
            <h1 className="servico-title">Nossos Serviços</h1>
            <div className="servico-list">
                <div className="servico-item">
                    <h2>Reparo de Computadores</h2>
                    <p>Diagnóstico e reparo para computadores desktop e laptops.</p>
                    <button className="solicitar-servico-btn">Solicitar Serviço</button>
                </div>
                <div className="servico-item">
                    <h2>Manutenção de Redes</h2>
                    <p>Configuração e manutenção de redes para empresas e residências.</p>
                    <button className="solicitar-servico-btn">Solicitar Serviço</button>
                </div>
                <div className="servico-item">
                    <h2>Instalação de Softwares</h2>
                    <p>Instalação e configuração de sistemas operacionais e softwares.</p>
                    <button className="solicitar-servico-btn">Solicitar Serviço</button>
                </div>
            </div>
        </div>
    );
}

export default Servico;
