import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const StyledAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 120px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 37px 50px 0px #000000a0;

  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.515);

  .logo-wrapper {
    width: 200px;
    height: 100px;
    position: relative;
  }

  .nav-and-button-div {
    display: flex;
    align-items: center;
    column-gap: 80px;

    nav {
      ul {
        display: flex;
        list-style-type: none;
        column-gap: 30px;

        li {
          a {
            font-family: "Garet";
            color: white;
            font-weight: 600;
            transition: color 0.3s ease;

            &:hover {
              color: #85b095;
            }
          }
        }
      }
    }

    .search-button {
      width: 18px;
      height: 18px;
      background-color: transparent;
      background-image: url("/magnifying-glass-solid.svg");
      background-size: contain;
      border: none;
      cursor: pointer;
    }
  }

  .mobile-menu-button {
    display: none;
  }

  @media (max-width: 1000px) {
    padding-inline: 20px;
    position: sticky;
    justify-content: center;
    background-color: black;

    .search-button {
        display: none;
    }

    .mobile-menu-button {
      display: inline-block;
    }

    .logo-wrapper {
      aspect-ratio: 1/2;
    }

    .nav-and-button-div {
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 100%;
      background-color: black;
      padding-bottom: 20px;
      scale: 1 0;
      transform-origin: top;
      transition: scale 0.3s ease;

      &.open {
        scale: 1 1;
      }

      nav {
        width: 100%;

        ul {
          flex-direction: column;
          row-gap: 10px;

          li {
            padding-left: 20px;
          }
        }
      }
    }

    .mobile-menu-button {
      display: flex;
      position: absolute;
      width: 8%;
      justify-content: space-between;
      flex-direction: column;
      height: 20%;
      background-color: transparent;
      left: 85%;
      top: 50%;
      border: none;
      translate: 0 -50%;

      span {
        background-color: white;
        height: 10%;
        width: 90%;
        border: none;
        transition: translate 0.3s linear, rotate 0.3s linear, scale 0.2s linear 0.3s;
        transform-origin: center;
      }

      &.open {
        span:nth-of-type(1) {
          translate: 0 450%;
          rotate: 0.12turn;
        }

        span:nth-of-type(2) {
          scale: 0 1;
        }

        span:nth-of-type(3) {
          rotate: -0.12turn;
          translate: 0 -450%;

        }
      }
    }
  }
`;

export default function AppBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <StyledAppBar>
            <Link href={"/"} className="logo-wrapper">
                <Image src={"/Logotipo_ORION-branco.png"} alt="Logo" fill />
            </Link>

            <div className={`nav-and-button-div ${mobileMenuOpen ? "open" : ""}`}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/" onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => setMobileMenuOpen(false)}>NA MÍDIA</Link>
                        </li>
                        <li>
                            <Link href="https://orionarquitetura.com.br" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                                ORION.COM
                            </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={() => setMobileMenuOpen(false)}>CONTATO</Link>
                        </li>
                    </ul>
                </nav>

                <button className="search-button" />
            </div>

            <button className={`mobile-menu-button ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen((prev) => !prev)}>
                <span />
                <span />
                <span />
            </button>
        </StyledAppBar>
    );
}
