import Link from "next/link";
import React from "react";
export  const getStaticProps= async ()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
    const posts = await res.json()
console.log(posts);
    return {
      props: {
        posts,
      },
    }
  }
  

function Posts({ posts }) {
    // console.log(posts);
  return (
    <div>
      <h1 className="text-center text-danger">Posts</h1>
<div className="container">
<div className="row">
{posts.map((post) => (
        <div className="col-12 col-md-3" key={post.id} style={{height:"600px"}}>
          <div class="card">
            <img
              src="https://source.unsplash.com/WLUHO9A_xik/1600x900/?nature"
              class="card-img-top"
              alt="image"
            />
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <p class="card-text">
             {post.body}
              </p>
            <Link href={`/posts/${post.id}`}>
            <a  class="btn btn-primary">
                Go To Singel Post
              </a>
            </Link>
            </div>
          </div>
        </div>
      ))}
</div>


</div>
    </div>
  );
}

export default Posts;
