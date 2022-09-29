let data = JSON.parse(localStorage.getItem("details"));
console.log(data);

let container = document.getElementById("news_details");
container.innerHTML = null;

data.forEach((ele) => {
  let div = document.createElement("div");
  div.setAttribute("class", "details_child");

  let img = document.createElement("img");
  img.src = ele.urlToImage;

  let name = document.createElement("h3");
  name.innerHTML = ele.title;

  let p = document.createElement("p");
  p.innerHTML = ele.description;

  div.append(img, name, p);
  container.append(div);
});
