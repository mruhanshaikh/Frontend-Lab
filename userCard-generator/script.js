const users = [
  {
    username: "Alex Morgan",
    bgImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Frontend Developer crafting clean UI and smooth user experiences.",
    metrics: {
      likes: 1240,
      posts: 86,
      views: 45230
    }
  },
  {
    username: "Sofia Williams",
    bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
    description: "UX Designer focused on human-centered design and usability.",
    metrics: {
      likes: 980,
      posts: 54,
      views: 38910
    }
  },
  {
    username: "Daniel Park",
    bgImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200",
    profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
    description: "Product Manager turning ideas into scalable digital products.",
    metrics: {
      likes: 1760,
      posts: 112,
      views: 68450
    }
  },
  {
    username: "Emily Chen",
    bgImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
    description: "Content Creator sharing tech tutorials and design tips.",
    metrics: {
      likes: 2310,
      posts: 134,
      views: 91200
    }
  }
];
let data='';
let main=document.querySelector('main');
let btn=document.getElementById('fetch');
let curIndex=0;
btn.addEventListener('click',()=>{
    if(curIndex<users.length){
        let i=users[curIndex];
        data+=`<div class="card">
                <div class="img-wrapper">
             <div class="bgimg" style="background-image:url(${i.bgImage})"></div>
             <img src="${i.profileImage}" alt="profile_img">
            </div>
            <div class="name">
                <div class="title">
                    <h1>${i.username}
                </div>
                <div class="description">
                    ${i.description}
                </div>
            </div>
             <div class="socials">
                <div class="item">
                    <div class="num">
                        ${(i.metrics.likes/1000).toFixed(1)+"k"}
                    </div>
                    <div class="subtitle">
                        likes
                    </div>
                </div>
                <div class="item">
                    <div class="num">
                        ${i.metrics.posts}
                    </div>
                     <div class="subtitle">posts</div>
                </div>
                <div class="item">
                    <div class="num">
                        ${(i.metrics.views/1000).toFixed(1)+"k"}
                    </div>
                    <div class="subtitle">views</div>
                </div>
             </div>
        </div>`
        main.innerHTML=data;
        curIndex++;
    }else{
         btn.textContent = "Nothing more to show";
        // btn.style.pointerEvents ='none'; 
        btn.style.cursor = 'not-allowed';
        btn.style.backgroundColor='rgba(255, 255, 255, 0.667)';
    }
});
// users.forEach((i)=>{
        //    data+= `<div class="card">
        //         <div class="img-wrapper">
        //      <div class="bgimg" style="background-image:url(${i.bgImage})"></div>
        //      <img src="${i.profileImage}" alt="profile_img">
        //     </div>
        //     <div class="name">
        //         <div class="title">
        //             <h1>${i.username}
        //         </div>
        //         <div class="description">
        //             ${i.description}
        //         </div>
        //     </div>
        //      <div class="socials">
        //         <div class="item">
        //             <div class="num">
        //                 ${(i.metrics.likes/1000).toFixed(1)+"k"}
        //             </div>
        //             <div class="subtitle">
        //                 likes
        //             </div>
        //         </div>
        //         <div class="item">
        //             <div class="num">
        //                 ${i.metrics.posts}
        //             </div>
        //              <div class="subtitle">posts</div>
        //         </div>
        //         <div class="item">
        //             <div class="num">
        //                 ${(i.metrics.views/1000).toFixed(1)+"k"}
        //             </div>
        //             <div class="subtitle">views</div>
        //         </div>
        //      </div>
        // </div>`
// })

// let bgimg=document.querySelector('.bgimg');

 
           