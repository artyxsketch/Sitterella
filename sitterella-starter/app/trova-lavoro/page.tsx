import Link from 'next/link';
const jobs = [
  {city:'Milano',headline:'Supporto doposcuola',detail:'Due pomeriggi a settimana, orario da definire.',icon:'🎨'},
  {city:'Roma',headline:'Babysitting occasionale',detail:'Aiuto occasionale per alcune serate.',icon:'🌙'},
  {city:'Bologna',headline:'Accompagnamento attività',detail:'Accompagnamento a un’attività extrascolastica.',icon:'🚲'}
];
export default function Jobs() {return <div className="shell inner-page"><p className="eyebrow">PER LE BABYSITTER</p><h1>Un lavoro che <span>fa sorridere.</span></h1><p className="inner-lead">Qui le famiglie potranno pubblicare annunci e ricevere candidature. Per ora trovi soltanto esempi.</p><div className="demo-label">✳ SOLO ESEMPI — NON CANDIDARTI</div><div className="demo-grid">{jobs.map(j=><article className="demo-card" key={j.headline}><span className="demo-avatar">{j.icon}</span><span className="demo-badge">ESEMPIO</span><h2>{j.headline}</h2><p>📍 {j.city}</p><p>{j.detail}</p><span className="demo-disabled">Candidature non ancora disponibili</span></article>)}</div><p className="back-link"><Link href="/registrati">Scopri come funzioneranno i profili →</Link></p></div>}
