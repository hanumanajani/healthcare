import React from "react";
import Comment from "./Comment";

function ReadArticle2(props) {
  const writerlist = Object.keys(props.Article).filter((key) =>
    key.startsWith("")
  );

  return (
    <div className="space-y-6">
      {writerlist.map((writer, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-xl border border-gray-200"
        >
          {/* Writer Header */}
          <div className="card-header flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold text-primary flex items-center gap-2">
              ✍️ Writer:
              <span className="badge badge-outline badge-primary">
                {writer}
              </span>
            </h2>
          </div>

          {/* Article Content */}
          <div className="card-body space-y-4">
            <img
              className="w-full h-64 object-cover rounded-lg shadow-md"
              src={props.Article[writer].imgurl}
              alt="post"
            />

            <p className="text-gray-700 leading-relaxed">
              {props.Article[writer].article}
            </p>
          </div>

          {/* Footer with comments */}
          <div className="card-footer border-t p-4">
            <Comment
              id={props.topic + writer}
              data="💬 Comments..."
              writer=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReadArticle2;
