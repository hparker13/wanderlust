//class for our social media posts page - specifically itemsController class
class PostsController {  // classes start with a Capital letter
    constructor(currentId = 0) {
        this.posts = [];
        this.currentId = currentId;
    }

    // Creates the object each time a user makes a post that will be 
    // the parameter for the postsController function
    // addPost(location, post_text, post_url, username, user_url) {
    //     const post = {
    //         id: this.currentId++,
    //         location: location,
    //         post_text: post_text,
    //         image: post_url,
    //         username: username,
    //         profilePic: user_url
    //     };
    //     this.posts.push(post);
    //   //Save items to local storage
    //   localStorage.setItem("posts", JSON.stringify(this.posts));
      
    //   this.uploadPost({location, post_text, post_url, username, user_url})
    // }

    addPost(location, post_text, post_url) {
        const post = {
            id: this.currentId++,
            location: location,
            post_text: post_text,
            image: post_url,
            username: "my name",
            userid: 1, 
            profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        };
        this.posts.push(post);
      //Save items to local storage
      localStorage.setItem("posts", JSON.stringify(this.posts));
      
      this.save(location, post_text, post_url, "generation", "example.com", 1)
    }

    save(location, post_text, post_url, username, user_url,userid){
        const data = { location, post_text, post_url, username, user_url,userid};

        fetch('http://localhost:8080/post/save', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"

        },
        body: JSON.stringify(data),
        })
        // .then(response => {console.log (response);
        //     return response.json()})
        // .then(data => {
        // console.log('Success:', data);
        // })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("posts")
        if (storageItems) {
            const posts = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items) 
            for (var i = 0, size = posts.length; i < size; i++) {
                const post = posts[i];
                this.posts.push(post);
            }          
        }
    }
    
 }

// const apost = {
//     location: 'Mississippi',
//     username: 'Ayaka',
//     post_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, rerum quae tenetur aut molestias laborum sint, odit obcaecati quia reprehenderit.',
//     image: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg',
//     user_url: 'ayaka'
// }

// const epost = {
//     location: 'North Carolina',
//     username: 'Eden',
//     post_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, rerum quae tenetur aut molestias laborum sint, odit obcaecati quia reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//     image: 'https://cdn.pixabay.com/photo/2020/03/03/04/31/waterfall-4897499_960_720.jpg',
//     user_url: 'eden'
// }

// const heather = new PostsController();
// heather.addPost('Here', 'My 1st Post', 'https://cdn.pixabay.com/photo/2016/12/03/15/11/sloth-1879999_960_720.jpg', 'Heather', 'heather');
// console.log(heather.posts);

// const eden = new PostsController();
// eden.addPost('There', 'Eden\'s 1st Post', 'https://cdn.pixabay.com/photo/2016/12/03/15/11/sloth-1879999_960_720.jpg', 'Eden', 'eden');
// console.log(eden.posts);

// heather.addPost('Everywhere', 'It is me again- Post 2', 'pic.jpg', 'Heather', 'heather');
// heather.addPost('Everywhere', 'Post 3', 'pic2.jpg', 'Heather', 'heather');
// console.log(heather.posts);

// const ayaka = new PostsController();
// ayaka.addPost('Mississippi', 'Hi! I am Ayaka', 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg', 'Ayaka', 'ayaka');
// console.log(ayaka.posts);

// const listPost = document.getElementById('list-posts');



