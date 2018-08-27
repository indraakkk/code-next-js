import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const ShowLink = ({ show })=> (
  <li>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>

    {/* styling */}
    <style jsx>{`
      h1, a{
        font-family: "Arial";
      }

      li {
        list-style: none;
        padding: 5px;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

// =======with API=============
const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <ShowLink key={show.id} show={show} />
      ))}
    </ul>

    <style jsx>{`
    ul {
      -webkit-padding-start: 0px !important;
    }

    `}</style>
    
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index




// ========without fetch data========
// const getPosts = ()=> {
//   return[
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ]
// }

// export default ()=> (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       {getPosts().map((post)=> (
//         <li key={post.id}>
//           <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//             <a>{post.title}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )
// ==================================
