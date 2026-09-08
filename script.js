/* =========================================================
   BAZA PYTAŃ
   =========================================================

   answer:
   0 = A
   1 = B
   2 = C
   3 = D

   id musi być unikalne dla każdego pytania.
*/


const questions = [
    // ===== LUTY 2025 =====
    {
        "id": 1,
        "question": "Obowiązek ubezpieczyciela w zakresie uzyskania od ubezpieczającego, w formie ankiety, informacji dotyczących jego potrzeb, wiedzy i doświadczenia w dziedzinie ubezpieczeń na życie oraz jego sytuacji finansowej dotyczy:",
        "answers": [
            "wszystkich ubezpieczeń na życie",
            "ubezpieczeń z działu I grupy 3 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "tylko ubezpieczeń na życie z ubezpieczeniowym funduszem kapitałowym",
            "wszystkich ubezpieczeń na życie, które przewidują udział w zysku"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 1
    },
    {
        "id": 2,
        "question": "Zastrzeżenie możliwości jednostronnej zmiany ogólnych warunków ubezpieczenia mienia w trakcie jej trwania przez ubezpieczyciela z ważnych powodów wskazanych w umowie jest możliwe jeżeli umowa jest zawarta na:",
        "answers": [
            "na czas określony",
            "na czas nieokreślony",
            "na co najmniej sześć miesięcy",
            "na co najmniej 12 miesięcy"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 2
    },
    {
        "id": 3,
        "question": "Podstawowe międzynarodowe uregulowania odnoszące się do faktoringu zawarte są w:",
        "answers": [
            "Zrewidowanym Porozumieniu Waterborne z roku 1976",
            "Porozumieniu z Montrealu z 1966 roku",
            "Konwencji Ottawskiej z 1988 roku",
            "Protokole Haskim z 1955 roku"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 3
    },
    {
        "id": 4,
        "question": "Odpowiedzialność odszkodowawcza prowadzącego na własny rachunek przedsiębiorstwo wprawiane w ruch za pomocą sił przyrody za szkodę wyrządzoną przez ruch tego przedsiębiorstwa jest wyłączona:",
        "answers": [
            "tylko w razie siły wyższej",
            "tylko w razie wyłącznej winy poszkodowanego",
            "tylko w razie wyłącznej winy osoby trzeciej",
            "w razie siły wyższej, wyłącznej winy poszkodowanego albo wyłącznej winy osoby trzeciej"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 4
    },
    {
        "id": 5,
        "question": "Budynek ubezpieczono od ognia na sumę 500.000 zł w wartości odtworzeniowej. Ustanowiono sumę prewencyjną dla 2 obiektów równą 500.000 zł. Wartość budynku w dniu pożaru wyniosła 800.000 zł, a szkoda – 80.000 zł. Odszkodowanie wyniesie:",
        "answers": [
            "50.000 zł",
            "60.000 zł",
            "80.000 zł",
            "128.000 zł"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 5
    },
    {
        "id": 6,
        "question": "Dla zachowania formy pisemnej umowy:",
        "answers": [
            "wystarczy wydruk treści na papierze, jeżeli wiadomo, kto go wykonał",
            "konieczny jest własnoręczny podpis",
            "wystarczy mechaniczne odwzorowanie podpisu",
            "konieczny jest własnoręczny podpis na ostatniej stronie oraz parafowanie pozostałych stron"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 6
    },
    {
        "id": 7,
        "question": "Zgodnie z ustawą o działalności ubezpieczeniowej i reasekuracyjnej, jeżeli zakład ubezpieczeń stosuje outsourcing czynności ubezpieczeniowych oraz funkcji należących do systemu zarządzania:",
        "answers": [
            "odpowiedzialność zakładu ubezpieczeń za szkody wyrządzone ubezpieczającym, ubezpieczonym lub uprawnionym z umów ubezpieczenia wskutek niewykonania lub nienależytego wykonania outsourcingu nie można wyłączyć ani ograniczyć",
            "odpowiedzialność zakładu ubezpieczeń za szkody wyrządzone ubezpieczającym, ubezpieczonym lub uprawnionym z umów ubezpieczenia wskutek niewykonania lub nienależytego wykonania outsourcingu można wyłączyć lub ograniczyć",
            "odpowiedzialność za szkody wyrządzone ubezpieczającym, ubezpieczonym lub uprawnionym z umów ubezpieczenia wskutek niewykonania lub nienależytego wykonania outsourcingu ponosi dostawca usług",
            "zakład ubezpieczeń nie może stosować outsourcingu czynności ubezpieczeniowych oraz funkcji należących do systemu zarządzania"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 7
    },
    {
        "id": 8,
        "question": "Szkoda istotna, wskazana w ustawie o ubezpieczeniach obowiązkowych, UFG i PBUK, dotyczy:",
        "answers": [
            "wyłącznie szkody w gospodarstwie rolnym",
            "wyłącznie szkody w budynku rolniczym",
            "wyłącznie szkody w pojeździe",
            "zarówno szkody w pojeździe i budynku rolniczym"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 8
    },
    {
        "id": 9,
        "question": "Okres odszkodowawczy w typowym ubezpieczeniu od przerw w działalności (ang. Business Interruption):",
        "answers": [
            "rozpoczyna się w kolejnym dniu po zawiadomieniu ubezpieczyciela o szkodzie",
            "rozpoczyna się w dniu powstania szkody w mieniu",
            "kończy się wraz z końcem okresu ubezpieczenia polisy bazowej",
            "to okres, w którym ubezpieczyciel zobowiązany jest do wyliczenia wysokości odszkodowania i jego wypłaty"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 9
    },
    {
        "id": 10,
        "question": "Towarzystwo ubezpieczeń wzajemnych może ubezpieczać osoby niebędące członkami towarzystwa:",
        "answers": [
            "zawsze",
            "jeżeli przewiduje to statut towarzystwa",
            "na podstawie zezwolenia Przewodniczącego Komisji Nadzoru Finansowego",
            "nigdy"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 10
    },
    {
        "id": 11,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, w postaci ustandaryzowanego dokumentu (wzoru) są przekazywane informacje o proponowanym produkcie ubezpieczeniowym, którego przedmiotem są ryzyka wymienione w:",
        "answers": [
            "Kodeksie cywilnym",
            "dziale I i dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 11
    },
    {
        "id": 12,
        "question": "Specjalistyczne ubezpieczenie odpowiedzialności za szkody w środowisku (tzw. ubezpieczenie środowiskowe) co do zasady:",
        "answers": [
            "jest tożsame z ubezpieczeniem OC działalności (ogólnej) rozszerzonej o szkody powstałe w związku z emisją do środowiska substancji niebezpiecznych, czyli o tzw. klauzulę środowiskową",
            "pokrywa zakresem ochrony wyłącznie szkody w ziemi, wodzie i powietrzu",
            "pokrywa zakresem ochrony szkody polegające na zanieczyszczeniu gleby poprzez stopniowy wyciek paliwa z podziemnego zbiornika",
            "chroni tylko w przypadku zanieczyszczenia zewnętrznych wobec ubezpieczonego składników środowiska (brak odpowiedzialności za grunty własne)"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 12
    },
    {
        "id": 13,
        "question": "Zdarzeniem losowym, które nie znajduje się w zakresie obowiązkowego ubezpieczenia budynków rolniczych od ognia i innych zdarzeń losowych, jest:",
        "answers": [
            "grad",
            "upadek drzewa",
            "lawina błotna",
            "upadek statku powietrznego"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 13
    },
    {
        "id": 14,
        "question": "Ubezpieczający może wypowiedzieć umowę ubezpieczenia na życie:",
        "answers": [
            "z ważnych powodów wskazanych w umowie ubezpieczenia",
            "za zgodą ubezpieczonego, jeżeli jest inną osobą niż ubezpieczający",
            "w każdym czasie",
            "tylko jeżeli została zawarta na okres dłuższy niż 6 miesięcy"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 14
    },
    {
        "id": 15,
        "question": "Jeżeli po zawarciu przez rolnika umowy obowiązkowego ubezpieczenia OC rolników posiadanie gospodarstwa rolnego przeszło na inną osobę, wówczas:",
        "answers": [
            "prawa i obowiązki rolnika wynikające z umowy ubezpieczenia OC rolników przechodzą na tę osobę",
            "umowa ubezpieczenia OC rolników ulega rozwiązaniu z mocy prawa",
            "zakład ubezpieczeń może odstąpić od zawartej umowy ubezpieczenia OC rolników",
            "umowa ubezpieczenia OC rolników ulega zawieszeniu na okres nie dłuższy niż 7 dni, do dnia potwierdzenia danych osobowych osoby przejmującej gospodarstwo rolne w posiadanie"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 15
    },
    {
        "id": 16,
        "question": "Szkodę polegającą na utracie zysku brutto wynikającą z opóźnienia lub zakłócenia realizacji inwestycji budowlanej wskutek uszkodzenia ładunku w transporcie, co do zasady, pokryje ubezpieczenie:",
        "answers": [
            "BI",
            "ELoP",
            "MLoP",
            "DSU/MDSU"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 16
    },
    {
        "id": 17,
        "question": "Interesy ubezpieczających, ubezpieczonych, uposażonych lub uprawnionych z umów ubezpieczenia (będących osobami fizycznymi) reprezentuje:",
        "answers": [
            "Polska Izba Ubezpieczeń",
            "Rzecznik Ubezpieczonych",
            "Rzecznik Finansowy",
            "żaden z wyżej wymienionych podmiotów"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 17
    },
    {
        "id": 18,
        "question": "Na podstawie właściwego rozporządzenia, wskaż które ze szkód nie są objęte zakresem obowiązkowego ubezpieczenia odpowiedzialności cywilnej firmy audytorskiej:",
        "answers": [
            "jedynie szkody polegające na zniszczeniu rzeczy wyrządzone przez ubezpieczonego małżonkowi",
            "wyłącznie szkody polegające na utracie rzeczy wyrządzone przez ubezpieczonego powinowatemu w tej samej linii",
            "jedynie szkody polegające na utracie rzeczy wyrządzone przez ubezpieczonego osobie pozostającej w stosunku przysposobienia",
            "wszystkie wymienione w odpowiedzi A-C szkody zostały wyłączone z zakresu ochrony ubezpieczeniowej w tym ubezpieczeniu"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 18
    },
    {
        "id": 19,
        "question": "Największy udział w dystrybucji ubezpieczeń Działu II – Pozostałe ubezpieczenia osobowe oraz ubezpieczenia majątkowe mierzony składką przypisaną brutto przypada:",
        "answers": [
            "sprzedaży bezpośredniej",
            "agentom ubezpieczeniowym",
            "brokerom ubezpieczeniowym i reasekuracyjnym",
            "innym kanałom dystrybucji"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 19
    },
    {
        "id": 20,
        "question": "Suma gwarancyjna to:",
        "answers": [
            "górna granica odpowiedzialności zakładu ubezpieczeń za pojedyncze zdarzenie z tytułu umowy ubezpieczenia na życie",
            "wartość zabezpieczenia wymaganego w przypadku wystawiania przez ubezpieczyciela gwarancji ubezpieczeniowej",
            "określona w umowie ubezpieczenia kwota stanowiąca górną granicę odpowiedzialności zakładu ubezpieczeń z tytułu umowy ubezpieczenia odpowiedzialności cywilnej",
            "określona w umowie bezsporna część odszkodowania, którą zakład ubezpieczeń jest zobowiązany wypłacić w terminie 30 dni od daty otrzymania zawiadomienia o zdarzeniu"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 20
    },
    {
        "id": 21,
        "question": "W sytuacji zderzenia statków wskutek przypadku lub siły wyższej i nie można ustalić jego przyczyny, szkodę (stratę) ponosi:",
        "answers": [
            "ten, który jej doznał",
            "statek o wyższym tonażu",
            "wyłącznie ten, który doznał wyższej szkody",
            "statki proporcjonalnie do swojej wartości z łącznej wartości szkody"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 21
    },
    {
        "id": 22,
        "question": "Po upływie okresu 60 dni, na który została zawarta umowa ubezpieczenia OC posiadaczy pojazdów mechanicznych (tzw. ubezpieczenia krótkoterminowego) w odniesieniu do pojazdu historycznego, umowa ta:",
        "answers": [
            "ulega automatycznemu odnowieniu na okres dodatkowych 7 dni",
            "ulega automatycznemu przedłużeniu na okres 12 miesięcy",
            "przekształca się w umowę na czas nieokreślony",
            "ulega rozwiązaniu"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 22
    },
    {
        "id": 23,
        "question": "W przypadku czasowego wycofania z ruchu pojazdu mechanicznego zakład ubezpieczeń jest obowiązany do proporcjonalnego obniżenia składki ubezpieczeniowej z tytułu ubezpieczenia OC posiadaczy pojazdów mechanicznych:",
        "answers": [
            "z mocy prawa",
            "po uzyskaniu pozytywnej opinii Komisji Nadzoru Finansowego",
            "na wniosek posiadacza tego pojazdu",
            "po uzyskaniu pozytywnej opinii Polskiej Izby Ubezpieczeń"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 23
    },
    {
        "id": 24,
        "question": "Zgodnie z ustawą o działalności ubezpieczeniowej i reasekuracyjnej, możliwość poniesienia straty wynikająca z niewłaściwych lub błędnych procesów wewnętrznych, z działań personelu lub systemów lub ze zdarzeń zewnętrznych to:",
        "answers": [
            "ryzyko operacyjne",
            "ryzyko rynkowe",
            "ryzyko biznesowe",
            "ryzyko płynności"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 24
    },
    {
        "id": 25,
        "question": "IDD to:",
        "answers": [
            "rozporządzenie w sprawie cyfrowej odporności operacyjnej dla sektora usług finansowych",
            "nowa dyrektywa regulująca wypłacalność ubezpieczycieli",
            "projekt regulacji w zakresie cyfrowej dystrybucji ubezpieczeń",
            "dyrektywa o dystrybucji ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 25
    },
    {
        "id": 26,
        "question": "Skłonność do defraudacji to przykład hazardu:",
        "answers": [
            "prawnego",
            "fizycznego",
            "moralnego",
            "motywacyjnego"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 26
    },
    {
        "id": 27,
        "question": "Wyrażona w ustawie o działalności ubezpieczeniowej i reasekuracyjnej zasada równomiernego rozłożenia w czasie wydatków z tytułu prowizji pośrednika ubezpieczeniowego dotyczy:",
        "answers": [
            "wszystkich ubezpieczeń",
            "ubezpieczeń na życie",
            "ubezpieczeń majątkowych",
            "ubezpieczeń na życie, jeżeli są związane z ubezpieczeniowym funduszem kapitałowym, a także ubezpieczeń na życie, w których wysokość świadczenia jest ustalana w oparciu o określone indeksy lub inne wartości bazowe"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 27
    },
    {
        "id": 28,
        "question": "Zakłady ubezpieczeń obliczają kapitałowy wymóg wypłacalności:",
        "answers": [
            "wyłącznie według formuły standardowej",
            "wyłącznie według formuły standardowej i przy zastosowaniu częściowego modelu wewnętrznego",
            "wyłącznie przy zastosowaniu pełnego modelu wewnętrznego",
            "według formuły standardowej albo według formuły standardowej i przy zastosowaniu częściowego modelu wewnętrznego, albo przy zastosowaniu pełnego modelu wewnętrznego"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 28
    },
    {
        "id": 29,
        "question": "Zgodnie z ustawą o działalności ubezpieczeniowej i reasekuracyjnej, zakład ubezpieczeń nie może różnicować składek ubezpieczeniowych i świadczeń poszczególnych osób ze względu na:",
        "answers": [
            "płeć",
            "wiek",
            "stan zdrowia ubezpieczonego",
            "sytuację finansową"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 29
    },
    {
        "id": 30,
        "question": "Gwarancje ubezpieczeniowe dla inwestycji finansowanych przez rząd RP wystawiają:",
        "answers": [
            "wyłącznie KUKE i PZU",
            "wyłącznie KUKE",
            "zależy to od decyzji finansującego transakcję",
            "wszystkie zakłady posiadający licencję na tę grupę ryzyk"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 30
    },
    {
        "id": 31,
        "question": "W przypadku umowy ubezpieczenia majątkowego strony mogą zdecydować o objęciu ubezpieczeniem szkód wyrządzonych przez ubezpieczającego umyślnie w przypadku:",
        "answers": [
            "gdy ubezpieczający jest konsumentem",
            "ubezpieczenia odpowiedzialności cywilnej",
            "ubezpieczenia mienia służącego do zaspokajania podstawowych potrzeb ubezpieczonego i osób najbliższych",
            "gdy ubezpieczający zgodzi się na podwyższoną składkę"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 31
    },
    {
        "id": 32,
        "question": "Zadośćuczynienie za śmierć osoby najbliższej, należne z tytułu ubezpieczenia OC posiadaczy pojazdów mechanicznych, jest wypłacane:",
        "answers": [
            "na podstawie uznania roszczenia osoby uprawnionej, zawartej z nią ugody lub prawomocnego orzeczenia sądu",
            "w wysokościach określonych przepisami rozporządzenia Ministra Sprawiedliwości",
            "w wysokościach określonych przepisami rozporządzenia Ministra Finansów",
            "w wysokościach określonych w wytycznych Komisji Nadzoru Finansowego"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 32
    },
    {
        "id": 33,
        "question": "Sposób ustalania (przeliczania na PLN) kwoty minimalnej sumy gwarancyjnej wyrażonej w euro, właściwej dla obowiązkowego ubezpieczenia OC podmiotów wykonujących doradztwo podatkowe, wynika z przepisów:",
        "answers": [
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC podmiotów wykonujących doradztwo podatkowe",
            "rozporządzenia Prezesa Rady Ministrów w sprawie ustalania minimalnej sumy gwarancyjnej dla doradców podatkowych",
            "ustawy o podatku dochodowym od osób fizycznych",
            "Konstytucji Rzeczypospolitej Polskiej"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 33
    },
    {
        "id": 34,
        "question": "Zgodnie z obowiązującym rozporządzeniem Ministra Finansów, obowiązkowe ubezpieczenie OC podmiotu wykonującego działalność leczniczą obejmuje szkody:",
        "answers": [
            "będące następstwem zabiegów chirurgii plastycznej lub zabiegów kosmetycznych, jeśli są udzielane w przypadkach będących następstwem wady wrodzonej, urazu, choroby lub następstwem jej leczenia",
            "polegające na zapłacie kar umownych",
            "polegające na uszkodzeniu rzeczy",
            "powstałe wskutek rozruchów i zamieszek"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 34
    },
    {
        "id": 35,
        "question": "Dystrybucja ubezpieczeń polega na:",
        "answers": [
            "udzielaniu pomocy przez pośrednika ubezpieczeniowego w administrowaniu umowami ubezpieczenia i ich wykonywaniu",
            "obsłudze roszczeń kierowanych do zakładu ubezpieczeń",
            "wycenie szkód i sporządzaniu ekspertyz związanych z tymi szkodami",
            "przekazywaniu potencjalnym klientom informacji na temat produktów ubezpieczeniowych, w przypadku gdy przedsiębiorca nie podejmuje dodatkowych działań mających pomóc w zawarciu umowy ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 35
    },
    {
        "id": 36,
        "question": "Broker ubezpieczeniowy powinien udzielić rekomendacji zawarcia ubezpieczenia OC działalności (ogólnej) z rozszerzeniem ochrony o odpowiedzialność za szkody w rzeczach znajdujących się w pieczy przede wszystkim firmie:",
        "answers": [
            "prowadzącej działalność głównie biurową",
            "produkcyjnej",
            "handlowej",
            "usługowej"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 36
    },
    {
        "id": 37,
        "question": "Taryfy oraz wysokość składki ubezpieczeniowej za obowiązkowe ubezpieczenie odpowiedzialności cywilnej organizatorów imprez masowych, na które wstęp jest odpłatny ustala:",
        "answers": [
            "Komisja Nadzoru Finansowego",
            "Minister Finansów",
            "zakład ubezpieczeń",
            "Polska Izba Ubezpieczeń"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 37
    },
    {
        "id": 38,
        "question": "Biuro narodowe to organizacja zakładów ubezpieczeń na terytorium danego państwa prowadzących działalność ubezpieczeniową w zakresie obowiązkowego ubezpieczenia:",
        "answers": [
            "OC posiadaczy pojazdów mechanicznych",
            "OC rolników",
            "budynków rolniczych",
            "wszystkich ubezpieczeń wskazanych w lit. a-c"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 38
    },
    {
        "id": 39,
        "question": "Maszyny i urządzenia ubezpiecza się od kradzieży z włamaniem i rabunku zazwyczaj w systemie:",
        "answers": [
            "na pierwsze ryzyko",
            "na sumy stałe",
            "solidarnie na sumy stałe",
            "na sumy zmienne"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 39
    },
    {
        "id": 40,
        "question": "W umowie ubezpieczenia na życie i dożycie może występować dodatkowa korzyść w postaci:",
        "answers": [
            "udziału w zysku z inwestowania rezerw techniczno-ubezpieczeniowych",
            "udziału w dywidendzie",
            "udziału w combined ratio",
            "udziału w zwrocie nadpłaconego przez ubezpieczyciela podatku dochodowego"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 40
    },
    {
        "id": 41,
        "question": "Zgodnie z Kodeksem Morskim Agent lub Makler morski ma prawo do prowadzenia pośrednictwa przy zawieraniu umów ubezpieczenia morskiego. Stwierdzenie jest:",
        "answers": [
            "prawdziwe pod warunkiem akceptacji działalności przez Min. Finansów",
            "prawdziwe",
            "nieprawdziwe",
            "prawdziwe pod warunkiem akceptacji działalności przez KNF"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 41
    },
    {
        "id": 42,
        "question": "W ramach regresu ubezpieczeniowego roszczenie ubezpieczającego przeciwko osobie trzeciej (odpowiedzialnej za szkodę) przechodzi na ubezpieczyciela:",
        "answers": [
            "z mocy prawa z dniem zapłaty odszkodowania",
            "na skutek przyjęcia odszkodowania przez ubezpieczonego",
            "wraz ze złożeniem przez ubezpieczyciela oświadczenia o przyjęciu odpowiedzialności za szkodę",
            "na podstawie oświadczenia ubezpieczonego o przelewie praw na ubezpieczyciela"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 42
    },
    {
        "id": 43,
        "question": "Roszczenia z umowy ubezpieczenia przedawniają się z upływem:",
        "answers": [
            "2 lat",
            "3 lat",
            "5 lat",
            "7 lat"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 43
    },
    {
        "id": 44,
        "question": "Aktuariusz m.in.:",
        "answers": [
            "wycenia wartość rezerw techniczno-ubezpieczeniowych",
            "oblicza wysokość strat awarii wspólnej oraz ich podziału",
            "zastępuje ubezpieczycieli w procesie likwidacji szkód na terenie innego państwa",
            "wycenia wysokość składki ubezpieczeniowej w zakresie oferowanego pokrycia ubezpieczeniowego"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 44
    },
    {
        "id": 45,
        "question": "Czynności w zakresie dystrybucji ubezpieczeń w imieniu lub na rzecz zakładu ubezpieczeń wykonuje:",
        "answers": [
            "agent ubezpieczeniowy",
            "broker ubezpieczeniowy",
            "każdy pośrednik ubezpieczeniowy",
            "każdy dystrybutor ubezpieczeń"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 45
    },
    {
        "id": 46,
        "question": "Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2554 z dnia 14 grudnia 2022 r. w sprawie operacyjnej odporności cyfrowej sektora finansowego (tzw. DORA):",
        "answers": [
            "ma zastosowanie do wszystkich pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające",
            "ma zastosowanie do pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących dużymi przedsiębiorstwami",
            "ma zastosowanie do pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących mikroprzedsiębiorstwami, małymi lub średnimi przedsiębiorstwami",
            "nie ma zastosowania do pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 46
    },
    {
        "id": 47,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, rejestr pośredników ubezpieczeniowych składa się z:",
        "answers": [
            "wyłącznie rejestru brokerów ubezpieczeniowych i rejestru brokerów reasekuracyjnych",
            "rejestru agentów i rejestru brokerów",
            "wyłącznie z rejestru agentów ubezpieczeniowych i rejestru agentów oferujących ubezpieczenia uzupełniające",
            "rejestru agentów, rejestru brokerów i rejestru osób wykonujących czynności dystrybucyjne zakładu ubezpieczeń"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 47
    },
    {
        "id": 48,
        "question": "Typowym ubezpieczeniem Autocasco (AC) od wszystkich ryzyk nie będzie objęta szkoda polegająca na:",
        "answers": [
            "kradzieży",
            "zniszczeniu pojazdu w czasie próby włamania",
            "uszkodzeniu pojazdu przez zderzenie z dzikiem, który wyskoczył na jezdnię",
            "zużyciu eksploatacyjnym"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 48
    },
    {
        "id": 49,
        "question": "Na reklamację klienta będącego osobą prawną zakład ubezpieczeń:",
        "answers": [
            "nie ma obowiązku udzielenia odpowiedzi",
            "ma obowiązek udzielenia odpowiedzi jeżeli przystąpił do dobrych praktyk ubezpieczeniowych",
            "udziela odpowiedzi zgodnie z postanowieniami ogólnych warunków ubezpieczenia",
            "zgodnie z przepisami ustawy o dystrybucji ubezpieczeń udziela odpowiedzi w terminie 30 dni od dnia jej otrzymania"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 49
    },
    {
        "id": 50,
        "question": "Co do zasady roszczenie odszkodowawcze z tytułu czynu niedozwolonego przedawnia się po upływie od dnia zdarzenia wywołującego szkodę:",
        "answers": [
            "5 lat",
            "10 lat",
            "3 lat, a jeżeli sprawcą jest przedsiębiorca – 6 lat",
            "3 lat, a jeżeli sprawcą jest przedsiębiorca – 10 lat"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 50
    },
    {
        "id": 51,
        "question": "Zakład ubezpieczeń może przetwarzać dane dotyczące stanu zdrowia ubezpieczonego, bez zgody osoby, której te dane dotyczą, w celu ustalania na ich podstawie wysokości składek ubezpieczeniowych, nie dłużej niż:",
        "answers": [
            "do dnia rozwiązania umowy ubezpieczenia",
            "1 rok od dnia rozwiązania umowy ubezpieczenia",
            "3 lata od dnia rozwiązania umowy ubezpieczenia",
            "12 lat od dnia rozwiązania umowy ubezpieczenia"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 51
    },
    {
        "id": 52,
        "question": "Ubezpieczenie danej osoby na życie bez jej wiedzy jest:",
        "answers": [
            "niedopuszczalne",
            "dopuszczalne, jeżeli umowę ubezpieczenia zawiera osoba najbliższa",
            "dopuszczalne, jeżeli umowa ubezpieczenia służy zabezpieczeniu spłaty kredytu albo pożyczki",
            "dopuszczalne, jeżeli suma ubezpieczenia nie przekracza 12-krotności średniego wynagrodzenia"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 52
    },
    {
        "id": 53,
        "question": "Regulacje rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC podmiotu wykonującego działalność leczniczą wyznaczają sumę gwarancyjną tego ubezpieczenia na poziomie:",
        "answers": [
            "maksymalnym wyrażonym w PLN",
            "minimalnym wyrażonym w euro",
            "minimalnym wyrażonym w USD",
            "maksymalnym wyrażonym w CHF"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 53
    },
    {
        "id": 54,
        "question": "Każda ze stron umowy ubezpieczenia może żądać odpowiedniej zmiany wysokości składki w razie ujawnienia okoliczności, która:",
        "answers": [
            "ma wpływ na ocenę ryzyka",
            "pociąga za sobą istotną zmianę prawdopodobieństwa wypadku",
            "zmienia prawdopodobieństwo zgłoszenia roszczenia z umowy ubezpieczenia",
            "skutkuje nieadekwatnością składki"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 54
    },
    {
        "id": 55,
        "question": "Obowiązujące normy zawarte w rozporządzeniu Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej komorników sądowych wskazują na:",
        "answers": [
            "możliwość umownego ograniczenia odpowiedzialności zakładu ubezpieczeń o kwotę ustaloną dowolnie przez zakład ubezpieczeń",
            "możliwość umownego ograniczenia odpowiedzialności zakładu ubezpieczeń o kwotę nieprzekraczającą równowartości 10% wartości należnego odszkodowania",
            "brak możliwości umownego ograniczenia odpowiedzialności przez zakład ubezpieczeń, z zastrzeżeniem określonego w rozporządzeniu katalogu szkód, których nie obejmuje przedmiotowe ubezpieczenie",
            "możliwość umownego ograniczenia odpowiedzialności zakładu ubezpieczeń o kwotę wskazaną przez ubezpieczającego"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 55
    },
    {
        "id": 56,
        "question": "Zakres ubezpieczenia ładunku wg Institute Cargo Clauses C (w redakcji z 2009 r.) nie obejmuje szkód spowodowanych przez:",
        "answers": [
            "opóźnienie",
            "pożar",
            "poświęcenie awarii wspólnej",
            "wejście statku na mieliznę"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 56
    },
    {
        "id": 57,
        "question": "W umowie ubezpieczenia na życie w razie samobójstwa ubezpieczonego ubezpieczyciel:",
        "answers": [
            "jest zawsze wolny od odpowiedzialności",
            "jest wolny od odpowiedzialności, chyba że wykazano stan niepoczytalności ubezpieczonego",
            "jest wolny od odpowiedzialności, chyba że spełnienie świadczenia czyni zadość względom słuszności",
            "jest wolny od odpowiedzialności, chyba że od zawarcia umowy minęły 2 lata, a w umowie można skrócić ten okres do 6 miesięcy"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 57
    },
    {
        "id": 58,
        "question": "Przed zawarciem umowy ubezpieczenia broker ubezpieczeniowy udziela porady w oparciu o rzetelną analizę dostępnych na rynku produktów ubezpieczeniowych w liczbie wystarczającej do opracowania rekomendacji najwłaściwszej umowy:",
        "answers": [
            "zawsze – klient nie ma możliwości skutecznego złożenia oświadczenia o rezygnacji z udzielenia porady",
            "chyba że klient złoży oświadczenie o rezygnacji z udzielenia porady (w dowolnej formie)",
            "chyba że klient złoży oświadczenie o rezygnacji z udzielenia porady w formie dokumentowej",
            "nie ma takiego wymogu"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 58
    },
    {
        "id": 59,
        "question": "Zgodnie z rozporządzeniem Ministra Finansów w sprawie szczególnych zasad rachunkowości zakładów ubezpieczeń i zakładów reasekuracji, rezerwę na pokrycie kosztów likwidacji szkód tworzy się jako część rezerwy:",
        "answers": [
            "rezerwy na premie i rabaty dla ubezpieczonych",
            "rezerwy na niewypłacone odszkodowania i świadczenia",
            "-",
            "rezerwy w dziale ubezpieczeń na życie, gdy ryzyko lokaty ponosi ubezpieczający"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 59
    },
    {
        "id": 60,
        "question": "Włączenie do umowy ubezpieczenia mienia od wszystkich ryzyk typowej klauzuli tzw. drobnych prac remontowo-budowlanych co do zasady:",
        "answers": [
            "rozszerza zakres ochrony ubezpieczeniowej o szkody w budynkach powstałe wskutek katastrofy budowlanej",
            "jest możliwe pod warunkiem, że prowadzone roboty budowlano-montażowe nie wymagają pozwolenia na budowę i nie naruszają stabilności konstrukcji nośnej danego budynku",
            "pozwala na zapewnienie ochrony ubezpieczeniowej adekwatnej do zakresu ubezpieczenia ryzyk budowlano-montażowych CAR/EAR",
            "jest możliwe pod warunkiem, że roboty budowlano-montażowe są prowadzone przez wykwalifikowaną firmę zewnętrzną, która posiada ubezpieczenie OC działalności (ogólnej)"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 60
    },
    {
        "id": 61,
        "question": "Odszkodowanie z ubezpieczenia BI z 12 miesięcznym okresem odszkodowawczym w przypadku przerwy spowodowanej trzęsieniem ziemi i spadku obrotu o 25% przez kolejnych 12 miesięcy (przy rocznym obrocie 20 mln zł i wskaźniku zysku brutto 20%) wyniesie:",
        "answers": [
            "1 mln zł",
            "2 mln zł",
            "4 mln zł",
            "5 mln zł"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 61
    },
    {
        "id": 62,
        "question": "Według standardu zarządzania ryzykiem opracowanego przez Federację Europejskich Stowarzyszeń Zarządzania Ryzykiem – FERMA ryzyko to:",
        "answers": [
            "kombinacja prawdopodobieństwa wystąpienia zdarzenia oraz jego skutków",
            "możliwość, że zdarzenie będzie miało miejsce i negatywnie wpłynie na osiągnięcie celów",
            "możliwość wystąpienia zdarzenia, mającego wpływ na działalność, doprowadzającego do powstania zysku lub straty, mierzona z punktu widzenia prawdopodobieństwa oraz konsekwencji",
            "wszystkie odpowiedzi są nieprawidłowe"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 62
    },
    {
        "id": 63,
        "question": "W razie sprzeczności pomiędzy wzorcem umownym a ustaloną treścią umowy strony umowy są związane:",
        "answers": [
            "postanowieniami wzorca",
            "ustaloną treścią umowy",
            "ustaloną treścią umowy, jeżeli wyraźnie zastrzeżono w umowie, że strony uznają odmienność od wzorca",
            "tymi postanowieniami, które są bardziej korzystne dla kontrahenta strony posługującej się wzorcem"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 63
    },
    {
        "id": 64,
        "question": "W celu uwolnienia zakładu ubezpieczeń od odpowiedzialności za szkody, które wynikają np. z ubytków naturalnych, a ich losowy charakter jest niepewny, stosuje się:",
        "answers": [
            "franszyzę redukcyjną",
            "franszyzę integralną",
            "franszyzę warunkową",
            "udział własny"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 64
    },
    {
        "id": 65,
        "question": "Na podstawie wskaźnika mieszanego („combined ratio”) można:",
        "answers": [
            "określić wyłącznie szkodowość zakładu ubezpieczeń",
            "określić wyłącznie koszty działalności ubezpieczeniowej zakładu ubezpieczeń",
            "porównać w sposób syntetyczny zyskowność prowadzonej działalności pomiędzy różnymi zakładami ubezpieczeń na różnych rynkach",
            "wywnioskować, że zakład ubezpieczeń zarabia na podstawowej działalności, jeśli wskaźnik wynosi więcej niż 100%"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 65
    },
    {
        "id": 66,
        "question": "Zgodnie z prawem, ustalenia spełnienia lub niespełnienia obowiązku ubezpieczenia odpowiedzialności cywilnej przez zarządcę nieruchomości można dochodzić:",
        "answers": [
            "przed sądem powszechnym",
            "przed Polską Izbą Ubezpieczeń",
            "jedynie przed Ogólnopolską Federacją Podmiotów Gospodarujących Nieruchomościami",
            "wyłącznie przed Komisją Nadzoru Finansowego"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 66
    },
    {
        "id": 67,
        "question": "Jeżeli odszkodowanie lub świadczenie nie przysługuje lub przysługuje w innej wysokości niż określona w zgłoszonym roszczeniu, zakład ubezpieczeń informuje o tym osobę występującą z roszczeniem:",
        "answers": [
            "w dowolny sposób",
            "drogą elektroniczną",
            "na piśmie",
            "ustnie"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 67
    },
    {
        "id": 68,
        "question": "W ubezpieczeniu mienia od wszystkich ryzyk ochroną na wypadek kradzieży z włamaniem objęto zapasy o wartości 1.000.000 zł i ustalono limit 200.000 zł (system na pierwsze ryzyko). W przypadku kradzieży o wartości 20.000 zł odszkodowanie wyniesie:",
        "answers": [
            "1.000 zł",
            "4.000 zł",
            "20.000 zł",
            "200.000 zł"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 68
    },
    {
        "id": 69,
        "question": "Sytuacja, kiedy ubezpieczający i ubezpieczony w umowie ubezpieczenia mienia to różne podmioty, a ubezpieczony nie jest wskazany imiennie to:",
        "answers": [
            "ryzyka ubezpieczeniowego",
            "ubezpieczenie na okaziciela",
            "ubezpieczenie na cudzy rachunek",
            "cesja ubezpieczeniowa"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 69
    },
    {
        "id": 70,
        "question": "Zgodnie z art. 298 Kodeksu karnego, kto, w celu uzyskania odszkodowania z tytułu umowy ubezpieczenia, powoduje zdarzenie będące podstawą do wypłaty takiego odszkodowania, podlega karze:",
        "answers": [
            "nagany",
            "wykonania pracy społecznie użytecznej",
            "grzywny do 5000 (pięciu tysięcy) zł",
            "pozbawienia wolności od 3 miesięcy do lat 5"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 70
    },
    {
        "id": 71,
        "question": "Zwrotnie pomocy finansowej zakładowi ubezpieczeń przejmującemu portfel obowiązkowych ubezpieczeń OC posiadaczy pojazdów mechanicznych i OC rolników, może udzielić:",
        "answers": [
            "budżet państwa",
            "Narodowy Bank Polski",
            "Bankowy Fundusz Gwarancyjny",
            "Ubezpieczeniowy Fundusz Gwarancyjny"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 71
    },
    {
        "id": 72,
        "question": "Pęk wężyk w zmywarce i zalało wyposażenie biura ubezpieczone od wszystkich ryzyk na sumę 70.000 zł w wartości odtworzeniowej. Szkodę wyceniono na 30.000 zł, a wyposażenie na 100.000 zł. Przy franszyzie integralnej 500 zł odszkodowanie wyniesie:",
        "answers": [
            "20.500 zł",
            "21.000 zł",
            "29.500 zł",
            "30.000 zł"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 72
    },
    {
        "id": 73,
        "question": "Agenci ubezpieczeniowi stanowią istotny kanał dystrybucji ubezpieczeń. Według danych KNF, na koniec 2023 roku, liczba zarejestrowanych agentów wynosiła z dokładnością:",
        "answers": [
            "42 tys.",
            "43 tys.",
            "29 tys.",
            "28 tys."
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 73
    },
    {
        "id": 74,
        "question": "Według danych KNF, na koniec 2023 roku, za pośrednictwem brokerów ubezpieczeniowych i reasekuracyjnych przypis brutto składki ubezpieczeniowej krajowych zakładów ubezpieczeń w dziale II ubezpieczeń wyniósł w zaokrągleniu:",
        "answers": [
            "9,7 mld PLN",
            "12,2 mld PLN",
            "14,4 mld PLN",
            "17,2 mld PLN"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 74
    },
    {
        "id": 75,
        "question": "System obejmujący funkcję zarządzania ryzykiem, funkcję zgodności z przepisami, funkcję audytu wewnętrznego i funkcję aktuarialną, który zapewnia prawidłowe i ostrożne zarządzanie zakładem ubezpieczeń lub zakładem reasekuracji to:",
        "answers": [
            "system operacyjny",
            "system korporacyjny",
            "system zapewniający odporność cyfrową",
            "system zarządzania"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 75
    },
    {
        "id": 76,
        "question": "Zgodnie z przepisami prawa, wysokość minimalnej sumy gwarancyjnej w obowiązkowym ubezpieczeniu odpowiedzialności cywilnej podmiotu przeprowadzającego eksperyment medyczny została wyrażona w:",
        "answers": [
            "SDR, tj. jednostce rozrachunkowej Międzynarodowego Funduszu Walutowego",
            "CHF",
            "USD",
            "euro"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 76
    },
    {
        "id": 77,
        "question": "Refundacja kar, grzywien oraz mandatów za wykroczenia skarbowe nałożone na ubezpieczonego zapewnia co do zasady:",
        "answers": [
            "ubezpieczenie OC biura rachunkowego",
            "ubezpieczenie OC doradców podatkowych",
            "ubezpieczenie OC członków zarządu (D&O)",
            "ubezpieczenie karno-skarbowe"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 77
    },
    {
        "id": 78,
        "question": "Stronami umowy gwarancji ubezpieczeniowej są co najmniej:",
        "answers": [
            "zakład ubezpieczeń, beneficjent i zobowiązany",
            "zakład ubezpieczeń, beneficjent, zobowiązany i bank",
            "zakład ubezpieczeń, dłużnik, zobowiązany i bank",
            "zakład ubezpieczeń, dłużnik i zobowiązany"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 78
    },
    {
        "id": 79,
        "question": "W zakresie kwestii i zadań dotyczących ubezpieczeń obowiązkowych Komisja Nadzoru Finansowego sprawuje nadzór nad:",
        "answers": [
            "Polskim Biurem Ubezpieczycieli Komunikacyjnych",
            "Ubezpieczeniowym Funduszem Gwarancyjnym",
            "Polską Izbą Ubezpieczeń",
            "żadna z odpowiedzi a-c nie jest prawidłowa"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 79
    },
    {
        "id": 80,
        "question": "Zgodnie z prawem, regulacje wyznaczające wysokość minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia OC radców prawnych zostały zawarte w przepisach:",
        "answers": [
            "ustawy o zawodach prawniczych",
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej radców prawnych",
            "rozporządzenia Prezydenta Rzeczypospolitej Polskiej w sprawie sumy gwarancyjnej radców prawnych",
            "ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 80
    },
    {
        "id": 81,
        "question": "Zgodnie z ustawą z dnia 7 lipca 2005 r. o dopłatach do ubezpieczeń upraw rolnych i zwierząt gospodarskich ochrona uprawy truskawek od ryzyka wystąpienia szkód spowodowanych przez przymrozki wiosenne:",
        "answers": [
            "rozpoczyna się następnego dnia po zawarciu umowy ubezpieczenia obowiązkowego, ale nie wcześniej niż po zapłaceniu składki",
            "rozpoczyna się po upływie 14 dni od dnia zawarcia umowy ubezpieczenia obowiązkowego",
            "rozpoczyna się od dnia zawarcia umowy ubezpieczenia obowiązkowego, z tym że powinna być ona zawarta w terminie do dnia 1 grudnia",
            "obowiązuje od wiosennego ruszenia wegetacji"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 81
    },
    {
        "id": 82,
        "question": "Osoba fizyczna, która zawarła roczną umowę ubezpieczenia mienia od wszystkich ryzyk może od niej odstąpić:",
        "answers": [
            "w ciągu 3 dni od daty zawarcia umowy ubezpieczenia",
            "w ciągu 7 dni od daty zawarcia umowy ubezpieczenia",
            "w ciągu 14 dni od daty opłacenia składki",
            "w ciągu 30 dni od daty zawarcia umowy ubezpieczenia"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 82
    },
    {
        "id": 83,
        "question": "Jeżeli szkoda powstała w związku z ruchem pojazdu wolnobieżnego, będącego w posiadaniu rolnika i użytkowanego w związku z posiadaniem przez niego gospodarstwa rolnego, odszkodowanie przysługuje:",
        "answers": [
            "z obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych",
            "z obowiązkowego ubezpieczenia OC rolników",
            "z ubezpieczenia NNW rolnika",
            "żadna z odpowiedzi a-c nie jest prawidłowa"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 83
    },
    {
        "id": 84,
        "question": "Ubezpieczeniowy Fundusz Gwarancyjny jest obowiązany sporządzić roczne sprawozdanie z działalności w terminie:",
        "answers": [
            "7 dni od zakończenia roku obrotowego",
            "4 miesięcy od zakończenia roku obrotowego",
            "12 miesięcy od zakończenia roku obrotowego",
            "odpowiedź z pkt a-c są nieprawidłowe, gdyż UFG nie sporządza rocznego sprawozdania z działalności"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 84
    },
    {
        "id": 85,
        "question": "Zgodnie z wymogiem ustawowym zakład ubezpieczeń ustala wysokość składek ubezpieczeniowych po:",
        "answers": [
            "dokonaniu oceny ryzyka ubezpieczeniowego",
            "dokonaniu oceny ryzyka ubezpieczającego i ryzyka ubezpieczyciela",
            "analizie własnej kondycji finansowej i wypłacalności",
            "dokonaniu własnej oceny ryzyka i wypłacalności (ORSA)"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 85
    },
    {
        "id": 86,
        "question": "Klauzula Leeway:",
        "answers": [
            "jest cechą ubezpieczenia na pierwsze ryzyko",
            "nie jest stosowana w ubezpieczeniu na sumy stałe",
            "nie jest stosowana w ubezpieczeniu sprzętu elektronicznego",
            "jest stosowana w celu częściowego zniesienia zasady proporcji"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 86
    },
    {
        "id": 87,
        "question": "Broker ubezpieczeniowy, w ramach prowadzonej działalności brokerskiej, wykonuje czynności w zakresie dystrybucji ubezpieczeń:",
        "answers": [
            "na podstawie udzielonego przez zakład ubezpieczeń pełnomocnictwa",
            "w imieniu lub na rzecz zakładu ubezpieczeń",
            "w imieniu lub na rzecz klienta",
            "na podstawie zawartego z klientem porozumienia kurtażowego"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 87
    },
    {
        "id": 88,
        "question": "FLEXA oznacza zakres ubezpieczenia ogniowego obejmujący:",
        "answers": [
            "pożar, wybuch, uderzenie pioruna i upadek statku powietrznego",
            "upadek pojazdu powietrznego, pożar i uderzenie pioruna",
            "pożar, uderzenie pioruna, powódź i grad",
            "pożar, siłę wyższą i wypadek pojazdu"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 88
    },
    {
        "id": 89,
        "question": "W ubezpieczeniu należności regułą jest:",
        "answers": [
            "stosowanie różnych form udziału w zysku dla zakładu ubezpieczeń",
            "brak jakiejkolwiek formy udziału w stracie dla zakładu ubezpieczeń",
            "stosowanie różnych form udziału w stracie dla ubezpieczającego",
            "brak jakiejkolwiek formy udziału w zysku dla ubezpieczającego"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 89
    },
    {
        "id": 90,
        "question": "Do dodatkowych kosztów proporcjonalnych w typowym ubezpieczeniu sprzętu elektronicznego zalicza się m.in. koszty:",
        "answers": [
            "przeniesienia baz danych",
            "restartu systemu",
            "wynajęcia zastępczych urządzeń",
            "przeprogramowania"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 90
    },
    {
        "id": 91,
        "question": "Przepisy właściwego rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC uznanej organizacji upoważnionej do wykonywania zadań administracji morskiej, zawierają regulacje dotyczące:",
        "answers": [
            "wysokości składki ubezpieczeniowej w przedmiotowym ubezpieczeniu",
            "konsekwencji niespełnienia obowiązku zawarcia umowy tego ubezpieczenia",
            "wysokości minimalnej sumy gwarancyjnej w tym ubezpieczeniu",
            "wskazania instytucji uprawnionej do przeprowadzenia kontroli działalności gospodarczej wykonywanej przez uznaną organizację"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 91
    },
    {
        "id": 92,
        "question": "W przypadku zarządzenia likwidacji przymusowej zakładu ubezpieczeń na życie, roszczenia osób uprawnionych z tytułu umów ubezpieczenia na życie zaspokaja:",
        "answers": [
            "Minister Finansów",
            "Ubezpieczeniowy Fundusz Gwarancyjny",
            "Komisja Nadzoru Finansowego",
            "Polskie Biuro Ubezpieczycieli Komunikacyjnych"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 92
    },
    {
        "id": 93,
        "question": "Minimalna suma gwarancyjna obowiązkowego ubezpieczenia OC z tytułu wykonywania działalności brokerskiej, w okresie nie dłuższym niż 12 miesięcy, wynosi równowartość w złotych:",
        "answers": [
            "2 250 618 euro w odniesieniu do jednego zdarzenia, którego skutki są objęte umową ubezpieczenia OC oraz 1 875 927 euro w odniesieniu do wszystkich takich zdarzeń",
            "1 300 380 euro w odniesieniu do jednego zdarzenia, którego skutki są objęte umową ubezpieczenia OC, oraz 1 924 560 euro w odniesieniu do wszystkich takich zdarzeń",
            "2 501 236 euro w odniesieniu do wszystkich zdarzeń, którego skutki są objęte umową ubezpieczenia OC, oraz 3 701 808 euro w odniesieniu do wszystkich takich zdarzeń",
            "1 564 610 euro w odniesieniu do jednego zdarzenia, którego skutki są objęte umową ubezpieczenia OC, oraz 2 315 610 euro w odniesieniu do wszystkich takich zdarzeń"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 93
    },
    {
        "id": 94,
        "question": "W wyniku nowelizacji ustawy o ubezpieczeniach obowiązkowych, UFG i PBUK minimalna suma gwarancyjna w obowiązkowym ubezpieczeniu OC posiadaczy pojazdów mechanicznych w przypadku szkód na osobie w odniesieniu do jednego zdarzenia wynosi obecnie:",
        "answers": [
            "1 mln euro",
            "5 mln euro",
            "blisko 30 mln złotych",
            "jest nielimitowana"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 94
    },
    {
        "id": 95,
        "question": "W obowiązkowym ubezpieczeniu budynków rolniczych zwrot składki za niewykorzystany okres ubezpieczenia w przypadku rozwiązania umowy ubezpieczenia:",
        "answers": [
            "następuje niezwłocznie, jednak nie później niż w terminie 14 dni od dnia wypowiedzenia umowy ubezpieczenia",
            "następuje wyłącznie wówczas, gdy ubezpieczający nie zalega z opłatą podatku rolnego",
            "w ogóle nie następuje",
            "nie następuje, jeżeli niewykorzystany okres ubezpieczenia jest krótszy niż 6 miesięcy"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 95
    },
    {
        "id": 96,
        "question": "W przypadku umowy zlecenia (oraz umowy o świadczenie usług) wynagrodzenie należy się zleceniobiorcy:",
        "answers": [
            "zawsze",
            "tylko w razie ustalenia wynagrodzenia w umowie",
            "jeżeli z umowy ani okoliczności nie wynika, że zleceniobiorca podjął się wykonania zlecenia bez wynagrodzenia",
            "tylko wówczas, gdy zleceniobiorca prowadzi działalność gospodarczą"
        ],
        "correct": 2,
        "comment": "LUTY 2025",
        "sourceNumber": 96
    },
    {
        "id": 97,
        "question": "Broker ubezpieczeniowy, który zamierza podjąć działalność brokerską w zakresie ubezpieczeń na terytorium innego niż RP państwa członkowskiego Unii Europejskiej przez oddział lub w inny sposób niż przez oddział, w ramach swobody świadczenia usług:",
        "answers": [
            "nie ma żadnych dodatkowych obowiązków",
            "ma obowiązek powiadomić Komisję Nadzoru Finansowego",
            "ma obowiązek powiadomić właściwy organ nadzoru państwa członkowskiego UE",
            "ma obowiązek uzyskać zezwolenie właściwego organu nadzoru państwa członkowskiego UE"
        ],
        "correct": 1,
        "comment": "LUTY 2025",
        "sourceNumber": 97
    },
    {
        "id": 98,
        "question": "Suma ubezpieczenia w ubezpieczeniu mienia (najczęściej Sekcja/Dział I Warunków) w typowym ubezpieczeniu ryzyk budowlano-montażowych (CAR/EAR) w odniesieniu do obiektu budowlanego powinna odpowiadać całkowitej wartości:",
        "answers": [
            "odtworzeniowej",
            "rzeczywistej",
            "rynkowej",
            "prac kontraktowych"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 98
    },
    {
        "id": 99,
        "question": "Maszyny i sprzęt budowlany na placu budowy, co do zasady, można ubezpieczyć w ramach ubezpieczenia:",
        "answers": [
            "CPM",
            "EEI",
            "CAR/EAR",
            "OCP"
        ],
        "correct": 0,
        "comment": "LUTY 2025",
        "sourceNumber": 99
    },
    {
        "id": 100,
        "question": "Według danych KNF, na koniec 2023 roku, składka przypisana brutto krajowych zakładów ubezpieczeń w dziale II ubezpieczeń wyniosła w zaokrągleniu:",
        "answers": [
            "49,05 mld PLN",
            "51,40 mld PLN",
            "53,05 mld PLN",
            "56,05 mld PLN"
        ],
        "correct": 3,
        "comment": "LUTY 2025",
        "sourceNumber": 100
    },
    // ===== KWIECIEŃ 2025 =====
    {
        "id": 101,
        "question": "Przelew (cesja) wierzytelności pienieżnej co do zasady:",
        "answers": [
            "wymaga zawsze zgody dłużnika cedowanej wierzytelności",
            "wymaga zgody dłużnika cedowanej wierzytelności, jeżeli nie jest przedawniona",
            "wymaga zgody dłużnika cedowanej wierzytelności, jeżeli jest ona stwierdzona pismem",
            "nie wymaga zgody dłużnika cedowanej wierzytelności"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 1
    },
    {
        "id": 102,
        "question": "Zezwolenie na wykonywanie działności brokerskiej w zakresie ubezpieczeń (jak i w zakresie reasekuracji) nie może być wydane na wniosek:",
        "answers": [
            "spółki akcyjnej",
            "spółki z ograniczoną odpowiedzialnością",
            "spółki nieposiadającej osobowości prawnej",
            "osoby fizycznej"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 2
    },
    {
        "id": 103,
        "question": "Ubezpieczeniowy Fundusz Gwarancyjny, po wejściu w życie rozporządzenia RODO, dane osobowe dotyczące zdrowia:",
        "answers": [
            "przetwarza, po uzyskaniu zgody Przewodniczącego Komisji Nadzoru Finansowego",
            "przetwarza, po uzyskaniu zgody Prezesa Urzędu Ochrony Danych Osobowych",
            "przetwarza z mocy prawa, w zakresie niezbędnym do realizacji określonych zadań ustawowych",
            "nie przetwarza, z uwagi na ustawowy zakaz"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 3
    },
    {
        "id": 104,
        "question": "Taryfy oraz wysokość składki ubezpieczeniowej za obowiązkowe ubezpieczenie odpowiedzialności cywilnej podmiotu przeprowadzającego eksperyment medyczny ustala:",
        "answers": [
            "Narodowy Fundusz Zdrowia",
            "Urząd Komisji Nadzoru Finansowego",
            "Minister Finansów w porozumieniu z Ministrem Zdrowia",
            "zakład ubezpieczeń"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 4
    },
    {
        "id": 105,
        "question": "Zakład ubezpieczeń może przetwarzać dane dotyczące stanu zdrowia ubezpieczonego, bez zgody osoby, której te dane dotyczą, w celu ustalania na ich podstawie wysokości składek ubezpieczeniowych, nie dłużej niż:",
        "answers": [
            "do dnia rozwiązania umowy ubezpieczenia",
            "3 lata od dnia rozwiązania umowy ubezpieczenia",
            "2 lata od dnia rozwiązania umowy ubezpieczenia",
            "zakład ubezpieczeń nie może przetwarzać danych dotyczących stanu zdrowia ubezpieczonego, bez zgody osoby, której te dane dotyczą"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 5
    },
    {
        "id": 106,
        "question": "Czy ubezpieczenie mienia pokrywa koszty poniesione na ratowanie ubiezpieczonego mienia lub zapobieżenie szkodzie podczas występienia zdarzenia (tzw. koszty ratunkowe)?",
        "answers": [
            "Nie, tego typu koszty zawsze obciążają ubezpieczonego, który ma obowiązek chronić mienie na własny koszt",
            "Tak, ubezpieczyciel zwraca niezbędne i celowe koszty działań podjętych w celu ratowania mienia lub zmniejszenia szkody, nawet jeśli okazały się one bezskuteczne(w granicach określonych przepisami lub umową)",
            "Tak, ale tylko jeśli te działania przyniosły skutek i rzeczywiście zmniejszyły rozmiar szkody",
            "Tak, ale wyłącznie w sytuacji, gdy ubezpieczony wcześniej uzyskał zgodę ubezpieczyciela na podjęcie takich działań ratunkowych"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 6
    },
    {
        "id": 107,
        "question": "Ubezpieczenie budynku na wartość odtworzeniową oznacza, że w razie szkody:",
        "answers": [
            "odszkodowanie pozwoli na odbudowę lub naprawę budynku jako nowego, z potrąceniem amortyzacji (zużycia)",
            "odszkodowanie wypłacone na podstawie kosztów odtworzenia zostanie pomniejszone o zużycie techniczne budynku",
            "odszkodowanie pozwoli na odbudowę lub naprawę budynku jako nowego, bez potrącania amortyzacji (zużycia)",
            "ubezpieczyciel wypłaci wartość rynkową budynku z dnia szkody"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 7
    },
    {
        "id": 108,
        "question": "Osoby wykonujące czynności brokerskie w zakresie ubezpieczeń zobowiązane są ustawowo do odbycia szkoleń zawodowych w wymiarze:",
        "answers": [
            "10 godzin rocznie",
            "10 godzin raz na 2 lata",
            "15 godzin rocznie",
            "15 godzin raz na 2 lata"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 8
    },
    {
        "id": 109,
        "question": "Jeżeli umowa nie stanowi inaczej, w umowie ubezpieczenia na życie na cudzy rachunek uposażonego wskazuje:",
        "answers": [
            "wyłącznie ubezpieczający",
            "wyłącznie ubezpieczony",
            "ubezpieczający za zgodą ubezpieczonego",
            "ubezpieczony za zgodą ubezpieczającego"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 9
    },
    {
        "id": 110,
        "question": "W przypadku umowy ubezpieczenia odpowiedzialności cywilnej co do zasady przedawnienie roszczenia poszkodowanego przeciwko ubezpieczycielowi:",
        "answers": [
            "następuje wraz z przedawnieniem roszczenia przeciwko sprawcy szkody",
            "następuje z upływem terminu przedawnienia przewidzianego dla tego roszczenia w przepisach o odpowiedzialności deliktowej lub kontraktowej",
            "następuje z upływem trzech lat od wypadku, chyba że doszło do przerwania biegu przedawnienia",
            "następuje z upływem trzech lat (a w przypadku szkód na osobie - dziesięciu lat) od wypadku, chyba że doszło do przerwania biegu przedawnienia"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 10
    },
    {
        "id": 111,
        "question": "W przypadku umowy ubezpieczenia na życie zakazane jest różnicowanie składek i świadczeń ubezpieczeniowych ze względu na:",
        "answers": [
            "wiek",
            "ciążę i macierzyństwo",
            "grupę zawodową",
            "zatrudnienie albo jego brak"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 11
    },
    {
        "id": 112,
        "question": "Zgodnie z prawem, w którym obowiązkowym ubezpieczeniu OC, wysokość minimalnej sumy gwarancyjnej została wyrażona w Euro, tj. w oficjalnej walucie części państw Unii Europejskiej:",
        "answers": [
            "obowiązkowym ubezpieczeniu OC przewoźników lotniczych za szkody spowodowane opóźnieniem w przewozie pasażerów, bagażu lub towarów",
            "obowiązkowym ubezpieczeniu OC przedsiębiorców wykonujących obsługę naziemną za szkody powstałe w związku z prowadzoną przez siebie działalnością lotniczą",
            "obowiązkowym ubezpieczeniu OC podmiotów wykonujących doradztwo podatkowe",
            "obowiązkowym ubezpieczeniu OC przewoźników lotniczych za szkody powstałe w przewozie lotniczym poczty"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 12
    },
    {
        "id": 113,
        "question": "Ubezpieczenie utraty zysku (Business Interruption) zadziała, gdy:",
        "answers": [
            "wystąpiła czysta strata finansowa",
            "nastąpiła szkoda, która spowodowała przerwę w działalności i w konsekwencji utratę zysku lub wzrost kosztów działalności",
            "nastąpiła szkoda materialna objęta ubezpieczeniem mienia, która spowodowała przerwę w działalności i w konsekwencji utratę zysku lub wzrost kosztów działalności",
            "wystąpiło zdarzenie losowe powodujące wzrost kosztów działalności"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 13
    },
    {
        "id": 114,
        "question": "Warunkiem rozpatrzenia przez Rzecznika Finansowego skargi klienta na zakład ubezpieczeń jest:",
        "answers": [
            "wniesienie odpowiedniej opłaty",
            "wcześniejsze złożenie skargi do organu nadzoru",
            "wcześniejsze złożenie reklamacji do zakładu ubezpieczeń",
            "żadna z powyższych odpowiedzi (a, b i c) nie jest prawidłowa"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 14
    },
    {
        "id": 115,
        "question": "Umowa krótkoterminowego ubezpieczenia OC posiadaczy pojazdów mechanicznych nie może być zawarta w odniesieniu do pojazdu mechanicznego:",
        "answers": [
            "zarejestrowanego czasowo",
            "będącego pojazdem do jazd testowych",
            "będącego pojazdem historycznym",
            "żadna z odpowiedzi a-c nie jest prawidłowa"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 15
    },
    {
        "id": 116,
        "question": "Zgodnie z prawem, obowiązkowe ubezpieczenie odpowiedzialności cywilnej architektów oraz inżynierów budownictwa obejmuje szkody:",
        "answers": [
            "wyrządzone wskutek naruszenia praw autorskich i patentów",
            "wyrządzone w związku z wykonywaniem samodzielnych funkcji technicznych w budownictwie",
            "powstałe wskutek rozruchów i zamieszek",
            "polegające na zapłacie kar umownych"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 16
    },
    {
        "id": 117,
        "question": "Opłata ewidencyjna uiszczana przez zakład ubezpieczeń z tytułu zawartej umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych, stanowi przychód:",
        "answers": [
            "Polskiego Biura Ubezpieczycieli Komunikacyjnych",
            "Ubezpieczeniowego Funduszu Gwarancyjnego",
            "Komisji Nadzoru Finansowego",
            "Funduszu – Centralna Ewidencja Pojazdów i Kierowców"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 17
    },
    {
        "id": 118,
        "question": "Jeżeli nie umówiono się inaczej, odpowiedzialność ubezpieczyciela rozpoczyna się od dnia następującego po:",
        "answers": [
            "zawarciu umowy, nie wcześniej jednak niż od dnia następnego po zapłaceniu składki lub jej pierwszej raty",
            "doręczeniu polisy ubezpieczającemu",
            "zawarciu umowy ubezpieczenia, nawet jeżeli nie opłacono jeszcze składki",
            "wystawieniu polisy przez ubezpieczyciela"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 18
    },
    {
        "id": 119,
        "question": "PZU S.A. wznowił działalność po zakończeniu II Wojny Światowej jako:",
        "answers": [
            "spółdzielczy zakład ubezpieczeń",
            "państwowy zakład ubezpieczeń",
            "spółka akcyjna, w której większość akcji posiadał skarb państwa",
            "zakład ubezpieczeń wzajemnych"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 19
    },
    {
        "id": 120,
        "question": "Zakład ubezpieczeń inwestuje składkę ubezpieczeniową na ryzyko ubezpieczającego:",
        "answers": [
            "w przypadku ubezpieczeń, o których mowa w dziale I w grupie 3 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "w przypadku wszystkich ubezpieczeń, o których mowa w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "w przypadku ubezpieczeń, o których mowa w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "nie ma takiej możliwości – zakład ubezpieczeń inwestuje składkę ubezpieczeniową zawsze na swoјеbryzyko"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 20
    },
    {
        "id": 121,
        "question": "Możliwość zastrzeżenia w umowie ubezpieczenia, że ubezpieczający jest obowiązany w czasie trwania umowy zawiadamiać ubezpieczyciela o zmianach okoliczności, o które ubezpieczyciel zapytywał przed zawarciem umowy, nie dotyczy:",
        "answers": [
            "ubezpieczeń zdrowotnych",
            "ubezpieczeń na cudzy rachunek",
            "ubezpieczeń na życie",
            "ubezpieczeń pracowniczych"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 21
    },
    {
        "id": 122,
        "question": "W obowiązkowym ubezpieczeniu budynków rolniczych normy zużycia tych budynków, na potrzeby ustalenia sumy ubezpieczenia, określa:",
        "answers": [
            "Komisja Nadzoru Finansowego",
            "zakład ubezpieczeń stosownie do przepisów prawa budowlanego",
            "rolnik",
            "sołtys gminy"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 22
    },
    {
        "id": 123,
        "question": "Budynek A ma wartość 100 mln zł, B 50 mln zł, C 30 mln zł. Odległość między budynkami wynosi: od A do B 15m, od B do C 35m, od C do A 25m. Wysokość budynku A to 18m, B 10m, C 10m. Oblicz uproszczony PML jeśli budynek A wyposażony jest w tryskacze.",
        "answers": [
            "50 mln zł",
            "150 mln zł",
            "180 mln zł",
            "100 mln zł"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 23
    },
    {
        "id": 124,
        "question": "Ataki powodujące czasową niedostępność systemów teleinformatycznych i usług świadczonych drogą elektroniczną to:",
        "answers": [
            "DDOS",
            "malware",
            "phishing",
            "ransomware"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 24
    },
    {
        "id": 125,
        "question": "Czy uderzenie pioruna jest objęte ubezpieczeniem od ognia, nawet jeśli nie spowoduje pożaru?",
        "answers": [
            "Tak, ale ubezpieczenie od pioruna trzeba wykupić oddzielnie, nie jest częścią standardowej polisy",
            "To zależy od tego, czy piorun uderzył podczas burzy z opadami czy bez opadów",
            "Tak, uderzenie pioruna stanowi odrębne ryzyko – szkody bezpośrednio spowodowane wyładowaniem atmosferycznym są objęte ochroną, niezależnie od tego, czy doszło do pożaru",
            "Nie, odszkodowanie zostanie wypłacone tylko jeśli w wyniku uderzenia pioruna powstał pożar"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 25
    },
    {
        "id": 126,
        "question": "Szkody w urządzeniach elektrycznych spowodowane przepięciem (np. uderzeniem pioruna skutkującym skokiem napięcia) w zakresie FLEXA są:",
        "answers": [
            "pokrywane standardowo jako szkody od uderzenia pioruna",
            "co do zasady wyłączone z typowej polisy ogniowej, o ile nie wykupiono specjalnego rozszerzenia (klauzuli przepięciowej) – sam piorun jest ryzykiem podstawowym, ale szkody elektryczne bezpośrednie wymagają rozszerzenia",
            "uznawane za wady fabryczne urządzeń, więc nie podlegają odszkodowaniu",
            "nie mogą w żaden sposób zostać objęte ochroną ubezpieczeniową"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 26
    },
    {
        "id": 127,
        "question": "Na podstawie obowiązujących regulacji, obowiązkowe ubezpieczenie odpowiedzialności cywilnej pośrednika w obrocie nieruchomościami obejmuje szkody:",
        "answers": [
            "polegające na utracie rzeczy, wyrządzone przez ubezpieczonego rodzeństwu",
            "powstałe wskutek działań wojennych",
            "wyrządzone w związku z pośrednictwem w obrocie nieruchomościami",
            "polegające na uszkodzeniu rzeczy, wyrządzone przez ubezpieczonego osobie, z którą ubezpieczony pozostaje we wspólnym pożyciu"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 27
    },
    {
        "id": 128,
        "question": "Zgodnie z przepisami prawa, wysokość minimalnej sumy gwarancyjnej w obowiązkowym ubezpieczeniu odpowiedzialności cywilnej przedsiębiorcy za szkody wyrządzone podczas wykonywania czynności detektywa została wyrażona w:",
        "answers": [
            "USD",
            "IKSD, tj. jednostce rozrachunkowej Międzynarodowej Federacji Stowarzyszeń Prywatnych Detektywów",
            "euro",
            "CHF"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 28
    },
    {
        "id": 129,
        "question": "Jeśli ubezpieczony nie dopełni wymaganych w umowie środków zabezpieczenia mienia (np. nie zainstaluje wymaganego alarmu lub nie zamknie należycie drzwi), to w razie powstania szkody:",
        "answers": [
            "nieważne jest jakie zabezpieczenia były zastosowane – liczy się tylko to, czy szkoda jest objęta zakresem ochrony",
            "ubezpieczyciel wypłaci odszkodowanie, ale naliczy udział własny za naruszenie przez ubezpieczonego warunków umowy",
            "ubezpieczyciel może odmówić wypłaty odszkodowania lub je zmniejszyć, o ile niedopełnienie zabezpieczeń miało wpływ na powstanie lub rozmiar szkody",
            "ubezpieczenie automatycznie staje się nieważne z mocy prawa już od momentu stwierdzenia braku wymaganego zabezpieczenia"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 29
    },
    {
        "id": 130,
        "question": "Do umów ubezpieczenia zawieranych z towarzystwem ubezpieczeń wzajemnych przez podmioty będące członkami tego towarzystwa nie stosuje się przepisów o:",
        "answers": [
            "zamówieniach publicznych",
            "ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polskim Biurze Ubezpieczycieli Komunikacyjnych",
            "działalności ubezpieczeniowej i reasekuracyjnej",
            "dystrybucji ubezpieczeń"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 30
    },
    {
        "id": 131,
        "question": "Pojęcie EML (Estimated Maximum Loss) oznacza:",
        "answers": [
            "maksymalnie najmniej korzystny scenariusz szkodowy, w którym żadne zabezpieczenia aktywne (np. tryskacze) nie działają, działają jedynie pasywne (np. drzwi ogniotrwałe)",
            "najbardziej prawdopodobny scenariusz szkodowy, w którym aktywne (np. tryskacze) zabezpieczenia i wszystkie pasywne (np. drzwi ogniotrwałe) zabezpieczenia zadziałają",
            "najbardziej prawdopodobny scenariusz szkodowy, w którym aktywne (np. tryskacze) zabezpieczenia zadziałają, nie zadziałają jednak zabezpieczenia pasywne (np. drzwi ogniotrwałe)",
            "maksymalnie najmniej korzystny scenariusz szkodowy, w którym żadne zabezpieczenia aktywne (np. tryskacze) ani pasywne (np. drzwi ogniotrwałe) nie zadziałają"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 31
    },
    {
        "id": 132,
        "question": "Przelew (cesja) praw z umowy ubezpieczenia mienia (np. na bank kredytujący nieruchomość) jest:",
        "answers": [
            "wymagany przez prawo przy każdym kredycie hipotecznym na nieruchomość",
            "automatyczny w razie sprzedaży ubezpieczonego mienia – polisa przechodzi na nabywcę z mocy prawa",
            "niedopuszczalny – umowę trzeba zawrzeć od nowa na nowego właściciela mienia",
            "możliwy za zgodą ubezpieczyciela; często odnotowuje się cesję na polisie, co uprawnia cesjonariusza (np. bank) do odbioru odszkodowania"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 32
    },
    {
        "id": 133,
        "question": "Na podstawie obowiązujących norm prawnych, ustalenia spełnienia lub nieistnienia obowiązku ubezpieczenia odpowiedzialności cywilnej przez radcę prawnego można dochodzić:",
        "answers": [
            "wyłącznie przed Urzędem Komisji Nadzoru Finansowego",
            "jedynie przed Ogólnopolskim Stowarzyszeniem Zawodów Prawniczych",
            "przed sądem powszechnym",
            "przed Polskim Biurem Ubezpieczycieli Komunikacyjnych"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 33
    },
    {
        "id": 134,
        "question": "Warunkiem odpowiedzialności ubezpieczyciela w ubezpieczeniu maszyn od uszkodzeń (np. kotłów ciśnieniowych, dźwigów) może być:",
        "answers": [
            "ubezpieczenie wszystkich maszyn w zakładzie, nie tylko wybranych",
            "prowadzenie dziennika konserwacji maszyny przez przedstawiciela ubezpieczyciela",
            "posiadanie aktualnych badań i przeglądów konserwacyjnych realizowanych przez producenta/dostawcę maszyny",
            "posiadanie aktualnych badań technicznych i dopuszczeń do eksploatacji wymaganych przez prawo (np. decyzji UDT) dla tych urządzeń"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 34
    },
    {
        "id": 135,
        "question": "Edward Lloyd (od którego nazwiska pochodzi nazwa znanej do dziś korporacji ubezpieczycieli), prowadził w XVII w. w Londynie:",
        "answers": [
            "znaną firmę brokerską",
            "zakład ubezpieczeń",
            "kawiarnię",
            "zakład transportowy"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 35
    },
    {
        "id": 136,
        "question": "Do obowiązków ubezpieczonego po wystąpieniu szkody zwyczajowo należy m.in.:",
        "answers": [
            "niezwłoczne powiadomienie ubezpieczyciela o szkodzie, zabezpieczenie miejsca szkody przed powiększaniem się strat oraz użycie dostępnych środków w celu ratowania mienia",
            "ustalenie we własnym zakresie sprawcy szkody i dochodzenie od niego roszczeń przed zgłoszeniem szkody ubezpieczycielowi",
            "nienaruszanie miejsca szkody aż do przybycia przedstawiciela ubezpieczyciela, pod rygorem utraty prawa do odszkodowania",
            "przedstawienie ubezpieczycielowi wyceny szkody sporządzonej na własny koszt przez niezależnego rzeczoznawcę"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 36
    },
    {
        "id": 137,
        "question": "Przedsiębiorstwo handlowe ma znacznie zmieniające się w ciągu roku stany magazynowe towarów. Jaki rodzaj umowy ubezpieczenia mienia najlepiej zabezpieczy takie zmienne zapasy, unikając niedoubezpieczenia lub nadpłaty składki?",
        "answers": [
            "Standardowa polisa na sumy stałe, z wysoką sumą ubezpieczenia ustawioną na maksymalny przewidywany stan magazynu w roku",
            "Ubezpieczenie na pierwsze ryzyko, które automatycznie dopasowuje sumę ubezpieczenia do aktualnej wartości mienia każdego dnia",
            "Polisa obrotowa (zwana też polisą z deklaracją), gdzie ustala się sumę ubezpieczenia w formie limitu, a składka rozliczana jest na podstawie regularnych deklaracji faktycznej wartości zapasów w kolejnych okresach",
            "Kilka odrębnych polis krótkoterminowych zawieranych i rozwiązywanych w ciągu roku w zależności od wielkości stanu zapasów"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 37
    },
    {
        "id": 138,
        "question": "Wpisowi do rejestru pośredników ubezpieczeniowych nie podlega:",
        "answers": [
            "agent oferujący ubezpieczenia uzupełniające",
            "agent ubezpieczeniowy",
            "broker ubezpieczeniowy",
            "osoba wykonująca czynności dystrybucyjne zakładu ubezpieczeń"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 38
    },
    {
        "id": 139,
        "question": "Jedną z cech gwarancji wadialnej jest:",
        "answers": [
            "krótki okres ważności gwarancji",
            "ograniczenie do działalności notarialnych",
            "ograniczenie wyłącznie do obrotu dewizowego",
            "długi okres ważności gwarancji"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 39
    },
    {
        "id": 140,
        "question": "W przypadku umowy ubezpieczenia na życie ze składką regularną brak zapłaty składki w terminie co po zasady może, o ile umowa nie stanowi inaczej, doprowadzić do ustania umowy ubezpieczenia, jeżeli:",
        "answers": [
            "składka lub jej rata nie została zapłacona w terminie określonym w umowie lub ogólnych warunkach ubezpieczenia mimo uprzedniego wezwania do zapłaty w dodatkowym terminie określonym w OWU",
            "składka lub jej rata nie została zapłacona w terminie określonym w umowie lub ogólnych warunkach ubezpieczenia bez potrzeby dodatkowego wzywania do zapłaty",
            "składka lub jej rata nie została zapłacona w terminie określonym w umowie lub ogólnych warunkach ubezpieczenia mimo uprzedniego wezwania do zapłaty w dodatkowym terminie wyznaczonym przez ubezpieczyciela nie krótszym niż 7 dni",
            "składka lub jej rata nie została zapłacona w terminie określonym w umowie lub ogólnych warunkach ubezpieczenia mimo uprzedniego wezwania do zapłaty w dodatkowym terminie 14 dni"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 40
    },
    {
        "id": 141,
        "question": "Komisja Nadzoru Finansowego kontroluje spełnienie obowiązku zawarcia umowy ubezpieczenia:",
        "answers": [
            "OC brokerów",
            "OC posiadaczy pojazdów mechanicznych",
            "OC rolników",
            "budynków rolniczych od ognia i innych zdarzeń losowych"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 41
    },
    {
        "id": 142,
        "question": "Standardowe ubezpieczenie od ognia (tzw. FLEXA) nie obejmuje zazwyczaj szkód spowodowanych przez:",
        "answers": [
            "pożar powstały wskutek zaprószenia ognia",
            "uderzenie pioruna",
            "eksplozję kotła lub innego urządzenia ciśnieniowego",
            "samozapłon materiałów (samorzutne samozapalenie się substancji, np. siana)"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 42
    },
    {
        "id": 143,
        "question": "Wartość rzeczywista mienia to:",
        "answers": [
            "wartość odtworzeniowa (nowa) pomniejszona o stopień zużycia technicznego",
            "wartość nowego odtworzenia (bez uwzględnienia zużycia)",
            "cena rynkowa mienia z dnia szkody",
            "cena rynkowa mienia z dnia naliczenia odszkodowania"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 43
    },
    {
        "id": 144,
        "question": "W przypadku skorzystania przez ubezpieczającego z ustawowego prawa do odstąpienia od umowy ubezpieczenia, ubezpieczyciel zgodnie z Kodeksem cywilnym:",
        "answers": [
            "zwraca zawsze całą składkę",
            "ma prawo do składki za okres, w jakim udzielał ochrony ubezpieczeniowej",
            "ma prawo do składki za okres, w jakim udzielał ochrony ubezpieczeniowej, powiększonej o maksymalnie 20% wskaźnika kosztów",
            "ma prawo do składki za okres, w jakim udzielał ochrony ubezpieczeniowej, o ile zaszedł wypadek ubezpieczeniowy"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 44
    },
    {
        "id": 145,
        "question": "Suma ubezpieczenia w sekcji I (mienia) polisy CAR powinna odpowiadać:",
        "answers": [
            "sumie wszystkich transz finansowania inwestycji określonych w umowie z bankiem",
            "wartości gruntów i istniejących budynków na terenie budowy przed rozpoczęciem robót",
            "wyłącznie wartości materiałów budowlanych zużytych w trakcie budowy",
            "pełnej wartości realizowanego kontraktu (robót, materiałów itp.), łącznie z ewentualnymi kosztami prac tymczasowych oraz przewidywanymi kosztami uprzątnięcia pozostałości po szkodzie, o ile są objęte"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 45
    },
    {
        "id": 146,
        "question": "Czy standardowa polisa ubezpieczenia mienia od ognia i innych zdarzeń losowych dla budynków obejmuje szkody powstałe wskutek samoistnego zawalenia się budynku z powodu ukrytych wad konstrukcyjnych (bez wpływu czynników zewnętrznych)?",
        "answers": [
            "Nie, taka szkoda zwykle nie jest objęta ochroną – zawalenie się budowli z powodu wad lub błędów budowlanych (bez dodatkowej przyczyny losowej) jest wyłączone z ubezpieczenia",
            "Tak, każdy nagły i nieprzewidziany incydent zawalenia się budynku, niezależnie od przyczyny, jest traktowany jako zdarzenie losowe i objęty polisą",
            "Tak, ale tylko w zakresie podstawowym ubezpieczenia od ognia (pożar automatycznie obejmuje też zawalenie się budynku)",
            "Będzie objęta ochroną tylko wówczas, gdy wykupiono dodatkowe rozszerzenie dotyczące wad konstrukcyjnych lub katastrofy budowlanej"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 46
    },
    {
        "id": 147,
        "question": "W przypadku międzynarodowego przewozu lotniczego stosowanie przepisów Konwencji Montrealskiej z dn. 28.05.1999 r. ma:",
        "answers": [
            "pierwszeństwo przed wszelkimi innymi zasadami stosującymi się w tym zakresie z wyjątkiem Protokołu z Gwatemala City",
            "pierwszeństwo przed wszelkimi zasadami stosującymi się do międzynarodowego przewozu lotniczego",
            "pierwszeństwo przed wszelkimi innymi zasadami stosującymi się w tym zakresie z wyjątkiem zasad Konwencji Warszawskiej",
            "pierwszeństwo przed wszelkimi innymi zasadami stosującymi się w tym zakresie z wyjątkiem zasad Konwencji Warszawskiej uzupełnionej Protokołem Haskim"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 47
    },
    {
        "id": 148,
        "question": "W związku z proponowanym zawarciem umowy ubezpieczenia broker ubezpieczeniowy ma obowiązek poinformować klienta o wysokości:",
        "answers": [
            "wynagrodzenia jakiegokolwiek rodzaju",
            "honorarium płaconego bezpośrednio przez klienta",
            "otrzymywanej prowizji uwzględnionej w kwocie składki ubezpieczeniowej",
            "otrzymywanej prowizji uwzględnionej w kwocie składki ubezpieczeniowej jeżeli jest większa niż 20% składki"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 48
    },
    {
        "id": 149,
        "question": "Wymagana regulacjami prawnymi minimalna suma gwarancyjna obowiązkowego ubezpieczenia odpowiedzialności cywilnej zarządcy nieruchomości dotyczy:",
        "answers": [
            "okresu ubezpieczenia nie dłuższego niż 12 miesięcy",
            "okresu ubezpieczenia dłuższego niż 24 miesiące",
            "dowolnego okresu ubezpieczenia",
            "okresu ubezpieczenia nie dłuższego niż 24 miesiące w stosunku do certyfikowanego zarządcy nieruchomości"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 49
    },
    {
        "id": 150,
        "question": "Przepisy właściwego rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej przedsiębiorcy za szkody wyrządzone podczas wykonywania czynności detektywa, nie zawierają regulacji dotyczących:",
        "answers": [
            "terminu powstania obowiązku ubezpieczenia",
            "konsekwencji niespełnienia obowiązku zawarcia umowy tego ubezpieczenia",
            "wysokości minimalnej sumy gwarancyjnej w tym ubezpieczeniu",
            "katalogu szkód wyłączonych z zakresu przedmiotowego ubezpieczenia"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 50
    },
    {
        "id": 151,
        "question": "Co dzieje się z polisą ubezpieczenia mienia w razie sprzedaży ubezpieczonego mienia w trakcie trwania umowy?",
        "answers": [
            "Polisa automatycznie przechodzi na nowego właściciela do końca okresu ubezpieczenia",
            "Jeśli strony nie umówiły się inaczej, odpowiedzialność ubezpieczyciela za szkody powstałe po przeniesieniu własności wygasa – umowa nie chroni nowego właściciela, chyba że ubezpieczyciel zgodzi się na kontynuację na jego rzecz",
            "Ochrona jest kontynuowana na rzecz nowego właściciela z mocy prawa, ale z zastosowaniem 50% udziału własnego",
            "Składka za niewykorzystany okres podlega przepadkowi, a polisa wygasa w chwili sprzedaży"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 51
    },
    {
        "id": 152,
        "question": "Doszło do szkody pożarowej w 5-letnim transformatorze ubezpieczonym w wartości odtworzeniowej na 1,2 mln zł. Faktura za naprawę urządzenia 0,8 mln zł. Zużycie techniczne: 10% rocznie. Określ wartość odszkodowania.",
        "answers": [
            "1,2 mln zł",
            "0,8 mln zł",
            "0,6 mln zł",
            "0,4 mln zł"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 52
    },
    {
        "id": 153,
        "question": "Wydatki zakładu ubezpieczeń na pokrycie nieoczekiwanych zdarzeń, których prawdopodobieństwo wystąpienia w ciągu roku mieści się w granicach 15% (poziom ufności 85% w okresie rocznym) ma zabezpieczyć:",
        "answers": [
            "minimalny wymóg kapitałowy",
            "kapitałowy wymóg wypłacalności",
            "rezerwa techniczno-ubezpieczeniowa dla celów wypłacalności",
            "rezerwa techniczno-ubezpieczeniowa dla celów rachunkowości"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 53
    },
    {
        "id": 154,
        "question": "Czynności w zakresie dystrybucji ubezpieczeń w imieniu lub na rzecz klienta wykonuje:",
        "answers": [
            "każdy dystrybutor ubezpieczeń",
            "każdy pośrednik ubezpieczeniowy",
            "wyłącznie broker ubezpieczeniowy",
            "wyłącznie agent ubezpieczeniowy"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 54
    },
    {
        "id": 155,
        "question": "Ubezpieczenie na pierwsze ryzyko charakteryzuje się tym, że:",
        "answers": [
            "ubezpieczenie dotyczy tylko pierwszego zdarzenia w roku, kolejne nie są objęte",
            "pierwsza szkoda w okresie ubezpieczenia nie powoduje pomniejszenia sumy ubezpieczenia",
            "nie jest stosowana zasada proporcjonalnej redukcji odszkodowania (zasada proporcji) w razie szkody",
            "składka płatna jest jednorazowo na początku okresu („pierwsze ryzyko” ubezpieczyciela)"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 55
    },
    {
        "id": 156,
        "question": "Nadzór nad działalnością brokerów ubezpieczeniowych sprawuje:",
        "answers": [
            "Minister Finansów",
            "Przewodniczący Komisji Nadzoru Finansowego",
            "Komisja Nadzoru Finansowego",
            "zakład ubezpieczeń, na rzecz którego działa broker"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 56
    },
    {
        "id": 157,
        "question": "Przepisy właściwego rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej osoby uprawnionej do sporządzania świadectw charakterystyki energetycznej, zawierają regulacje dotyczące:",
        "answers": [
            "zasad sporządzania świadectw charakterystyki energetycznej",
            "sposobu ustalania (przeliczania na PLN) kwoty minimalnej sumy gwarancyjnej wyrażonej w euro, właściwej dla tego ubezpieczenia",
            "konsekwencji niespełnienia obowiązku zawarcia umowy tego ubezpieczenia",
            "sposobu ustalania taryfy ubezpieczeniowej w przedmiotowym ubezpieczeniu"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 57
    },
    {
        "id": 158,
        "question": "Zgodnie z art. 94 ust. 1 Unijnego Kodeksu Celnego, gwarantem w przypadku gwarancji zapłaty długu celnego może być spośród instytucji ubezpieczeniowych:",
        "answers": [
            "wyłącznie zakład ubezpieczeń umieszczony na wykazie ustalonym przez Główny Urząd Ceł",
            "każda instytucja ubezpieczeniowa akredytowana w Unii zgodnie z obowiązującymi przepisami",
            "wyłącznie KUKE",
            "wyłącznie instytucja ubezpieczeniowa umieszczona na wykazie ustalonym przez Narodowy Bank Polski"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 58
    },
    {
        "id": 159,
        "question": "Istnieją dwa podstawowe rodzaje faktoringu. Jednym z nich jest:",
        "answers": [
            "faktoring niepełny, niewłaściwy, z regresem",
            "faktoring niepełny, właściwy, bez regresu",
            "faktoring pełny, niewłaściwy, bez regresu",
            "faktoring niepełny, niewłaściwy, bez regresu"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 59
    },
    {
        "id": 160,
        "question": "Regulacje wyznaczające katalog szkód wyłączających odpowiedzialność zakładu ubezpieczeń w obowiązkowym ubezpieczeniu OC przedsiębiorcy prowadzącego działalność w zakresie czynności rzeczoznawstwa majątkowego zostały zawarte w przepisach:",
        "answers": [
            "ustawy o rzeczoznawcach majątkowych",
            "zarządzenia Prezesa Rady Ministrów w sprawie obowiązku ubezpieczenia OC rzeczoznawcy majątkowego",
            "ustawy o działalności ubezpieczeniowej",
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej przedsiębiorcy prowadzącego działalność w zakresie czynności rzeczoznawstwa majątkowego"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 60
    },
    {
        "id": 161,
        "question": "Standardowe wyłączenie odpowiedzialności w ubezpieczeniu CAR/EAR (części budowlanej) to:",
        "answers": [
            "szkody wynikłe z wad projektu, wadliwych materiałów lub wadliwego wykonania (jeśli nie włączono odpowiedniej klauzuli usuwającej to wyłączenie)",
            "szkody powstałe wskutek klęsk żywiołowych, takich jak powódź czy trzęsienie ziemi",
            "pożar na placu budowy lub instalacji montażowej wywołany przyczynami naturalnymi lub błędem ludzkim",
            "błędy popełnione przez operatorów maszyn budowlanych podczas pracy"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 61
    },
    {
        "id": 162,
        "question": "Obowiązkowe ubezpieczenie budynków rolniczych obejmuje co najmniej szkody spowodowane przez:",
        "answers": [
            "wyłącznie ogień, uderzenie pioruna, eksplozję",
            "wszystkie możliwe ryzyka (formuła all risks) występujące na terenie gospodarstwa",
            "tylko te zdarzenia, które rolnik wskaże we wniosku ubezpieczeniowym",
            "ogień, uderzenie pioruna, eksplozję, huragan, powódź, podtopienie, deszcz nawalny, grad, obsunięcie się ziemi, lawinę i ciężar śniegu - zgodnie z zakresem określonym ustawą"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 62
    },
    {
        "id": 163,
        "question": "Przed zawarciem umowy ubezpieczenia dystrybutor ubezpieczeń określa, na podstawie uzyskanych od klienta informacji, jego wymagania i potrzeby oraz podaje w zrozumiałej formie obiektywne informacje o produkcie ubezpieczeniowym, w celu:",
        "answers": [
            "objęcia klienta ochroną ubezpieczeniową",
            "umożliwienia klientowi podjęcia świadomej decyzji",
            "zagwarantowania uczciwego procesu sprzedaży ubezpieczenia",
            "udokumentowania do celów nadzorczych procesu sprzedaży ubezpieczenia"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 63
    },
    {
        "id": 164,
        "question": "Ubezpieczeniem obowiązkowym nie jest ubezpieczenie:",
        "answers": [
            "OC posiadaczy pojazdów mechanicznych",
            "OC rolników",
            "budynków rolniczych od ognia i innych zdarzeń losowych",
            "autocasco"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 64
    },
    {
        "id": 165,
        "question": "Ubezpieczenie budowlano-montażowe (CAR/EAR) może obejmować jako ubezpieczonych:",
        "answers": [
            "wszystkie główne strony projektu – inwestora, generalnego wykonawcę oraz podwykonawców – na podstawie jednej wspólnej polisy",
            "wyłącznie inwestora (właściciela budowy), ponieważ to jego mienie jest ubezpieczane",
            "jedynie generalnego wykonawcę i głównego projektanta inwestycji",
            "wyłącznie wykonawcę i jego podwykonawców"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 65
    },
    {
        "id": 166,
        "question": "Suma ubezpieczenia w polisie ubezpieczenia maszyn od awarii powinna odpowiadać:",
        "answers": [
            "wartości rynkowej używanej maszyny z dnia zawarcia umowy ubezpieczenia",
            "wartości księgowej brutto maszyny z uwzględnieniem amortyzacji",
            "wartości odtworzeniowej (nowej) maszyny, aby w razie zniszczenia można było nabyć nową maszynę o podobnych parametrach",
            "wartości księgowej brutto maszyny bez uwzględnienia amortyzacji"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 66
    },
    {
        "id": 167,
        "question": "Dystrybucji ubezpieczeń w zakresie grupy 3 działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej nie może wykonywać:",
        "answers": [
            "agent oferujący ubezpieczenia uzupełniające",
            "agent ubezpieczeniowy",
            "broker ubezpieczeniowy",
            "zakład ubezpieczeń"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 67
    },
    {
        "id": 168,
        "question": "Określony w ustawie o dystrybucji ubezpieczeń obowiązek postępowania zgodnie z najlepiej pojętym interesem klientów nie dotyczy:",
        "answers": [
            "zakładu ubezpieczeń",
            "agenta ubezpieczeniowego",
            "agenta oferującego ubezpieczenia uzupełniające",
            "żadna z powyższych odpowiedzi (a, b i c) nie jest prawidłowa"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 68
    },
    {
        "id": 169,
        "question": "Jeśli suma ubezpieczenia znacznie przewyższa wartość ubezpieczonego mienia (nadubezpieczenie), to w razie szkody:",
        "answers": [
            "nadpłacona składka zostanie zwrócona za niewykorzystaną część sumy ubezpieczenia",
            "ubezpieczyciel wypłaci odszkodowanie proporcjonalnie obniżone",
            "ubezpieczyciel wypłaci pełną sumę ubezpieczenia z polisy",
            "odszkodowanie i tak będzie ograniczone do rzeczywistej wysokości poniesionej szkody (nie wyższej niż wartość mienia)"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 69
    },
    {
        "id": 170,
        "question": "Ubezpieczeniem dodatkowym do umowy ubezpieczenia na życie, zaoferowanym przez tego samego ubezpieczyciela, może być:",
        "answers": [
            "ubezpieczenie utraty dochodów w razie wypadku albo choroby",
            "ubezpieczenie utraty zatrudnienia w razie wypadku albo choroby",
            "ubezpieczenie dziennego świadczenia szpitalnego w razie wypadku albo choroby",
            "ubezpieczenie odpowiedzialności cywilnej w życiu prywatnym"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 70
    },
    {
        "id": 171,
        "question": "Okres odszkodowawczy w ubezpieczeniu utraty zysku to:",
        "answers": [
            "okres karencji (oczekiwania) zanim rozpocznie się ochrona ubezpieczeniowa",
            "okres, za który odszkodowanie się nie nalicza (udział własny ubezpieczonego w odszkodowaniu)",
            "maksymalny okres, za który wypłacane jest odszkodowanie z tytułu przerwy w działalności, liczony od dnia wystąpienia szkody",
            "okres przekraczający okres odbudowy"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 71
    },
    {
        "id": 172,
        "question": "Z tytułu ubezpieczenia OC rolników za szkody polegające na skażeniu środowiska zakład ubezpieczeń:",
        "answers": [
            "ponosi odpowiedzialność w pełnym zakresie",
            "ponosi odpowiedzialność solidarnie ze sprawcą szkody",
            "ponosi odpowiedzialność za szkody wyrządzone wyłącznie osobom bliskim sprawcy szkody",
            "wszystkie odpowiedzi (a-c) są nieprawidłowe"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 72
    },
    {
        "id": 173,
        "question": "Zakład ubezpieczeń z tytułu umowy ubezpieczenia obowiązkowego jest obowiązany do wypłaty odszkodowania, co do zasady, w terminie:",
        "answers": [
            "1 dnia od dnia zgłoszenia szkody",
            "30 dni od dnia zgłoszenia szkody",
            "3 miesięcy od dnia zgłoszenia szkody",
            "6 miesięcy od dnia zgłoszenia szkody"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 73
    },
    {
        "id": 174,
        "question": "Dystrybucja ubezpieczeń polega na:",
        "answers": [
            "obsłudze roszczeń kierowanych do zakładu ubezpieczeń",
            "wycenie szkód i sporządzaniu ekspertyz związanych z tymi szkodami",
            "doradzaniu, proponowaniu lub wykonywaniu innych czynności przygotowawczych zmierzających do zawarcia umów ubezpieczenia lub umów gwarancji ubezpieczeniowych",
            "przekazywaniu potencjalnym klientom informacji na temat produktów ubezpieczeniowych, w przypadku gdy przedsiębiorca nie podejmuje dodatkowych działań mających pomóc w zawarciu umowy ubezpieczenia"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 74
    },
    {
        "id": 175,
        "question": "Zasady kontroli spełnienia obowiązku zawarcia umowy obowiązkowego ubezpieczenia OC tzw. „zawodowego” (np. adwokatów, księgowych) oraz konsekwencje jego niespełnienia, określają:",
        "answers": [
            "przepisy ustawy o ubezpieczeniach obowiązkowych, UFG i PBUK",
            "ustawy lub umowy międzynarodowe wprowadzające obowiązek ubezpieczenia",
            "przepisy Kodeksu cywilnego lub Kodeksu postępowania cywilnego",
            "wytyczne Komisji Nadzoru Finansowego"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 75
    },
    {
        "id": 176,
        "question": "Postępowanie windykacyjne związane z wykonywaniem umów gwarancji ubezpieczeniowych:",
        "answers": [
            "jest czynnością ubezpieczeniową po uzyskaniu zgody Ministerstwa Finansów i KNF-u",
            "jest czynnością ubezpieczeniową po uzyskaniu zgody Ministerstwa Finansów",
            "nie jest czynnością ubezpieczeniową",
            "jest czynnością ubezpieczeniową"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 76
    },
    {
        "id": 177,
        "question": "Według danych KNF, na koniec roku 2023, liczba krajowych zakładów ubezpieczeń na życie zorganizowanych w formie towarzystwa ubezpieczeń wzajemnych wynosiła:",
        "answers": [
            "9 zakładów",
            "5 zakładów",
            "4 zakłady",
            "2 zakłady"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 77
    },
    {
        "id": 178,
        "question": "Z chwilą wyrejestrowania pojazdu mechanicznego umowa ubezpieczenia OC posiadaczy pojazdów mechanicznych:",
        "answers": [
            "przekształca się w umowę nienazwaną",
            "ulega rozwiązaniu z mocy prawa",
            "ulega rozwiązaniu po uzyskaniu zgody zakładu ubezpieczeń",
            "ulega zawieszeniu"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 78
    },
    {
        "id": 179,
        "question": "Umowa ubezpieczenia, na podstawie której co najmniej dwa zakłady ubezpieczeń, działając w porozumieniu, zobowiązują się do spełnienia określonego świadczenia w przypadku wystąpienia zdarzenia losowego przewidzianego w umowie to:",
        "answers": [
            "kooperacja",
            "koasekuracja",
            "gwarancja ubezpieczeniowa",
            "reasekuracja"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 79
    },
    {
        "id": 180,
        "question": "Osoba fizyczna wykonująca czynności w zakresie matematyki ubezpieczeniowej, finansowej i statystyki, wpisana do odpowiedniego zawodowego rejestru to:",
        "answers": [
            "audytor wewnętrzny",
            "członek zarządu zakładu ubezpieczeń odpowiedzialny za zarządzanie ryzykiem",
            "biegły rewident",
            "aktuariusz"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 80
    },
    {
        "id": 181,
        "question": "Na okaziciela zgodnie z Kodeksem cywilnym można zawrzeć umowę ubezpieczenia:",
        "answers": [
            "na życie",
            "mienia",
            "następstw nieszczęśliwych wypadków",
            "odpowiedzialności cywilnej"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 81
    },
    {
        "id": 182,
        "question": "Jaka jest definicja rabunku przyjęta zazwyczaj w ogólnych warunkach ubezpieczeń mienia od kradzieży z włamaniem i rabunku?",
        "answers": [
            "Zabór mienia dokonany z zastosowaniem przemocy fizycznej lub groźby jej natychmiastowego użycia wobec ubezpieczonego albo osoby przez niego wyznaczonej do ochrony mienia",
            "Zabór mienia przez osobę wykorzystującą zaufanie lub podstęp, brak świadomości",
            "Zabór mienia dokonany z zastosowaniem wyłącznie przemocy fizycznej wobec ubezpieczonego albo osoby przez niego wyznaczonej do ochrony mienia",
            "Zabór mienia dokonany z zastosowaniem wyłącznie groźby jej natychmiastowego użycia wobec ubezpieczonego albo osoby przez niego wyznaczonej do ochrony mienia"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 82
    },
    {
        "id": 183,
        "question": "Zgodnie z Kodeksem Morskim posiadanie ubezpieczenia odpowiedzialności za roszczenia morskie powinno być potwierdzone:",
        "answers": [
            "jednym albo kilkoma dokumentami uwierzytelnionymi przez armatora potwierdzającymi ubezpieczenie odpowiedzialności za roszczenia morskie",
            "jedną albo kilkoma akredytywami wystawionymi przez bank potwierdzającymi ubezpieczenie odpowiedzialności za roszczenia morskie",
            "jednym albo kilkoma certyfikatami ubezpieczenia odpowiedzialności za roszczenia morskie",
            "jednym albo kilkoma listami potwierdzającymi ubezpieczenie odpowiedzialności za roszczenia morskie"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 83
    },
    {
        "id": 184,
        "question": "W większości OWU za huragan (wichurę) uważa się wiatr o prędkości co najmniej:",
        "answers": [
            "17 m/s (ok. 60 km/h), chyba że brak jest możliwości pomiaru – wtedy wystąpienie szkód masowych w okolicy jest dowodem huraganu",
            "30 m/s (ok. 108 km/h) potwierdzony przez najbliższą stację meteorologiczną",
            "5 m/s",
            "wartości kwalifikowanej jako huragan każdorazowo przez Instytut Meteorologii i Gospodarki Wodnej dla danego regionu"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 84
    },
    {
        "id": 185,
        "question": "Pojęcie PML (Possible Maximum Loss) oznacza:",
        "answers": [
            "najbardziej prawdopodobny scenariusz szkodowy, w którym aktywne (np. tryskacze) i pasywne (np. drzwi ogniotrwałe) zabezpieczenia zadziałają",
            "najbardziej prawdopodobny scenariusz szkodowy, w którym częściowo aktywne (np. tryskacze) zabezpieczenia i wszystkie pasywne (np. drzwi ogniotrwałe) zabezpieczenia zadziałają",
            "maksymalnie najmniej korzystny scenariusz szkodowy, w którym żadne zabezpieczenia aktywne (np.tryskacze) nie działają, działają jedynie pasywne (np. drzwi ogniotrwate)",
            "maksymalnie najmniej korzystny scenariusz szkodowy, w którym żadne zabezpieczenia aktywne (np. tryskacze) ani pasywne (np. drzwi ogniotrwałe) nie działają"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 85
    },
    {
        "id": 186,
        "question": "Sekcja odpowiedzialności cywilnej (OC) w ubezpieczeniu CAR (budowlano-montażowym) obejmuje:",
        "answers": [
            "uszkodzenia powstałe w realizowanym obiekcie budowlanym wskutek błędów wykonawcy",
            "odpowiedzialność cywilną inwestora i wykonawców za szkody osobowe lub rzeczowe wyrządzone osobom trzecim w związku z realizacją prac budowlanych",
            "odpowiedzialność cywilną inwestora za szkody rzeczowe wyrządzone osobom trzecim w związku z realizacją prac budowlanych",
            "uszkodzenia powstałe poza realizowanym obiektem budowlanym wskutek błędów wykonawcy"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 86
    },
    {
        "id": 187,
        "question": "Broker ubezpieczeniowy, który zamierza podjąć działalność brokerską w zakresie ubezpieczeń na terytorium innego niż RP państwa członkowskiego Unii Europejskiej przez oddział lub w inny sposób niż przez oddział, w ramach swobody świadczenia usług:",
        "answers": [
            "nie ma żadnych dodatkowych obowiązków",
            "ma obowiązek powiadomić Komisję Nadzoru Finansowego",
            "ma obowiązek uzyskać zezwolenie Komisji Nadzoru Finansowego",
            "ma obowiązek uzyskać zezwolenie właściwego organu nadzoru państwa członkowskiego UE"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 87
    },
    {
        "id": 188,
        "question": "Międzynarodowym certyfikatem ubezpieczenia OC posiadaczy pojazdów mechanicznych, wystawionym w imieniu biura narodowego, jest:",
        "answers": [
            "Identyfikator Ubezpieczeniowy",
            "Zielony Liść",
            "Zielona Karta",
            "Umowa Ramowa"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 88
    },
    {
        "id": 189,
        "question": "Do umów o świadczenie usług co do zasady stosuje się odpowiednio przepisy dotyczące:",
        "answers": [
            "umowy zlecenia",
            "umowy o dzieło",
            "umowy kontraktacji",
            "prowadzenia cudzych spraw bez zlecenia"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 89
    },
    {
        "id": 190,
        "question": "Przepisy Kodeksu cywilnego nie przewidują jako formy czynności prawnej:",
        "answers": [
            "formy pisemnej",
            "formy elektronicznej",
            "formy mającej postać trwałego nośnika",
            "formy dokumentowej"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 90
    },
    {
        "id": 191,
        "question": "Broker ubezpieczeniowy zobowiązany jest ustawowo do przechowywania dokumentacji wykonywanych czynności brokerskich po zakończeniu współpracy z klientem przez okres:",
        "answers": [
            "3 lat",
            "5 lat",
            "10 lat",
            "nie ma takiego obowiązku"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 91
    },
    {
        "id": 192,
        "question": "Wśród organów Ubezpieczeniowego Funduszu Gwarancyjnego nie znajduje się:",
        "answers": [
            "Zarząd UFG",
            "Rada UFG",
            "Komisja Egzaminacyjna UFG",
            "Zgromadzenie Członków UFG"
        ],
        "correct": 2,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 92
    },
    {
        "id": 193,
        "question": "Przed zawarciem umowy ubezpieczenia na życie ubezpieczyciel może wymagać od osoby, na rachunek której ma zostać zawarta umowa ubezpieczenia, poddania się badaniom lekarskim lub diagnostycznym, z wyjątkiem badań:",
        "answers": [
            "genetycznych",
            "onkologicznych",
            "prenatalnych",
            "krwi"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 93
    },
    {
        "id": 194,
        "question": "Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2554 z dnia 14 grudnia 2022 r. w sprawie operacyjnej odporności cyfrowej sektora finansowego (tzw. DORA):",
        "answers": [
            "nie ma zastosowania do pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniającе",
            "ma zastosowanie do wszystkich pośredników ubezpieczeniowych, pośredników reasekuracyjnychi pośredników oferujących ubezpieczenia uzupełniające",
            "ma zastosowanie do pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących mikroprzedsiębiorstwami, małymi lub średnimi przedsiębiorstwami",
            "ma zastosowanie do pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących dużymi przedsiębiorstwami"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 94
    },
    {
        "id": 195,
        "question": "Zgodnie z Kodeksem cywilnym przedawnieniu ulegają:",
        "answers": [
            "roszczenia wszelkiego rodzaju",
            "tylko roszczenia majątkowe",
            "roszczenia majątkowe i niemajątkowe",
            "tylko roszczenia pieniężne"
        ],
        "correct": 1,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 95
    },
    {
        "id": 196,
        "question": "Warunkiem związania kontrahenta postanowieniami wzorca umownego jest co do zasady:",
        "answers": [
            "doręczenie mu wzorca przed zawarciem umowy",
            "wyraźna zgoda na zastosowanie wzorca",
            "wyraźna zgoda na zastosowanie wzorca, jeżeli klient jest konsumentem",
            "uzyskanie potwierdzenia otrzymania wzorca przez klienta"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 96
    },
    {
        "id": 197,
        "question": "Osoba obejmująca w posiadanie gospodarstwo rolne, w którym budynki rolnicze nie są ubezpieczone od ognia i innych zdarzeń losowych, jest obowiązana do zawarcia umowy ubezpieczenia budynków rolniczych:",
        "answers": [
            "najpóźniej w dniu objęcia gospodarstwa rolnego w posiadanie",
            "najpóźniej w terminie 30 dni od dnia objęcia gospodarstwa rolnego w posiadanie",
            "najpóźniej w terminie 3 miesięcy od dnia objęcia gospodarstwa rolnego w posiadanie",
            "najpóźniej w terminie 6 miesięcy od dnia objęcia gospodarstwa rolnego w posiadanie"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 97
    },
    {
        "id": 198,
        "question": "Według raportów KNF o stanie rynku brokerskiego, brokerzy prowadzący dodatkowo inną działalność gospodarczą stanowią ok.:",
        "answers": [
            "20%",
            "40%",
            "60%",
            "80%"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 98
    },
    {
        "id": 199,
        "question": "Ubezpieczeniem OC posiadaczy pojazdów mechanicznych nie są objęte szkody:",
        "answers": [
            "polegające na utracie papierów wartościowych",
            "wyrządzone przez ubezpieczonego umyśInie",
            "powstałe podczas i w związku z załadunkiem pojazdu mechanicznego",
            "powstałe podczas i w związku z postojem pojazdu mechaniczneg"
        ],
        "correct": 0,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 99
    },
    {
        "id": 200,
        "question": "Czy ubezpieczyciel może odmówić wypłaty odszkodowania za pożar, jeśli stwierdzi rażące naruszenie przepisów przeciwpożarowych przez ubezpieczonego?",
        "answers": [
            "Nie, może jedynie podwyższyć składkę po szkodzie, ale nie odmówić wypłaty",
            "Nie, może jedynie podwyższyć składkę po szkodzie, ale nie odmówić wypłaty jeśli przed zawarciem umowy dokonywał inspekcji miejsca ubezpieczenia",
            "Tak, ubezpieczyciel zawsze odmawia wypłaty, jeśli nie wszystkie wymogi ochrony ppoż. były spełnione",
            "Tak, jeżeli rażące zaniedbanie obowiązków z zakresu ochrony przeciwpożarowej (np. brak wymaganych gaśnic lub niesprawna instalacja ppoż.) miało wpływ na powstanie lub rozmiar szkody, ubezpieczyciel może odmówić wypłaty lub ją ograniczyć"
        ],
        "correct": 3,
        "comment": "KWIECIEŃ 2025",
        "sourceNumber": 100
    },
    // ===== LIPIEC 2025 =====
    {
        "id": 201,
        "question": "Istnieją dwa podstawowe rodzaje faktoringu. Jednym z nich jest:",
        "answers": [
            "faktoring niepełny, właściwy, bez regresu",
            "faktoring petny, właściwy, bez regresu",
            "faktoring pełny, właściwy, z regresem",
            "faktoring pełny, niewłaściwy, bez regresu"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 1
    },
    {
        "id": 202,
        "question": "Uprawnienie do żądania zmiany składki w razie ujawnienia okoliczności, która pociąga za sobą istotną zmianę prawdopodobieństwa wypadku, nie dotyczy:",
        "answers": [
            "tylko ubezpieczeń na życie na czas określony",
            "tylko ubezpieczeń na całe życie",
            "tylko ubezpieczeń na dożycie",
            "wszystkich ubezpieczeń na życie"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 2
    },
    {
        "id": 203,
        "question": "Standardowa polisa mienia od ognia i innych zdarzeń losowych oprócz szkód bezpośrednich w mieniu pokrywa również:",
        "answers": [
            "koszty uprzątnięcia pozostałości po szkodzie (np. gruzu) do ustalonego limitu",
            "utracony zysk spowodowany przerwą w działalności w następstwie szkody",
            "szkody wynikłe z normalnego zużycia lub starzenia się ubezpieczonego mienia",
            "straty finansowe powstałe wskutek braku ubezpieczenia mienia na odpowiednią sumę"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 3
    },
    {
        "id": 204,
        "question": "Zakład ubezpieczeń informuje poszkodowanego lub uprawnionego z umowy ubezpieczenia OC rolników o możliwości wyczerpania się sumy gwarancyjnej, w przypadku gdy łączna kwota wypłaconych odszkodowań lub świadczeń przekroczy:",
        "answers": [
            "5% określonej w umowie sumy gwarancyjnej",
            "10% określonej w umowie sumy gwarancyjnej",
            "80% określonej w umowie sumy gwarancyjnej",
            "100% określonej w umowie sumy gwarancyjnej"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 4
    },
    {
        "id": 205,
        "question": "Na podstawie regulacji ustawowych Minister Finansów uregulował we właściwym rozporządzeniu szczegółowy zakres obowiązkowego ubezpieczenia odpowiedzialności cywilnej:",
        "answers": [
            "sterników motorowodnych użytkujących silniki zaburtowe spalinowe o mocy przekraczającej 50 KM",
            "trenerów psów uznanych za rasy niebezpieczne",
            "operatorów wyciągów narciarskich",
            "rzeczników patentowych oraz osób świadczących na terytorium Rzeczypospolitej Polskiej usługi transgraniczne"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 5
    },
    {
        "id": 206,
        "question": "Franszyza czasowa (czyli określony okres, przez który ubezpieczyciel nie ponosi odpowiedzialności za skutki zdarzenia) jest najczęściej stosowana:",
        "answers": [
            "w ubezpieczeniach utraty zysku wskutek przerwy w działalności (business interruption) lub opóźnionego rozruchu (ALOP)",
            "w ubezpieczeniu CAR w zakresie szkód powstałych w okresie gwarancyjnym",
            "w ubezpieczeniach CAR/EAR w zakresie Sekcji I",
            "w ubezpieczeniach EAR w zakresie szkód w trakcie testów"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 6
    },
    {
        "id": 207,
        "question": "Ubezpieczenie utraty zysku (Business Interruption) dla przedsiębiorstwa ma zastosowanie, gdy:",
        "answers": [
            "w następstwie szkody materialnej objętej ubezpieczeniem mienia dochodzi do przerwy w działalności, co powoduje utratę zysku lub wzrost kosztów firmy w okresie odszkodowawczym",
            "przedsiębiorstwo odnotuje spadek zysku ze względu na pogorszenie warunków rynkowych lub utratę klientów",
            "wystąpi jakakolwiek przerwa w działalności, prowadząca do utraty zysku niezależnie od przyczyny",
            "zniszczeniu ulegnie co najmniej 50% wartości majątku firmy, co powoduje częściowe wstrzymanie działalności"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 7
    },
    {
        "id": 208,
        "question": "Według rozporządzenia wykonawczego Komisji (UE) 2017/1469 z dnia 11 sierpnia 2017 r. ustanawiającego ustandaryzowany format prezentacji dokumentu zawierającego informacje o produkcie ubezpieczeniowym:",
        "answers": [
            "informacje standardowo powinny być zamieszczone na jednej stronie w formacie A4, a w żadnym wypadku nie mogą przekraczać dwóch stron w formacie A4",
            "informacje standardowo powinny być zamieszczone na dwóch stronach w formacie A4, a w żadnym wypadku nie mogą przekraczać trzech stron w formacie A4",
            "informacje standardowo powinny być zamieszczone na trzech stronach w formacie A4",
            "o ilości stron, na których standardowo powinny być zamieszczone informacje o produkcie ubezpieczeniowym, decyduje zakład ubezpieczeń"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 8
    },
    {
        "id": 209,
        "question": "Zgodnie z systemem wypłacalności zakładów ubezpieczeń, kapitałowy wymóg wypłacalności gwarantuje, że zakład ubezpieczeń będzie w stanie wypełniać swoje zobowiązania przez najbliższe 12 miesięcy z prawdopodobieństwem:",
        "answers": [
            "100,00%",
            "99,50%",
            "99,00%",
            "85,00%"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 9
    },
    {
        "id": 210,
        "question": "Zgodnie z prawem, ustalenia spełnienia lub nieistnienia obowiązku ubezpieczenia odpowiedzialności cywilnej przez organizatora imprezy masowej, na którą wstęp jest odpłatny można dochodzić:",
        "answers": [
            "jedynie przed Ogólnopolską Izbą Organizatorów Imprez Masowych",
            "przed Ubezpieczeniowym Funduszem Gwarancyjnym",
            "wyłącznie przed Urzędem miasta stołecznego Warszawy",
            "przed sądem powszechnym"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 10
    },
    {
        "id": 211,
        "question": "Przepisów Kodeksu cywilnego o umowie ubezpieczenia nie stosuje się do ubezpieczen:",
        "answers": [
            "morskich",
            "lotniczych",
            "komunikacyjnych",
            "górniczych"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 11
    },
    {
        "id": 212,
        "question": "Tryb postępowania przy rozpatrywaniu spraw w zakresie umorzenia opłaty za niespełnienie obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych określa:",
        "answers": [
            "Konstytucja RP",
            "ustawa o dystrybucji ubezpieczeń",
            "statut Ubezpieczeniowego Funduszu Gwarancyjnego",
            "rekomendacja Komisji Nadzoru Finansowego"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 12
    },
    {
        "id": 213,
        "question": "W inżynierskiej ocenie ryzyka pożaru obiektu przyjęto do obowiązującego scenariusz, w którym instalacja tryskaczowa zainstalowana na połowie powierzchni nie zadziała. Odpowiada to następującemu standardowi oceny ryzyka:",
        "answers": [
            "Estimated Maximum Loss",
            "Probably Maximum Loss",
            "Maximum Possible Loss",
            "żadnemu z powyższych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 13
    },
    {
        "id": 214,
        "question": "Zgodnie z prawem, w którym obowiązkowym ubezpieczeniu OC wysokość minimalnej sumy gwarancyjnej została wyrażona w Euro, tj. w oficjalnej walucie części państw Unii Europejskiej:",
        "answers": [
            "obowiązkowym ubezpieczeniu OC przewoźników lotniczych za szkody spowodowane opóźnieniem w przewozie pasażerów, bagażu lub towarów",
            "obowiązkowym ubezpieczeniu OC przedsiębiorców wykonujących obsługę naziemną za szkody powstałe w związku z prowadzoną przez siebie działalnością lotniczą",
            "obowiązkowym ubezpieczeniu OC zarządcy nieruchomości",
            "obowiązkowym ubezpieczeniu OC przewoźników lotniczych za szkody powstałe w przewozie lotniczym poczty"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 14
    },
    {
        "id": 215,
        "question": "Zgodnie z prawem, sposób ustalania (przeliczania na PLN) kwot minimalnych sum gwarancyjnych wyrażonych w euro, właściwych dla obowiązkowego ubezpieczenia OC organizatorów imprez masowych, na które wstęp jest odpłatny, wynika z przepisów:",
        "answers": [
            "Konstytucji Rzeczypospolitej Polskiej",
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC organizatorów imprez masowych",
            "ustawy Narodowego Banku Polskiego ws. kwot minimalnych sum gwarancyjnych wyrażonych w euro",
            "ustawy o bezpieczeństwie imprez masowych organizowanych na terytorium RP"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 15
    },
    {
        "id": 216,
        "question": "Odpowiedzialność w przypadku kiedy obiekt kosmiczny wyrządzi szkodę na powierzchni ziemi lub statkowi powietrznemu podczas lotu regulowana jest w Konwencji/ach:",
        "answers": [
            "o rejestracji obiektów kosmicznych z 14.01.1975 r.",
            "o przestrzeni kosmicznej z 27.01.1967 r.",
            "o międzynarodowej odpowiedzialności za szkody wyrządzone przez obiekty kosmiczne z 29.03.1972 r.",
            "wszystkich wymienionych odpowiedziach"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 16
    },
    {
        "id": 217,
        "question": "Przedmiotem ubezpieczenia majątkowego może być interes majątkowy:",
        "answers": [
            "każdy, jeżeli da się ocenić w pieniądzu",
            "każdy, jeżeli nie jest sprzeczny z prawem",
            "każdy, który nie jest sprzeczny z prawem i daje się ocenić w pieniądzu",
            "każdy, jeżeli przysługuje ubezpieczającemu, a nie stanowi popełnienia czynu zabronionego"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 17
    },
    {
        "id": 218,
        "question": "Zgodnie z typowym brzmieniem ogólnych warunków ubezpieczeń, szkody wyrządzone umyślnie przez ubezpieczonego są:",
        "answers": [
            "objęte ochroną ubezpieczeniową w pełnym zakresie",
            "wyłączone z odpowiedzialności ubezpieczyciela",
            "pokrywane pod warunkiem zapłaty dodatkowej składki",
            "pokrywane do wysokości 50% sumy ubezpieczenia"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 18
    },
    {
        "id": 219,
        "question": "Wartość odtworzeniowa (nowa) mienia w ubezpieczeniu od ognia i innych zdarzeń losowych oznacza:",
        "answers": [
            "koszt odbudowy lub odtworzenia mienia jako nowego, bez uwzględnienia zużycia",
            "aktualną wartość rynkową mienia z uwzględnieniem amortyzacji",
            "wartość księgową mienia wynikającą z ewidencji przedsiębiorstwa",
            "wartość zadeklarowaną przez ubezpieczającego niezależnie od faktycznej ceny"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 19
    },
    {
        "id": 220,
        "question": "Ubezpieczenie mienia na pierwsze ryzyko charakteryzuje się tym, że:",
        "answers": [
            "odszkodowanie może przekroczyć ustaloną sumę ubezpieczenia",
            "sumę ubezpieczenia ustala się zawsze w wysokości pełnej wartości mienia",
            "składka jest stała i nie zależy od deklarowanej sumy ubezpieczenia",
            "przy wypłacie odszkodowania nie stosuje się zasady proporcjonalnej redukcji sumy (niedoubezpieczenia)"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 20
    },
    {
        "id": 221,
        "question": "Polisa budowlano-montażowa (CAR/EAR) zawierana dla inwestycji obejmuje ochroną jako ubezpieczonych:",
        "answers": [
            "wszystkie strony zaangażowane w projekt – inwestora, generalnego wykonawcę oraz podwykonawców – o ile zostali oni wymienieni w polisie",
            "wyłącznie generalnego wykonawcę, który wykupił polisę na swoje prace",
            "tylko inwestora (właściciela budowanego obiektu), ponieważ to on jest zainteresowany ochroną mienia",
            "generalnego wykonawcę oraz każdego z jego pracowników osobno w ramach jednej polisy"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 21
    },
    {
        "id": 222,
        "question": "Pełnomocnictwo może zgodnie z Kodeksem cywilnym być w każdym czasie odwołane:",
        "answers": [
            "bez ograniczeń",
            "bez ograniczeń, jeżeli mocodawcą jest konsument",
            "chyba że mocodawca zrzekł się odwołania pełnomocnictwa z przyczyn uzasadnionych treścią stosunku prawnego będącego podstawą pełnomocnictwa",
            "chyba że byłoby to wbrew oczywistemu interesowi mocodawcy"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 22
    },
    {
        "id": 223,
        "question": "Odporność cyfrowa w obszarze usług ubezpieczeniowych jest częścią ryzyka:",
        "answers": [
            "operacyjnego",
            "aktuarialnego",
            "ubezpieczeniowego",
            "finansowego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 23
    },
    {
        "id": 224,
        "question": "Suma gwarancyjna w umowie obowiązkowego ubezpieczenia OC rolników:",
        "answers": [
            "może być określona w dowolnej wysokości przez strony umowy tego ubezpieczenia",
            "nie może być niższa niż minimalna suma gwarancyjna w tym ubezpieczeniu określona przepisami",
            "może być niższa niż minimalna suma gwarancyjna w tym ubezpieczeniu określona przepisami prawa",
            "jest równa maksymalnej sumie gwarancyjnej w tym ubezpieczeniu określonej przepisami prawa"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 24
    },
    {
        "id": 225,
        "question": "Ubezpieczony na 1,5 mln zł (suma ubezp.) w wartości odtworzeniowej transformator uległ całkowitemu spaleniu. Faktura za nowy identyczny transformator wynosi 3,0 mln zł. Ubezpieczyciel na typowej polisie ubezpieczenia mienia od ognia wypłaci:",
        "answers": [
            "3,0 mln zł",
            "0,75 mln zł",
            "1,5 mln zł",
            "2,25 mln zł"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 25
    },
    {
        "id": 226,
        "question": "W polisie budowlano-montażowej (CAR/EAR) okres konserwacji (gwarancyjny) jest objęty ochroną w ten sposób, że:",
        "answers": [
            "obejmuje w okresie konserwacji pełen zakres szkód jak w trakcie budowy, niezależnie od ich przyczyny i momentu powstania",
            "nie obejmuje żadnych szkód powstałych po zakończeniu zasadniczych prac – okres konserwacji pozostaje całkowicie poza ochroną",
            "obejmuje wyłącznie szkody wynikłe z przyczyn zaistniałych w trakcie budowy (ujawnione dopiero po odbiorze) lub powstałe podczas prac naprawczych prowadzonych przez wykonawcę w tym okresie",
            "dotyczy jedynie odpowiedzialności cywilnej wykonawcy w okresie gwarancyjnym, a nie szkód materialnych w obiekcie"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 26
    },
    {
        "id": 227,
        "question": "W związku z proponowanym zawarciem umowy ubezpieczenia broker ubezpieczeniowy ma obowiązek poinformować klienta o wysokości:",
        "answers": [
            "wynagrodzenia jakiegokolwiek rodzaju",
            "honorarium płaconego bezpośrednio przez klienta, a w przypadku gdy jest to niemożliwe - o metodzie jego wyliczenia",
            "otrzymywanej prowizji uwzględnionej w kwocie składki ubezpieczeniowej",
            "otrzymywanej prowizji uwzględnionej w kwocie składki ubezpieczeniowej jeżeli jest większa niż 10% składki"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 27
    },
    {
        "id": 228,
        "question": "Standardowa polisa ubezpieczenia od kradzieży z włamaniem i rabunku nie obejmuje:",
        "answers": [
            "kradzieży, przy której sprawca dostał się do ubezpieczonego pomieszczenia po uprzednim pokonaniu zabezpieczeń z użyciem siły",
            "rabunku, czyli kradzieży dokonanej z użyciem przemocy lub groźby jej użycia wobec osoby",
            "kradzieży, przy której brak jest widocznych śladów włamania do ubezpieczonego pomieszczenia",
            "usiłowania kradzieży z włamaniem, w wyniku którego doszło do uszkodzenia zabezpieczeń pomieszczenia"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 28
    },
    {
        "id": 229,
        "question": "Zgodnie z obowiązującym rozporządzeniem Ministra Finansów, obowiązkowe ubezpieczenie OC podmiotu wykonującego działalność leczniczą obejmuje szkody:",
        "answers": [
            "będące następstwem zabiegów chirurgii plastycznej lub zabiegów kosmetycznych, jeśli są udzielane w przypadkach będących następstwem wady wrodzonej, urazu, choroby lub następstwem jej leczenia",
            "polegające na utracie rzeczy",
            "wyrządzone przez podmiot wykonujący działalność leczniczą w okresie zawieszenia prawa do prowadzenia działalności leczniczej",
            "polegające na zniszczeniu rzeczy"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 29
    },
    {
        "id": 230,
        "question": "Na podstawie ustawy o dystrybucji ubezpieczeń, produktu ubezpieczeniowego nie mogą tworzyć:",
        "answers": [
            "wszyscy pośrednicy ubezpieczeniowi",
            "brokerzy ubezpieczeniowi",
            "agenci ubezpieczeniowi oraz agenci oferujący ubezpieczenia uzupełniające",
            "wyłącznie agenci oferujący ubezpieczenia uzupełniające"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 30
    },
    {
        "id": 231,
        "question": "Zakład ubezpieczeń inwestuje składkę ubezpieczeniową na ryzyko ubezpieczającego:",
        "answers": [
            "nie ma takiej możliwości - zakład ubezpieczeń inwestuje składkę ubezpieczeniową zawsze na swoje ryzyko",
            "we wszystkich ubezpieczeniach na życie (dział I)",
            "w pozostałych ubezpieczeniach osobowych oraz ubezpieczeniach majątkowych (dział II)",
            "w ubezpieczeniach na życie jeżeli są związane z ubezpieczeniowym funduszem kapitałowym, a także w ubezpieczeniach na życie, w których świadczenie zakładu ubezpieczeń jest ustalane w oparciu o określone indeksy lub inne wartości bazowe (dział I gr.3)"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 31
    },
    {
        "id": 232,
        "question": "Standardowa umowa ubezpieczenia budowy/montażu (CAR/EAR) wyłącza z ochrony m.in. szkody powstałe na skutek:",
        "answers": [
            "kradzieży materiałów budowlanych z terenu budowy",
            "nieumyślnego błędu popełnionego przez pracownika podczas wykonywania prac budowlanych",
            "działania żywiołów takich jak powódź, huragan czy trzęsienie ziemi",
            "wadliwego projektu lub błędów projektowych dotyczących ubezpieczonego obiektu"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 32
    },
    {
        "id": 233,
        "question": "Które z poniższych zdarzeń nie jest standardowo objęte ubezpieczeniem mienia od ognia i innych zdarzeń losowych?",
        "answers": [
            "Pożar powstały na skutek wadliwej instalacji elektrycznej",
            "Uderzenie pioruna w budynek i powstałe z tego szkody",
            "Upadek śmigłowca na ubezpieczony budynek",
            "Szkody spowodowane aktami terroru"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 33
    },
    {
        "id": 234,
        "question": "Regulacje rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej pośrednika kredytu hipotecznego wyznaczają sumę gwarancyjną tego ubezpieczenia na poziomie:",
        "answers": [
            "maksymalnym wyrażonym w SDR-ach",
            "minimalnym wyrażonym w euro",
            "minimalnym wyrażonym w USD",
            "maksymalnym wyrażonym w CHF"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 34
    },
    {
        "id": 235,
        "question": "Wartość wykupu w ubezpieczeniu na życie to:",
        "answers": [
            "świadczenie wypłacane przez ubezpieczyciela w razie rozwiązania umowy ubezpieczenia przed upływem określonego okresu",
            "zwrot składki za niewykorzystany okres ubezpieczenia",
            "świadczenie wypłacane przez ubezpieczyciela w zamian za zwolnienie go z obowiązku świadczenia ochrony ubezpieczeniowej",
            "prowizja płacona przez osobę przejmującą ubezpieczenie w ramach tzw. umowy wiatykalne"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 35
    },
    {
        "id": 236,
        "question": "Według danych KNF, na koniec roku 2024, największy spadek, w porównaniu do roku poprzedniego, składki przypisanej brutto w dziale I ubezpieczeń odnotował zakład ubezpieczeń:",
        "answers": [
            "TU na ŻYCIE EUROPA S.A.",
            "OPEN LIFE TU ŻYCIE S.A.",
            "CA ŻYCIE TU S.A.",
            "PKO ŻYCIE TU S.A."
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 36
    },
    {
        "id": 237,
        "question": "W obowiązkowym ubezpieczeniu OC rolników zakład ubezpieczeń za szkody spowodowane przeniesieniem chorób zakaźnych niepochodzących od zwierząt:",
        "answers": [
            "odpowiada w pełnej wysokości z mocy prawa",
            "odpowiada w wysokości do 50% wartości szkody",
            "nie odpowiada",
            "odpowiada z zastosowaniem franszyzy redukcyjnej"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 37
    },
    {
        "id": 238,
        "question": "Przed zawarciem umowy ubezpieczenia dystrybutor ubezpieczeń określa, na podstawie uzyskanych od klienta informacji, jego wymagania i potrzeby oraz podaje w zrozumiałej formie obiektywne informacje o produkcie ubezpieczeniowym, w celu:",
        "answers": [
            "umożliwienia klientowi podjęcia świadomej decyzji",
            "udokumentowania do celów nadzorczych procesu sprzedaży ubezpieczenia",
            "zapobieżenia naruszaniu interesów ubezpieczających, ubezpieczonych lub uprawnionych z umów ubezpieczenia",
            "zagwarantowania uczciwego procesu sprzedaży ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 38
    },
    {
        "id": 239,
        "question": "Przedsiębiorstwo ubezpieczyło budynek na 1 mln zł w wartości odtworzeniowej, podczas gdy jego faktyczna wartość odtworzeniowa wynosi 2 mln zł. W razie szkody częściowej na 200 000 zł (ubezpieczenie na sumy stałe), ubezpieczyciel wypłaciі:",
        "answers": [
            "200 000 zł",
            "100 000 zł",
            "150 000 zł",
            "50 000 zł"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 39
    },
    {
        "id": 240,
        "question": "Wadą oświadczenia woli nie jest dotknięte oświadczenie złożone:",
        "answers": [
            "dla pozoru",
            "pod wpływem groźby",
            "pod wpływem podstępu",
            "pod wpływem przymusu ekonomicznego"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 40
    },
    {
        "id": 241,
        "question": "Regres ubezpieczeniowy (roszczenie zwrotne ubezpieczyciela) oznacza, że po wypłacie odszkodowania:",
        "answers": [
            "odpowiedzialność za pokrycie szkody przechodzi na UFG, który refinansuje ubezpieczycielowi wypłaconą kwotę",
            "ubezpieczyciel zwraca się do ubezpieczonego o zwrot wypłaconego odszkodowania, np. w formie rat, celem uzupełnienia sumy ubezpieczenia",
            "ubezpieczony ma prawo dochodzić od sprawcy szkody dodatkowego odszkodowania, nawet jeśli otrzymał już wypłatę z polisy",
            "ubezpieczyciel może dochodzić od sprawcy szkody (osoby trzeciej odpowiedzialnej za szkodę) zwrotu wypłaconej poszkodowanemu kwoty, wstępując w prawa poszkodowanego"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 41
    },
    {
        "id": 242,
        "question": "Jeżeli ten sam budynek został ubezpieczony od pożaru na pełną wartość w dwóch różnych towarzystwach ubezpieczeń, to w razie powstania szkody:",
        "answers": [
            "każdy z ubezpieczycieli wypłaci część odszkodowania proporcjonalnie do swojego udziału w łącznej sumie ubezpieczenia",
            "polisa zawarta później automatycznie unieważnia wcześniejszą umowę ubezpieczenia",
            "ubezpieczony może uzyskać łącznie odszkodowanie przewyższające wartość poniesionej szkody",
            "odszkodowanie wypłaci tylko ten ubezpieczyciel, u którego szkodę zgłosi ubezpieczony"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 42
    },
    {
        "id": 243,
        "question": "Bieg przedawnienia roszczenia o świadczenie przeciwko ubezpieczycielowi przerywa:",
        "answers": [
            "zgłoszenie zdarzenia objętego ubezpieczeniem, nawet bez zgłoszenia roszczenia",
            "zgłoszenie zdarzenia objętego ubezpieczeniem, jeżeli wraz z nim zgłoszono roszczenie",
            "zgłoszenie reklamacji",
            "przedsądowe wezwanie do zapłaty, jeżeli zostało sporządzone przez adwokata lub radcę prawnego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 43
    },
    {
        "id": 244,
        "question": "Dystrybucja ubezpieczeń polega na:",
        "answers": [
            "organizowaniu i nadzorowaniu czynności agencyjnych u agenta ubezpieczeniowego lub agenta oferującego ubezpieczenia uzupełniające oraz czynności brokerskich w zakresie ubezpieczeń u brokera ubezpieczeniowego",
            "przekazywaniu potencjalnym klientom informacji na temat produktów ubezpieczeniowych, w przypadku gdy przedsiębiorca nie podejmuje dodatkowych działań mających pomóc w zawarciu umowy ubezpieczenia",
            "wycenie szkód i sporządzaniu ekspertyz związanych z tymi szkodami",
            "obsłudze roszczeń kierowanych do zakładu ubezpieczeń"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 44
    },
    {
        "id": 245,
        "question": "Posiadacz mechanicznego środka komunikacji poruszanego za pomocą sił przyrody odpowiada za szkody wyrządzone tym, których przewozi z grzeczności:",
        "answers": [
            "na zasadzie ryzyka",
            "na zasadzie słuszności",
            "na zasadach współżycia społecznego",
            "na zasadach ogólnych"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 45
    },
    {
        "id": 246,
        "question": "Posiadacz motoroweru niebędącego pojazdem historycznym, zarejestrowanego na stałe, może zawrzeć umowę ubezpieczenia OC posiadaczy pojazdów mechanicznych na okres:",
        "answers": [
            "7 dni",
            "30 dni",
            "180 dni",
            "żadna z powyższych odpowiedzi nie jest prawidłowa; umowa musi być zawarta na okres 12 miesięcy"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 46
    },
    {
        "id": 247,
        "question": "Aktualnie obowiązujące zasady podejmowania i prowadzenia działalności w zakresie dystrybucji produktów ubezpieczeń i reasekuracji w Unii ustanawia:",
        "answers": [
            "dyrektywa 2002/92/WE w sprawie pośrednictwa ubezpieczeniowego",
            "dyrektywa 2005/29/WE dotycząca nieuczciwych praktyk handlowych stosowanych przez przedsiębiorstwa wobec konsumentów na rynku wewnętrznym",
            "dyrektywa 2009/138/WE w sprawie podejmowania i prowadzenia działalności ubezpieczeniowej i reasekuracyjnej (Wypłacalność II)",
            "dyrektywa (UE) 2016/97 w sprawie dystrybucji ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 47
    },
    {
        "id": 248,
        "question": "Wymagana regulacjami właściwego rozporządzenia Ministra Finansów minimalna suma gwarancyjna obowiązkowego ubezpieczenia odpowiedzialności cywilnej pośrednika w obrocie nieruchomościami dotyczy:",
        "answers": [
            "okresu ubezpieczenia nie dłuższego niż 12 miesięcy",
            "dowolnego okresu ubezpieczenia",
            "okresu ubezpieczenia nie dłuższego niż 24 miesiące",
            "dowolnego okresu ubezpieczenia ale nie dłuższego niż 6 miesięcy"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 48
    },
    {
        "id": 249,
        "question": "Standardowa polisa montażowa (EAR) obejmuje szkody powstałe podczas testów i rozruchu instalowanego urządzenia:",
        "answers": [
            "bez żadnych ograniczeń czasowych – cały okres testów jest objęty, niezależnie od jego długości",
            "przez ograniczony okres (np. do 4 tygodni testów od zakończenia montażu), z możliwością wydłużenia za dodatkową składkę",
            "dopiero po opłaceniu dodatkowej składki – standardowo testy nie są ubezpieczone",
            "tylko w zakresie tzw. „prób na zimno” (bez medium i obciążenia), a próby z obciążeniem („na gorąco”) są wyłączone"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 49
    },
    {
        "id": 250,
        "question": "Ubezpieczenie maszyn od awarii (MB – Machinery Breakdown) pokrywa przede wszystkim szkody powstałe na skutek:",
        "answers": [
            "nagłej i niespodziewanej awarii wewnętrznej urządzenia podczas jego prawidłowej eksploatacji",
            "pożaru lub uderzenia pioruna powodującego zniszczenie maszyny",
            "powodzi lub zalania, które uszkodziły maszynę od zewnątrz",
            "celowego uszkodzenia maszyny dokonanego przez operatora lub osoby trzecie"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 50
    },
    {
        "id": 251,
        "question": "Broker ubezpieczeniowy (reasekuracyjny) może wykonywać czynności brokerskie wyłącznie przez osoby fizyczne, które między innymi spełniają wymóg:",
        "answers": [
            "dawania rękojmi należytego wykonywania działalności brokerskiej",
            "posiadania co najmniej trzyletniego doświadczenia zawodowego w zakresie ubezpieczeń",
            "zawarcia umowy ubezpieczenia odpowiedzialności cywilnej z tytułu wykonywania działalności brokerskiej",
            "posiadania co najmniej ograniczonej zdolności do czynności prawnych"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 51
    },
    {
        "id": 252,
        "question": "Ubezpieczenie od kradzieży z włamaniem i rabunku może obejmować także rabunek gotówki w czasie transportu z siedziby firmy do banku, pod warunkiem że:",
        "answers": [
            "do transportu używany jest specjalnie oznakowany pojazd typu bankowóz niezależnie od przewożonej kwoty",
            "gotówka przewożona jest wyłącznie w godzinach otwarcia banku i po ustalonej trasie",
            "transport gotówki odbywa się zgodnie z wymogami OWU (np. powyżej określonej kwoty konwoju dokonują co najmniej dwie upoważnione osoby)",
            "planowany przewóz gotówki został każdorazowo zgłoszony na Policję przed jego realizacją"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 52
    },
    {
        "id": 253,
        "question": "Czynności w zakresie dystrybucji ubezpieczeń w imieniu lub na rzecz zakładu ubezpieczeń wykonuje:",
        "answers": [
            "wyłącznie broker ubezpieczeniowy",
            "wyłącznie agent ubezpieczeniowy oraz agent oferujący ubezpieczenia uzupełniające",
            "każdy dystrybutor ubezpieczeń",
            "każdy pośrednik ubezpieczeniowy"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 53
    },
    {
        "id": 254,
        "question": "Określony w ustawie o dystrybucji ubezpieczeń obowiązek postępowania zgodnie z najlepiej pojętym interesem klientów dotyczy:",
        "answers": [
            "wyłącznie brokera ubezpieczeniowego",
            "wyłącznie agenta ubezpieczeniowego i agenta oferującego ubezpieczenia uzupełniające",
            "wyłącznie pośredników ubezpieczeniowych",
            "każdego dystrybutora ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 54
    },
    {
        "id": 255,
        "question": "Na pokrycie bieżących i przyszłych zobowiązań zakładu ubezpieczeń, jakie mogą wyniknąć z zawartych umów ubezpieczenia, umów gwarancji ubezpieczeniowych lub umów reasekuracji, są przeznaczane środki z:",
        "answers": [
            "rezerw techniczno-ubezpieczeniowych",
            "kapitałowego wymogu wypłacalności",
            "minimalnego wymogu kapitałowego",
            "funduszu prewencyjnego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 55
    },
    {
        "id": 256,
        "question": "Standardowe ubezpieczenie maszyn od awarii (MB – Machinery Breakdown) wyłącza odpowiedzialność za:",
        "answers": [
            "awarię wynikającą z ukrytej wady materiałowej elementu maszyny ujawnionej podczas eksploatacji",
            "zniszczenie maszyny spowodowane błędem w obsłudze lub nieumyślną pomyłką operatora",
            "nagłe uszkodzenie maszyny spowodowane działaniem siły odśrodkowej podczas pracy urządzenia",
            "uszkodzenia wynikłe z normalnego zużycia eksploatacyjnego, korozji lub powolnej degradacji części maszyny"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 56
    },
    {
        "id": 257,
        "question": "Ubezpieczony ma obowiązek zapobiegać szkodzie i minimalizować jej skutki przy użyciu dostępnych środków. Jeżeli rażąco zaniedba ten obowiązek i doprowadzi to do zwiększenia rozmiarów szkody:",
        "answers": [
            "umowa ubezpieczenia zostaje rozwiązana z winy ubezpieczonego z dniem zaistnienia takiej szkody",
            "ubezpieczony automatycznie traci prawo do jakiegokolwiek odszkodowania z tej polisy",
            "ubezpieczyciel nie ma prawa miarkowania odszkodowania, niezależnie od zaniedbań ubezpieczonego, jeśli wcześniej audytował ryzyko",
            "ubezpieczyciel może odpowiednio zmniejszyć wysokość odszkodowania za tę szkodę w zakresie związanym z zaniedbaniem"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 57
    },
    {
        "id": 258,
        "question": "Niezapłacenie przez ubezpieczającego raty składki w obowiązkowym ubezpieczeniu OC rolników:",
        "answers": [
            "nie powoduje ustania odpowiedzialności ubezpieczyciela",
            "powoduje, z mocy prawa, ustanie odpowiedzialności ubezpieczyciela",
            "powoduje ustanie odpowiedzialności ubezpieczyciela, jeżeli umowa ubezpieczenia to przewiduje",
            "powoduje ustanie odpowiedzialności ubezpieczyciela po wydaniu decyzji przez Komisję Nadzoru Finansowego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 58
    },
    {
        "id": 259,
        "question": "Zgodnie z ogólnym rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 o ochronie danych (tzw. RODO), wizerunek twarzy:",
        "answers": [
            "nie jest daną osobową",
            "jest,zwykłą\" daną osobową nienależącą do szczególnych kategorii danych osobowych",
            "należy do danych biometrycznych, których przetwarzanie, co do zasady, jest zabronione",
            "należy do danych genetycznych, które można przetwarzać bez zgody osoby, której dane dotyczą"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 59
    },
    {
        "id": 260,
        "question": "Na reklamację klienta będącego osobą prawną lub spółką nieposiadającą osobowości prawnej zakład ubezpieczeń:",
        "answers": [
            "ma obowiązek udzielenia odpowiedzi w terminie 10 dni roboczych od dnia jej otrzymania",
            "ma obowiązek udzielenia odpowiedzi w terminie 30 dni od dnia jej otrzymania",
            "nie ma obowiązku udzielenia odpowiedzi",
            "nie ma obowiązku udzielenia odpowiedzi, chyba że co innego wynika z dobrych praktyk rynkowych, do których zakład ubezpieczeń przystąpił"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 60
    },
    {
        "id": 261,
        "question": "Ubezpieczenie kredytu kupieckiego obejmuje:",
        "answers": [
            "wyłącznie straty spowodowane niewypłacalnością dłużników",
            "wyłącznie straty spowodowane niewypłacalnością dłużników, z wyłączeniem kar i odsetek",
            "wyłącznie straty spowodowane niewypłacalnością dłużników, z wyłączeniem kar i odsetek oraz innych kosztów np. transportu, etc.",
            "straty spowodowane niewypłacalnością dłużników, z włączeniem kar i odsetek oraz innych kosztów np. transportu, etc."
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 61
    },
    {
        "id": 262,
        "question": "Regulacje wyznaczające katalog szkód wyłączających odpowiedzialność zakładu ubezpieczeń w obowiązkowym ubezpieczeniu OC podmiotu upoważnionego do przeprowadzania przeglądów technicznych jachtów komercyjnych zostały zawarte w przepisach:",
        "answers": [
            "ustawy o działalności ubezpieczeniowej i Ubezpieczeniowym Funduszu Gwarancyjnym",
            "zarządzenia Prezesa Rady Ministrów w sprawie szkód wyłączonych z obowiązkowego ubezpieczenia OC podmiotu upoważnionego do przeprowadzania przeglądów technicznych jachtów komercyjnych",
            "ustawy o bezpieczeństwie morskim oraz jachtach komercyjnych",
            "rozporządzenia Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej podmiotu upoważnionego do przeprowadzania przeglądów technicznych jachtów komercyjnych"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 62
    },
    {
        "id": 263,
        "question": "Źródłem dochodów Ubezpieczeniowego Funduszu Gwarancyjnego nie są:",
        "answers": [
            "wpływy z roszczeń regresowych",
            "coroczne dotacje celowe określone w ustawie budżetowej na dany rok",
            "wpływy z tytułu opłat za niespełnienie obowiązku zawarcia umowy obowiązkowego ubezpieczenia OC rolników",
            "wpływy z tytułu opłat za niespełnienie obowiązku zawarcia umowy obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 63
    },
    {
        "id": 264,
        "question": "Jeśli część robót zostanie ukończona i odebrana przez inwestora przed zakończeniem całej budowy (odbiór częściowy), to dla tej ukończonej części obiektu:",
        "answers": [
            "ochrona ubezpieczeniowa jest kontynuowana automatycznie na tych samych zasadach aż do wygaśnięcia polisy dla całej budowy",
            "ochrona ubezpieczeniowa z polisy CAR w zakresie szkód materialnych zasadniczo wygasa z momentem odbioru, o ile polisa nie została rozszerzona o ubezpieczenie obiektów ukończonych",
            "polisa CAR zostaje automatycznie przekształcona w ubezpieczenie mienia od ognia i innych zdarzeń losowych dla oddanej części obiektu",
            "od tego momentu odpowiedzialność za szkody w tej części przejmuje wyłącznie polisa OC wykonawcy"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 64
    },
    {
        "id": 265,
        "question": "Obowiązujące rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej podmiotu wykonującego działalność leczniczą nie zawiera regulacji dotyczących:",
        "answers": [
            "sposobu ustalania (przeliczania na PLN) kwot minimalnych sum gwarancyjnych wyrażonych w euro, właściwych dla tego ubezpieczenia",
            "właściwości miejscowej sądu dla rozstrzygnięcia sprawy",
            "katalogu szkód wyłączonych z zakresu przedmiotowego ubezpieczenia",
            "wysokości minimalnych sum gwarancyjnych w tym ubezpieczeniu"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 65
    },
    {
        "id": 266,
        "question": "Dyrekcja Ubezpieczeń (1843–1866):",
        "answers": [
            "żadna z pozostałych odpowiedzi nie jest prawidłowa",
            "prowadziła działalność ubezpieczeniową",
            "była instytucją o charakterze prawodawczym w odniesieniu do zakładów ubezpieczeń",
            "była ówczesnym organem nadzoru w stosunku do zakładów ubezpieczeń"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 66
    },
    {
        "id": 267,
        "question": "Według danych KNF, na koniec roku 2024, liczba krajowych zakładów prowadzących działalność w zakresie ubezpieczeń na życie wynosiła:",
        "answers": [
            "13",
            "17",
            "20",
            "24"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 67
    },
    {
        "id": 268,
        "question": "Według ustawy o dystrybucji ubezpieczeń, pośrednikiem ubezpieczeniowym nie jest:",
        "answers": [
            "agent oferujący ubezpieczenia uzupełniające",
            "broker ubezpieczeniowy",
            "broker reasekuracyjny",
            "zakład ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 68
    },
    {
        "id": 269,
        "question": "W przypadku umowy ubezpieczenia na życie ubezpieczający:",
        "answers": [
            "może odpowiedzieć na pytanie z ankiety medycznej niezgodnie z rzeczywistym stanem rzeczy, jeżeli poinformował o tym ubezpieczyciela",
            "może odpowiedzieć na pytanie z ankiety medycznej niezgodnie z rzeczywistym stanem rzeczy, jeżeli wymaga tego ochrona intymności",
            "może odpowiedzieć na pytanie z ankiety medycznej niezgodnie z rzeczywistym stanem rzeczy, jeżeli nie ma to wpływu na ocenę ryzyka",
            "może nie odpowiedzieć na dane pytanie w ramach ankiety medycznej, a ubezpieczyciel decyduje o ocenie takiej sytuacji"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 69
    },
    {
        "id": 270,
        "question": "Zdolność prawną człowiek posiada od chwili:",
        "answers": [
            "urodzenia",
            "ukończenia 10 lat",
            "ukończenia 13 lat",
            "ukończenia 18 lat"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 70
    },
    {
        "id": 271,
        "question": "Wysokość opłaty za brak spełnienia obowiązku zawarcia umowy ubezpieczenia budynków rolniczych od ognia i innych zdarzeń losowych jest uzależniona od:",
        "answers": [
            "wysokości rocznej inflacji",
            "średniej wartości budynku rolniczego w danym województwie",
            "minimalnego wynagrodzenia za pracę",
            "wartości PKB"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 71
    },
    {
        "id": 272,
        "question": "W umowie ubezpieczenia na życie zakład ubezpieczeń ma obowiązek zawrzeć:",
        "answers": [
            "wskazanie przepisów regulujących podatek od składek",
            "wskazanie przepisów regulujących opodatkowanie świadczeń zakładu ubezpieczeń",
            "wskazanie przepisów regulujących opodatkowanie ubezpieczeniowych funduszy kapitałowych",
            "wskazanie przepisów regulujących opodatkowanie dochodu polegajacego na finansowaniu składki przez ubezpieczającego w ubezpieczeniu grupowym"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 72
    },
    {
        "id": 273,
        "question": "Tzw. zasada proporcji przy niedoubezpieczeniu (ubezpieczeniu mienia na zbyt niską sumę) oznacza, że:",
        "answers": [
            "odszkodowanie za szkodę częściową zostanie zmniejszone proporcjonalnie - w takim stosunku, w jakim zadeklarowana suma ubezpieczenia pozostaje do faktycznej wartości mienia",
            "ubezpieczyciel wypłaci pełne odszkodowanie aż do wysokości sumy ubezpieczenia, niezaležnie od tego, że mienie było ubezpieczone na niższą kwotę niż jego wartość",
            "zasada ta ma zastosowanie jedynie przy szkodach całkowitych, gdy suma ubezpieczenia jest niższa od wartości odtworzeniowej mienia",
            "mechanizm proporcjonalnej redukcji stosuje się wyłącznie w ubezpieczeniach na pierwsze ryzyk"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 73
    },
    {
        "id": 274,
        "question": "„Rabunek” w rozumieniu typowych warunków ubezpieczenia mienia oznacza:",
        "answers": [
            "zabór mienia dokonany z użyciem przemocy fizycznej lub groźby natychmiastowego jej użycia wobec osoby",
            "kradzież polegającą na włamaniu do zamkniętego pomieszczenia",
            "działanie polegające na oszustwie lub wyłudzeniu mienia od ubezpieczonego",
            "działanie polegające na niepostrzeżonym zabraniu mienia bez wiedzy właściciela"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 74
    },
    {
        "id": 275,
        "question": "Zawiadomienia i oświadczenia składane w związku z zawartą umową ubezpieczenia agentowi ubezpieczeniowemu uznaje się za złożone zakładowi ubezpieczeń, w imieniu lub na rzecz którego agent ubezpieczeniowy działa, o ile:",
        "answers": [
            "zostały złożone w dowolnej formie",
            "zakład ubezpieczeń nie wyłączył ani nie ograniczył upoważnienia agenta ubezpieczeniowego do odbierania zawiadomień i oświadczeń",
            "zostały złożone na piśmie lub na innym trwałym nośniku",
            "zostały złożone za zgodą tego zakładu ubezpieczeń"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 75
    },
    {
        "id": 276,
        "question": "Przed zawarciem umowy ubezpieczenia broker ubezpieczeniowy udziela porady w oparciu o rzetelną analizę dostępnych na rynku produktów ubezpieczeniowych:",
        "answers": [
            "wszystkich",
            "w liczbie wystarczającej do opracowania rekomendacji najwłaściwszej umowy, nie mniejszej niż 5 produktów ubezpieczeniowych",
            "w liczbie wystarczającej do opracowania rekomendacji najwłaściwszej umowy",
            "przepisy prawa ani nie określają liczby produktów ubezpieczeniowych ani nie ustanawiają przesłanek wyznaczania tej liczby"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 76
    },
    {
        "id": 277,
        "question": "W obowiązkowym ubezpieczeniu budynków wchodzących w skład gospodarstwa rolnego sumę ubezpieczenia, odrębnie dla każdego budynku rolniczego, ustala:",
        "answers": [
            "ubezpieczający z zakładem ubezpieczeń",
            "wyłącznie ubezpieczający",
            "wyłącznie zakład ubezpieczeń",
            "sołtys gminy, na terenie której budynek jest położony"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 77
    },
    {
        "id": 278,
        "question": "Zgodnie z przepisami prawa Polskie Biuro Ubezpieczycieli Komunikacyjnych roczne sprawozdanie ze swojej działalności przedstawia:",
        "answers": [
            "Marszałkowi Sejmu",
            "Rzecznikowi Finansowemu",
            "Prezesowi Polskiej Izby Ubezpieczeń",
            "ministrowi właściwemu do spraw instytucji finansowych oraz Komisji Nadzoru Finansowego"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 78
    },
    {
        "id": 279,
        "question": "Koasekuracja to:",
        "answers": [
            "reasekuracja ryzyka w innym zakładzie ubezpieczeń",
            "ubezpieczenie i reasekuracja w jednym zakładzie ubezpieczeniowo-reasekuracyjnym",
            "ubezpieczenie kilku jednorodnych ryzyk w jednym zakładzie ubezpieczeń",
            "ubezpieczenie jednego ryzyka w kilku zakładach ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 79
    },
    {
        "id": 280,
        "question": "Polisa kradzieżowa stawia wymogi co do zabezpieczeń. W której sytuacji ubezpieczyciel może odmówić wypłaty odszkodowania za kradzież z włamaniem?",
        "answers": [
            "gdy ubezpieczony zgłosił szkodę z opóźnieniem przekraczającym 24 godziny od momentu jej zauważenia",
            "gdy do włamania doszło w porze nocnej, poza godzinami pracy przedsiębiorstwa",
            "gdy skradzione mienie miało ponad 5 lat i było już zamortyzowane w księgach",
            "gdy w momencie zdarzenia system alarmowy na obiekcie nie był aktywowany, mimo że wymagały tego warunki umowy ubezpieczenia"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 80
    },
    {
        "id": 281,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, zakład ubezpieczeń sprawuje nadzór nad działalnością:",
        "answers": [
            "brokera ubezpieczeniowego i osób wykonujących czynności brokerskie",
            "agenta ubezpieczeniowego i osób wykonujących czynności agencyjne",
            "agenta ubezpieczeniowego i agenta oferującego ubezpieczenia uzupełniające",
            "pośredników ubezpieczeniowych"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 81
    },
    {
        "id": 282,
        "question": "Która z poniższych szkód najprawdopodobniej nie zostanie uznana za nagłe zdarzenie losowe i będzie wyłączona z ochrony ubezpieczeniowej mienia (w ubezpieczeniu od ognia i innych zdarzeń losowych lub all risk)?",
        "answers": [
            "pożar budynku wywołany zwarciem instalacji elektrycznej",
            "uszkodzenie dachu magazynu na skutek silnego huraganu",
            "zniszczenie towarów w magazynie w wyniku powodzi",
            "zalanie pomieszczeń powstałe wskutek długotrwałego, powolnego przeciekania dachu"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 82
    },
    {
        "id": 283,
        "question": "Początki Korporacji Lloyd’s sięgają?",
        "answers": [
            "XVII w.",
            "XVIII w.",
            "XIX w.",
            "XVI w."
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 83
    },
    {
        "id": 284,
        "question": "Ubezpieczenie mienia od wszystkich ryzyk (polisa „all risks”) różni się od polisy od ognia i innych zdarzeń losowych tym, że:",
        "answers": [
            "zawiera węższy zakres ochrony, ponieważ wyłącza większość zdarzeń standardowo objętych w polisie od ognia",
            "obejmuje wszelkie szkody spowodowane nagłym i nieprzewidzianym zdarzeniem, z wyjątkiem tych wyraźnie wyłączonych w umowie",
            "nie wymaga określenia sumy ubezpieczenia – wypłaty są nielimitowane do pełnej wartości szkody",
            "jest przeznaczone wyłącznie dla dużych przedsiębiorstw i nie jest oferowane klientom z sektora MŚP"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 84
    },
    {
        "id": 285,
        "question": "W przypadku szkody całkowitej w ubezpieczeniu mienia, pozostałości (tzw. resztki) uszkodzonego mienia:",
        "answers": [
            "pozostają własnością ubezpieczonego, a ich wartość szacunkowa jest odliczana od należnego odszkodowania",
            "przechodzą automatycznie na własność ubezpieczyciela po wypłacie odszkodowania za szkodę całkowitą",
            "muszą zostać zniszczone lub zutylizowane przez ubezpieczonego przed wypłatą odszkodowania",
            "nie mają wpływu na wysokość ustalanego odszkodowania za szkodę"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 85
    },
    {
        "id": 286,
        "question": "Obowiązujące rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC uznanej organizacji upoważnionej do wykonywania zadań administracji morskiej, zawiera regulacje dotyczące:",
        "answers": [
            "granicznego terminu na wypłatę odszkodowania przez zakład ubezpieczeń",
            "konsekwencji niespełnienia obowiązku zawarcia umowy tego ubezpieczenia",
            "terminu powstania obowiązku ubezpieczenia",
            "wysokości taryf składki ubezpieczeniowej za to ubezpieczenie"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 86
    },
    {
        "id": 287,
        "question": "Podwójne ubezpieczenie występuje, jeżeli ten sam przedmiot ubezpieczenia w tym samym czasie jest ubezpieczony od tego samego ryzyka u dwóch ubezpieczycieli:",
        "answers": [
            "zawsze w każdym takim przypadku",
            "na sumy, które łącznie przewyższają jego wartość ubezpieczeniową",
            "a okresy ubezpieczenia pokrywają się",
            "a ubezpieczyciele należą do różnych grup kapitałowych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 87
    },
    {
        "id": 288,
        "question": "Zakład ubezpieczeń, co najmniej raz w roku, publicznie ujawnia:",
        "answers": [
            "sprawozdanie o wypłacalności i kondycji finansowej",
            "zasady współpracy z pośrednikami ubezpieczeniowymi, w tym sposób ich wynagradzania",
            "sprawozdanie finansowe",
            "informację o wynikach przeprowadzonej własnej oceny ryzyka i wypłacalności (ORSA)"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 88
    },
    {
        "id": 289,
        "question": "W ubezpieczeniu budowlano-montażowym (typu CAR/EAR) w zakresie OC (sekcja II) tzw. odpowiedzialność wzajemna (ang. cross liability):",
        "answers": [
            "nie jest standardowo objęta i wymaga dodatkowego rozszerzenia, aby współubezpieczeni byli traktowani jak osoby trzecie względem siebie",
            "jest automatycznie włączona – każdy podmiot ubezpieczony na polisie jest traktowany jak osoba trzecia wobec pozostałych bez dodatkowych warunków",
            "wymaga zawarcia oddzielnych polis OC dla poszczególnych uczestników procesu budowlanego",
            "nie może być w Polsce oferowana z uwagi na ograniczenia prawne co do umów ubezpieczenia OC"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 89
    },
    {
        "id": 290,
        "question": "Mienie należące do osób trzecich, które znajduje się na terenie firmy (np. maszyny w leasingu lub przyjęte do naprawy) w ramach polisy ubezpieczenia mienia przedsiębiorstwa:",
        "answers": [
            "jest objęte ochroną do 10% sumy ubezpieczenia, nawet jeśli nie zostało wyszczególnione w polisie",
            "nie jest automatycznie objęte ochroną, o ile nie zostało wyraźnie włączone do ubezpieczenia jako mienie powierzone lub użytkowane rzeczy",
            "jest w każdym przypadku wyłączone z ubezpieczenia, ponieważ nie stanowi własności ubezpieczonego",
            "powinno być ubezpieczone wyłącznie przez właściciela tego mienia - polisa przedsiębiorstwa nigdy go nie obejmie"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 90
    },
    {
        "id": 291,
        "question": "Polisa wystawiana przez ubezpieczyciela:",
        "answers": [
            "nie może odbiegać od oferty złożonej przez ubezpieczającego",
            "może odbiegać od oferty złożonej przez ubezpieczającego, ale tylko co do wysokości składki w związku z oceną ryzyka",
            "może odbiegać od oferty złożonej przez ubezpieczającego",
            "może odbiegać od oferty złożonej przez ubezpieczającego, ale nie dotyczy to konsumentów"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 91
    },
    {
        "id": 292,
        "question": "Według danych KNF, na koniec roku 2024, najmniejszy przypis składki brutto w dziale II ubezpieczeń odnotował zakład ubezpieczeń:",
        "answers": [
            "TU ZDROWIE S.A.",
            "KUKE S.A.",
            "TUW-CUPRUM",
            "PARTNER TUiR S.A."
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 92
    },
    {
        "id": 293,
        "question": "Dla celów ustawy o gwarantowanych przez Skarb Państwa ubezpieczeniach eksportowych właściwe Rozporządzenie określiło, iż ryzyko polityczne obejmuje:",
        "answers": [
            "opóźnienie w spełnieniu świadczenia przez dłużnika prywatnego oraz jego poręczyciela albo gwaranta, będącego podmiotem publicznym",
            "opóźnienie w spełnieniu świadczenia przez dłużnika publicznego oraz, o ile występuje, jego poręczyciela albo gwaranta",
            "ogłoszenie powszechnego moratorium płatniczego przez rząd państwa dłużnika albo państwa, w którym jest realizowana inwestycja, lub państwa, które uczestniczy w dokonywaniu płatności w związku z umową",
            "wszystkie trzy określenia są prawidłowe"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 93
    },
    {
        "id": 294,
        "question": "Zgodnie z Kodeksem cywilnym w razie sprzeczności treści umowy z wzorcem umowy:",
        "answers": [
            "strony są związane umową",
            "wiążą postanowienia bardziej korzystne dla konsumenta",
            "umowa jest nieważna",
            "kontrahent będący przedsiębiorcą ma obowiązek zwrócić na to uwagę konsumentowi i uzyskać jego potwierdzenie"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 94
    },
    {
        "id": 295,
        "question": "W przypadku sprzedaży pojazdu mechanicznego jego dotychczasowy posiadacz jest obowiązany do powiadomienia o tym fakcie:",
        "answers": [
            "zakładu ubezpieczeń",
            "Polską Izbę Ubezpieczeń",
            "Ministra Finansów",
            "Komisję Nadzoru Finansowego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 95
    },
    {
        "id": 296,
        "question": "Siedzibą Polskiego Biura Ubezpieczycieli Komunikacyjnych jest:",
        "answers": [
            "Warszawa",
            "Radom",
            "Szczecin",
            "Toruń"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 96
    },
    {
        "id": 297,
        "question": "Za szkodę powstałą w związku z ruchem pojazdu mechanicznego, która jest objęta obowiązkowym ubezpieczeniem OC posiadaczy pojazdów mechanicznych, uważa się szkodę:",
        "answers": [
            "polegającą na zanieczyszczeniu lub skażeniu środowiska",
            "polegającą na utracie biżuterii",
            "polegającą na utracie papierów wartościowych",
            "powstałą podczas i w związku z wsiadaniem do tego pojazdu lub wysiadaniem z niego"
        ],
        "correct": 3,
        "comment": "LIPIEC 2025",
        "sourceNumber": 97
    },
    {
        "id": 298,
        "question": "Warunkiem podjęcia działalności brokerskiej w zakresie ubezpieczeń na terytorium RP przez podmiot mający siedzibę lub miejsce zamieszkania w innym niż RP państwie członkowskim UE i wpisany do odpowiedniego rejestru pośredników w tym państwie, jest:",
        "answers": [
            "uzyskanie zezwolenia Komisji Nadzoru Finansowego",
            "uzyskanie zezwolenia właściwego organu państwa członkowskiego UE na wykonywanie działalności brokerskiej w zakresie ubezpieczeń na terytorium RP",
            "otrzymanie przez Komisję Nadzoru Finansowego od właściwego organu państwa członkowskiego UE odpowiednich danych i informacji",
            "nie ma żadnych dodatkowych warunków"
        ],
        "correct": 2,
        "comment": "LIPIEC 2025",
        "sourceNumber": 98
    },
    {
        "id": 299,
        "question": "W umowie ubezpieczenia na życie okres wypowiedzenia, z zachowaniem jakiego ubezpieczajacy może wypowiedzieć umowę:",
        "answers": [
            "określa umowa lub OWU, a w razie braku określenia umowa może być wypowiedziana ze skutkiem natychmiastowym",
            "nie może być dłuższy niż trzy miesiące",
            "nie może być dłuższy niż miesiąc",
            "nie może być krótszy niż dwa tygodnie"
        ],
        "correct": 0,
        "comment": "LIPIEC 2025",
        "sourceNumber": 99
    },
    {
        "id": 300,
        "question": "Zgodnie z ustawą o ubezpieczeniach obowiązkowych, UFG i PBUK ośrodkiem informacji gromadzącym m.in. dane o umowach obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych, jest:",
        "answers": [
            "Polska Izba Ubezpieczeń",
            "Ubezpieczeniowy Fundusz Gwarancyjny",
            "Biuro Rzecznika Finansowego",
            "Komisja Nadzoru Finansowego"
        ],
        "correct": 1,
        "comment": "LIPIEC 2025",
        "sourceNumber": 100
    },
    // ===== WRZESIEŃ 2025 - =====
    {
        "id": 301,
        "question": "Hotel ubezpieczony z klauzulą utraty czynszu, limit 500 000 zł/m-c, z maks. okresem odszkodowawczym 6 m-cy został dotknięty pożarem. Remont, wyłączający obiekt z użycia wynosi 8 m-cy a utracony czynsz 400 000 zł/miesięcznie. Odszkodowanie to...",
        "answers": [
            "2,4 mln zł",
            "3 mln zł",
            "3,2 mln zł",
            "2 mln zł"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 1
    },
    {
        "id": 302,
        "question": "W polisie CAR/EAR mienie istniejące (np. budynki sąsiednie) może być ubezpieczone:",
        "answers": [
            "tylko w ramach sekcji OC jako szkody u osób trzecich",
            "klauzulą automatycznego pokrycia",
            "nie może być objęte polisą CAR/EAR",
            "w ramach sekcji I jako odrębna pozycja z własną sumą ubezpieczenia"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 2
    },
    {
        "id": 303,
        "question": "Za szkodę zgodnie z Kodeksem cywilnym odpowiedzialny jest:",
        "answers": [
            "tylko ten, kto ją bezpośrednio wyrządził",
            "tylko ten, kto ją wyrządził bezpośrednio oraz ten, kto go do wyrządzenia szkody nakłonił",
            "tylko ten, kto ją wyrządził bezpośrednio oraz ten, kto świadomie skorzystał z wyrządzonej szkody",
            "ten, kto ją wyrządził bezpośrednio oraz kto inną osobę do wyrządzenia szkody nakłonił, jak również ten, kto świadomie skorzystał z wyrządzonej szkody"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 3
    },
    {
        "id": 304,
        "question": "W razie zawarcia umowy ubezpieczenia OC rolników w trybie automatyzmu odnowienia się umowy, odpowiedzialność zakładu ubezpieczeń powstaje:",
        "answers": [
            "z dniem zapłaty składki ubezpieczeniowej",
            "z chwilą jej zawarcia",
            "po upływie 14 dni od dnia jej zawarcia",
            "po upływie 3 miesięcy od dnia jej zawarcia"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 4
    },
    {
        "id": 305,
        "question": "Według ustawy o dystrybucji ubezpieczeń, jawność rejestru brokerów w zakresie danych o osobach fizycznych obejmuje:",
        "answers": [
            "imię lub imiona i nazwisko",
            "numer PESEL, numer paszportu, numer dowodu osobistego lub innego dokumentu potwierdzającego tożsamość",
            "miejsce zamieszkania",
            "dane historyczne"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 5
    },
    {
        "id": 306,
        "question": "W obowiązkowym ubezpieczeniu budynków rolniczych zakład ubezpieczeń, przy ustalaniu wysokości szkody, nie uwzględnia stopnia zużycia budynku przy szkodach drobnych, czyli takich, których wartość nie przekracza równowartości w złotych:",
        "answers": [
            "1 euro",
            "100 euro",
            "10 000 euro",
            "20 000 euro"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 6
    },
    {
        "id": 307,
        "question": "Zgodnie z obowiązującymi przepisami, ustalenia spełnienia lub nieistnienia obowiązku ubezpieczenia odpowiedzialności cywilnej przez komornika sądowego można dochodzić:",
        "answers": [
            "jedynie przed Ministrem Finansów",
            "przed Komisją Wspólną ds. Komorników, w skład której wchodzą przedstawiciele Ministerstwa Finansów i Ministerstwa Sprawiedliwości",
            "wyłącznie przed Ubezpieczeniowym Funduszem Gwarancyjnym",
            "przed sądem powszechnym"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 7
    },
    {
        "id": 308,
        "question": "Gdy wartość ubezpieczonego mienia wzrośnie w trakcie trwania umowy ubezpieczenia (np. dzięki nowym inwestycjom w ubezpieczonej lokalizacji) ochronę ubezpieczeniową do adekwatnej wartości sumy ubezpieczenia można zapewnić dzięki:",
        "answers": [
            "klauzuli inflacyjnej",
            "klauzuli 72 godzin",
            "klauzuli miejsca ubezpieczenia",
            "klauzuli automatycznego pokrycia"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 8
    },
    {
        "id": 309,
        "question": "Regres ubezpieczeniowy nie przysługuje ubezpieczycielowi wobec:",
        "answers": [
            "sprawcy szkody będącego osobą trzecią niezwiązaną z ubezpieczonym",
            "pracownika ubezpieczonego, chyba że wyrządził szkodę umyślnie",
            "podwykonawcy odpowiedzialnego za szkodę",
            "kontrahenta ubezpieczonego związanego z nim umową partnerską"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 9
    },
    {
        "id": 310,
        "question": "Budynek produkcyjny ubezpieczony w wartości odtworzeniowej na 5 mln zł. Jego faktyczna wartość odtworzeniowa: 8 mln zł, zużycie techniczne: 20%. Szkoda całkowita w wyniku pożaru. Jakie będzie odszkodowanie?",
        "answers": [
            "4 mln zł",
            "6,4 mln zł",
            "5 mln zł",
            "8 mln z"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 10
    },
    {
        "id": 311,
        "question": "Zgodnie z przepisami prawa, wysokość minimalnej sumy gwarancyjnej w obowiązkowym ubezpieczeniu odpowiedzialności cywilnej podmiotu upoważnionego do przeprowadzania przeglądów technicznych jachtów komercyjnych została wyrażona w:",
        "answers": [
            "USD",
            "SDR, tj. jednostce rozrachunkowej Międzynarodowego Funduszu Walutowego",
            "euro",
            "CHF"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 11
    },
    {
        "id": 312,
        "question": "Do zachowania dokumentowej formy czynności prawnej:",
        "answers": [
            "wystarczy zapisanie treści oświadczenia na nośniku danych",
            "konieczne jest, aby dokument miał cechy trwałego nośnika",
            "konieczne jest, aby dokument miał postać fizyczną",
            "konieczne jest umożliwienie ustalenia osoby składającej oświadczenie"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 12
    },
    {
        "id": 313,
        "question": "Zgodnie z prawem, regulacje dotyczące wysokości minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia odpowiedzialności cywilnej pośrednika kredytu hipotecznego zostały zawarte w przepisach:",
        "answers": [
            "ustawy o działalności ubezpieczeniowej",
            "rozporządzenia Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej pośrednika kredytu hipotecznego",
            "zarządzenia Prezydenta Rzeczypospolitej Polskiej w sprawie sumy gwarancyjnej w kredytach hipotecznych",
            "ustawy o bankach hipotecznych"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 13
    },
    {
        "id": 314,
        "question": "Warunkiem podjęcia działalności brokerskiej w zakresie ubezpieczeń na terytorium RP przez podmiot mający siedzibę lub miejsce zamieszkania w innym niż RP państwie członkowskim UE i wpisany do odpowiedniego rejestru pośredników w tym państwie, jest:",
        "answers": [
            "uzyskanie zezwolenia Komisji Nadzoru Finansowego",
            "otrzymanie przez Komisję Nadzoru Finansowego od właściwego organu państwa członkowskiego UE odpowiednich danych i informacji",
            "uzyskanie zezwolenia właściwego organu państwa członkowskiego UE na wykonywanie działalności brokerskiej w zakresie ubezpieczeń na terytorium RP",
            "osiagnięcie porozumienia Komisji Nadzoru Finansowego i właściwego organu państwa członkowskiego UE"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 14
    },
    {
        "id": 315,
        "question": "Jeśli suma ubezpieczenia w polisie ubezpieczenia mienia od wszystkich ryzyk odpowiada wartości początkowej środka trwałego bez uwzględnienia amortyzacji to mamy do czynienia z:",
        "answers": [
            "ubezpieczeniem na wartość księgową brutto",
            "ubezpieczeniem na I ryzyko",
            "ubezpieczeniem w wartości odtworzeniowej",
            "ubezpieczeniem w wartości rynkowej"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 15
    },
    {
        "id": 316,
        "question": "Zamieszczanie przez zakład ubezpieczeń na swojej stronie internetowej ogólnych warunków ubezpieczenia oraz innych wzorców umów jest:",
        "answers": [
            "obowiązkowe",
            "obowiązkowe wyłącznie dla ubezpieczeń o charakterze inwestycyjnym, o których mowa w dziale I w grupie 3 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "obowiązkowe dla ubezpieczeń na życie, o których mowa w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "fakultatywne"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 16
    },
    {
        "id": 317,
        "question": "Sprzęt elektroniczny 2-letni, wartość nowa 240 000 zł, ubezpieczony w wartości rzeczywistej. Amortyzacja 20% rocznie. Sprzęt dotknięty jest szkodą całkowitą. Jaka powinna być wysokość odszkodowania?",
        "answers": [
            "240 000 zł",
            "192 000 zł",
            "144 000 zł",
            "96 000 zł"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 17
    },
    {
        "id": 318,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, agent ubezpieczeniowy, wykonując dystrybucję ubezpieczeń, postępuje zgodnie z najlepiej pojętym interesem:",
        "answers": [
            "własnym (tj. agenta ubezpieczeniowego)",
            "osobistym",
            "klientów",
            "zakładu ubezpieczeń"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 18
    },
    {
        "id": 319,
        "question": "Kiedy uznajemy szkodę całkowitą w ubezpieczeniu mienia?",
        "answers": [
            "Gdy koszt naprawy przekracza 70% sumy ubezpieczenia",
            "Gdy szkoda powstała wskutek siły wyższej",
            "Gdy uszkodzeniu uległy wszystkie ubezpieczone składniki majątku",
            "Gdy naprawa jest niemożliwa lub ekonomicznie nieuzasadniona (koszt > wartości mienia w dniu szkody)"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 19
    },
    {
        "id": 320,
        "question": "Według danych KNF, na koniec roku 2024, przypis składki brutto w dziale I ubezpieczeń wyniósł w zaokrągleniu:",
        "answers": [
            "19,6 mld PLN",
            "21,6 mld PLN",
            "23,6 mld PLN",
            "żadna z odpowiedzi nie jest poprawna"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 20
    },
    {
        "id": 321,
        "question": "Broker ubezpieczeniowy może:",
        "answers": [
            "wykonywać czynności agencyjne",
            "wykonywać czynności dystrybucyjne zakładu ubezpieczeń",
            "wykonywać czynności dystrybucyjne zakładu reasekuracji",
            "pozostawać w stałym stosunku umownym z zakładem ubezpieczeń w roli ubezpieczającego"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 21
    },
    {
        "id": 322,
        "question": "Łączna wypłata nie może przekroczyć faktycznie powstałej szkody a ubezpieczyciele dzielą odszkodowanie proporcjonalnie do udziałów (sum ubezpieczenia). Taka sytuacja ma miejsce ...",
        "answers": [
            "w każdej umowie reasekuracji proporcjonalnej",
            "w przypadku zbiegu roszczeń z wielu ubezpieczeń NNW z tytułu jednego wypadku",
            "w sytuacji podwójnego ubezpieczenia tego samego mienia u dwóch lub więcej ubezpieczycieli",
            "w przypadku umowy cesji praw do odszkodowania z polisy"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 22
    },
    {
        "id": 323,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, rynek produktów ubezpieczeniowych, które są wprowadzane do obrotu, dystrybuowane lub sprzedawane na terytorium Rzeczypospolitej Polskiej lub z terytorium Rzeczypospolitej Polskiej ma obowiązek monitorować:",
        "answers": [
            "Komisja Nadzoru Finansowego",
            "Rzecznik Finansowy",
            "powiatowy rzecznik konsumentów",
            "Urząd Ochrony Konkurencji i Konsumentów"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 23
    },
    {
        "id": 324,
        "question": "Komisarz awaryjny w ubezpieczeniu OC komunikacyjnym odpowiada za:",
        "answers": [
            "nie ma takiej instytucji w ubezpieczeniach",
            "pomoc poszkodowanemu w przypadkach niewyjaśnionych w warunkach ubezpieczenia",
            "wyjaśnianie niejasności związanych z interpretacją ogólnych warunków ubezpieczeń",
            "m.in. pomoc ubezpieczonemu i likwidację szkód poza granicami kraju"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 24
    },
    {
        "id": 325,
        "question": "Organem towarzystwa ubezpieczeń wzajemnych nie jest:",
        "answers": [
            "zarząd towarzystwa",
            "rada nadzorcza towarzystwa",
            "walne zgromadzenie członków towarzystwa",
            "związek wzajemności członkowskiej"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 25
    },
    {
        "id": 326,
        "question": "Zgodnie z ustawą o ubezpieczeniach obowiązkowych, UFG i PBUK, reprezentant do spraw roszczeń może wykonywać czynności na rzecz:",
        "answers": [
            "wyłącznie jednego zakładu ubezpieczeń",
            "nie więcej niż 2 zakładów ubezpieczeń",
            "nie więcej niż 5 zakładów ubezpieczeń",
            "więcej niż jednego zakładu ubezpieczeń"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 26
    },
    {
        "id": 327,
        "question": "Przepisy o niedozwolonych postanowieniach umownych nie mają zastosowania do postanowień określających główne świadczenia, jeżeli postanowienia te są:",
        "answers": [
            "pozbawione elementu nierównowagi kontraktowej",
            "jednoznaczne",
            "transparentnie przedstawione",
            "wyraźnie zaakceptowane przez konsumenta"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 27
    },
    {
        "id": 328,
        "question": "Zasady gospodarki finansowej Polskiego Biura Ubezpieczycieli Komunikacyjnych (PBUK) określa:",
        "answers": [
            "ustawa o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polskim Biurze Ubezpieczycieli Komunikacyjnych",
            "Porozumienie Wielostronne, regulujące wzajemne stosunki pomiędzy biurami narodowymi",
            "statut PBUK",
            "Konstytucja RP"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 28
    },
    {
        "id": 329,
        "question": "W kontekście ubezpieczenia ryzyk cybernetycznych, pojęcie oprogramowania zaprojektowanego do niszczenia, zakłócania lub uzyskiwania nieautoryzowanego dostępu do systemów/danych nazywa się najczęściej...",
        "answers": [
            "adware",
            "malware",
            "hardware",
            "AI assistant"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 29
    },
    {
        "id": 330,
        "question": "Osoba nabywająca pojazd mechaniczny, którego dotychczasowy posiadacz nie dopełnił w stosunku do tego pojazdu obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych, jest obowiązana do zawarcia umowy tego ubezpieczenia:",
        "answers": [
            "w dniu nabycia pojazdu",
            "najpóźniej w terminie 7 dni od dnia nabycia pojazdu",
            "najpóźniej w terminie 30 dni od dnia nabycia pojazdu",
            "żadna z powyższych odpowiedzi; obowiązek ten nadal ciąży na dotychczasowym posiadaczu"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 30
    },
    {
        "id": 331,
        "question": "Co do zasady zgodnie z Kodeksem cywilnym ubezpieczyciel jest wolny od odpowiedzialności, jeżeli ubezpieczający wyrządził szkodę umyślnie, ale odmiennie można się umówić w przypadku ubezpieczenia:",
        "answers": [
            "odpowiedzialności cywilnej",
            "obowiązkowego",
            "konsumenckiego",
            "nieruchomości, jeżeli jest obciążona zabezpieczeniem hipotecznym"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 31
    },
    {
        "id": 332,
        "question": "Kiedy w ubezpieczeniu mienia sumę ubezpieczenia ustala się jako przewidywaną maksymalną stratę w pojedynczym zdarzeniu a szkody pokrywane są do tej kwoty – mamy do czynienia z ...",
        "answers": [
            "ubezpieczeniem w systemie sum zmiennych",
            "ubezpieczeniem w systemie sum stałych",
            "ubezpieczeniem na pierwsze ryzyko",
            "z limitem odpowiedzialności wynikającym z klauzul dodatkowych"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 32
    },
    {
        "id": 333,
        "question": "Ubezpieczyciel nie może podnieść zarzutu, że przy zawieraniu umowy ubezpieczenia na życie podano wiadomości nieprawdziwe, w szczególności że zatajona została choroba osoby ubezpieczonej, jeżeli do wypadku doszło po upływie:",
        "answers": [
            "2 lat od zawarcia umowy ubezpieczenia",
            "3 lat od zawarcia umowy ubezpieczenia",
            "5 lat od zawarcia umowy ubezpieczenia",
            "okresu odpowiadającego okresowi przedawnienia roszczeń"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 33
    },
    {
        "id": 334,
        "question": "Udostępnianie poszkodowanemu lub uprawnionemu informacji i dokumentów będących podstawą do ustalenia odpowiedzialności Ubezpieczeniowego Funduszu Gwarancyjnego:",
        "answers": [
            "jest prawnie niedopuszczalne",
            "jest obowiązkiem UFG",
            "jest uprawnieniem UFG",
            "wymaga uzyskania zgody Sądu Najwyższego"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 34
    },
    {
        "id": 335,
        "question": "W ocenie ryzyka pożarowego PML (Probable Maximum Loss) oznacza:",
        "answers": [
            "całkowitą wartość mienia narażonego na ryzyko pożaru",
            "prawdopodobną maksymalną szkodę przy założeniu prawidłowego działania systemów zabezpieczeń",
            "maksymalną możliwą szkodę przy założeniu całkowitej awarii wszystkich zabezpieczeń",
            "optymalne warunki i pełną sprawność wszystkich zabezpieczeń wykluczające prawdopodobieństwo powstania szkody"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 35
    },
    {
        "id": 336,
        "question": "Zezwolenia na prowadzenie działalności brokerskiej w zakresie reasekuracji wydawane są przez:",
        "answers": [
            "Ministerstwo Finansów",
            "Ministerstwo Infrastruktury",
            "Ministerstwo Przemysłu",
            "żadne z wymienionych"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 36
    },
    {
        "id": 337,
        "question": "Jeżeli zostało zawartych kilka umów ubezpieczenia OC rolników w odniesieniu do tego samego gospodarstwa rolnego, z tym samym okresem ubezpieczenia, z jednym zakładem ubezpieczeń, wówczas:",
        "answers": [
            "zakładowi ubezpieczeń należy się składka ubezpieczeniowa z tytułu jednej umowy ubezpieczenia",
            "zakładowi ubezpieczeń nie należy się składka ubezpieczeniowa z tytułu żadnej umowy ubezpieczenia",
            "zakładowi ubezpieczeń należy się składka ubezpieczeniowa z tytułu wszystkich umów ubezpieczenia",
            "wszystkie umowy ubezpieczenia uważa się za nieważne"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 37
    },
    {
        "id": 338,
        "question": "Które rozporządzenie Ministra Finansów dotyczące obowiązkowego ubezpieczenia odpowiedzialności cywilnej określonej grupy podmiotów, określa wysokość minimalnej sumy gwarancyjnej w „euro\":",
        "answers": [
            "rozporządzenie Ministra Finansów z dnia 14 września 2011 r. w sprawie minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia OC osoby eksploatującej urządzenie jądrowe",
            "rozporządzenie Ministra Finansów z dnia 31 czerwca 2016 r. w sprawie obowiązkowego ubezpieczenia OC podmiotów eksploatujących stacje transformatorowe",
            "rozporządzenie Ministra Finansów z dnia 27 grudnia 2012 r. w sprawie obowiązkowego ubezpieczenia OC przewoźników lotniczych, przedsiębiorców wykonujących obsługę naziemną oraz instytucji zapewniających służby żeglugi powietrznej",
            "rozporządzenie Ministra Finansów z dnia 18 maja 2018 r. w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej z tytułu wykonywania działalności brokerskiej"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 38
    },
    {
        "id": 339,
        "question": "Zawarcie umowy ubezpieczenia na okaziciela oznacza, że:",
        "answers": [
            "okaziciel dokumentu ubezpieczenia jest uprawniony do odszkodowania",
            "okaziciel dokumentu ubezpieczenia jest uprawniony do sumy ubezpieczenia na życie z tytułu śmierci ubezpieczonego na życie",
            "okaziciel dokumentu ubezpieczenia jest zobowiązany opłacić wszelkie zaległe składki",
            "okaziciel dokumentu ubezpieczenia jest uprawniony do wypowiedzenia umowy ubezpieczenia na życie"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 39
    },
    {
        "id": 340,
        "question": "W jakich formach można zawrzeć ubezpieczenie CAR/EAR dla wielu kontraktów?",
        "answers": [
            "W formie jednej polisy dla wielu kontraktów z jedną, wspólną sumą ubezpieczenia na 12 miesięcy",
            "Wyłącznie jako indywidualne polisy na każdy kontrakt",
            "Wyłącznie jako rozszerzenie ogólnej polisy mienia od ognia",
            "Jako polisy jednostkowe dla pojedynczych kontraktów oraz polisy obrotowe (np. open cover) obejmujące wiele kontraktów w okresie umowy"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 40
    },
    {
        "id": 341,
        "question": "Taryfy oraz wysokość składki ubezpieczeniowej za obowiązkowe ubezpieczenie odpowiedzialności cywilnej komorników sądowych ustala:",
        "answers": [
            "Centralna Izba Komornicza",
            "zakład ubezpieczeń",
            "Komisja Nadzoru Finansowego",
            "Minister Sprawiedliwości"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 41
    },
    {
        "id": 342,
        "question": "Wpisowi do rejestru pośredników ubezpieczeniowych nie podlega:",
        "answers": [
            "agent oferujący ubezpieczenia uzupełniające",
            "agent ubezpieczeniowy",
            "broker reasekuracyjny",
            "osoba wykonująca czynności dystrybucyjne zakładu ubezpieczeń"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 42
    },
    {
        "id": 343,
        "question": "Budynek produkcyjny ubezpieczony w wartości rzeczywistej na 5 mln zł. Wartość odtworzeniowa: zł, zużycie techniczne: 40%. Szkoda całkowita w wyniku pożaru. Jakie będzie odszkodowanie? 8 mln",
        "answers": [
            "5 mln zł",
            "4,8 mln zł",
            "8 mln zł",
            "3 mln zł"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 43
    },
    {
        "id": 344,
        "question": "Rolą dyspaszera jest:",
        "answers": [
            "rozliczanie szkód z tytułu odpowiedzialności cywilnej armatorów",
            "rozliczanie szkód z ryzyk cargo w transporcie lądowym",
            "rozliczanie szkód z awarii wspólnej",
            "rozliczanie szkód zanieczyszczenia środowiska w transporcie morskim"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 44
    },
    {
        "id": 345,
        "question": "Oświadczenie ubezpieczonego składane stronie umowy ubezpieczenia na życie zawartej na cudzy rachunek, że ubezpieczony chce skorzystać z zastrzeżenia na jego rzecz ochrony ubezpieczeniowej powinno obejmować także:",
        "answers": [
            "sumę ubezpieczenia",
            "sumę ubezpieczenia i składkę",
            "sumę ubezpieczenia i zakres ochrony",
            "sumę ubezpieczenia, zakres ochrony i składkę"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 45
    },
    {
        "id": 346,
        "question": "Należności faktoringowe:",
        "answers": [
            "nie są przedmiotem ubezpieczenia z uwagi na konkurencyjność tej działalności do ubezpieczenia należności",
            "są przedmiotem ubezpieczenia, ale wyłącznie gdy faktorem jest bank",
            "są przedmiotem ubezpieczenia",
            "nie są przedmiotem ubezpieczenia"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 46
    },
    {
        "id": 347,
        "question": "W polisie CAR okres ubezpieczenia powinien obejmować:",
        "answers": [
            "tylko planowany okres realizacji robót budowlanych",
            "okres od rozpoczęcia robót do odbioru końcowego plus ewentualny okres konserwacji",
            "okres od podpisania umowy o roboty budowlane do upływu gwarancji",
            "12 miesięcy od daty ustalonej w polisie jako początek ochrony"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 47
    },
    {
        "id": 348,
        "question": "Przewlekła zwłoka w ubezpieczeniach finansowych zaliczana jest do:",
        "answers": [
            "do ryzyka handlowego jak i niehandlowego",
            "ryzyka handlowego",
            "nie występuje tego rodzaju ryzyko",
            "ryzyka niehandlowego"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 48
    },
    {
        "id": 349,
        "question": "Regulacje wyznaczające katalog szkód wyłączających odpowiedzialność zakładu ubezpieczeń w obowiązkowym ubezpieczeniu odpowiedzialności cywilnej firmy audytorskiej zostały zawarte w przepisach:",
        "answers": [
            "ustawy o sprawozdaniach finansowych firm audytorskich",
            "kodeksu postępowania cywilnego",
            "ustawy o dystrybucji ubezpieczeń",
            "rozporządzenia Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej firmy audytorskiej"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 49
    },
    {
        "id": 350,
        "question": "Zobowiązany do nadzoru nad osobą, której z powodu wieku albo stanu psychicznego lub cielesnego winy poczytać nie można, nie jest obowiązany do naprawienia szkody wyrządzonej przez tę osobę, jeżeli:",
        "answers": [
            "uczynił zadość obowiązkowi nadzoru albo że szkoda powstałaby także przy starannym wykonywaniu nadzoru",
            "wykazał, że sprawca szkody nie ponosiłby winy, gdyby był w stanie umożliwiającym poczytanie mu winy",
            "szkoda nie przekracza 2000 złotych",
            "poszkodowany przyczynił się do powstania przyczyny szkody"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 50
    },
    {
        "id": 351,
        "question": "Okres poprzedzający zawarcie umowy ubezpieczenia obowiązkowego:",
        "answers": [
            "jest objęty umową tego ubezpieczenia z mocy prawa",
            "może być objęty umową tego ubezpieczenia",
            "jest objęty umową tego ubezpieczenia jeżeli strony umowy tak postanowią",
            "nie może być objęty umową tego ubezpieczenia"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 51
    },
    {
        "id": 352,
        "question": "W przypadku umowy ubezpieczenia na życie z ubezpieczeniowym funduszem kapitałowym konieczne jest określenie w umowie:",
        "answers": [
            "kosztów ponoszonych przez ubezpieczyciela w związku z rozwiązaniem umowy",
            "kosztów dystrybucji",
            "tytułów i wysokości opłat",
            "tytułów i wysokości opłat oraz kosztów ubezpieczyciela finansowanych z tych opłat"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 52
    },
    {
        "id": 353,
        "question": "Na podstawie ustawy o dystrybucji ubezpieczeń, klient udziela brokerowi ubezpieczeniowemu pełnomocnictwa do wykonywania czynności brokerskich w zakresie ubezpieczeń w imieniu klienta w formie:",
        "answers": [
            "dokumentowej",
            "pisemnej",
            "dowolnej (ustawa nie przewiduje szczególnej formy)",
            "aktu notarialnego"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 53
    },
    {
        "id": 354,
        "question": "Z każdego odszkodowania ubezpieczającemu potrącana jest ustalona kwota lub procent – ubezpieczyciel wypłaca odszkodowanie pomniejszone o tę wartość. To wyjaśnienie opisuje...",
        "answers": [
            "tzw. sublimat sumy ubezpieczenia",
            "franszyzę integralną",
            "zachowek",
            "franszyzę redukcyjną"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 54
    },
    {
        "id": 355,
        "question": "Kiedy wygasa podstawowa ochrona ubezpieczeniowa w polisie CAR/EAR (Sekcja I/II)?",
        "answers": [
            "12 miesięcy po dacie ustalonej jako początek okresu ubezpieczenia",
            "Z chwilą zakończenia prac i odbioru końcowego lub z przystąpieniem obiektu do użytkowania – w zależności od tego, co nastąpi wcześniej",
            "30 dni po zakończeniu budowy – zawsze obowiązuje jeszcze miesięczny okres ochrony",
            "Wyłącznie z upływem okresu wskazanego w polisie, niezależnie od faktycznego zakończenia prac"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 55
    },
    {
        "id": 356,
        "question": "Z umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych ubezpieczyciel nie odpowiada za szkody:",
        "answers": [
            "polegające na utracie biżuterii",
            "wyrządzone przez kierującego nieumyślnie",
            "powstałe podczas wsiadania do pojazdu",
            "wyrządzone przez kierującego pod wpływem alkoholu"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 56
    },
    {
        "id": 357,
        "question": "Obowiązek zawarcia umowy OC rolników z tytułu posiadania gospodarstwa rolnego powstaje w dniu:",
        "answers": [
            "otrzymania decyzji o wysokości podatku rolnego",
            "objęcia w posiadanie gospodarstwa rolnego",
            "pokrycia dachem pierwszego budynku wchodzącego w skład gospodarstwa rolnego",
            "zameldowania się w gminie, na terenie której jest położone gospodarstwo rolne"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 57
    },
    {
        "id": 358,
        "question": "Klauzula 72 godzin w ubezpieczeniu od klęsk żywiołowych oznacza, że:",
        "answers": [
            "wszystkie szkody powstałe w ciągu 72 godzin od pierwszego zdarzenia traktowane są jako jedna szkoda",
            "ochrona rozpoczyna się 72 godziny po opłaceniu składki",
            "zgłoszenie szkody musi nastąpić w ciągu 72 godzin",
            "okres wyczekiwania w ubezpieczeniu utraty zysku wynosi maksymalnie 72 godziny"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 58
    },
    {
        "id": 359,
        "question": "Maksymalny okres czasu, za który wypłacane jest odszkodowanie z tytułu przerwy w działalności, liczony od dnia wystąpienia szkody odpowiada definicji:",
        "answers": [
            "okresu prób i testów w ubezpieczeniu EAR",
            "okresu odszkodowawczego w ubezpieczeniu utraty zysku",
            "okresu ubezpieczenia w ubezpieczeniu mienia od ognia i innych zdarzeń losowych",
            "okresu przedawnienia roszczeń wynikających z umowy ubezpieczenia"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 59
    },
    {
        "id": 360,
        "question": "Broker ubezpieczeniowy przechowuje pełnomocnictwa do wykonywania czynności brokerskich w zakresie ubezpieczeń w imieniu klienta oraz dokumenty dotyczące wynagrodzenia brokera, przez okres:",
        "answers": [
            "ustalony z klientem",
            "3 lat od dnia zakończenia współpracy z klientem",
            "5 lat od dnia zakończenia współpracy z klientem",
            "10 lat od dnia zakończenia współpracy z klientem"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 60
    },
    {
        "id": 361,
        "question": "Rażące zaniedbanie obowiązków przez ubezpieczającego z zakresu ochrony przeciwpożarowej (np. niesprawna instalacja ppoż.) miało bezsprzeczny wpływ na powstanie lub rozmiar szkody. W takiej sytuacji:",
        "answers": [
            "ubezpieczyciel odmawia odszkodowania ze względu na związek rażącego zaniedbania z powstaniem szkody",
            "ubezpieczyciel może jedynie podwyższyć składkę po szkodzie, ale nie odmówić wypłaty jeśli przed zawarciem umowy dokonano inspekcji miejsca ubezpieczenia",
            "ubezpieczyciel zawsze odmawia wypłaty, jeśli jakiekolwiek wymogi ochrony ppoż. nie były spełnione",
            "ubezpieczyciel może jedynie podwyższyć składkę po szkodzie, ale nie odmówić wypłaty"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 61
    },
    {
        "id": 362,
        "question": "Klauzula 115 w ubezpieczeniu CAR (dotycząca wadliwego projektu, materiałów i wykonania) w standardowym brzmieniu oznacza, że:",
        "answers": [
            "pokryte są tylko szkody w wadliwie wykonanych częściach, ale nie szkody następcze",
            "pokryte są zarówno wadliwe części, jak i wszystkie szkody następcze",
            "pokryte są szkody następcze spowodowane wadami, ale nie same wadliwe części",
            "wyłączone są szkody następcze spowodowane wadami, ale nie same wadliwe części"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 62
    },
    {
        "id": 363,
        "question": "Suma ubezpieczenia w polisie ubezpieczenia maszyn od awarii zwyczajowo powinna odzwierciedlać:",
        "answers": [
            "wartość księgową brutto maszyny z uwzględnieniem amortyzacji",
            "wartość rynkową (wyliczoną przez rzeczoznawcę) maszyny z uwzględnieniem amortyzacji",
            "wartość księgową brutto maszyny bez uwzględnienia amortyzacji",
            "wartość odtworzeniową (nowej) maszyny, aby w razie zniszczenia można było nabyć nową maszynę o podobnych parametrach"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 63
    },
    {
        "id": 364,
        "question": "Maksymalny okres odszkodowawczy w ubezpieczeniu BI powinien uwzględniać:",
        "answers": [
            "czas odbudowy plus okres powrotu do normalnego poziomu przychodów",
            "standardowo 12 miesięcy niezależnie od specyfiki działalności",
            "tylko czas fizycznej odbudowy zniszczonego mienia",
            "tylko czas uprzątnięcia pozostałości i fizycznej odbudowy zniszczonego mienia"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 64
    },
    {
        "id": 365,
        "question": "Według załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej, grupa 3 działu II obejmuje:",
        "answers": [
            "ubezpieczenia na życie, jeżeli są związane z ubezpieczeniowym funduszem kapitałowym, a także ubezpieczenia na życie, w których świadczenie zakładu ubezpieczeń jest ustalane w oparciu o określone indeksy lub inne wartości bazowe",
            "ubezpieczenia casco pojazdów lądowych obejmujące szkody w pojazdach samochodowych",
            "ubezpieczenia odpowiedzialności cywilnej wszelkiego rodzaju, wynikającej z posiadania i użytkowania pojazdów lądowych z napędem własnym",
            "ubezpieczenia kredytu"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 65
    },
    {
        "id": 366,
        "question": "W tzw. powszechnych ubezpieczeniach obowiązkowych zwrot składki za niewykorzystany okres ubezpieczenia przysługuje:",
        "answers": [
            "wyłącznie w ubezpieczeniu OC posiadaczy pojazdów mechanicznych",
            "wyłącznie w ubezpieczeniu OC rolników",
            "wyłącznie w ubezpieczeniu budynków rolniczych",
            "we wszystkich ubezpieczeniach wskazanych w lit. a-c"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 66
    },
    {
        "id": 367,
        "question": "Według danych KNF, na koniec roku 2024, do publicznego sektora własności (udział sektora publicznego przekracza 50% w kapitale zakładowym) zaliczono następujące zakłady ubezpieczeń:",
        "answers": [
            "PTR S.A.",
            "KUKE S.A.",
            "PZU S.A.",
            "wszystkie odpowiedzi są poprawne"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 67
    },
    {
        "id": 368,
        "question": "Ubezpieczenie popularnie zwane EAR (Erection All Risks) obejmuje m.in.:",
        "answers": [
            "budynki i budowle w trakcie normalnej eksploatacji",
            "urządzenia i/lub instalacje w trakcie ich montażu",
            "budynki biurowe w trakcie użytkowania",
            "utratę zysku wskutek ubezpieczenia mienia od wszystkich ryzyk (all risks)"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 68
    },
    {
        "id": 369,
        "question": "Z ilu sekcji składa się standardowa polisa CAR/EAR i co obejmują?",
        "answers": [
            "Z trzech: I – mienie/roboty na placu budowy; II – mienie otaczające; III – utrata zysku inwestora (DSU/ALOP)",
            "Z dwóch: I – szkody materialne, II – OC; utrata zysku jest zawsze wyłączona",
            "Z dwóch + opcjonalna trzecia dotycząca odpowiedzialności kontraktowej",
            "Z trzech: I – mienie/roboty na placu budowy; II – OC za szkody osób trzecich; III – utrata zysku inwestora (DSU/ALOP)"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 69
    },
    {
        "id": 370,
        "question": "Zgodnie z przepisami ustawy o ubezpieczeniach obowiązkowych, UFG i PBUK pojazd mechaniczny może być uznany za pojazd historyczny, bez spełnienia żadnych innych warunków, jeżeli ma co najmniej:",
        "answers": [
            "1 rok",
            "10 lat",
            "40 lat",
            "100 lat"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 70
    },
    {
        "id": 371,
        "question": "Przed zawarciem umowy ubezpieczenia broker ubezpieczeniowy udziela porady w oparciu o rzetelną analizę dostępnych na rynku produktów ubezpieczeniowych w liczbie:",
        "answers": [
            "wystarczającej do opracowania rekomendacji najwłaściwszej umowy",
            "wystarczającej do opracowania rekomendacji najwłaściwszej umowy, nie mniejszej niż 3 produkty ubezpieczeniowe",
            "wystarczającej do opracowania rekomendacji najwłaściwszej umowy, nie mniejszej niż 5 produktów ubezpieczeniowych",
            "ustalanej każdorazowo z klientem"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 71
    },
    {
        "id": 372,
        "question": "Właściwe rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC przedsiębiorcy wykonującego działalność gospodarczą w zakresie usług ochrony osób i mienia, regulacje dotyczące:",
        "answers": [
            "konsekwencji niespełnienia obowiązku zawarcia umowy tego ubezpieczenia",
            "wysokości składki ubezpieczeniowej w przedmiotowym ubezpieczeniu",
            "terminu powstania obowiązku ubezpieczenia OС",
            "wskazania uprawnionych podmiotów do przeprowadzenia kontroli działalności gospodarczej wykonywanej przez przedsiębiorcę w zakresie usług ochrony osób i mienia"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 72
    },
    {
        "id": 373,
        "question": "Wymagana regulacjami prawnymi minimalna suma gwarancyjna obowiązkowego ubezpieczenia odpowiedzialności cywilnej rzeczoznawcy do spraw zabezpieczeń przeciwpożarowych odnosi się do:",
        "answers": [
            "okresu ubezpieczenia nie dłuższego niż 12 miesięcy",
            "dowolnego okresu ubezpieczenia",
            "okresu ubezpieczenia wynikającego z ekspertyzy technicznej urządzeń przeciwpożarowych nie dłuższego niż 6 miesięcy",
            "okresu ubezpieczenia nie dłuższego niż 30 dni"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 73
    },
    {
        "id": 374,
        "question": "Zakład ubezpieczeń udziela odpowiedzi na reklamację klienta będącego osobą prawną lub spółką nieposiadającą osobowości prawnej:",
        "answers": [
            "w terminie wyznaczonym przez klienta, nie krótszym niż 7 dni",
            "w terminie 14 dni",
            "w terminie 30 dni",
            "przepisy prawa nie określają takiego obowiązku"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 74
    },
    {
        "id": 375,
        "question": "Inspekcja Ochrony Środowiska:",
        "answers": [
            "jest organem obowiązanym do przeprowadzania kontroli spełnienia obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych",
            "jest organem obowiązanym do przeprowadzania kontroli spełnienia obowiązku zawarcia umowy ubezpieczenia OC rolników",
            "jest organem uprawnionym do przeprowadzania kontroli spełnienia obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych",
            "nie posiada żadnych kompetencji kontrolnych w zakresie kontroli spełnienia obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych lub umowy ubezpieczenia OC rolników"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 75
    },
    {
        "id": 376,
        "question": "Maszyna produkcyjna ubezpieczona na 1 mln zł w wartości odtworzeniowej, faktyczna wartość nowej maszyny na rynku to 2,5 mln zł. Szkoda częściowa 300 000 zł. Franszyza redukcyjna 1% sumy ubezpieczenia. Oblicz odszkodowanie.",
        "answers": [
            "120 000 zł",
            "110 000 zł",
            "290 000 zł",
            "100 000 zł"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 76
    },
    {
        "id": 377,
        "question": "Szczególne zasady związane z lokowaniem przez zakład ubezpieczeń aktywów z umów ubezpieczenia na życie, w których ryzyko lokaty ponosi ubezpieczający, określa:",
        "answers": [
            "ustawa o działalności ubezpieczeniowej i reasekuracyjnej",
            "ustawa o dystrybucji ubezpieczeń",
            "rozporządzenie Ministra Finansów z 2025 r.",
            "przepisy prawa nie określają takich zasad"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 77
    },
    {
        "id": 378,
        "question": "Zakład ubezpieczeń może przetwarzać dane ubezpieczonych lub uprawnionych z umowy ubezpieczenia w celu oceny ryzyka ubezpieczeniowego lub wykonania umowy ubezpieczenia, bez wyraźnej zgody osoby, której dane dotyczą, dotyczące:",
        "answers": [
            "danych genetycznych",
            "danych biometrycznych",
            "danych ujawniających pochodzenie rasowe lub etniczne",
            "zdrowia"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 78
    },
    {
        "id": 379,
        "question": "Nadzór nad działalnością brokerów ubezpieczeniowych sprawuje:",
        "answers": [
            "Przewodniczący Komisji Nadzoru Finansowego",
            "Komisja Nadzoru Finansowego",
            "Zastępca Przewodniczącego Komisji Nadzoru Finansowego odpowiedzialny za ubezpieczenia",
            "zakład ubezpieczeń, na rzecz którego działa broker"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 79
    },
    {
        "id": 380,
        "question": "Interesy ubezpieczających, ubezpieczonych, uposażonych lub uprawnionych z umów ubezpieczenia (będących osobami fizycznymi) reprezentuje:",
        "answers": [
            "Rzecznik Ubezpieczonych",
            "Rzecznik Finansowy",
            "Polska Izba Ubezpieczeń",
            "Arbiter Ubezpieczeniowy"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 80
    },
    {
        "id": 381,
        "question": "Co oznacza suma ubezpieczenia w ubezpieczeniu od ognia i innych zdarzeń losowych?",
        "answers": [
            "Koszt zabezpieczeń przeciwpożarowych",
            "Wartość odtworzeniową (nową) ubezpieczonego mienia",
            "Wartość księgową netto ubezpieczonego mienia",
            "Kwotę, którą ubezpieczyciel może maksymalnie wypłacić w ramach polisy"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 81
    },
    {
        "id": 382,
        "question": "Korzyść z tytułu nienależnego świadczenia nie podlega zwrotowi co do zasady zgodnie z Kodeksem cywilnym:",
        "answers": [
            "jeżeli spełniający świadczenie wiedział, że nie był do świadczenia zobowiązany",
            "jeżeli spełniający świadczenie jest konsumentem, a odbiorcą świadczenia jest przedsiębiorca",
            "jeżeli odbiorcą świadczenia jest małoletni, a spełniającym świadczenie jest jego przedstawiciel ustawowy",
            "jeżeli spełniający świadczenie działał pod wpływem błędu, który sam wywołał"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 82
    },
    {
        "id": 383,
        "question": "W marcu 2025 r. Komisja Nadzoru Finansowego jednogłośnie zatwierdziła przeniesienie całości portfela ubezpieczeń pomiędzy:",
        "answers": [
            "Polski Gaz Towarzystwem Ubezpieczeń Wzajemnych w likwidacji a Powszechnym Zakładem Ubezpieczeń S.A.",
            "Polski Gaz Towarzystwem Ubezpieczeń Wzajemnych w likwidacji a T.U.I.R WARTA S.A.",
            "Towarzystwem Ubezpieczeń Wzajemnych MEDICUM w likwidacji a TUW PZUW",
            "Towarzystwem Ubezpieczeń Wzajemnych MEDICUM w likwidacji a Powszechnym Zakładem Ubezpieczeń S.A."
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 83
    },
    {
        "id": 384,
        "question": "W grupie 3 działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej obok ubezpieczeń na życie związanych z ubezpieczeniowym funduszem kapitałowym ustawodawca wymienił:",
        "answers": [
            "ubezpieczenia posagowe",
            "ubezpieczenia na życie związane z funduszami inwestycyjnymi, o których mowa w ustawie o funduszach inwestycyjnych",
            "ubezpieczenia na życie, w których świadczenie zakładu ubezpieczeń jest ustalane w oparciu o określone indeksy lub inne wartości bazowe",
            "ubezpieczeniowe produkty inwestycyjne o przeznaczeniu emerytalnym"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 84
    },
    {
        "id": 385,
        "question": "W kwietniu 2025 KNF wydała decyzję o zakazie zawierania umów ubezpieczenia odpowiedzialności cywilnej posiadaczy pojazdów mechanicznych (,,OC ppm\") z wyłączeniem odpowiedzialności cywilnej przewoźnika na terytorium Rzeczypospolitej Polskiej przez:",
        "answers": [
            "Accredited Insurance (Europe) Limited (Malta)",
            "Gefion Insurance A/S, Dania",
            "Chubb European Group SE, Wielka Brytania",
            "Insurance JSC \"DallBogg: Life and Health\" z siedzibą w Sofii (,,DallBogg\")"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 85
    },
    {
        "id": 386,
        "question": "Co to jest ryzyko moralne (moral hazard) w ocenie ryzyka?",
        "answers": [
            "Skłonność do mniej ostrożnych działań lub wywoływania szkód z powodu posiadania ubezpieczenia (pokusą nadużycia)",
            "Zwiększone ryzyko wynikające z cech fizycznych przedmiotu ubezpieczenia",
            "Ryzyko wynikające z działania sił natury",
            "Ubezpieczenie ryzyka z pominięciem zasad weryfikacji AML – przeciwdziałania praniu pieniędzy"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 86
    },
    {
        "id": 387,
        "question": "Odporność cyfrowa w obszarze usług ubezpieczeniowych jest częścią ryzyka:",
        "answers": [
            "rynkowego",
            "prawnego",
            "ubezpieczeniowego",
            "operacyjnego"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 87
    },
    {
        "id": 388,
        "question": "Jeżeli w umowie ubezpieczenia na życie nie określono okresu jej wypowiedzenia przez ubezpieczającego, to:",
        "answers": [
            "ubezpieczający nie może jej wypowiedzieć",
            "ubezpieczający może ją wypowiedzieć w terminie zwyczajowo przyjętym",
            "ubezpieczający może ją wypowiedzieć ze skutkiem natychmiastowym",
            "ubezpieczający może ją wypowiedzieć z zachowaniem miesięcznego okresu wypowiedzenia, ze skutkiem na koniec kolejnego miesiąca"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 88
    },
    {
        "id": 389,
        "question": "Zgodnie z prawem, wyrażona w euro kwota minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia OC adwokatów jest ustalana:",
        "answers": [
            "przez Radę Adwokacką przy zastosowaniu kursu sprzedaży euro wyliczonego w oparciu o dane ze 100 największych kantorów w Polsce",
            "przy zastosowaniu kursu sprzedaży euro ogłoszonego przez Komisję Europejską w Dzienniku Urzędowym Rady Europy",
            "przy zastosowaniu kursu średniego euro ogłoszonego przez Narodowy Bank Polski po raz pierwszy w roku, w którym umowa ubezpieczenia została zawarta",
            "przy zastosowaniu kursu średniego euro ogłoszonego przez Ministra Finansów w dniu zawarcia umowy ubezpieczenia"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 89
    },
    {
        "id": 390,
        "question": "W ubezpieczeniu majątkowym ubezpieczający ma obowiązek zawiadomić ubezpieczyciela o wypadku:",
        "answers": [
            "niezwłocznie",
            "w terminie 7 dni",
            "w terminie tygodniowym",
            "w terminie określonym w umowie lub ogólnych warunkach ubezpieczenia"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 90
    },
    {
        "id": 391,
        "question": "Przed zawarciem umowy ubezpieczenia dystrybutor ubezpieczeń określa, na podstawie uzyskanych od klienta informacji, jego wymagania i potrzeby oraz podaje w zrozumiałej formie obiektywne informacje o produkcie ubezpieczeniowym, w celu:",
        "answers": [
            "umożliwienia klientowi podjęcia świadomej decyzji",
            "udokumentowania do celów nadzorczych procesu sprzedaży ubezpieczenia",
            "zawarcia przez klienta umowy ubezpieczenia",
            "zrozumienia przez klienta ryzyka związanego z produktem"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 91
    },
    {
        "id": 392,
        "question": "W polskim ustawodawstwie gwarancja ubezpieczeniowa jest umową:",
        "answers": [
            "określoną w kodeksie administracyjnym",
            "nienazwaną",
            "określoną w ustawie o działalności ubezpieczeniowej",
            "zdefiniowaną"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 92
    },
    {
        "id": 393,
        "question": "W razie zawarcia przez ubezpieczyciela umowy ubezpieczenia mimo braku odpowiedzi na niektóre pytania zadawane w pismach ubezpieczyciela przed zawarciem umowy:",
        "answers": [
            "umowa jest ważna, ale nie obejmuje ryzyk objętych tymi pytaniami",
            "pominięte okoliczności uważa się za nieistotne",
            "ubezpieczyciel może powołać się na wadę oświdczenia woli",
            "w razie wypadku ubezpieczyciel może podnieść zarzuty oparte na okolicznościach objętych pominiętymi pytaniami"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 93
    },
    {
        "id": 394,
        "question": "Ubezpieczenie CAR: wartość kontraktu 20 mln zł, suma ubezp. 22 mln zł (z 10% buforem). Szkoda w robotach wykończeniowych 3 mln zł. Udział własny 10% min. 50 000 zł. Odszkodowanie będzie wynosić:",
        "answers": [
            "3 mln zł",
            "2,7 mln zł",
            "2,95 mln zł",
            "2,5 mln zł"
        ],
        "correct": 1,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 94
    },
    {
        "id": 395,
        "question": "Zabór mienia dokonany z użyciem przemocy fizycznej lub groźby jej natychmiastowego użycia wobec ubezpieczonego lub jego pracowników – ta definicja w ubezpieczeniu mienia odpowiada...",
        "answers": [
            "kradzieży zwykłej",
            "kradzieży z włamaniem",
            "oszustwu",
            "rabunkowi"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 95
    },
    {
        "id": 396,
        "question": "Wielkości dopuszczonych środków własnych, która umożliwia zakładowi ubezpieczeń pokrycie znacznych, nieprzewidzianych strat oraz zapewnia dostateczne zabezpieczenie interesu ubezpieczonych odpowiada:",
        "answers": [
            "rezerwa techniczno-ubezpieczeniowa dla celów wypłacalności",
            "minimalny kapitał gwarancyjny",
            "minimalny wymóg kapitałowy",
            "kapitałowy wymóg wypłacalności"
        ],
        "correct": 3,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 96
    },
    {
        "id": 397,
        "question": "Zgodnie z Kodeksem cywilnym prawo do odstąpienia od umowy ubezpieczenia przez ubezpieczającego:",
        "answers": [
            "przysługuje zawsze",
            "nie przysługuje, jeżeli umowę zawarto w wyniku indywidualnych ustaleń",
            "przysługuje, jeżeli umowa zawarta na okres dłuższy niż 6 miesięcy",
            "przysługuje tylko jeżeli zapłacono składkę, ponieważ jeżeli składki nie zapłacono, umowa ulegnie wygaśnięciu albo rozwiązaniu przez ubezpieczyciela"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 97
    },
    {
        "id": 398,
        "question": "Instytucja tzw. \"Abandon\" dotyczy:",
        "answers": [
            "casco morskiego",
            "odpowiedzialności cywilnej",
            "ryzyk politycznych",
            "ubezpieczeń budowlano-montażowych"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 98
    },
    {
        "id": 399,
        "question": "Zgodnie z właściwymi regulacjami, obowiązkowe ubezpieczenie OC podmiotu wykonującego działalność leczniczą obejmuje szkody:",
        "answers": [
            "będące następstwem zabiegów chirurgii plastycznej lub zabiegów kosmetycznych, jeśli są udzielane w przypadkach będących następstwem wady wrodzonej, urazu, choroby lub następstwem jej leczenia",
            "polegające na zniszczeniu rzeczy",
            "polegające na zapłacie kar umownych",
            "polegające na utracie rzeczy"
        ],
        "correct": 0,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 99
    },
    {
        "id": 400,
        "question": "Na podstawie ustawy o dystrybucji ubezpieczeń zezwolenie na wykonywanie działalności brokerskiej w zakresie ubezpieczeń (jak i w zakresie reasekuracji) nie może być wydane na wniosek:",
        "answers": [
            "spółki akcyjnej",
            "spółki kapitałowej",
            "spółki nieposiadającej osobowości prawnej",
            "osoby fizycznej"
        ],
        "correct": 2,
        "comment": "WRZESIEŃ 2025 -",
        "sourceNumber": 100
    },
    // ===== LISTOPAD 2025 =====
    {
        "id": 401,
        "question": "W polisie mienia od ognia klauzula odnowienia automatycznego (automatic reinstatement) oznacza, że:",
        "answers": [
            "składka jest automatycznie waloryzowana",
            "suma ubezpieczenia automatycznie przywracana jest po szkodzie częściowej bez dodatkowej składki lub za proporcjonalną składkę",
            "polisa przedłuża się automatycznie na kolejny rok",
            "franszyza automatycznie maleje z każdym rokiem bez szkód"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 1
    },
    {
        "id": 402,
        "question": "Według danych raportu PIU z roku 2025 „Ubezpieczenia w liczbach 2.0”, w roku 2024, wynik techniczny polskiego rynku ubezpieczeń odnotował:",
        "answers": [
            "wzrost rok do roku o 8,6%",
            "wzrost rok do roku o 2%",
            "spadek rok do roku o 30,4%",
            "spadek rok do roku o 7,5%"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 2
    },
    {
        "id": 403,
        "question": "W przypadku udzielenia przez UFG zwrotnej pomocy finansowej ubezpieczycielowi przejmującemu portfel ubezpieczeń obowiązkowych: OC posiadaczy pojazdów mechanicznych i OC rolników, kontrolę nad prawidłowością wykorzystania tej pomocy sprawuje:",
        "answers": [
            "Ubezpieczeniowy Fundusz Gwarancyjny",
            "Polska Izba Ubezpieczeń",
            "Polskie Biuro Ubezpieczycieli Komunikacyjnych",
            "Komisja Nadzoru Finansowego"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 3
    },
    {
        "id": 404,
        "question": "Zgodnie z przepisami ustawy o dystrybucji ubezpieczeń, osoba, przy pomocy której broker ubezpieczeniowy wykonuje czynności brokerskie w zakresie ubezpieczeń może:",
        "answers": [
            "wykonywać czynności agencyjne",
            "wykonywać czynności dystrybucyjne zakładu ubezpieczeń",
            "posiadać akcje agenta ubezpieczeniowego dopuszczone do obrotu na rynku regulowanym",
            "być członkiem organów nadzorczych agenta ubezpieczeniowego"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 4
    },
    {
        "id": 405,
        "question": "Ubezpieczyciel pokrywa koszty uprzątnięcia pozostałości po szkodzie (gruzu, zniszczonych elementów):",
        "answers": [
            "bez ograniczeń – w pełnej wysokości faktycznych kosztów nawet powyżej sumy ubezpieczenia",
            "wyłącznie w zakresie szkód katastroficznych",
            "nie pokrywa takich kosztów – są one po stronie ubezpieczającego",
            "do limitu określonego w polisie (często ustalonego procentu sumy ubezpieczenia, np. 10%)"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 5
    },
    {
        "id": 406,
        "question": "Odpowiedzialność zakładu ubezpieczeń z tytułu zawartej umowy ubezpieczenia obowiązkowego, co do zasady, trwa:",
        "answers": [
            "bezterminowo",
            "przez okres 3 lat",
            "przez okres wskazany w umowie",
            "przez dowolny okres"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 6
    },
    {
        "id": 407,
        "question": "Pierwszą i przez długie lata jedyną na terenie zaboru pruskiego polską instytucją ubezpieczeniową prywatną to:",
        "answers": [
            "Kasa Kredytowa Ziemiańska",
            "Krajowa Kasa Ubezpieczenia Strażaków od Wypadków",
            "TU WARTA",
            "Vesta – Bank Wzajemnych Ubezpieczeń na Życie"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 7
    },
    {
        "id": 408,
        "question": "W przypadku ogłoszenia upadłości zakładu ubezpieczeń Ubezpieczeniowy Fundusz Gwarancyjny jest obowiązany do składania sprawozdań z działalności do Komisji Nadzoru Finansowego:",
        "answers": [
            "na koniec każdego miesiąca",
            "na koniec każdego kwartału",
            "na koniec każdego półrocza",
            "na koniec każdego roku"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 8
    },
    {
        "id": 409,
        "question": "Ryzyko aktuarialne to:",
        "answers": [
            "możliwość poniesienia straty lub niekorzystnej zmiany sytuacji finansowej wynikającej bezpośrednio lub pośrednio z wahań poziomu i wahań zmienności rynkowych cen aktywów, zobowiązań i instrumentów finansowych",
            "możliwość poniesienia straty lub niekorzystnej zmiany wartości zobowiązań, jakie mogą wynikać z zawartych umów ubezpieczenia, w związku z niewłaściwymi założeniami dotyczącymi wyceny składek i tworzenia rezerw techniczno-ubezpieczeniowych",
            "możliwość niezrealizowania przez zakład ubezpieczeń lub zakład reasekuracji lokat i innych aktywów w celu uregulowania swoich zobowiązań finansowych w momencie, gdy stają się one wymagalne",
            "możliwość poniesienia straty wynikająca z niewłaściwych lub błędnych procesów wewnętrznych, z działań personelu lub systemów lub ze zdarzeń zewnętrznych"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 9
    },
    {
        "id": 410,
        "question": "Dystrybutor ubezpieczeń niebędący twórcą produktu ubezpieczeniowego nie ma obowiązku:",
        "answers": [
            "stosowania odpowiednich rozwiązań zapewniających uzyskanie od twórcy produktu ubezpieczeniowego informacji o produkcie i procesie jego zatwierdzania, w tym informacji o określonym rynku docelowym produktu",
            "posiadania wiedzy o produkcie ubezpieczeniowym",
            "posiadania wiedzy o określonym rynku docelowym produktu ubezpieczeniowego",
            "dokonywania regularnego przeglądu funkcjonowania produktu ubezpieczeniowego"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 10
    },
    {
        "id": 411,
        "question": "Spółka na gruncie przepisów Kodeksu cywilnego to:",
        "answers": [
            "formuła współpracy wspólników, będąca spółką osobową i mająca zdolność do czynności prawnych",
            "formuła współpracy wspólników, będąca spółką kapitałową i mająca zdolność do czynności prawnych",
            "formuła współpracy wspólników, będąca spółką osobową i mająca tzw. ułomną zdolność do czynności prawnych",
            "umowa, w ramach której wspólnicy zobowiązują się dążyć do osiągnięcia wspólnego celu gospodarczego przez działanie w sposób oznaczony"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 11
    },
    {
        "id": 412,
        "question": "Zgodnie z Kodeksem Morskim awarię wspólną stanowi:",
        "answers": [
            "nadzwyczajne poświęcenia lub wydatki poniesione rozmyślnie i rozsądnie w celu ratowania statku, ładunku na nim przewożonego oraz frachtu ze wspólnego dla nich niebezpieczeństwa oraz wyjątkowo straty i przestoju lub z różnicy cen",
            "nadzwyczajne poświęcenia lub wydatki poniesione rozmyślnie i rozsądnie w celu ratowania statku, ładunku na nim przewożonego oraz frachtu ze wspólnego dla nich niebezpieczeństwa",
            "nadzwyczajne bezpośrednie i pośrednie poświęcenia lub wydatki poniesione rozmyślnie i rozsądnie w celu ratowania statku, ładunku na nim przewożonego oraz frachtu ze wspólnego dla nich niebezpieczeństwa",
            "nadzwyczajne pośrednie poświęcenia lub wydatki poniesione rozmyślnie i rozsądnie w celu ratowania statku, ładunku na nim przewożonego oraz frachtu ze wspólnego dla nich niebezpieczeństwa"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 12
    },
    {
        "id": 413,
        "question": "Agregat roczny (annual aggregate) w polisie ubezpieczeniowej oznacza:",
        "answers": [
            "sumę wszystkich franszyz w ciągu roku",
            "maksymalną łączną kwotę odszkodowań za wszystkie szkody w okresie rocznym",
            "składkę płatną raz w roku z góry",
            "liczbę szkód możliwych do zgłoszenia w roku"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 13
    },
    {
        "id": 414,
        "question": "Broker ubezpieczeniowy, który zamierza podjąć działalność brokerską w zakresie ubezpieczeń na terytorium innego niż RP państwa członkowskiego Unii Europejskiej przez oddział lub w inny sposób niż przez oddział, w ramach swobody świadczenia usług:",
        "answers": [
            "ma obowiązek powiadomić właściwy organ nadzoru państwa członkowskiego UE",
            "ma obowiązek uzyskać zgodę właściwego organu nadzoru państwa członkowskiego UE",
            "ma obowiązek powiadomić Komisję Nadzoru Finansowego",
            "ma obowiązek uzyskać zgodę Komisji Nadzoru Finansowego"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 14
    },
    {
        "id": 415,
        "question": "Założenie, że system tryskaczowy zadziała tylko częściowo lub w ograniczonym zakresie (np. awaria w części obiektu), jest najczęściej przyjmowane w scenariuszu:",
        "answers": [
            "MPL (Maximum Possible Loss) w analizie ryzyka pożarowego",
            "EML (Estimated Maximum Loss) w analizie ryzyka pożarowego",
            "prawdopodobieństwa wystąpienia pożaru",
            "PML (Probable Maximum Loss) w analizie ryzyka pożarowego"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 15
    },
    {
        "id": 416,
        "question": "Standardowa polisa CAR/EAR wyłącza odpowiedzialność za szkody spowodowane:",
        "answers": [
            "pożarem lub eksplozją na placu budowy",
            "błędem obsługi maszyn budowlanych przez pracowników",
            "siłami natury jak powódź czy huragan",
            "wadami projektowymi, błędami konstrukcyjnymi lub wadliwym materiałem (koszt naprawy wadliwego elementu nie jest pokrywany)"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 16
    },
    {
        "id": 417,
        "question": "Gwarancja warunkowa jest:",
        "answers": [
            "synonimem gwarancji pośredniej",
            "żadnym z synonimów wymienionych w pozostałych propozycjach odpowiedzi",
            "synonimem dla gwarancji odwołalnej",
            "synonimem dla gwarancji nieodwołalnej"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 17
    },
    {
        "id": 418,
        "question": "Przepisy właściwego rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej przedsiębiorców wykonujących działalność z zakresu usługowego prowadzenia ksiąg rachunkowych, określają:",
        "answers": [
            "wysokość minimalnej sumy gwarancyjnej tego ubezpieczenia",
            "wysokość maksymalnej sumy gwarancyjnej tego ubezpieczenia",
            "wysokość średniej ważonej sumy gwarancyjnej tego ubezpieczenia",
            "średnią wysokość sumy gwarancyjnej tego ubezpieczenia wyliczoną w oparciu o wskazany w tym rozporządzeniu wzór"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 18
    },
    {
        "id": 419,
        "question": "Czy broker ubezpieczeniowy może nie udzielić klientowi porady brokerskiej (porady w oparciu o rzetelną analizę dostępnych na rynku produktów ubezpieczeniowych w liczbie wystarczającej do opracowania rekomendacji najwłaściwszej umowy)?",
        "answers": [
            "zawsze ma obowiązek udzielenia porady",
            "ma obowiązek udzielenia porady, chyba że klient złoży oświadczenie o rezygnacji z udzielenia porady w formie dokumentowej",
            "nie ma obowiązku udzielenia porady, chyba że klient życzy sobie jej udzielenia",
            "udzielenie porady zależy od decyzji brokera"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 19
    },
    {
        "id": 420,
        "question": "Udzielenie pełnomocnictwa nieodwołalnego jest w świetle przepisów Kodeksu cywilnego:",
        "answers": [
            "zakazane",
            "zakazane w relacjach z konsumentem",
            "dopuszczalne z przyczyn uzasadnionych treścią stosunku prawnego będącego podstawą pełnomocnictwa",
            "w pełni dozwolone, bez ograniczeń"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 20
    },
    {
        "id": 421,
        "question": "Standardowa franszyza czasowa w ubezpieczeniu DSU/ALOP (opóźnienie uruchomienia) wynosi zazwyczaj:",
        "answers": [
            "od kilku tygodni do kilku miesięcy w zależności od rodzaju projektu",
            "1 dzień od wystąpienia szkody materialnej",
            "nie stosuje się franszyzy czasowej w DSU/ALOP",
            "7 dni od daty planowanego uruchomienia"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 21
    },
    {
        "id": 422,
        "question": "W przypadku szkody częściowej w robotach budowlanych już odebranych przez inwestora (w ramach odbioru częściowego):",
        "answers": [
            "standardowo ochrona wygasa dla odebranych części, chyba że wykupiono rozszerzenie",
            "odpowiedzialność przechodzi automatycznie na polisę mienia inwestora",
            "polisa CAR zawsze pokrywa takie szkody bez ograniczeń",
            "szkoda jest pokrywana, ale z połowiczną franszyzą"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 22
    },
    {
        "id": 423,
        "question": "Obowiązujące rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej architektów oraz inżynierów budownictwa nie zawiera regulacji dotyczących:",
        "answers": [
            "sposobu ustalania (przeliczania na PLN) kwoty minimalnej sumy gwarancyjnej wyrażonej w euro, właściwej dla tego ubezpieczenia",
            "terminu powstania obowiązku ubezpieczenia",
            "zasad wypowiedzenia tej umowy ubezpieczenia",
            "wysokości minimalnych sum gwarancyjnych w tym ubezpieczeniu"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 23
    },
    {
        "id": 424,
        "question": "Do umowy o świadczenie usług stosuje się odpowiednio przepisy o:",
        "answers": [
            "przedstawicielstwie",
            "zleceniu",
            "umowie o dzieło",
            "umowie agencyjnej"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 24
    },
    {
        "id": 425,
        "question": "Zgodnie z prawem, sposób ustalania (przeliczania na PLN) kwoty minimalnej sumy gwarancyjnej wyrażonej w euro, właściwej dla obowiązkowego ubezpieczenia OC pośrednika w obrocie nieruchomościami, wynika z przepisów: 26–50",
        "answers": [
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej pośrednika w obrocie nieruchomościami",
            "rozporządzenia Prezydenta Rzeczypospolitej Polskiej w sprawie sposobu przeliczania na PLN kwot wszystkich rodzajów należności wyrażonych w walutach obcych",
            "ustawy o pośrednikach w obrocie nieruchomościami",
            "ustawy o wykonywaniu działalności reasekuracyjnej"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 25
    },
    {
        "id": 426,
        "question": "Jeżeli składka z tytułu umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych jest opłacana w ratach, to niezapłacenie przez ubezpieczającego raty składki w terminie oznaczonym przez zakład ubezpieczeń:",
        "answers": [
            "powoduje, z mocy prawa, ustanie odpowiedzialności zakładu ubezpieczeń",
            "powoduje ustanie odpowiedzialności zakładu ubezpieczeń, jeżeli strony tak postanowią w umowie ubezpieczenia",
            "nie powoduje, z mocy prawa, ustania odpowiedzialności zakładu ubezpieczeń",
            "nie powoduje ustania odpowiedzialności zakładu ubezpieczeń, jeżeli strony tak postanowią w umowie ubezpieczenia"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 26
    },
    {
        "id": 427,
        "question": "Wskaźnik rentowności działalności technicznej wg KNF to:",
        "answers": [
            "(Wynik techniczny / składka zarobiona brutto) × 100%",
            "(Wynik techniczny / składka przypisana na udziale własnym) × 100%",
            "(Wynik finansowy / składka zarobiona na udziale własnym) × 100%",
            "(Wynik techniczny / składka zarobiona na udziale własnym) × 100%"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 27
    },
    {
        "id": 428,
        "question": "Przez ubezpieczenie kontraktów eksportowych rozumiane jest:",
        "answers": [
            "ubezpieczenie na wypadek strat poniesionych przez polskiego eksportera w związku z realizacją inwestycji bezpośredniej za granicą",
            "ubezpieczenie wydatków w związku z poszukiwaniem zagranicznych rynków zbytu",
            "ubezpieczenie kredytu kupieckiego udzielanego przez polskiego dostawcę zagranicznemu partnerowi",
            "ubezpieczenie kredytów bankowych na finansowanie transakcji eksportowych"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 28
    },
    {
        "id": 429,
        "question": "Na reklamację klienta będącego osobą prawną lub spółką nieposiadającą osobowości prawnej zakład ubezpieczeń:",
        "answers": [
            "nie ma obowiązku udzielenia odpowiedzi",
            "ma obowiązek udzielenia odpowiedzi jeżeli zobowiązał się do tego w umowie ubezpieczenia lub w ramach przystąpienia do dobrych praktyk rynkowych",
            "ma obowiązek udzielenia odpowiedzi w terminie 14 dni od dnia jej otrzymania",
            "ma obowiązek udzielenia odpowiedzi w terminie 30 dni od dnia jej otrzymania"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 29
    },
    {
        "id": 430,
        "question": "Z dniem zmiany stanu prawnego lub faktycznego powodującego niepodleganie przez rolnika opodatkowaniu podatkiem rolnym, umowa obowiązkowego ubezpieczenia OC rolników:",
        "answers": [
            "ulega rozwiązaniu",
            "ulega, z mocy prawa, przekształceniu w umowę dobrowolną",
            "ulega, z mocy prawa, przekształceniu w umowę nienazwaną",
            "ulega zawieszeniu"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 30
    },
    {
        "id": 431,
        "question": "Szczególne zasady związane z lokowaniem przez zakład ubezpieczeń aktywów z umów ubezpieczenia na życie, w których ryzyko lokaty ponosi ubezpieczający:",
        "answers": [
            "określają dobre praktyki rynkowe opracowane przez Polską Izbę Ubezpieczeń",
            "określa rozporządzenie Ministra Finansów z dnia 10 lutego 2025 r. w sprawie zasad i trybu lokowania przez zakład ubezpieczeń aktywów z umów ubezpieczenia na życie, w których ryzyko lokaty ponosi ubezpieczający",
            "określa ustawa z dnia 11 września 2015 r. o działalności ubezpieczeniowej i reasekuracyjnej",
            "nie zostały określone ani w przepisach prawa ani w dobrych praktykach rynkowych"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 31
    },
    {
        "id": 432,
        "question": "W obowiązkowym ubezpieczeniu budynków rolniczych ubezpieczyciel jest obowiązany do wysłania ubezpieczającemu informacji o ubezpieczeniu na kolejny okres nie później niż:",
        "answers": [
            "1 dzień przed upływem 12 miesięcy, na który umowa ubezpieczenia została zawarta",
            "14 dni przed upływem 12 miesięcy, na który umowa ubezpieczenia została zawarta",
            "90 dni przed upływem 12 miesięcy, na który umowa ubezpieczenia została zawarta",
            "180 dni przed upływem 12 miesięcy, na który umowa została zawarta"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 32
    },
    {
        "id": 433,
        "question": "W skład Rady Ubezpieczeniowego Funduszu Gwarancyjnego wchodzi przedstawiciel:",
        "answers": [
            "Polskiego Biura Ubezpieczycieli Komunikacyjnych",
            "Komisji Nadzoru Finansowego",
            "Rzecznika Finansowego",
            "Urzędu Ochrony Konkurencji i Konsumentów"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 33
    },
    {
        "id": 434,
        "question": "Alternatywą do korzystania z usług brokerskich jest korzystanie z usług agentów ubezpieczeniowych. Według danych KNF, na koniec roku 2024, zarejestrowanych było (w zaokrągleniu do pełnych tysięcy):",
        "answers": [
            "26 000 agentów",
            "28 000 agentów",
            "32 000 agentów",
            "41 000 agentów"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 34
    },
    {
        "id": 435,
        "question": "Zgodnie z art. 298 Kodeksu karnego, kto, w celu uzyskania odszkodowania z tytułu umowy ubezpieczenia, powoduje zdarzenie będące podstawą do wypłaty takiego odszkodowania, podlega karze:",
        "answers": [
            "nagany",
            "wykonania pracy społecznie użytecznej",
            "grzywny",
            "pozbawienia wolności"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 35
    },
    {
        "id": 436,
        "question": "Koszty poniesione w celu ratowania ubezpieczonego mienia lub zmniejszenia strat podczas zdarzenia ubezpieczeniowego:",
        "answers": [
            "pomniejszają sumę ubezpieczenia podobnie jak wypłata odszkodowania",
            "są pokrywane tylko jeśli zostały wcześniej zgłoszone ubezpieczycielowi",
            "są pokrywane przez ubezpieczyciela nawet wtedy, gdy wraz z odszkodowaniem przekraczają sumę ubezpieczenia",
            "nie podlegają zwrotowi z polisy ubezpieczeniowej"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 36
    },
    {
        "id": 437,
        "question": "Które z poniższych jest przykładem pasywnego zabezpieczenia przeciwpożarowego?",
        "answers": [
            "automatyczny system tryskaczowy",
            "system alarmu pożarowego (czujki i sygnalizacja)",
            "hydranty wewnętrzne",
            "ściana oddzielenia przeciwpożarowego (przegroda o określonej odporności ogniowej)"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 37
    },
    {
        "id": 438,
        "question": "Okres przedawnienia roszczeń z umowy ubezpieczenia w polskim prawie wynosi:",
        "answers": [
            "3 lata od dnia zawarcia umowy",
            "10 lat od końca okresu ubezpieczenia",
            "3 lata od dnia, w którym uprawniony dowiedział się o szkodzie",
            "3 lata od dnia powstania szkody"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 38
    },
    {
        "id": 439,
        "question": "Przedsiębiorstwo ma prognozowany roczny zysk brutto 12 mln zł. Po pożarze produkcja wstrzymana na 3 miesiące, po czym w pełni wznowiono działalność. Jaka jest orientacyjna wysokość szkody w BI (zakładając pełne zatrzymanie przez te 3 miesiące)?",
        "answers": [
            "1 mln zł",
            "3 mln zł",
            "6 mln zł",
            "9 mln zł"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 39
    },
    {
        "id": 440,
        "question": "Informacje wskazujące, które postanowienia wzorca umowy (w szczególności OWU) określają m.in. przesłanki wypłaty odszkodowania i innych świadczeń, czy ograniczenia oraz wyłączenia odpowiedzialności zakładu ubezpieczeń, umieszcza się:",
        "answers": [
            "przed postanowieniami wzorca umowy",
            "po postanowieniach wzorca umowy",
            "w odrębnym dokumencie załączonym do wzorca umowy",
            "przepisy prawa nie określają takiego obowiązku"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 40
    },
    {
        "id": 441,
        "question": "W związku z proponowanym zawarciem umowy ubezpieczenia broker ubezpieczeniowy ma obowiązek poinformować klienta o wysokości:",
        "answers": [
            "honorarium płaconego bezpośrednio przez klienta, a w przypadku gdy jest to niemożliwe – o metodzie jego wyliczenia",
            "honorarium płaconego przez zakład ubezpieczeń, a w przypadku gdy jest to niemożliwe – o metodzie jego wyliczenia",
            "otrzymywanej prowizji uwzględnionej w kwocie składki ubezpieczeniowej",
            "otrzymywanej prowizji uwzględnionej w kwocie składki ubezpieczeniowej jeżeli jest większa niż 20% składki"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 41
    },
    {
        "id": 442,
        "question": "Obowiązujące rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej rzeczoznawcy do spraw zabezpieczeń przeciwpożarowych, zawiera regulacje dotyczące:",
        "answers": [
            "organu uprawnionego do kontroli spełnienia obowiązku ubezpieczenia",
            "katalogu szkód wyłączonych z zakresu przedmiotowego ubezpieczenia",
            "wysokości składek ubezpieczeniowych za to ubezpieczenie",
            "granicznego terminu na wypłatę odszkodowania przez zakład ubezpieczeń"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 42
    },
    {
        "id": 443,
        "question": "Jeżeli oferta jest składana w postaci elektronicznej, w razie wątpliwości umowę poczytuje się za zawartą w miejscu:",
        "answers": [
            "zamieszkania/siedziby adresata oferty",
            "zamieszkania/siedziby składającego ofertę",
            "lokalizacji infrastruktury składającego ofertę",
            "lokalizacji infrastruktury adresata oferty"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 43
    },
    {
        "id": 444,
        "question": "Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2554 z dnia 14 grudnia 2022 r. w sprawie operacyjnej odporności cyfrowej sektora finansowego (tzw. DORA) nie ma zastosowania do:",
        "answers": [
            "wszystkich pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające",
            "pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające jeżeli ryzyko związane z wykorzystaniem technologii informacyjno-komunikacyjnych jest marginalne",
            "pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących mikroprzedsiębiorstwami, małymi lub średnimi przedsiębiorstwami",
            "pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących dużymi przedsiębiorstwami"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 44
    },
    {
        "id": 445,
        "question": "W sytuacji gdy ubezpieczony świadomie podał nieprawdziwe informacje przy zawieraniu umowy, które miały wpływ na ocenę ryzyka, ubezpieczyciel:",
        "answers": [
            "może jedynie podwyższyć składkę na kolejny okres",
            "wypłaca odszkodowanie, ale wypowiada umowę",
            "musi wypłacić odszkodowanie pomniejszone o 50%",
            "może odstąpić od umowy i odmówić wypłaty świadczenia"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 45
    },
    {
        "id": 446,
        "question": "W jakim przypadku ubezpieczyciel może obniżyć odszkodowanie z tytułu naruszenia obowiązków prewencyjnych przez ubezpieczonego?",
        "answers": [
            "tylko gdy naruszenie było umyślne i prowadziło do odstąpienia od umowy",
            "zawsze, gdy stwierdzi jakiekolwiek naruszenie bez względu na jego wpływ na szkodę",
            "nigdy – może tylko wypowiedzieć umowę na przyszłość",
            "gdy naruszenie miało wpływ na powstanie szkody lub zwiększenie jej rozmiarów"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 46
    },
    {
        "id": 447,
        "question": "Okolicznością wyłączającą odpowiedzialność zakładu ubezpieczeń w ubezpieczeniach należności jest:",
        "answers": [
            "wszystkie wymienione w pozostałych propozycjach odpowiedzi okoliczności",
            "okoliczność o charakterze politycznym i społecznym",
            "okoliczność o charakterze tzw. administracyjnej siły wyższej",
            "okoliczność o charakterze katastrof naturalnych"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 47
    },
    {
        "id": 448,
        "question": "Na potrzeby oceny, czy postanowienie umowne jest niedozwolone, w zakresie przesłanki naruszenia dobrych obyczajów w indywidualnej sprawie bierze się pod uwagę:",
        "answers": [
            "treść umowy, okoliczności jej zawarcia oraz uwzględnia się umowy pozostające w związku z umową obejmującą postanowienie będące przedmiotem oceny",
            "zasady współżycia społecznego i poziom ewentualnej nierównowagi świadczeń",
            "czytelność postanowienia umownego i jego jednoznaczność",
            "poziom korzyści osiągniętej przez stosującego postanowienie umowne względem konsumenta"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 48
    },
    {
        "id": 449,
        "question": "W umowie ubezpieczenia dobrowolnego objęcie ubezpieczeniem okresu poprzedzającego zawarcie umowy jest bezskuteczne:",
        "answers": [
            "zawsze",
            "zawsze, chyba że strony postanowiły inaczej",
            "jeżeli w chwili zawarcia umowy którakolwiek ze stron wiedziała lub przy zachowaniu należytej staranności mogła się dowiedzieć, że wypadek zaszedł",
            "jeżeli w chwili zawarcia umowy ubezpieczający wykorzystał albo spowodował brak wiedzy ubezpieczyciela o okolicznościach wpływających na ryzyko wystąpienia wypadku"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 49
    },
    {
        "id": 450,
        "question": "W ubezpieczeniu mienia składniki zapasów (środki obrotowe) wycenia się zazwyczaj według: 51–75",
        "answers": [
            "ceny nabycia lub kosztu wytworzenia",
            "wartości likwidacyjnej w dniu szkody",
            "wartości rynkowej ustalonej przez biegłego",
            "zawsze wartości odtworzeniowej nowej"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 50
    },
    {
        "id": 451,
        "question": "Standardowy okres testów i rozruchu maszyn w polisie EAR (o ile nie uzgodniono inaczej) wynosi maksymalnie:",
        "answers": [
            "72 godziny",
            "4 tygodnie (około 30 dni)",
            "12 miesięcy",
            "3 miesiące"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 51
    },
    {
        "id": 452,
        "question": "Zgodnie z rozporządzeniem Ministra Finansów z 19 września 2024 r., minimalna suma gwarancyjna obowiązkowego ubezpieczenia OC brokera ubezpieczeniowego na wszystkie zdarzenia w okresie ubezpieczenia wynosi:",
        "answers": [
            "1 234 210 Euro",
            "1 564 000 Euro",
            "2 315 610 Euro",
            "3 128 000 Euro"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 52
    },
    {
        "id": 453,
        "question": "Zgodnie z przepisami ustawy o ubezpieczeniach obowiązkowych, UFG i PBUK, umowa obowiązkowego ubezpieczenia OC rolników, określa:",
        "answers": [
            "minimalną sumę ubezpieczenia",
            "minimalną sumę gwarancyjną",
            "sumę ubezpieczenia",
            "sumę gwarancyjną"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 53
    },
    {
        "id": 454,
        "question": "Reprezentant do spraw roszczeń ustanowiony przez zakład ubezpieczeń, wykonuje swoje obowiązki na podstawie:",
        "answers": [
            "decyzji Przewodniczącego Komisji Nadzoru Finansowego",
            "decyzji Prezesa Urzędu Ochrony Konkurencji i Konsumentów",
            "decyzji Ministra Finansów",
            "pełnomocnictwa udzielonego przez zakład ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 54
    },
    {
        "id": 455,
        "question": "W umowie ubezpieczenia na życie zawartej na cudzy rachunek oświadczenie ubezpieczonego, że chce skorzystać z zastrzeżenia na jego rzecz ochrony ubezpieczeniowej, powinno obejmować:",
        "answers": [
            "składkę",
            "sumę ubezpieczenia",
            "zakres ochrony określony w OWU",
            "składkę, sumę ubezpieczenia i zakres ochrony określony w OWU"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 55
    },
    {
        "id": 456,
        "question": "W ubezpieczeniu BI metoda gross profit (zysk brutto), zysk brutto definiuje się jako:",
        "answers": [
            "wyłącznie zysk netto plus amortyzacja",
            "przychody ze sprzedaży bez żadnych potrąceń",
            "obrót pomniejszony o koszty zmienne (czyli zysk plus koszty stałe)",
            "przychody minus wszystkie koszty operacyjne"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 56
    },
    {
        "id": 457,
        "question": "Za szkody powstałe wskutek trzęsienia ziemi zakład ubezpieczeń, z tytułu umowy obowiązkowego ubezpieczenia budynków rolniczych:",
        "answers": [
            "odpowiada z mocy prawa",
            "nie odpowiada",
            "odpowiada jeżeli strony umowy ubezpieczenia tak postanowią",
            "odpowiada wyłącznie za szkody powstałe w promieniu 1 kilometra od epicentrum trzęsienia"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 57
    },
    {
        "id": 458,
        "question": "Obowiązek zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych nie ciąży na posiadaczu:",
        "answers": [
            "przyczepy",
            "samochodu osobowego z kierownicą zamontowaną po prawej stronie",
            "hulajnogi elektrycznej",
            "motoroweru"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 58
    },
    {
        "id": 459,
        "question": "Polisa BI pokrywa również dodatkowe koszty poniesione w celu przyspieszenia wznowienia działalności i ograniczenia straty (tzw. zwiększone koszty działalności), pod warunkiem że:",
        "answers": [
            "nie przekraczają 10% sumy ubezpieczenia",
            "zostały poniesione po upływie okresu odszkodowawczego",
            "są celowe i przyczyniają się do zmniejszenia wielkości utraconego zysku",
            "ubezpieczony zawiadomił ubezpieczyciela przed ich poniesieniem"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 59
    },
    {
        "id": 460,
        "question": "Zakład ubezpieczeń ustala składkę ubezpieczeniową w wysokości, która zapewnia co najmniej:",
        "answers": [
            "długoterminową wypłacalność zakładu ubezpieczeń",
            "wykonanie wszystkich zobowiązań z umów ubezpieczenia",
            "wykonanie wszystkich zobowiązań z umów ubezpieczenia i pokrycie kosztów wykonywania działalności ubezpieczeniowej zakładu ubezpieczeń",
            "wykonanie wszystkich zobowiązań z umów ubezpieczenia, pokrycie kosztów wykonywania działalności ubezpieczeniowej i godziwy zysk zakładu ubezpieczeń"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 60
    },
    {
        "id": 461,
        "question": "Termin ALOP w ubezpieczeniach budowlano-montażowych oznacza:",
        "answers": [
            "klauzulę dotyczącą wadliwego projektu",
            "specjalny fundusz rezerwowy na pokrycie szkód w kontraktach budowlanych",
            "ubezpieczenie utraconego zysku wskutek opóźnienia zakończenia inwestycji z powodu szkody materialnej",
            "limit odpowiedzialności za szkody katastroficzne w polisie CAR"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 61
    },
    {
        "id": 462,
        "question": "W umowie ubezpieczenia majątkowego przedmiotem ubezpieczenia może być:",
        "answers": [
            "jedynie własność i inne prawa majątkowe, z wyłączeniem praw ściśle osobistych",
            "wszelkie prawa majątkowe, w których posiadanie ubezpieczony wszedł zgodnie z prawem",
            "każdy interes majątkowy, który nie jest sprzeczny z prawem i daje się ocenić w pieniądzu",
            "każda forma władania nieruchomościami, ruchomościami i prawami majątkowymi"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 62
    },
    {
        "id": 463,
        "question": "Zakazane jest:",
        "answers": [
            "zastosowanie przez zakład ubezpieczeń kryterium płci w kalkulowaniu składek ubezpieczeniowych i świadczeń",
            "różnicowanie składek ubezpieczeniowych i świadczeń do celów ubezpieczeń i związanych z nimi usług finansowych ze względu na ciążę i macierzyństwo",
            "zażądanie przez zakład ubezpieczeń, aby ubezpieczony lub osoba, na rachunek której ma zostać zawarta umowa ubezpieczenia, poddali się badaniom lekarskim lub badaniom diagnostycznym",
            "uzyskanie przez zakład ubezpieczeń informacji od podmiotów wykonujących działalność leczniczą, które udzielały świadczeń zdrowotnych ubezpieczonemu lub osobie, na rachunek której ma zostać zawarta umowa ubezpieczenia"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 63
    },
    {
        "id": 464,
        "question": "Wykonywanie dystrybucji ubezpieczeń zgodnie z najlepiej pojętym interesem klientów:",
        "answers": [
            "dotyczy wyłącznie brokera ubezpieczeniowego",
            "dotyczy wyłącznie zakładu ubezpieczeń",
            "dotyczy każdego dystrybutora ubezpieczeń",
            "nie dotyczy agenta ubezpieczeniowego i agenta oferującego ubezpieczenia uzupełniające"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 64
    },
    {
        "id": 465,
        "question": "Szkoda powstała podczas i w związku z bezpośrednim załadowywaniem lub rozładowywaniem pojazdu mechanicznego:",
        "answers": [
            "jest objęta obowiązkowym ubezpieczeniem OC posiadaczy pojazdów mechanicznych z mocy prawa",
            "jest objęta obowiązkowym ubezpieczeniem OC posiadaczy pojazdów mechanicznych z mocy prawa, ale tylko w stosunku do samochodów ciężarowych",
            "może być objęta obowiązkowym ubezpieczeniem OC posiadaczy pojazdów mechanicznych, na mocy porozumienia stron umowy tego ubezpieczenia",
            "nie jest w ogóle objęta obowiązkowym ubezpieczeniem OC posiadaczy pojazdów mechanicznych"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 65
    },
    {
        "id": 466,
        "question": "Klauzula indeksacyjna (inflacyjna) w ubezpieczeniu mienia powoduje:",
        "answers": [
            "zmianę wysokości składki w zależności od szkodowości",
            "podwyższanie sumy ubezpieczenia w trakcie trwania umowy, zgodnie ze wskaźnikiem inflacji, aby uniknąć niedoubezpieczenia",
            "obniżenie sumy ubezpieczenia o amortyzację",
            "automatyczną aktualizację wartości mienia po szkodzie"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 66
    },
    {
        "id": 467,
        "question": "Który z poniższych elementów NIE jest zazwyczaj objęty Sekcją I polisy CAR?",
        "answers": [
            "materiały budowlane dostarczone na plac budowy",
            "tymczasowe konstrukcje pomocnicze (rusztowania, szalunki)",
            "wyposażenie i narzędzia budowlane należące do wykonawcy",
            "dokumentacja projektowa i plany budowlane"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 67
    },
    {
        "id": 468,
        "question": "Na podstawie obowiązujących przepisów, wskaż w którym obowiązkowym ubezpieczeniu OC wysokość minimalnej sumy gwarancyjnej została wyrażona w Euro, tj. w oficjalnej walucie części państw Unii Europejskiej:",
        "answers": [
            "obowiązkowym ubezpieczeniu OC przedsiębiorców wykonujących obsługę naziemną za szkody powstałe w związku z prowadzoną przez siebie działalnością lotniczą",
            "obowiązkowym ubezpieczeniu OC osoby eksploatującej urządzenie jądrowe",
            "obowiązkowym ubezpieczeniu OC przedsiębiorców wykonujących działalność z zakresu usługowego prowadzenia ksiąg rachunkowych",
            "obowiązkowym ubezpieczeniu OC instytucji zapewniających służby żeglugi powietrznej za szkody powstałe w związku z prowadzoną przez siebie działalnością lotniczą"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 68
    },
    {
        "id": 469,
        "question": "Na podstawie regulacji ustawowych Minister Finansów uregulował we właściwym rozporządzeniu szczegółowy zakres obowiązkowego ubezpieczenia odpowiedzialności cywilnej:",
        "answers": [
            "sterników motorowodnych użytkujących silniki zaburtowe spalinowe o mocy przekraczającej 5 KM",
            "przedsiębiorcy za szkody wyrządzone podczas wykonywania czynności detektywa",
            "trenerów i behawiorystów kotów rasowych wpisanych do Rejestru Związku Felinologicznego",
            "operatorów wyciągów wakeboardowych, których konstrukcja umożliwia uzyskanie na wyciągu prędkości przekraczającej 20 km/h"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 69
    },
    {
        "id": 470,
        "question": "W polisie EAR szkody powstałe podczas transportu montowanego urządzenia do miejsca montażu:",
        "answers": [
            "objęte są tylko w przypadku transportu lotniczego",
            "są zawsze automatycznie objęte ochroną w pełnym zakresie",
            "standardowo są wyłączone i wymagają oddzielnego ubezpieczenia transportowego",
            "pokrywane są tylko jeśli transport odbywa się środkami należącymi do ubezpieczonego"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 70
    },
    {
        "id": 471,
        "question": "Polisa EAR (Erection All Risks) znajduje zastosowanie przede wszystkim przy ubezpieczaniu:",
        "answers": [
            "budowy budynków mieszkalnych i biurowych",
            "obiektów infrastruktury drogowej (np. dróg, mostów)",
            "eksploatacji maszyn w ruchu ciągłym",
            "montażu maszyn, instalacji i urządzeń (projektów montażowych i rozruchowych)"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 71
    },
    {
        "id": 472,
        "question": "Ubezpieczeniem z działu I grupy 3 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej jest:",
        "answers": [
            "ubezpieczenie na życie z udziałem w zysku",
            "ubezpieczenie na dożycie z udziałem w zysku",
            "ubezpieczenie na życie i dożycie z udziałem w zysku",
            "ubezpieczenia na życie, w których świadczenie zakładu ubezpieczeń jest ustalane w oparciu o określone indeksy lub inne wartości bazowe"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 72
    },
    {
        "id": 473,
        "question": "Wynikający z przepisów Kodeksu cywilnego dwuletni okres od zawarcia umowy ubezpieczenia, w którym ubezpieczyciel jest zwolniony z obowiązku wypłaty świadczenia w razie samobójstwa ubezpieczonego, może być skrócony w OWU maksymalnie do:",
        "answers": [
            "3 miesięcy",
            "6 miesięcy",
            "12 miesięcy",
            "18 miesięcy"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 73
    },
    {
        "id": 474,
        "question": "Przynależność zakładów ubezpieczeń do Polskiej Izby Ubezpieczeń była i jest:",
        "answers": [
            "dobrowolna zmieniona następnie na obowiązkową",
            "obowiązkowa zmieniona następnie na dobrowolną",
            "obowiązkowa",
            "dobrowolna"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 74
    },
    {
        "id": 475,
        "question": "Zasada „proximate cause” (dominującej przyczyny) w ubezpieczeniach oznacza, że: 76–100",
        "answers": [
            "o odpowiedzialności za szkodę decyduje dominująca przyczyna zdarzenia (główna, wiodąca przyczyna szkody)",
            "odszkodowanie wypłacane jest zawsze do pełnej sumy ubezpieczenia bez względu na przyczynę szkody",
            "ubezpieczyciel odpowiada tylko za pierwsze zdarzenie w łańcuchu przyczynowym",
            "w przypadku wielu przyczyn, każda jest traktowana oddzielnie i wypłacane są oddzielne odszkodowania"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 75
    },
    {
        "id": 476,
        "question": "Zgodnie z rozporządzeniem MF wysokość minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia sponsora i badacza w związku z prowadzeniem badania klinicznego wyrobu lub badania działania wyrobu medycznego do diagnostyki in vitro jest uzależniona od:",
        "answers": [
            "procentowego udziału młodocianych w całkowitej liczbie uczestników badania klinicznego",
            "stopnia naukowego lekarza sprawującego nadzór nad badaniem klinicznym",
            "liczby pielęgniarek i położnych biorących udział w badaniu klinicznym",
            "liczby uczestników danego badania"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 76
    },
    {
        "id": 477,
        "question": "Właściwym organem w sprawach nadzoru w zakresie przewidzianym przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2022/2554 z dnia 14 grudnia 2022 r. w sprawie operacyjnej odporności cyfrowej sektora finansowego jest:",
        "answers": [
            "Ministerstwo Cyfryzacji",
            "Naukowa i Akademicka Sieć Komputerowa (NASK)",
            "Komisja Nadzoru Finansowego",
            "Agencja Bezpieczeństwa Wewnętrznego"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 77
    },
    {
        "id": 478,
        "question": "Dane otrzymane przez Polskie Biuro Ubezpieczycieli Komunikacyjnych w celu realizacji zadań ustawowych są przez PBUK przechowywane przez:",
        "answers": [
            "1 rok",
            "3 lata",
            "5 lat",
            "21 lat"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 78
    },
    {
        "id": 479,
        "question": "Jeśli na podstawie umowy ubezpieczenia ubezpieczyciel nie pokrywa straty za ustalony początkowy okres przerwy w działalności (np. pierwsze 5, 10 czy 14 dni przerwy są na ryzyku ubezpieczonego) to mamy do czynienia z:",
        "answers": [
            "maksymalnym okresem odpowiedzialności ubezpieczyciela za skutki szkody",
            "karencją w ubezpieczeniu utraty zysku",
            "okresem prób i testów w ubezpieczeniu CAR/EAR",
            "franszyzą czasową (okresem wyczekiwania) w ubezpieczeniu utraty zysku"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 79
    },
    {
        "id": 480,
        "question": "Wskazanie przez ubezpieczającego osoby uprawnionej do otrzymania sumy ubezpieczenia w razie śmierci ubezpieczonego (będącego jednocześnie ubezpieczającym) może być zmienione przez ubezpieczającego:",
        "answers": [
            "w każdym czasie",
            "w okresach wskazanych w OWU",
            "w każdym czasie, ale z wyłączeniem przypadków gdy ubezpieczenie stanowi zabezpieczenie spłaty zadłużenia przez ubezpieczającego",
            "w każdym czasie, ale nie wcześniej niż po upływie 6 miesięcy od zawarcia umowy ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 80
    },
    {
        "id": 481,
        "question": "W ubezpieczeniu majątkowym ubezpieczyciel nie odpowiada za szkody wyrządzone w wyniku rażącego niedbalstwa przez ubezpieczającego, chyba że umowa lub ogólne warunki ubezpieczenia stanowią inaczej lub:",
        "answers": [
            "jeżeli ubezpieczający jest konsumentem, a nie wyłączenie rażącego niedbalstwa nie zostało z nim indywidualnie uzgodnione",
            "jeżeli ubezpieczający nie otrzymał OWU",
            "jeżeli zapłata odszkodowania odpowiada w danych okolicznościach względom słuszności",
            "jeżeli odmowa wypłaty odszkodowania stanowiłaby naruszenie dobrych obyczajów"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 81
    },
    {
        "id": 482,
        "question": "Wyłączenie w trakcie trwania umowy obowiązkowego ubezpieczenia budynków rolniczych jednego z budynków z ubezpieczenia skutkuje:",
        "answers": [
            "możliwością wypowiedzenia umowy przez zakład ubezpieczeń",
            "możliwością wypowiedzenia umowy przez rolnika",
            "obniżeniem sumy ubezpieczenia",
            "rozwiązaniem umowy"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 82
    },
    {
        "id": 483,
        "question": "W umowie ubezpieczenia odpowiedzialności cywilnej, jeżeli strony wprost nie określiły rodzaju zdarzeń objętych ochroną ubezpieczeniową, ubezpieczyciel odpowiada za szkody:",
        "answers": [
            "będące następstwem przewidzianego w umowie zdarzenia, które miało miejsce w okresie ubezpieczenia",
            "powstałe w okresie ubezpieczenia",
            "ujawnione w okresie ubezpieczenia",
            "zgłoszone w okresie ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 83
    },
    {
        "id": 484,
        "question": "Jeżeli ubezpieczający umyślnie udzielił niezgodnych z prawdą odpowiedzi na pytania zadawane w pismach ubezpieczyciela przed zawarciem umowy ubezpieczenia, ubezpieczyciel jest wolny od odpowiedzialności:",
        "answers": [
            "zawsze bez żadnych ograniczeń",
            "zawsze bez żadnych ograniczeń, ale tylko w okresie pierwszych trzech lat od zawarcia umowy ubezpieczenia",
            "za skutki okoliczności, które wskutek udzielenia nieprawdziwych odpowiedzi nie zostały podane do jego wiadomości",
            "jeżeli wykaże, że przy udzieleniu prawdziwych odpowiedzi nie zawarłby umowy (nie przyjąłby ryzyka do ubezpieczenia)"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 84
    },
    {
        "id": 485,
        "question": "Zakład ubezpieczeń ma obowiązek używania w nazwie lub firmie wyrazów wyróżniających rodzaj działalności jeżeli wykonuje:",
        "answers": [
            "działalność, o której mowa w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "działalność, o której mowa w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "jednocześnie działalność, o której mowa w dziale I oraz w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "przepisy prawa nie określają takiego obowiązku"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 85
    },
    {
        "id": 486,
        "question": "Dystrybucja ubezpieczeń nie obejmuje:",
        "answers": [
            "czynności przygotowawczych zmierzających do zawarcia umowy ubezpieczenia",
            "zawierania umów gwarancji ubezpieczeniowych w imieniu zakładu ubezpieczeń",
            "organizowania i nadzorowania czynności agencyjnych u agenta ubezpieczeniowego lub agenta oferującego ubezpieczenia uzupełniające",
            "obsługi roszczeń kierowanych do zakładu ubezpieczeń, wyceny szkód i sporządzania ekspertyz związanych z tymi szkodami"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 86
    },
    {
        "id": 487,
        "question": "Regulacje wyznaczające katalog szkód wyłączających odpowiedzialność zakładu ubezpieczeń w obowiązkowym ubezpieczeniu OC przedsiębiorców wykonujących działalność z zakresu usługowego prowadzenia ksiąg rachunkowych zostały zawarte w przepisach:",
        "answers": [
            "ustawy o działalności ubezpieczeniowej",
            "ustawy o przedsiębiorcach wykonujących działalność księgową",
            "zarządzenia Prezydenta Rzeczypospolitej Polskiej w sprawie wymogów dla przedsiębiorców wykonujących działalność księgową",
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej przedsiębiorców wykonujących działalność z zakresu usługowego prowadzenia ksiąg rachunkowych"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 87
    },
    {
        "id": 488,
        "question": "W lokalizacji mamy trzy identyczne budynki, każdy o wartości 10 mln zł, każdy o wysokości 15 m, wszystkie oddalone od siebie wzajemnie nie dalej niż 10 m. Jeden budynek jest wyposażony w tryskacze. Scenariusz MPL (Maximum Possible Loss) wynosi:",
        "answers": [
            "30 mln zł",
            "20 mln zł",
            "25 mln zł",
            "10 mln zł"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 88
    },
    {
        "id": 489,
        "question": "Zakład ubezpieczeń przekazuje, corocznie, sprawozdanie dotyczące rozpatrywania reklamacji oraz liczby wystąpień klientów tych podmiotów na drogę postępowania sądowego w wyniku nierozpatrzenia reklamacji zgodnie z wolą tych klientów:",
        "answers": [
            "Rzecznikowi Finansowemu",
            "Rzecznikowi Praw Obywatelskich",
            "Zastępcy Przewodniczącego Komisji Nadzoru Finansowego",
            "Prezesowi Urzędu Ochrony Konkurencji i Konsumentów"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 89
    },
    {
        "id": 490,
        "question": "Stronami umowy gwarancji ubezpieczeniowej są co najmniej:",
        "answers": [
            "zakład ubezpieczeń, dłużnik, zobowiązany i bank",
            "zakład ubezpieczeń, dłużnik i zobowiązany",
            "zakład ubezpieczeń, beneficjent i zobowiązany",
            "zakład ubezpieczeń, beneficjent, zobowiązany i bank"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 90
    },
    {
        "id": 491,
        "question": "Standardowa polisa CAR może obejmować wielu ubezpieczonych. Typowo ubezpieczonymi (objętymi ochroną) są:",
        "answers": [
            "wszystkie strony projektu: wykonawca (generalny), inwestor (zamawiający) oraz ewentualni podwykonawcy",
            "wyłącznie podmiot wskazany z nazwy w polisie",
            "tylko inwestor (właściciel budowy)",
            "tylko generalny wykonawca robót"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 91
    },
    {
        "id": 492,
        "question": "Aktualne ogólne warunki ubezpieczenia oraz inne wzorce umowy ubezpieczenia:",
        "answers": [
            "nie są publicznie ujawniane ze względu na zachowanie konkurencyjności rynku ubezpieczeń",
            "nie są publicznie ujawniane ale zakład ubezpieczeń powinien umożliwić do nich dostęp wszystkim osobom zainteresowanym i Rzecznikowi Finansowemu",
            "zakład ubezpieczeń ma obowiązek zamieszczania na swojej stronie internetowej",
            "zakład ubezpieczeń przekazuje Rzecznikowi Finansowemu, który kierując się ochroną klienta może je publicznie ujawniać"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 92
    },
    {
        "id": 493,
        "question": "Ubezpieczeniowy fundusz kapitałowy w ramach umowy ubezpieczenia na życie związanej z takim funduszem to:",
        "answers": [
            "fundusz będący odrębną osobą prawną, zarządzany przez zakład ubezpieczeń",
            "fundusz zarządzany przez towarzystwo funduszy inwestycyjnych",
            "zbiór aktywów zakładu ubezpieczeń zarządzany odrębnie przez wyznaczonego doradcę inwestycyjnego",
            "wydzielony fundusz aktywów stanowiący rezerwę tworzoną ze składek ubezpieczeniowych, inwestowany w sposób określony w umowie ubezpieczenia"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 93
    },
    {
        "id": 494,
        "question": "Jeśli ubezpieczony po szkodzie wznowi produkcję w innej lokalizacji lub wykorzysta zapasowe moce, ograniczając tym samym spadek zysku, to odszkodowanie z polisy BI:",
        "answers": [
            "zostanie wypłacone w pełnej pierwotnie prognozowanej wysokości, jak gdyby przerwa trwała dłużej",
            "zostanie wypłacone tylko w wysokości rzeczywiście poniesionej straty (pomniejszonej o kwotę „zaoszczędzoną” dzięki podjętym działaniom)",
            "nie zostanie wypłacone w ogóle, bo działalność została wznowiona przed końcem okresu odszkodowawczego",
            "zostanie wypłacone powiększone o zwrot kosztów relokacji produkcji"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 94
    },
    {
        "id": 495,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, w postaci ustandaryzowanego dokumentu (wzoru) są przekazywane informacje o proponowanym produkcie ubezpieczeniowym, którego przedmiotem są ryzyka wymienione:",
        "answers": [
            "w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "wyłącznie w dziale III w grupach 3 i 10 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "wyłącznie w ustawie o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polskim Biurze Ubezpieczycieli Komunikacyjnych",
            "w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 95
    },
    {
        "id": 496,
        "question": "Zgodnie z obowiązującymi regulacjami, obowiązek ubezpieczenia odpowiedzialności cywilnej pośrednika kredytu hipotecznego powstaje:",
        "answers": [
            "nie później niż w dniu poprzedzającym dzień zgłoszenia szkody wyrządzonej w związku z wykonywaną działalnością w zakresie pośrednictwa kredytu hipotecznego",
            "nie później niż w dniu poprzedzającym dzień rozpoczęcia wykonywania działalności w zakresie pośrednictwa kredytu hipotecznego",
            "z dniem publikacji ustawy o kredycie hipotecznym",
            "z dniem poprzedzającym dzień wejścia w życie rozporządzenia Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia OC kredytodawcy i pośrednika kredytu hipotecznego"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 96
    },
    {
        "id": 497,
        "question": "Maksymalna możliwa szkoda (MPL – Maximum Possible Loss) w ocenie ryzyka pożarowego oznacza:",
        "answers": [
            "najbardziej prawdopodobną wielkość szkody przy uwzględnieniu częściowego działania zabezpieczeń",
            "średnią oczekiwaną wartość szkody w danym okresie",
            "największą teoretycznie możliwą stratę (scenariusz najgorszego przypadku), zazwyczaj przy założeniu nieskuteczności wszystkich aktywnych zabezpieczeń",
            "sumę wszystkich szkód, które wystąpiły w przeszłości w danym obiekcie"
        ],
        "correct": 2,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 97
    },
    {
        "id": 498,
        "question": "Ubezpieczenie utraty zysku (BI) najczęściej zawierane jest na sumę ubezpieczenia odpowiadającą:",
        "answers": [
            "wartości księgowej majątku trwałego przedsiębiorstwa",
            "prognozowanemu zyskowi brutto firmy za pełen rok (okres 12 miesięcy)",
            "łącznej kwocie przychodów ze sprzedaży za ostatni rok",
            "planowanemu zyskowi netto przedsiębiorstwa za najbliższy rok"
        ],
        "correct": 1,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 98
    },
    {
        "id": 499,
        "question": "Obciążenie ogniowe (fire load) obiektu wyrażone w (MJ/m²) określa:",
        "answers": [
            "ilość energii cieplnej, jaka może wydzielić się przy całkowitym spaleniu materiałów palnych na 1 m² powierzchni",
            "maksymalną temperaturę pożaru, jaka może wytrzymać przegroda budynku",
            "szybkość rozprzestrzeniania się ognia w metrach na minutę",
            "intensywność akcji gaśniczej wymaganej do ugaszenia pożaru"
        ],
        "correct": 0,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 99
    },
    {
        "id": 500,
        "question": "Taryfy oraz wysokość składki ubezpieczeniowej za obowiązkowe ubezpieczenie odpowiedzialności cywilnej podmiotu wykonującego działalność leczniczą ustala:",
        "answers": [
            "Zakład Ubezpieczeń Społecznych",
            "Minister Finansów i Gospodarki w porozumieniu z Ministrem Zdrowia",
            "Narodowy Fundusz Zdrowia",
            "zakład ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LISTOPAD 2025",
        "sourceNumber": 100
    },
    // ===== LUTY 2026 =====
    {
        "id": 501,
        "question": "W określonych przypadkach opłatę za brak zawarcia umowy obowiązkowego ubezpieczenia OC rolników może umorzyć:",
        "answers": [
            "Ubezpieczeniowy Fundusz Gwarancyjny",
            "Komisja Nadzoru Finansowego",
            "Rzecznik Finansowy",
            "Minister Rolnictwa i Rozwoju Wsi"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 1
    },
    {
        "id": 502,
        "question": "Przepisy właściwego rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej radców prawnych, wyznaczają:",
        "answers": [
            "cztery wysokości minimalnej sumy gwarancyjnej tego ubezpieczenia zależne od liczby pracowników zatrudnionych w kancelarii radcowskiej",
            "trójstopniowy mechanizm określania wysokości minimalnej sumy gwarancyjnej tego ubezpieczenia uzależniony od stażu pracy prawniczego",
            "jedną wysokość minimalnej sumy gwarancyjnej tego ubezpieczenia",
            "osiem wysokości minimalnej sumy gwarancyjnej tego ubezpieczenia uzależnionych odpowiednio od rodzaju porad i konsultacji prawnych, liczby pracowników zatrudnionych w kancelarii radcowskiej oraz miejsca wykonywania zawodu"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 2
    },
    {
        "id": 503,
        "question": "W razie zaistnienia zdarzenia objętego obowiązkowym ubezpieczeniem OC posiadaczy pojazdów mechanicznych osoba w nim uczestnicząca jest obowiązana do powiadomienia Policji:",
        "answers": [
            "o ile doszło do wypadku z ofiarami w ludziach lub do wypadku powstałego w okolicznościach nasuwających przypuszczenie, że zostało popełnione przestępstwo",
            "o ile doszło do wypadku wyłącznie wskutek zderzenia się dwóch lub więcej pojazdów",
            "o ile doszło do wypadku w terenie zabudowanym",
            "w każdym przypadku, niezależnie od okoliczności wypadku"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 3
    },
    {
        "id": 504,
        "question": "Według danych KNF, na koniec roku 2024, liczba krajowych zakładów prowadzących działalność w zakresie ubezpieczeń na życie wynosiła:",
        "answers": [
            "13",
            "17",
            "20",
            "24"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 4
    },
    {
        "id": 505,
        "question": "Standardowa polisa ubezpieczenia od kradzieży z włamaniem i rabunku nie obejmuje:",
        "answers": [
            "kradzieży, przy której sprawca dostał się do ubezpieczonego pomieszczenia po uprzednim pokonaniu zabezpieczeń z użyciem siły",
            "rabunku, czyli kradzieży dokonanej z użyciem przemocy lub groźby jej użycia wobec osoby",
            "kradzieży, przy której brak jest widocznych śladów włamania do ubezpieczonego pomieszczenia",
            "usiłowania kradzieży z włamaniem, w wyniku którego doszło do uszkodzenia zabezpieczeń pomieszczenia"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 5
    },
    {
        "id": 506,
        "question": "Regres ubezpieczeniowy (roszczenie zwrotne ubezpieczyciela) oznacza, że po wypłacie odszkodowania:",
        "answers": [
            "odpowiedzialność za pokrycie szkody przechodzi na UFG, który refinansuje ubezpieczycielowi wypłaconą kwotę",
            "ubezpieczyciel zwraca się do ubezpieczonego o zwrot wypłaconego odszkodowania, np. w formie rat, celem uzupełnienia sumy ubezpieczenia",
            "ubezpieczony ma prawo dochodzić od sprawcy szkody dodatkowego odszkodowania, nawet jeśli otrzymał już wypłatę z polisy",
            "ubezpieczyciel może dochodzić od sprawcy szkody (osoby trzeciej odpowiedzialnej za szkodę) zwrotu wypłaconej poszkodowanemu kwoty, wstępując w prawa poszkodowanego"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 6
    },
    {
        "id": 507,
        "question": "Zgody ubezpieczonego na życie wymaga zmiana tej umowy:",
        "answers": [
            "na niekorzyść tego ubezpieczonego",
            "na niekorzyść ubezpieczającego",
            "w zakresie składki",
            "w jakimkolwiek zakresie"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 7
    },
    {
        "id": 508,
        "question": "Polisa kradzieżowa stawia wymogi co do zabezpieczeń. W której sytuacji ubezpieczyciel może odmówić wypłaty odszkodowania za kradzież z włamaniem?",
        "answers": [
            "gdy ubezpieczony zgłosił szkodę z opóźnieniem przekraczającym 24 godziny od momentu jej zauważenia",
            "gdy do włamania doszło w porze nocnej, poza godzinami pracy przedsiębiorstwa",
            "gdy skradzione mienie miało ponad 5 lat i było już zamortyzowane w księgach",
            "gdy w momencie zdarzenia system alarmowy na obiekcie nie był aktywowany, mimo że wymagały tego warunki umowy ubezpieczenia"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 8
    },
    {
        "id": 509,
        "question": "W przypadku szkody całkowitej w ubezpieczeniu mienia, pozostałości (tzw. resztki) uszkodzonego mienia:",
        "answers": [
            "pozostają własnością ubezpieczonego, a ich wartość szacunkowa jest odliczana od należnego odszkodowania",
            "przechodzą automatycznie na własność ubezpieczyciela po wypłacie odszkodowania za szkodę całkowitą",
            "muszą zostać zniszczone lub zutylizowane przez ubezpieczonego przed wypłatą odszkodowania",
            "nie mają wpływu na wysokość ustalanego odszkodowania za szkodę"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 9
    },
    {
        "id": 510,
        "question": "Umowa obowiązkowego ubezpieczenia OC rolników ulega rozwiązaniu:",
        "answers": [
            "z dniem wymeldowania się przez rolnika z pobytu stałego",
            "z chwilą kiedy użytki i grunty rolne tracą charakter gospodarstwa rolnego",
            "z dniem zakończenia rozbiórki ostatniego budynku wchodzącego w skład gospodarstwa rolnego",
            "z dniem przejścia rolnika na emeryturę"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 10
    },
    {
        "id": 511,
        "question": "Wpisowi do rejestru pośredników ubezpieczeniowych nie podlega:",
        "answers": [
            "osoba wykonująca czynności dystrybucyjne zakładu ubezpieczeń",
            "agent oferujący ubezpieczenia uzupełniające",
            "broker reasekuracyjny",
            "broker ubezpieczeniowy"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 11
    },
    {
        "id": 512,
        "question": "Osoba poszkodowana przez niezidentyfikowany pojazd mechaniczny zgłasza swoje roszczenie do Ubezpieczeniowego Funduszu Gwarancyjnego poprzez:",
        "answers": [
            "zakład ubezpieczeń wyznaczony przez UFG do przyjmowania roszczeń",
            "wyłącznie Powszechny Zakład Ubezpieczeń S.A.",
            "zakłady ubezpieczeń wskazane w rozporządzeniu Ministra Finansów i Gospodarki",
            "żadna z powyższych odpowiedzi nie jest prawidłowa"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 12
    },
    {
        "id": 513,
        "question": "Według danych raportu PIU z roku 2025 „Ubezpieczenia w liczbach 2.0”, w roku 2024, wynik techniczny polskiego rynku ubezpieczeń, w Dziale II, odnotował:",
        "answers": [
            "wzrost rok do roku o 8,6%",
            "wzrost rok do roku o 10,3%",
            "spadek rok do roku o 30,4%",
            "spadek rok do roku o 7,5%"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 13
    },
    {
        "id": 514,
        "question": "Właściwe rozporządzenie Ministra Finansów i Gospodarki w sprawie obowiązkowego ubezpieczenia OC operatora systemu bezzałogowego statku powietrznego (tzw. drona), zawiera regulacje dotyczące:",
        "answers": [
            "zasad wpisu operatorów systemu do rejestru bezzałogowych statków powietrznych",
            "wysokości składki ubezpieczeniowej w przedmiotowym ubezpieczeniu",
            "minimalnej sumy gwarancyjnej tego ubezpieczenia",
            "kategorii i klasyfikacji lotów wykonywanych z użyciem dronów o masie startowej przekraczającej 25 kg"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 14
    },
    {
        "id": 515,
        "question": "Pełnomocnictwo udzielone przez przedsiębiorcę, które obejmuje umocowanie do czynności sądowych i pozasądowych, jakie są związane z prowadzeniem przedsiębiorstwa to:",
        "answers": [
            "prokura",
            "plenipotencja",
            "prokuratoria",
            "pełnomocnictwo generalne"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 15
    },
    {
        "id": 516,
        "question": "W razie wątpliwości umowę ubezpieczenia uważa się za zawartą z chwilą:",
        "answers": [
            "zapłaty składki",
            "doręczenia ubezpieczającemu dokumentu ubezpieczenia",
            "akceptacji wniosku o ubezpieczenie przez ubezpieczyciela",
            "wystawienia dokumentu ubezpieczenia przez ubezpieczyciela"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 16
    },
    {
        "id": 517,
        "question": "Co oznacza suma ubezpieczenia w ubezpieczeniu od ognia i innych zdarzeń losowych?",
        "answers": [
            "koszt zabezpieczeń przeciwpożarowych",
            "wartość odtworzeniową (nową) ubezpieczonego mienia",
            "wartość księgową netto ubezpieczonego mienia",
            "kwotę, którą ubezpieczyciel może maksymalnie wypłacić w ramach polisy"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 17
    },
    {
        "id": 518,
        "question": "„Rabunek” w rozumieniu typowych warunków ubezpieczenia mienia oznacza:",
        "answers": [
            "zabór mienia dokonany z użyciem przemocy fizycznej lub groźby natychmiastowego jej użycia wobec osoby",
            "kradzież polegającą na włamaniu do zamkniętego pomieszczenia",
            "działanie polegające na oszustwie lub wyłudzeniu mienia od ubezpieczonego",
            "działanie polegające na niepostrzeżonym zabraniu mienia bez wiedzy właściciela"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 18
    },
    {
        "id": 519,
        "question": "Ubezpieczyciel, który dokonał zmiany taryfy składek za obowiązkowe ubezpieczenie OC rolników:",
        "answers": [
            "ma obowiązek przedstawienia informacji o zmienionych taryfach Komisji Nadzoru Finansowego",
            "ma obowiązek przedstawienia informacji o zmienionych taryfach Prezesowi Urzędu Ochrony Konkurencji i Konsumentów",
            "ma obowiązek przedstawienia informacji o zmienionych taryfach Ministrowi Rolnictwa i Rozwoju Wsi",
            "nie ma w ogóle obowiązku przedstawienia informacji o zmienionych taryfach żadnemu z podmiotów wskazanych w lit. a–c"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 19
    },
    {
        "id": 520,
        "question": "Suma gwarancyjna w obowiązkowym ubezpieczeniu OC posiadaczy pojazdów mechanicznych, stanowiąca górną granicę odpowiedzialności zakładu ubezpieczeń, jest określana:",
        "answers": [
            "w umowie obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych",
            "w ustawie o ubezpieczeniach obowiązkowych, UFG i PBUK",
            "w odpowiednim rozporządzeniu ministra właściwego do spraw instytucji finansowej",
            "jako minimalna suma ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 20
    },
    {
        "id": 521,
        "question": "Prowadzący na własny rachunek przedsiębiorstwo lub zakład wprawiany w ruch za pomocą sił przyrody odpowiada za szkody przez ruch przedsiębiorstwa lub zakładu, chyba że:",
        "answers": [
            "szkoda nastąpiła wskutek siły wyższej albo wyłącznie z winy poszkodowanego lub osoby trzeciej, za którą nie ponosi on odpowiedzialności",
            "szkoda nastąpiła wskutek siły wyższej albo z winy osoby trzeciej, za którą nie ponosi on odpowiedzialności lub poszkodowanemu można przypisać przyczynienie do szkody",
            "szkoda nastąpiła wskutek siły wyższej albo z winy osoby trzeciej, za którą nie ponosi on odpowiedzialności lub poszkodowanemu można przypisać istotne przyczynienie do szkody",
            "szkoda nastąpiła wskutek siły wyższej albo z winy poszkodowanego lub osoby, która poszkodowany posługiwał się przy wykonywaniu czynności związanej ze szkodą"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 21
    },
    {
        "id": 522,
        "question": "Broker ubezpieczeniowy może:",
        "answers": [
            "zlecić wykonywanie czynności wymagających specjalistycznej wiedzy innym podmiotom",
            "zlecić innym podmiotom prawo składania i przyjmowania oświadczeń woli w imieniu klientów",
            "pozostawać w stałym stosunku umownym z zakładem ubezpieczeń, zakładem reasekuracji, agentem ubezpieczeniowym lub agentem oferującym ubezpieczenia uzupełniające",
            "posiadać akcje lub udziały zakładu ubezpieczeń, zakładu reasekuracji, agenta ubezpieczeniowego lub agenta oferującego ubezpieczenia uzupełniające"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 22
    },
    {
        "id": 523,
        "question": "Posiadacz zarejestrowanego pojazdu historycznego:",
        "answers": [
            "ma obowiązek zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych na 12 miesięcy",
            "jest zwolniony z obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych, nawet przy wprowadzaniu go do ruchu",
            "ma obowiązek zawrzeć umowę ubezpieczenia OC posiadaczy pojazdów mechanicznych przed wprowadzeniem tego pojazdu do ruchu",
            "jest zwolniony z obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych, jeżeli jest kombatantem lub inwalidą wojennym"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 23
    },
    {
        "id": 524,
        "question": "Czy z tytułu obowiązkowego ubezpieczenia budynków rolniczych przysługuje odszkodowanie za szkody powstałe w budynkach na skutek upadku statku powietrznego?",
        "answers": [
            "tak",
            "nie",
            "tak, z określonymi w ustawie wyłączeniami",
            "nie, ale może być włączone pod określonymi warunkami"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 24
    },
    {
        "id": 525,
        "question": "Ubezpieczeniowy fundusz kapitałowy zgodnie z przepisami ustawy o działalności ubezpieczeniowej i reasekuracyjnej jest podzielony na:",
        "answers": [
            "udziały",
            "jednostki",
            "certyfikaty",
            "kohorty"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 25
    },
    {
        "id": 526,
        "question": "Tzw. zasada proporcji przy niedoubezpieczeniu (ubezpieczeniu mienia na zbyt niską sumę w stosunku do faktycznej wartości) oznacza, że:",
        "answers": [
            "zasada ta ma zastosowanie jedynie przy szkodach całkowitych, gdy suma ubezpieczenia jest niższa od wartości odtworzeniowej mienia",
            "ubezpieczyciel wypłaci pełne odszkodowanie do wysokości sumy ubezpieczenia, niezależnie od tego, że mienie było ubezpieczone na niższą kwotę niż jego wartość",
            "odszkodowanie za szkodę częściową zostanie zmniejszone proporcjonalnie – w takim stosunku, w jakim zadeklarowana suma ubezpieczenia pozostaje do faktycznej wartości mienia",
            "mechanizm proporcjonalnej redukcji stosuje się wyłącznie w ubezpieczeniach na pierwsze ryzyko"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 26
    },
    {
        "id": 527,
        "question": "W razie opłacania składki w ratach, aby niezapłacenie w terminie kolejnej raty składki spowodowało ustanie odpowiedzialności ubezpieczyciela:",
        "answers": [
            "wystarczy bezskuteczne wezwanie do zapłaty w terminie 7 dni",
            "wystarczy bezskuteczne wezwanie do zapłaty w terminie 7 dni z pouczeniem o skutkach braku zapłaty",
            "wystarczy bezskuteczne wezwanie do zapłaty w terminie 7 dni z pouczeniem o skutkach braku zapłaty, jeżeli ogólne warunki ubezpieczenia przewidują taki skutek",
            "konieczne jest bezskuteczne wezwanie do zapłaty w terminie 7 dni z pouczeniem o skutkach braku zapłaty i informacją o sposobie wpłaty, jeżeli ogólne warunki ubezpieczenia przewidują taki skutek"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 27
    },
    {
        "id": 528,
        "question": "Broker ubezpieczeniowy nie ma obowiązku udzielenia porady brokerskiej (w oparciu o rzetelną analizę dostępnych na rynku produktów ubezpieczeniowych w liczbie wystarczającej do opracowania rekomendacji najwłaściwszej umowy):",
        "answers": [
            "jeżeli klientem jest spółka kapitałowa",
            "jeżeli nieprzerwanie współpracuje z klientem dłużej niż 2 lata",
            "w przypadku produktu ubezpieczeniowego, którego przedmiotem są ryzyka wymienione w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "w przypadku umowy ubezpieczenia lub umowy gwarancji ubezpieczeniowej obejmujących duże ryzyka"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 28
    },
    {
        "id": 529,
        "question": "Kodeks cywilny posługuje się pojęciem „ubezpieczyciel”, a ustawy sektorowe pojęciem „zakład ubezpieczeń”, znaczenie tych pojęć jest:",
        "answers": [
            "tożsame",
            "różne (dotyczą różnych podmiotów)",
            "podobne, ale „ubezpieczyciel” jest pojęciem szerszym i obejmuje również zakład reasekuracji",
            "podobne, ale „zakład ubezpieczeń” jest pojęciem szerszym i obejmuje również Zakład Ubezpieczeń Społecznych"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 29
    },
    {
        "id": 530,
        "question": "Typowa polisa budowlano-montażowa (CAR/EAR w tzw. standardzie monachijskim) składa się z następujących III sekcji:",
        "answers": [
            "I – szkody materialne (mienie/roboty na placu budowy); II – mienie otaczające; III – utrata zysku inwestora",
            "I – szkody materialne (mienie/roboty na placu budowy); II – OC wobec osób trzecich; III – mienie otaczające",
            "I – szkody materialne (mienie/roboty na placu budowy); II – OC wobec osób trzecich; III – utrata zysku inwestora",
            "I – szkody materialne inwestora; II – mienie otaczające; III – szkody materialne wykonawców i podwykonawców oraz roboty budowlane"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 30
    },
    {
        "id": 531,
        "question": "Obowiązkami wynikającymi z ustawy z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu, nie są objęci/objęte:",
        "answers": [
            "zakłady ubezpieczeń wykonujące działalność, o której mowa w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "pośrednicy ubezpieczeniowi wykonujący czynności pośrednictwa ubezpieczeniowego w zakresie ubezpieczeń wymienionych w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "pośrednicy ubezpieczeniowi wykonujący czynności pośrednictwa ubezpieczeniowego w zakresie ubezpieczeń wymienionych w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "wszyscy pośrednicy ubezpieczeniowi"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 31
    },
    {
        "id": 532,
        "question": "Pośrednictwo ubezpieczeniowe jest działalnością:",
        "answers": [
            "gospodarczą",
            "gospodarczą na rzecz celów społecznych",
            "non-profit",
            "pożytku publicznego"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 32
    },
    {
        "id": 533,
        "question": "Pierwszy element prawny na ziemiach polskich normatywu na bazie ustawy o ubezpieczeniach majątkowych i osobowych z 1984 roku zorganizowany był w formie:",
        "answers": [
            "zakładu spółdzielczego",
            "spółki akcyjnej",
            "zakładu ubezpieczeń wzajemnych",
            "korporacji"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 33
    },
    {
        "id": 534,
        "question": "Przedmiotem ubezpieczenia majątkowego może być każdy interes majątkowy, który daje się ocenić w pieniądzu i:",
        "answers": [
            "nadaje się do egzekwowania",
            "nie jest sprzeczny z prawem",
            "może być przedmiotem roszczenia dochodzonego przed sądem",
            "nie narusza zasad współżycia społecznego"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 34
    },
    {
        "id": 535,
        "question": "Przepisy właściwego rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej organizatorów imprez masowych, na które wstęp jest odpłatny, określają:",
        "answers": [
            "wysokość maksymalnej sumy gwarancyjnej tego ubezpieczenia",
            "zasady wydawania zezwoleń na przeprowadzanie imprez masowych",
            "termin powstania obowiązku ubezpieczenia",
            "zasady kontroli spełnienia obowiązku ubezpieczenia"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 35
    },
    {
        "id": 536,
        "question": "Konsekwencje (sankcje) niespełnienia obowiązku ubezpieczenia odpowiedzialności cywilnej przedsiębiorcy prowadzącego działalność w zakresie czynności rzeczoznawstwa majątkowego zostały uregulowane w przepisach:",
        "answers": [
            "właściwej uchwały Ministra Finansów w sprawie zasad działania rzeczoznawców majątkowych",
            "właściwego obwieszczenia Prezydenta Rzeczypospolitej Polskiej w sprawie kontroli i nadzoru nad podmiotami prowadzącymi rzeczoznawstwo majątkowe",
            "właściwego rozporządzenia Ministra Infrastruktury w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej przedsiębiorcy prowadzącego działalność w zakresie czynności rzeczoznawstwa majątkowego",
            "właściwej ustawy o gospodarce nieruchomościami"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 36
    },
    {
        "id": 537,
        "question": "Klauzula 72 godzin w ubezpieczeniu od klęsk żywiołowych oznacza, że:",
        "answers": [
            "wszystkie szkody powstałe w ciągu 72 godzin od pierwszego zdarzenia traktowane są jako jedna szkoda",
            "ochrona rozpoczyna się 72 godziny po opłaceniu składki",
            "zgłoszenie szkody musi nastąpić w ciągu 72 godzin",
            "okres wyczekiwania w ubezpieczeniu utraty zysku wynosi maksymalnie 72 godziny"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 37
    },
    {
        "id": 538,
        "question": "Dystrybutorzy ubezpieczeń stosują rozwiązania organizacyjne służące zapobieganiu konfliktom interesów, tak aby nie miały one negatywnego wpływu na interesy klientów, jeżeli wykonują dystrybucję ubezpieczeń, o których mowa:",
        "answers": [
            "w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "w grupie 3 działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "wyłącznie w grupie 3 działu II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "w grupie 3 i 10 działu II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 38
    },
    {
        "id": 539,
        "question": "Produkt ubezpieczeniowy zapewniający wartość w dniu zapadalności lub wartość wykupu, w przypadku gdy ta wartość w dniu zapadalności lub wartość wykupu jest całkowicie lub częściowo narażona, bezpośrednio lub pośrednio, na wahania rynków, to:",
        "answers": [
            "detaliczny produkt zbiorowego inwestowania",
            "ubezpieczeniowy produkt inwestycyjny",
            "ubezpieczenie na życie lub dożycie",
            "ubezpieczenie rynku finansowych"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 39
    },
    {
        "id": 540,
        "question": "Do umów ubezpieczenia zawieranych z towarzystwem ubezpieczeń wzajemnych przez podmioty będące członkami tego towarzystwa nie stosuje się przepisów:",
        "answers": [
            "Kodeksu cywilnego",
            "ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "o zamówieniach publicznych",
            "ustawy o ubezpieczeniach obowiązkowych, UFG i PBUK"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 40
    },
    {
        "id": 541,
        "question": "Franszyza czasowa (czyli określony okres, przez który ubezpieczyciel nie ponosi odpowiedzialności za skutki zdarzenia) jest najczęściej stosowana:",
        "answers": [
            "w ubezpieczeniach utraty zysku wskutek przerwy w działalności (business interruption) lub opóźnionego rozruchu (ALOP)",
            "w ubezpieczeniu CAR w zakresie szkód powstałych w okresie gwarancyjnym",
            "w ubezpieczeniach CAR/EAR w zakresie Sekcji I",
            "w ubezpieczeniach EAR w zakresie szkód w trakcie testów"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 41
    },
    {
        "id": 542,
        "question": "Polskie Biuro Ubezpieczycieli Komunikacyjnych, zgodnie z ustawą o ubezpieczeniach obowiązkowych, UFG i PBUK, pełni rolę:",
        "answers": [
            "ośrodka informacji o zawartych umowach ubezpieczenia AC (autocasco)",
            "mediatora w polubownym załatwianiu sporów wynikłych ze zdarzeń objętych ubezpieczeniem OC posiadaczy pojazdów mechanicznych",
            "organu odszkodowawczego odpowiedzialnego za zaspokajanie roszczeń z umów ubezpieczenia OC komunikacyjnego wynikłych ze zdarzeń zaistniałych w państwie UE innym niż miejsce zamieszkania poszkodowanego",
            "reprezentanta do spraw roszczeń ustanowionego w Polsce przez zakłady ubezpieczeń z innych państw"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 42
    },
    {
        "id": 543,
        "question": "Przed zawarciem umowy ubezpieczenia broker ubezpieczeniowy ma obowiązek poinformować klienta o wysokości honorarium płaconego bezpośrednio przez klienta, a w przypadku gdy jest to niemożliwe – o metodzie jego wyliczenia:",
        "answers": [
            "nigdy",
            "zawsze",
            "wyłącznie na żądanie klienta",
            "jeżeli przystąpił do dobrych praktyk rynkowych"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 43
    },
    {
        "id": 544,
        "question": "Jeżeli wierzytelność pieniężna jest wymagalna, wierzyciel nie może odmówić przyjęcia świadczenia od osoby trzeciej:",
        "answers": [
            "jeżeli osoba ta działa z upoważnienia dłużnika",
            "jeżeli osoba ta działa za wiedzą dłużnika",
            "jeżeli osoba ta okaże pełnomocnictwo dłużnika",
            "nawet jeżeli osoba ta działa bez wiedzy dłużnika"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 44
    },
    {
        "id": 545,
        "question": "Obowiązek brokera ubezpieczeniowego zachowania w tajemnicy informacji uzyskanych w związku z wykonywaniem czynności brokerskich w zakresie ubezpieczeń:",
        "answers": [
            "nie ciąży na brokerze ubezpieczeniowym po rozwiązaniu stosunku umownego ze zleceniodawcą",
            "nie dotyczy osób, przy pomocy których broker wykonuje czynności brokerskie",
            "nie dotyczy informacji udzielanych na wniosek sądu lub prokuratora, o ile są niezbędne w toczącym się postępowaniu",
            "dotyczy informacji udzielanych na wniosek organu nadzoru, w zakresie wykonywania jego ustawowych zadań"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 45
    },
    {
        "id": 546,
        "question": "Inżynierski audyt ryzyka pożaru w obiekcie zawiera scenariusz, w którym instalacja tryskaczowa zamontowana na połowie powierzchni w ogóle nie zadziała w przypadku pożaru. Taki scenariusz odpowiada standardowi:",
        "answers": [
            "Estimated Maximum Loss",
            "Maximum Possible Loss",
            "Probable Maximum Loss",
            "żadnemu z powyższych"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 46
    },
    {
        "id": 547,
        "question": "Ubezpieczenie mienia od ognia i innych zdarzeń losowych standardowo nie obejmuje:",
        "answers": [
            "pożaru powstałego na skutek wadliwej instalacji elektrycznej",
            "uderzenia pioruna w budynek i powstałe z tego szkody",
            "szkody spowodowanej aktami terroru",
            "upadku śmigłowca na ubezpieczony budynek"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 47
    },
    {
        "id": 548,
        "question": "Dopuszczenie (w RP po zmianach ustrojowych) możliwości tworzenia spółek z udziałem kapitału zagranicznego w obszarze działalności ubezpieczeniowej nastąpiło z dniem:",
        "answers": [
            "1 stycznia 1984 roku",
            "1 stycznia 1989 roku",
            "1 stycznia 1990 roku",
            "z dniem przystąpienia Polski do Unii Europejskiej"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 48
    },
    {
        "id": 549,
        "question": "Ubezpieczenie utraty zysku (Business Interruption) dla przedsiębiorstwa ma zastosowanie, gdy:",
        "answers": [
            "w następstwie szkody materialnej objętej ubezpieczeniem mienia dochodzi do przerwy w działalności, co powoduje utratę zysku lub wzrost kosztów firmy w okresie odszkodowawczym",
            "przedsiębiorstwo odnotuje spadek zysku ze względu na pogorszenie warunków rynkowych lub utratę klientów",
            "wystąpi jakakolwiek przerwa w działalności, prowadząca do utraty zysku niezależnie od przyczyny",
            "zniszczeniu ulegnie co najmniej 10% wartości majątku firmy, co powoduje częściowe wstrzymanie działalności"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 49
    },
    {
        "id": 550,
        "question": "Twórca produktu ubezpieczeniowego obejmującego duże ryzyka:",
        "answers": [
            "stosuje odpowiedni proces zatwierdzania produktu oraz istotnych zmian dokonywanych w dystrybuowanym produkcie ubezpieczeniowym przed wprowadzeniem go do obrotu",
            "dokonuje regularnego przeglądu funkcjonowania produktu ubezpieczeniowego",
            "udostępnia dystrybutorom ubezpieczeń odpowiednie informacje o tym produkcie oraz o procesie jego zatwierdzania, w tym informacje na temat określonego rynku docelowego tego produktu",
            "nie ma obowiązku stosowania powyższych wymogów, o których mowa w pkt a, b i c"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 50
    },
    {
        "id": 551,
        "question": "W przypadku umowy ubezpieczenia zawartej na cudzy rachunek ubezpieczony:",
        "answers": [
            "nie może zgłosić bezpośrednio do zakładu ubezpieczeń zawiadomienia o wystąpieniu zdarzenia losowego",
            "nie jest informowany przez zakład ubezpieczeń o przyczynach niemożności zaspokojenia roszczenia w całości lub w części jeżeli zakład ubezpieczeń w terminie nie wypłaci odszkodowania lub świadczenia",
            "nie jest informowany przez zakład ubezpieczeń, że odszkodowanie lub świadczenie nie przysługuje lub przysługuje w innej wysokości niż określona w roszczeniu, a także o okolicznościach i podstawie prawnej uzasadniającej odmowę wypłaty świadczenia",
            "żadna z powyższych odpowiedzi (a–c) nie jest prawidłowa – ubezpieczony posiada wszystkie prawa wymienione w tych odpowiedziach"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 51
    },
    {
        "id": 552,
        "question": "Nadzór nad działalnością brokerów ubezpieczeniowych sprawuje:",
        "answers": [
            "zakład ubezpieczeń, z którym broker współpracuje",
            "Minister Finansów",
            "Przewodniczący Komisji Nadzoru Finansowego",
            "Komisja Nadzoru Finansowego"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 52
    },
    {
        "id": 553,
        "question": "Oświadczenie ubezpieczonego w ubezpieczeniu na życie na cudzy rachunek jest wymagane:",
        "answers": [
            "do zawarcia umowy ubezpieczenia",
            "do złożenia wniosku o zawarcie umowy ubezpieczenia",
            "do rozpoczęcia odpowiedzialności ubezpieczyciela",
            "do wypłaty świadczenia, która bez takiego uprzedniego oświadczenia jest niedopuszczalna"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 53
    },
    {
        "id": 554,
        "question": "Zgodnie z Kodeksem Morskim „awaria(e) poszczególna(e)” jest określana jako:",
        "answers": [
            "wszelkie szkody i straty w ładunku lub frachcie, które nie podlegają zaliczeniu do awarii wspólnej",
            "wszelkie szkody i straty w statku, które nie podlegają zaliczeniu do awarii wspólnej",
            "wszelkie szkody i straty w ładunku lub frachcie oraz szkody OC, które nie podlegają zaliczeniu do awarii wspólnej",
            "wszelkie szkody i straty w statku, ładunku lub frachcie, które nie podlegają zaliczeniu do awarii wspólnej"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 54
    },
    {
        "id": 555,
        "question": "Jaki jest minimalny okres ważności ubezpieczenia granicznego w państwach należących do Systemu Zielonej Karty, a jaki polskiego ubezpieczenia granicznego?",
        "answers": [
            "kraje systemu ZK – 15 dni, polskie – 30 dni",
            "kraje systemu ZK – 30 dni, polskie – 15 dni",
            "kraje systemu ZK i polskie – 15 dni",
            "kraje systemu ZK i polskie – 30 dni"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 55
    },
    {
        "id": 556,
        "question": "Zgodnie z właściwym rozporządzeniem Ministra Finansów i Gospodarki, obowiązkowe ubezpieczenie OC operatora systemu bezzałogowego statku powietrznego (tzw. drona) obejmuje szkody:",
        "answers": [
            "polegające na zanieczyszczeniu lub skażeniu środowiska",
            "powstałe w związku z wykonywanymi w okresie ubezpieczenia operacjami z użyciem bezzałogowego statku powietrznego",
            "jądrowe lub z nimi związane",
            "powstałe wskutek działań wojennych, stanu wojennego, rozruchów i zamieszek, a także aktów terroru"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 56
    },
    {
        "id": 557,
        "question": "Jeżeli ten sam budynek został ubezpieczony od pożaru na pełną wartość w dwóch różnych towarzystwach ubezpieczeń, to w razie powstania szkody:",
        "answers": [
            "każdy z ubezpieczycieli wypłaci część odszkodowania proporcjonalnie do swojego udziału w łącznej sumie ubezpieczenia",
            "polisa zawarta później automatycznie unieważnia wcześniejszą umowę ubezpieczenia",
            "ubezpieczony może uzyskać łącznie odszkodowanie przewyższające wartość poniesionej szkody",
            "odszkodowanie wypłaci tylko ten ubezpieczyciel, u którego szkodę zgłosi ubezpieczony"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 57
    },
    {
        "id": 558,
        "question": "Przedawnienie odpowiedzialności odszkodowawczej z tytułu czynu niedozwolonego biegnie od:",
        "answers": [
            "dnia powstania szkody, ale nie wcześniej niż od ujawnienia się jej skutków",
            "dnia ujawnienia szkody, ale nie wcześniej niż od uzyskania dowodów wskazujących na jej sprawcę",
            "dnia, w którym poszkodowany dowiedział się albo przy zachowaniu należytej staranności mógł się dowiedzieć o szkodzie i o osobie obowiązanej do jej naprawienia",
            "dnia, w którym poszkodowany uzyskał lub mógł przy dochowaniu należytej staranności uzyskać informacje niezbędne do wniesienia roszczenia odszkodowawczego"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 58
    },
    {
        "id": 559,
        "question": "Instytucja okaziciela ma zastosowanie w przypadku:",
        "answers": [
            "ubezpieczeń na życie",
            "ubezpieczeń praw związanych z papierami wartościowymi",
            "ubezpieczeń majątkowych na cudzy rachunek",
            "ubezpieczeń wierzytelności"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 59
    },
    {
        "id": 560,
        "question": "Jeżeli naruszenie obowiązku zawiadomienia o wypadku w określonym terminie przyczyniło się do zwiększenia szkody lub uniemożliwiło ubezpieczycielowi ustalenie okoliczności i skutków wypadku, ubezpieczyciel może:",
        "answers": [
            "odmówić wypłaty świadczenia",
            "odpowiednio zmniejszyć świadczenie",
            "wymagać od ubezpieczonego przedłożenia dokumentów, w tym takich, które ubezpieczyciel mógłby pozyskać samodzielnie",
            "wydłużyć termin postępowania likwidacyjnego o 30 dni"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 60
    },
    {
        "id": 561,
        "question": "Ubezpieczeniowy Fundusz Gwarancyjny może udzielić zwrotnej pomocy finansowej ubezpieczycielowi przejmującemu portfel:",
        "answers": [
            "dobrowolnych ubezpieczeń mienia",
            "obowiązkowych ubezpieczeń OC posiadaczy pojazdów mechanicznych i OC rolników",
            "ubezpieczeń na życie",
            "obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych i dobrowolnego ubezpieczenia AC"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 61
    },
    {
        "id": 562,
        "question": "Gromadzone przez Ubezpieczeniowy Fundusz Gwarancyjny dane o informatycznej bazie danych w zakresie niezbędnym do identyfikacji, weryfikacji i przeciwdziałania naruszeniu interesów uczestników rynku ubezpieczeniowego, przechowywane są przez:",
        "answers": [
            "1 miesiąc",
            "1 rok",
            "20 lat",
            "bezterminowo"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 62
    },
    {
        "id": 563,
        "question": "Ubezpieczenie mienia na pierwsze ryzyko charakteryzuje się tym, że:",
        "answers": [
            "odszkodowanie może przekroczyć ustaloną sumę ubezpieczenia",
            "sumę ubezpieczenia ustala się zawsze w wysokości pełnej wartości mienia",
            "składka jest stała i nie zależy od deklarowanej sumy ubezpieczenia",
            "przy wypłacie odszkodowania nie stosuje się zasady proporcjonalnej redukcji sumy (niedoubezpieczenia)"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 63
    },
    {
        "id": 564,
        "question": "Ubezpieczenie maszyn od awarii (MB – Machinery Breakdown) pokrywa przede wszystkim szkody powstałe na skutek:",
        "answers": [
            "nagłej i niespodziewanej awarii wewnętrznej urządzenia podczas jego prawidłowej eksploatacji",
            "pożaru lub uderzenia pioruna powodującego zniszczenie maszyny",
            "powodzi lub zalania, które uszkodziły maszynę od zewnątrz",
            "celowego uszkodzenia maszyny dokonanego przez operatora lub osoby trzecie"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 64
    },
    {
        "id": 565,
        "question": "Jeśli część robót zostanie ukończona i odebrana przez inwestora przed zakończeniem całej budowy (odbiór częściowy), to dla tej ukończonej części obiektu:",
        "answers": [
            "ochrona ubezpieczeniowa jest kontynuowana automatycznie na tych samych zasadach aż do wygaśnięcia polisy dla całej budowy",
            "ochrona ubezpieczeniowa z polisy CAR w zakresie szkód materialnych zasadniczo wygasa z momentem odbioru, o ile polisa nie została rozszerzona o ubezpieczenie obiektów ukończonych",
            "polisa CAR zostaje automatycznie przekształcona w ubezpieczenie mienia od ognia i innych zdarzeń losowych dla oddanej części obiektu",
            "od tego momentu odpowiedzialność za szkody w tej części przejmuje wyłącznie polisa OC wykonawcy"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 65
    },
    {
        "id": 566,
        "question": "W ubezpieczeniu budowlano-montażowym (typu CAR/EAR) w zakresie OC (sekcja II) tzw. odpowiedzialność wzajemna (ang. cross liability):",
        "answers": [
            "nie jest standardowo objęta i wymaga dodatkowego rozszerzenia, aby współubezpieczeni byli traktowani jak osoby trzecie względem siebie",
            "jest automatycznie włączona – każdy podmiot ubezpieczony na polisie jest traktowany jak osoba trzecia wobec pozostałych bez dodatkowych warunków",
            "wymaga zawarcia oddzielnych polis OC dla poszczególnych uczestników procesu budowlanego",
            "nie może być w Polsce oferowana z uwagi na ograniczenia prawne co do umów ubezpieczenia OC"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 66
    },
    {
        "id": 567,
        "question": "Minimalna suma gwarancyjna obowiązkowego ubezpieczenia OC operatora systemu bezzałogowego statku powietrznego o masie startowej od 0,25 kg do 20 kg w okresie ubezpieczenia nie dłuższym niż 12 miesięcy, w odniesieniu do jednego zdarzenia wynosi:",
        "answers": [
            "równowartość w złotych 125 000 SDR",
            "równowartość w złotych 100 000 SDR",
            "równowartość w złotych 75 000 SDR",
            "równowartość w złotych 50 000 SDR"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 67
    },
    {
        "id": 568,
        "question": "Minimalna suma gwarancyjna ubezpieczenia obowiązkowego ubezpieczenia odpowiedzialności cywilnej uznanej organizacji upoważnionej do wykonywania zadań administracji morskiej wynosi:",
        "answers": [
            "równowartość w złotych 250.000 Euro w odniesieniu do jednego zdarzenia i wszystkich zdarzeń",
            "równowartość w złotych 750.000 Euro w odniesieniu do jednego zdarzenia i wszystkich zdarzeń",
            "równowartość w złotych 1.250.000 Euro w odniesieniu do jednego zdarzenia i wszystkich zdarzeń",
            "równowartość w złotych 1.500.000 Euro w odniesieniu do jednego zdarzenia i wszystkich zdarzeń"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 68
    },
    {
        "id": 569,
        "question": "W obowiązkowym ubezpieczeniu budynków wchodzących w skład gospodarstwa rolnego zakład ubezpieczeń jest zobowiązany do aktualizowania cenników stosowanych do ustalenia wysokości szkody w odstępach:",
        "answers": [
            "tygodniowych",
            "rocznych",
            "pięcioletnich",
            "dwudziestoletnich"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 69
    },
    {
        "id": 570,
        "question": "Według danych raportu PIU z roku 2025 „Ubezpieczenia w liczbach 2.0”, w roku 2024, składki przypisane brutto polskiego rynku ubezpieczeń, w porównaniu do roku poprzedniego:",
        "answers": [
            "wzrosła o 3,5%",
            "wzrosła o 8,9%",
            "wzrosła o 11,1%",
            "wzrosła o 14,6%"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 70
    },
    {
        "id": 571,
        "question": "Przed zawarciem umowy ubezpieczenia dystrybutor ubezpieczeń określa, na podstawie uzyskanych od klienta informacji, jego wymagania i potrzeby oraz podaje w zrozumiałej formie obiektywne informacje o produkcie ubezpieczeniowym, w celu:",
        "answers": [
            "objęcia klienta ochroną ubezpieczeniową",
            "przekonania klienta do podjęcia najlepszej dla niego decyzji",
            "umożliwienia klientowi podjęcia świadomej decyzji",
            "zapobiegania konfliktom interesów, aby sposób dystrybucji ubezpieczeń nie miał negatywnego wpływu na interesy klienta"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 71
    },
    {
        "id": 572,
        "question": "Szkoda o częściowej w wys. 0,5 mln zł powstała w budynku ubezpieczonym w wartości odtworzeniowej na 10 mln zł. Faktyczna wartość odtworzenia budynku wynosi 20 mln zł. W typowej polisie ubez. all risks odszkodowanie wyniesie:",
        "answers": [
            "0,5 mln zł",
            "0,25 mln zł",
            "0,20 mln zł",
            "żadna odpowiedź nie jest poprawna"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 72
    },
    {
        "id": 573,
        "question": "Standardowa polisa mienia od ognia i innych zdarzeń losowych oprócz szkód bezpośrednich w mieniu pokrywa również:",
        "answers": [
            "koszty uprzątnięcia pozostałości po szkodzie (np. gruzu) do ustalonego limitu",
            "utracony zysk spowodowany przerwą w działalności w następstwie szkody",
            "szkody wynikłe z normalnego zużycia lub starzenia się ubezpieczonego mienia",
            "straty finansowe powstałe wskutek braku ubezpieczenia mienia na odpowiednią sumę"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 73
    },
    {
        "id": 574,
        "question": "Całkowitemu spaleniu uległ transformator, ubezpieczony w wartości odtworzeniowej na 2 mln zł. Faktura za nowy, identyczny transformator o likwidacji szkody wyniosła 4 mln zł. W typowej polisie ubezpieczenie mienia od ognia ubezpieczyciel wypłaci:",
        "answers": [
            "4 mln zł",
            "1 mln zł",
            "1,5 mln zł",
            "żadna odpowiedź nie jest poprawna"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 74
    },
    {
        "id": 575,
        "question": "Aktualne ogólne warunki ubezpieczenia oraz inne wzorce umowy ubezpieczenia:",
        "answers": [
            "nie są publicznie ujawniane",
            "zakład ubezpieczeń ma obowiązek zamieszczania na swojej stronie internetowej",
            "zakład ubezpieczeń przekazuje Rzecznikowi Finansowemu, który zamieszcza je na swojej stronie internetowej",
            "zakład ubezpieczeń ma obowiązek zamieszczania na swojej stronie internetowej, jeżeli z takim żądaniem wystąpi Komisja Nadzoru Finansowego lub Rzecznik Ubezpieczonych"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 75
    },
    {
        "id": 576,
        "question": "Pełnomocnictwo udzielone przez zakład ubezpieczeń agentowi ubezpieczeniowemu do dokonywania czynności agencyjnych w imieniu tego zakładu nie może:",
        "answers": [
            "określać zakresu działalności agenta ubezpieczeniowego, ze wskazaniem działu i grup ubezpieczeń",
            "określać wysokości maksymalnej sumy ubezpieczenia lub sumy gwarancyjnej, na jaką agent ubezpieczeniowy może zawrzeć jedną umowę",
            "zawierać upoważnienia do udzielania dalszych pełnomocnictw",
            "określać obszaru działalności agenta ubezpieczeniowego"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 76
    },
    {
        "id": 577,
        "question": "Taryfy oraz wysokość składki ubezpieczeniowej za obowiązkowe ubezpieczenie OC osoby posiadającej licencję doradcy restrukturyzacyjnego oraz spółki handlowej pełniących funkcję w postępowaniu restrukturyzacyjnym, upadłościowym lub egzekucyjnym ustala:",
        "answers": [
            "Komisja Nadzoru Finansowego",
            "minister właściwy do spraw finansów państwa",
            "zakład ubezpieczeń",
            "minister właściwy do spraw upadłości i restrukturyzacji"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 77
    },
    {
        "id": 578,
        "question": "Na podstawie regulacji ustawowych Minister Finansów uregulował we właściwym rozporządzeniu szczegółowy zakres obowiązkowego ubezpieczenia odpowiedzialności cywilnej:",
        "answers": [
            "osoby odpowiedzialnej za montaż hydrauliczny w budynkach przekraczających powierzchnię 70 m²",
            "przedsiębiorcy prowadzącego stadninę koni pełnej krwi angielskiej",
            "osoby prowadzącej salon fryzjerski",
            "przedsiębiorcy ubiegającego się o zawarcie umowy na prowadzenie działalności w zakresie ochrony lotnictwa cywilnego w portach lotniczych"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 78
    },
    {
        "id": 579,
        "question": "Standardowe ubezpieczenie maszyn od awarii (MB – Machinery Breakdown) wyłącza odpowiedzialność za:",
        "answers": [
            "awarię wynikającą z ukrytej wady materiałowej elementu maszyny ujawnionej podczas eksploatacji",
            "zniszczenie maszyny spowodowane błędem w obsłudze lub nieumyślną pomyłką operatora",
            "nagłe uszkodzenie maszyny spowodowane działaniem siły odśrodkowej podczas pracy urządzenia",
            "uszkodzenia wynikłe z normalnego zużycia eksploatacyjnego, korozji lub powolnej degradacji części maszyny"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 79
    },
    {
        "id": 580,
        "question": "Ubezpieczenie od kradzieży z włamaniem i rabunku może obejmować także rabunek gotówki w czasie transportu z siedziby firmy do banku, pod warunkiem że:",
        "answers": [
            "do transportu używany jest specjalnie oznakowany pojazd typu bankowóz niezależnie od przewożonej kwoty",
            "gotówka przewożona jest wyłącznie w godzinach otwarcia banku i po ustalonej trasie",
            "transport gotówki odbywa się zgodnie z wymogami OWU (np. powyżej określonej kwoty konwoju dokonują co najmniej dwie upoważnione osoby)",
            "planowany przewóz gotówki został każdorazowo zgłoszony na Policję przed jego realizacją"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 80
    },
    {
        "id": 581,
        "question": "W polisie budowlano-montażowej (CAR/EAR) okres konserwacji (gwarancyjny) jest objęty ochroną w ten sposób, że:",
        "answers": [
            "obejmuje w okresie konserwacji pełen zakres szkód jak w trakcie budowy, niezależnie od ich przyczyny i momentu powstania",
            "nie obejmuje żadnych szkód powstałych po zakończeniu zasadniczych prac – okres konserwacji pozostaje całkowicie poza ochroną",
            "obejmuje wyłącznie szkody wynikłe z przyczyn zaistniałych w trakcie budowy (ujawnione dopiero po odbiorze) lub powstałe podczas prac naprawczych prowadzonych przez wykonawcę w tym okresie",
            "dotyczy jedynie odpowiedzialności cywilnej wykonawcy w okresie gwarancyjnym, ale nie szkód materialnych w obiekcie"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 81
    },
    {
        "id": 582,
        "question": "Jeżeli w chwili śmierci ubezpieczonego na życie nie ma osoby uprawnionej do otrzymania sumy ubezpieczenia, suma ta przypada:",
        "answers": [
            "zawsze najbliższej rodzinie ubezpieczonego w kolejności ustalonej w ogólnych warunkach ubezpieczenia",
            "najbliższej rodzinie ubezpieczonego w kolejności ustalonej w ogólnych warunkach ubezpieczenia, chyba że umówiono się inaczej",
            "zawsze osobom wskazanym w ogólnych warunkach ubezpieczenia w kolejności tam wskazanej",
            "osobom wskazanym w ogólnych warunkach ubezpieczenia i w kolejności tam wskazanej, chyba że umówiono się inaczej"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 82
    },
    {
        "id": 583,
        "question": "Ubezpieczenie mienia od wszystkich ryzyk (polisa „all risks”) różni się od polisy od ognia i innych zdarzeń losowych tym, że:",
        "answers": [
            "zawiera węższy zakres ochrony, ponieważ wyłącza większość zdarzeń standardowo objętych w polisie od ognia",
            "obejmuje wszelkie szkody spowodowane nagłymi i nieprzewidzianymi zdarzeniami, z wyjątkiem tych wyraźnie wyłączonych w umowie",
            "nie wymaga określenia sumy ubezpieczenia – wypłaty są nielimitowane do pełnej wartości szkody",
            "jest przeznaczone wyłącznie dla dużych przedsiębiorstw i nie jest oferowane klientom z sektora MŚP"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 83
    },
    {
        "id": 584,
        "question": "Reasekurację bierną wykonuje:",
        "answers": [
            "zakład reasekuracji",
            "broker ubezpieczeniowy",
            "zakład ubezpieczeń w ramach wykonywanej działalności reasekuracyjnej",
            "zakład ubezpieczeń w ramach wykonywanej działalności ubezpieczeniowej"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 84
    },
    {
        "id": 585,
        "question": "Zawiadomienia i oświadczenia składane w związku z zawartą umową ubezpieczenia agentowi ubezpieczeniowemu uznaje się za złożone zakładowi ubezpieczeń, w imieniu lub na rzecz którego agent ubezpieczeniowy działa:",
        "answers": [
            "zawsze (niezależnie od ich formy)",
            "o ile zostały złożone na piśmie lub na innym trwałym nośniku",
            "o ile zostały przekazane przez agenta do zakładu ubezpieczeń",
            "chyba że zakład ubezpieczeń wyłączył lub ograniczył upoważnienia agenta do odbierania zawiadomień i oświadczeń"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 85
    },
    {
        "id": 586,
        "question": "Posiadacz zarejestrowanego samochodu ciężarowego oraz zarejestrowanej przyczepy musi zawrzeć umowę ubezpieczenia OC posiadaczy pojazdów mechanicznych:",
        "answers": [
            "wyłącznie na samochód ciężarowy",
            "wyłącznie na przyczepę",
            "wyłącznie na przyczepę, jeżeli jest ona złączona z samochodem ciężarowym",
            "na każdy z tych pojazdów, zarówno pojazd ciężarowy, jak i przyczepę"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 86
    },
    {
        "id": 587,
        "question": "Po wypowiedzeniu przez rolnika umowy ubezpieczenia OC rolników w związku z tzw. podwójnym ubezpieczeniem, zakład ubezpieczeń:",
        "answers": [
            "może żądać zapłaty składki za okres, przez który ponosił odpowiedzialność",
            "nie może żądać zapłaty składki za okres, przez który ponosił odpowiedzialność",
            "może żądać zapłaty składki za okres 12 miesięcy",
            "musi żądać zapłaty składki za okres 12 miesięcy"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 87
    },
    {
        "id": 588,
        "question": "Zgodnie z obowiązującymi przepisami, ustalenia spełnienia lub niespełnienia obowiązku ubezpieczenia odpowiedzialności cywilnej przez przedsiębiorcę wykonującego działalność gospodarczą w zakresie usług detektywistycznych można dochodzić:",
        "answers": [
            "przed sądem powszechnym",
            "wyłącznie przed Ubezpieczeniowym Funduszem Gwarancyjnym",
            "jedynie przed Ministrem Finansów",
            "wyłącznie przed Polską Izbą Ubezpieczeń"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 88
    },
    {
        "id": 589,
        "question": "Zastosowanie przez zakład ubezpieczeń kryterium płci w kalkulowaniu składek ubezpieczeniowych i świadczeń jest:",
        "answers": [
            "zakazane",
            "dozwolone, ale nie może prowadzić do różnicowania składek ubezpieczeniowych i świadczeń poszczególnych osób",
            "dozwolone i może prowadzić do różnicowania składek ubezpieczeniowych i świadczeń poszczególnych osób",
            "przepisy prawa nie regulują tej kwestii"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 89
    },
    {
        "id": 590,
        "question": "Która z poniższych szkód najprawdopodobniej nie zostanie uznana za nagłe zdarzenie losowe i będzie wyłączona z ochrony ubezpieczeniowej mienia (w ubezpieczeniu od ognia i innych zdarzeń losowych lub all risk)?",
        "answers": [
            "pożar budynku wywołany zwarciem instalacji elektrycznej",
            "uszkodzenie dachu magazynu na skutek silnego huraganu",
            "zniszczenie towarów w magazynie w wyniku powodzi",
            "zalanie pomieszczeń powstałe wskutek długotrwałego, powolnego przeciekania dachu"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 90
    },
    {
        "id": 591,
        "question": "Ubezpieczony ma obowiązek zapobiegać szkodzie i minimalizować jej skutki przy użyciu dostępnych środków. Jeżeli zakład ubezpieczeń nie obowiązuje i doprowadzi to do zwiększenia rozmiarów szkody:",
        "answers": [
            "umowa ubezpieczenia zostaje rozwiązana z winy ubezpieczonego z dniem zaistnienia takiej szkody",
            "ubezpieczony automatycznie traci prawo do jakiegokolwiek odszkodowania z tej polisy",
            "ubezpieczyciel nie ma prawa miarkowania odszkodowania, niezależnie od zaniedbań ubezpieczonego, jeśli wcześniej audytował ryzyko",
            "ubezpieczyciel może odpowiednio zmniejszyć wysokość odszkodowania za tę szkodę w zakresie związanym z zaniedbaniem"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 91
    },
    {
        "id": 592,
        "question": "Wskazana w regulacjach właściwego rozporządzenia Ministra Finansów minimalna suma gwarancyjna obowiązkowego ubezpieczenia odpowiedzialności cywilnej zarządcy nieruchomości odnosi się do:",
        "answers": [
            "18 miesięcznego okresu ubezpieczenia ale nie dłuższego niż 24 miesięczny",
            "okresu ubezpieczenia nie dłuższego niż 12 miesięcy",
            "dowolnego okresu ubezpieczenia",
            "24 miesięcznego okresu ubezpieczenia"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 92
    },
    {
        "id": 593,
        "question": "Regulacje rozporządzenia Ministra Finansów i Gospodarki w sprawie obowiązkowego ubezpieczenia OC operatora systemu bezzałogowego statku powietrznego (tzw. drona) wyznaczają sumę gwarancyjną tego ubezpieczenia na poziomie:",
        "answers": [
            "minimalnym wyrażonym w SDR",
            "minimalnym wyrażonym w USD",
            "maksymalnym wyrażonym w euro",
            "minimalnym wyrażonym w CHF"
        ],
        "correct": 0,
        "comment": "LUTY 2026",
        "sourceNumber": 93
    },
    {
        "id": 594,
        "question": "Ubezpieczyciel nie może podnieść zarzutu, że przy zawieraniu umowy na życie podano wiadomości nieprawdziwe, jeżeli od wypadku doszło po upływie:",
        "answers": [
            "roku od zawarcia umowy",
            "dwóch lat od zawarcia umowy",
            "trzech lat od zawarcia umowy",
            "pięciu lat od zawarcia umowy"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 94
    },
    {
        "id": 595,
        "question": "Ostateczna decyzja o przyjęciu zabezpieczenia długu celnego w formie zobowiązania złożonego przez gwarantów niewymagających zatwierdzenia przez organy celne (m.in. zakłady ubezpieczeń notyfikowane i publikowane na stronie internetowej przez KAS):",
        "answers": [
            "nie może być kwestionowana przez nikogo",
            "może być zakwestionowana przez organ celno-skarbowy wymagający złożenia zabezpieczenia",
            "może być zakwestionowana przez gwarantów zatwierdzanych przez organy celne",
            "może być zakwestionowana przez Ministra Finansów (ministra właściwego ds. finansowych)"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 95
    },
    {
        "id": 596,
        "question": "Zaginiony może być uznany za zmarłego, jeżeli od końca roku kalendarzowego, w którym według istniejących wiadomości jeszcze żył, upłynęło, co do zasady:",
        "answers": [
            "5 lat",
            "7 lat",
            "10 lat",
            "12 lat"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 96
    },
    {
        "id": 597,
        "question": "Mienie należące do osób trzecich, które znajduje się na terenie firmy (np. maszyny w leasingu lub rzeczy przyjęte do naprawy) w ramach polisy ubezpieczenia mienia przedsiębiorstwa:",
        "answers": [
            "jest objęte ochroną do 10% sumy ubezpieczenia, nawet jeśli nie zostało wyszczególnione w polisie",
            "nie jest automatycznie objęte ochroną, o ile nie zostało wyraźnie włączone do ubezpieczenia jako mienie powierzone lub użytkowane",
            "jest w każdym przypadku wyłączone z ubezpieczenia, ponieważ nie stanowi własności ubezpieczonego",
            "powinno być ubezpieczone wyłącznie przez właściciela tego mienia – polisa przedsiębiorstwa nigdy go nie obejmuje"
        ],
        "correct": 1,
        "comment": "LUTY 2026",
        "sourceNumber": 97
    },
    {
        "id": 598,
        "question": "Standardowa umowa ubezpieczenia budowy/montażu (CAR/EAR) wyłącza z ochrony m.in. szkody powstałe na skutek:",
        "answers": [
            "kradzieży materiałów budowlanych z terenu budowy",
            "nieumyślnego błędu popełnionego przez pracownika podczas wykonywania prac budowlanych",
            "działania żywiołów takich jak powódź, huragan czy trzęsienie ziemi",
            "wadliwego projektu lub błędów projektowych dotyczących ubezpieczonego obiektu"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 98
    },
    {
        "id": 599,
        "question": "Które strony procesu budowlanego mogą być objęte ochroną w standardowej polisie budowlano-montażowej (CAR/EAR)?",
        "answers": [
            "tylko inwestor",
            "wyłącznie generalny wykonawca, który wykupił polisę na swoje prace",
            "wszystkie strony w projekcie – inwestor, generalny wykonawca oraz podwykonawcy – o ile zostali oni wymienieni w polisie",
            "generalny wykonawca oraz każdy z jego pracowników osobno w ramach jednej polisy"
        ],
        "correct": 2,
        "comment": "LUTY 2026",
        "sourceNumber": 99
    },
    {
        "id": 600,
        "question": "W obowiązkowym ubezpieczeniu budynków wchodzących w skład gospodarstwa rolnego umowę krótkoterminową można zawrzeć na okres:",
        "answers": [
            "1 miesiąca",
            "3 miesięcy",
            "6 miesięcy",
            "odpowiedzi a–c nie są prawidłowe, gdyż w tym ubezpieczeniu nie można zawrzeć umowy krótkoterminowej"
        ],
        "correct": 3,
        "comment": "LUTY 2026",
        "sourceNumber": 100
    },
    // ===== MAJ 2026 =====
    {
        "id": 601,
        "question": "W polisie CAR/EAR kilku uczestników procesu budowlanego jest objętych jedną wspólną umową ubezpieczenia. Aby w ramach Sekcji II współubezpieczeni mogli dochodzić roszczeń między sobą — tak jakby byli wobec siebie osobami trzecimi — konieczne jest:",
        "answers": [
            "zawarcie przez każdego z uczestników odrębnej polisy OC, ponieważ jedna wspólna polisa CAR/EAR nie może regulować roszczeń pomiędzy współubezpieczonymi",
            "włączenie do polisy klauzuli odpowiedzialności wzajemnej (cross liability), która rozszerza ochronę OC o roszczenia pomiędzy współubezpieczonymi, traktując każdego z nich jak osobę trzecią wobec pozostałych",
            "wyłącznie złożenie pisemnego oświadczenia przez wszystkich współubezpieczonych o wzajemnym zrzeczeniu się roszczeń na wypadek szkody",
            "brak jakichkolwiek dodatkowych działań — standardowy zakres Sekcji II automatycznie obejmuje roszczenia wzajemne między wszystkimi podmiotami wpisanymi do polisy"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 1
    },
    {
        "id": 602,
        "question": "Dystrybucja ubezpieczeń nie polega na:",
        "answers": [
            "doradzaniu, proponowaniu lub wykonywaniu innych czynności przygotowawczych zmierzających do zawarcia umów ubezpieczenia lub umów gwarancji ubezpieczeniowych",
            "obsłudze roszczeń kierowanych do zakładu ubezpieczeń, wycenie szkód i sporządzaniu ekspertyz związanych z tymi szkodami",
            "udzielaniu pomocy przez pośrednika ubezpieczeniowego w administrowaniu umowami ubezpieczenia lub umowami gwarancji ubezpieczeniowych i ich wykonywaniu, także w sprawach o odszkodowanie lub świadczenie",
            "organizowaniu i nadzorowaniu czynności agencyjnych u agenta ubezpieczeniowego lub agenta oferującego ubezpieczenia uzupełniające oraz czynności brokerskich w zakresie ubezpieczeń u brokera ubezpieczeniowego"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 2
    },
    {
        "id": 603,
        "question": "Ubezpieczenie na życie z ubezpieczeniowym funduszem kapitałowym jest określane jako produkt typu:",
        "answers": [
            "unit link",
            "index link",
            "profit link",
            "ubezpieczenie strukturyzowane"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 3
    },
    {
        "id": 604,
        "question": "Zgodnie z ustawą o ubezpieczeniach obowiązkowych, UFG i PBUK, roszczenia z tytułu opłaty za niespełnienie obowiązku zawarcia umowy ubezpieczenia obowiązkowego przedawniają się, co do zasady, z upływem:",
        "answers": [
            "1 miesiąca od dnia dokonania kontroli",
            "3 lat od dnia dokonania kontroli",
            "10 lat od dnia dokonania kontroli",
            "roszczenia te nie ulegają przedawnieniu"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 4
    },
    {
        "id": 605,
        "question": "Skrót FIDIC w kontekście ubezpieczeń budowlano-montażowych oznacza:",
        "answers": [
            "międzynarodowy standard oceny ryzyka katastroficznego stosowany przez reasekuratorów",
            "zabezpieczenie dobrego wykonania kontraktu adekwatną gwarancją ubezpieczeniową lub bankową",
            "Fédération Internationale des Ingénieurs-Conseils – międzynarodową organizację opracowującą standardy kontraktów budowlanych",
            "Financial Insurance Documents for International Construction – standard polisy w kontraktach międzynarodowych"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 5
    },
    {
        "id": 606,
        "question": "Typową umowę ubezpieczenia ryzyk budowlanych (CAR) można rozszerzyć o klauzulę 004 (Extended Maintenance), która w stosunku do klauzuli 003 (Limited Maintenance) oferuje:",
        "answers": [
            "taki sam zakres pokrycia",
            "zakres pokrycia szerszy o szkody powstałe w trakcie budowy, ale ujawnione po odbiorze",
            "węższy zakres pokrycia, gdyż nie obejmuje szkód powstałych w trakcie budowy, a ujawnionych po odbiorze końcowym",
            "zawężony okres ubezpieczenia w stosunku do klauzuli 003"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 6
    },
    {
        "id": 607,
        "question": "Ubezpieczając maszyny w wartości księgowej brutto w zakresie standardowego ubezpieczenia mienia od wszystkich ryzyk, przedsiębiorca deklaruje sumę ubezpieczenia równą:",
        "answers": [
            "aktualnej wartości rynkowej maszyny, ustalonej na podstawie cen porównywalnych urządzeń na rynku wtórnym",
            "wartości księgowej netto wynikającej z ewidencji środków trwałych, uwzględniającej dotychczasowe odpisy amortyzacyjne",
            "pierwotnej wartości nabycia (wytworzenia) środka trwałego, bez pomniejszania o dokonane odpisy amortyzacyjne",
            "szacunkowemu kosztowi zastąpienia maszyny nowym urządzeniem o identycznych parametrach w cenach bieżących"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 7
    },
    {
        "id": 608,
        "question": "Na podstawie obowiązujących przepisów, wskaż w którym obowiązkowym ubezpieczeniu OC wysokość minimalnej sumy gwarancyjnej została wyrażona w euro, tj. w oficjalnej walucie części państw Unii Europejskiej:",
        "answers": [
            "obowiązkowym ubezpieczeniu OC operatora systemu bezzałogowego statku powietrznego użytkującego bezzałogowy statek powietrzny o masie startowej od 0,25 kg do 20 kg",
            "obowiązkowym ubezpieczeniu OC podmiotu przeprowadzającego eksperyment medyczny",
            "obowiązkowym ubezpieczeniu OC osoby eksploatującej urządzenie jądrowe",
            "obowiązkowym ubezpieczeniu OC przedsiębiorców wykonujących obsługę naziemną za szkody powstałe w związku z prowadzoną przez nich działalnością lotniczą"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 8
    },
    {
        "id": 609,
        "question": "Typowe ubezpieczenie maszyn od awarii (MB – Machinery Breakdown) nie pokryje jednego z wymienionych zdarzeń o charakterze losowym. Które z nich będzie wyłączone?",
        "answers": [
            "pęknięcie korpusu pompy wirowej wskutek ukrytej wady odlewniczej, której nie można było wykryć podczas standardowych przeglądów serwisowych",
            "uszkodzenie łożysk turbiny parowej spowodowane nieumyślnym zalaniem układu smarowania niewłaściwym olejem przez pracownika serwisu",
            "rozerwanie wirnika wentylatora przemysłowego na skutek nagłego wzrostu sił odśrodkowych podczas pracy z dopuszczalnymi obrotami",
            "stopniowe ścieranie się zębów przekładni, postępująca korozja wału napędowego oraz powolna degradacja uszczelnień – prowadzące w dłuższym czasie do utraty sprawności maszyny"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 9
    },
    {
        "id": 610,
        "question": "Obowiązujące normy zawarte w rozporządzeniu Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej rzeczników patentowych oraz osób świadczących na terytorium Rzeczypospolitej Polskiej usługi transgraniczne wskazują na:",
        "answers": [
            "możliwość umownego ograniczenia odpowiedzialności zakładu ubezpieczeń o kwotę nieprzekraczającą równowartości 20% wartości należnego odszkodowania",
            "możliwość umownego ograniczenia odpowiedzialności zakładu ubezpieczeń o kwotę wskazaną przez ubezpieczającego",
            "brak możliwości umownego ograniczenia odpowiedzialności przez ubezpieczyciela, z zastrzeżeniem określonego w rozporządzeniu katalogu szkód, których nie obejmuje przedmiotowe ubezpieczenie",
            "możliwość umownego ograniczenia odpowiedzialności zakładu ubezpieczeń o kwotę ustaloną dowolnie przez zakład ubezpieczeń"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 10
    },
    {
        "id": 611,
        "question": "Rzeczami w rozumieniu prawa cywilnego są:",
        "answers": [
            "tylko przedmioty materialne",
            "przedmioty materialne i prawa do tych przedmiotów",
            "przedmioty materialne i interesy majątkowe",
            "przedmioty materialne i własność intelektualna"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 11
    },
    {
        "id": 612,
        "question": "Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2554 z dnia 14 grudnia 2022 r. w sprawie operacyjnej odporności cyfrowej sektora finansowego (tzw. DORA), nie ma zastosowania do:",
        "answers": [
            "zakładów ubezpieczeń i zakładów reasekuracji",
            "wszystkich pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające",
            "pośredników ubezpieczeniowych, pośredników reasekuracyjnych i pośredników oferujących ubezpieczenia uzupełniające będących mikroprzedsiębiorstwami, małymi lub średnimi przedsiębiorstwami",
            "zewnętrznych dostawców usług ICT (technologii informacyjno-komunikacyjnych)"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 12
    },
    {
        "id": 613,
        "question": "Posiadacz zarejestrowanej przyczepy:",
        "answers": [
            "musi zawrzeć umowę ubezpieczenia OC posiadaczy pojazdów mechanicznych w odniesieniu do tej przyczepy na okres 12 miesięcy",
            "nie musi zawierać umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych w odniesieniu do tej przyczepy",
            "może zawrzeć umowę ubezpieczenia OC posiadaczy pojazdów mechanicznych w odniesieniu do tej przyczepy na okres 3 miesięcy",
            "może zawrzeć umowę ubezpieczenia OC posiadaczy pojazdów mechanicznych w odniesieniu do tej przyczepy na okres wprowadzenia jej do ruchu"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 13
    },
    {
        "id": 614,
        "question": "Ubezpieczony obiekt składa się z dwóch budynków: 1 – biurowiec o wysokości 20 m i o wartości 50 mln zł, 2 – oddalona o 80 m, warta 100 mln zł hala o wysokości 10 m i wyposażona kompletnie w tryskacze. Maximum Possible Loss wynosi dla obiektu:",
        "answers": [
            "75 mln zł",
            "150 mln zł",
            "100 mln zł",
            "50 mln zł"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 14
    },
    {
        "id": 615,
        "question": "W przypadku niedopełnienia obowiązku zawarcia umowy obowiązkowego ubezpieczenia OC rolników, opłata za niedopełnienie tego obowiązku stanowi równowartość:",
        "answers": [
            "kwoty podatku rolnego należnego za dany rok kalendarzowy",
            "wartości 100 euro, ustalonej przy zastosowaniu kursu średniego ogłaszanego przez NBP obowiązującego w dniu kontroli",
            "1/10 minimalnego wynagrodzenia za pracę w roku kalendarzowym",
            "10-krotności minimalnego wynagrodzenia za pracę w roku kalendarzowym"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 15
    },
    {
        "id": 616,
        "question": "Z upływem roku kalendarzowego, w którym zakład ubezpieczeń nie zawarł umowy obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych i umowy obowiązkowego ubezpieczenia OC rolników, członkostwo tego zakładu w UFG:",
        "answers": [
            "ustaje",
            "ulega zawieszeniu na okres 10 lat",
            "ulega przedłużeniu, ale tylko na kolejny rok kalendarzowy",
            "ulega przedłużeniu na czas nieokreślony"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 16
    },
    {
        "id": 617,
        "question": "Która z poniższych szkód w sprzęcie elektronicznym będzie standardowo wyłączona z polisy ubezpieczenia sprzętu elektronicznego od wszystkich ryzyk?",
        "answers": [
            "uszkodzenie serwera spowodowane przepięciem w sieci elektrycznej",
            "zniszczenie urządzeń wskutek zalania wodą z pękniętej instalacji wewnętrznej",
            "awaria podzespołu wynikająca z ukrytej wady fabrycznej ujawnionej w okresie obowiązywania gwarancji producenta",
            "uszkodzenie sprzętu komputerowego spowodowane nieumyślnym upuszczeniem przez pracownika"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 17
    },
    {
        "id": 618,
        "question": "Zgodnie z prawem, sposób ustalania (przeliczania na PLN) kwoty minimalnej sumy gwarancyjnej wyrażonych w euro, właściwych dla obowiązkowego ubezpieczenia OC pośrednika kredytu hipotecznego, wynika z przepisów:",
        "answers": [
            "ustawy o kredycie hipotecznym, kredycie konsumenckim oraz o nadzorze nad pośrednikami kredytu hipotecznego",
            "rozporządzenia Związku Banków Polskich w sprawie w sprawie kwot minimalnych sum gwarancyjnych wyrażonych w euro, USD oraz CHF",
            "ustawy Bankowego Funduszu Gwarancyjnego o sumach ubezpieczenia i sumach gwarancyjnych w ubezpieczeniach majątkowych",
            "rozporządzenia Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia OC pośrednika kredytu hipotecznego"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 18
    },
    {
        "id": 619,
        "question": "Czy zakład ubezpieczeń inwestuje składki ubezpieczeniowe na swoje ryzyko?",
        "answers": [
            "tak, zawsze",
            "tak, w przypadku ubezpieczeń, o których mowa w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "tak, z wyjątkiem ubezpieczeń, o których mowa w dziale I w grupie 3 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "nie, zakład ubezpieczeń inwestuje składki ubezpieczeniowe zawsze na ryzyko ubezpieczającego"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 19
    },
    {
        "id": 620,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, członek organu nadzorczego lub zarządzającego brokera ubezpieczeniowego będącego osobą prawną może:",
        "answers": [
            "wykonywać działalność agencyjną i czynności agencyjne",
            "być członkiem organów nadzorczych lub zarządzających zakładu ubezpieczeń",
            "być ubezpieczającym lub ubezpieczonym w umowie ubezpieczenia z zakładem ubezpieczeń",
            "posiadać akcje zakładu ubezpieczeń niedopuszczone do obrotu na rynku regulowanym"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 20
    },
    {
        "id": 621,
        "question": "Przy dochodzeniu przez Ubezpieczeniowy Fundusz Gwarancyjny opłaty za niedopełnienie obowiązku zawarcia umowy ubezpieczenia obowiązkowego, od postanowień wydanych przez Zarząd UFG w toku postępowania egzekucyjnego w administracji, służy odwołanie do:",
        "answers": [
            "Urzędu Ochrony Konkurencji i Konsumentów",
            "Prezydenta RP",
            "Rady UFG",
            "Komisji Nadzoru Finansowego"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 21
    },
    {
        "id": 622,
        "question": "Według danych raportu UKNF o stanie rynku brokerskiego w 2024 roku, w roku 2024 wydano następującą liczbę zezwoleń brokerskich w zakresie ubezpieczeń:",
        "answers": [
            "174",
            "94",
            "54",
            "32"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 22
    },
    {
        "id": 623,
        "question": "W przypadku, gdy ubezpieczyciel, który posiada zezwolenie na wykonywanie działalności w grupach obejmujących ubezpieczenia obowiązkowe, otrzymał ofertę zawarcia umowy ubezpieczenia obowiązkowego, przyjęcie oferty następuje, gdy:",
        "answers": [
            "brak jest odpowiedzi w terminie 3 dni",
            "brak jest odpowiedzi w terminie 14 dni",
            "brak jest odpowiedzi w terminie 90 dni",
            "brak jest odpowiedzi w terminie 12 miesięcy"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 23
    },
    {
        "id": 624,
        "question": "Możliwość niezrealizowania przez zakład ubezpieczeń lub zakład reasekuracji lokat i innych aktywów w celu uregulowania swoich zobowiązań finansowych w momencie, gdy stają się one wymagalne, to:",
        "answers": [
            "ryzyko rynkowe",
            "ryzyko aktuarialne",
            "ryzyko operacyjne",
            "ryzyko płynności"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 24
    },
    {
        "id": 625,
        "question": "W typowym ubezpieczeniu CAR (standardzie monachijskim) szkody w przedmiocie robót powstałe na skutek błędów projektowych mogą być pokryte:",
        "answers": [
            "w każdym przypadku, gdyż są standardowym elementem ochrony",
            "za pomocą dodatkowej klauzuli rozszerzającej zakres ochrony – klauzuli nr 115",
            "za pomocą dodatkowej klauzuli rozszerzającej zakres ochrony – klauzuli nr 100",
            "jedynie w Sekcji II"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 25
    },
    {
        "id": 626,
        "question": "Jednym z warunków uzyskania zezwolenia na prowadzenie działalności brokerskiej przez osobę fizyczną wpisaną do CEIDG jest:",
        "answers": [
            "posiadanie co najmniej 4-letniego doświadczenia zawodowego zdobytego w okresie 6 lat bezpośrednio poprzedzających złożenie wniosku o uzyskanie zezwolenia",
            "posiadanie co najmniej 3-letniego doświadczenia zawodowego zdobytego w okresie 6 lat bezpośrednio poprzedzających złożenie wniosku o uzyskanie zezwolenia",
            "posiadanie co najmniej 3-letniego doświadczenia zawodowego zdobytego w okresie 8 lat bezpośrednio poprzedzających złożenie wniosku o uzyskanie zezwolenia",
            "posiadanie co najmniej 2-letniego doświadczenia zawodowego zdobytego w okresie 8 lat bezpośrednio poprzedzających złożenie wniosku o uzyskanie zezwolenia"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 26
    },
    {
        "id": 627,
        "question": "Według ustawy o działalności ubezpieczeniowej i reasekuracyjnej, przez państwa członkowskie Unii Europejskiej należy rozumieć także:",
        "answers": [
            "państwa członkowskie Europejskiego Porozumienia o Wolnym Handlu (EFTA)",
            "państwa członkowskie Europejskiego Porozumienia o Wolnym Handlu (EFTA) – strony umowy o Europejskim Obszarze Gospodarczym",
            "państwa członkowskie Systemu Zielonej Karty",
            "państwa należące do Porozumienia Wielostronnego funkcjonującego w ramach Systemu Zielonej Karty"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 27
    },
    {
        "id": 628,
        "question": "Umowa ubezpieczenia OC posiadaczy pojazdów mechanicznych obejmuje również, na zasadzie wzajemności, zdarzenia powstałe na terytoriach państw, których:",
        "answers": [
            "organy nadzoru są sygnatariuszami porozumienia o wymianie informacji o zakładach ubezpieczeń",
            "fundusze gwarancyjne podpisały umowę o wzajemnym dostępie do Ośrodka Informacji UFG",
            "izby ubezpieczeniowe zawarły umowę o wzajemnej współpracy",
            "biura narodowe są sygnatariuszami Porozumienia Wielostronnego"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 28
    },
    {
        "id": 629,
        "question": "Zakład produkcyjny posiada zarówno polisę majątkową od ognia i innych zdarzeń losowych, jak i odrębne ubezpieczenie maszyn od awarii (MB – Machinery Breakdown). Która z poniższych szkód będzie likwidowana z polisy MB, a nie z polisy ogniowej?",
        "answers": [
            "pęknięcie wału turbiny sprężarki przemysłowej na skutek nagłej awarii wewnętrznej, do której doszło podczas normalnej pracy urządzenia",
            "zniszczenie silnika prasy hydraulicznej wskutek pożaru, który objął halę produkcyjną",
            "uszkodzenie panelu sterowania obrabiarki CNC spowodowane zalaniem wodą z wadliwej instalacji tryskaczowej",
            "rozbicie obudowy frezarki przez pracownika, który celowo uderzył w nią wózkiem widłowym"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 29
    },
    {
        "id": 630,
        "question": "Ubezpieczony w ramach działalności koasekuracyjnej zawiera stosunek prawny z:",
        "answers": [
            "reasekuratorem",
            "zarówno z zakładem (zakładami) ubezpieczeń jak i reasekuratorem",
            "zakładem ubezpieczeń",
            "wyłącznie z zakładem ubezpieczeń będącym koasekuratorem wiodącym (leaderem)"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 30
    },
    {
        "id": 631,
        "question": "Jakich szkód dotyczy ochrona ubezpieczeniowa w ramach klauzul konserwacyjnych (klauzule 003/004) w polisie CAR/EAR po dokonaniu odbioru robót?",
        "answers": [
            "wszystkich szkód materialnych w obiekcie powstałych w okresie konserwacji, w takim samym zakresie jak w fazie realizacji robót budowlano-montażowych",
            "wyłącznie roszczeń z tytułu odpowiedzialności cywilnej wykonawcy wobec inwestora za wady obiektu ujawnione w okresie gwarancyjnym",
            "szkód, których przyczyny powstały jeszcze w trakcie budowy, a które ujawniły się dopiero po odbiorze, oraz szkód powstałych w związku z prowadzonymi przez wykonawcę pracami naprawczymi lub konserwacyjnymi w tym okresie",
            "żadnych szkód – ochrona ubezpieczeniowa wygasa bezwarunkowo z chwilą podpisania protokołu odbioru końcowego robót"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 31
    },
    {
        "id": 632,
        "question": "Umowę krótkoterminowego ubezpieczenia OC posiadaczy pojazdów mechanicznych w odniesieniu do pojazdów do jazd testowych podmiot uprawniony zawiera na okres:",
        "answers": [
            "ważności profesjonalnego dowodu rejestracyjnego, nie krótszy jednak niż 30 dni",
            "nie dłuższy niż 7 dni",
            "nie dłuższy niż 30 dni",
            "nie krótszy niż 12 miesięcy"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 32
    },
    {
        "id": 633,
        "question": "Przedsiębiorca ustalając maksymalny okres odszkodowawczy w polisie utraty zysku (BI) powinien uwzględnić:",
        "answers": [
            "wyłącznie przewidywany czas fizycznej odbudowy lub naprawy zniszczonego mienia – od daty szkody do zakończenia prac remontowych",
            "czas niezbędny zarówno do odtworzenia zniszczonego mienia, jak i do przywrócenia przychodów firmy do poziomu, jaki osiągnęłaby, gdyby szkoda nie wystąpiła",
            "sztywny, 12-miesięczny okres stosowany standardowo przez wszystkich ubezpieczycieli, niezależnie od branży i specyfiki działalności przedsiębiorstwa",
            "wyłącznie czas potrzebny na uzyskanie niezbędnych decyzji administracyjnych (pozwolenie na budowę, pozwolenie na użytkowanie) warunkujących wznowienie działalności"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 33
    },
    {
        "id": 634,
        "question": "W ubezpieczeniu na życie samobójstwo ubezpieczonego:",
        "answers": [
            "jest prawnie wyłączone z zakresu ubezpieczenia, ponieważ nie jest zdarzeniem losowym",
            "jest prawnie wyłączone z zakresu ubezpieczenia, ale w ogólnych warunkach ubezpieczenia można się umówić inaczej",
            "nie zwalnia ubezpieczyciela od obowiązku świadczenia, jeżeli nastąpiło po upływie lat dwóch od zawarcia umowy ubezpieczenia",
            "jest objęte zakresem ubezpieczenia, ale w ogólnych warunkach ubezpieczenia można się umówić inaczej"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 34
    },
    {
        "id": 635,
        "question": "Zgodnie z ustawą o działalności ubezpieczeniowej i reasekuracyjnej, zakazane jest:",
        "answers": [
            "różnicowanie składek ubezpieczeniowych i świadczeń do celów ubezpieczeń z działu I i II załącznika do ustawy w związanych z HIV i AIDS ze względu na ciążę i macierzyństwo",
            "zastosowanie przez zakład ubezpieczeń kryterium płci w kalkulowaniu składek ubezpieczeniowych i świadczeń",
            "uzyskanie przez zakład ubezpieczeń informacji od podmiotów wykonujących działalność leczniczą, które udzielały świadczeń zdrowotnych ubezpieczonemu lub osobie, na rachunek której ma zostać zawarta umowa ubezpieczenia",
            "żądanie przez zakład ubezpieczeń, aby ubezpieczony lub osoba, na rachunek której ma zostać zawarta umowa ubezpieczenia, poddali się badaniom lekarskim lub badaniom diagnostycznym"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 35
    },
    {
        "id": 636,
        "question": "W razie zbycia przedmiotu ubezpieczenia, prawa z umowy ubezpieczenia mienia:",
        "answers": [
            "wygasają",
            "przechodzą na nabywcę mienia",
            "przechodzą na nabywcę mienia, ale roszczenie o zapłatę składki przysługuje zarówno przeciwko zbywcy, jak i nabywcy mienia",
            "mogą być przeniesione na nabywcę mienia, co wymaga zgody ubezpieczyciela"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 36
    },
    {
        "id": 637,
        "question": "Wyrządzenie przez rolnika ubezpieczonego w zakresie OC rolników, ale będącego w stanie po użyciu środków odurzających, szkody z tytułu tego ubezpieczenia skutkuje:",
        "answers": [
            "odpowiedzialnością zakładu ubezpieczeń z jednoczesnym prawem domagania się zwrotu wypłaconego odszkodowania",
            "odpowiedzialnością zakładu ubezpieczeń bez możliwości domagania się zwrotu wypłaconego odszkodowania",
            "odpowiedzialnością Ubezpieczeniowego Funduszu Gwarancyjnego z jednoczesnym prawem domagania się zwrotu wypłaconego odszkodowania",
            "odpowiedzialnością Ubezpieczeniowego Funduszu Gwarancyjnego bez możliwości domagania się zwrotu wypłaconego odszkodowania"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 37
    },
    {
        "id": 638,
        "question": "Poza odszkodowaniem za bezpośrednie zniszczenie lub uszkodzenie ubezpieczonego mienia, standardowa polisa od ognia i innych zdarzeń losowych obejmuje dodatkowo:",
        "answers": [
            "rekompensatę za utracone przychody i spadek zysku operacyjnego firmy w okresie odbudowy mienia po szkodzie",
            "stopniową utratę wartości mienia wynikającą z naturalnych procesów eksploatacyjnych, takich jak zużycie techniczne, starzenie się materiałów czy korozja",
            "różnicę między sumą ubezpieczenia a rzeczywistą wartością mienia, powstałą wskutek błędnego oszacowania sumy ubezpieczenia przez ubezpieczającego",
            "uzasadnione i udokumentowane koszty związane z usunięciem pozostałości po szkodzie – takie jak rozbiórka zniszczonych elementów, wywóz gruzu czy utylizacja – do wysokości limitu określonego w umowie ubezpieczenia"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 38
    },
    {
        "id": 639,
        "question": "Obowiązek wykonywania dystrybucji ubezpieczeń zgodnie z najlepiej pojętym interesem klientów nie dotyczy:",
        "answers": [
            "zakładu ubezpieczeń",
            "agenta ubezpieczeniowego",
            "agenta oferującego ubezpieczenia uzupełniające",
            "żadna z wyżej wymienionych odpowiedzi (a, b i c) nie jest prawidłowa"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 39
    },
    {
        "id": 640,
        "question": "Sekcja III polisy ubezpieczenia ryzyk budowlano-montażowych (CAR) obejmuje ochroną:",
        "answers": [
            "szkody materialne w robotach kontraktowych, maszynach i materiałach budowlanych na placu budowy",
            "odpowiedzialność cywilną podmiotów realizujących inwestycję wobec osób trzecich",
            "utratę spodziewanego zysku inwestora oraz zwiększone koszty prowadzenia działalności wskutek szkody materialnej w okresie budowy",
            "koszty usunięcia wad projektowych i materiałowych wykrytych w okresie gwarancji po odbiorze robót"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 40
    },
    {
        "id": 641,
        "question": "Wierzyciel może żądać osobistego spełnienia świadczenia przez dłużnika:",
        "answers": [
            "wyłącznie wówczas, gdy wynika to z treści czynności prawnej",
            "wyłącznie wówczas, gdy wynika to z treści czynności prawnej albo z przepisu prawa",
            "wyłącznie wówczas, gdy wynika to z treści czynności prawnej, przepisu prawa lub zasad współżycia społecznego",
            "wówczas wówczas, gdy wynika to z treści czynności prawnej, przepisu prawa lub właściwości świadczenia"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 41
    },
    {
        "id": 642,
        "question": "Które zdanie jest prawdziwe?",
        "answers": [
            "zakład ubezpieczeń może wykonywać działalność reasekuracyjną",
            "zakład reasekuracji może wykonywać działalność ubezpieczeniową",
            "zakład ubezpieczeń nie może wykonywać reasekuracji biernej",
            "zakład ubezpieczeń może wykonywać jednocześnie działalność, o której mowa w dziale I oraz w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 42
    },
    {
        "id": 643,
        "question": "Informatyczną bazę danych do identyfikacji przestępczości ubezpieczeniowej prowadzi:",
        "answers": [
            "Polska Izba Ubezpieczeń",
            "Komisja Nadzoru Finansowego",
            "Ministerstwo Sprawiedliwości",
            "Ubezpieczeniowy Fundusz Gwarancyjny"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 43
    },
    {
        "id": 644,
        "question": "Stwierdzenie, iż czynnością ubezpieczeniową dla ubezpieczenia gwarancji jest ocena ryzyka, jest:",
        "answers": [
            "nieprawdziwe i wynika to z przepisów kodeksu cywilnego",
            "nieprawdziwe, ocena ryzyka nie jest działalnością ubezpieczeniową",
            "prawdziwe, wynika to z przepisów prawa bankowego",
            "prawdziwe, wynika to z przepisów ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 44
    },
    {
        "id": 645,
        "question": "Lawina jest zdarzeniem, które jest objęte obowiązkowym ubezpieczeniem budynków rolniczych od ognia i innych zdarzeń losowych:",
        "answers": [
            "na wniosek ubezpieczającego",
            "z mocy prawa",
            "za zgodą ubezpieczyciela",
            "żadna z odpowiedzi a–c nie jest prawidłowa, gdyż lawina jest zdarzeniem, które nie może być objęte tym ubezpieczeniem"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 45
    },
    {
        "id": 646,
        "question": "Na podstawie regulacji ustawowych Minister Finansów uregulował we właściwym rozporządzeniu szczegółowy zakres obowiązkowego ubezpieczenia odpowiedzialności cywilnej:",
        "answers": [
            "rzeczoznawcy dzieł sztuki",
            "rzeczoznawcy ds. techniki pojazdowej i mechatroniki",
            "rzeczoznawcy do spraw zabezpieczeń przeciwpożarowych",
            "rzeczoznawcy maszyn specjalistycznych i urządzeń górniczych"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 46
    },
    {
        "id": 647,
        "question": "W ramach systemu zarządzania zakładu ubezpieczeń, określenie i ocena ryzyka związanego z nieprzestrzeganiem przepisów prawa, regulacji wewnętrznych oraz przyjętych przez zakład standardów postępowania należy do celów:",
        "answers": [
            "funkcji zarządzania ryzykiem",
            "funkcji zgodności z przepisami",
            "funkcji audytu wewnętrznego",
            "funkcji aktuarialnej"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 47
    },
    {
        "id": 648,
        "question": "Kto powierza wykonanie czynności drugiemu, ten jest odpowiedzialny za szkodę wyrządzoną przez sprawcę przy wykonywaniu powierzonej mu czynności, chyba że:",
        "answers": [
            "jest osobą fizyczną",
            "powierzył wykonanie czynności osobie należącej do wspólnego gospodarstwa domowego",
            "powierzył wykonanie czynności osobie, która w zakresie swej działalności zawodowej trudni się wykonywaniem takich czynności",
            "powierzył wykonanie czynności osobie prawnej"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 48
    },
    {
        "id": 649,
        "question": "Franszyza czasowa — okres wyczekiwania, w którym straty nie są kompensowane przez ubezpieczyciela — znajduje najczęstsze zastosowanie w:",
        "answers": [
            "polisie CAR/EAR w odniesieniu do szkód materialnych objętych Sekcją I",
            "klauzulach konserwacyjnych polisy CAR dotyczących okresu gwarancyjnego",
            "ubezpieczeniu EAR w zakresie szkód powstałych podczas prób i testów urządzeń",
            "ubezpieczeniu utraty zysku (BI) oraz opóźnionego rozruchu (ALOP/DSU), gdzie pierwsze dni lub tygodnie strat finansowych po szkodzie nie podlegają odszkodowaniu"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 49
    },
    {
        "id": 650,
        "question": "Zabór ubezpieczonego mienia dokonany z użyciem przemocy fizycznej lub groźby natychmiastowego jej użycia wobec osoby to w kontekście ubezpieczeniowym:",
        "answers": [
            "rabunek",
            "kradzież zuchwała",
            "przywłaszczenie",
            "stan wyższej konieczności"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 50
    },
    {
        "id": 651,
        "question": "Atak na system lub usługę, w celu uniemożliwienia działania poprzez zajęcie wszystkich wolnych zasobów, przeprowadzony równocześnie z wielu komputerów to:",
        "answers": [
            "ransomware",
            "malware",
            "socjotechnika",
            "DDoS"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 51
    },
    {
        "id": 652,
        "question": "Ubezpieczono od ognia instalację PV w wartości odtworzeniowej na sumę ubezp. wynoszącą 4 mln zł. Instalacja uległa całkowitemu zniszczeniu w pożarze. Nowa identyczna instalacja kosztuje obecnie 8 mln zł. Jakie odszkodowanie wypłaci ubezpieczyciel?",
        "answers": [
            "4 mln zł",
            "8 mln zł",
            "2 mln zł",
            "2,25 mln zł"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 52
    },
    {
        "id": 653,
        "question": "Ubezpieczenie Fidelity (Sprzeniewierzenie) obejmuje odpowiedzialność:",
        "answers": [
            "wyłącznie pracowników banków i instytucji finansowych",
            "wszystkich pracowników",
            "wyłącznie pracowników szczebla kierowniczego",
            "wyłącznie pracowników banków"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 53
    },
    {
        "id": 654,
        "question": "Ograniczoną zdolność prawną ma małoletni, który ukończył lat:",
        "answers": [
            "7",
            "10",
            "13",
            "15"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 54
    },
    {
        "id": 655,
        "question": "Jeżeli ubezpieczyciel ponosi odpowiedzialność jeszcze przed zapłaceniem składki lub jej pierwszej raty, a składka lub jej pierwsza rata nie została zapłacona w terminie, ubezpieczyciel może:",
        "answers": [
            "odstąpić od umowy",
            "wypowiedzieć umowę ze skutkiem natychmiastowym i żądać zapłaty składki za okres, przez który ponosił odpowiedzialność",
            "przesunąć początek swojej odpowiedzialności do momentu zapłaty składki",
            "odmówić wypłaty świadczenia, jeżeli doszło do wypadku"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 55
    },
    {
        "id": 656,
        "question": "Dla dochowania formy pisemnej czynności prawnej wystarczy:",
        "answers": [
            "złożenie podpisu na dokumencie zawierającym dane oświadczenie",
            "spisanie treści oświadczenia",
            "spisanie treści oświadczenia w języku polskim",
            "własnoręczne spisanie treści oświadczenia i wtedy nie jest wymagany podpis"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 56
    },
    {
        "id": 657,
        "question": "Broker ubezpieczeniowy przygotowuje program ubezpieczenia CAR dla dużej inwestycji infrastrukturalnej. Jak powinien prawidłowo określić okres ubezpieczenia w polisie?",
        "answers": [
            "od daty podpisania kontraktu na roboty budowlane do dnia upływu pełnego okresu gwarancji udzielonej przez wykonawcę, obejmując tym samym fazę projektową, realizacyjną i gwarancyjną",
            "wyłącznie na planowany czas prowadzenia zasadniczych robót budowlano-montażowych, bez uwzględniania etapów poprzedzających budowę i następujących po odbiorze",
            "od momentu rozpoczęcia robót (przekazania placu budowy) do odbioru końcowego inwestycji, z możliwością rozszerzenia o okres konserwacji (gwarancyjny) poprzez włączenie odpowiednich klauzul konserwacyjnych",
            "od daty wydania pozwolenia na budowę do dnia uzyskania pozwolenia na użytkowanie obiektu, ponieważ te daty wyznaczają prawne ramy procesu budowlanego"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 57
    },
    {
        "id": 658,
        "question": "Członkostwo w Międzynarodowym Stowarzyszeniu Nadzorców Ubezpieczeniowych (IAIS) jest:",
        "answers": [
            "dobrowolne",
            "zależy od usytuowania nadzoru w krajowym systemie finansowym",
            "zależy od niezależności krajowego systemu nadzoru od władz wykonawczych",
            "obowiązkowe"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 58
    },
    {
        "id": 659,
        "question": "Ubezpieczenie kredytu kupieckiego obejmuje:",
        "answers": [
            "straty spowodowane niewypłacalnością dłużników z włączeniem kar oraz innych kosztów np. transportu, etc.",
            "straty spowodowane niewypłacalnością dłużników",
            "straty spowodowane niewypłacalnością dłużników z włączeniem kar i odsetek",
            "straty spowodowane niewypłacalnością dłużników z włączeniem kar i odsetek oraz innych kosztów np. transportu, etc."
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 59
    },
    {
        "id": 660,
        "question": "Zgodnie z przepisami ustawy o dystrybucji ubezpieczeń, równocześnie za dystrybutora ubezpieczeń i pośrednika ubezpieczeniowego:",
        "answers": [
            "jest uznawany broker ubezpieczeniowy oraz broker reasekuracyjny",
            "jest uznawany broker ubezpieczeniowy, agent ubezpieczeniowy oraz agent oferujący ubezpieczenia uzupełniające",
            "jest uznawany broker ubezpieczeniowy oraz zakład ubezpieczeń",
            "nie jest uznawany żaden podmiot"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 60
    },
    {
        "id": 661,
        "question": "W jakiej sytuacji przedsiębiorca może skorzystać z ochrony w ramach ubezpieczenia utraty zysku (Business Interruption)?",
        "answers": [
            "firma traci kluczowego kontrahenta, co prowadzi do spadku przychodów i obniżenia rentowności w kolejnych kwartałach",
            "działalność firmy zostaje przerwana lub zakłócona z dowolnej przyczyny – zarówno wewnętrznej, jak i zewnętrznej – o ile przerwa ta spowodowała wymierną stratę finansową",
            "pożar niszczy halę produkcyjną objętą polisą majątkową, w wyniku czego firma przez kilka miesięcy nie może prowadzić działalności i traci zysk oraz ponosi zwiększone koszty operacyjne",
            "wartość zniszczonego mienia firmy przekracza połowę łącznej sumy ubezpieczenia w polisie majątkowej, co skutkuje częściowym wstrzymaniem produkcji"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 61
    },
    {
        "id": 662,
        "question": "Firma posiada polisę ubezpieczenia mienia od kradzieży z włamaniem. W OWU określono minimalne wymogi dotyczące zabezpieczeń obiektu. W którym z poniższych przypadków ubezpieczyciel ma najsilniejszą podstawę do odmowy wypłaty odszkodowania?",
        "answers": [
            "ubezpieczony powiadomił ubezpieczyciela o kradzieży dopiero po upływie doby od momentu wykrycia włamania",
            "włamanie miało miejsce w nocy, gdy w budynku nie przebywał żaden pracownik ani ochrona fizyczna",
            "skradzione wyposażenie było w pełni zamortyzowane księgowo i figurowało w ewidencji z zerową wartością bilansową",
            "w chwili włamania wymagany warunkami polisy system alarmowy był wyłączony, mimo obowiązku utrzymywania go w stanie aktywnym"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 62
    },
    {
        "id": 663,
        "question": "Jako jeden z pierwszych tablice śmiertelności opracował Edmund Halley. Dokonał tego analizując dane o urodzeniach i zgonach z miasta:",
        "answers": [
            "Paryża",
            "Gdańska",
            "Londynu",
            "Wrocławia"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 63
    },
    {
        "id": 664,
        "question": "Uprawnienie do wypowiedzenia umowy ubezpieczenia na życie zawartej na cudzy rachunek przysługuje:",
        "answers": [
            "ubezpieczającemu",
            "ubezpieczającemu i ubezpieczonemu",
            "ubezpieczającemu i ubezpieczonemu będącemu konsumentem",
            "ubezpieczającemu, a jeżeli ubezpieczony jest konsumentem, wymagana jest jego zgoda"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 64
    },
    {
        "id": 665,
        "question": "Firma zawarła typową umowę ubezp. utraty zysku (BI) na sumę 5 mln zł, choć jej rzeczywisty roczny zysk brutto wynosi 10 mln zł. W wyniku pożaru firma poniosła stratę w utraconym zysku w wys. 4 mln zł. Przy tych założeniach odszkodowanie wyniesie:",
        "answers": [
            "4 mln zł",
            "5 mln zł",
            "2 mln zł",
            "ubezpieczyciel odmówi wypłaty ze względu na rażące niedoubezpieczenie przekraczające 30% wartości zysku brutto"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 65
    },
    {
        "id": 666,
        "question": "Zasada, że ubezpieczyciel jest wolny od odpowiedzialności, jeżeli ubezpieczający wyrządził szkodę umyślnie, nie obowiązuje:",
        "answers": [
            "w ubezpieczeniach odpowiedzialności cywilnej",
            "w ubezpieczeniach odpowiedzialności cywilnej, o ile w umowie ubezpieczenia zostanie tak postanowione",
            "w ubezpieczeniach odpowiedzialności cywilnej, jeżeli zapłata odszkodowania odpowiada w danych okolicznościach względom słuszności",
            "w obowiązkowych ubezpieczeniach mienia"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 66
    },
    {
        "id": 667,
        "question": "W polisie ubezp. ustalono limit odpowiedzialności w wysokości 5 mln zł na jedno i wszystkie zdarzenia w okresie ubezpieczenia. W ciągu roku doszło do dwóch szkód: pierwsza na kwotę 3 mln zł, druga na 4 mln zł. Jak ubezpieczyciel rozliczy te szkody?",
        "answers": [
            "wypłaci 3 mln zł za pierwszą szkodę i 4 mln zł za drugą, ponieważ każda z nich mieści się w limicie 5 mln zł na jedno zdarzenie",
            "wypłaci 3 mln zł za pierwszą szkodę, a za drugą jedynie 2 mln zł, ponieważ każda wypłata pomniejsza dostępny limit na pozostałe zdarzenia w okresie ubezpieczenia – łącznie nie więcej niż 5 mln zł",
            "wypłaci odszkodowanie wyłącznie za pierwszą szkodę, ponieważ limit na jedno i wszystkie zdarzenia oznacza, że ochrona obejmuje tylko jedno zdarzenie w okresie polisy",
            "wypłaci po 2,5 mln zł za każdą szkodę, ponieważ limit dzielony jest równo pomiędzy wszystkie zdarzenia w okresie ubezpieczenia"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 67
    },
    {
        "id": 668,
        "question": "Regulacje rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej komorników sądowych wyznaczają sumę gwarancyjną tego ubezpieczenia na poziomie:",
        "answers": [
            "minimalnym wyrażonym w SDR",
            "minimalnym wyrażonym w euro",
            "maksymalnym wyrażonym w USD",
            "maksymalnym wyrażonym w SDR"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 68
    },
    {
        "id": 669,
        "question": "Według ustawy o dystrybucji ubezpieczeń, jawność rejestru agentów w zakresie danych o osobach fizycznych obejmuje:",
        "answers": [
            "imię lub imiona i nazwisko",
            "numer PESEL, numer paszportu, numer dowodu osobistego lub innego dokumentu potwierdzającego tożsamość",
            "miejsce zamieszkania",
            "dane historyczne"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 69
    },
    {
        "id": 670,
        "question": "Uznanie przez rolnika objętego ubezpieczeniem OC rolników roszczenia o naprawienie wyrządzonej przez niego szkody, względem odpowiedzialnego gwarancyjnie ubezpieczyciela, który nie wyraził na to uprzednio zgody:",
        "answers": [
            "jest dopuszczalne i wywołuje określone skutki prawne",
            "jest dopuszczalne tylko wtedy, gdy poszkodowanym jest najbliższy członek rodziny w rozumieniu art. 446 kodeksu cywilnego",
            "jest dopuszczalne, jeśli strony umowy ubezpieczenia zawrą odpowiednią klauzulę w umowie",
            "nie ma skutków prawnych"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 70
    },
    {
        "id": 671,
        "question": "Zakaz dokonywania ustaleń, w tym dotyczących wynagrodzeń, które mogłyby stanowić zachętę do proponowania klientowi określonej umowy ubezpieczenia, w sytuacji gdy można zaproponować inną umowę, która lepiej odpowiadałaby potrzebom klienta dotyczy:",
        "answers": [
            "wyłącznie zakładu ubezpieczeń",
            "wyłącznie brokera ubezpieczeniowego",
            "wszystkich dystrybutorów ubezpieczeń",
            "przepisy prawa nie określiły takiego zakazu"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 71
    },
    {
        "id": 672,
        "question": "Zgodnie z obowiązującymi regulacjami Ministra Finansów, obowiązek ubezpieczenia odpowiedzialności cywilnej osoby uprawnionej do sporządzania świadectw charakterystyki energetycznej powstaje:",
        "answers": [
            "nie później niż w dniu poprzedzającym dzień przystąpienia do egzaminu nadającego uprawnienia do sporządzania świadectw charakterystyki energetycznej",
            "z dniem publikacji ustawy o charakterystyce energetycznej budynków mieszkalnych",
            "w dniu wyrządzenia szkody w związku ze sporządzaniem świadectwa charakterystyki energetycznej",
            "nie później niż w dniu poprzedzającym dzień rozpoczęcia wykonywania czynności związanych ze sporządzaniem świadectw charakterystyki energetycznej"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 72
    },
    {
        "id": 673,
        "question": "Regres ubezpieczeniowy (roszczenie zwrotne ubezpieczyciela) oznacza, że po wypłacie odszkodowania:",
        "answers": [
            "odpowiedzialność za pokrycie szkody przechodzi na UFG, który refinansuje ubezpieczycielowi wypłaconą kwotę",
            "ubezpieczyciel zwraca się do ubezpieczonego o zwrot wypłaconego odszkodowania, np. w formie rat, celem uzupełnienia sumy ubezpieczenia",
            "ubezpieczony ma prawo dochodzić od sprawcy szkody dodatkowego odszkodowania, nawet jeśli otrzymał już wypłatę z polisy",
            "ubezpieczyciel może dochodzić od sprawcy szkody (osoby trzeciej odpowiedzialnej za szkodę) zwrotu wypłaconej poszkodowanemu kwoty, wstępując w prawa poszkodowanego"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 73
    },
    {
        "id": 674,
        "question": "W przypadku grupowego ubezpieczenia na życie roczną informację o wysokości świadczeń przysługujących z tytułu zawartej umowy ubezpieczenia, jeżeli wysokość ta ulega zmianie w trakcie trwania umowy, przekazuje ubezpieczonemu:",
        "answers": [
            "zakład ubezpieczeń",
            "dystrybutor ubezpieczeń",
            "ubezpieczający",
            "Rzecznik Finansowy"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 74
    },
    {
        "id": 675,
        "question": "Aby prawidłowo oszacować sumę ubezpieczenia w ubezp. utraty zysku (business interruption), należy wyliczyć tzw. zysk brutto w ujęciu ubezpieczeniowym. Która z poniższych definicji prawidłowo opisuje to pojęcie?",
        "answers": [
            "łączne przychody ze sprzedaży pomniejszone o wszystkie koszty operacyjne przedsiębiorstwa – zarówno zmienne, jak i stałe – odpowiadające zyskowi operacyjnemu z rachunku zysków i strat",
            "różnica między przychodami ze sprzedaży a kosztami zmiennymi działalności, co odpowiada kwocie pokrywającej zarówno koszty stałe przedsiębiorstwa, jak i jego zysk netto",
            "przychody ze sprzedaży pomniejszone wyłącznie o wartość zakupionych surowców i materiałów, bez uwzględnienia kosztów wynagrodzeń i amortyzacji",
            "zysk netto przedsiębiorstwa po opodatkowaniu, powiększony o odpisy amortyzacyjne i pomniejszony o przychody finansowe"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 75
    },
    {
        "id": 676,
        "question": "Według danych raportu UKNF o stanie rynku brokerskiego w 2024 roku, ogólna liczba zarejestrowanych brokerów na dzień 31 grudnia 2024 roku w stosunku do 2023 roku:",
        "answers": [
            "spadła o mniej niż 1%",
            "spadła o 2,5%",
            "wzrosła o 2,5%",
            "pozostała bez zmian"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 76
    },
    {
        "id": 677,
        "question": "Wpływy z tytułu roszczeń regresowych w postępowaniach prowadzonych przez Ubezpieczeniowy Fundusz Gwarancyjny, stanowią dochód:",
        "answers": [
            "budżetu państwa",
            "Ubezpieczeniowego Funduszu Gwarancyjnego",
            "Centralnej Ewidencji Pojazdów i Kierowców (CEPiK)",
            "Komisji Nadzoru Finansowego"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 77
    },
    {
        "id": 678,
        "question": "Ubezpieczony obiekt składa się z dwóch budynków: 1 – biurowiec o wysokości 20 m i o wartości 50 mln zł, 2 – oddalona o 50 m, warta 100 mln zł hala o wysokości 10 m i wyposażona kompletnie w tryskacze. Estimated Maximum Loss wynosi dla obiektu:",
        "answers": [
            "150 mln zł",
            "100 mln zł",
            "75 mln zł",
            "50 mln zł"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 78
    },
    {
        "id": 679,
        "question": "Obowiązujące rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia OC komorników sądowych, zawiera regulacje dotyczące:",
        "answers": [
            "granicznego terminu na wypłatę odszkodowania przez zakład ubezpieczeń",
            "wariantu najniżej komorniczej od którego jest uzależniona wysokość maksymalnej sumy gwarancyjnej",
            "terminu powstania obowiązku ubezpieczenia",
            "wysokości składek ubezpieczeniowych za to ubezpieczenie"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 79
    },
    {
        "id": 680,
        "question": "Współczynnik szkodowości brutto według KNF oznacza:",
        "answers": [
            "((Odszkodowania i świadczenia wypłacone brutto + zmiana stanu rezerw na niewypłacone odszkodowania i świadczenia brutto) / składka zarobiona brutto) * 100%",
            "((Odszkodowania i świadczenia wypłacone brutto + zmiana stanu rezerw na niewypłacone odszkodowania i świadczenia brutto) / składka zarobiona) * 100%",
            "((Odszkodowania i świadczenia wypłacone brutto + stan rezerw na niewypłacone odszkodowania i świadczenia brutto) / składka zarobiona brutto) * 100%",
            "((Odszkodowania i świadczenia wypłacone + zmiana stanu rezerw na niewypłacone odszkodowania i świadczenia) / składka zarobiona) * 100%"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 80
    },
    {
        "id": 681,
        "question": "Ubezpieczyciel w ramach typowej polisy majątkowej (ubezpieczenie od ognia i innych zdarzeń losowych lub all risk) odmówi wypłaty odszkodowania za:",
        "answers": [
            "pożar budynku wywołany zwarciem instalacji elektrycznej",
            "uszkodzenie dachu magazynu na skutek silnego huraganu",
            "zniszczenie towarów w magazynie w wyniku powodzi",
            "zalanie pomieszczeń powstałe wskutek długotrwałego, powolnego przeciekania dachu"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 81
    },
    {
        "id": 682,
        "question": "Dystrybucję ubezpieczeń w zakresie grupy 3 działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej może wykonywać:",
        "answers": [
            "wyłącznie agent ubezpieczeniowy, broker ubezpieczeniowy lub zakład ubezpieczeń",
            "wyłącznie agent ubezpieczeniowy, agent oferujący ubezpieczenia uzupełniające lub broker ubezpieczeniowy",
            "wyłącznie agent ubezpieczeniowy, agent oferujący ubezpieczenia uzupełniające lub zakład ubezpieczeń",
            "wyłącznie dystrybutor ubezpieczeń"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 82
    },
    {
        "id": 683,
        "question": "Zgodnie z rozporządzeniem Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej firmy audytorskiej wysokość minimalnej sumy gwarancyjnej w tym ubezpieczeniu została uzależniona od:",
        "answers": [
            "przedmiotu działalności firmy audytorskiej",
            "formy organizacyjno-prawnej firmy audytorskiej",
            "liczby zatrudnionych w firmie audytorskiej pracowników posiadających uprawnienia kluczowego biegłego rewidenta",
            "miejsca rejestracji firmy audytorskiej"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 83
    },
    {
        "id": 684,
        "question": "Jeżeli ten sam przedmiot ubezpieczenia w tym samym czasie jest ubezpieczony od tego samego ryzyka u dwóch lub więcej ubezpieczycieli na sumy, które łącznie przewyższają jego wartość ubezpieczeniową, ubezpieczający:",
        "answers": [
            "może żądać wypłaty odszkodowania w wysokości szkody od dowolnego z ubezpieczycieli",
            "może żądać od każdego z ubezpieczycieli wypłaty pełnych sum ubezpieczenia",
            "może żądać od każdego z ubezpieczycieli wypłaty tylko połowy sum ubezpieczenia",
            "może żądać od każdego z ubezpieczycieli wypłaty tylko części odszkodowania, proporcjonalnie do relacji między sumami ubezpieczenia"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 84
    },
    {
        "id": 685,
        "question": "Uzgodnienie, że w ubezpieczeniu na cudzy rachunek ubezpieczony nie jest uprawniony do żądania należnego świadczenia bezpośrednio od ubezpieczyciela, nie może być dokonane:",
        "answers": [
            "jeżeli wypadek już zaszedł",
            "jeżeli ubezpieczony jest konsumentem",
            "jeżeli umowa ubezpieczenia zabezpiecza roszczenia ubezpieczającego wobec ubezpieczonego",
            "w ubezpieczeniu grupowym"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 85
    },
    {
        "id": 686,
        "question": "Powstanie tekstu warunków polisy Lloydowskiej dla ubezpieczeń morskich (tzw. S.G. Form) datuje się na:",
        "answers": [
            "drugą połowę XVII w.",
            "pierwszą połowę XVIII w.",
            "drugą połowę XVIII w.",
            "pierwszą połowę XVII w."
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 86
    },
    {
        "id": 687,
        "question": "Wysokość składki ubezpieczeniowej za obowiązkowe ubezpieczenie odpowiedzialności cywilnej firmy audytorskiej ustala:",
        "answers": [
            "Komisja Nadzoru Finansowego w odniesieniu do zakładów ubezpieczeń wykonujących działalność ubezpieczeniową na terenie Rzeczypospolitej Polskiej",
            "Polska Izba Ubezpieczeń",
            "zakład ubezpieczeń",
            "Minister właściwy do spraw finansów państwa"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 87
    },
    {
        "id": 688,
        "question": "Ubezpieczony ma obowiązek zapobiegać szkodzie i minimalizować jej skutki przy użyciu dostępnych środków. Jeżeli rażąco zaniedba ten obowiązek i doprowadzi to do zwiększenia rozmiarów szkody:",
        "answers": [
            "umowa ubezpieczenia zostaje rozwiązana z winy ubezpieczonego z dniem zaistnienia takiej szkody",
            "ubezpieczony automatycznie traci prawo do jakiegokolwiek odszkodowania z tej polisy",
            "ubezpieczyciel nie ma prawa miarkowania odszkodowania, niezależnie od zaniedbań ubezpieczonego, jeśli wcześniej audytował ryzyko",
            "ubezpieczyciel może odpowiednio zmniejszyć wysokość odszkodowania za tę szkodę w zakresie związanym z zaniedbaniem"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 88
    },
    {
        "id": 689,
        "question": "Co dzieje się z ochroną ubezpieczeniową w typowej polisy CAR w zakresie Sekcji I dla tego odebranego formalnie odcinka, który został odebrany przez inwestora (tzw. odbiór częściowy)?",
        "answers": [
            "polisa CAR automatycznie przekształca się w tym zakresie w standardowe ubezpieczenie mienia od ognia i innych zdarzeń losowych, zapewniając ciągłość ochrony odebranej części obiektu bez konieczności zawierania dodatkowej umowy",
            "ochrona z polisy CAR dla odebranej części obiektu co do zasady wygasa z chwilą odbioru częściowego – dalsze ubezpieczenie tej części wymaga rozszerzenia polisy o klauzulę obejmującą obiekty ukończone i przekazane do eksploatacji",
            "ochrona ubezpieczeniowa trwa nieprzerwanie na dotychczasowych warunkach aż do zakończenia całości robót i wystawienia końcowego Świadectwa Przejęcia, niezależnie od tego, ile odcinków zostało już odebranych",
            "odpowiedzialność za wszelkie szkody w odebranej części przechodzi w całości na polisę odpowiedzialności cywilnej wykonawcy, ponieważ odbiór częściowy nie zwalnia go z odpowiedzialności za wady i usterki"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 89
    },
    {
        "id": 690,
        "question": "Zgodnie z właściwym i obowiązującym rozporządzeniem Ministra Finansów, obowiązkowe ubezpieczenie OC podmiotu wykonującego działalność leczniczą obejmuje szkody:",
        "answers": [
            "będące następstwem zabiegów chirurgii plastycznej lub zabiegów kosmetycznych, jeśli są udzielane w przypadkach będących następstwem wady wrodzonej, urazu, choroby lub następstwem jej leczenia",
            "polegające na uszkodzeniu rzeczy",
            "powstałe wskutek rozruchów i zamieszek",
            "polegające na zapłacie kar umownych"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 90
    },
    {
        "id": 691,
        "question": "Zakład ubezpieczeń ma obowiązek zawarcia w umowie ubezpieczenia:",
        "answers": [
            "informacji o nadzorowaniu zakładu ubezpieczeń przez polski (KNF) i europejski (EIOPA) organ nadzoru",
            "miejsca ujawnienia sprawozdania o wypłacalności i kondycji finansowej",
            "skrótu z polityki rachunkowości zakładu ubezpieczeń",
            "wykazu utworzonych rezerw techniczno-ubezpieczeniowych"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 91
    },
    {
        "id": 692,
        "question": "W ramach trzeciego filaru systemu wypłacalności (Solvency II) zakład ubezpieczeń i zakład reasekuracji jest zobowiązany, co najmniej raz w roku, do przygotowania i upublicznienia:",
        "answers": [
            "własnej oceny ryzyka i wypłacalności (ORSA)",
            "sprawozdania o wypłacalności i kondycji finansowej (SFCR)",
            "dodatkowego sprawozdania finansowego i statystycznego",
            "danych statystycznych dotyczących zakresu operacji koasekuracyjnych"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 92
    },
    {
        "id": 693,
        "question": "Pełnomocnictwo zakładu ubezpieczeń udzielone agentowi ubezpieczeniowemu do dokonywania czynności agencyjnych w imieniu tego zakładu nie może:",
        "answers": [
            "określać zakresu działalności agenta ubezpieczeniowego, ze wskazaniem działu i grup ubezpieczeń",
            "określać wysokości maksymalnej sumy ubezpieczenia lub sumy gwarancyjnej, na jaką agent ubezpieczeniowy może zawrzeć jedną umowę ubezpieczenia lub jedną umowę gwarancji ubezpieczeniowej",
            "zawierać upoważnienia do udzielania dalszych pełnomocnictw",
            "określać obszaru działalności agenta ubezpieczeniowego"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 93
    },
    {
        "id": 694,
        "question": "System ubezpieczenia na sumy zmienne jest stosowany przede wszystkim do ubezpieczenia:",
        "answers": [
            "budynków i budowli, których wartość rośnie w wyniku modernizacji",
            "pojazdów mechanicznych tracących na wartości z upływem czasu",
            "maszyn i urządzeń produkcyjnych podlegających amortyzacji księgowej",
            "środków obrotowych (towarów, surowców, zapasów), których wartość zmienia się w trakcie okresu ubezpieczenia"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 94
    },
    {
        "id": 695,
        "question": "Mienie należące do osób trzecich, które znajduje się na terenie firmy (np. maszyny w leasingu lub rzeczy przyjęte do naprawy) w ramach polisy ubezpieczenia mienia przedsiębiorstwa:",
        "answers": [
            "jest objęte ochroną do 10% sumy ubezpieczenia, nawet jeśli nie zostało wyszczególnione w polisie",
            "nie jest automatycznie objęte ochroną, o ile nie zostało wyraźnie włączone do ubezpieczenia jako mienie powierzone lub użytkowane",
            "jest w każdym przypadku wyłączone z ubezpieczenia, ponieważ nie stanowi własności ubezpieczonego",
            "powinno być ubezpieczone wyłącznie przez właściciela tego mienia – polisa przedsiębiorstwa nigdy go nie obejmie"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 95
    },
    {
        "id": 696,
        "question": "Osoba obejmująca gospodarstwo rolne w posiadanie po zmarłym rolniku dotychczas posiadającym to gospodarstwo:",
        "answers": [
            "ma obowiązek powiadomić Ubezpieczeniowy Fundusz Gwarancyjny o zmianie w posiadaniu tego gospodarstwa",
            "ma obowiązek powiadomić Komisję Nadzoru Finansowego o zmianie w posiadaniu tego gospodarstwa",
            "ma obowiązek powiadomić zakład ubezpieczeń o zmianie w posiadaniu tego gospodarstwa",
            "nie ma żadnych obowiązków informacyjnych dotyczących zmiany w posiadaniu tego gospodarstwa"
        ],
        "correct": 2,
        "comment": "MAJ 2026",
        "sourceNumber": 96
    },
    {
        "id": 697,
        "question": "Zakład ubezpieczeń zamieszcza na swojej stronie internetowej:",
        "answers": [
            "ogólne warunki ubezpieczenia oraz inne wzorce umowy",
            "informacje dotyczące poszczególnych umów ubezpieczenia",
            "dodatkowe sprawozdanie finansowe i statystyczne obejmujące informacje specyficzne dla Rzeczypospolitej Polskiej, niepodlegające harmonizacji w Unii Europejskiej",
            "własną ocenę ryzyka i wypłacalności"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 97
    },
    {
        "id": 698,
        "question": "Zakłady ubezpieczeń z państw członkowskich Unii Europejskiej, wykonujące działalność ubezpieczeniową na zezwoleniu właściwego organu państwa, w którym mają siedzibę, stają się członkami Polskiego Biura Ubezpieczycieli Komunikacyjnych z dniem:",
        "answers": [
            "zawarcia w Polsce pierwszej umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych",
            "notyfikacji wykonywania działalności w Polsce przez Komisję Nadzoru Finansowego",
            "złożenia wniosku o wpis do Krajowego Rejestru Sądowego",
            "złożenia deklaracji członkowskiej"
        ],
        "correct": 3,
        "comment": "MAJ 2026",
        "sourceNumber": 98
    },
    {
        "id": 699,
        "question": "W ubezpieczeniu CAR suma ubezpieczenia wynosi 8 mln PLN, podczas gdy wartość inwestycji to 10 mln PLN. Szkoda częściowa wyniosła 2 mln PLN. Zakładając brak franszyz i innych ograniczeń, odszkodowanie wyniesie:",
        "answers": [
            "2 mln PLN",
            "1,6 mln PLN",
            "0,8 mln PLN",
            "1,2 mln PLN"
        ],
        "correct": 1,
        "comment": "MAJ 2026",
        "sourceNumber": 99
    },
    {
        "id": 700,
        "question": "Na podejściu prospektywnym i bazującym na ocenie ryzyka, obejmującym bieżącą weryfikację wykonywania działalności ubezpieczeniowej oraz badanie przestrzegania przez zakład ubezpieczeń przepisów prawa opiera się:",
        "answers": [
            "nadzór nad zakładem ubezpieczeń sprawowany przez Komisję Nadzoru Finansowego",
            "system zarządzania zakładu ubezpieczeń",
            "efektywny system zarządzania ryzykiem",
            "prawidłowe i ostrożne zarządzanie zakładem ubezpieczeń"
        ],
        "correct": 0,
        "comment": "MAJ 2026",
        "sourceNumber": 100
    },
    // ===== LIPIEC 2026 =====
    {
        "id": 701,
        "question": "Zgodnie z wymogiem ustawy o działalności ubezpieczeniowej i reasekuracyjnej, składkę ubezpieczeniową ustala się w wysokości, która zapewnia co najmniej:",
        "answers": [
            "wykonanie podstawowych zobowiązań z umów ubezpieczenia",
            "wykonanie wszystkich zobowiązań z umów ubezpieczenia",
            "wykonanie wszystkich zobowiązań z umów ubezpieczenia i pokrycie kosztów wykonywania działalności ubezpieczeniowej zakładu ubezpieczeń",
            "wykonanie wszystkich zobowiązań i pokrycie kosztów działalności w perspektywie średniookresowej (5 lat)"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 1
    },
    {
        "id": 702,
        "question": "Prawo nie pozwala, aby:",
        "answers": [
            "broker ubezpieczeniowy mógł wykonywać czynności brokerskie równocześnie w zakresie ubezpieczeń, o których mowa w dziale I oraz w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "ten sam podmiot mógł posiadać zezwolenie zarówno na wykonywanie działalności brokerskiej w zakresie ubezpieczeń, jak i w zakresie reasekuracji",
            "zakład ubezpieczeń mógł wykonywać równocześnie działalność, o której mowa w dziale I oraz w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "zakład ubezpieczeń mógł wykonywać równocześnie działalność ubezpieczeniową jak i działalność reasekuracyjną"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 2
    },
    {
        "id": 703,
        "question": "W obowiązkowym ubezpieczeniu OC posiadaczy pojazdów mechanicznych zakład ubezpieczeń jest obowiązany do wysłania ubezpieczającemu informacji o ubezpieczeniu na kolejny okres w przypadku, gdy:",
        "answers": [
            "umowa ubezpieczenia została zawarta na okres 12 miesięcy",
            "umowa ubezpieczenia została zawarta w odniesieniu do pojazdów historycznych i wolnobieżnych",
            "umowa ubezpieczenia jest umową krótkoterminową",
            "ubezpieczający wystąpi na piśmie o taką informację"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 3
    },
    {
        "id": 704,
        "question": "Ze względu na ryzyko niewypłacalności kontrahenta mamy dwa podstawowe rodzaje faktoringu. Są to:",
        "answers": [
            "faktoring pełny (właściwy / z regresem) i faktoring niepełny (niewłaściwy / z regresem)",
            "faktoring pełny (niewłaściwy / bez regresu) i faktoring niepełny (właściwy / z regresem)",
            "faktoring pełny (właściwy / z regresem) i faktoring niepełny (niewłaściwy / bez regresu)",
            "faktoring pełny (właściwy / bez regresu) i faktoring niepełny (niewłaściwy / z regresem)"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 4
    },
    {
        "id": 705,
        "question": "Bank udzielający kredytu zabezpieczonego hipoteką na ubezpieczonym budynku chce mieć pewność, że odszkodowanie po ewentualnej szkodzie trafi do niego. Właściwym rozwiązaniem jest:",
        "answers": [
            "dokonanie cesji praw z umowy ubezpieczenia na bank, odnotowanej (potwierdzonej) na polisie",
            "przeniesienie własności polisy na bank w drodze aneksu do umowy kredytu",
            "nic – uprawnienie banku do odbioru odszkodowania wynika z mocy prawa z samej hipoteki",
            "zawarcie przez bank drugiej, własnej umowy ubezpieczenia tego samego budynku"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 5
    },
    {
        "id": 706,
        "question": "Na reklamację klienta będącego osobą prawną zakład ubezpieczeń ma obowiązek udzielenia odpowiedzi:",
        "answers": [
            "jeżeli przystąpił do dobrych praktyk ubezpieczeniowych",
            "zawsze w terminie 30 dni od dnia jej otrzymania",
            "jeżeli zobowiązał się do tego w umowie ubezpieczenia",
            "jeżeli uzna to za stosowne (ale nie ma takiego obowiązku)"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 6
    },
    {
        "id": 707,
        "question": "Ustalenia spełnienia lub niespełnienia obowiązku ubezpieczenia można dochodzić:",
        "answers": [
            "w postępowaniu przed Komisją Nadzoru Finansowego",
            "w postępowaniu przed ministrem właściwym do spraw instytucji finansowych",
            "na drodze skargi konstytucyjnej",
            "przed sądem powszechnym"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 7
    },
    {
        "id": 708,
        "question": "Nieważna jest czynność prawna:",
        "answers": [
            "mająca na celu obejście ustawy",
            "naruszająca dobre zwyczaje",
            "skutkująca nierównowagą kontraktową",
            "dokonana z naruszeniem wymogu zachowania formy dokumentowej"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 8
    },
    {
        "id": 709,
        "question": "Zgodnie z właściwym rozporządzeniem Ministra Finansów i Gospodarki, obowiązkowe ubezpieczenie odpowiedzialności cywilnej podmiotów wykonujących doświadczenia polowe obejmuje szkody:",
        "answers": [
            "powstałe wskutek aktów terroru",
            "wyrządzone podczas wykonywania czynności doradztwa podatkowego",
            "polegające na utracie mienia, wyrządzone przez ubezpieczonego rodzeństwu",
            "polegające na zapłacie kar umownych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 9
    },
    {
        "id": 710,
        "question": "Ochrona ubezpieczeniowa w okresie konserwacji (gwarancyjnym) polisy CAR/EAR obejmuje:",
        "answers": [
            "pełny zakres szkód, tak jak w okresie realizacji budowy",
            "żadnych szkód – okres po zakończeniu robót pozostaje poza ochroną",
            "wyłącznie odpowiedzialność cywilną wykonawcy w okresie gwarancji",
            "szkody wynikłe z przyczyn powstałych w trakcie budowy (ujawnione po odbiorze) oraz szkody wyrządzone przez wykonawcę podczas prac naprawczych"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 10
    },
    {
        "id": 711,
        "question": "Zgodnie z właściwym rozporządzeniem Ministra Finansów, wyrażona w euro kwota minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia OC pośrednika w obrocie nieruchomościami jest ustalana:",
        "answers": [
            "przy zastosowaniu średniego kursu euro ogłaszanego co miesiąc przez Komisję Europejską w Dzienniku Urzędowym Rady Europy",
            "przy zastosowaniu kursu średniego euro ogłoszonego przez Narodowy Bank Polski po raz pierwszy w roku, w którym umowa ubezpieczenia OC została zawarta",
            "przy zastosowaniu kursu średniego euro ogłoszonego przez Ministra Gospodarki w dniu zawarcia umowy ubezpieczenia",
            "przy zastosowaniu kursu sprzedaży euro wyliczonego w oparciu o dane ze 100 największych kantorów w Polsce"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 11
    },
    {
        "id": 712,
        "question": "Obowiązujące rozporządzenie Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej notariuszy nie zawiera regulacji dotyczących:",
        "answers": [
            "terminu powstania obowiązku ubezpieczenia",
            "wysokości minimalnej sumy gwarancyjnej w tym ubezpieczeniu",
            "zasad zwrotu składki za niewykorzystany okres ubezpieczenia",
            "szczegółowego zakresu tego ubezpieczenia"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 12
    },
    {
        "id": 713,
        "question": "W obowiązkowym ubezpieczeniu budynków rolniczych, wartość pozostałości, które mogą być przeznaczone do dalszego użytku, przeróbki lub odbudowy:",
        "answers": [
            "nie ma wpływu na wysokość szkody",
            "zwiększa wysokość szkody",
            "zmniejsza wysokość szkody",
            "żadna z powyższych odpowiedzi nie jest prawidłowa, gdyż pozostałości przechodzą na własność ubezpieczyciela"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 13
    },
    {
        "id": 714,
        "question": "Pośrednikiem ubezpieczeniowym, w rozumieniu ustawy o dystrybucji ubezpieczeń, nie jest:",
        "answers": [
            "agent oferujący ubezpieczenia uzupełniające",
            "broker reasekuracyjny",
            "agent ubezpieczeniowy",
            "żadna z wyżej wymienionych odpowiedzi (a, b i c) nie jest prawidłowa"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 14
    },
    {
        "id": 715,
        "question": "W hali magazynowej o powierzchni 2000 m² składowane materiały palne mogą przy całkowitym spaleniu wydzielić 8 000 000 MJ energii cieplnej. Gęstość obciążenia ogniowego strefy wynosi:",
        "answers": [
            "4000 MJ/m²",
            "250 MJ/m²",
            "16 000 MJ/m²",
            "4 MJ/m²"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 15
    },
    {
        "id": 716,
        "question": "Opłata za brak spełnienia obowiązku zawarcia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych jest wnoszona na rzecz:",
        "answers": [
            "budżetu państwa",
            "Ubezpieczeniowego Funduszu Gwarancyjnego",
            "Rzecznika Finansowego",
            "Komisji Nadzoru Finansowego"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 16
    },
    {
        "id": 717,
        "question": "Ubezpieczyciel może wypowiedzieć umowę ubezpieczenia na życie:",
        "answers": [
            "z ważnych powodów wskazanych ściśle w ogólnych warunkach ubezpieczenia",
            "jedynie w wypadkach wskazanych w ustawie",
            "jeżeli ubezpieczający podał przy zawieraniu umowy nieprawdziwe informacje",
            "jeżeli ubezpieczony osiągnął wiek emerytalny i stał się niezdolny do płacenia składek"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 17
    },
    {
        "id": 718,
        "question": "Włączenie do polisy CAR klauzuli 115 (wadliwy projekt) w standardowym brzmieniu powoduje, że w razie szkody wynikłej z wady projektu:",
        "answers": [
            "pokryte są wyłącznie wadliwie zaprojektowane elementy, bez szkód następczych",
            "pokryte są wadliwe elementy oraz wszystkie szkody następcze",
            "pokryte są szkody następcze w elementach wykonanych prawidłowo, ale nie same wadliwe części",
            "ochrona pozostaje w całości wyłączona"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 18
    },
    {
        "id": 719,
        "question": "W ocenie ryzyka pożaru obiektu przyjęto scenariusz, w którym instalacja tryskaczowa – jedyne zabezpieczenie aktywne, chroniące część powierzchni obiektu – w ogóle nie zadziała w razie pożaru. Takie założenie odpowiada standardowi:",
        "answers": [
            "EML (Estimated Maximum Loss)",
            "PML (Probable Maximum Loss)",
            "MPL (Maximum Possible Loss)",
            "NLE (Normal Loss Expectancy)"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 19
    },
    {
        "id": 720,
        "question": "Za powódź jako zdarzenie objęte obowiązkowym ubezpieczeniem budynków rolniczych uważa się szkody powstałe wskutek zalania terenów w następstwie:",
        "answers": [
            "opadów deszczu nawalnego",
            "podniesienia się poziomu wody w korytach wód płynących lub stojących",
            "podniesienia się poziomu wody wyłącznie w korytach wód płynących",
            "podniesienia się poziomu wody wyłącznie w korytach wód stojących"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 20
    },
    {
        "id": 721,
        "question": "Polisa CAR: suma ubezpieczenia 12 mln zł, wartość realizowanych robót 16 mln zł. Szkoda częściowa wyniosła 4 mln zł. Pomijając franszyzy, przy zastosowaniu zasady proporcji odszkodowanie wyniesie:",
        "answers": [
            "4 mln zł",
            "3,2 mln zł",
            "3 mln zł",
            "2 mln zł"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 21
    },
    {
        "id": 722,
        "question": "Na podstawie regulacji ustawowych Minister Rozwoju i Finansów uregulował we właściwym rozporządzeniu szczegółowy zakres obowiązkowego ubezpieczenia odpowiedzialności cywilnej:",
        "answers": [
            "podmiotu upoważnionego do przeprowadzania przeglądów technicznych jachtów komercyjnych",
            "operatorów urządzeń walcowniczych",
            "menedżerów ds. marketingu sportowego",
            "szlifierzy kamieni szlachetnych"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 22
    },
    {
        "id": 723,
        "question": "W przypadku sprzedaży pojazdu mechanicznego jego nowy posiadacz:",
        "answers": [
            "jest obowiązany do wypowiedzenia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych zawartej przez dotychczasowego posiadacza",
            "jest obowiązany do wypowiedzenia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych zawartej przez dotychczasowego posiadacza, jeżeli taki wniosek zgłosi zakład ubezpieczeń",
            "jest uprawniony do wypowiedzenia umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych zawartej przez dotychczasowego posiadacza",
            "nie może wypowiedzieć umowy ubezpieczenia OC posiadaczy pojazdów mechanicznych zawartej przez dotychczasowego posiadacza"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 23
    },
    {
        "id": 724,
        "question": "Rozszerzenie standardowej polisy ogniowej o typową klauzulę przepięciową powoduje objęcie ochroną:",
        "answers": [
            "szkód elektrycznych w urządzeniach wywołanych nagłym wzrostem napięcia, np. wskutek pośredniego działania wyładowań atmosferycznych",
            "szkód wskutek bezpośredniego uderzenia pioruna, które bez tej klauzuli pozostają wyłączone",
            "wyłącznie szkód w instalacji odgromowej budynku",
            "szkód wynikających z wad fabrycznych urządzeń elektrycznych"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 24
    },
    {
        "id": 725,
        "question": "Który rodzaj szkody pozostaje zazwyczaj poza zakresem standardowego ubezpieczenia od ognia w formule FLEXA?",
        "answers": [
            "szkody wskutek pożaru powstałego z zaprószenia ognia",
            "szkody wskutek bezpośredniego uderzenia pioruna",
            "szkody wskutek powodzi",
            "szkody wskutek wybuchu kotła lub innego urządzenia ciśnieniowego"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 25
    },
    {
        "id": 726,
        "question": "Przed zawarciem umowy ubezpieczenia broker ubezpieczeniowy udziela porady w oparciu o rzetelną analizę:",
        "answers": [
            "wszystkich dostępnych na rynku produktów ubezpieczeniowych",
            "dostępnych na rynku co najmniej 10 produktów ubezpieczeniowych",
            "dostępnych na rynku produktów ubezpieczeniowych w liczbie wystarczającej do opracowania rekomendacji najwłaściwszej umowy",
            "dostępnych na rynku co najmniej 3 produktów ubezpieczeniowych"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 26
    },
    {
        "id": 727,
        "question": "Zakłady ubezpieczeń przekazujące do Ubezpieczeniowego Funduszu Gwarancyjnego dane dotyczące zawartych umów ubezpieczenia OC posiadaczy pojazdów mechanicznych są obowiązane do aktualizacji tych danych:",
        "answers": [
            "niezwłocznie, nie później jednak niż w terminie 7 dni od dnia uzyskania informacji o zdarzeniu będącym przyczyną aktualizacji",
            "niezwłocznie, nie później jednak niż w terminie 3 miesięcy od dnia uzyskania informacji o zdarzeniu będącym przyczyną aktualizacji",
            "niezwłocznie, nie później jednak niż z dniem otrzymania decyzji organu nadzoru o konieczności aktualizacji",
            "zakłady ubezpieczeń nie muszą dokonywać takiej aktualizacji"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 27
    },
    {
        "id": 728,
        "question": "Które zdanie jest nieprawdziwe?",
        "answers": [
            "umowa ubezpieczenia zawsze ma charakter dobrowolny",
            "umowa ubezpieczenia, ogólne warunki ubezpieczenia oraz inne wzorce umowy są formułowane jednoznacznie i w sposób zrozumiały",
            "ogólne warunki ubezpieczenia oraz inne wzorce umowy zakład ubezpieczeń zamieszcza na swojej stronie internetowej",
            "postanowienia umowy ubezpieczenia, ogólnych warunków ubezpieczenia oraz innych wzorców umowy sformułowane niejednoznacznie interpretuje się na korzyść ubezpieczającego, ubezpieczonego lub uprawnionego z umowy ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 28
    },
    {
        "id": 729,
        "question": "Regulacje wyznaczające katalog szkód wyłączających odpowiedzialność zakładu ubezpieczeń w obowiązkowym ubezpieczeniu odpowiedzialności cywilnej adwokatów zostały zawarte w przepisach:",
        "answers": [
            "ustawy o adwokatach",
            "zarządzenia Prezesa Rady Ministrów w sprawie wymogów dla adwokatów i radców prawnych wykonujących działalność prawną",
            "ustawy o dystrybucji ubezpieczeń majątkowych i życiowych",
            "rozporządzenia Ministra Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej adwokatów"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 29
    },
    {
        "id": 730,
        "question": "Sprawozdanie z działalności brokerskiej:",
        "answers": [
            "broker ubezpieczeniowy przedstawia organowi nadzoru do celów nadzoru",
            "nie obejmuje podstawowych informacji finansowych",
            "jest sporządzane za okres dwóch lat kalendarzowych",
            "składa się do organu nadzoru w postaci papierowej"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 30
    },
    {
        "id": 731,
        "question": "Krąg ubezpieczonych we wspólnej polisie CAR/EAR zawieranej dla inwestycji zwykle obejmuje:",
        "answers": [
            "wyłącznie inwestora, ponieważ to jego mienie jest ubezpieczane",
            "wyłącznie generalnego wykonawcę i projektanta",
            "inwestora, generalnego wykonawcę oraz podwykonawców – wszystkich w ramach jednej polisy",
            "wyłącznie wykonawcę i jego podwykonawców"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 31
    },
    {
        "id": 732,
        "question": "Instalacja tryskaczowa, system sygnalizacji pożarowej oraz pompy i hydranty wewnętrzne to przykłady zabezpieczeń przeciwpożarowych:",
        "answers": [
            "pasywnych, ograniczających bierne rozprzestrzenianie się ognia",
            "organizacyjnych, wynikających z instrukcji bezpieczeństwa pożarowego",
            "konstrukcyjnych, stanowiących element struktury budynku",
            "aktywnych – w odróżnieniu od zabezpieczeń pasywnych, takich jak ściany oddzielenia przeciwpożarowego"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 32
    },
    {
        "id": 733,
        "question": "Broker ubezpieczeniowy, przed zawarciem umowy ubezpieczenia na życie, o której mowa w grupie 3 działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej, informuje klienta o:",
        "answers": [
            "poziomie kurtażu",
            "samym fakcie uzyskiwania wynagrodzenia",
            "ogólnych zasadach kalkulacji wynagrodzenia",
            "wysokości wskaźnika kosztów dystrybucji"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 33
    },
    {
        "id": 734,
        "question": "W przypadku umowy ubezpieczenia na życie zawartej na cudzy rachunek oświadczenie ubezpieczonego, że chce skorzystać z zastrzeżenia na jego rzecz ochrony ubezpieczeniowej, powinno być złożone:",
        "answers": [
            "stronie wskazanej w umowie",
            "ubezpieczającemu",
            "ubezpieczycielowi",
            "ubezpieczycielowi lub ubezpieczającemu, zgodnie z wyborem ubezpieczonego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 34
    },
    {
        "id": 735,
        "question": "W przypadku nabycia pojazdu mechanicznego i niewypowiedzenia umowy obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych zawartej przez dotychczasowego posiadacza, ubezpieczyciel jest obowiązany do rekalkulacji składki ubezpieczeniowej:",
        "answers": [
            "z mocy prawa",
            "na wniosek dotychczasowego posiadacza tego pojazdu",
            "na wniosek nowego posiadacza tego pojazdu",
            "rekalkulacja składki nie jest prawnie dopuszczalna"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 35
    },
    {
        "id": 736,
        "question": "Zgodnie z obowiązującymi regulacjami Ministra Finansów i Gospodarki, obowiązek ubezpieczenia odpowiedzialności cywilnej podmiotów wykonujących doradztwo podatkowe powstaje:",
        "answers": [
            "nie później niż w dniu poprzedzającym dzień rozpoczęcia wykonywania czynności doradztwa podatkowego",
            "w dniu wpisu na listę doradców podatkowych prowadzoną przez Ogólnopolską Izbę Podmiotów Doradztwa Podatkowego",
            "nie później niż w dniu przystąpienia do egzaminu na doradcę podatkowego",
            "w dniu wyrządzenia szkody podczas wykonywania czynności doradztwa podatkowego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 36
    },
    {
        "id": 737,
        "question": "Magazyn o faktycznej wartości odtworzeniowej 8 mln zł ubezpieczono na sumy stałe na 6 mln zł. Pożar spowodował szkodę częściową o wartości 2 mln zł. Przy typowej zasadzie proporcji odszkodowanie wyniesie:",
        "answers": [
            "2 mln zł",
            "1,5 mln zł",
            "1 mln zł",
            "0,75 mln zł"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 37
    },
    {
        "id": 738,
        "question": "Według ustawy o działalności ubezpieczeniowej i reasekuracyjnej, działalność ubezpieczeniową (tj. czynności ubezpieczeniowe związane z oferowaniem i udzielaniem ochrony na wypadek ryzyka wystąpienia skutków zdarzeń losowych) może wykonywać:",
        "answers": [
            "zakład ubezpieczeń",
            "zakład ubezpieczeń i fundusz inwestycyjny",
            "zakład ubezpieczeń i bank",
            "zakład ubezpieczeń i fundusz emerytalny"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 38
    },
    {
        "id": 739,
        "question": "Ubezpieczony budynek sprzedano w trakcie okresu ubezpieczenia, a praw z umowy nie przeniesiono na nabywcę. Odpowiedzialność ubezpieczyciela:",
        "answers": [
            "trwa na rzecz nabywcy do końca okresu ubezpieczenia",
            "wygasa z chwilą przejścia własności – nabywca nie korzysta z ochrony, chyba że ubezpieczyciel zgodzi się na kontynuację na jego rzecz",
            "trwa nadal, lecz z zastosowaniem 50% udziału własnego",
            "trwa wyłącznie w zakresie ryzyka pożaru"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 39
    },
    {
        "id": 740,
        "question": "Maszynę o wartości odtworzeniowej 800 000 zł i zużyciu technicznym 25% ubezpieczono według wartości rzeczywistej. Prawidłowo ustalona suma ubezpieczenia wynosi:",
        "answers": [
            "800 000 zł",
            "200 000 zł",
            "1 000 000 zł",
            "600 000 zł"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 40
    },
    {
        "id": 741,
        "question": "W ubezpieczeniach obowiązkowych poszkodowany może dochodzić roszczeń bezpośrednio od zakładu ubezpieczeń w związku ze zdarzeniem objętym:",
        "answers": [
            "wyłącznie umową obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych",
            "wyłącznie umową obowiązkowego ubezpieczenia OC rolników",
            "wyłącznie umową obowiązkowego ubezpieczenia OC tzw. zawodowego",
            "umową ubezpieczenia obowiązkowego OC"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 41
    },
    {
        "id": 742,
        "question": "Które rozporządzenie Ministra Finansów dotyczące obowiązkowego ubezpieczenia odpowiedzialności cywilnej określonych podmiotów, określa wysokość minimalnej sumy gwarancyjnej „w euro”:",
        "answers": [
            "rozporządzenie Ministra Finansów z dnia 14 września 2011 r. w sprawie minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia OC osoby eksploatującej urządzenie jądrowe",
            "rozporządzenie Ministra Finansów z dnia 27 grudnia 2012 r. w sprawie obowiązkowego ubezpieczenia OC przewoźników lotniczych, przedsiębiorców wykonujących obsługę naziemną oraz instytucji zapewniających służby żeglugi powietrznej",
            "rozporządzenie Ministra Finansów z dnia 31 czerwca 2016 r. w sprawie obowiązkowego ubezpieczenia OC podmiotów zarządzających wyrociągami gazowymi",
            "rozporządzenie Ministra Finansów z dnia 9 grudnia 2013 r. w sprawie obowiązkowego ubezpieczenia OC przedsiębiorcy wykonującego działalność gospodarczą w zakresie usług ochrony osób i mienia"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 42
    },
    {
        "id": 743,
        "question": "Według danych KNF, opublikowanych w biuletynie kwartalnym na koniec roku 2025, drugim w rankingu zakładów ubezpieczeń na rynku pod względem wielkości składki przypisanej brutto w Dziale II jest:",
        "answers": [
            "STU Ergo Hestia SA",
            "TUiR Warta SA",
            "TUiR Allianz Polska SA",
            "UNIQA TU SA"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 43
    },
    {
        "id": 744,
        "question": "Konsekwencje braku spełnienia obowiązku zawarcia umowy ubezpieczenia obowiązkowego, wynikającego z przepisów ustawy wprowadzającej dane ubezpieczenie obowiązkowe, są określone w:",
        "answers": [
            "Konstytucji RP",
            "ustawie o nadzorze nad rynkiem finansowym",
            "statucie UFG",
            "ustawie wprowadzającej dane ubezpieczenie obowiązkowe"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 44
    },
    {
        "id": 745,
        "question": "Instytucjami obowiązanymi w rozumieniu ustawy z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu:",
        "answers": [
            "są wszystkie zakłady ubezpieczeń i wszyscy pośrednicy ubezpieczeniowi",
            "są zakłady ubezpieczeń wykonujące działalność w dziale I oraz pośrednicy ubezpieczeniowi wykonujący czynności pośrednictwa ubezpieczeniowego w zakresie ubezpieczeń działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "są zakłady ubezpieczeń wykonujące działalność w dziale II oraz pośrednicy ubezpieczeniowi wykonujący czynności pośrednictwa ubezpieczeniowego w zakresie ubezpieczeń działu I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "nie są zakłady ubezpieczeń ani pośrednicy ubezpieczeniowi"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 45
    },
    {
        "id": 746,
        "question": "Pierwszy niepaństwowy zakład ubezpieczeń powstały na bazie ustawy o ubezpieczeniach majątkowych i osobowych z 1984 roku zorganizowany był w formie:",
        "answers": [
            "zakładu spółdzielczego",
            "spółki akcyjnej z kapitałem polskim",
            "zakładu ubezpieczeń wzajemnych",
            "spółki akcyjnej z kapitałem zagranicznym"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 46
    },
    {
        "id": 747,
        "question": "Scenariusz PML (Probable Maximum Loss) w inżynierskiej ocenie ryzyka pożarowego zakłada, że:",
        "answers": [
            "żadne zabezpieczenia aktywne nie zadziałają, a skuteczne pozostaną wyłącznie zabezpieczenia pasywne",
            "zawiodą wszystkie zabezpieczenia – zarówno aktywne, jak i pasywne",
            "większość zabezpieczeń aktywnych zadziała prawidłowo (część może zawieść), a zabezpieczenia pasywne pozostaną skuteczne",
            "wszystkie zabezpieczenia zadziałają, a interwencja straży pożarnej będzie natychmiastowa i w pełni skuteczna"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 47
    },
    {
        "id": 748,
        "question": "Nie do wszystkich dystrybutorów ubezpieczeń odnosi się obowiązek:",
        "answers": [
            "postępowania uczciwie, rzetelnie i profesjonalnie, zgodnie z najlepiej pojętym interesem klientów",
            "wynagradzania w sposób niesprzeczny z obowiązkiem działania zgodnie z najlepiej pojętym interesem klientów",
            "kierowania do klienta informacji, w tym informacji o charakterze reklamowym i marketingowym, jasnych, rzetelnych i niewprowadzających w błąd",
            "udzielania porady – przed zawarciem umowy ubezpieczenia – w oparciu o rzetelną analizę dostępnych na rynku produktów ubezpieczeniowych"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 48
    },
    {
        "id": 749,
        "question": "Szkody powstałe podczas testów i rozruchu montowanych maszyn w typowej polisie EAR, opartej na powszechnym na polskim rynku tzw. standardzie monachijskim, są:",
        "answers": [
            "objęte ochroną bez żadnych ograniczeń czasowych",
            "zawsze wyłączone z zakresu ochrony",
            "objęte ochroną wyłącznie w zakresie tzw. prób na zimno",
            "objęte ochroną przez ograniczony okres (typowo do 4 tygodni od zakończenia montażu), z możliwością przedłużenia za dodatkową składkę"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 49
    },
    {
        "id": 750,
        "question": "Certyfikat ubezpieczenia odpowiedzialności za roszczenia morskie wystawia:",
        "answers": [
            "wyłącznie ubezpieczyciel",
            "ubezpieczyciel lub inny podmiot, który udziela zabezpieczenia rzeczowego",
            "ubezpieczyciel lub inny podmiot, który udziela zabezpieczenia finansowego",
            "ubezpieczyciel lub inny podmiot, który udziela zabezpieczenia uzgodnionego z armatorem"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 50
    },
    {
        "id": 751,
        "question": "Bezpośrednie uderzenie pioruna uszkodziło konstrukcję dachu, lecz nie wywołało pożaru. W standardowym ubezpieczeniu od ognia szkoda ta:",
        "answers": [
            "jest objęta ochroną – uderzenie pioruna stanowi samodzielne ryzyko podstawowe, niezależnie od powstania pożaru",
            "nie jest objęta ochroną, ponieważ nie doszło do pożaru",
            "jest objęta ochroną wyłącznie po wykupieniu odrębnej klauzuli",
            "jest objęta ochroną tylko, gdy piorun uderzył podczas burzy z opadami"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 51
    },
    {
        "id": 752,
        "question": "Co do zasady powództwo o odszkodowanie z ubezpieczenia OC posiadaczy pojazdów mechanicznych wytacza się:",
        "answers": [
            "wyłącznie według przepisów o właściwości ogólnej",
            "wyłącznie przed sąd właściwy dla miejsca zamieszkania albo siedziby poszkodowanego zdarzeniem powodującym szkodę albo przed sąd właściwy dla miejsca zaistnienia tego zdarzenia",
            "wyłącznie przed sąd właściwy dla miejsca zaistnienia zdarzenia powodującego szkodę",
            "żadna z powyższych odpowiedzi nie jest prawidłowa"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 52
    },
    {
        "id": 753,
        "question": "Budynek ubezpieczono od ognia u ubezpieczyciela X na 10 mln zł i u ubezpieczyciela Y na 5 mln zł (ubezpieczenie podwójne). Szkoda wyniosła 3 mln zł. Przy odpowiedzialności proporcjonalnej do sum ubezpieczenia X wypłaci:",
        "answers": [
            "3 mln zł",
            "2 mln zł",
            "1,5 mln zł",
            "1 mln zł"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 53
    },
    {
        "id": 754,
        "question": "Scenariusz EML (Estimated Maximum Loss) w ocenie ryzyka pożarowego odpowiada założeniu, że:",
        "answers": [
            "żadne zabezpieczenia aktywne ani pasywne nie zadziałają",
            "zadziałają wyłącznie zabezpieczenia pasywne (np. oddzielenia ogniowe)",
            "zadziałają zabezpieczenia aktywne, zawiodą natomiast pasywne",
            "zabezpieczenia aktywne i pasywne działają zgodnie z projektem, a szacuje się maksymalną szkodę, jakiej można racjonalnie oczekiwać (z pominięciem skrajnie nieprawdopodobnych zbiegów okoliczności)"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 54
    },
    {
        "id": 755,
        "question": "Do działalności w zakresie ubezpieczeń gwarantowanych przez Skarb Państwa powierzonych Korporacji Ubezpieczeń Kredytów Eksportowych S.A.:",
        "answers": [
            "w pełni stosuje się przepisy ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "nie stosuje się przepisów ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "stosuje się przepisy ustawy o działalności ubezpieczeniowej i reasekuracyjnej w zakresie uzgodnionym z ministrem właściwym do spraw aktywów państwowych",
            "stosuje się przepisy ustawy o działalności ubezpieczeniowej i reasekuracyjnej w zakresie uzgodnionym z ministrem właściwym do spraw finansów publicznych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 55
    },
    {
        "id": 756,
        "question": "Koszty celowych działań podjętych przez ubezpieczonego w celu ratowania mienia i ograniczenia rozmiaru szkody:",
        "answers": [
            "zawsze obciążają ubezpieczonego, który ma chronić mienie na własny koszt",
            "są zwracane tylko wtedy, gdy działania okazały się skuteczne",
            "są zwracane przez ubezpieczyciela nawet wtedy, gdy działania okazały się bezskuteczne (w granicach przepisów i umowy)",
            "są zwracane wyłącznie po uprzedniej pisemnej zgodzie ubezpieczyciela"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 56
    },
    {
        "id": 757,
        "question": "Broker ubezpieczeniowy, który zamierza podjąć działalność brokerską w zakresie ubezpieczeń na terytorium innego niż Rzeczpospolita Polska państwa członkowskiego Unii Europejskiej ma obowiązek powiadomić o tym:",
        "answers": [
            "właściwy organ państwa członkowskiego UE, na terytorium którego zamierza podjąć działalność brokerską",
            "Komisję Nadzoru Finansowego",
            "Europejski Urząd Nadzoru Ubezpieczeń i Pracowniczych Programów Emerytalnych",
            "Komisję Europejską"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 57
    },
    {
        "id": 758,
        "question": "Do renty z umowy ubezpieczenia:",
        "answers": [
            "nie stosuje się przepisów Kodeksu cywilnego o rencie",
            "stosuje się przepisy Kodeksu cywilnego o rencie",
            "stosuje się odpowiednio przepisy Kodeksu cywilnego o rencie",
            "stosuje się przepisy Kodeksu cywilnego o rencie w zakresie niesprzecznym z przepisami o umowie ubezpieczenia"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 58
    },
    {
        "id": 759,
        "question": "Przepisów Kodeksu cywilnego o niedozwolonych postanowieniach umownych nie stosuje się do tych postanowień, które określają świadczenie główne, jeżeli są:",
        "answers": [
            "ekwiwalentne co do praw i obowiązków stron umowy",
            "jednoznaczne",
            "sformułowane zrozumiałym dla konsumenta językiem",
            "zgodne z bezwzględnie obowiązującymi przepisami prawa"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 59
    },
    {
        "id": 760,
        "question": "Aby współubezpieczeni w Sekcji II polisy CAR/EAR mogli wzajemnie dochodzić roszczeń (byli traktowani względem siebie jak osoby trzecie), konieczne jest:",
        "answers": [
            "rozszerzenie polisy o klauzulę odpowiedzialności wzajemnej (cross liability)",
            "nic – mechanizm ten działa automatycznie w każdej polisie CAR/EAR",
            "zawarcie odrębnych polis OC przez każdego uczestnika budowy",
            "udzielenie sobie wzajemnych pełnomocnictw przez uczestników budowy"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 60
    },
    {
        "id": 761,
        "question": "W umowie ubezpieczenia na cudzy rachunek ubezpieczony:",
        "answers": [
            "musi być zawsze wskazany imiennie",
            "może nie być imiennie wskazany, chyba że jest to konieczne do określenia przedmiotu ubezpieczenia",
            "musi zawsze wyrazić zgodę na świadczenie ochrony ubezpieczeniowej",
            "powinien otrzymać ogólne warunki ubezpieczenia pod rygorem braku możliwości powołania się przez ubezpieczyciela na ograniczenia i wyłączenia spod zakresu ochrony"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 61
    },
    {
        "id": 762,
        "question": "Czy bank może pośredniczyć w zawieraniu umów ubezpieczenia?",
        "answers": [
            "nigdy, bank ma ustawowy zakaz wykonywania pośrednictwa ubezpieczeniowego",
            "tak, ale zawsze po uzyskaniu dodatkowego zezwolenia organu nadzoru na wykonywanie pośrednictwa ubezpieczeniowego",
            "tak, na ogólnych zasadach",
            "zawsze i bez dodatkowych wymogów"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 62
    },
    {
        "id": 763,
        "question": "Jeżeli w odpowiedzi na złożoną ofertę ubezpieczyciel doręcza polisę zawierającą postanowienia, które odbiegają na niekorzyść ubezpieczającego od treści złożonej oferty, obowiązany jest zwrócić ubezpieczającemu na to uwagę:",
        "answers": [
            "wyznaczając termin do zgłoszenia sprzeciwu wynoszący co najmniej 7 dni",
            "wyznaczając termin do zgłoszenia sprzeciwu wynoszący co najmniej 10 dni",
            "wyznaczając termin do zgłoszenia sprzeciwu wynoszący co najmniej 7 dni, a w przypadku konsumenta 14 dni",
            "wyznaczając termin do zgłoszenia sprzeciwu wynoszący co najmniej 14 dni, a w przypadku konsumenta 30 dni"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 63
    },
    {
        "id": 764,
        "question": "Zgodnie z rozporządzeniem MF wysokość minimalnej sumy gwarancyjnej obowiązkowego ubezpieczenia sponsora i badacza w związku z prowadzeniem badania klinicznego wyrobu lub badania działania wyrobu medycznego do diagnostyki in vitro jest uzależniona od:",
        "answers": [
            "kategorii oceny klinicznej badania medycznego określonej przez Ministra Zdrowia",
            "liczby pielęgniarek i położnych biorących udział w badaniu klinicznym",
            "rodzaju placówki medycznej, w której odbywa się badanie",
            "liczby uczestników danego badania"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 64
    },
    {
        "id": 765,
        "question": "Zakres ochrony w Sekcji II (OC) polisy CAR obejmuje:",
        "answers": [
            "szkody w przedmiocie realizowanych robót powstałe wskutek błędów wykonawcy",
            "odpowiedzialność cywilną inwestora i wykonawców za szkody osobowe i rzeczowe wyrządzone osobom trzecim w związku z prowadzonymi robotami",
            "wyłącznie odpowiedzialność cywilną inwestora za szkody rzeczowe u osób trzecich",
            "szkody w mieniu otaczającym należącym do inwestora"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 65
    },
    {
        "id": 766,
        "question": "Broker ubezpieczeniowy przechowuje pełnomocnictwa do wykonywania czynności brokerskich w zakresie ubezpieczeń w imieniu klienta oraz dokumenty dotyczące wynagrodzenia brokera, przez okres:",
        "answers": [
            "ustalony z klientem, niemniej nie dłużej niż 12 miesięcy od dnia zakończenia współpracy z klientem",
            "współpracy z klientem",
            "10 lat od dnia zakończenia współpracy z klientem",
            "10 miesięcy od dnia zakończenia współpracy z klientem"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 66
    },
    {
        "id": 767,
        "question": "Zgodnie z ustawą o dystrybucji ubezpieczeń, w postaci ustandaryzowanego dokumentu (wzoru) są przekazywane informacje o proponowanym produkcie ubezpieczeniowym, którego przedmiotem są ryzyka wymienione:",
        "answers": [
            "w Kodeksie cywilnym",
            "w dziale I załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "w dziale II załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej",
            "wyłącznie w dziale II w grupach 3 i 10 załącznika do ustawy o działalności ubezpieczeniowej i reasekuracyjnej"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 67
    },
    {
        "id": 768,
        "question": "Określona przepisami prawa minimalna suma gwarancyjna w obowiązkowym ubezpieczeniu OC rolników w przypadku szkód w mieniu obecnie:",
        "answers": [
            "nie jest limitowana",
            "wynosi równowartość w złotych kwoty 1 050 000 euro w odniesieniu do jednego zdarzenia, bez względu na liczbę poszkodowanych",
            "wynosi równowartość w złotych kwoty 100 000 euro w odniesieniu na jednego poszkodowanego",
            "wynosi 6 021 600 złotych w odniesieniu do jednego zdarzenia, bez względu na liczbę poszkodowanych"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 68
    },
    {
        "id": 769,
        "question": "W przypadku gdy wyjaśnienie okoliczności niezbędnych do ustalenia odpowiedzialności UFG nie było możliwe w terminie 30 dni od dnia otrzymania przez UFG akt szkodowych od zakładu ubezpieczeń, świadczenie powinno być przez UFG spełnione w terminie:",
        "answers": [
            "1 dnia od dnia wyjaśnienia tych okoliczności",
            "14 dni od dnia wyjaśnienia tych okoliczności",
            "3 miesięcy od dnia wyjaśnienia tych okoliczności",
            "6 miesięcy od dnia wyjaśnienia tych okoliczności"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 69
    },
    {
        "id": 770,
        "question": "Cechą charakterystyczną ubezpieczenia mienia w systemie na pierwsze ryzyko jest to, że:",
        "answers": [
            "ochrona obejmuje wyłącznie pierwszą szkodę w okresie ubezpieczenia",
            "w razie szkody nie stosuje się proporcjonalnej redukcji odszkodowania (zasady proporcji)",
            "suma ubezpieczenia musi odpowiadać pełnej wartości mienia",
            "składka może być opłacona wyłącznie jednorazowo"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 70
    },
    {
        "id": 771,
        "question": "Po upływie terminu przedawnienia roszczenia:",
        "answers": [
            "zobowiązanie, z którego wynika roszczenie, wygasa",
            "nie może ono być przedmiotem przelewu",
            "może być przedmiotem przelewu tylko jeżeli było stwierdzone pismem",
            "ten, przeciwko komu przysługuje roszczenie, może uchylić się od jego zaspokojenia"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 71
    },
    {
        "id": 772,
        "question": "Po przejściu wichury nie ma możliwości ustalenia prędkości wiatru w ubezpieczonej lokalizacji (brak stacji pomiarowej). Zgodnie z typowymi OWU mienia od ognia i innych zdarzeń losowych wystąpienie huraganu można wówczas wykazać:",
        "answers": [
            "masowym charakterem szkód wiatrowych w bezpośrednim sąsiedztwie ubezpieczonego mienia",
            "wyłącznie ekspertyzą IMGW sporządzoną dla danego regionu",
            "oświadczeniem ubezpieczonego o odczuwalnej sile wiatru",
            "w żaden sposób – brak pomiaru wyklucza odpowiedzialność ubezpieczyciela"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 72
    },
    {
        "id": 773,
        "question": "Inwestor dokonał odbioru częściowego ukończonego odcinka robót przed zakończeniem całej inwestycji. Dla tej odebranej części ochrona z Sekcji I polisy CAR:",
        "answers": [
            "trwa bez zmian aż do wygaśnięcia polisy dla całej budowy",
            "zasadniczo wygasa z chwilą odbioru, o ile polisy nie rozszerzono o ubezpieczenie obiektów ukończonych",
            "przekształca się automatycznie w ubezpieczenie od ognia i innych zdarzeń losowych",
            "przechodzi w całości do polisy OC wykonawcy"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 73
    },
    {
        "id": 774,
        "question": "Ubezpieczenia gwarantowane przez Skarb Państwa mogą być realizowane w formie:",
        "answers": [
            "ubezpieczenia bezpośredniego",
            "ubezpieczenia pośredniego (reasekuracji)",
            "udzielenia gwarancji finansowej",
            "wszystkich wymienionych form"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 74
    },
    {
        "id": 775,
        "question": "W trakcie budowy zawalił się strop wykonany z betonu o zaniżonej, niezgodnej z projektem klasie wytrzymałości. Polisa CAR nie zawiera klauzul dodatkowych. Szkoda w zawalonym stropie:",
        "answers": [
            "jest objęta ochroną jako nagłe i nieprzewidziane zdarzenie na placu budowy",
            "jest objęta ochroną w 50% w ramach udziału własnego",
            "jest objęta ochroną wyłącznie w zakresie kosztów uprzątnięcia pozostałości",
            "podlega standardowemu wyłączeniu szkód wynikłych z wadliwych materiałów lub wadliwego wykonawstwa"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 75
    },
    {
        "id": 776,
        "question": "Według danych KNF, opublikowanych w biuletynie kwartalnym na koniec roku 2025, liczba krajowych zakładów prowadzących działalność operacyjną w Dziale I ubezpieczeń, zorganizowanych w formie towarzystwa ubezpieczeń wzajemnych, wynosiła:",
        "answers": [
            "4",
            "3",
            "1",
            "zero"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 76
    },
    {
        "id": 777,
        "question": "Dystrybucja ubezpieczeń polega na:",
        "answers": [
            "udzielaniu pomocy przez pośrednika ubezpieczeniowego w administrowaniu umowami ubezpieczenia lub umowami gwarancji ubezpieczeniowych i ich wykonywaniu, także w sprawach o odszkodowanie lub świadczenie",
            "przekazywaniu potencjalnym klientom informacji na temat produktów ubezpieczeniowych, w przypadku gdy przedsiębiorca nie podejmuje dodatkowych działań mających pomóc w zawarciu umowy ubezpieczenia",
            "wycenie szkód i sporządzaniu ekspertyz związanych z tymi szkodami",
            "obsłudze roszczeń kierowanych do zakładu ubezpieczeń"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 77
    },
    {
        "id": 778,
        "question": "Linię produkcyjną o wartości 3 mln zł ubezpieczono od ognia na sumę 5 mln zł (nadubezpieczenie). W pożarze linia ulega całkowitemu zniszczeniu. Ubezpieczyciel wypłaci:",
        "answers": [
            "3 mln zł – odszkodowanie nie może przewyższyć rzeczywistej wysokości szkody",
            "5 mln zł, czyli pełną sumę ubezpieczenia wskazaną w polisie",
            "4 mln zł, jako średnią sumy ubezpieczenia i wartości mienia",
            "1,8 mln zł przez zastosowanie zasady proporcji (3 × 3/5)"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 78
    },
    {
        "id": 779,
        "question": "Odpowiedzialność cywilną odszkodowawczą opartą na zasadzie ryzyka ponosi w odniesieniu do korzystania z mechanicznego środka komunikacji poruszanego za pomocą sił przyrody:",
        "answers": [
            "każdy kierujący pojazdem",
            "właściciel pojazdu",
            "każdy posiadacz pojazdu",
            "samoistny posiadacz pojazdu"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 79
    },
    {
        "id": 780,
        "question": "Zgodnie z rozporządzeniem Ministra Finansów w sprawie szczególnych zasad rachunkowości zakładów ubezpieczeń i zakładów reasekuracji, pojęcie składka zarobiona oznacza:",
        "answers": [
            "składkę przypisaną w okresie sprawozdawczym pomniejszoną o stan rezerwy składek na koniec okresu sprawozdawczego i powiększoną o stan rezerwy składek na początek okresu sprawozdawczego",
            "składkę zainkasowaną w okresie sprawozdawczym pomniejszoną o stan rezerwy składek na koniec okresu sprawozdawczego i powiększoną o stan rezerwy składek na początek okresu sprawozdawczego",
            "składkę należną za cały okres odpowiedzialności z tytułu zawartych w okresie sprawozdawczym umów ubezpieczenia albo umów reasekuracji",
            "składkę z tytułu umów ubezpieczenia albo umów reasekuracji należną w okresie sprawozdawczym, niezależnie od tego, czy kwoty te opłacono czy też nie"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 80
    },
    {
        "id": 781,
        "question": "Obowiązek zatrudnienia doradcy inwestycyjnego dotyczy zakładu ubezpieczeń, który oferuje ubezpieczenia na życie:",
        "answers": [
            "tylko jeśli działa algorytmicznym celem emerytalnym (jak PPE, PPK, IKE lub IKZE)",
            "związane z ubezpieczeniowym funduszem kapitałowym",
            "stanowiące ubezpieczeniowe produkty inwestycyjne",
            "jeżeli ryzyko lokaty ponosi ubezpieczający"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 81
    },
    {
        "id": 782,
        "question": "Pierwszą tablicę śmiertelności opracował:",
        "answers": [
            "Lorenzo Tonti, lekarz",
            "Blaise Pascal, fizyk i matematyk",
            "Christian Huyghens, fizyk",
            "Edmund Halley, astronom"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 82
    },
    {
        "id": 783,
        "question": "Postanowienia ogólnych warunków ubezpieczenia lub postanowienia umowy ubezpieczenia sprzeczne z przepisami Kodeksu cywilnego o umowie ubezpieczenia:",
        "answers": [
            "są nieważne",
            "są nieważne, chyba że dalsze przepisy przewidują wyjątki",
            "są bezskuteczne",
            "są bezskuteczne, chyba że dalsze przepisy przewidują wyjątki"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 83
    },
    {
        "id": 784,
        "question": "Minimalna suma gwarancyjna obowiązkowego ubezpieczenia OC operatora systemu bezzałogowego statku powietrznego o masie startowej od 0,25 kg do 20 kg w okresie ubezpieczenia nie dłuższym niż 12 miesięcy, w odniesieniu do jednego zdarzenia wynosi:",
        "answers": [
            "równowartość w złotych 50 000 SDR",
            "równowartość w złotych 75 000 SDR",
            "równowartość w złotych 100 000 SDR",
            "równowartość w złotych 125 000 SDR"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 84
    },
    {
        "id": 785,
        "question": "Jednolite wymogi dotyczące bezpieczeństwa sieci i systemów informatycznych wspierających procesy biznesowe podmiotów finansowych ustanawia:",
        "answers": [
            "krajowe produkty finansowe",
            "rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2554 z dnia 14 grudnia 2022 r. w sprawie operacyjnej odporności cyfrowej sektora finansowego (tzw. DORA)",
            "Komisja Nadzoru Finansowego",
            "ustawa z dnia 21 lipca 2006 r. o nadzorze finansowym i ubezpieczeniowym"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 85
    },
    {
        "id": 786,
        "question": "Obowiązek brokera ubezpieczeniowego zachowania w tajemnicy informacji uzyskanych w związku z wykonywaniem czynności brokerskich w zakresie ubezpieczeń:",
        "answers": [
            "nie ciąży na brokerze ubezpieczeniowym po rozwiązaniu stosunku umownego ze zleceniodawcą",
            "nie dotyczy osób, przy pomocy których broker wykonuje czynności brokerskie",
            "nie dotyczy informacji udzielanych na wniosek sądu lub prokuratora, o ile są niezbędne w toczącym się postępowaniu",
            "nie dotyczy osób trzecich, które mają interes prawny w ujawnieniu tych informacji"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 86
    },
    {
        "id": 787,
        "question": "Właściwe rozporządzenie Ministra Rozwoju i Finansów w sprawie obowiązkowego ubezpieczenia odpowiedzialności cywilnej firmy audytorskiej, zawiera regulacje dotyczące:",
        "answers": [
            "wysokości taryf ubezpieczeniowych w tym ubezpieczeniu",
            "zasad wypowiedzenia tej umowy ubezpieczenia",
            "minimalnej sumy gwarancyjnej tego ubezpieczenia",
            "wysokości i rodzaju sankcji za niedopełnienie obowiązku ubezpieczenia"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 87
    },
    {
        "id": 788,
        "question": "Jeżeli budynek ubezpieczono według wartości odtworzeniowej, to odszkodowanie za szkodę:",
        "answers": [
            "zostanie pomniejszone o stopień zużycia technicznego budynku",
            "odpowiada wartości rynkowej budynku z dnia szkody",
            "odpowiada wartości księgowej netto budynku",
            "odpowiada kosztom odbudowy lub naprawy budynku do stanu nowego, bez potrąceń z tytułu zużycia"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 88
    },
    {
        "id": 789,
        "question": "Która relacja między wartościami scenariuszy EML (Estimated Maximum Loss), PML (Probable Maximum Loss) i MPL (Maximum Possible Loss), wyznaczonymi dla tego samego obiektu, jest prawidłowa?",
        "answers": [
            "wartość EML jest najwyższa, ponieważ uwzględnia pełną zawodność zabezpieczeń",
            "wartość MPL jest nie niższa niż PML, a PML nie niższa niż EML – im bardziej pesymistyczne założenia co do zadziałania zabezpieczeń, tym wyższa szacowana strata",
            "wszystkie trzy wartości są z definicji równe sumie ubezpieczenia mienia",
            "wartość MPL jest zawsze niższa od EML, ponieważ uwzględnia działanie oddzieleń ogniowych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 89
    },
    {
        "id": 790,
        "question": "Zasiedzenie to sposób nabycia prawa własności:",
        "answers": [
            "wyłącznie rzeczy ruchomej",
            "wyłącznie nieruchomości",
            "rzeczy ruchomej lub nieruchomości",
            "pożytków z posiadania rzeczy"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 90
    },
    {
        "id": 791,
        "question": "Na podstawie obowiązujących przepisów, wskaż w którym obowiązkowym ubezpieczeniu OC wysokość minimalnej sumy gwarancyjnej została wyrażona w SDR (Special Drawing Rights):",
        "answers": [
            "obowiązkowym ubezpieczeniu OC podmiotu wykonującego działalność leczniczą",
            "obowiązkowym ubezpieczeniu OC operatora systemu bezzałogowego statku powietrznego użytkującego bezzałogowy statek powietrzny o masie startowej od 0,25 kg do 20 kg",
            "obowiązkowym ubezpieczeniu OC właścicieli aptek",
            "obowiązkowym ubezpieczeniu OC komorników sądowych"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 91
    },
    {
        "id": 792,
        "question": "Co do zasady zgodnie z Kodeksem cywilnym, w przypadku umowy ubezpieczenia na życie, jeżeli składka lub jej rata nie została zapłacona w terminie mimo uprzedniego wezwania do zapłaty w dodatkowym terminie:",
        "answers": [
            "ochrona ulega zawieszeniu",
            "umowa wygasa",
            "umowę uważa się za wypowiedzianą przez ubezpieczającego",
            "umowę uważa się za wypowiedzianą przez ubezpieczyciela"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 92
    },
    {
        "id": 793,
        "question": "W przypadku wyrządzenia szkody ruchem pojazdów mechanicznych przez członków sił zbrojnych państw obcych, będących posiadaczami pojazdów mechanicznych sił zbrojnych tych państw, poszkodowany może dochodzić roszczeń bezpośrednio od:",
        "answers": [
            "komisji do spraw rozpatrywania roszczeń powołanej przez Ministra Obrony Narodowej",
            "Ubezpieczeniowego Funduszu Gwarancyjnego",
            "Komisji Nadzoru Finansowego",
            "Rzecznika Finansowego"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 93
    },
    {
        "id": 794,
        "question": "Koordynacja ustalania wartości rezerw techniczno-ubezpieczeniowych dla celów wypłacalności oraz ustalanie wartości rezerw techniczno-ubezpieczeniowych dla celów rachunkowości należy co najmniej do jednej z funkcji należącej do systemu zarządzania:",
        "answers": [
            "funkcji zarządzania ryzykiem",
            "funkcji zgodności z przepisami",
            "funkcji aktuarialnej",
            "funkcji audytu wewnętrznego"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 94
    },
    {
        "id": 795,
        "question": "W razie wątpliwości umowę ubezpieczenia uważa się za zawartą:",
        "answers": [
            "z dniem zapłaty składki lub jej pierwszej raty",
            "z dniem podpisania polisy przez ubezpieczyciela",
            "z chwilą doręczenia ubezpieczającemu dokumentu ubezpieczenia",
            "z dniem przyjęcia wniosku o zawarcie umowy ubezpieczenia"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 95
    },
    {
        "id": 796,
        "question": "Zgodnie z najlepiej pojętym interesem klientów ma obowiązek postępować:",
        "answers": [
            "wyłącznie broker ubezpieczeniowy",
            "wyłącznie pośrednik ubezpieczeniowy",
            "wyłącznie ubezpieczający w przypadku umowy ubezpieczenia zawieranej na cudzy rachunek",
            "każdy dystrybutor ubezpieczeń"
        ],
        "correct": 3,
        "comment": "LIPIEC 2026",
        "sourceNumber": 96
    },
    {
        "id": 797,
        "question": "Wartość robót i materiałów w kontrakcie budowlanym wynosi 18 mln zł, prace tymczasowe 1 mln zł, a przewidywane koszty uprzątnięcia pozostałości (objęte ochroną) 0,5 mln zł. Suma ubezpieczenia w Sekcji I polisy CAR powinna wynosić:",
        "answers": [
            "18 mln zł",
            "19 mln zł",
            "19,5 mln zł",
            "18,5 mln zł"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 97
    },
    {
        "id": 798,
        "question": "Według raportu PIU „Polski rynek bancassurance 4 kw. 2025”, składka przypisana brutto na koniec 2025 r. w kanale bancassurance w Dziale II wyniosła:",
        "answers": [
            "6,9 mld PLN",
            "3,4 mld PLN",
            "2,5 mld PLN",
            "1,8 mld PLN"
        ],
        "correct": 2,
        "comment": "LIPIEC 2026",
        "sourceNumber": 98
    },
    {
        "id": 799,
        "question": "Ustalenia przez dystrybutora ubezpieczeń, które mogłyby stanowić zachętę do proponowania klientowi określonej umowy ubezpieczenia w sytuacji gdy dystrybutor ubezpieczeń mógłby zaproponować inną umowę, która lepiej odpowiadałaby potrzebom klienta, są:",
        "answers": [
            "zakazane",
            "dopuszczone",
            "dopuszczone w przypadku umów ubezpieczenia obejmujących małe ryzyka",
            "poza regulacją ustawową"
        ],
        "correct": 0,
        "comment": "LIPIEC 2026",
        "sourceNumber": 99
    },
    {
        "id": 800,
        "question": "Budynek A: 60 mln zł, wys. 20 m, wyposażony w tryskacze; budynek B: 40 mln zł, wys. 12 m; budynek C: 25 mln zł, wys. 10 m. Odległości: A–B 12 m, A–C 65 m, B–C 60 m. Uproszczony MPL (Maximum Possible Loss) dla tej lokalizacji wynosi:",
        "answers": [
            "60 mln zł",
            "100 mln zł",
            "125 mln zł",
            "40 mln zł"
        ],
        "correct": 1,
        "comment": "LIPIEC 2026",
        "sourceNumber": 100
    },
];


/* =========================================================
   ZMIENNE
   ========================================================= */


let singlePool = [];

let currentSingleQuestion = null;

let examQuestions = [];

let examAnswers = [];

let examStarted = false;


/* =========================================================
   ELEMENTY HTML
   ========================================================= */


const singleBox = document.getElementById("singleBox");
const nextSingleBtn = document.getElementById("nextSingle");

const examBox = document.getElementById("examBox");
const examInfo = document.getElementById("examInfo");

const finishExamBtn = document.getElementById("finishExamBtn");

const examResult = document.getElementById("examResult");

const examProgress = document.getElementById("examProgress");
const examProgressText = document.getElementById("examProgressText");

const examProgressContainer =
    document.getElementById("examProgressContainer");

const statsBox = document.getElementById("statsBox");
const rankingBox = document.getElementById("rankingBox");

const themeBtn = document.getElementById("themeBtn");


/* =========================================================
   JEDNORAZOWE WYZEROWANIE POSTĘPU
   ========================================================= */

const progressResetVersion = "2026-09-08-reset-1";

if (localStorage.getItem("progressResetVersion") !== progressResetVersion) {
    localStorage.removeItem("questionStats");
    localStorage.removeItem("ranking");
    localStorage.setItem("progressResetVersion", progressResetVersion);
}


/* =========================================================
   LOCAL STORAGE - STATYSTYKI
   ========================================================= */


function getQuestionStats() {

    const saved = localStorage.getItem("questionStats");

    if (!saved) {
        return {};
    }

    try {
        return JSON.parse(saved);
    } catch (error) {
        return {};
    }
}


function saveQuestionStats(stats) {

    localStorage.setItem(
        "questionStats",
        JSON.stringify(stats)
    );
}


/* =========================================================
   ZAPIS ODPOWIEDZI NA PYTANIE
   ========================================================= */


function registerAnswer(question, isCorrect) {

    const stats = getQuestionStats();

    const id = String(question.id);

    if (!stats[id]) {

        stats[id] = {
            correct: 0,
            wrong: 0
        };
    }


    if (isCorrect) {
        stats[id].correct++;
    } else {
        stats[id].wrong++;
    }


    saveQuestionStats(stats);
}


/* =========================================================
   LOSOWANIE
   ========================================================= */


function shuffle(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [copy[i], copy[j]] =
            [copy[j], copy[i]];
    }

    return copy;
}


/* =========================================================
   MENU
   ========================================================= */


function showPage(page, button) {

    document
        .querySelectorAll(".page")
        .forEach(section => {
            section.classList.remove("active");
        });


    document
        .querySelectorAll(".menu")
        .forEach(menu => {
            menu.classList.remove("active");
        });


    const selectedPage =
        document.getElementById(page);


    if (selectedPage) {
        selectedPage.classList.add("active");
    }


    if (button) {
        button.classList.add("active");
    }


    if (page === "stats") {
        showStats();
        showRanking();
    }
}


/* =========================================================
   JEDNO PYTANIE
   ========================================================= */


function resetSinglePool() {

    singlePool = shuffle(questions);
}


/* =========================================================
   START JEDNEGO PYTANIA
   ========================================================= */


function startSingle() {

    if (questions.length === 0) {
        return;
    }


    if (singlePool.length === 0) {
        resetSinglePool();
    }


    currentSingleQuestion =
        singlePool.pop();


    renderSingleQuestion(
        currentSingleQuestion
    );
}


/* =========================================================
   WYŚWIETLENIE JEDNEGO PYTANIA
   ========================================================= */


function renderSingleQuestion(question) {

    nextSingleBtn.classList.add("hidden");


    const letters = ["A", "B", "C", "D"];


    let html = `
        <div class="questionCard">

            <div class="questionNumber">
                Losowe pytanie
            </div>

            <div class="examSource">
                📅 Egzamin: ${escapeHTML(question.comment)} · pytanie ${question.sourceNumber}
            </div>

            <div class="question">
                ${escapeHTML(question.question)}
            </div>

            <div class="answers">
    `;


    question.answers.forEach((answer, index) => {

        html += `
            <button
                class="answer"
                onclick="answerSingle(${index})">

                <strong>${letters[index]}.</strong>
                ${escapeHTML(answer)}

            </button>
        `;
    });


    html += `
            </div>

        </div>
    `;


    singleBox.innerHTML = html;
}


/* =========================================================
   ODPOWIEDŹ - JEDNO PYTANIE
   ========================================================= */


function answerSingle(selectedIndex) {

    if (!currentSingleQuestion) {
        return;
    }


    const buttons =
        singleBox.querySelectorAll(".answer");


    buttons.forEach(button => {
        button.disabled = true;
    });


    const selectedButton =
        buttons[selectedIndex];


    const correctButton =
        buttons[currentSingleQuestion.correct];


    selectedButton.classList.add("selected");


    const isCorrect =
        selectedIndex === currentSingleQuestion.correct;


    if (isCorrect) {

        selectedButton.classList.add("correct");

    } else {

        selectedButton.classList.add("wrong");

        correctButton.classList.add("correct");
    }


    registerAnswer(
        currentSingleQuestion,
        isCorrect
    );


    nextSingleBtn.classList.remove("hidden");
}


/* =========================================================
   NASTĘPNE PYTANIE
   ========================================================= */


function nextSingle() {

    startSingle();
}


/* =========================================================
   START EGZAMINU
   ========================================================= */


function startExam() {

    const amount =
        Number(
            document.getElementById("examAmount").value
        );


    if (questions.length < amount) {

        examInfo.classList.remove("hidden");

        examInfo.innerHTML = `
            ⚠️ Baza zawiera obecnie
            <strong>${questions.length}</strong>
            pytań, a wybrano
            <strong>${amount}</strong>.
            <br><br>
            Dodaj więcej pytań do tablicy
            <code>questions</code> w pliku
            <code>script.js</code>.
            <br><br>
            Pytania nie będą automatycznie powtarzane.
        `;

        return;
    }


    const nickInput =
        document.getElementById("nick");


    let nick =
        nickInput.value.trim();


    if (!nick) {
        nick = "Anonim";
    }


    /*
        Losujemy pytania bez powtarzania.
    */

    examQuestions =
        shuffle(questions).slice(0, amount);


    examAnswers =
        new Array(amount).fill(null);


    examStarted = true;


    examBox.innerHTML = "";

    examResult.innerHTML = "";


    examInfo.classList.remove("hidden");

    examInfo.innerHTML = `
        📝 Egzamin dla:
        <strong>${escapeHTML(nick)}</strong>
        <br>
        Liczba pytań:
        <strong>${amount}</strong>
    `;


    examProgressContainer
        .classList.remove("hidden");


    finishExamBtn
        .classList.remove("hidden");


    renderExam();


    updateExamProgress();


    /*
        Przewijamy użytkownika do początku egzaminu.
    */

    examBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   WYŚWIETLENIE CAŁEGO EGZAMINU
   ========================================================= */


function renderExam() {

    const letters = ["A", "B", "C", "D"];


    let html = "";


    examQuestions.forEach((question, questionIndex) => {

        html += `
            <div
                class="examQuestion"
                id="examQuestion-${questionIndex}">

                <div class="questionNumber">
                    Pytanie ${questionIndex + 1}
                    z ${examQuestions.length}
                </div>

                <div class="examSource">
                    📅 Egzamin: ${escapeHTML(question.comment)} · pytanie ${question.sourceNumber}
                </div>

                <div class="question">
                    ${escapeHTML(question.question)}
                </div>

                <div class="answers">
        `;


        question.answers.forEach(
            (answer, answerIndex) => {

                html += `
                    <button
                        class="answer"
                        id="examAnswer-${questionIndex}-${answerIndex}"
                        onclick="answerExam(
                            ${questionIndex},
                            ${answerIndex}
                        )">

                        <strong>
                            ${letters[answerIndex]}.
                        </strong>

                        ${escapeHTML(answer)}

                    </button>
                `;
            }
        );


        html += `
                </div>

            </div>
        `;
    });


    examBox.innerHTML = html;
}


/* =========================================================
   ODPOWIEDŹ W EGZAMINIE
   ========================================================= */


function answerExam(
    questionIndex,
    selectedIndex
) {

    if (!examStarted) {
        return;
    }


    /*
        Jeśli pytanie zostało już odpowiedziane,
        niczego nie zmieniamy.
    */

    if (
        examAnswers[questionIndex] !== null
    ) {
        return;
    }


    const question =
        examQuestions[questionIndex];


    examAnswers[questionIndex] =
        selectedIndex;


    const buttons = [];


    for (let i = 0; i < 4; i++) {

        const button =
            document.getElementById(
                `examAnswer-${questionIndex}-${i}`
            );

        if (button) {
            buttons.push(button);
        }
    }


    buttons.forEach(button => {
        button.disabled = true;
    });


    const selectedButton =
        buttons[selectedIndex];


    const correctButton =
        buttons[question.correct];


    selectedButton.classList.add("selected");


    const isCorrect =
        selectedIndex === question.correct;


    if (isCorrect) {

        selectedButton.classList.add("correct");

    } else {

        selectedButton.classList.add("wrong");

        correctButton.classList.add("correct");
    }


    const questionElement =
        document.getElementById(
            `examQuestion-${questionIndex}`
        );


    if (questionElement) {
        questionElement.classList.add("answered");
    }


    registerAnswer(
        question,
        isCorrect
    );


    updateExamProgress();
}


/* =========================================================
   POSTĘP EGZAMINU
   ========================================================= */


function updateExamProgress() {

    if (!examQuestions.length) {
        return;
    }


    const answered =
        examAnswers.filter(
            answer => answer !== null
        ).length;


    const percentage =
        (answered / examQuestions.length) * 100;


    examProgress.style.width =
        `${percentage}%`;


    examProgressText.textContent =
        `${answered} / ${examQuestions.length} odpowiedzi`;
}


/* =========================================================
   ZAKOŃCZENIE EGZAMINU
   ========================================================= */


function finishExam() {

    if (!examStarted) {
        return;
    }


    const unanswered =
        examAnswers.filter(
            answer => answer === null
        ).length;


    if (unanswered > 0) {

        const confirmed =
            confirm(
                `Nie odpowiedziano jeszcze na ${unanswered} ` +
                `pytań.\n\nCzy na pewno chcesz zakończyć egzamin?`
            );


        if (!confirmed) {
            return;
        }
    }


    let score = 0;


    examQuestions.forEach(
        (question, index) => {

            if (
                examAnswers[index] ===
                question.correct
            ) {
                score++;
            }
        }
    );


    const total =
        examQuestions.length;


    const percent =
        Math.round(
            (score / total) * 100
        );


    const nickInput =
        document.getElementById("nick");


    let nick =
        nickInput.value.trim();


    if (!nick) {
        nick = "Anonim";
    }


    /*
        Zapis wyniku do rankingu.
    */

    saveRankingResult(
        nick,
        score,
        total,
        percent
    );


    /*
        Koniec egzaminu.
    */

    examStarted = false;


    finishExamBtn.classList.add("hidden");


    examProgress.style.width = "100%";


    examProgressText.textContent =
        `${total} / ${total} odpowiedzi`;


    let message = "";


    if (percent >= 90) {
        message = "🏆 Rewelacyjny wynik!";
    } else if (percent >= 75) {
        message = "👏 Bardzo dobry wynik!";
    } else if (percent >= 50) {
        message = "👍 Jest dobrze, ale można jeszcze poćwiczyć.";
    } else {
        message = "📚 Warto jeszcze powtórzyć materiał.";
    }


    examResult.innerHTML = `
        <div class="resultBox">

            <h2>🎉 Egzamin zakończony!</h2>

            <div class="resultScore">
                ${score} / ${total}
            </div>

            <div class="resultPercent">
                ${percent}%
            </div>

            <p>
                ${message}
            </p>

        </div>
    `;


    showRanking();


    /*
        Przewijamy do wyniku.
    */

    examResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================================================
   RANKING
   ========================================================= */


function getRanking() {

    const saved =
        localStorage.getItem("ranking");


    if (!saved) {
        return [];
    }


    try {

        return JSON.parse(saved);

    } catch (error) {

        return [];
    }
}


function saveRankingResult(
    nick,
    score,
    total,
    percent
) {

    const ranking =
        getRanking();


    ranking.push({

        nick: nick,

        score: score,

        total: total,

        percent: percent,

        date: new Date().toLocaleDateString("pl-PL")

    });


    /*
        Najpierw procent,
        później liczba punktów.
    */

    ranking.sort(
        (a, b) => {

            if (b.percent !== a.percent) {
                return b.percent - a.percent;
            }

            return b.score - a.score;
        }
    );


    /*
        Przechowujemy maksymalnie
        20 najlepszych wyników.
    */

    const best =
        ranking.slice(0, 20);


    localStorage.setItem(
        "ranking",
        JSON.stringify(best)
    );
}


/* =========================================================
   WYŚWIETLENIE RANKINGU
   ========================================================= */


function showRanking() {

    const ranking =
        getRanking();


    if (ranking.length === 0) {

        rankingBox.innerHTML = `
            <div class="empty">
                🏆 Nie ma jeszcze wyników.
                <br>
                Rozwiąż pierwszy egzamin!
            </div>
        `;

        return;
    }


    let html = "";


    ranking.forEach(
        (result, index) => {

            html += `
                <div class="rank">

                    <div>

                        <div class="rankName">
                            ${index + 1}.
                            ${escapeHTML(result.nick)}
                        </div>

                        <small>
                            ${result.date}
                        </small>

                    </div>

                    <div class="rankScore">
                        ${result.score}/${result.total}
                        (${result.percent}%)
                    </div>

                </div>
            `;
        }
    );


    rankingBox.innerHTML = html;
}


/* =========================================================
   STATYSTYKI
   ========================================================= */


function showStats() {

    const stats =
        getQuestionStats();


    let totalAnswers = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;


    questions.forEach(question => {

        const data =
            stats[String(question.id)];


        if (!data) {
            return;
        }


        totalAnswers +=
            (data.correct || 0) +
            (data.wrong || 0);


        correctAnswers +=
            data.correct || 0;


        wrongAnswers +=
            data.wrong || 0;
    });


    let accuracy = 0;


    if (totalAnswers > 0) {

        accuracy =
            Math.round(
                (correctAnswers /
                    totalAnswers) * 100
            );
    }


    let html = `

        <div class="infoBox">

            <div class="info">
                <strong>
                    ${totalAnswers}
                </strong>
                Odpowiedzi
            </div>

            <div class="info">
                <strong>
                    ${correctAnswers}
                </strong>
                Poprawnych
            </div>

            <div class="info">
                <strong>
                    ${accuracy}%
                </strong>
                Skuteczność
            </div>

        </div>


        <h3>
            📚 Statystyki poszczególnych pytań
        </h3>

        <div class="statsList">
    `;


    questions.forEach(question => {

        const data =
            stats[String(question.id)] || {
                correct: 0,
                wrong: 0
            };


        const total =
            data.correct +
            data.wrong;


        let percent = 0;


        if (total > 0) {

            percent =
                Math.round(
                    (data.correct / total) * 100
                );
        }


        html += `
            <div class="statQuestion">

                <div class="statQuestionTitle">
                    ${escapeHTML(question.question)}
                </div>

                <div class="statNumbers">

                    <span>
                        ✅ Poprawne:
                        <strong>
                            ${data.correct}
                        </strong>
                    </span>

                    <span>
                        ❌ Błędne:
                        <strong>
                            ${data.wrong}
                        </strong>
                    </span>

                    <span>
                        📊 Skuteczność:
                        <strong>
                            ${percent}%
                        </strong>
                    </span>

                </div>

            </div>
        `;
    });


    html += `
        </div>
    `;


    statsBox.innerHTML = html;
}


/* =========================================================
   TRYB CIEMNY
   ========================================================= */


function loadTheme() {

    const theme =
        localStorage.getItem("theme");


    if (theme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☀️";

    } else {

        document.body.classList.remove("dark");

        themeBtn.textContent = "🌙";
    }
}


function toggleTheme() {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeBtn.textContent = "☀️";

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeBtn.textContent = "🌙";
    }
}


themeBtn.addEventListener(
    "click",
    toggleTheme
);


/* =========================================================
   ZABEZPIECZENIE TEKSTU HTML
   =========================================================

   Dzięki temu tekst pytania/odpowiedzi
   nie może przypadkowo potraktować znaków
   < > jako kodu HTML.
*/


function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   START PROGRAMU
   ========================================================= */


loadTheme();

resetSinglePool();

showStats();

showRanking();