import { post } from '@prisma/client';
import axios from 'axios';
import {useState} from 'react';

const PostForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const onClick = (e: any) => {
    e.preventDefault();

    if (title == '' || content == '') return;
    
    const post: post = {id: 0, title: title, content: content, author: author};

    axios
      .post<post>("http://localhost:3000/api/posts", post)
      .then(post => {
        window.location.reload();
      })
  }

  return (
    <form className='grid grid-cols-1 gap-4 mb-50 '>
      <label htmlFor="title">Title
        <input className="bg-slate-100" name="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label htmlFor="content">Content
        <textarea className="bg-slate-100" name="content" required value={content} onChange={(e) => setContent(e.target.value)} />
      </label>

      <label htmlFor="author">Author
        <textarea className="bg-slate-100" name="author" required value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>

      <button className="bg-slate-500 w-1/5 rounded" onClick={(e) => onClick(e)}>Post</button>
    </form>
  )

  
}


export default PostForm;