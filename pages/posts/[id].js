import React from 'react'
export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8 `)
    const data = await res.json()
    const paths=data.map(item=>{
return{
    params:{id:`${item.id}`}
}
    })
    return {
      paths: paths,
      fallback: false 
    };
  }
export  async function getStaticProps (context){

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `)
    const data = await res.json()

    return {
      props: {
        post:data,
      },
    }
  }

 
  export default function SingelPost(props) {
    console.log(props.post);
  return (
   
   <>
<div className='container'>
<div className='row p-5'>
<h3>{props.post.title}</h3>
    <p>
     {props.post.body}
    </p>
</div>

</div>
   </>
  )
}

