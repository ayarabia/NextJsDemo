export  const getStaticProps= async ()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
    const posts = await res.json()
console.log(posts);
    return {
      props: {
        posts,
      },
    }
  }
  