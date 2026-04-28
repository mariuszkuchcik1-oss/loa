// ============================================================
//  riddlesData — zagadki dla Liceum Policyjnego
// ============================================================

const riddlesData = {
  easy: [
    {
      title: "Strażnik Prawa",
      text: "Jestem podstawowym aktem prawnym Rzeczypospolitej Polskiej. Wszystkie inne ustawy muszą być ze mną zgodne. Gwarantuję prawa i wolności obywateli. Jestem najwyższym prawem w Polsce. Co to jestem?",
      answers: ["Kodeks Karny", "Konstytucja RP", "Ustawa o Policji", "Kodeks Postępowania Karnego"],
      correct: 1,
      hint: "Uchwalona 2 kwietnia 1997 roku przez Zgromadzenie Narodowe.",
      success: "Konstytucja RP — najwyższy akt prawny w Polsce, podstawa całego systemu prawa."
    },
    {
      title: "Niebieskie Światła",
      text: "Jestem formacją umundurowaną powołaną do ochrony bezpieczeństwa ludzi oraz do utrzymywania bezpieczeństwa i porządku publicznego. Działam na podstawie ustawy z dnia 6 kwietnia 1990 roku. Kim jestem?",
      answers: ["Straż Miejska", "Żandarmeria Wojskowa", "Policja", "Straż Graniczna"],
      correct: 2,
      hint: "Moje motto to: Służymy i chronimy.",
      success: "Policja — centralna formacja bezpieczeństwa publicznego w Polsce, powołana ustawą z 1990 r."
    },
    {
      title: "Prawa Zatrzymanego",
      text: "Jestem prawem każdej osoby zatrzymanej przez Policję. Muszę zostać poinformowany o zarzutach. Mogę odmówić składania wyjaśnień bez podania powodu. Mam prawo do obrońcy już od chwili zatrzymania. Czym jestem?",
      answers: ["Prawo łaski", "Prawo do obrony", "Prawo azylu", "Prawo do sądu"],
      correct: 1,
      hint: "Zagwarantowane w art. 42 Konstytucji RP oraz Kodeksie Postępowania Karnego.",
      success: "Prawo do obrony — fundamentalne prawo każdego oskarżonego, chronione Konstytucją RP."
    },
    {
      title: "Ślad na Miejscu",
      text: "Jestem nauką badającą metody i środki wykrywania przestępstw, identyfikacji sprawców oraz zabezpieczania dowodów. Uczniowie liceum policyjnego uczą się moich technik: daktyloskopii, traseologii i balistyki. Czym jestem?",
      answers: ["Kryminologia", "Kryminalistyka", "Penologia", "Wiktymologia"],
      correct: 1,
      hint: "Dzielę się na trzy działy: technikę, taktykę i metodykę kryminalistyczną.",
      success: "Kryminalistyka — nauka o metodach wykrywania i dokumentowania przestępstw."
    },
    {
      title: "Odcisk Palca",
      text: "Jestem metodą identyfikacji człowieka opartą na unikalnym układzie linii papilarnych na opuszkach palców. Żadne dwie osoby na świecie nie mają takich samych wzorów. Stosowana jest w kryminalistyce od ponad 100 lat. Co to za metoda?",
      answers: ["Traseologia", "Daktyloskopia", "Osmologia", "Antropometria"],
      correct: 1,
      hint: "Nazwa pochodzi od greckich słów daktylos (palec) i skopein (oglądać).",
      success: "Daktyloskopia — identyfikacja na podstawie linii papilarnych, jeden z fundamentów kryminalistyki."
    }
  ],

  medium: [
    {
      title: "Rodzaje Winy",
      text: "Jestem formą winy w prawie karnym. Sprawca nie chce popełnić przestępstwa, ale przewiduje możliwość jego popełnienia i godzi się na to. Różnię się od zamiaru bezpośredniego — tam sprawca chce skutku. Jak mnie nazywają?",
      answers: ["Nieumyślność z lekkomyślności", "Zamiar ewentualny (dolus eventualis)", "Zamiar bezpośredni", "Nieumyślność z niedbalstwa"],
      correct: 1,
      hint: "W kodeksie karnym: 'sprawca przewidując możliwość popełnienia, godzi się na to'.",
      success: "Zamiar ewentualny — sprawca godzi się na skutek, choć go nie chce. Jedna z form winy umyślnej."
    },
    {
      title: "Miejsce Zdarzenia",
      text: "Jestem czynnością procesową polegającą na badaniu miejsca, gdzie miało miejsce przestępstwo lub inne zdarzenie. Przeprowadzam ją uprawniony organ, a wyniki dokumentuję protokołem. Zabezpieczam ślady i dowody rzeczowe. Czym jestem?",
      answers: ["Rewizja", "Przeszukanie", "Oględziny", "Konfrontacja"],
      correct: 2,
      hint: "Reguluje mnie art. 207 Kodeksu Postępowania Karnego.",
      success: "Oględziny — kluczowa czynność procesowa na miejscu zdarzenia, dokumentowana protokołem."
    },
    {
      title: "Siły Porządkowe",
      text: "Jestem jednostką Policji przeznaczoną do działań wymagających użycia sił w zwartych oddziałach: zabezpieczanie imprez masowych, tłumienie zamieszek, działania antyterrorystyczne niższego szczebla. Jak mnie nazywają?",
      answers: ["CBŚP", "Oddział Prewencji Policji", "ABW", "BOA"],
      correct: 1,
      hint: "Wyposażony w tarcze, hełmy i wyposażenie do działań grupowych.",
      success: "Oddział Prewencji Policji — formacja do działań w zwartych szykach, zabezpieczeń i interwencji grupowych."
    },
    {
      title: "Dowód Rzeczowy",
      text: "Jestem przedmiotem, który może służyć jako środek dowodowy w postępowaniu karnym. Mogę być narzędziem przestępstwa, przedmiotem na którym przestępstwo popełniono lub przedmiotem uzyskanym z przestępstwa. Przechowuje mnie sąd lub organ prowadzący postępowanie. Czym jestem?",
      answers: ["Protokół", "Dowód rzeczowy", "Opinia biegłego", "Zeznanie świadka"],
      correct: 1,
      hint: "Reguluje mnie art. 193–195 Kodeksu Postępowania Karnego.",
      success: "Dowód rzeczowy — materialny środek dowodowy w postępowaniu karnym, zabezpieczany i przechowywany przez organy ścigania."
    },
    {
      title: "Pierwsza Pomoc",
      text: "Jestem zespołem czynności podejmowanych w celu ratowania osoby w stanie nagłego zagrożenia zdrowotnego. Każdy funkcjonariusz Policji jest zobowiązany do mojego udzielenia. Niewykonanie tego obowiązku może skutkować odpowiedzialnością karną. Czym jestem?",
      answers: ["Resuscytacja krążeniowo-oddechowa", "Pierwsza pomoc przedmedyczna", "Triage medyczny", "Pomoc kwalifikowana"],
      correct: 1,
      hint: "Obowiązek wynika z art. 162 Kodeksu Karnego — nieudzielenie grozi karą pozbawienia wolności.",
      success: "Pierwsza pomoc przedmedyczna — obowiązek prawny każdego obywatela i funkcjonariusza, chroniony art. 162 KK."
    }
  ],

  hard: [
    {
      title: "Zasada Legalizmu",
      text: "Jestem fundamentalną zasadą polskiego procesu karnego, nakazującą organom ścigania wszczynanie i prowadzenie postępowania zawsze, gdy zachodzi uzasadnione podejrzenie popełnienia przestępstwa. Nie mogą działać według własnego uznania — muszą ścigać. Jak mnie nazywają?",
      answers: ["Zasada kontradyktoryjności", "Zasada legalizmu", "Zasada opportunizmu", "Zasada inkwizycyjności"],
      correct: 1,
      hint: "Wyrażona w art. 10 §1 KPK: organ zobowiązany jest wszcząć i przeprowadzić postępowanie karne.",
      success: "Zasada legalizmu — Policja i prokuratura nie mają wyboru: muszą ścigać każde przestępstwo ścigane z urzędu."
    },
    {
      title: "Ślad Zapachowy",
      text: "Jestem metodą kryminalistyczną polegającą na identyfikacji człowieka na podstawie jego indywidualnego zapachu, pobranego ze śladów pozostawionych na miejscu zdarzenia, przy użyciu wyszkolonych psów lub analizy chemicznej. Jak mnie nazywają?",
      answers: ["Daktyloskopia", "Traseologia", "Osmologia", "Fonoskopia"],
      correct: 2,
      hint: "Nazwa pochodzi od greckiego osme — zapach. Każdy człowiek ma unikalny profil zapachowy.",
      success: "Osmologia — nauka o śladach zapachowych, wykorzystywana do identyfikacji sprawców przestępstw."
    },
    {
      title: "Obrona Konieczna",
      text: "Jestem okolicznością wyłączającą bezprawność czynu w prawie karnym. Pozwalam odpierać bezpośredni, bezprawny zamach na jakiekolwiek dobro chronione prawem za pomocą środków niezbędnych do jego odparcia. Uregulowany jestem w art. 25 Kodeksu Karnego. Czym jestem?",
      answers: ["Stan wyższej konieczności", "Obrona konieczna", "Kontratyp pozaustawowy", "Rozkaz przełożonego"],
      correct: 1,
      hint: "Przekroczenie moich granic to eksces ekstensywny lub intensywny.",
      success: "Obrona konieczna (art. 25 KK) — prawo do odpierania bezprawnego zamachu, wyłączające odpowiedzialność karną."
    },
    {
      title: "Europejski Nakaz",
      text: "Jestem instrumentem prawnym Unii Europejskiej umożliwiającym przekazywanie osób ściganych między państwami członkowskimi bez tradycyjnej ekstradycji. Zastąpiłem konwencje ekstradycyjne między krajami UE w 2004 roku. Jak mnie nazywają?",
      answers: ["Interpol Red Notice", "Europejski Nakaz Aresztowania (ENA)", "Schengen Alert", "Umowa dublińska"],
      correct: 1,
      hint: "Po angielsku: European Arrest Warrant (EAW). Decyzja ramowa Rady UE z 2002 roku.",
      success: "Europejski Nakaz Aresztowania — uproszczona procedura przekazywania osób ściganych między państwami UE."
    },
    {
      title: "Analiza Kryminalna",
      text: "Jestem procesem systematycznego badania informacji kryminalnych w celu identyfikacji wzorców przestępczości, powiązań między sprawcami i ofiarami oraz prognozowania przyszłych zdarzeń. Policja wykorzystuje mnie do planowania działań prewencyjnych i dochodzeniowych. Czym jestem?",
      answers: ["Profilowanie kryminalne", "Analiza kryminalna", "Victymologia operacyjna", "Wywiad kryminalny"],
      correct: 1,
      hint: "Dzieli się na analizę operacyjną (bieżące sprawy) i strategiczną (długoterminowe trendy).",
      success: "Analiza kryminalna — naukowe narzędzie wspierające pracę Policji: od wykrywania wzorców po prognozowanie zagrożeń."
    }
  ]
};
