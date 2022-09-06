import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '../../layout'
import logo from "../../images/logo.svg"
import telegramIcon from "../../images/telegram.svg"
import whatsappIcon from "../../images/whatsapp.svg"
import classes from "../Nav/Nav.module.scss"

const Nav = () => {
    return (
        <Container>
            <div className={classes["nav"]}>
                <img src={logo} className={classes["nav__logo"]} alt="" />
                <div className={classes["nav__right"]}>
                    <div className={classes["nav__right-phone"]}>
                        <img src={whatsappIcon} alt="" />
                        <img src={telegramIcon} alt="" />
                        <a className={classes["nav__right-link"]} href="#!">8 (917) 287-01-54</a>
                    </div>
                    <a className={classes["nav__right-btn"]} href="#!">Заказать звонок</a>
                </div>
            </div>
        </Container>
    )
}

export default Nav