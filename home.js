
let API = "788064e404bb4146a46b604f5b05b845";

let res_box = document.getElementsByClassName("boxs");

let res_div = document.getElementById("result");

let movi = document.getElementById("Movies");
let movi2 = document.getElementById("Movies2");

let Tech = document.getElementById("Technology");
let Tech2 = document.getElementById("Technology2");

let life = document.getElementById("Lifestle");
let life1 = document.getElementById("Lifestle1");

let trend = document.getElementById("Trending");
let trend2 = document.getElementById("Trending1");

let Indi = document.getElementById("India");
let Indi2 = document.getElementById("India1");

let sport = document.getElementById("Sports");
let sport2 = document.getElementById("Sports2");




let results = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        res_div.append(box)
    })


}

let results1 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.urlToImage;
        let p = document.createElement("p");
        p.innerHTML = el.title;

        div.append(img, p)

        res_box.append(div)
    })


}

let movies = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(img, p);
        movi.append(box)
    })


}

let movies2 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&PageSize=2&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        movi2.append(box)
    })


}

let technologies = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");
    

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;
        let p = document.createElement("p");

        p.innerHTML = el.title;

        box.append(img, p);
        Tech.append(box)
    })


}

let technologies2 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&PageSize=2&apiKey=788064e404bb4146a46b604f5b05b845");
    

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;
        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        Tech2.append(box)
    })


}

let sports = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(img,p);
        sport.append(box)
    })


}

let sports2 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=2&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        sport2.append(box)
    })


}

let lifes = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(img,p);
        life.append(box)
    })


}

let lifes1 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&PageSize=2&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        life1.append(box)
    })


}

let Trend = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(img,p);
        trend.append(box)
    })


}

let Trend1 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&PageSize=2&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        trend2.append(box)
    })


}

let india = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=1&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(img,p);
        Indi.append(box)
    })


}

let india1 = async () => {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=2&apiKey=788064e404bb4146a46b604f5b05b845");

    let data = await res.json();

    let act_data = data.articles 

    console.log(data.articles)

    act_data.forEach((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let p = document.createElement("p");
        p.innerHTML = el.title;

        box.append(p);
        Indi2.append(box)
    })


}

results()
results1()
movies()
movies2()
technologies()
technologies2()
sports()
sports2()
lifes()
lifes1()
Trend()
Trend1()
india()
india1()