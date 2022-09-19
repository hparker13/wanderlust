// Select the New postController2
const postsController2 = new PostsController(0);
const newPostForm = document.querySelector('#newPostForm');

// Saving the Post Image to the Local Storage
document.querySelector("#postPicInput").addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});


// document.querySelector("#postPicInput").addEventListener("change", function () {
//     const reader = new FileReader();

//     reader.addEventListener("load", () => {
//             localStorage.setItem("recent-image", reader.result);
//     });

//     reader.readAsDataURL(this.files[0]);
// });

// function submitPost(event){ 
newPostForm.addEventListener('submit', event  => {
    // prevent Default action
    event.preventDefault();

   

    // Select the inputs
    const newPostLocation = document.querySelector('#location');
    const newPostText = document.querySelector('#postTextInput');
    const newPostPicInput = document.querySelector('#postPicInput');
    

    // the values of the inputs
    const location = newPostLocation.value; 
    const postText = newPostText.value;
            // Locate Post Pic then set src to location
    const postPic = localStorage.getItem("recent-image");
    

    /*
        Validation code here(no empty)
    */
        postsController2.addPost(location, postText, postPic);

        newPostLocation.value = '';
        newPostText.value = ''; 
        newPostPicInput.value = '';


}); 


// document.getElementById("psubmit").addEventListener("click",submitPost)
