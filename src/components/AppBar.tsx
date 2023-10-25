import Image from "next/image";
import styled from "styled-components";

const StyledAppBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: 120px;

    position: sticky;
    top: 0;
    z-index: 10;
    background-color: rgb(12, 12, 12);

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
            <Image src={"/orion-white-logo.svg"} alt="Logo" width={"160"} height={"120"} />

            <div className="nav-and-button-div">
                <nav>
                    <ul>
                        <li>
                            <a href="#">BLOG</a>
                        </li>
                        <li>
                            <a href="#">NA MÍDIA</a>
                        </li>
                        <li>
                            <a href="#">CASES</a>
                        </li>
                        <li>
                            <a href="#">ORION.COM</a>
                        </li>
                        <li>
                            <a href="#">CONTATO</a>
                        </li>
                    </ul>
                </nav>

                <button />
            </div>

        </StyledAppBar>
    )
}