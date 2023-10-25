import { useState } from "react"
import styled from "styled-components"
import HomePagePost from "./HomePagePost"

const StyledGrid = styled.ul`
    display: flex;
    flex-direction: row;
    padding-inline: 16px;
    gap: 30px;
    flex-wrap: wrap;
`

export default function PostsGrid() {
    const [posts, setPosts] = useState([
        {
            data: "24/10/2023",
            titulo: "Tendências em Design Hospitalar",
            imagem: "https://images.pexels.com/photos/7089336/pexels-photo-7089336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            resumo: "Este post explora as tendências atuais em design hospitalar, incluindo o uso de cores, materiais e tecnologias inovadoras para criar espaços mais acolhedores e eficientes para os pacientes."
        },
        {
            data: "23/10/2023",
            titulo: "A Importância da Acessibilidade em Hospitais",
            imagem: "https://images.pexels.com/photos/7335565/pexels-photo-7335565.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Neste artigo, discutimos a importância da acessibilidade em hospitais e como o design inclusivo pode melhorar a experiência de pacientes com mobilidade reduzida."
        },
        {
            data: "22/10/2023",
            titulo: "Inovações em Tecnologia Hospitalar",
            imagem: "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Descubra as últimas inovações em tecnologia hospitalar, incluindo sistemas de informação, dispositivos médicos avançados e como eles estão transformando o setor de saúde."
        },
        {
            data: "21/10/2023",
            titulo: "Projeto de Quartos de Hospital Confortáveis",
            imagem: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Explore o design de quartos de hospital que prioriza o conforto dos pacientes, com dicas para criar um ambiente acolhedor e relaxante."
        },
        {
            data: "20/10/2023",
            titulo: "Sustentabilidade na Arquitetura Hospitalar",
            imagem: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Saiba como a sustentabilidade é integrada à arquitetura hospitalar, com exemplos de práticas ecológicas e eficiência energética."
        },
        {
            data: "19/10/2023",
            titulo: "Layout Eficiente em Hospitais",
            imagem: "https://images.pexels.com/photos/249348/pexels-photo-249348.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Este post aborda estratégias de layout eficiente em hospitais para otimizar a circulação de pacientes, médicos e equipe de saúde."
        },
        {
            data: "18/10/2023",
            titulo: "Projeto de Áreas de Espera em Hospitais",
            imagem: "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Aprenda como projetar áreas de espera em hospitais que sejam agradáveis e funcionais, proporcionando conforto aos pacientes e acompanhantes."
        },
        {
            data: "17/10/2023",
            titulo: "Conceitos de Design Biophilic em Ambientes de Saúde",
            imagem: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Exploramos o uso de elementos biophilic no design de ambientes de saúde e seus benefícios para o bem-estar dos pacientes."
        },
        {
            data: "16/10/2023",
            titulo: "Tecnologia Inteligente em Hospitais",
            imagem: "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Descubra como a tecnologia inteligente, como a Internet das Coisas (IoT) e a automação, está sendo implementada em hospitais para melhorar a eficiência e o atendimento ao paciente."
        },
        {
            data: "15/10/2023",
            titulo: "Projetando Salas de Cirurgia Modernas",
            imagem: "https://images.pexels.com/photos/11198237/pexels-photo-11198237.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Este artigo explora as melhores práticas no design de salas de cirurgia, incluindo a disposição de equipamentos e a importância da esterilidade."
        }
    ])
    return (
        <StyledGrid>
            {posts.map(post => {
                return (
                    <HomePagePost key={post.titulo} titulo={post.titulo} data={post.data} imagem={post.imagem} resumo={post.resumo} />
                )
            })}
        </StyledGrid>
    )
}