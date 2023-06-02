import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

export function Header (){
   return( 
   <>
   <header className="header">
          <nav className="menu">
            <ul>
              <li><a href="">Sobre nós</a></li>
              <li><a href="">Contato</a></li>
              <li><a href="">Visite-nos</a></li>
              <li><a href="">Filie-se</a></li>
              <li><a href=""><FontAwesomeIcon icon={faSquareWhatsapp}></FontAwesomeIcon></a></li>
              <li><a href=""><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
            </ul>
          </nav>
          <div className="text">
            <div className="text-icon">

              <span className="destaque">
                <h2><strong>CEUCAB-RS</strong></h2>
              </span>
              <h2 className="text-h1">Conselho estadual da umbanda <br /> e dos <br /> cultos afro-brasileiros do Rio grande
                do sul</h2>

              <h1>"A NATUREZA É NOSSO ALTAR"</h1>

            </div>


          </div>
       </header>
 </>
   )
}