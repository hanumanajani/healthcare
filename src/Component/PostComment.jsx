import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useGlobal } from "../context/Global";

function PostComment(props) {
  const [cmnt, setcmnt] = useState("");
  const firebase = useFirebase();
  const useglobal = useGlobal();

  const post = () => {
    if (useglobal.mainname === "hanuman123") {
      alert("Sign in first");
    } else {
      firebase.WriteCommentForId1(
        useglobal.mainname,
        cmnt,
        props.cnt + 1,
        props.id
      );
      setcmnt("");
      alert("Posted!");
    }
  };

  return (
    <div className="mt-3">
      <div className="flex items-center gap-2">
        {/* Comment input */}
        <input
          type="text"
          value={cmnt}
          onChange={(e) => setcmnt(e.target.value)}
          placeholder="Write a comment..."
          className="input input-bordered input-sm w-full max-w-xs"
        />

        {/* Post button */}
        <button
          onClick={post}
          className="btn btn-primary btn-sm rounded-lg"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostComment;
