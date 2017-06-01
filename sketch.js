// Es muss nicht alles in setup() oder draw() stehen.
// Klassen oder statische Variablen kann man für die Lesbarbeit ganz oben hin schreiben
// oder in eigene Dateien packen

// Wenn alle Dateien geladen wurden und alles bereit ist wird setup() einmal aufgerufen
// Für alles, was einmal am Anfang gemacht werden muss. (Objekte erstellen, Einstellungen ändern)
function setup() {
    createCanvas(windowWidth, windowHeight);
}


// Die draw() Funktion wird standardmäßig 60 mal pro Sekunde aufgerufen
// Für alles, was oft gemacht werden soll. (Position von etwas ändern, Sachen neu berechen)
function draw() {
    
}