// const addPostCard = (post) => {
//     const clonePostCard = postCard.cloneNode(true);
//         clonePostCard.id = 'clone-post-card';
        
//         document.getElementById('list-posts').appendChild(clonePostCard);
        // document.getElementById('post-profile-img').className = 'img-crop ' + nickName;
//         document.querySelector('.post-username').innerHTML = username;
//         document.querySelector('.post-location').innerHTML = location;
//         document.querySelector('.post-text').innerHTML = text;
//         document.querySelector('.post-img').src = post_url;
// }
const postsController = new PostsController(0);

function addPostCard(post){
    const postHTML = '<div class="card post-card border-0 text-center mt-5">\n' +
        '   <div class="card-top container">\n' +
        '       <div class="row card-top-row">\n' +
        '           <div class="col-3 card-top-col-left">\n' +
        '               <div id="post-profile-img" class="img-crop '+post.nickName+' ">\n' + '</div>\n' +
        '               </div>\n' +
        '           <div class="col card-top-col-right">\n' +
        '               <div class="row card-top-right-row1">\n' +
        '                   <div class="col card-top-user-name">\n' +
        '                       <div class="post-username">'+post.username+'\n' + '</div>\n' +
        '                   </div>\n' +
        '                </div>\n' +
        '           <div class="row card-top-right-row1">\n' +
        '               <div class="col card-top-location">\n' +
        '                       <div class="post-username">'+post.location+'\n' + '</div>\n' +
        '                   </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="card-body">\n' +
        '       <img id="post-img" class="post-img" src="'+post.image +'" alt="product image">\n' +
        '       <p class="post-text my-4">'+post.post_text+'</p>\n' +
        '       <div class="post-icons">\n' +
        '        <i class="fa-solid fa-star"></i>\n' +
        '        <i class="fa-solid fa-earth-americas"></i>\n' +
        '        <i class="fa-solid fa-heart"></i>\n' +
        '       </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
        
    const postsContainer = document.getElementById("list-posts");
    postsContainer.innerHTML += postHTML;
    
}

// const sampleItems = [{
//     location: 'Mississippi',
//     username: 'Ayaka',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, rerum quae tenetur aut molestias laborum sint, odit obcaecati quia reprehenderit.',
//     image: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg',
//     nickName: 'ayaka'
// },
// {
//     location: 'North Carolina',
//     username: 'Eden',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, rerum quae tenetur aut molestias laborum sint, odit obcaecati quia reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//     image: 'https://cdn.pixabay.com/photo/2020/03/03/04/31/waterfall-4897499_960_720.jpg',
//     nickName: 'eden'
// }];
// Example POST method implementation:
async function postData(url = 'http://localhost:8080/post/', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    localStorage.setItem('data', JSON.stringify(json));
  } 
  
// localStorage.setItem("data", JSON.stringify(data));

function loadCardsListFromItemsController(){
    for(var i = 0, size = postsController.posts.length; i < size ; i++){
        const post = postsController.posts[i];
        addPostCard(post);
    }
}

// loadStorageSampleData();
postsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();

// export default loadCardsListFromItemsController;
