import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sitterella | Un incontro che fa sorridere',
  description: 'Sitterella è il progetto di una piattaforma italiana che mette in contatto famiglie e babysitter. Anteprima dimostrativa.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <div className="preview-bar">🌼 Anteprima del progetto — nessun profilo o annuncio è reale.</div>
        <header className="site-header">
          <div className="shell nav">
            <Link className="brand" href="/" aria-label="Sitterella, homepage"><span className="brand-icon">✿</span> sitterella<span className="brand-dot">.</span></Link>
            <nav className="nav-links" aria-label="Navigazione principale">
              <Link href="/trova-babysitter">Trova una babysitter</Link>
              <Link href="/trova-lavoro">Trova lavoro</Link>
              <Link href="/come-funziona">Come funziona</Link>
            </nav>
            <Link href="/registrati" className="button button-small button-primary">Registrati <span aria-hidden="true">↗</span></Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer"><div className="shell footer-content"><div><Link href="/" className="brand">✿ sitterella<span className="brand-dot">.</span></Link><p>Un incontro che fa sorridere.</p></div><p>© {new Date().getFullYear()} Sitterella · Prototipo illustrativo, non aperto al pubblico.</p></div></footer>
      </body>
    </html>
  );
}
