let api_key='AIzaSyCR1yVTzBWv4h-BsL0HKbqI9Te3u1ThXsk'
const mostpopular= async()=>{
   try{
      let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=apb live newz&type=video&key=${api_key}`)
      let data=await res.json()
     let most=data.items[0]
    console.log(most)
      appened(most)
   }
   catch(err){
      console.log("err:",err)
   }
  
}
mostpopular()


let video_details=document.getElementById("video_details")
const appened=(most)=>{
    let videtrs=most.id.videoId
    let iframe=document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${videtrs}?autoplay=1&mute=1`
    iframe.width="100%"
    iframe.height="100%"
    iframe.setAttribute('allowFullscreen',true) 
    video_details.append(iframe)

}


let container=document.getElementById("container")
const searchvideos =async()=>{
   try{   
       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=52&q=indian%20newz&type=video&key=${api_key}`)
   
       let data=await res.json()
       let actual_data=data.items;
      console.log('actual_data:',actual_data)
       appendvideo(actual_data)
   }
   catch(err){
      console.log("err:",err)
   }
   }
   searchvideos()
   


let  appendvideo=(data)=>{
    data.forEach(({snippet,id:{videoId}})=>{
      let thumbnail=snippet.thumbnails.high.url
      let tiless=snippet.title
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
        div.append(img,titles)
        container.append(div)
    })

}

function storeclickedvideo(data){
   localStorage.setItem("click_item",JSON.stringify(data))
   window.location="video.html"
}

//

const topnewzhedline= async()=>{
   try{
      let res=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=70633a9c6b76424e8c4585a824f64f39`)
      let data=await res.json()
      let datshd=data.articles
      appendvideoasfsaf(datshd)
   }
   catch(err){
      console.log("err:",err)
   }
  
}
topnewzhedline()

let recommendation=document.getElementById("recommendation")

let  appendvideoasfsaf=(data)=>{
   console.log(data)
     data.forEach((el)=>{
       let div=document.createElement("div")
       div.setAttribute('id',"jkdffg")
       let div1=document.createElement("div")
       div1.setAttribute('id',"cvbnm")
       let img=document.createElement("img")
       img.src=el.urlToImage
       let titles=document.createElement("p")
       titles.innerText=el.title
       let titlesds=document.createElement("p")
       titlesds.setAttribute('id',"hdfkfalj")
       titlesds.innerText=el.source.name
       div1.append(titlesds)
       div.append(titles,img)
        recommendation.append(div1,div)
    })

}


