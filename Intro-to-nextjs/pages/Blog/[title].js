//[title].js ---->  square bracket tells next.js that you this to be like  a variable(a parameter) 
// import Link from 'next/link';
// import {useRouter} from "next/router"



// export default function Post(props) {
//     const router = useRouter()
//   return (
//     <div>
//         <Link href="/Blog"> <small>&laquo; back to all blog posts</small> </Link>
//         <h2> {props.posts.title} </h2>
//         <p> {props.posts.body} </p>
//         <button onClick={() => router.push("/Blog")} > Click me </button>
//     </div>
//   )
// }
// export async function getStaticPaths() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
// // looping through three blog posts
// // returning an object
// const thePaths = data.posts.map(blog =>{
//     return{params :{title: blog.title} }
// })


//     return {
//         paths:thePaths,
//         fallback:false
//     }
// }

// export async function getStaticProps(ctx) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     const thePost = data.posts.filter(post => post.title === ctx.params.title )

//     return {
//         props:{
//            post:thePost,
//            title: thePost.title
//         }
//     }
// }
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "../../styles/post.module.css"

export default function Post(props) {
  const router = useRouter();
  return (
    <div>
      <Link href="/Blog">
        <small>&laquo; back to all blog posts</small>
      </Link>
      <h2 className={styles.title}>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <button className={styles.button} onClick={() => router.push("/Blog")}>Click me</button>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const thePaths = data.map((post) => {
    return { params: { title: post.title } };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const thePost = data.filter((post) => post.title === params.title);

  return {
    props: {
      post: thePost[0],
    },
  };
}
