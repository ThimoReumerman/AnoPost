import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios';
import { post } from '@prisma/client';
import PostForm from '../components/forms/post';

// Props type
interface PostProps {
  posts: post[] | null
}

const Home: NextPage<PostProps> = (props: PostProps) => {  
  console.log(props);
  return (
    <div>
      <Head>
        <title>AnoPost</title>
        <meta name="description" content="Created by Thimo Reumerman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-5xl font-medium leading-tight mt-0 mb-2">Welcome to AnoPost</h1>

        <PostForm />

        <div id="posts" className="grid grid-cols-1 gap-10 justify-center">
          {props.posts?.map(post => {
            return (
              <div key={`post_${post.id}`} id={`post_${post.id}`} className="post grid grid-cols-1 gap-4 max-w-sm rounded overflow-hidden shadow-lg bg-emerald-100">
                <h3 className="title text-xl font-bold">{post.title}</h3>
                <p className="content">{post.content}</p>
                <p className="author font-italic font-thin">{post.author}</p>
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
