
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
    return total;
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
    return total;
}

console.log(getTotalStock(tvBought));

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const totalBought = document.getElementById("total-stock");
totalBought.textContent = getTotalStock(tvBought);

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const toSell = document.getElementById("to-sell");
toSell.textContent = getTotalStock(tvBought) - getTotalSales(tvSold);

//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
//*Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.


//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
//*Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
//*Tip: vergeet deze functie -declaratie niet aan te roepen!