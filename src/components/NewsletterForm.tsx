import styled from "styled-components"

const StyledDiv = styled.div`
h4 {
    color: white;
    margin-bottom: 16px;
    text-align: center;
    width: 60%;
    margin-inline: auto;
}
    form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        input, select, textarea {
            padding: 8px 12px;
            border: none;
        }

        input, select, textarea, button {
            border-radius: 0;
            width: 80%;
            margin-inline: auto;
        }

        button {
            border: solid 1px #E6E8DD;
            background-color: black;
            color: #E6E8DD;
            padding: 3px 0;
        }
    }

    @media (max-width: 1000px) {
        margin-inline: 0;
  }
`;

export default function NewsletterForm() {
    return (
        <StyledDiv>
            <h4>INSCREVA-SE E SAIBA MAIS SOBRE O UNIVERSO ORION</h4>
            <form>
                <input type="text" placeholder="NOME" />
                <input type="email" placeholder="EMAIL" />
                <input type="tel" placeholder="TELEFONE" />
                <input type="text" placeholder="EMPRESA" />
                <select>
                    <option defaultChecked value="INTERESSE">INTERESSE</option>
                    <option value="PROJETOS">PROJETOS</option>
                    <option value="MOBILIARIO">MOBILIÁRIO</option>
                    <option value="OUTRO">OUTRO</option>
                </select>
                <textarea rows={4} placeholder="MENSAGEM" />
                <button>enviar</button>
            </form>
        </StyledDiv>
    )
}