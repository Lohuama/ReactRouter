import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/loh.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Lohuama Lima, desenvolvedora Front-end. Aqui compartilho vários conhecimentos, espero que gostem :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto de Lohuama Lima'
                />
            </div>
        </div>
    )
}
