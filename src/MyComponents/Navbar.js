import React from 'react'
import "./navbar.css"

export const Navbar = () => {

    return (
        <div className="nav-demo">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a style={{ color: "white" }} className="nav-link" href="https://github.com/vishwajit247"><i class="bi bi-github"></i></a>
                </li>
                <li className="nav-item">
                    <a style={{ color: "white" }} className="nav-link" href="https://www.linkedin.com/in/vishwajitkhanna247/"><i class="bi bi-linkedin"></i></a>
                </li>
                <li className="nav-item">
                    <a style={{ color: "white" }} className="nav-link" href="https://www.facebook.com/vishwajit.khanna"><i class="bi bi-facebook"></i></a>
                </li>
                <li className="nav-item">
                    <a style={{ color: "white" }} className="nav-link" href="https://www.instagram.com/vishwajit_khanna/"><i class="bi bi-instagram"></i></a>
                </li>
                <li className="nav-item">
                    <a style={{ color: "white" }} className="nav-link" href="https://twitter.com/Vishwajitkhanna"><i class="bi bi-twitter"></i></a>
                </li>
            </ul>
        </div>
    )
}