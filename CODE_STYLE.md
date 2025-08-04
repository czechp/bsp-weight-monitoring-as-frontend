# RemoteFussion Frontend – CODE STYLE

## Generowanie kodu

## Ogólne
- w folderze src/app twórz foldery dla każdej domeny (np. boxes, controllers, forms).
- w folderach domen twórz podfoldery: component, model, page, service, pipe.
- komponenty twórz w podfolderze component/.
- modele twórz w podfolderze model/.
- serwisy twórz w podfolderze service/.
- strony (widoki) twórz w podfolderze page/.
- pipe, guard, directive twórz w odpowiednich podfolderach (np. pipe/).
- każda domena jest osobnym modułem (np. BoxesModule, ControllersModule).
- nie dodawaj zbędnych komenatarzy

## Moduły
- Importuj nowo stworzone moduł w głównym module aplikacji (app.module.ts).
- Przy tworzeniu modułów twórz od razu strukturę folderów zgodnie z powyższymi zasadami.
- Do nowego modułu zawsze importuj moduł SharedModule
- Nie generuj pliku Readme.md w folderach domen
- Nie używaj modułów lazy loading
- 
## Page
- Strony są kompentami, którę mają swój własy routing.
- Są trzy rodzaje stron (komponentów) które zawierają w sobie inne komponenty:
  - **Strona** – uzywa komponentu PageComponent, który jest wrapperem dla innych komponentów.
  - **Strona z menu** – uzywa komponentu PageWithMenuComponent, który zawiera menu boczne.
  - **Strona z info** – uzywa komponentu PageWithInfoComponent, który zawiera dodatkowe informacje (np. nagłówek, stopka).
- Strona musi posiadać swój własny routing który należy umieścić w pliku [app-routing.module.ts](src/app/app-routing.module.ts) w obiecie `routes`.



## Ogólne zasady
- Stosuj język TypeScript (nie JavaScript) wszędzie tam, gdzie to możliwe.
- Używaj Angular CLI do generowania komponentów, serwisów, modułów itd.
- Każda funkcjonalność powinna być wydzielona do osobnego modułu.
- Stosuj architekturę feature modules (każda domena w osobnym folderze/module).
- Unikaj logiki biznesowej w komponentach – przenoś ją do serwisów.


## Formatowanie
- Wcięcia: 2 spacje (nie tabulatory).
- Maksymalna długość linii: 120 znaków.
- Używaj pojedynczych cudzysłowów ('), z wyjątkiem plików JSON.
- Każdy plik kończ nową linią.
- Używaj średników na końcu instrukcji.

## Nazewnictwo
- Pliki TypeScript: kebab-case (np. box-tile.component.ts).
- Klasy, interfejsy, typy: PascalCase (np. BoxTileComponent, BoxModel).
- Zmienne, funkcje, metody: camelCase (np. getBoxList, boxName).
- Stałe: UPPER_SNAKE_CASE.
- Komponenty, serwisy, moduły, pipe, guard, directive – zawsze z odpowiednim sufiksem (np. .component.ts, .service.ts, .module.ts, .pipe.ts).

## Struktura projektu
- Każda domena (np. boxes, controllers, forms) w osobnym folderze z podziałem na: component, model, page, service, pipe.
- Komponenty w podfolderach component/.
- Modele w podfolderach model/.
- Serwisy w podfolderach service/.
- Strony (widoki) w podfolderach page/.
- Pipe, guard, directive w odpowiednich podfolderach.

## Angular
- Używaj OnPush ChangeDetection wszędzie tam, gdzie to możliwe.
- Stosuj Input/Output do komunikacji między komponentami.
- Unikaj logiki w konstruktorach – używaj ngOnInit.
- Używaj typów i interfejsów do opisu struktur danych.
- Stosuj dependency injection przez konstruktor.
- Unikaj bezpośredniej manipulacji DOM – używaj Renderer2 lub Angularowych dyrektyw.

## TypeScript
- Zawsze określaj typy zmiennych, parametrów i zwracanych wartości.
- Używaj readonly tam, gdzie to możliwe.
- Unikaj any – preferuj unknown lub konkretne typy.
- Używaj interfejsów do opisu struktur danych.
- Stosuj destrukturyzację obiektów/tablic.

## SCSS
- Używaj zmiennych z pliku _variables.scss.
- Stosuj BEM (Block__Element--Modifier) do nazewnictwa klas CSS.
- Unikaj zagnieżdżania powyżej 3 poziomów.
- Każdy komponent ma własny plik .scss.

## Testy
- Każdy komponent, serwis, pipe powinien mieć test jednostkowy.
- Pliki testów: *.spec.ts.
- Stosuj Jasmine i TestBed.

## Inne
- Nie pisz komentarzy
- Funkcje i klasy dokumentuj za pomocą JSDoc.
- Nie commituj zakomentowanego kodu.

## Wytyczne dla Copilot Agent
- Generuj kod zgodnie z powyższymi zasadami.
- Zawsze stosuj odpowiednie typowanie.
- Przestrzegaj struktury folderów i nazewnictwa plików.
- Nie generuj kodu, który łamie powyższe reguły.
- W przypadku wątpliwości – preferuj rozwiązania zgodne z oficjalną dokumentacją Angular i TypeScript.


