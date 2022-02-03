
//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//Maak een map-methode voor inventory.name.
//Sla de output op in een nieuwe array.

const tvTypeNames = inventory.map((tv) => {
    return `Type-naam: ${tv.type}`;
})

console.log(tvTypeNames);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
//Maak een filter-methode.
//Als originalStock - sold 0 is, is de tv uitverkocht. (kies dit ipv 'originalStock === sold' zodat je later kan aanpassen wanneer je nieuwe voorraad wil inkopen).

const tvSoldOut = inventory.filter((tv) => {
    if (tv.originalStock - tv.sold === 0) {
        return true;
    }
})

console.log(tvSoldOut);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
//Maak een filter-methode.
//Spreek het options-object in het tv-object aan.
//Filter tv's waarbij ambiLight = true;

const tvAmbiLight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
})

console.log(tvAmbiLight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const tvSortPrices = inventory.sort((a, b) => a.price - b.price);

console.log(tvSortPrices);

//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//Maak een array met alle verkochte tv's.
//Creëer een functie die alle waardes in de array bij elkaar optelt.

const tvSold = inventory.map((tv) => {
    return tv.sold;
})

function getTotalSales(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total.toString();
}

console.log(getTotalSales(tvSold));

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const totalSales = document.getElementById("total-sales");
totalSales.textContent = getTotalSales(tvSold);

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const tvBought = inventory.map((tv) => {
    return tv.originalStock;
})

function getTotalStock(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total.toString();
}

console.log(getTotalStock(tvBought));

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const totalBought = document.getElementById("total-stock");
totalBought.textContent = getTotalStock(tvBought);

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

let toBeSold = getTotalStock(tvBought) - getTotalSales(tvSold);

const toSell = document.getElementById("to-sell");
toSell.textContent = toBeSold.toString();

//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
//*Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const tvBrands = inventory.map((tv) => {
    return tv.brand;
})

console.log(tvBrands);

const brands = document.getElementById("brands");

tvBrands.forEach((tv) => {
    let li = document.createElement("li");
    li.innerHTML = tv;
    brands.appendChild(li);
})

//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
//*Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
//*Tip: vergeet deze functie -declaratie niet aan te roepen!

const price = document.getElementById("price");
const screenType = document.getElementById("screen-type")

function makeListFromProps(arr, prop, ele) {
    let list = arr.map(tv => tv[prop]);
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = list[i];
        ele.appendChild(li);
    }
}

makeListFromProps(inventory, "price", price);
makeListFromProps(inventory, "screenType", screenType);

function makeListFromTwoProps(arr, firstProp, secondProp, ele) {
    let firstList = arr.map(tv => tv[firstProp]);
    let secondList = arr.map(tv => tv[secondProp]);
    for (let i = 0; i < firstList.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = firstList[i] + ", " + secondList[i];
        ele.appendChild(li);
    }
}

const priceScreenType = document.getElementById("price-screen-type");
makeListFromTwoProps(inventory, "price", "screenType", priceScreenType);



//Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt:
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function lineOneDetails(arr) {
    let singleTv = arr[0];
    return `${singleTv.brand} ${singleTv.type} - ${singleTv.name}`;
}

console.log(lineOneDetails(inventory));

const singleTvName = document.getElementById("single-tv-name");
singleTvName.innerHTML = lineOneDetails(inventory);

//Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-.
// Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function lineTwoDetails(arr) {
    let singleTv = arr[0];
    return `€${singleTv.price},-`;
}

console.log(lineTwoDetails(inventory));

const singleTvPrice = document.getElementById("single-tv-price");
singleTvPrice.innerHTML = lineTwoDetails(inventory);

//Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm.
// Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Test of jouw functie werkt in alle mogelijke gevallen.

function lineThreeDetails(arr) {
    let singleTv = arr[0];
    let sizes = singleTv.availableSizes;
    for (let i = 0; i < sizes.length; i++) {
        let sizesCm = Math.round(sizes[i] * 2.54);
        sizes[i] = `${sizes[i]} inch (${sizesCm} cm)`
    }
    return sizes.join(" | ");
}

const singleTvSize = document.getElementById("single-tv-sizes");
singleTvSize.innerHTML = lineThreeDetails(inventory);

//Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

// done

//Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
// De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

function tvName(arr) {
    return `${arr.brand} ${arr.type} - ${arr.name}`;
}

function tvPrice(arr) {
    return `€${arr.price},-`;
}

function tvSizes(arr) {
    let size = arr.availableSizes;
    for (let i = 0; i < size.length; i++) {
        let sizeCm = Math.round(size[i] * 2.54);
        size[i] = `${size[i]} inch (${sizeCm} cm)`
    }
    return size.join(" | ");
}

function tvTable(arr) {
    const tvs = document.getElementById("tvs");
    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    let trName = document.createElement("tr");
    let trNameText = document.createTextNode(tvName(arr));
    let trPrice = document.createElement("tr");
    let trPriceText = document.createTextNode(tvPrice(arr));
    let trSize = document.createElement("tr");
    let trSizeText = document.createTextNode(tvSizes(arr));
    let trEmpty = document.createElement("tr");
    let trEmptyText = document.createTextNode("***");

    trName.appendChild(trNameText);
    trPrice.appendChild(trPriceText);
    trSize.appendChild(trSizeText);
    trEmpty.appendChild(trEmptyText);
    tblBody.appendChild(trName);
    tblBody.appendChild(trPrice);
    tblBody.appendChild(trSize);
    tblBody.appendChild(trEmpty);

    table.appendChild(tblBody);
    tvs.appendChild(table);

}

function singleTvs(arr) {
    for (let i = 0; i < arr.length; i++) {
        tvTable(arr[i]);
    }
}

singleTvs(inventory);


