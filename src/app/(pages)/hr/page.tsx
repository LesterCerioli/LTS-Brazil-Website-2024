// pages/index.tsx
import React from 'react';
import styles from '../hr/styles'; // Importando o arquivo de estilo

const Home: React.FC = () => {
  return (
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>Momentos em que a Lucas Technology Services está presente</h1>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <span className={`${styles.icon} material-icons`}>draw</span>
            <h2>DESIGN</h2>
            <h3>Concepção e Modelagem de Soluções</h3>
          </div>

          <div className={styles.card}>
            <span className={`${styles.icon} material-icons`}>construction</span>
            <h2>CONSTRUÇÃO</h2>
            <h3>Desenvolvimento e Implantação de Soluções</h3>
          </div>

          <div className={styles.card}>
            <span className={`${styles.icon} material-icons`}>trending_up</span>
            <h2>EVOLUÇÃO</h2>
            <h3>Atualização e Sustentação de Soluções</h3>
          </div>

          <div className={styles.card}>
            <span className={`${styles.icon} material-icons`}>lightbulb</span>
            <h2>INOVAÇÃO</h2>
            <h3>Dirupção Funcional Tecnológica ou Negocial</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
