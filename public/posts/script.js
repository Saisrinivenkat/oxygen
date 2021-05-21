
const comments = document.querySelectorAll('.clickpost')
const reply = document.querySelectorAll('.replypost')
const likebtn = document.querySelectorAll('.thumbsup')
const likeCont = document.querySelectorAll('.like1')
const url = 'http://localhost:3000/posts/'

comments.forEach((post) =>{  
  const pid = post.dataset.id
  post.addEventListener('click' , () =>{
    fetch(url + pid)
        .then(res =>{
          window.location = res.url
        })
        .catch(err => console.log(err))
  })
})

reply.forEach((replybtn) =>{  
  const pid = replybtn.dataset.id
  replybtn.addEventListener('click' , () =>{
    fetch(url + pid)
        .then(res =>{
          window.location = res.url
        })
        .catch(err => console.log(err))
  })
})

likebtn.forEach(likes =>{
  likes.addEventListener('click' ,()=>{
    totalLikes = parseInt(likes.dataset.like)
    totalLikes = totalLikes + 1
    const urlseg = 'ilike/' + likes.dataset.id
    fetch(url+urlseg , {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      }
    }).then(res => { return res.json() })
    .then((data)=>{ 
      likeCont.forEach( (likeCont) =>{
        if(likeCont.dataset.id === likes.dataset.id){
          likeCont.innerText = data.like
        }
      } )
    })
  })
})