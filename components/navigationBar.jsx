/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import goal from '../images/icons/goal.png';
import graphic from '../images/icons/graphic.png';
import agreement from '../images/icons/agreement.png';
import dataLogo from '../images/icons/code.png';



const NavigationBar = () => (
  <>
    <header>
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">
              <a>
                <i><img src={goal} alt="goal"/></i>
                Objetivos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/organizations">
              <a>
                <i><img src={agreement} alt="agreement"/></i>
                ONGs
              </a>
            </Link>
          </li>
          <li>
            <Link href="/latin-code-week">
              <a>
              <i><img src={dataLogo} alt="data logo"/></i>
                Latin Code Week
              </a>
            </Link>
          </li>
          <li>
            <Link href="/graphics">
              <a>
                <i><img src={graphic} alt="graphic"/></i>
                Gráficas
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <style jsx>{`
      header {
        width: 100%;
        position: fixed;
        z-index: 100;
        color: #fff;
        background: #04A7E7;
        padding:  15px 0px 10px 0px ;
        text-align: center;
      }
      .menu ul {
        display:flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
        padding:  10px 0 0 0;
      }
      .menu ul li {
        display: inline-block;
        font-size: 14px;
        margin: 5px;
        cursor: pointer;
      }
      .menu a {
        display: block;
        color: #fff;
        text-decoration: none;
      }
      .menu i {
        display: block;
      }
      
      i img {
        width: 40px;  
        height: 40px;
      }
        
    `}</style>
  </>
);

export default NavigationBar;
