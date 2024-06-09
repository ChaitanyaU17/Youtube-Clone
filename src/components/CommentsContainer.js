import React, { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from '../utils/constants'
import Comment from './Comment';

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=${videoId}&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          setComments(data.items);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [videoId]);

  return (
    <div className="order-3 w-full flex flex-col basis-8/12 max-w-[725px] flex-grow ml-5 rounded-xl shadow-lg">
      <h2 className="font-bold mb-4 mt-3 text-lg p-2">Comments 327</h2>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsContainer;























// import React from 'react'
// import commentLogo from "../Assets/comment-logo.png";

// const CommentsData = [
//   {
//     id: 1,
//     author: 'John Doe',
//     text: 'Great video! Thanks for sharing 😍',
//     likes: 10,
//     replies: [
//       {
//         id: 2,
//         author: 'Jane Smith',
//         text: 'I agree! Very informative.',
//         likes: 5,
//         replies: [
//           {
//             id: 5,
//             author: 'Tom Brown',
//             text: 'Absolutely, very helpful.',
//             likes: 2,
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     author: 'Alice Johnson',
//     text: 'Can you make a video on React hooks?',
//     likes: 3,
//     replies: [
//       {
//         id: 4,
//         author: 'Bob White',
//         text: 'That would be great!',
//         likes: 1,
//         replies: [],
//       },
//     ],
//   },
//   {
//     id: 6,
//     author: 'Charlie Black',
//     text: 'I love the way you explain things!',
//     likes: 8,
//     replies: [
//       {
//         id: 7,
//         author: 'Dana Green',
//         text: 'Me too! So clear and concise.',
//         likes: 4,
//         replies: [
//           {
//             id: 8,
//             author: 'Eve Blue',
//             text: 'Do you have any other channels?',
//             likes: 1,
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const Comment = ({ data })=> {
//   const  {id, author, text, likes, replies } = data;
//   return (
//     <div key={id} className="mb-4 ">
//       <div className="flex items-start rounded-xl bg-gray-100 p-2">
//         <img className="h-7 w-7 rounded-full mr-2" src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user-comment" />
//         <div>
//           <p className="font-bold">{author}</p>
//           <p>{text}</p>
//           <p className="text-sm text-gray-600">{likes} likes</p>
//         </div>
//       </div>
//       <div className="ml-8 mt-2">
//         {replies.length > 0 && replies.map(reply => <Comment key={reply.id} data={reply} />)}
//       </div>
//     </div>
//   );
// }

// const CommentsContainer = () => {
//   return (
//     <div className='p-3 m-2 font-medium'>
//       <h1 className='from-neutral-200'>Comments 327</h1>
//       <div className='flex mb-2 '>
//         <img
//           className="h-8 w-8 rounded-full my-2 mr-2"
//           src={commentLogo}
//           alt="comment-logo"
//         />
//         <input
//           type="text"
//           className='px-3 mx-4 outline-none '
//           placeholder="Add a comment..."
//         />
//         </div>
//       {CommentsData.map(comment => <Comment key={comment.id} data={comment} />)}
//     </div>
//   )
// }

// export default CommentsContainer
