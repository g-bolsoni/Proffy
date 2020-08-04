import React from 'react'
import whatsappIcon from '../../assests/images/icons/whatsapp.svg'
import './style.css'


function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img alt="Foto do github" src="https://avatars2.githubusercontent.com/u/67272621?s=460&u=3726c346378e402d184fa16f588efd12fcd35a0d&v=4"/>
                <div>
                    <strong>Professor</strong>
                    <span>Materia</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada. 
            <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>    
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type='button'>
                <img src={whatsappIcon} alt="img do whats" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}
export default TeacherItem