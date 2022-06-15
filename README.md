# Zadanie rekrutacyjne GravityGlobal na frontend developera

# Aby móc wyświetlić stronę, wystarczy wejść w link:

https://merdzikdominik.github.io/frontend-recruitment-task/

# Dla celów lokalnego developmentu:

Aby móc edytować oraz obserwować zmiany wyglądu strony, należy:\
a) sklonować projekt używając w tym celu polecenia: `git clone https://github.com/merdzikdominik/frontend-recruitment-task.git` \
b) otworzyć folder z projektem w środowisku\
![otwarcie zakładki "plik" oraz kliknięcie "otwórz folder"](https://github.com/merdzikdominik/frontend-recruitment-task/blob/master/images/tut1.png) \
![wybranie folderu "frontend-recruitment-task i kliknięcie przycisku "otwórz"](https://github.com/merdzikdominik/frontend-recruitment-task/blob/master/images/tut2.png) \
c) uruchomić wtyczkę `Live Server` i `Live Sass Compiler`

# Zadanie dodatkowe

Aby móc wyświetlić zadanie dodatkowe, znajdujące się na branchu 'additional-task', należy:\
a) sklonować projekt używając w tym celu polecenia: `git clone https://github.com/merdzikdominik/frontend-recruitment-task.git` \
b) otworzyć folder z projektem w środowisku\
c) uruchomić wtyczkę `Live Server` i `Live Sass Compiler`\
d) w terminalu uruchomić polecenie: `git checkout additional-task`

# Dlaczego nie użyłem Gulpa?

Starałem się zbudować folder dystrybucyjny poleceniem `gulp default`, natomiast cały czas pojawiały mi się błędy w terminalu o problemach z paczkami (głównym źródłem błędów był `node-sass` wymagany przez `gulp-sass`). Próby zaktualizowania paczki na różnych wersjach node'a kończyły się niepowodzeniem.
