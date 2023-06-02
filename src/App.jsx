import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { FilieSe } from './components/FilieSe'

import imgPessoal from './assets/galeria/pessoal.jpg'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header/>
      <FilieSe/>
        
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
