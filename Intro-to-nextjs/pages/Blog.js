import React from 'react';
import Link from 'next/link'
import { getStaticPaths } from './Blog/[title]';



export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
        //data: data[0].body // body of first object in array
      posts: data, // Pass the entire array of posts as the 'posts' prop
    },
  };
}

export default function Blog(props) {
  return (
    <div>
      <h1> Blog </h1>
      {props.posts.map((post) => ( // Corrected to props.posts
        <div className='blog-container' key={post.id}> {/* Use post.id as the key */}
         {/* <h2> {post.title} </h2> */}
         <Link className='blog-title' href={`/Blog/${post.title}`} > <h2> {post.title} </h2> </Link>
          <p>{post.body}</p> {/* Display the body of each post */}
        </div>
      ))}
      <p> lorem ipsum </p>
    </div>
  ); 
}

