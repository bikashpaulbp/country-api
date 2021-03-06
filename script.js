


fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(all => display(all))

    

function display(all) {
    
    
    

    let names = all.map(country => country.name);
    let capitals = all.map(country => country.capital);
    let flags = all.map(country => country.flag);
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        const capital = capitals[i];
        const flag = flags[i];


        const countryListDiv = document.getElementById("country-list");
        const displayDiv = document.createElement("div");
        countryListDiv.appendChild(displayDiv)
        displayDiv.style.width = "250px";
        displayDiv.style.height = "350px";
        displayDiv.style.border = "1px solid gray";
        displayDiv.style.margin = "10px 10px";
        displayDiv.style.borderRadius = "10px";
        displayDiv.style.boxShadow = "5px 5px 10px green";
        displayDiv.style.cursor = "pointer";

        

        const flagImage = document.createElement("img");
        flagImage.setAttribute('src', flag);
        flagImage.style.width = "200px";
        flagImage.style.height = "150px";
        flagImage.style.paddingTop = "10px";
        flagImage.style.paddingBottom = "10px";
        displayDiv.appendChild(flagImage);

        const hTag = document.createElement("h3");
        hTag.innerText = name;
        hTag.style.color = "red ";
        displayDiv.appendChild(hTag);

        const h4Tag = document.createElement("h4");
        h4Tag.innerText = "Capital Name: " + capital;
        displayDiv.appendChild(h4Tag);


        displayDiv.addEventListener("click", function (){
            
            const url = `https://restcountries.eu/rest/v2/name/${name}`
            fetch(url)
            .then(res => res.json())
            .then(data => showInfo(data[0]))
        });

        function showInfo(country){
            console.log(country.capital)

            const infoDiv = document.getElementById("info-div")
            
            infoDiv.innerHTML = `
            <h1>${country.capital}</h1>
            `
            topDiv.appendChild(newDiv)
            

        }
    }

}

     

