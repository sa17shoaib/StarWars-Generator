const Cname = document.getElementById("name");
const height = document.getElementById("height");
const species = document.getElementById("species");
const home = document.getElementById("home");
const image = document.getElementById("cimg");
const button = document.getElementById("generator");

button.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Clicked!");
    const random = Math.ceil(Math.random() * 87);

    Cname.innerHTML = "<em>Loading...<em>";
    height.innerHTML = "<em>Loading...<em>";
    species.innerHTML = "<em>Loading...<em>";
    home.innerHTML = "<em>Loading...<em>";

    fetch("https://akabab.github.io/starwars-api/api/all.json")
    .then(response => response.json())
    .then(character => {
        const obj = character[random];
        image.setAttribute('src',obj['image']);
        Cname.innerHTML = `NAME:<br>${obj['name']}`;
        height.innerHTML = `HEIGHT:<br>${obj['height']}`;
        species.innerHTML = `SPECIES:<br>${obj['species']}`;
        if(obj['homeworld'] == undefined){
            home.innerHTML = `HOMEWORLD:<br>UNKNOWN`;
        }else{
            home.innerHTML = `HOMEWORLD:<br>${obj['homeworld']}`;
        }
    })
});

