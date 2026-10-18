# Sitterella ✿ — Prima versione del sito

**Sitterella** è il nome provvisorio della futura piattaforma italiana che metterà in contatto famiglie e babysitter.

## Cosa funziona già
- Homepage responsive, tutta in italiano.
- Navigazione fra homepage, ricerca babysitter, annunci, spiegazione e registrazione.
- Campo città nella homepage: apre la ricerca filtrando i profili **finti di esempio** (Milano, Roma, Torino).
- Sezione annunci con dati dimostrativi.

**Non funzionano ancora:** creazione account, profili reali, annunci reali, candidature, chat, verifiche d'identità, moderazione, prenotazioni e pagamenti. Non distribuire il sito come servizio già attivo.

## Come aprirlo sul tuo PC Windows
1. Installa Node.js (versione 20.9 o superiore): https://nodejs.org/
2. Estrai questa cartella sul Desktop.
3. Apri la cartella `sitterella-starter` con Visual Studio Code (https://code.visualstudio.com/).
4. Nel menu di VS Code apri **Terminale → Nuovo terminale**.
5. Incolla nell'ordine:
   ```powershell
   npm install
   npm run dev
   ```
6. Apri `http://localhost:3000` nel browser.

Se PowerShell blocca `npm`, prova a usare il terminale **Prompt dei comandi** (CMD) in VS Code.

## Come collegare Supabase (solo quando passeremo agli account)
1. Apri https://supabase.com/ e crea un progetto con il piano Free.
2. Copia `.env.example` in `.env.local` e sostituisci i valori con **Project URL** e **publishable key** trovati in Supabase → Connect.
3. Riavvia `npm run dev`.
4. `lib/supabase/client.ts` è già pronto per le future funzionalità lato browser. La sola presenza delle variabili **non attiva** account o chat.
5. Non pubblicare mai chiavi `service_role` o `secret` nel codice frontend.

## Prossime fasi
1. Registrazione con ruoli genitore/babysitter e conferma email.
2. Database Supabase con policy Row Level Security (RLS) su **tutte** le tabelle con dati personali.
3. Profili e annunci autentici con autorizzazione corretta per lettura/modifica.
4. Candidature e chat: accessibili solo ai partecipanti, con controlli server-side.
5. Segnalazioni, sospensioni, anti-spam, consenso, privacy, gestione dati, moderazione.
6. Test di sicurezza e legali prima di invitare utenti reali, soprattutto perché il servizio coinvolge famiglie e minori.

## Note sul nome
Verificare disponibilità del marchio e del dominio prima di registrarlo, stamparlo o promuoverlo. Il materiale grafico è una proposta, non una garanzia di esclusività.

## Stack
Next.js App Router, React, TypeScript, CSS. Dipendenze Supabase predisposte, **non ancora collegate**.
