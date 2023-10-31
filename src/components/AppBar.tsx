import Image from "next/image";
import Link from "next/link";
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
                            color: #85B095;
                        }
                    }
                }
            }
        }

        button {
            width: 18px;
            height: 18px;
            background-color: transparent;
            background-image: url("/magnifying-glass-solid.svg");
            background-size: contain;
            border: none;
            cursor: pointer;
        }
    }

    @media(max-width: 1000px) {

    }
`;

export default function AppBar() {
    return (
        <StyledAppBar>
            <Link href={"/"} className="logo-wrapper">
                <Image src={"/Logotipo_ORION-branco.png"} alt="Logo" fill />
            </Link>

            <div className="nav-and-button-div">
                <nav>
                    <ul>
                        <li>
                            <Link href="/">BLOG</Link>
                        </li>
                        <li>
                            <Link href="#">NA MÍDIA</Link>
                        </li>
                        <li>
                            <Link href="https://orionarquitetura.com.br" target="_blank">ORION.COM</Link>
                        </li>
                        <li>
                            <Link href="#">CONTATO</Link>
                        </li>
                    </ul>
                </nav>

                <button />
            </div>

        </StyledAppBar>
    )
}