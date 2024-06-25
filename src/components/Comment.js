import React, { useState } from "react";
// import Like from "../Assets/like.jpg";
// import Dislike from "../Assets/dislike.jpg";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showLike, setShowLike] = useState(false);
  const [showDislike, setShowDislike] = useState(false);

  const toggleDislike = () => {
    setShowDislike(!showDislike);
  };

  const toggleLike = () => {
    setShowLike(!showLike);
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <li className="p-2 mb-2 m-2 rounded-lg text-white">
      <div className="flex items-start">
        <img
          className="w-8 h-8 rounded-full mr-2"
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="User Profile"
        />
        <div>
          <strong>
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
          </strong>
          <p
            dangerouslySetInnerHTML={{
              __html: comment.snippet.topLevelComment.snippet.textDisplay,
            }}
          ></p>
          <p className="font-medium opacity-60 hover:underline cursor-pointer">
            Translate to English
          </p>
          <span className=" flex">
            <button onClick={toggleLike} className="outline-none pr-2">
              {showLike ? <BiSolidLike /> : <BiLike />}
            </button>
            {comment?.snippet?.topLevelComment?.snippet?.likeCount}
            <button onClick={toggleDislike} className="px-2 outline-none">
              {showDislike ? <BiSolidDislike /> : <BiDislike />}
            </button>
          </span>
          {comment.replies && comment.replies.comments.length > 0 && (
            <button
              onClick={toggleReplies}
              className="text-blue-500 font-semibold cursor-pointer focus:outline-none"
            >
              {showReplies ? "Hide replies" : "View replies"}
            </button>
          )}
          {showReplies && comment.replies && (
            <ul className="ml-6 mt-2">
              {comment.replies.comments.map((reply) => (
                <li key={reply.id} className="flex items-start mb-2">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={reply.snippet.authorProfileImageUrl}
                    alt="User Profile"
                  />
                  <div>
                    <strong>{reply.snippet.authorDisplayName}</strong>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: reply.snippet.textDisplay,
                      }}
                    ></p>
                    <p className="font-medium opacity-60 hover:underline cursor-pointer">
                      Translate to English
                    </p>
                    <span className="flex h-5 m-2  text-sm">
                      <button
                        onClick={toggleLike}
                        className="outline-none pr-2"
                      >
                        {showLike ? <BiSolidLike /> : <BiLike />}
                      </button>
                      {
                        comment?.replies?.comments?.[Array.length]?.snippet
                          ?.likeCount
                      }
                      <button
                        onClick={toggleDislike}
                        className="px-2 outline-none"
                      >
                        {showDislike ? <BiSolidDislike /> : <BiDislike />}
                      </button>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};

export default Comment;
