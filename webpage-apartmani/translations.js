
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
      "Apartman": "Apartment",
      "Galerija": "Gallery",
      "Lokacija": "Location",
      "Kontakt": "Contact",
      "Rezervirajte boravak": "Book your stay",
      "Otkrijte apartman": "Discover the apartment",
      "Pošaljite upit": "Send an enquiry",
      "VAŠ MALI KUTAK MEDITERANA": "YOUR LITTLE MEDITERRANEAN ESCAPE",
      "Vaš odmor počinje ovdje.": "Your holiday starts here.",
      "Dobro došli u Al Mare, mjesto gdje se dalmatinski šarm susreće s udobnošću i gdje svaki dan miriše na more, sunce i pravi odmor.":
        "Welcome to Al Mare, where Dalmatian charm meets comfort and every day brings the scent of the sea, sunshine and a truly relaxing holiday.",
      "DALMACIJA · MURTER": "DALMATIA · MURTER",
      "OTKRIJTE VIŠE": "DISCOVER MORE",
      "Jedan poseban apartman": "A special place to stay",
      "Mediteranski ugođaj": "Mediterranean atmosphere",
      "Odmor po vašoj mjeri": "A holiday your way",
      "Blizu ljepota Jadrana": "Close to the beauty of the Adriatic",
      "Cijena od": "From",
      "80 € / noć": "€80 / night",
      "VAŠ DOM NA ODMORU": "YOUR HOLIDAY HOME",
      "Malo mediteranske čarolije, puno trenutaka za pamćenje.":
        "A little Mediterranean magic, a lifetime of memories.",
      "Apartman Al Mare osmišljen je za one koji žele predahnuti, uživati u udobnosti i doživjeti ljepotu Jadrana.":
        "Apartment Al Mare is designed for those who want to unwind, enjoy comfort and experience the beauty of the Adriatic.",
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
      "Pogledajte fotografiju apartmana": "View the apartment photo",
      "Pogledajte fotografiju spavaće sobe": "View the bedroom photo",
      "Pogledajte fotografiju kuhinje": "View the kitchen photo",
      "Pogledajte fotografiju terase": "View the terrace photo",
      "Dnevni prostor apartmana": "Apartment living area",
      "Spavaća soba": "Bedroom",
      "Kuhinja apartmana": "Apartment kitchen",
      "Kamin": "Fireplace",
      "Prostor za opuštanje": "A space to unwind",
      "Mir i udobnost": "Peace and comfort",
      "Svaki detalj na svom mjestu": "Every detail in its place",
      "Trenuci na otvorenom": "Moments outdoors",
      "VAŠ ODMOR POČINJE OVDJE": "YOUR HOLIDAY STARTS HERE",
      "More zove.": "The sea is calling.",
      "Hoćete li se javiti?": "Will you answer?",
      "Javite nam se i raspitajte se o dostupnosti apartmana za svoj sljedeći odmor.":
        "Get in touch to ask about apartment availability for your next holiday.",
      "Dogovorimo vaš boravak": "Let's plan your stay",
      "JAVITE NAM SE": "GET IN TOUCH",
      "Vaše mjesto uz more vas čeka.": "Your place by the sea is waiting for you.",
      "Imate pitanje o apartmanu, cijenama ili slobodnim terminima? Pošaljite nam upit. Rado ćemo vam pomoći pri planiranju odmora.":
        "Have a question about the apartment, prices or availability? Send us an enquiry. We will be happy to help you plan your holiday.",
      "E-mail": "Email",
      "Telefon": "Phone",
      "Lokacija": "Location",
      "Ovdje upišite svoju e-mail adresu": "Enter your email address here",
      "Ovdje upišite svoj broj telefona": "Enter your phone number here",
      "Ovdje upišite mjesto u kojem se apartman nalazi": "Enter the apartment's location here",
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

      /* Galerija */
      "Istražite fotografije": "Explore the photos",
      "Svaki kutak ima svoju priču.": "Every corner has a story.",
      "Od udobnog interijera do ljetnih večeri na otvorenom — pogledajte Apartman Al Mare izbliza.":
        "From a comfortable interior to summer evenings outdoors, take a closer look at Apartment Al Mare.",
      "VRIJEME JE ZA ODMOR": "TIME FOR A HOLIDAY",
      "Naš apartman kroz fotografije.": "Our apartment in pictures.",
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
      "Galerija apartmana": "Apartment gallery",
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
      "Apartman": "Ferienwohnung",
      "Galerija": "Galerie",
      "Lokacija": "Lage",
      "Kontakt": "Kontakt",
      "Rezervirajte boravak": "Aufenthalt buchen",
      "Otkrijte apartman": "Apartment entdecken",
      "Pošaljite upit": "Anfrage senden",
      "VAŠ MALI KUTAK MEDITERANA": "IHR KLEINES MEDITERRANES PARADIES",
      "Vaš odmor počinje ovdje.": "Ihr Urlaub beginnt hier.",
      "Dobro došli u Al Mare, mjesto gdje se dalmatinski šarm susreće s udobnošću i gdje svaki dan miriše na more, sunce i pravi odmor.":
        "Willkommen in Al Mare, wo dalmatischer Charme auf Komfort trifft und jeder Tag nach Meer, Sonne und Erholung duftet.",
      "DALMACIJA · MURTER": "DALMATIEN · MURTER",
      "OTKRIJTE VIŠE": "MEHR ENTDECKEN",
      "Jedan poseban apartman": "Ein besonderes Apartment",
      "Mediteranski ugođaj": "Mediterranes Ambiente",
      "Odmor po vašoj mjeri": "Urlaub nach Ihren Wünschen",
      "Blizu ljepota Jadrana": "Nahe der Schönheit der Adria",
      "Cijena od": "Ab",
      "80 € / noć": "80 € / Nacht",
      "VAŠ DOM NA ODMORU": "IHR URLAUBSZUHAUSE",
      "Malo mediteranske čarolije, puno trenutaka za pamćenje.":
        "Ein wenig mediterrane Magie, viele unvergessliche Momente.",
      "Apartman Al Mare osmišljen je za one koji žele predahnuti, uživati u udobnosti i doživjeti ljepotu Jadrana.":
        "Das Apartment Al Mare ist für alle gedacht, die eine Auszeit nehmen, Komfort genießen und die Schönheit der Adria erleben möchten.",
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
      "Pogledajte fotografiju apartmana": "Apartmentfoto ansehen",
      "Pogledajte fotografiju spavaće sobe": "Schlafzimmerfoto ansehen",
      "Pogledajte fotografiju kuhinje": "Küchenfoto ansehen",
      "Pogledajte fotografiju terase": "Terrassenfoto ansehen",
      "Dnevni prostor apartmana": "Wohnbereich des Apartments",
      "Spavaća soba": "Schlafzimmer",
      "Kuhinja apartmana": "Küche des Apartments",
      "Kamin": "Kamin",
      "Prostor za opuštanje": "Ein Ort zum Entspannen",
      "Mir i udobnost": "Ruhe und Komfort",
      "Svaki detalj na svom mjestu": "Jedes Detail am richtigen Platz",
      "Trenuci na otvorenom": "Momente im Freien",
      "VAŠ ODMOR POČINJE OVDJE": "IHR URLAUB BEGINNT HIER",
      "More zove.": "Das Meer ruft.",
      "Hoćete li se javiti?": "Gehen Sie ran?",
      "Javite nam se i raspitajte se o dostupnosti apartmana za svoj sljedeći odmor.":
        "Kontaktieren Sie uns und fragen Sie nach der Verfügbarkeit für Ihren nächsten Urlaub.",
      "Dogovorimo vaš boravak": "Planen wir Ihren Aufenthalt",
      "JAVITE NAM SE": "KONTAKTIEREN SIE UNS",
      "Vaše mjesto uz more vas čeka.": "Ihr Platz am Meer wartet auf Sie.",
      "Imate pitanje o apartmanu, cijenama ili slobodnim terminima? Pošaljite nam upit. Rado ćemo vam pomoći pri planiranju odmora.":
        "Haben Sie Fragen zum Apartment, zu den Preisen oder zur Verfügbarkeit? Senden Sie uns eine Anfrage. Wir helfen Ihnen gerne bei der Planung Ihres Urlaubs.",
      "E-mail": "E-Mail",
      "Telefon": "Telefon",
      "Ovdje upišite svoju e-mail adresu": "Geben Sie hier Ihre E-Mail-Adresse ein",
      "Ovdje upišite svoj broj telefona": "Geben Sie hier Ihre Telefonnummer ein",
      "Ovdje upišite mjesto u kojem se apartman nalazi": "Geben Sie hier den Standort des Apartments ein",
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

      /* Galerija */
      "Istražite fotografije": "Fotos entdecken",
      "Svaki kutak ima svoju priču.": "Jede Ecke erzählt ihre eigene Geschichte.",
      "Od udobnog interijera do ljetnih večeri na otvorenom — pogledajte Apartman Al Mare izbliza.":
        "Vom gemütlichen Innenbereich bis zu Sommerabenden im Freien – entdecken Sie das Apartment Al Mare aus nächster Nähe.",
      "VRIJEME JE ZA ODMOR": "ZEIT FÜR URLAUB",
      "Naš apartman kroz fotografije.": "Unser Apartment in Bildern.",
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
      "Galerija apartmana": "Apartmentgalerie",
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
        "Al Mare | Mediterranean Holiday on the Adriatic",
      "Lokacija | Apartmani Al Mare":
        "Location | Al Mare Apartments",
      "Galerija | Apartmani Al Mare":
        "Gallery | Al Mare Apartments"
    },
    de: {
      "Mobilna kućica Al Mare | Mediteranski odmor uz Jadran":
        "Al Mare | Mediterraner Urlaub an der Adria",
      "Lokacija | Apartmani Al Mare":
        "Lage | Apartments Al Mare",
      "Galerija | Apartmani Al Mare":
        "Galerie | Apartments Al Mare"
    }
  };

  const descriptions = {
    en: "Discover Apartment Al Mare, your Mediterranean retreat for relaxation and enjoying the Adriatic. Send an enquiry to plan your stay.",
    de: "Entdecken Sie das Apartment Al Mare – Ihren mediterranen Rückzugsort zum Entspannen und Genießen der Adria. Senden Sie eine Anfrage für Ihren Aufenthalt."
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
button.appendChild(label)
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
