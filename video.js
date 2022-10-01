let video_details=document.getElementById("video_details")
let headiingd=document.getElementById("headiingd")
let data=JSON.parse(localStorage.getItem("click_item"))
console.log(data)
const playvideo=()=>{
    let {snippet,videoId}=JSON.parse(localStorage.getItem("click_item"))
  
    console.log(snippet,videoId)
    video_details.innerHTML=null
    let iframe=document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    iframe.width="100%"
    iframe.height="100%"
    iframe.setAttribute('allowFullscreen',true) 
    let tiless=snippet.title
    let titles=document.createElement("p")
    titles.innerText=tiless
    let description=document.createElement("p")
    description.innerText=snippet.description
    headiingd.append(titles)
    video_details.append(iframe,description)

}

let api_key='AIzaSyCR1yVTzBWv4h-BsL0HKbqI9Te3u1ThXsk'
let recommendation=document.getElementById("recommendation")
const mostpopular= async()=>{
    try{
       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=52&q=indian last newz&type=video&key=${api_key}`)
       let data=await res.json()
       console.log(data)
       let most=data.items
       popularvideoss(most)
    }
    catch(err){
       console.log("err:",err)
    }
   
 }
 mostpopular()
 
 let popularvideoss=(most)=>{
    most.forEach(({snippet,id:{videoId}})=>{
       const thumbnail=snippet.thumbnails.high.url
      const tiless=snippet.title
      let data={
        snippet,
        videoId,
      }
       let div=document.createElement("div")
       div.onclick=()=>{
          storeclickedvideo(data)
       }
       let img=document.createElement("img")
       img.src=thumbnail
       let titles=document.createElement("p")
       titles.innerText=tiless
        div.append(titles,img)
        recommendation.append(div)
    })
 }