import React, { useState } from "react";
import WriteArticle from "./WriteArticle";
import ReadArticle from "./ReadArticle";
import { useFirebase } from "../context/Firebase";

function Article() {
  const [checkwrite, setCheckWrite] = useState(false);
  const [checkread, setCheckRead] = useState(false);

  const [article, setArticle] = useState({});
  const firebase = useFirebase();

  function readArticle() {
    firebase.readArticle1(article, setArticle);
    setCheckRead(!checkread);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 p-6">
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">📝 Article Hub</h2>
        <p className="text-gray-500 mt-2">
          Write and explore articles seamlessly.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-2xl flex justify-center gap-4 mb-6">
        <button
          className="btn btn-primary"
          onClick={() => setCheckWrite(!checkwrite)}
        >
          {checkwrite ? "Close Writer" : "Write Article"}
        </button>

        <button className="btn btn-secondary" onClick={readArticle}>
          {checkread ? "Hide Articles" : "Show Articles"}
        </button>
      </div>

      {/* Content Display */}
      <div className="w-full max-w-3xl">
        {checkwrite && (
          <div className="card bg-base-100 shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              ✍️ Write an Article
            </h3>
            <WriteArticle />
          </div>
        )}

        {checkread && (
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              📖 Read Articles
            </h3>
            <ReadArticle Article={article} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
