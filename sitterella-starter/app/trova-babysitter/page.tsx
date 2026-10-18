import Link from 'next/link';

type Props = { searchParams: Promise<{ citta?: string }> };
const examples = [
  { city: 'Milano', title: 'Profilo dimostrativo A', description: 'Attività creative, gioco e supporto doposcuola.', tag: 'Doposcuola', icon: '🌷' },
  { city: 'Roma', title: 'Profilo dimostrativo B', description: 'Aiuto compiti e attività all’aria aperta.', tag: 'Aiuto compiti', icon: '🌻' },
  { city: 'Torino', title: 'Profilo dimostrativo C', description: 'Supporto alle famiglie durante il pomeriggio.', tag: 'Pomeriggio', icon: '🪻' },
];
export default async function FindSitter({ searchParams }: Props) {
  const params = await searchParams;
  const city = (params.citta || '').trim().slice(0, 80);
  const profiles = city ? examples.filter(p => p.city.toLocaleLowerCase('it').includes(city.toLocaleLowerCase('it'))) : examples;
  return <div className="shell inner-page"><p className="eyebrow">PER LE FAMIGLIE</p><h1>Trova una babysitter <span>con il sorriso.</span></h1><p className="inner-lead">Questa è una ricerca dimostrativa: nessun profilo è reale.</p>
    <form action="/trova-babysitter" className="search-box inner-search"><label className="sr-only" htmlFor="city">Cerca città</label><input id="city" name="citta" defaultValue={city} placeholder="Cerca per città: Milano, Roma, Torino"/><button className="button button-primary">Cerca →</button></form>
    <div className="demo-label">✳ SOLO ESEMPI — NESSUN PROFILO ATTIVO</div>
    <div className="demo-grid">{profiles.length ? profiles.map(p => <article className="demo-card" key={p.title}><span className="demo-avatar">{p.icon}</span><span className="demo-badge">ESEMPIO</span><h2>{p.title}</h2><p>📍 {p.city} · {p.tag}</p><p>{p.description}</p><span className="demo-disabled">Contatti non ancora disponibili</span></article>) : <div className="empty-state"><h2>Nessun esempio per «{city}»</h2><p>La ricerca reale sarà disponibile dopo il collegamento al database.</p><Link href="/trova-babysitter">Mostra gli esempi →</Link></div>}</div>
  </div>;
}
