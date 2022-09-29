const Social_data =  async () =>
{
    let res= await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=08d99dd982164978a2d91f97ca0065de`);
    let data=await res.json()
    console.log(data)
    Append(data.articles)
}
Social_data();

const Append = (data) =>
{
    let div1=document.querySelector(".grid");
    div1.innerHTML=null;
    data.forEach( (e) => 
    {
         let div2=document.createElement("div")
         let div3=document.createElement("div")
         let img=document.createElement("img")
         img.src=e.urlToImage;
         img.setAttribute("class","image")
         let h2=document.createElement("h3")
         h2.innerText=e.title
         h2.setAttribute("class","h2")
         let p=document.createElement("p")
         p.innerText=e.description
         p.setAttribute("class","des")
        div2.append(img)
        div3.append(h2,p)
        div1.append(div2,div3)
    })
}


const Social_data1 =  async () =>
{
    let res= await fetch(`https://newsapi.org/v2/top-headlines?country=in& totalResults=6&category=business&apiKey=08d99dd982164978a2d91f97ca0065de`);
    let data1=await res.json()
    console.log("data1:",data1)
     Append1(data1.articles)
}
Social_data1();
const Append1 = (data) =>
{
    let div1=document.querySelector(".cont2");
    div1.innerHTML=null;
    data.forEach( (e) => 
    {
         let div2=document.createElement("div")
        
         let img=document.createElement("img")
         img.src=e.urlToImage;
         img.setAttribute("class","img2")
         let h2=document.createElement("h3")
         h2.innerText=e.title
         h2.setAttribute("class","h2")
         let p=document.createElement("p")
         p.innerText=e.author

        
      
        div2.append(img,h2,p)
        div1.append(div2)
    })
}