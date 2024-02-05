import PostModelo from "../../Componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/loh.jpeg";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo FotoCapa={fotoCapa} título="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Lohuama!</h3>
      <img
        src={fotoSobreMim}
        alt="Minha Foto"
        className={styles.fotoSobreMim}
      />

      <p classname={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolvedora Front-end e estou feliz de te ver por aqui.
      </p>
      <p classname={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal da Paraíba (IFPB), quando fiz Engenharia da Computação. Eu
        aprendi lógica de programação e o básico de várias linguagens, como Python, C#, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
      </p>
      <p classname={styles.paragrafo}>
        Enquanto cursava consegui um estágio na STTP (Superintendência de Trânsito e Transporte da Paraíba)
        onde aprendi programação na prática. Lá eu tive a oportunidade de estudar desenvolvimento web e desenvlvi meu primeiro projeto que foi a JULIA (Juntas Livres do Assédio), um bot para ajudar as vítimas de assédio em transportes públicos e ganhou notoriedade nacional.
      </p>
      <p classname={styles.paragrafo}>
        Com isso tive minha experiência de dev na realidade, com
        prazos de implementação , e aprendi muito enquanto
        codificava.
      </p>
      <p classname={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        STTP foi uma escola onde pude aprender e acrescentar aos cidadãos da minha cidade. Hoje sou muito feliz de ter tido esta oportunidade.
        Espero melhorar e aprender mais a cada dia!
      </p>
    </PostModelo>
  );
}
