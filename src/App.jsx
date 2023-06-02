import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import imgMission from './assets/galeria/mission.png'
import imgValue from './assets/galeria/valor.png'
import imgVision from './assets/galeria/shared-vision.png'
import imgPessoal from './assets/galeria/pessoal.jpg'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header/>

        <section className="concepts">
          <div className="concepts-wrapper">
            <div className="concepts-title">
              <h1>Filie-se</h1>
              <p>Seja um associado do CEUCAB/RS;</p>
            </div>
            <div className="concepts-container">
              <div className="concepts-card">
                <div className="concepts-card-icons">
                  <img src={imgMission} alt="" />
                  <span>Missão</span>
                </div>
                <p> Levar orientação aos seus filiados e divulgar a nossa raiz
                  religiosa e a nossa bagagem cultural à sociedade brasileira.</p>
              </div>
              <div className="concepts-card vision">
                <div className="concepts-card-icons">
                  <img src={imgVision} alt="" />
                  <span>Visão</span>
                </div>
                <p> Ser referência de instituição religiosa que prega a igualdade e a
                  fraternidade entre os valores humanos, consolidando posição destacada de
                  respeito e credibilidade, perante a sociedade, mantendo participação na
                  religiosidade que promova a vida com amor, verdade, justiça e paz,
                  destacando a educação orientada na formação sacerdotal.
                </p>
              </div>
              <div className="concepts-card">
                <div className="concepts-card-icons">
                  <img src={imgValue} alt="" />
                  <span>Valores</span>
                </div>
                <p> Respeito à natureza, que é nosso altar; desenvolvimento
                  integral de corpo, mente e espírito; coerência religiosa e responsabilidade
                  social via solidariedade, altruísmo e voluntariado.
                </p>
              </div>
            </div>

            <div className="concepts-filial-container">
              <div className="concepts-filial-title">
                <h1>O CEUCAB/RS oferece: </h1>
              </div>

              <div className="concepts-filial">
                <div className="concepts-filial-text">
                  <p> Garanta o direito de seu sacerdócio numa federação com mais de meio
                    século de existência. Cujo nosso objetivo é fomentar no ambiente religioso,
                    a garantia de exercer com êxito e excelência o sacerdócio, levando
                    orientação e conhecimento à reflexão crítica da sociedade.
                  </p>
                </div>
                <div className="concepts-filial-list">

                  <ul>
                    <li><span><i className="fas fa-caret-right"></i>Certificação de regulamentação</span></li>
                    <li><span><i className="fas fa-caret-right"></i>Justificação de regulamentação</span></li>
                    <li><span><i className="fas fa-caret-right"></i>Carteirinha de associado</span></li>
                    <li><span><i className="fas fa-caret-right"></i>Assessoria jurídica</span></li>
                    <li><span><i className="fas fa-caret-right"></i>Descontos em convênios.</span></li>
                  </ul>
                </div>

              </div>
              <div className="concepts-requierements">
                <h2>Documentação necessária:</h2>
                <ul />
                <li><span><i className="fas fa-caret-right"></i>2 foto 3x4;</span></li>
                <li><span><i className="fas fa-caret-right"></i>RG e CPF do Sacerdote/Babalorixá;</span></li>
                <li><span><i className="fas fa-caret-right"></i>Comprovante de residência;</span></li>
                <li><span><i className="fas fa-caret-right"></i>Taxa de filiação para fins de inscrição;</span></li>
              </div>
            </div>
          </div>
        </section>
        <section className="location">
          <h1>Visite-nos</h1>
        </section>

        <section className="about">
          <div className="about-wrapper">
            <div className="about-title">
              <h1>Sobre nós</h1>
            </div>
            <div className="about-container">
              <div className="about-content">

                <div className="about-img">
                  <img src={imgPessoal} alt="" />
                </div>

                <div className="about-text">
                  <p>O CEUCAB/RS é uma associação religiosa, sucessora da União de
                    Umbanda fundada em 1953, sem fins lucrativos, administrada unicamente
                    por sacerdotes, congregando os interesses de seus filiados, dos praticantes,
                    frequentadores e simpatizantes da Umbanda, das Religiões Afro Brasileiras
                    e das Religiões de Matriz Africana.
                    A união em torno do CEUCAB/RS possibilita um resultado melhor,
                    originando acordos e regras para que todos trabalhem focados em um
                    mesmo objetivo, onde disciplina não é apenas obediência, é um ideal
                    planejado que requer comprometimento e competência. O CEUCAB/RS
                    SOMOS NÓS. O agir ou não agir de cada um de nós é o que consolida e/ou
                    transforma. É fruto do nosso sentimento, cumplicidade e expectativa de
                    mudanças da nossa realidade pela transformação espiritual.
                    E com o lema: “A NATURAZA É NOSSO ALTAR” nós convidamos você a
                    fazer parte integrante desse legado, sempre com a força e proteção de
                    nossos Orixás e Guias Protetores, formando assim o reconhecimento de
                    uma associação religiosa, séria e competente com décadas de existência
                    em todo o Estado do Rio Grande do Sul. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
