import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import Layout from '../Layouts/Layout';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <Layout>
 <main>

 <Component {...pageProps} />
 </main>
    </Layout>
   
  )
}

export default MyApp
