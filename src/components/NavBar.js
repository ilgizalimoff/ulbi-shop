import React, { useContext } from 'react'
import { Context } from '..'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    let navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink
                    style={{ color: 'white' }}
                    to={SHOP_ROUTE}>КупиДевайс
                </NavLink>
                
                {user.isAuth
                    ?
                    <Nav className="ml-auto"
                        style={{ color: 'white' }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(ADMIN_ROUTE)}>
                            Админ панель
                        </Button>
                        <Button
                            variant={'outline-light'}
                            style={{ marginLeft: '5px' }}
                            onClick={() => logOut()}>
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button onClick={() => navigate(LOGIN_ROUTE)}
                            variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar