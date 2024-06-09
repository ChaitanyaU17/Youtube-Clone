import React, { useState } from 'react';

const Comment = ({ comment }) => {
    const [showReplies, setShowReplies] = useState(false);

    const toggleReplies = () => {
        setShowReplies(!showReplies);
    }

    return (
        <li className="p-2 mb-2 m-2 rounded-lg">
          <div className="flex items-start">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="User Profile"
            />
            <div>
            <strong>{comment.snippet.topLevelComment.snippet.authorDisplayName}</strong>
            <p dangerouslySetInnerHTML={{ __html: comment.snippet.topLevelComment.snippet.textDisplay }}></p>
              {comment.replies && comment.replies.comments.length > 0 && (
                <button
                  onClick={toggleReplies}
                  className="text-blue-500 font-semibold cursor-pointer focus:outline-none"
                >
                  {showReplies ? 'Hide replies' : 'View replies'}
                </button>
              )}
              {showReplies && comment.replies && (
                <ul className="ml-6 mt-2">
                  {comment.replies.comments.map(reply => (
                    <li key={reply.id} className="flex items-start mb-2">
                      <img
                        className="w-8 h-8 rounded-full mr-2"
                        src={reply.snippet.authorProfileImageUrl}
                        alt="User Profile"
                      />
                      <div>
                        <strong>{reply.snippet.authorDisplayName}</strong>
                        <p dangerouslySetInnerHTML={{ __html: reply.snippet.textDisplay }}></p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      );
}

export default Comment;