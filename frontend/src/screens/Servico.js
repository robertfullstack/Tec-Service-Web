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
            <h1 className="produto-title">Nossos Produtos</h1>
            <div className="produto-list">
                <div className="produto-item">
                    <h2>Computadores</h2>
                    <p>Computadores desktop e laptops de alta performance.</p>
                    <button className="ver-produto-btn">Ver Produto</button>
                </div>
                <div className="produto-item">
                    <h2>Roteadores</h2>
                    <p>Roteadores de última geração para melhor conectividade.</p>
                    <button className="ver-produto-btn">Ver Produto</button>
                </div>
                <div className="produto-item">
                    <h2>Softwares</h2>
                    <p>Softwares originais e licenciados para diversas necessidades.</p>
                    <button className="ver-produto-btn">Ver Produto</button>
                </div>
            </div>



            <div className="servico-content">
                <div className="servico-image">
                    <img src="https://clickcel.com.br/images/conserto-carcaa.jpg" alt="Conserto de celular" />
                </div>
                <div className="servico-text">
                    <h1>Conserto de celular São Paulo</h1>
                    <p>A Novo Smart conta com equipe de profissionais com experiência e aptidão para consertar xiaomi, iphone, motorola, LG, Asus e samsung.</p>
                    <p>Temos uma estrutura completa para quem busca consertos de celulares em todo Brasil.</p>
                    <p>Arrume seu celular, tablet e smartwatch no mesmo dia! Tenha total garantia de serviço e <span className="highlight">privacidade</span>.</p>
                    <p>Sabia que qualidade e segurança são fatores importantes para nós? Sim, independentemente do modelo de seu smartphone.</p>
                    <button className="contact-btn">Fale Conosco agora!</button>
                </div>
            </div>
        </div>

        
    );
}

export default Servico;
