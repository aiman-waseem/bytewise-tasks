exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 5323:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "post_button__JvqJ6",
	"title": "post_title__hnXeU"
};


/***/ }),

/***/ 2179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5323);
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3__);
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




function Post(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/Blog",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                    children: "\xab back to all blog posts"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: props.post.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: props.post.body
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                onClick: ()=>router.push("/Blog"),
                children: "Click me"
            })
        ]
    });
}
async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const thePaths = data.map((post)=>{
        return {
            params: {
                title: post.title
            }
        };
    });
    return {
        paths: thePaths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const thePost = data.filter((post)=>post.title === params.title);
    return {
        props: {
            post: thePost[0]
        }
    };
}


/***/ })

};
;