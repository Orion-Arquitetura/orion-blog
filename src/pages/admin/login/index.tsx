import styled from "styled-components";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const StyledForm = styled.form`
    width: 50%;
    margin-inline: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
    align-items: center;

    input, button {
        width: 70%;
        padding: 10px;
    }
`;


export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const submitLoginData: SubmitHandler<any> = (data) => {
        console.log(data)
    }

    return (
        <StyledForm onSubmit={handleSubmit(submitLoginData)}>
            <input placeholder="Email" type="email" {...register("email", { required: true })} />
            {errors.email && <p>Preencha corretamente o campo.</p>}
            <input placeholder="Senha" type="password" {...register("senha", { required: true })} />
            {errors.senha && <p>Preencha corretamente o campo.</p>}
            <button type="submit">Entrar</button>
        </StyledForm>
    )
}