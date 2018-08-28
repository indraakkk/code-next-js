import Layout from '../components/MyLayout'
import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

export default withRouter(props => (
  <Layout>
    <h1> {props.router.query.title}</h1>

    {/* you should put markdown text without indentation */}
    <div className="markdown">
      <Markdown
        source={`
This is about page.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
`}
      />
    </div>
    <style jsx global>
      {' '}
      {`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}{' '}
    </style>
  </Layout>
))
