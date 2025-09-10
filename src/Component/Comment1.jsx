import React, { useState } from "react";
import Comment from "./Comment";
import { useFirebase } from "../context/Firebase";
import PostComment from "./PostComment";

function Comment1(props) {
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
    <div className="ml-6 mt-3">
      <div className="card bg-base-100 shadow-sm border border-gray-200">
        <div className="card-body p-3 space-y-3">
          {/* Comment header */}
          <div className="flex items-start gap-2">
            <span className="font-semibold text-secondary">{props.writer}</span>
            <span className="text-gray-700">{props.data}</span>
          </div>

          {/* Toggle button */}
          <button
            onClick={Seecomment}
            className="btn btn-outline btn-xs w-fit flex items-center gap-1"
          >
            <img
              className="w-3 h-3"
              src="https://w1.pngwing.com/pngs/459/66/png-transparent-arrow-graphic-design-dropdown-list-button-blue-azure-line-electric-blue-symbol.png"
              alt="See Comments"
            />
            {checkPost ? "Hide " : "View "} ({cnt})
          </button>

          {/* Nested replies */}
          {snolist !== null && (
            <div className="mt-2 space-y-2 border-l-2 border-gray-300 pl-3">
              {snolist.map((sno, index) => (
                <div key={index}>
                  <Comment
                    writer={snodata[sno].user}
                    data={snodata[sno].comment}
                    id={props.id + sno + snodata[sno].user}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Post reply */}
          {checkPost && (
            <div className="mt-2">
              <PostComment id={props.id} cnt={cnt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment1;
