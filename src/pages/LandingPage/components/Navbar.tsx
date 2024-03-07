

import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo.webp';

const StyledNavbar = styled.nav`
    background-color: #1a1a1a;
    height: 10vh;
    border-top: 3px #ad6e10 solid;
    .badge{
        background-color: #ad6e10;
    }
`

const StyledButton = styled.button`
    padding: 20px;
    background-color: inherit;
    border: 1px solid #ad6e10;
    color: #ad6e10;
    text-transform: uppercase;
    border-radius: 20px;
`


function NavbarComponent() {
    return (
        <StyledNavbar className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img src={logo} height="70" alt="MDB Logo" loading="lazy" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><StyledButton>Página Inicial</StyledButton></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><StyledButton>Cardápio</StyledButton></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><StyledButton>Sobre Nós</StyledButton></a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <a className="link-secondary me-3" href="#">
                        <i className="fas fa-shopping-cart"></i>
                    </a>

                    <div className="dropdown">
                        <a className="link-secondary me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false" data-mdb-dropdown-initialized="true">
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification">1</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false" data-mdb-dropdown-initialized="true">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledNavbar>
    )
}

export default NavbarComponent;