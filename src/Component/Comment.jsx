import React, { useState } from "react";
import Comment1 from "./Comment1";
import { useFirebase } from "../context/Firebase";
import PostComment from "./PostComment";

function Comment(props) {
  const [cnt, setcnt] = useState(0);
  const [snodata, setsnodata] = useState({});
  const [checkPost, setcheckPost] = useState(false);

  const firebase = useFirebase();

  const Seecomment = () => {
    firebase.readCommentFromId(props.id, setsnodata, snodata);
    firebase.readCommentcounterFromId(props.id, setcnt);
    setcheckPost(!checkPost);
  };

  const snolist =
    snodata && Object.keys(snodata).length > 0
      ? Object.keys(snodata).filter((key) => key.startsWith(""))
      : null;

  return (
    <div className="mt-4">
      {/* Main comment display */}
      <div className="card bg-base-100 shadow-md border border-gray-200">
        <div className="card-body p-4 space-y-3">
          {/* Comment header */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">{props.writer}</span>
            <span className="text-gray-600">:: {props.data}</span>
          </div>

          {/* Toggle button */}
          <button
            onClick={Seecomment}
            className="btn btn-outline btn-sm w-fit flex items-center gap-2"
          >
            <img
              className="w-4 h-4"
              src="https://w1.pngwing.com/pngs/459/66/png-transparent-arrow-graphic-design-dropdown-list-button-blue-azure-line-electric-blue-symbol.png"
              alt="See Comments"
            />
            {checkPost ? "Hide" : "view"} ({cnt})
          </button>

          {/* Comment list */}
          {snolist !== null && (
            <div className="mt-2 space-y-2">
              {snolist.map((sno, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <Comment1
                    writer={snodata[sno].user}
                    data={snodata[sno].comment}
                    id={props.id + sno + snodata[sno].user}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Post comment section */}
          {checkPost && (
            <div className="mt-3">
              <PostComment id={props.id} cnt={cnt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
