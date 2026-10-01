let sectionRef;

function init(){
    sectionRef = document.querySelector("section");
    fetchData();
}

window.onload = init;

async function fetchData() {

    try {
        const response = await fetch('produkter.json');
        console.log(response);
        const data = await response.json();
        console.log(data);
        createArticles(data)
    }catch(error){
        console.error("Error fetching data", error);
    }

}

function createArticles(data){
    data.produkter.forEach(article => {
        const articleElement = document.createElement("article");

        let element = createElement("h2", article.namn);
        articleElement.appendChild(element);

        element = createElement("p", article.beskrivning);
        articleElement.appendChild(element);

        //Image kunde inte åka i samma function så gjorde en egen liten grej här. 
        const imageElement = document.createElement("img");
        imageElement.src = article.bild;
        imageElement.alt = "Bild på " + article.beskrivning;
        articleElement.appendChild(imageElement);

        element = createElement("p", article.typ);
        articleElement.appendChild(element);

        //Lägger till kr efter priset här. 
        element = createElement("p", article.pris + "kr");
        articleElement.appendChild(element);

        sectionRef.appendChild(articleElement);
    });
}

function createElement(elementType, elementContent){

    const element = document.createElement(elementType)
    element.textContent = elementContent;
    return element;
}