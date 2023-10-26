/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"

const StyledFooter = styled.footer`
    padding: 30px 120px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 36px;

    .address-div {
        font-size: 0.7rem;
        width: 20%;
    }

    .contact-div {
        font-size: 2rem;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <img src="/SIMBOLO_ORION.png" alt="Orion" width={100} />

            <div className="address-div">
                <p>
                    Av. Pastor Martin Luther King Júnior, 126 - Office 1000, Sala 602
                </p>
            </div>

            <div className="contact-div">
                <p>(21) 98888-8888</p>
            </div>
        </StyledFooter>
    )
}