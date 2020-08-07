import React from'react'
import { Link } from 'react-router-dom'
import './style.css'


import backIcon from '../../assests/images/icons/back.svg'
import logoImg from '../../assests/images/logo.svg'

interface PageHeaderProps{
    title:string;
    description ? :string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps>=(props)=>{
        return(
            <div>
                <header className="page-header">
                    <div className="top-bar-container">
                        <Link to="/">
                            <img src={backIcon} alt="voltar" />
                        </Link>
                            <img src={logoImg} alt="Proffy" />
                    </div>

                    <div className="header-content">
                        <strong>
                            {props.title}
                        </strong>
                        {props.description && <p>{props.description}</p>}
                        {props.children}
                    </div>

                </header>
            </div>
        );
    }
export default PageHeader