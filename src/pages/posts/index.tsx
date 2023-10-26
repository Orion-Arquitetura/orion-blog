import Aside from "@/components/Aside";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  color: white;

  .banner-image-wrapper {
    margin-inline: auto;
    height: 60vh;
    background-color: azure;

    img {
      object-fit: cover;
    }

    position: relative;
  }

  .body-and-aside-wrapper {
    display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 46px;
  }

  .post-body {
    .post-main-title {
    margin-bottom: 46px;
    font-size: 2rem;
  }
   p {
    margin: 26px 0;
    &:first-of-type {
      margin-top: 0;
    }
   }
  }

  .post-feedback {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .post-rating {
      display: flex;
      column-gap: 16px;

      button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        background-size: contain;
  
        &[value="up"] {
          background-image: url("/thumb_up.png");
        }
  
        &[value="down"] {
          background-image: url("/thumb_down.png");
        }
      }
    }

    .share-post-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;

      span {
        font-weight: bold;
        font-size: 1.2rem;
      }

      ul {
        display: flex;
        column-gap: 10px;
      }

      a {
        width: 35px;
        height: 35px;
        display: block;
        background-size: cover;
        background-position: center;
        filter: contrast(10%);
      }
    }
  }

`;

export default function PostPage() {
  return (
    <StyledSection>
      <div className="banner-image-wrapper">
        <Image fill src="/ORION_Logotipo.png" alt="Orion" />
      </div>

      <div className="body-and-aside-wrapper">
        <div className="post-body">
          <h1 className="post-main-title">
            Arquitetura Hospitalar: O Impacto do Design na Saúde
          </h1>

          <p>
            A arquitetura hospitalar desempenha um papel crucial na saúde e no bem-estar dos
            pacientes. Ela não se limita apenas a criar edifícios bonitos, mas também a garantir que
            esses espaços sejam funcionais, seguros e eficazes para atender às necessidades complexas
            dos sistemas de saúde. A forma como um hospital é projetado pode afetar diretamente a
            qualidade do atendimento, o conforto dos pacientes, a eficiência das operações e até mesmo
            a taxa de recuperação. Neste artigo, exploraremos a importância da arquitetura hospitalar
            e como o design dos hospitais pode influenciar a experiência do paciente e dos
            profissionais de saúde.
          </p>
          <p>
            Os hospitais são locais onde as pessoas buscam tratamento e cura. Portanto, é essencial
            que esses ambientes sejam acolhedores e projetados para minimizar o estresse dos
            pacientes. Um bom projeto de arquitetura hospitalar leva em consideração fatores como
            iluminação, ventilação, layout e cores. Por exemplo, a presença de luz natural e espaços
            verdes pode criar ambientes mais agradáveis e reduzir a ansiedade dos pacientes. Cores
            suaves e reconfortantes nas paredes e no mobiliário também desempenham um papel
            fundamental na criação de um ambiente de cura.
          </p>
          <p>
            Além disso, a acessibilidade é uma preocupação primordial na arquitetura hospitalar. Os
            hospitais devem ser projetados de forma a serem facilmente acessíveis para pessoas com
            deficiências, como rampas, corredores largos e elevadores adequados. Isso não apenas
            atende às necessidades dos pacientes, mas também facilita o trabalho dos profissionais de
            saúde, que precisam de acesso rápido e seguro a todas as áreas do hospital.
          </p>
          <p>
            A eficiência operacional é outro aspecto crítico da arquitetura hospitalar. Os hospitais
            são instituições complexas que abrigam uma variedade de serviços, desde salas de cirurgia
            até laboratórios e áreas de internação. O design deve permitir a integração eficaz desses
            serviços, garantindo que os profissionais de saúde possam se deslocar com facilidade e que
            os pacientes sejam atendidos de forma oportuna. Isso não apenas melhora a qualidade do
            atendimento, mas também pode economizar tempo e recursos preciosos.
          </p>
          <p>
            Segurança é outra consideração crucial na arquitetura hospitalar. Os hospitais precisam
            estar preparados para lidar com emergências e desastres, e o design do edifício deve levar
            isso em consideração. Isso inclui saídas de emergência adequadas, sistemas de combate a
            incêndios e áreas de isolamento para pacientes com doenças infecciosas. Um projeto de
            arquitetura bem pensado pode salvar vidas em situações críticas.
          </p>
          <p>
            A privacidade dos pacientes é um aspecto muitas vezes negligenciado, mas importante, na
            arquitetura hospitalar. Os pacientes precisam de espaços onde possam se sentir seguros e
            protegidos. Isso envolve a concepção de quartos individuais ou áreas de espera separadas,
            bem como a consideração da privacidade acústica. O ruído excessivo pode ser perturbador e
            prejudicar a recuperação dos pacientes.
          </p>
          <p>
            Outro ponto crítico é a sustentabilidade na arquitetura hospitalar. Os hospitais são
            grandes consumidores de energia e recursos, e um projeto sustentável pode reduzir o
            impacto ambiental e os custos operacionais a longo prazo. Isso pode ser alcançado por meio
            da incorporação de tecnologias de eficiência energética, da utilização de materiais
            sustentáveis e da gestão adequada dos resíduos.
          </p>
          <p>
            Em resumo, a arquitetura hospitalar desempenha um papel essencial na criação de ambientes
            de cura que promovem o bem-estar dos pacientes e a eficiência dos profissionais de saúde.
            Um design cuidadoso leva em consideração fatores como acessibilidade, eficiência
            operacional, segurança, privacidade e sustentabilidade. Quando combinados, esses elementos
            criam hospitais que não apenas tratam doenças, mas também promovem a cura e o conforto,
            contribuindo assim para uma sociedade mais saudável e resiliente.
          </p>

          <div className="post-feedback">
          <div className="share-post-div">
              <span>Compartilhe</span>
              <ul>
                <li>
                  <a href="$" style={{ backgroundImage: "url('/instagram.svg')" }} />
                </li>
                <li>
                  <a href="$" style={{ backgroundImage: "url('/facebook.svg')" }} />
                </li>
                <li>
                  <a href="$" style={{ backgroundImage: "url('/linkedin.svg')" }} />
                </li>
              </ul>
            </div>
            <div className="post-rating">
              <button value="up" title="Gostei! 😆" />
              <button value="down" title="Não gostei. 😒" />
            </div>


          </div>
        </div>
        <Aside />
      </div>


    </StyledSection>
  );
}

// export async function getStaticPaths() {

// }

// export async function getStaticProps() {

// }
