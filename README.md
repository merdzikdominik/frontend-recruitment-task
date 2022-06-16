# Zadanie rekrutacyjne GravityGlobal na frontend developera

# Aby móc wyświetlić stronę, wystarczy wejść w link (zawartość strony jest rozszerzona o zadanie dodatkowe):

https://merdzikdominik.github.io/frontend-recruitment-task/

# Dla celów lokalnego developmentu:

Aby móc edytować oraz obserwować zmiany wyglądu strony, należy:\
1) sklonować projekt używając w tym celu polecenia: `git clone https://github.com/merdzikdominik/frontend-recruitment-task.git` \
2) otworzyć folder z projektem w środowisku\
![otwarcie zakładki "plik" oraz kliknięcie "otwórz folder"](https://github.com/merdzikdominik/frontend-recruitment-task/blob/master/images/tut1.png) \
![wybranie folderu "frontend-recruitment-task i kliknięcie przycisku "otwórz"](https://github.com/merdzikdominik/frontend-recruitment-task/blob/master/images/tut2.png) \
3) uruchomić wtyczkę `Live Server` i `Live Sass Compiler`
Domyślnie znajdziemy się na branchu `master` który zawiera podstawowy wygląd z [Figmy](https://www.figma.com/file/dqY9uYrUYPyr5yjeECoy6X/Recruitment-Task).

# Zadanie dodatkowe

Aby móc edytować oraz obserować zmiany wyglądu zadania dodatkowego, znajdującego się na branchu 'additional-task', należy:\
1) sklonować projekt używając w tym celu polecenia: `git clone https://github.com/merdzikdominik/frontend-recruitment-task.git` \
2) otworzyć folder z projektem w środowisku\
3) uruchomić wtyczkę `Live Server` i `Live Sass Compiler`\
4) w terminalu uruchomić polecenie: `git checkout additional-task`

# Problemy ze zbudowaniem produkcyjnego katalogu z użyciem Gulpa

Starałem się zbudować folder dystrybucyjny poleceniem `gulp default`, natomiast cały czas pojawiały mi się błędy w terminalu o problemach z paczkami (głównym źródłem błędów był `node-sass` wymagany przez `gulp-sass`). Próby zaktualizowania paczki na różnych wersjach node'a kończyły się niepowodzeniem.
