import React from 'react'
import Container from '../../layout'
import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div className={classes["header"]}>
            <Container>
                <div className={classes["header__inner"]}>
                    <h1 className={classes["header__title"]}>Создаем дизайн-проекты для жизни
                        в комфорте и красоте!
                    </h1>
                    <p className={classes["header__text"]}>
                        от 300 руб/м2
                    </p>
                    <p className={classes["header__subtitle"]}>
                        от 300 руб/м2
                    </p>
                    <button className={classes["header__btn"]}>Записаться на консультацию</button>
                </div>
            </Container>
        </div>
    )
}

export default Header