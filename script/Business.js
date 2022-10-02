// // NAVBAR 
// import { navbar } from "../components/navbar.js";

// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML = navbar();

// // FOOTER 
// import { footer } from "../components/footer.js";
// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();

// let api = https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c651b3a97285417587d0f71f16e42732


let main = async () => {
  try {
    let res = await fetch( 
      `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c651b3a97285417587d0f71f16e42732&pageSize=18&page=1`
    );
    let data = await res.json();
    console.log("data:", data.articles);
    business_News(data.articles)
  } catch (error) {
    console.log(error);
  }
};
main();

const business_News = (data) => {
    let container = document.getElementById("News");
    container.innerHTML = null;

    data.forEach((el) => {
            let div = document.createElement("div");
        div.setAttribute("class", "news_child");

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let name = document.createElement("h3");
        name.innerHTML = el.title;

        let p = document.createElement("p");
        p.innerHTML = el.description;

        div.append( img,name);
        container.append(div);

    });
};

let uk = async () => {
  try {
    let response = await fetch(
      `https:masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`
    );
    let data = await response.json();
  //   console.log("data:", data.articles);
    append_uk_news(data.articles)
  } catch (error) {
    console.log(error);
  }
};
uk();

const append_uk_news = (data) => {
    let container = document.getElementById("read_news");
    container.innerHTML = null;

    data.forEach((el,i) => {
      if(i<4){
          let div = document.createElement("div");
        div.setAttribute("class", "read_child");

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let name = document.createElement("h5");
        name.innerHTML = el.title;

        let p = document.createElement("p");
        p.innerHTML = el.description;

        div.append( name,img);
        container.append(div);

      }    

    });
};



  let china = async () => {
    try {
      let response = await fetch(
        `https:masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`
      );
      let data = await response.json();
    //   console.log("data:", data.articles);
      append_china_news(data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  china();
  
  const append_china_news = (data) => {
      let container = document.getElementById("top_takes");
      container.innerHTML = null;
  
      data.forEach((el,i) => {
        if(i<4){
            let div = document.createElement("div");
          div.setAttribute("class", "read_child");
  
          let img = document.createElement("img");
          img.src = el.urlToImage;
  
          let name = document.createElement("p");
          name.innerHTML = el.title;
  
          let p = document.createElement("p");
          p.innerHTML = el.description;
  
          div.append( name,img);
          container.append(div);

        }    
  
      });
  };

  let india = async () => {
    try {
      let response = await fetch(
        `https:masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
      );
      let data = await response.json();
    //   console.log("data:", data.articles);
      append_india_news(data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  india();
  
  const append_india_news = (data) => {
      let container = document.getElementById("watch_now");
      container.innerHTML = null;
  
      data.forEach((el,i) => {
        if(i<3){
            let div = document.createElement("div");
          div.setAttribute("class", "read_child");
  
          let img = document.createElement("img");
          img.src = el.urlToImage;
  
          let name = document.createElement("p");
          name.innerHTML = el.title;
  
          let p = document.createElement("p");
          p.innerHTML = el.description;
  
          div.append( name,img);
          container.append(div);

        }    
  
      });
  };


  let us_news = async () => {
    try {
      let response = await fetch(
        `https:masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`
      );
      let data = await response.json();
    //   console.log("data:", data.articles);
      append_us(data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  us_news();
  
  const append_us = (data) => {
      let container = document.getElementById("us_news");
      container.innerHTML = null;
  
      data.forEach((el,i) => {
        if(i<8){
            let div = document.createElement("div");
          div.setAttribute("class", "india_child");
  
          let img = document.createElement("img");
          img.src = el.urlToImage;
  
          let name = document.createElement("p");
          name.innerHTML = el.title;
  
          let p = document.createElement("p");
          p.innerHTML = el.description;
  
          div.append(img ,name);
          container.append(div);

        }   
      });
  };

  let nz_news = async () => {
    try {
      let response = await fetch(
        `https:masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`
      );
      let data = await response.json();
    //   console.log("data:", data.articles);
      append_nz(data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  nz_news();
  
  const append_nz = (data) => {
      let container = document.getElementById("nz_news");
      container.innerHTML = null;
  
      data.forEach((el,i) => {
        if(i<3){
            let div = document.createElement("div");
          div.setAttribute("class", "nz_child");
  
          let img = document.createElement("img");
          img.src = el.urlToImage;
  
          let name = document.createElement("p");
          name.innerHTML = el.title;
  
          let p = document.createElement("p");
          p.innerHTML = el.description;
  
          div.append(img, name);
          container.append(div);

        }
       
      });
  };

  let india_news = async () => {
    try {
      let response = await fetch(
        `https:masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
      );
      let data = await response.json();
    //   console.log("data:", data.articles);
      append_india(data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  india_news();
  
  const append_india = (data) => {
      let container = document.getElementById("india_news");
      container.innerHTML = null;
  
      data.forEach((el,i) => {
        if(i<12){
            let div = document.createElement("div");
          div.setAttribute("class", "india_child");
  
          let img = document.createElement("img");
          img.src = el.urlToImage;
  
          let name = document.createElement("p");
          name.innerHTML = el.title;
  
          let p = document.createElement("p");
          p.innerHTML = el.description;
  
          div.append(img ,name);
          container.append(div);

        }   
      });
  };


  let p1 = document.getElementById("p1");
  p1.style.backgroundColor = "red"
  function pagi(e){

if(e==1){
  p1.style.backgroundColor = "red";
  p1.style.color= "white";
}
else{
  let b = document.getElementsByClassName("pagination")[e-1]
    b.style.backgroundColor= "red";
    b.style.color= "white";
    p1.style.color = "black";
  p1.style.backgroundColor = "white";

}


    console.log(e)
    fetch(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c651b3a97285417587d0f71f16e42732&pageSize=18&page=${e}`).then((res)=> {
      return (res.json());
    }).then((data) => {
      // console.log(data.articles);
      business_News(data.articles);
    }).catch(function(err){
      console.log(err);
    })
  }
 