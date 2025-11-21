import { ADS } from "./data/ads";

export default function Page() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Cremaci?n de Mascotas con Homenaje Incluido</h1>
        <p className="sub">Servicio inmediato 24/7 en Puebla Sur, San Andr?s Cholula, Lomas de Angel?polis y San Jos? Chapulco.</p>
        <div className="offer">
          <strong>Solo pagas la cremaci?n</strong>
          <span>Incluimos sin costo: velaci?n, huella y trufa en cera, aromaterapia, video conmemorativo, certificado y obituario.</span>
        </div>
      </header>

      <section className="ads">
        {ADS.map((ad) => (
          <article key={ad.id} className="ad">
            <h2 className="hook">{ad.hook}</h2>
            <p className="body">{ad.body}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>
          Atenci?n sensible y profesional. Cobertura en Puebla Sur, San Andr?s Cholula, Lomas de Angel?polis y San Jos? Chapulco.
        </p>
      </footer>
    </main>
  );
}
