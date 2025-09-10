import React from "react";
import ReadArticle2 from "./ReadArticle2";

function ReadArticle(props) {
  const topiclist = Object.keys(props.Article).filter((key) =>
    key.startsWith("")
  );

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {topiclist.length === 0 ? (
        <p className="text-gray-500 text-lg">No articles available.</p>
      ) : (
        topiclist.map((topic, index) => (
          <div
            key={index}
            className="card w-full max-w-3xl bg-base-100 shadow-lg border border-base-300"
          >
            {/* Topic Header */}
            <div className="card-body">
              <h2 className="card-title text-primary text-2xl">
                📌 {topic}
              </h2>

              {/* Article Content */}
              <div className="mt-4">
                <ReadArticle2 topic={topic} Article={props.Article[topic]} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ReadArticle;
