
// let API = "788064e404bb4146a46b604f5b05b845";

// let api = "52dd17af551c4652818b0ce69e4b2530";

let API = "05eb14a459ed44f2aafbcde325d266a1";

let api = "c651b3a97285417587d0f71f16e42732";

let url = "https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in&PageSize=2";


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


    let res = await fetch(url);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&PageSize=1&apiKey=${api}`);

    let data = await res.json();

    let act_data = data.articles 

    console.log(data)

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&PageSize=2&apiKey=${API}`);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&PageSize=1&apiKey=${api}`);
    

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&PageSize=2&apiKey=${API}`);
    

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=1&apiKey=${api}`);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=2&apiKey=${API}`);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=health&PageSize=1&apiKey=${api}`);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=health&PageSize=2&apiKey=${API}`);

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

    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&PageSize=1&apiKey=${api}`);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&PageSize=2&apiKey=${API}`);

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=1&apiKey=${api}`);

    let data = await res.json();

    let act_data = data.articles;

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
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&PageSize=2&apiKey=${API}`);

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



// var index =0;
//     var i=0;
//     var slider = document.getElementsByClassName("slide");
//     var line = document.getElementsByClassName("line");
//     auto();


//     function show(n){
//         for(i=0;i<slider.length;i++) {
//             slider[i].style.display = "none";
//         }
//         for (i=0;i<line.length;i++) {
//             line[i].className =line[i].className.replace("active");
//         }
//         slider[n-1].style.display=("block");
//         line[n-1].className+="active;"
//     }
//     function auto() {
//         index++;
//         if(index > slider.length) {
//             index=1;
//         }
//         show (index);
//         setTimeout(auto, 200);
//     }
//     function plusSlide(n) {
//         index+=n;
//         if(index > slider.length) {
//             index=1;
//         }
//         if (index < 1) {
//             index = slider.length;
//         }
//         show(index);
//     }
//     function currentSlide(n) {
//         index = n;
//         show(index);
//     }


$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.bokk').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });







  const logindf=()=>{
    window.location.href='./signin.html'
}

const livetv=()=>{
  window.location.href='./livetv.html'
}
  
  const home=()=>{
    window.location.href='./index.html'
}


const MyFeed=()=>{
  window.location.href='./My_Feed.html'
}

const Business=()=>{
  window.location.href='./Business.html'
}

const world=()=>{
  window.location.href='./world.html'
}

const app=()=>{
  window.location.href='./App.html'
}

const indi=()=>{
  window.location.href='./india.html'
}










results()

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


// not required results1()