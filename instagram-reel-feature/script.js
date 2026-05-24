//Data
const reelsData = [
  {
    video: "assets/videos/video1.mp4",
    userPic: "assets/images/profile1.jpg",
    username: "satoru gojo",
    description: "Limitless energy. Infinity mindset 🔵✨",
    songName: "Silhouette – KANA-BOON",
    likes: 700,
    comments: 1842,
    reposts: 912,
    shares: 14321,
    isLiked: false,
    isFollowed: false,
  },
  {
    video: "assets/videos/video2.mp4",
    userPic: "assets/images/profile2.jpg",
    username: "Tanjiro Kamado",
    description: "Breathing techniques & never giving up 🔥🌊",
    songName: "Gurenge – LiSA",
    likes: 210,
    comments: 6412,
    reposts: 2230,
    shares: 932,
    isLiked: false,
    isFollowed:false,
  },
  {
    video: "assets/videos/video3.mp4",
    userPic: "assets/images/profile3.jpg",
    username: "Sung Jin-woo",
    description: "From weakest to shadow monarch 👑🖤",
    songName: "Dark Aria – Solo Leveling OST",
    likes: 900,
    comments: 10903,
    reposts: 740,
    shares: 15890,
    isLiked: false,
    isFollowed:false,
  },
  {
    video: "assets/videos/video4.mp4",
    userPic: "assets/images/profile4.jpg",
    username: "naruto uzumaki",
    description: "Believe it! Hustle never stops 🍥🔥",
    songName: " Blue Bird – Naruto OST",
    likes: 999,
    comments: 12198,
    reposts: 8145,
    shares: 200,
    isLiked: false,
    isFollowed: false,
  },
  {
    video: "assets/videos/video5.mp4",
    userPic: "assets/images/profile5.jpg",
    username: "Toge Inumaki",
    description: "Salmon. Tuna mayo. Speak less 🤐🍙",
    songName: "Cursed Speech – JJK OST",
    likes: 450,
    comments: 312,
    reposts: 2376,
    shares: 10450,
    isLiked: false,
    isFollowed: false,
  },
  {
    video: "assets/videos/video6.mp4",
    userPic: "assets/images/profile6.jpg",
    username: "Makima",
    description: "Control everything. Smile softly 😈🌹",
    songName: "Chainsaw Blood – CSM OST",
    likes: 990,
    comments: 9084,
    reposts: 6039,
    shares: 220,
    isLiked: false,
    isFollowed: false,
  },
  {
    video: "assets/videos/video7.mp4",
    userPic: "assets/images/profile7.jpg",
    username: "Seishirō Nagi",
    description: "Effortless genius. Zero motivation ⚽😴",
    songName: "Blue Lock Theme – OST",
    likes: 140,
    comments: 4173,
    reposts: 3102,
    shares: 12501,
    isLiked: false,
    isFollowed:false,
  },
  {
    video: "assets/videos/video8.mp4",
    userPic: "assets/images/profile8.jpg",
    username: "Kiyotaka Ayanokōji",
    description: "Silent manipulation. Perfect control 🧠♟️",
    songName: "Classroom of the Elite – OST",
    likes: 273,
    comments: 86,
    reposts: 5188,
    shares: 14290,
   isLiked: false,
    isFollowed:false,
  },
  {
    video: "assets/videos/video9.mp4",
    userPic: "assets/images/profile9.jpg",
    username: "one piece",
    description: "Set sail. Chase freedom ☠️⛵",
    songName: "We Are! – One Piece OP",
    likes: 600,
    comments: 20702,
    reposts: 139,
    shares: 36304,
    isLiked: false,
    isFollowed: false,
  },
  {
    video: "assets/videos/video10.mp4",
    userPic: "assets/images/profile10.jpg",
    username: "Gon Freecss",
    description: "Pure heart. Infinite potential 🌱⚡",
    songName: "Departure! – Hunter x Hunter",
    likes: 820,
    comments: 4109,
    reposts: 2067,
    shares: 8980,
    isLiked: false,
    isFollowed:false,
  },
];
//reelscontainer
let reelsContainer = document.getElementById("reels-container");
//function which convert data into proper structure with dynamic values
function displayReel(){
  let reel = "";
reelsData.forEach((e,indx) => {
  reel += `
    <section class="reel">

        <!-- Background video -->
        <video
            src="${e.video}"
            autoplay
            muted
            loop
            playsinline
        ></video>

        <!-- Gradient overlay -->
        <div class="overlay"></div>

        <!-- UI CONTENT -->
        <div class="ui">

            <!-- TOP -->
            <div class="top">
                <i class="ri-add-large-fill"></i>

                <div class="reels">
                    <span>Reels</span>
                    <i class="ri-arrow-down-s-line"></i>
                </div>

                <div class="friends">
                    <span>Friends</span>
                    <div class="img-container">
                        <img src="assets/images/friend-1.avif">
                        <img src="assets/images/friend-2.avif">
                        <img src="assets/images/friend-3.avif">
                    </div>
                </div>
            </div>

            <!-- RIGHT -->
            <div class="right">
                <div class="icon-text like-btn" id="${indx}">
                    <i class="ri-heart-3-fill"></i>
                    <span class="like-count">${
                      e.likes > 1000
                        ? Math.floor(e.likes / 1000) + "k"
                        : e.likes
                    }</span>
                </div>
                <div class="icon-text">
                    <i class="ri-chat-1-line"></i>
                    <span>${
                      e.comments > 1000
                        ? Math.floor(e.comments / 1000) + "k"
                        : e.comments
                    }</span>
                </div>
                <div class="icon-text">
                    <i class="ri-arrow-left-right-line"></i>
                    <span>${
                      e.reposts > 1000
                        ? Math.floor(e.reposts / 1000) + "k"
                        : e.reposts
                    }</span>
                </div>
                <div class="icon-text">
                    <i class="ri-share-line"></i>
                    <span>${
                      e.shares > 1000
                        ? Math.floor(e.shares / 1000) + "k"
                        : e.shares
                    }</span>
                </div>
                <div class="icon-text">
                    <i class="ri-more-2-line"></i>
                </div>
            </div>

            <!-- BOTTOM -->
            <div class="bottom">
                <div class="bottom-top">
                    <img src="${e.userPic}">

                    <div class="title-song">
                        <div class="title-box">
                            <span>${e.username}</span>
                            <i class="ri-verified-badge-fill"></i>
                        </div>
                        <div class="song-box">
                            <i class="ri-arrow-right-up-long-fill"></i>
                            <span>${e.songName}</span>
                        </div>
                    </div>

                    <button id="${indx}" class="follow-toggel">Follow</button>
                </div>

                <div class="bottom-down">
                    <p>${e.description}</p>
                    <i class="ri-volume-mute-fill sound-icon"></i>
                </div>
            </div>

        </div>
    </section>`;
});
reelsContainer.innerHTML = reel;
}
//function call to present all data into device viewport
displayReel();
//each independent reel which will come after data displayed not before it
let reeel = document.querySelectorAll(".reel");
//intersection-observer - used for determining which reel to play based on viewport
function intersectionObserver(){
  let observer=new IntersectionObserver(e=>{
    e.forEach(e=>{
        let target=e.target;
        let video=target.querySelector('video');
        if(e.isIntersecting){
            video.play();
        }else{
            video.pause();
        }    
    })
   },{threshold:0.6});
   document.querySelectorAll('.reel').forEach(e=>observer.observe(e));
}
intersectionObserver();
//To Bypass browser policy to play audio u can only use pointerup or click here
let soundIcon=document.querySelectorAll('.sound-icon');
let video=document.querySelectorAll('video');
// function bypass() {
//    document.addEventListener('pointerup', () => {
//    video.forEach(video => {
//     video.muted = false;
//    })
//    soundIcon.forEach(e=>{
//       e.classList.add('ri-volume-up-line');
//    });
//    },{once:true});
// }
// bypass();
let isMuted = true;

