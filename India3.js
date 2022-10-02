let main = async () => {
    try {
      let res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=08d99dd982164978a2d91f97ca0065de&pageSize=10&page=1`
      );
      let data = await res.json();
      console.log("data:", data.articles);
      append_News(data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  main();
  
  const append_News = (data) => {
      let container = document.getElementById("News");
      container.innerHTML = null;
  
      data.forEach((el) => {
          
              let div = document.createElement("div");
          div.setAttribute("class", "news_child");
  
          let img = document.createElement("img");
          img.src = el.urlToImage;
  
          let name = document.createElement("h3");
          name.innerHTML = el.title;
        div.append( img,name);
          
          container.append(div);
    });
  };
  
  let Show = async () => {
      try {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=08d99dd982164978a2d91f97ca0065de&pageSize=4&category=science`);
        let data = await response.json();
      //   console.log("data:", data.articles);
        show_news(data.articles)
      } catch (error) {
        console.log(error);
      }
    };
    Show();
    
    const  show_news = (data) => {
        let container = document.getElementById("read_news");
        container.innerHTML = null;
    
        data.forEach((el) => {
          
              let div = document.createElement("div");
            div.setAttribute("class", "read_child");
    
            let img = document.createElement("img");
            img.src = el.urlToImage;
    
            let name = document.createElement("h5");
            name.innerHTML = el.title;
             div.append( name,img);
            container.append(div);
  
             
    
        });
    };
  
    let Sports = async () => {
      try {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=4&apiKey=08d99dd982164978a2d91f97ca0065de`);
        let data = await response.json();
      //   console.log("data:", data.articles);
        sportsnews(data.articles)
      } catch (error) {
        console.log(error);
      }
    };
    Sports();
    
    const  sportsnews = (data) => {
        let container = document.getElementById("top_takes");
        container.innerHTML = null;
    
        data.forEach((el) => {
         
              let div = document.createElement("div");
            div.setAttribute("class", "read_child");
    
            let img = document.createElement("img");
            img.src = el.urlToImage;
    
            let name = document.createElement("p");
            name.innerHTML = el.title;
    
            div.append( name,img);
            container.append(div);
  
            
    
        });
    };
  
    let Health = async () => {
      try {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=1&apiKey=08d99dd982164978a2d91f97ca0065de`
        );
        let data = await response.json();
      //   console.log("data:", data.articles);
      Healthnews(data.articles)
      } catch (error) {
        console.log(error);
      }
    };
    Health();
    
    const Healthnews = (data) => {
        let container = document.getElementById("watch_now");
        container.innerHTML = null;
    
        data.forEach((el) => {
          
              let div = document.createElement("div");
            div.setAttribute("class", "read_child");
    
            let img = document.createElement("img");
            img.src = el.urlToImage;
    
            let name = document.createElement("p");
            name.innerHTML = el.title;
    
            div.append( name,img);
            container.append(div);
  
            
    
        });
    };
  
    let enter = async () => {
      try {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=10&apiKey=08d99dd982164978a2d91f97ca0065de`
        );
        let data = await response.json();
      //   console.log("data:", data.articles);
      enter1(data.articles)
      } catch (error) {
        console.log(error);
      }
    };
    enter();
    
    const enter1 = (data) => {
        let container = document.getElementById("india_news");
        container.innerHTML = null;
    
        data.forEach((el) => {
         
              let div = document.createElement("div");
            div.setAttribute("class", "india_child");
    
            let img = document.createElement("img");
            img.src = el.urlToImage;
    
            let name = document.createElement("p");
            name.innerHTML = el.title;
            div.append(img ,name);
            container.append(div);
  
            
        });
    };
  
  
    let business = async () => {
      try {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=6&apiKey=08d99dd982164978a2d91f97ca0065de`
        );
        let data = await response.json();
      //   console.log("data:", data.articles);
        businessnews(data.articles)
      } catch (error) {
        console.log(error);
      }
    };
    business();
    
    const businessnews = (data) => {
        let container = document.getElementById("nz_news");
        container.innerHTML = null;
    
        data.forEach((el) => {
       
              let div = document.createElement("div");
            div.setAttribute("class", "nz_child");
    
            let img = document.createElement("img");
            img.src = el.urlToImage;
    
            let name = document.createElement("p");
            name.innerHTML = el.title;
           div.append(img, name);
            container.append(div);
  
          
         
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
      fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c651b3a97285417587d0f71f16e42732&pageSize=10&page=${e}`).then((res)=> {
        return (res.json());
      }).then((data) => {
        // console.log(data.articles);
        append_News(data.articles);
      }).catch(function(err){
        console.log(err);
      })
    }