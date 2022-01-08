import { post } from '@prisma/client';
import axios from 'axios';
import {useState} from 'react';

const PostForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onClick = (e: any) => {
    e.preventDefault();

    const post: post = {title: title, content: content};

    axios
      .post<post>("http://localhost:3000/api/posts", post)
      .then(post => {
        window.location.reload();
      })
  }

  return (
    <form className='grid grid-cols-1 gap-4'>
      <label htmlFor="title">Title
        <input className="bg-slate-100" name="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label htmlFor="content">Content
        <textarea className="bg-slate-100" name="content" required value={content} onChange={(e) => setContent(e.target.value)} />
      </label>

      <button onClick={(e) => onClick(e)}>Post</button>
    </form>
  )

  
}


export default PostForm;