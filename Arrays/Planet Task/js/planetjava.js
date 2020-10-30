var planets = []
    planets[0] = "Mercury"
    planets[1] = "Venus"
    planets[2] = "Earth"
    planets[3] = "Mars"
    planets[4] = "Jupiter"
    planets[5] = "Saturn"
    planets[6] = "Uranus"
    planets[7] = "Neptune"
    planets[8] = "Pluto"

var distance = [];
    distance[0] = "52,200,000"
    distance[1] = "108,000,000"
    distance[2] ="147,200,00"
    distance[3] ="217,800,000"
    distance[4] ="770,700,000"
    distance[5] ="1427,000,000"
    distance[6] ="2752,000,000"
    distance[7] ="4529,000,000"
    distance[8] ="4,436,000,000"


for (i = 0; i <planets.length; i++) {
    document.write(planets[i] + " is " + distance[i] + "km, from the sun. " + "</br>");
}