function soundStop() {
  soundIcon.forEach(icon => {
    icon.addEventListener('click', () => {

      // flip global state
      isMuted = !isMuted;

      // apply to ALL videos
      video.forEach(v => {
        v.muted = isMuted;
      });

      // apply to ALL icons
      soundIcon.forEach(ic => {
        ic.classList.toggle('ri-volume-up-fill');
        // ic.classList.toggle('ri-volume-mute-fill', isMuted);
      });

    });
  });
}

soundStop();
// updating count of like by using event delegation instead of rerendering
function like() {
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('like-btn')) return;
    const id = e.target.id;
    //fliping state
    reelsData[id].isLiked=!reelsData[id].isLiked;
    let likecount=(reelsData[id].isLiked)?reelsData[id].likes+1:reelsData[id].likes;
    e.target
      .closest('.icon-text')
      .querySelector('.like-count')
      .textContent = likecount>1000?Math.floor(likecount/1000)+'k':likecount;
    
    e.target.querySelector('i')
      .classList.toggle('red')
  });
}
like();
// follow button toggeling
function follow(){
let follow=document.querySelectorAll('.follow-toggel');
follow.forEach(e=>{
  e.addEventListener('click',(e)=>{
      let target=e.target;
      let id=e.target.id;
      let x=reelsData[id].isFollowed=!reelsData[id].isFollowed;
      if(x === true){
        target.innerHTML='following';
      }else{
        target.innerHTML='follow';
      }
  })
})
}
follow();



