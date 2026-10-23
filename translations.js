/* =========================================================
   APARTMANI AL MARE
   Jezici: hrvatski (HR), engleski (EN), njemački (DE)
   Pamti jezik pri prelasku između stranica.
   ========================================================= */

(() => {
  "use strict";

  const dictionaries = {
    en: {
      "Početna": "Home",
      "Mobilna kućica": "Mobile Home",
      "Galerija": "Gallery",
      "Lokacija": "Location",
      "Kontakt": "Contact",
      "Rezervirajte boravak": "Book your stay",
      "Otkrijte mobilnu kućicu": "Discover the mobile home",
      "Pošaljite upit": "Send an enquiry",
      "VAŠ MALI KUTAK MEDITERANA": "YOUR LITTLE MEDITERRANEAN ESCAPE",
      "Vaš odmor počinje ovdje.": "Your holiday starts here.",
      "Dobro došli u Al Mare, mjesto gdje se dalmatinski šarm susreće s udobnošću i gdje svaki dan miriše na more, sunce i pravi odmor.":
        "Welcome to Al Mare, where Dalmatian charm meets comfort and every day brings the scent of the sea, sunshine and a truly relaxing holiday.",
      "DALMACIJA · MURTER": "DALMATIA · MURTER",
      "OTKRIJTE VIŠE": "DISCOVER MORE",
      "Jedan poseban apartman": "One special mobile home",
      "Mediteranski ugođaj": "Mediterranean atmosphere",
      "Odmor po vašoj mjeri": "A holiday your way",
      "Blizu ljepota Jadrana": "Close to the beauty of the Adriatic",
      "VAŠ DOM NA ODMORU": "YOUR HOLIDAY HOME",
      "Malo mediteranske čarolije, puno trenutaka za pamćenje.":
        "A little Mediterranean magic, a lifetime of memories.",
      "Apartman Al Mare osmišljen je za one koji žele predahnuti, uživati u udobnosti i doživjeti ljepotu Jadrana.":
        "Mobile Home Al Mare is designed for those who want to unwind, enjoy comfort and experience the beauty of the Adriatic.",
      "Uživajte u ugodnom ambijentu, opuštenoj atmosferi i detaljima inspiriranima Mediteranom. Bilo da planirate obiteljski odmor ili nekoliko dana daleko od svakodnevice, Al Mare pruža prostor za vaše najljepše ljetne uspomene.":
        "Enjoy a welcoming atmosphere, a relaxed setting and details inspired by the Mediterranean. Whether you are planning a family holiday or a few days away from everyday life, Al Mare offers the perfect setting for your most beautiful summer memories.",
      "Klimatizacija": "Air conditioning",
      "Za ugodan boravak": "For a comfortable stay",
      "Ostanite povezani": "Stay connected",
      "Parking": "Parking",
      "Praktičnost za goste": "Convenience for our guests",
      "Opremljena kuhinja": "Fully equipped kitchen",
      "Sloboda vlastitog ritma": "Freedom to set your own pace",
      "Raspitajte se o terminima": "Ask about availability",
      "LJEPOTA JEDNOSTAVNOSTI": "THE BEAUTY OF SIMPLICITY",
      "Ovdje odmor ima svoj ritam.": "Here, holidays have their own rhythm.",
      "Topli dani, večeri na otvorenom i onaj poseban osjećaj kada napokon imate vremena za sebe.":
        "Warm days, evenings outdoors and that special feeling of finally having time for yourself.",
      "Jutro bez žurbe": "Mornings without a rush",
      "Započnite dan polako, uz kavu i planove koji ovise samo o vašem raspoloženju.":
        "Start your day slowly with a coffee and plans guided only by your mood.",
      "Blizina mora": "Close to the sea",
      "Istražite obalu, pronađite svoju omiljenu plažu i prepustite se mediteranskom načinu života.":
        "Explore the coastline, find your favourite beach and embrace the Mediterranean way of life.",
      "Večeri za pamćenje": "Evenings to remember",
      "Uživajte u mirnim večerima, dobroj hrani i trenucima zbog kojih se poželite vratiti.":
        "Enjoy peaceful evenings, delicious food and moments that will make you want to return.",
      "ZAVIRITE UNUTRA": "TAKE A LOOK INSIDE",
      "Upoznajte Al Mare.": "Get to know Al Mare.",
      "Pogledajte fotografiju apartmana": "View the mobile home photo",
      "Pogledajte fotografiju spavaće sobe": "View the bedroom photo",
      "Pogledajte fotografiju kuhinje": "View the kitchen photo",
      "Pogledajte fotografiju terase": "View the terrace photo",
      "Dnevni prostor apartmana": "Mobile home living area",
      "Spavaća soba": "Bedroom",
      "Kuhinja apartmana": "Mobile home kitchen",
      "Kamin": "Fireplace",
      "Prostor za opuštanje": "A space to unwind",
      "Mir i udobnost": "Peace and comfort",
      "Svaki detalj na svom mjestu": "Every detail in its place",
      "Trenuci na otvorenom": "Moments outdoors",
      "VAŠ ODMOR POČINJE OVDJE": "YOUR HOLIDAY STARTS HERE",
      "More zove.": "The sea is calling.",
      "Hoćete li se javiti?": "Will you answer?",
      "Javite nam se i raspitajte se o dostupnosti apartmana za svoj sljedeći odmor.":
        "Get in touch to ask about mobile home availability for your next holiday.",
      "Dogovorimo vaš boravak": "Let's plan your stay",
      "JAVITE NAM SE": "GET IN TOUCH",
      "Vaše mjesto uz more vas čeka.": "Your place by the sea is waiting for you.",
      "Imate pitanje o apartmanu, cijenama ili slobodnim terminima? Pošaljite nam upit. Rado ćemo vam pomoći pri planiranju odmora.":
        "Have a question about the mobile home, prices or availability? Send us an enquiry. We will be happy to help you plan your holiday.",
      "E-mail": "Email",
      "Telefon": "Phone",
      "Lokacija": "Location",
      "Ovdje upišite svoju e-mail adresu": "Enter your email address here",
      "Ovdje upišite svoj broj telefona": "Enter your phone number here",
      "Ovdje upišite mjesto u kojem se apartman nalazi": "Enter the mobile home location here",
      "Pošaljite upit za boravak": "Send a stay enquiry",
      "Ispunite podatke i javite nam kada biste željeli posjetiti Al Mare.":
        "Fill in your details and let us know when you would like to visit Al Mare.",
      "Ime i prezime": "Full name",
      "Vaše ime": "Your name",
      "E-mail adresa": "Email address",
      "Datum dolaska": "Arrival date",
      "Datum odlaska": "Departure date",
      "Broj gostiju": "Number of guests",
      "Odaberite broj gostiju": "Select the number of guests",
      "Poruka": "Message",
      "Napišite nam svoje pitanje...": "Write your question here...",
      "Pošaljite upit": "Send enquiry",
      "Slanje upita...": "Sending enquiry...",
      "Hvala! Vaš upit uspješno je poslan.": "Thank you! Your enquiry has been sent successfully.",
      "Upit nije poslan. Provjerite radi li server.": "Your enquiry was not sent. Please check whether the server is running.",
      "Vaš kutak za odmor, opuštanje i uživanje u ljepotama Jadrana. Doživite ugodan mediteranski odmor na Murteru.":
        "Your place to relax and enjoy the beauty of the Adriatic. Experience a wonderful Mediterranean holiday on Murter Island.",
      "Istražite": "Explore",
      "Natrag na vrh": "Back to top",
      "Murter, Hrvatska": "Murter, Croatia",
      "© 2026 Al Mare. Sva prava pridržana.": "© 2026 Al Mare. All rights reserved.",
      "© 2026 Apartmani Al Mare. Sva prava pridržana.": "© 2026 Al Mare Apartments. All rights reserved.",

      "Pravne informacije": "Legal information",
      "Apartmani Al Mare · Murter": "Al Mare Apartments · Murter",
      "Informacije o privatnosti, kolačićima i korištenju sadržaja ove web-stranice.": "Information about privacy, cookies and the use of content on this website.",
      "Zadnje ažuriranje: 21. listopada 2026.": "Last updated: 21 October 2026.",
      "1. Podaci o iznajmljivaču": "1. Host information",
      "Ova web-stranica predstavlja smještaj pod nazivom Apartmani Al Mare. Upiti za boravak šalju se putem kontakt-obrasca, a detalji i eventualna rezervacija dogovaraju se naknadno s iznajmljivačem.": "This website presents accommodation offered as Al Mare Apartments. Stay enquiries are submitted through the contact form, while the details and any potential reservation are arranged with the host afterwards.",
      "Status:": "Status:",
      "privatni iznajmljivač – fizička osoba": "private host – individual",
      "Ime i prezime:": "Full name:",
      "Adresa:": "Address:",
      "[DOPUNITI prije objave]": "[COMPLETE before publication]",
      "[DOPUNITI e-mail adresu]": "[ADD email address]",
      "Prije javne objave dopunite nedostajuće podatke i provjerite koje podatke o pružatelju smještaja morate objaviti prema propisima koji se primjenjuju na vaše poslovanje.": "Before publishing, complete the missing details and check which accommodation-provider information must be disclosed under the regulations applicable to your business.",
      "2. Politika privatnosti": "2. Privacy policy",
      "Voditelj obrade": "Data controller",
      "Voditelj obrade osobnih podataka je Zoran Garma, privatni iznajmljivač koji djeluje pod nazivom Apartmani Al Mare. Kontakt za pitanja o privatnosti: [DOPUNITI e-mail adresu].": "The data controller is Zoran Garma, a private host operating under the name Al Mare Apartments. For privacy enquiries, contact: [ADD email address].",
      "Koje podatke možemo prikupljati?": "What information may we collect?",
      "Kada pošaljete upit za smještaj, možemo obrađivati podatke koje unesete u obrazac, primjerice ime, adresu e-pošte, telefonski broj ako ga navedete, željene datume boravka, broj gostiju i sadržaj poruke.": "When you submit an accommodation enquiry, we may process the information you enter in the form, such as your name, email address, phone number if provided, preferred stay dates, number of guests and message content.",
      "Zašto obrađujemo podatke?": "Why do we process information?",
      "Podatke koristimo radi odgovora na vaš upit, provjere raspoloživosti smještaja i dogovora uvjeta mogućeg boravka. Ako se rezervacija ugovori, određeni podaci mogu se obrađivati i radi ispunjavanja zakonskih obveza.": "We use your information to respond to your enquiry, check accommodation availability and discuss the terms of a potential stay. If a reservation is made, certain information may also be processed to meet legal obligations.",
      "Pravna osnova": "Legal basis",
      "Podaci potrebni za odgovor na upit i poduzimanje radnji prije mogućeg sklapanja ugovora obrađuju se, kada su ispunjeni uvjeti, na temelju članka 6. stavka 1. točke (b) Opće uredbe o zaštiti podataka (GDPR). Za druge svrhe primjenjuje se odgovarajuća pravna osnova.": "Where the relevant conditions are met, information needed to respond to an enquiry and take steps before a possible contract is concluded is processed under Article 6(1)(b) of the General Data Protection Regulation (GDPR). An appropriate legal basis applies to other purposes.",
      "Koliko dugo čuvamo podatke?": "How long do we keep information?",
      "Podaci se čuvaju samo onoliko dugo koliko je potrebno za obradu upita i komunikaciju. Ako dođe do rezervacije, pojedini podaci mogu se čuvati dulje kada to nalažu zakonske obveze ili je čuvanje potrebno radi pravnih zahtjeva. Točne rokove čuvanja potrebno je odrediti prema stvarnom načinu rada i primjenjivim propisima.": "Information is kept only for as long as necessary to handle the enquiry and related communication. If a reservation is made, some information may be retained longer where required by law or needed for legal claims. Exact retention periods should be set according to actual practices and applicable regulations.",
      "Primatelji i tehnička obrada": "Recipients and technical processing",
      "Podacima pristupa iznajmljivač. Ako se koriste usluge hostinga, e-pošte ili drugog pružatelja koji obrađuje podatke, obrada se mora urediti u skladu s primjenjivim pravilima zaštite podataka.": "The host has access to the information. If hosting, email or other services that process data are used, that processing must be arranged in accordance with applicable data-protection rules.",
      "Web-stranica objavljena je putem GitHub Pagesa. Prije objave ove politike potrebno je provjeriti koje podatke mogu obrađivati hosting i druge vanjske usluge te odgovarajuće dopuniti informacije o obradi i eventualnom prijenosu podataka.": "The website is published using GitHub Pages. Before publishing this policy, check what information may be processed by the hosting service and other external services, then update the information about processing and any data transfers accordingly.",
      "Vaša prava": "Your rights",
      "Ovisno o okolnostima, imate pravo zatražiti pristup, ispravak, brisanje ili ograničenje obrade osobnih podataka, kao i ostvariti druga prava koja vam pripadaju prema GDPR-u. Zahtjev možete poslati na: [DOPUNITI e-mail adresu].": "Depending on the circumstances, you may have the right to request access to, correction or deletion of your personal data, restriction of processing, and to exercise other rights available to you under the GDPR. You can send a request to: [ADD email address].",
      "Ako smatrate da se vaši podaci obrađuju protivno propisima, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP):": "If you believe your information is being processed unlawfully, you may lodge a complaint with the Croatian Personal Data Protection Agency (AZOP):",
      "Sigurnost podataka": "Data security",
      "Poduzimaju se primjerene mjere za zaštitu osobnih podataka. Opseg i primjerenost tih mjera potrebno je uskladiti sa stvarnim načinom prikupljanja, slanja i čuvanja podataka.": "Appropriate measures are taken to protect personal data. The scope and adequacy of these measures should reflect the actual methods used to collect, transmit and store information.",
      "3. Kolačići i slične tehnologije": "3. Cookies and similar technologies",
      "Kolačići su male datoteke koje web-stranica može pohraniti na vaš uređaj. Mogu služiti osnovnom radu stranice, pamćenju postavki, analitici ili oglašavanju.": "Cookies are small files that a website may store on your device. They may be used for essential website functions, remembering preferences, analytics or advertising.",
      "U dosadašnjoj početnoj provjeri nije potvrđena uporaba analitičkih ili marketinških kolačića. To ne znači da je njihova odsutnost definitivno utvrđena na svim stranicama i u svim uvjetima korištenja.": "The initial review so far has not confirmed the use of analytics or marketing cookies. This does not mean their absence has been definitively established on every page and under all usage conditions.",
      "Prije objave potrebno je provjeriti kolačiće, lokalnu pohranu i vanjske skripte na svim stranicama. Ako se koriste tehnologije koje zakonski zahtijevaju prethodnu privolu, one se ne smiju aktivirati prije davanja odgovarajuće privole.": "Before publication, check cookies, local storage and external scripts on all pages. If technologies requiring prior consent by law are used, they must not be activated before the appropriate consent is given.",
      "Ovaj odjeljak treba ažurirati nakon tehničke provjere kako bi odgovarao stvarnoj konfiguraciji web-stranice.": "This section should be updated after a technical review so that it accurately reflects the website's actual configuration.",
      "4. Upiti i dogovor boravka": "4. Enquiries and stay arrangements",
      "Slanje kontaktnog obrasca predstavlja upit za smještaj i samo po sebi ne znači da je rezervacija potvrđena. Raspoloživost, cijena, uvjeti plaćanja, trajanje boravka i eventualni uvjeti otkazivanja dogovaraju se naknadno s iznajmljivačem.": "Submitting the contact form is an accommodation enquiry and does not, by itself, mean that a reservation is confirmed. Availability, price, payment terms, length of stay and any cancellation terms are agreed with the host afterwards.",
      "Konkretni uvjeti boravka moraju biti jasno priopćeni gostu prije sklapanja dogovora. Ovaj odjeljak ne zamjenjuje pojedinačne uvjete rezervacije niti obvezne informacije koje se primjenjuju na pružanje smještaja.": "The specific conditions of the stay must be clearly communicated to the guest before an agreement is made. This section does not replace individual reservation terms or mandatory information applicable to the provision of accommodation.",
      "5. Autorska prava": "5. Copyright",
      "Tekstovi, dizajn i drugi sadržaji ove web-stranice mogu biti zaštićeni autorskim pravom ili drugim pravima intelektualnog vlasništva.": "Texts, design and other content on this website may be protected by copyright or other intellectual-property rights.",
      "Fotografije i drugi materijali trećih osoba mogu biti zaštićeni zasebnim pravima i licencama. Njihovo korištenje, preuzimanje ili daljnje objavljivanje dopušteno je samo ako postoji odgovarajuća pravna osnova ili dopuštenje.": "Photographs and other third-party materials may be protected by separate rights and licences. They may be used, downloaded or republished only where an appropriate legal basis or permission exists.",
      "© 2026 Apartmani Al Mare. Sva prava pridržana, u opsegu u kojem ta prava pripadaju odgovarajućem nositelju prava.": "© 2026 Al Mare Apartments. All rights reserved to the extent that such rights belong to the relevant rights holder.",
      "Povratak na početnu stranicu": "Back to the homepage",
      "Vaš kutak za odmor, opuštanje i uživanje u ljepotama Jadrana.": "Your place to relax and enjoy the beauty of the Adriatic.",

      "Pravne informacije": "Rechtliche Informationen",
      "Apartmani Al Mare · Murter": "Apartments Al Mare · Murter",
      "Informacije o privatnosti, kolačićima i korištenju sadržaja ove web-stranice.": "Informationen zu Datenschutz, Cookies und zur Nutzung der Inhalte dieser Website.",
      "Zadnje ažuriranje: 21. listopada 2026.": "Zuletzt aktualisiert: 21. Oktober 2026.",
      "1. Podaci o iznajmljivaču": "1. Angaben zum Gastgeber",
      "Ova web-stranica predstavlja smještaj pod nazivom Apartmani Al Mare. Upiti za boravak šalju se putem kontakt-obrasca, a detalji i eventualna rezervacija dogovaraju se naknadno s iznajmljivačem.": "Diese Website präsentiert die Unterkunft Al Mare Apartments. Anfragen zum Aufenthalt werden über das Kontaktformular gesendet; Einzelheiten und eine mögliche Buchung werden anschließend mit dem Gastgeber vereinbart.",
      "Status:": "Status:",
      "privatni iznajmljivač – fizička osoba": "privater Gastgeber – natürliche Person",
      "Ime i prezime:": "Vor- und Nachname:",
      "Adresa:": "Adresse:",
      "[DOPUNITI prije objave]": "[VOR Veröffentlichung ergänzen]",
      "[DOPUNITI e-mail adresu]": "[E-Mail-Adresse ergänzen]",
      "Prije javne objave dopunite nedostajuće podatke i provjerite koje podatke o pružatelju smještaja morate objaviti prema propisima koji se primjenjuju na vaše poslovanje.": "Ergänzen Sie vor der Veröffentlichung die fehlenden Angaben und prüfen Sie, welche Informationen über den Unterkunftsanbieter nach den für Sie geltenden Vorschriften veröffentlicht werden müssen.",
      "2. Politika privatnosti": "2. Datenschutzerklärung",
      "Voditelj obrade": "Verantwortlicher",
      "Voditelj obrade osobnih podataka je Zoran Garma, privatni iznajmljivač koji djeluje pod nazivom Apartmani Al Mare. Kontakt za pitanja o privatnosti: [DOPUNITI e-mail adresu].": "Verantwortlicher für die Verarbeitung personenbezogener Daten ist Zoran Garma, privater Gastgeber unter dem Namen Al Mare Apartments. Kontakt bei Datenschutzfragen: [E-Mail-Adresse ergänzen].",
      "Koje podatke možemo prikupljati?": "Welche Daten können wir erheben?",
      "Kada pošaljete upit za smještaj, možemo obrađivati podatke koje unesete u obrazac, primjerice ime, adresu e-pošte, telefonski broj ako ga navedete, željene datume boravka, broj gostiju i sadržaj poruke.": "Wenn Sie eine Unterkunftsanfrage senden, können wir die von Ihnen im Formular eingegebenen Angaben verarbeiten, beispielsweise Ihren Namen, Ihre E-Mail-Adresse, eine gegebenenfalls angegebene Telefonnummer, gewünschte Aufenthaltsdaten, die Gästezahl und den Inhalt Ihrer Nachricht.",
      "Zašto obrađujemo podatke?": "Warum verarbeiten wir Daten?",
      "Podatke koristimo radi odgovora na vaš upit, provjere raspoloživosti smještaja i dogovora uvjeta mogućeg boravka. Ako se rezervacija ugovori, određeni podaci mogu se obrađivati i radi ispunjavanja zakonskih obveza.": "Wir verwenden die Daten, um Ihre Anfrage zu beantworten, die Verfügbarkeit der Unterkunft zu prüfen und die Bedingungen eines möglichen Aufenthalts zu vereinbaren. Bei einer Buchung können bestimmte Daten auch zur Erfüllung gesetzlicher Pflichten verarbeitet werden.",
      "Pravna osnova": "Rechtsgrundlage",
      "Podaci potrebni za odgovor na upit i poduzimanje radnji prije mogućeg sklapanja ugovora obrađuju se, kada su ispunjeni uvjeti, na temelju članka 6. stavka 1. točke (b) Opće uredbe o zaštiti podataka (GDPR). Za druge svrhe primjenjuje se odgovarajuća pravna osnova.": "Daten, die zur Beantwortung einer Anfrage und für Maßnahmen vor einem möglichen Vertragsabschluss erforderlich sind, werden bei Vorliegen der Voraussetzungen gemäß Artikel 6 Absatz 1 Buchstabe b der Datenschutz-Grundverordnung (DSGVO) verarbeitet. Für andere Zwecke gilt die jeweils passende Rechtsgrundlage.",
      "Koliko dugo čuvamo podatke?": "Wie lange speichern wir Daten?",
      "Podaci se čuvaju samo onoliko dugo koliko je potrebno za obradu upita i komunikaciju. Ako dođe do rezervacije, pojedini podaci mogu se čuvati dulje kada to nalažu zakonske obveze ili je čuvanje potrebno radi pravnih zahtjeva. Točne rokove čuvanja potrebno je odrediti prema stvarnom načinu rada i primjenjivim propisima.": "Daten werden nur so lange gespeichert, wie es für die Bearbeitung der Anfrage und die Kommunikation erforderlich ist. Bei einer Buchung können bestimmte Daten länger aufbewahrt werden, wenn dies gesetzlich vorgeschrieben oder für Rechtsansprüche erforderlich ist. Die genauen Speicherfristen müssen anhand der tatsächlichen Abläufe und der geltenden Vorschriften festgelegt werden.",
      "Primatelji i tehnička obrada": "Empfänger und technische Verarbeitung",
      "Podacima pristupa iznajmljivač. Ako se koriste usluge hostinga, e-pošte ili drugog pružatelja koji obrađuje podatke, obrada se mora urediti u skladu s primjenjivim pravilima zaštite podataka.": "Zugriff auf die Daten hat der Gastgeber. Werden Hosting-, E-Mail- oder andere Dienste eingesetzt, die Daten verarbeiten, muss diese Verarbeitung gemäß den geltenden Datenschutzvorschriften geregelt werden.",
      "Web-stranica objavljena je putem GitHub Pagesa. Prije objave ove politike potrebno je provjeriti koje podatke mogu obrađivati hosting i druge vanjske usluge te odgovarajuće dopuniti informacije o obradi i eventualnom prijenosu podataka.": "Diese Website wird über GitHub Pages veröffentlicht. Vor der Veröffentlichung dieser Erklärung sollte geprüft werden, welche Daten durch den Hostingdienst und andere externe Dienste verarbeitet werden können. Angaben zur Verarbeitung und zu möglichen Datenübermittlungen sind entsprechend zu ergänzen.",
      "Vaša prava": "Ihre Rechte",
      "Ovisno o okolnostima, imate pravo zatražiti pristup, ispravak, brisanje ili ograničenje obrade osobnih podataka, kao i ostvariti druga prava koja vam pripadaju prema GDPR-u. Zahtjev možete poslati na: [DOPUNITI e-mail adresu].": "Je nach Umständen haben Sie das Recht, Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen und weitere Rechte gemäß DSGVO auszuüben. Anfragen richten Sie bitte an: [E-Mail-Adresse ergänzen].",
      "Ako smatrate da se vaši podaci obrađuju protivno propisima, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP):": "Wenn Sie der Ansicht sind, dass Ihre Daten rechtswidrig verarbeitet werden, können Sie eine Beschwerde bei der kroatischen Datenschutzbehörde (AZOP) einreichen:",
      "Sigurnost podataka": "Datensicherheit",
      "Poduzimaju se primjerene mjere za zaštitu osobnih podataka. Opseg i primjerenost tih mjera potrebno je uskladiti sa stvarnim načinom prikupljanja, slanja i čuvanja podataka.": "Es werden angemessene Maßnahmen zum Schutz personenbezogener Daten getroffen. Umfang und Angemessenheit dieser Maßnahmen sollten den tatsächlichen Methoden der Erhebung, Übermittlung und Speicherung entsprechen.",
      "3. Kolačići i slične tehnologije": "3. Cookies und ähnliche Technologien",
      "Kolačići su male datoteke koje web-stranica može pohraniti na vaš uređaj. Mogu služiti osnovnom radu stranice, pamćenju postavki, analitici ili oglašavanju.": "Cookies sind kleine Dateien, die eine Website auf Ihrem Gerät speichern kann. Sie können für grundlegende Website-Funktionen, das Speichern von Einstellungen, Analysen oder Werbung verwendet werden.",
      "U dosadašnjoj početnoj provjeri nije potvrđena uporaba analitičkih ili marketinških kolačića. To ne znači da je njihova odsutnost definitivno utvrđena na svim stranicama i u svim uvjetima korištenja.": "Bei der bisherigen ersten Prüfung wurde die Verwendung von Analyse- oder Marketing-Cookies nicht bestätigt. Das bedeutet nicht, dass ihre Abwesenheit auf allen Seiten und unter allen Nutzungsbedingungen endgültig festgestellt wurde.",
      "Prije objave potrebno je provjeriti kolačiće, lokalnu pohranu i vanjske skripte na svim stranicama. Ako se koriste tehnologije koje zakonski zahtijevaju prethodnu privolu, one se ne smiju aktivirati prije davanja odgovarajuće privole.": "Vor der Veröffentlichung müssen Cookies, lokaler Speicher und externe Skripte auf allen Seiten überprüft werden. Technologien, für die gesetzlich eine vorherige Einwilligung erforderlich ist, dürfen erst nach Erteilung der entsprechenden Einwilligung aktiviert werden.",
      "Ovaj odjeljak treba ažurirati nakon tehničke provjere kako bi odgovarao stvarnoj konfiguraciji web-stranice.": "Dieser Abschnitt sollte nach einer technischen Prüfung aktualisiert werden, damit er der tatsächlichen Konfiguration der Website entspricht.",
      "4. Upiti i dogovor boravka": "4. Anfragen und Aufenthaltsvereinbarung",
      "Slanje kontaktnog obrasca predstavlja upit za smještaj i samo po sebi ne znači da je rezervacija potvrđena. Raspoloživost, cijena, uvjeti plaćanja, trajanje boravka i eventualni uvjeti otkazivanja dogovaraju se naknadno s iznajmljivačem.": "Das Absenden des Kontaktformulars ist eine Unterkunftsanfrage und bedeutet nicht automatisch, dass eine Buchung bestätigt wurde. Verfügbarkeit, Preis, Zahlungsbedingungen, Aufenthaltsdauer und mögliche Stornierungsbedingungen werden anschließend mit dem Gastgeber vereinbart.",
      "Konkretni uvjeti boravka moraju biti jasno priopćeni gostu prije sklapanja dogovora. Ovaj odjeljak ne zamjenjuje pojedinačne uvjete rezervacije niti obvezne informacije koje se primjenjuju na pružanje smještaja.": "Die konkreten Aufenthaltsbedingungen müssen dem Gast vor Abschluss einer Vereinbarung klar mitgeteilt werden. Dieser Abschnitt ersetzt weder individuelle Buchungsbedingungen noch verpflichtende Informationen für die Bereitstellung von Unterkünften.",
      "5. Autorska prava": "5. Urheberrecht",
      "Tekstovi, dizajn i drugi sadržaji ove web-stranice mogu biti zaštićeni autorskim pravom ili drugim pravima intelektualnog vlasništva.": "Texte, Design und andere Inhalte dieser Website können urheberrechtlich oder durch andere Rechte des geistigen Eigentums geschützt sein.",
      "Fotografije i drugi materijali trećih osoba mogu biti zaštićeni zasebnim pravima i licencama. Njihovo korištenje, preuzimanje ili daljnje objavljivanje dopušteno je samo ako postoji odgovarajuća pravna osnova ili dopuštenje.": "Fotos und andere Materialien Dritter können durch eigene Rechte und Lizenzen geschützt sein. Ihre Nutzung, ihr Herunterladen oder ihre Weiterveröffentlichung ist nur mit entsprechender Rechtsgrundlage oder Genehmigung zulässig.",
      "© 2026 Apartmani Al Mare. Sva prava pridržana, u opsegu u kojem ta prava pripadaju odgovarajućem nositelju prava.": "© 2026 Al Mare Apartments. Alle Rechte vorbehalten, soweit diese Rechte dem jeweiligen Rechteinhaber zustehen.",
      "Povratak na početnu stranicu": "Zurück zur Startseite",
      "Vaš kutak za odmor, opuštanje i uživanje u ljepotama Jadrana.": "Ihr Ort zum Entspannen und Genießen der Schönheit der Adria.",

      /* Galerija */
      "Istražite fotografije": "Explore the photos",
      "Svaki kutak ima svoju priču.": "Every corner has a story.",
      "Od udobnog interijera do ljetnih večeri na otvorenom — pogledajte mobilnu kućicu Al Mare izbliza.":
        "From a comfortable interior to summer evenings outdoors, take a closer look at Mobile Home Al Mare.",
      "VRIJEME JE ZA ODMOR": "TIME FOR A HOLIDAY",
      "Naš apartman kroz fotografije.": "Our mobile home in pictures.",
      "Upoznajte prostor u kojem ćete odmarati i otkrijte ljepote koje vas čekaju na Jadranu.":
        "Discover the space where you will unwind and explore the beauty awaiting you on the Adriatic.",
      "Sve": "All",
      "Interijer": "Interior",
      "Kuhinja": "Kitchen",
      "Dnevni boravak": "Living room",
      "Terasa": "Terrace",
      "Sobe": "Bedrooms",
      "Obala": "Coast",
      "Sve fotografije": "All photos",
      "Galerija apartmana": "Mobile Home Gallery",
      "Pogledajte galeriju": "View the gallery",
      "Javite nam se i raspitajte se o slobodnim terminima.":
        "Contact us to ask about available dates.",
      "Upit za rezervaciju": "Booking enquiry",

      /* Lokacija */
      "OTOK MURTER · DALMACIJA": "MURTER ISLAND · DALMATIA",
      "Mjesto gdje": "A place where",
      "more postaje": "the sea becomes",
      "dom.": "home.",
      "NAŠA LOKACIJA": "OUR LOCATION",
      "Otkrijte ljepotu": "Discover the beauty of",
      "otoka Murtera": "Murter Island",
      "Pronađite nas na karti": "Find us on the map",
      "ISTRAŽITE OKOLICU": "EXPLORE THE AREA",
      "Uvala Slanica": "Slanica Cove",
      "Otvori Google Maps": "Open Google Maps",
      "MORE I PLAŽE": "SEA AND BEACHES",
      "vaš kutak uz more": "your place by the sea",
      "DOŽIVITE MURTER": "EXPERIENCE MURTER",
      "Otok koji nudi": "An island that offers",
      "više od odmora": "more than a holiday",
      "Prekrasne plaže": "Beautiful beaches",
      "More i izleti": "Sea and excursions",
      "Dalmatinski okusi": "Dalmatian flavours",
      "Doživite Murter svojim tempom.": "Experience Murter at your own pace.",
      "Uživajte u moru, suncu i opuštenom mediteranskom načinu života.":
        "Enjoy the sea, sunshine and relaxed Mediterranean lifestyle.",
      "Vaš mediteranski odmor počinje ovdje.": "Your Mediterranean holiday starts here.",
      "Otkrijte čaroliju Murtera, miris borova, kristalno more i nezaboravne zalaske sunca. Vaš odmor uz Jadran počinje upravo ovdje.":
        "Discover the magic of Murter, the scent of pine trees, crystal-clear waters and unforgettable sunsets. Your Adriatic holiday begins right here.",
      "Murter je dalmatinski otok poznat po lijepim plažama, čistom moru, mediteranskom ugođaju i pogledu prema Kornatima. Idealno je mjesto za opušten odmor, istraživanje obale i uživanje u lokalnoj gastronomiji.":
        "Murter is a Dalmatian island known for its beautiful beaches, clear waters, Mediterranean atmosphere and views of the Kornati Islands. It is ideal for a relaxing holiday, exploring the coastline and enjoying local cuisine.",
      "Jedna od najpoznatijih plaža na Murteru čeka vas svojim plitkim morem, pješčanim dijelom obale i raznovrsnim sadržajima za ugodan dan uz more.":
        "One of Murter's best-known beaches awaits you with shallow waters, a sandy stretch of coastline and a variety of amenities for an enjoyable day by the sea.",
      "Murter, Šibensko-kninska županija": "Murter, Šibenik-Knin County",
      "More, sunce i mediteranski ugođaj": "Sea, sunshine and Mediterranean charm",
      "Slanica je jedna od najpoznatijih i najposjećenijih plaža na otoku Murteru. Njezino plitko more i pješčani dio obale posebno su privlačni obiteljima, dok okolni ugostiteljski sadržaji pružaju dodatne mogućnosti za cjelodnevni odmor.":
        "Slanica is one of the best-known and most popular beaches on Murter Island. Its shallow waters and sandy shoreline are especially appealing to families, while nearby cafés and restaurants offer more options for a relaxing day.",
      "Provedite dan kupajući se, šetajući uz obalu ili jednostavno uživajući u pogledu na more. Za kraj dana odvojite trenutak za dalmatinski zalazak sunca.":
        "Spend the day swimming, walking along the coast or simply enjoying the sea views. End the day by taking a moment to admire a Dalmatian sunset.",
      "Saznajte više o plaži Slanica": "Learn more about Slanica Beach",
      "Uživajte u moru, upoznajte lokalne okuse i istražite mjesta koja daju poseban karakter ovom dijelu Dalmacije.":
        "Enjoy the sea, discover local flavours and explore the places that give this part of Dalmatia its special character."
    },

    de: {
      "Početna": "Startseite",
      "Mobilna kućica": "Mobilheim",
      "Galerija": "Galerie",
      "Lokacija": "Lage",
      "Kontakt": "Kontakt",
      "Rezervirajte boravak": "Aufenthalt buchen",
      "Otkrijte mobilnu kućicu": "Mobilheim entdecken",
      "Pošaljite upit": "Anfrage senden",
      "VAŠ MALI KUTAK MEDITERANA": "IHR KLEINES MEDITERRANES PARADIES",
      "Vaš odmor počinje ovdje.": "Ihr Urlaub beginnt hier.",
      "Dobro došli u Al Mare, mjesto gdje se dalmatinski šarm susreće s udobnošću i gdje svaki dan miriše na more, sunce i pravi odmor.":
        "Willkommen im Mobilheim Al Mare, wo dalmatinischer Charme auf Komfort trifft und jeder Tag nach Meer, Sonne und Erholung duftet.",
      "DALMACIJA · MURTER": "DALMATIEN · MURTER",
      "OTKRIJTE VIŠE": "MEHR ENTDECKEN",
      "Jedan poseban apartman": "Ein besonderes Mobilheim",
      "Mediteranski ugođaj": "Mediterranes Ambiente",
      "Odmor po vašoj mjeri": "Urlaub nach Ihren Wünschen",
      "Blizu ljepota Jadrana": "Nahe der Schönheit der Adria",
      "Cijena od": "Ab",
      "80 € / noć": "80 € / Nacht",
      "VAŠ DOM NA ODMORU": "IHR URLAUBSZUHAUSE",
      "Malo mediteranske čarolije, puno trenutaka za pamćenje.":
        "Ein wenig mediterrane Magie, viele unvergessliche Momente.",
      "Mobilna kućica Al Mare osmišljen je za one koji žele predahnuti, uživati u udobnosti i doživjeti ljepotu Jadrana.":
        "Das Mobilheim Al Mare ist für alle gedacht, die eine Auszeit nehmen, Komfort genießen und die Schönheit der Adria erleben möchten.",
      "Uživajte u ugodnom ambijentu, opuštenoj atmosferi i detaljima inspiriranima Mediteranom. Bilo da planirate obiteljski odmor ili nekoliko dana daleko od svakodnevice, Al Mare pruža prostor za vaše najljepše ljetne uspomene.":
        "Genießen Sie das angenehme Ambiente, die entspannte Atmosphäre und die vom Mittelmeer inspirierten Details. Ob Sie einen Familienurlaub oder ein paar Tage fernab vom Alltag planen – Al Mare bietet den perfekten Rahmen für Ihre schönsten Sommererinnerungen.",
      "Klimatizacija": "Klimaanlage",
      "Za ugodan boravak": "Für einen angenehmen Aufenthalt",
      "Ostanite povezani": "Bleiben Sie verbunden",
      "Parking": "Parkplatz",
      "Praktičnost za goste": "Komfort für unsere Gäste",
      "Opremljena kuhinja": "Voll ausgestattete Küche",
      "Sloboda vlastitog ritma": "Urlaub im eigenen Rhythmus",
      "Raspitajte se o terminima": "Verfügbarkeit anfragen",
      "LJEPOTA JEDNOSTAVNOSTI": "DIE SCHÖNHEIT DER EINFACHHEIT",
      "Ovdje odmor ima svoj ritam.": "Hier hat der Urlaub seinen eigenen Rhythmus.",
      "Topli dani, večeri na otvorenom i onaj poseban osjećaj kada napokon imate vremena za sebe.":
        "Warme Tage, Abende im Freien und das besondere Gefühl, endlich Zeit für sich selbst zu haben.",
      "Jutro bez žurbe": "Ein Morgen ohne Eile",
      "Započnite dan polako, uz kavu i planove koji ovise samo o vašem raspoloženju.":
        "Beginnen Sie den Tag ganz entspannt mit einem Kaffee und Plänen, die nur von Ihrer Stimmung abhängen.",
      "Blizina mora": "Nähe zum Meer",
      "Istražite obalu, pronađite svoju omiljenu plažu i prepustite se mediteranskom načinu života.":
        "Erkunden Sie die Küste, entdecken Sie Ihren Lieblingsstrand und genießen Sie den mediterranen Lebensstil.",
      "Večeri za pamćenje": "Unvergessliche Abende",
      "Uživajte u mirnim večerima, dobroj hrani i trenucima zbog kojih se poželite vratiti.":
        "Genießen Sie ruhige Abende, gutes Essen und Momente, die Lust auf eine Rückkehr machen.",
      "ZAVIRITE UNUTRA": "WERFEN SIE EINEN BLICK HINEIN",
      "Upoznajte Al Mare.": "Lernen Sie Al Mare kennen.",
      "Pogledajte fotografiju apartmana": "Foto des Mobilheims ansehen",
      "Pogledajte fotografiju spavaće sobe": "Schlafzimmerfoto ansehen",
      "Pogledajte fotografiju kuhinje": "Küchenfoto ansehen",
      "Pogledajte fotografiju terase": "Terrassenfoto ansehen",
      "Dnevni prostor apartmana": "Wohnbereich des Mobilheims",
      "Spavaća soba": "Schlafzimmer",
      "Kuhinja apartmana": "Küche des Mobilheims",
      "Kamin": "Kamin",
      "Prostor za opuštanje": "Ein Ort zum Entspannen",
      "Mir i udobnost": "Ruhe und Komfort",
      "Svaki detalj na svom mjestu": "Jedes Detail am richtigen Platz",
      "Trenuci na otvorenom": "Momente im Freien",
      "VAŠ ODMOR POČINJE OVDJE": "IHR URLAUB BEGINNT HIER",
      "More zove.": "Das Meer ruft.",
      "Hoćete li se javiti?": "Gehen Sie ran?",
      "Javite nam se i raspitajte se o dostupnosti apartmana za svoj sljedeći odmor.":
        "Kontaktieren Sie uns und fragen Sie nach der Verfügbarkeit unseres Mobilheims für Ihren nächsten Urlaub.",
      "Dogovorimo vaš boravak": "Planen wir Ihren Aufenthalt",
      "JAVITE NAM SE": "KONTAKTIEREN SIE UNS",
      "Vaše mjesto uz more vas čeka.": "Ihr Platz am Meer wartet auf Sie.",
      "Imate pitanje o apartmanu, cijenama ili slobodnim terminima? Pošaljite nam upit. Rado ćemo vam pomoći pri planiranju odmora.":
        "Haben Sie Fragen zum Mobilheim, zu den Preisen oder zur Verfügbarkeit? Senden Sie uns eine Anfrage. Wir helfen Ihnen gerne bei der Planung Ihres Urlaubs.",
      "E-mail": "E-Mail",
      "Telefon": "Telefon",
      "Ovdje upišite svoju e-mail adresu": "Geben Sie hier Ihre E-Mail-Adresse ein",
      "Ovdje upišite svoj broj telefona": "Geben Sie hier Ihre Telefonnummer ein",
      "Ovdje upišite mjesto u kojem se apartman nalazi": "Geben Sie hier den Standort des Mobilheims ein",
      "Pošaljite upit za boravak": "Anfrage zum Aufenthalt senden",
      "Ispunite podatke i javite nam kada biste željeli posjetiti Al Mare.":
        "Füllen Sie die Angaben aus und teilen Sie uns mit, wann Sie Al Mare besuchen möchten.",
      "Ime i prezime": "Vor- und Nachname",
      "Vaše ime": "Ihr Name",
      "E-mail adresa": "E-Mail-Adresse",
      "Datum dolaska": "Anreisedatum",
      "Datum odlaska": "Abreisedatum",
      "Broj gostiju": "Anzahl der Gäste",
      "Odaberite broj gostiju": "Anzahl der Gäste auswählen",
      "Poruka": "Nachricht",
      "Napišite nam svoje pitanje...": "Schreiben Sie uns Ihre Frage ...",
      "Pošaljite upit": "Anfrage senden",
      "Slanje upita...": "Anfrage wird gesendet ...",
      "Hvala! Vaš upit uspješno je poslan.": "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.",
      "Upit nije poslan. Provjerite radi li server.": "Ihre Anfrage wurde nicht gesendet. Bitte überprüfen Sie, ob der Server läuft.",
      "Vaš kutak za odmor, opuštanje i uživanje u ljepotama Jadrana. Doživite ugodan mediteranski odmor na Murteru.":
        "Ihr Ort zum Erholen und Genießen der Schönheit der Adria. Erleben Sie einen entspannten mediterranen Urlaub auf Murter.",
      "Istražite": "Entdecken",
      "Natrag na vrh": "Zurück nach oben",
      "Murter, Hrvatska": "Murter, Kroatien",
      "© 2026 Al Mare. Sva prava pridržana.": "© 2026 Al Mare. Alle Rechte vorbehalten.",
      "© 2026 Apartmani Al Mare. Sva prava pridržana.": "© 2026 Al Mare Apartments. Alle Rechte vorbehalten.",

      /* Galerija */
      "Istražite fotografije": "Fotos entdecken",
      "Svaki kutak ima svoju priču.": "Jede Ecke erzählt ihre eigene Geschichte.",
      "Od udobnog interijera do ljetnih večeri na otvorenom — pogledajte Apartman Al Mare izbliza.":
        "Vom gemütlichen Innenbereich bis zu Sommerabenden im Freien – entdecken Sie das Mobilheim Al Mare aus nächster Nähe.",
      "VRIJEME JE ZA ODMOR": "ZEIT FÜR URLAUB",
      "Naš apartman kroz fotografije.": "Unser Mobilheim in Bildern.",
      "Upoznajte prostor u kojem ćete odmarati i otkrijte ljepote koje vas čekaju na Jadranu.":
        "Entdecken Sie den Ort, an dem Sie sich erholen werden, und erleben Sie die Schönheiten, die Sie an der Adria erwarten.",
      "Sve": "Alle",
      "Interijer": "Innenbereich",
      "Kuhinja": "Küche",
      "Dnevni boravak": "Wohnzimmer",
      "Terasa": "Terrasse",
      "Sobe": "Schlafzimmer",
      "Obala": "Küste",
      "Sve fotografije": "Alle Fotos",
      "Galerija apartmana": "Mobilheim-Galerie",
      "Pogledajte galeriju": "Galerie ansehen",
      "Javite nam se i raspitajte se o slobodnim terminima.":
        "Kontaktieren Sie uns und fragen Sie nach freien Terminen.",
      "Upit za rezervaciju": "Buchungsanfrage",

      /* Lokacija */
      "OTOK MURTER · DALMACIJA": "INSEL MURTER · DALMATIEN",
      "Mjesto gdje": "Ein Ort, an dem",
      "more postaje": "das Meer zum",
      "dom.": "Zuhause wird.",
      "NAŠA LOKACIJA": "UNSER STANDORT",
      "Otkrijte ljepotu": "Entdecken Sie die Schönheit",
      "otoka Murtera": "der Insel Murter",
      "Pronađite nas na karti": "Finden Sie uns auf der Karte",
      "ISTRAŽITE OKOLICU": "ENTDECKEN SIE DIE UMGEBUNG",
      "Uvala Slanica": "Bucht Slanica",
      "Otvori Google Maps": "Google Maps öffnen",
      "MORE I PLAŽE": "MEER UND STRÄNDE",
      "vaš kutak uz more": "Ihr Platz am Meer",
      "DOŽIVITE MURTER": "MURTER ERLEBEN",
      "Otok koji nudi": "Eine Insel, die mehr",
      "više od odmora": "als Urlaub bietet",
      "Prekrasne plaže": "Wunderschöne Strände",
      "More i izleti": "Meer und Ausflüge",
      "Dalmatinski okusi": "Dalmatinische Küche",
      "Doživite Murter svojim tempom.": "Erleben Sie Murter in Ihrem eigenen Tempo.",
      "Uživajte u moru, suncu i opuštenom mediteranskom načinu života.":
        "Genießen Sie das Meer, die Sonne und den entspannten mediterranen Lebensstil.",
      "Vaš mediteranski odmor počinje ovdje.": "Ihr mediterraner Urlaub beginnt hier.",
      "Otkrijte čaroliju Murtera, miris borova, kristalno more i nezaboravne zalaske sunca. Vaš odmor uz Jadran počinje upravo ovdje.":
        "Entdecken Sie den Zauber Murters, den Duft der Pinien, das kristallklare Meer und unvergessliche Sonnenuntergänge. Ihr Urlaub an der Adria beginnt genau hier.",
      "Murter je dalmatinski otok poznat po lijepim plažama, čistom moru, mediteranskom ugođaju i pogledu prema Kornatima. Idealno je mjesto za opušten odmor, istraživanje obale i uživanje u lokalnoj gastronomiji.":
        "Murter ist eine dalmatinische Insel, die für ihre schönen Strände, das klare Meer, das mediterrane Ambiente und den Blick auf die Kornaten bekannt ist. Sie ist ideal für einen entspannten Urlaub, Erkundungen entlang der Küste und den Genuss regionaler Küche.",
      "Jedna od najpoznatijih plaža na Murteru čeka vas svojim plitkim morem, pješčanim dijelom obale i raznovrsnim sadržajima za ugodan dan uz more.":
        "Einer der bekanntesten Strände Murters erwartet Sie mit flachem Wasser, einem sandigen Küstenabschnitt und vielfältigen Angeboten für einen angenehmen Tag am Meer.",
      "Murter, Šibensko-kninska županija": "Murter, Gespanschaft Šibenik-Knin",
      "More, sunce i mediteranski ugođaj": "Meer, Sonne und mediterranes Flair",
      "Slanica je jedna od najpoznatijih i najposjećenijih plaža na otoku Murteru. Njezino plitko more i pješčani dio obale posebno su privlačni obiteljima, dok okolni ugostiteljski sadržaji pružaju dodatne mogućnosti za cjelodnevni odmor.":
        "Slanica ist einer der bekanntesten und meistbesuchten Strände der Insel Murter. Das flache Wasser und der sandige Küstenabschnitt sind besonders bei Familien beliebt. Cafés und Restaurants in der Umgebung bieten zusätzliche Möglichkeiten für einen entspannten Tag.",
      "Provedite dan kupajući se, šetajući uz obalu ili jednostavno uživajući u pogledu na more. Za kraj dana odvojite trenutak za dalmatinski zalazak sunca.":
        "Verbringen Sie den Tag mit Schwimmen, einem Spaziergang an der Küste oder genießen Sie einfach den Meerblick. Lassen Sie den Tag mit einem dalmatinischen Sonnenuntergang ausklingen.",
      "Saznajte više o plaži Slanica": "Mehr über den Strand Slanica erfahren",
      "Uživajte u moru, upoznajte lokalne okuse i istražite mjesta koja daju poseban karakter ovom dijelu Dalmacije.":
        "Genießen Sie das Meer, entdecken Sie regionale Spezialitäten und erkunden Sie die Orte, die diesem Teil Dalmatiens seinen besonderen Charakter verleihen."
    }
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  const originalTitle = document.title;
  const originalDescription =
    document.querySelector('meta[name="description"]')?.content || "";

  const pageTitles = {
    en: {
      "Mobilna kućica Al Mare | Mediteranski odmor uz Jadran":
        "Mobile Home Al Mare | Mediterranean Holiday on the Adriatic",
      "Lokacija | Apartmani Al Mare":
        "Location | Mobile Home Al Mare",
      "Galerija | Apartmani Al Mare":
<<<<<<< Updated upstream
        "Gallery | Al Mare Apartments",
      "Pravne informacije | Apartmani Al Mare": "Legal information | Al Mare Apartments"
=======
        "Gallery | Mobile Home Al Mare"
>>>>>>> Stashed changes
    },
    de: {
      "Mobilna kućica Al Mare | Mediteranski odmor uz Jadran":
        "Mobilheim Al Mare | Mediterraner Urlaub an der Adria",
      "Lokacija | Apartmani Al Mare":
        "Lage | Mobilheim Al Mare",
      "Galerija | Apartmani Al Mare":
<<<<<<< Updated upstream
        "Galerie | Apartments Al Mare",
      "Pravne informacije | Apartmani Al Mare": "Rechtliche Informationen | Apartments Al Mare"
=======
        "Galerie | Mobilheim Al Mare"
>>>>>>> Stashed changes
    }
  };

  const descriptions = {
    en: "Discover Mobile Home Al Mare, your Mediterranean retreat for relaxation and enjoying the Adriatic. Send an enquiry to plan your stay.",
    de: "Entdecken Sie das Mobilheim Al Mare – Ihren mediterranen Rückzugsort zum Entspannen und Genießen der Adria. Senden Sie eine Anfrage für Ihren Aufenthalt."
  };

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translateTextNodes(language) {
    const dictionary = dictionaries[language] || {};
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      const parent = node.parentElement;

      if (!parent) continue;

      if (
        ["SCRIPT", "STYLE", "NOSCRIPT", "CODE"].includes(parent.tagName) ||
        parent.closest("[data-no-translate]")
      ) {
        continue;
      }

      if (!originalText.has(node)) {
        originalText.set(node, node.nodeValue);
      }

      const original = originalText.get(node);
      const key = normalize(original);

      if (language === "hr") {
        node.nodeValue = original;
      } else if (dictionary[key]) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];

        node.nodeValue = leading + dictionary[key] + trailing;
      }
    }
  }

  function translateAttributes(language) {
    const dictionary = dictionaries[language] || {};

    const elements = document.querySelectorAll(
      "[placeholder], [aria-label], [title], [alt]"
    );

    elements.forEach(element => {
      ["placeholder", "aria-label", "title", "alt"].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;

        if (!originalAttributes.has(element)) {
          originalAttributes.set(element, {});
        }

        const saved = originalAttributes.get(element);

        if (!(attribute in saved)) {
          saved[attribute] = element.getAttribute(attribute);
        }

        const original = saved[attribute];
        const translated = dictionary[normalize(original)];

        element.setAttribute(
          attribute,
          language === "hr" ? original : (translated || original)
        );
      });
    });
  }

  function translateDocumentMetadata(language) {
    document.documentElement.lang = language;

    document.title =
      language === "hr"
        ? originalTitle
        : (pageTitles[language]?.[originalTitle] || originalTitle);

    const descriptionElement =
      document.querySelector('meta[name="description"]');

    if (descriptionElement) {
      descriptionElement.content =
        language === "hr"
          ? originalDescription
          : (descriptions[language] || originalDescription);
    }
  }

  function updateActiveLanguage(language) {
    document.querySelectorAll("[data-almare-lang]").forEach(button => {
      const active = button.dataset.almareLang === language;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setLanguage(language) {
    if (!["hr", "en", "de"].includes(language)) {
      language = "hr";
    }

    localStorage.setItem("alMareLanguage", language);

    translateTextNodes(language);
    translateAttributes(language);
    translateDocumentMetadata(language);
    updateActiveLanguage(language);
  }

  function addLanguageSwitcher() {
    const navbar = document.querySelector(".navbar-nav");

    if (!navbar) {
      console.warn("Al Mare: nije pronađen element .navbar-nav.");
      return;
    }

    if (navbar.querySelector(".almare-language-item")) {
      return;
    }

    const languageItem = document.createElement("li");

    languageItem.className =
      "nav-item almare-language-item d-flex align-items-center justify-content-center gap-1 ms-lg-3 my-2 my-lg-0";

    const languages = [
      {
        code: "hr",
        name: "Hrvatski",
        flag: "https://flagcdn.com/w40/hr.png"
      },
      {
        code: "en",
        name: "English",
        flag: "https://flagcdn.com/w40/gb.png"
      },
      {
        code: "de",
        name: "Deutsch",
        flag: "https://flagcdn.com/w40/de.png"
      }
    ];

    languages.forEach((language, index) => {
      if (index > 0) {
        const separator = document.createElement("span");
        separator.className = "almare-language-separator";
        separator.textContent = "|";
        languageItem.appendChild(separator);
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "almare-language-button";
      button.dataset.almareLang = language.code;
      button.setAttribute("aria-label", language.name);
      button.setAttribute("title", language.name);

      const flag = document.createElement("img");
      flag.src = language.flag;
      flag.alt = language.name;
      flag.className = "almare-language-flag";
      flag.width = 20;
      flag.height = 14;

      const label = document.createElement("span");
      label.className = "almare-language-label";
      label.textContent = language.code.toUpperCase();

      button.appendChild(flag);
      button.appendChild(label);
      languageItem.appendChild(button);
    });

    languageItem.addEventListener("click", event => {
      const button = event.target.closest("button[data-almare-lang]");

      if (!button) return;

      setLanguage(button.dataset.almareLang);

      const collapse = document.querySelector(".navbar-collapse");

      if (collapse?.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse
          .getOrCreateInstance(collapse)
          .hide();
      }
    });

    const reservationLink = navbar.querySelector(".btn-nav-action");
    const reservationItem = reservationLink?.closest("li");

    if (reservationItem && reservationItem.parentElement === navbar) {
      navbar.insertBefore(languageItem, reservationItem);
    } else {
      navbar.appendChild(languageItem);
    }
  }

  function addLanguageStyles() {
    if (document.getElementById("almare-language-styles")) return;

    const style = document.createElement("style");
    style.id = "almare-language-styles";

    style.textContent = `
      .almare-language-button {
        border: 0;
        background: transparent;
        color: inherit;
        padding: 6px 3px;
        font: inherit;
        font-size: .82rem;
        font-weight: 600;
        opacity: .7;
        cursor: pointer;
        transition: opacity .2s ease;
      }

      .almare-language-button:hover,
      .almare-language-button.active {
        opacity: 1;
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      .almare-language-separator {
        opacity: .4;
        font-size: .8rem;
      }
    `;

    document.head.appendChild(style);
  }

  function init() {
    addLanguageStyles();
    addLanguageSwitcher();

    const savedLanguage = localStorage.getItem("alMareLanguage") || "hr";

    setLanguage(savedLanguage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
