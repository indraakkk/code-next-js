import Layout from '../components/MyLayout'
import Link from 'next/link'
// import post from './post'

const PostLink = (props)=> (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default ()=> (
    <Layout>
        <h1>My Very First Blog</h1>
        <ul>
            <PostLink id='hello-nextjs' title='Hello world with Next.js' />
            <PostLink id='simple-nextjs' title='Simplified your ReactJs' />
            <PostLink id='hack-nextjs' title='Start hacking now!' />
        </ul>
    </Layout>
)
