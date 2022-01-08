import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios';
import { post } from '@prisma/client';

// Props type
interface PostProps {
  posts: post[] | null
}

const Home: NextPage<PostProps> = (props: PostProps) => {
  console.log("MY PROPS");
  console.log(props);
  
  return (
    <div>
      <Head>
        <title>AnoPost</title>
        <meta name="description" content="Created by Thimo Reumerman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to AnoPost</h1>
        <div id="posts">
          {props.posts?.map(post => {
            return (
              <div id={`post_${post.id}`} className="post">
                <h3 className="title">{post.title}</h3>
                <p className="content">{post.content}</p>
              </div>);
          })}
        </div>
      </main>

      
    </div>
  )
}

// Get server-sided props
export const getServerSideProps: GetServerSideProps<PostProps> = async () => {
  let posts: post[] | null | undefined = null;

  await axios
    .get<post[]>("http://localhost:3000/api/posts")
    .then(response => {
      posts = response.data;
    });

    return {
      props: {
        posts: posts
      }
    }
}

export default Home
