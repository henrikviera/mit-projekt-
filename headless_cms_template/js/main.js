"use strict";

// const url = "https://api.cederdorff.com/wp-json/wp/v2/posts";
const url = "https://api.cederdorff.com/wp-json/wp/v2/posts?_embed";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    console.log(posts);
    appendPosts(posts);
  });

function appendPosts(posts) {
  // to do
  let htmlTemplte ="";
  for (let post of posts) {
  htmlTemplte += ` 
  <articel>
  <img src="${getfeaturedImageUrl(post)}">
  <h2>${post.title.rendered}<h3>
  ${post.content.rendered}
  <articel>`;
}
}

  

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}