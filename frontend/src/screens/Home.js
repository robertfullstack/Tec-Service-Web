import React from "react";
import '../styles/Home.scss';
import { FaTools, FaMobileAlt, FaSyncAlt, FaShoppingCart, FaEnvelope, FaStar } from 'react-icons/fa';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-welcome">
        <div className="home-welcome-left-text">
          <h2>Bem-vindo à</h2>
          <h1>TecService</h1>
          {/* <span>Sua solução para consertos e assistência técnica de dispositivos móveis.</span> */}
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ut excepturi odit officiis! Officiis quos obcaecati sapiente, beatae minima alias, delectus non a nulla consequuntur, voluptas aspernatur facilis aperiam magni labore assumenda.</span>
          <a href="">Saiba mais</a>
        </div>
        <div className="home-welcome-right-image">
          {/* <img src="https://img.freepik.com/free-vector/wavy-background-with-copy-space_52683-65230.jpg?t=st=1724707794~exp=1724711394~hmac=4b02b27bd9016a7e666aad9bd2b2730f9560f35a099e44e4b2b2356af77358b5&w=900" alt="" className="bg-image-home"/> */}
          <img src="/product-teardown-concept-illustration (1).png" alt="Smartphone" />
        </div>
      </div>

      <section className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-list">
          <div className="service-item">
            <FaTools className="service-icon" />
            <h3>Agendamento de Consertos</h3>
            <p>Agende consertos para dispositivos móveis de forma rápida e prática.</p>
          </div>
          <div className="service-item">
            <FaMobileAlt className="service-icon" />
            <h3>Troca de Tela</h3>
            <p>Especialistas em troca de tela para smartphones e tablets.</p>
          </div>
          <div className="service-item">
            <FaSyncAlt className="service-icon" />
            <h3>Atualização de Software</h3>
            <p>Atualize seu sistema operacional para a versão mais recente.</p>
          </div>
          <div className="service-item">
            <FaShoppingCart className="service-icon" />
            <h3>Compra de Peças</h3>
            <p>Compre peças de reposição originais e de alta qualidade.</p>
          </div>
        </div>
      </section>



      <section className="testimonials-section">
        <h2>Depoimentos de Clientes</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <h4>João Silva</h4>
            <p>"Serviço excelente! Meu celular voltou a funcionar como novo. Recomendo a TecService a todos."</p>
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="testimonial-item">
            <h4>Maria Oliveira</h4>
            <p>"Atendimento rápido e eficiente. Consegui agendar o conserto no mesmo dia. Muito satisfeita!"</p>
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="testimonial-item">
            <h4>Pedro Santos</h4>
            <p>"Peças de alta qualidade e preços justos. A TecService é a melhor assistência técnica que já usei."</p>
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
