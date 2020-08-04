import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import logoImg from '../../assests/images/logo.svg'
import landingImg from '../../assests/images/landing.svg'


import studyIcon from '../../assests/images/icons/study.svg'
import giveClassesIcon from '../../assests/images/icons/give-classes.svg'
import purpleHeratIcon from '../../assests/images/icons/purple-heart.svg'

import './styles.css'



class Landing extends Component{
    render(){
        return( 
            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt=""/>
                        <h2>Sua plataforma de estudos online</h2>

                    </div>
                    
                    <img src={landingImg} alt="Plataforma de Estudos"className="hero-image"/>

                    <div className="buttons-container">
                        <Link to="/study" className="study" >
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </Link>
                        <Link to="give-classes" className="give-classes" >
                            <img src={giveClassesIcon} alt="Dar Aulas"/>
                            Dar aulas
                        </Link>
                    </div>

                    <span className="total-connections">
                        total de 200 conexoes ja realizadas <img src={purpleHeratIcon} alt="coração roxo"></img>
                    </span>
                </div>
            </div>
        );
    }
}
export default Landing;