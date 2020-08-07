import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import logoImg from '../../assests/images/logo.svg'
import landingImg from '../../assests/images/landing.svg'
import api from '../../services/api'

import studyIcon from '../../assests/images/icons/study.svg'
import giveClassesIcon from '../../assests/images/icons/give-classes.svg'
import purpleHeratIcon from '../../assests/images/icons/purple-heart.svg'

import './styles.css'



function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    useEffect(()=>{
        api.get('connections').then(res => {
            const {total}= res.data;
            setTotalConnections(total); 
        })
    },[])
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
                        total de {totalConnections} conexoes ja realizadas <img src={purpleHeratIcon} alt="coração roxo"></img>
                    </span>
                </div>
            </div>
        );
    
}
export default Landing;