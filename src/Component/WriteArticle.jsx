import React, { useState } from "react";
import { useGlobal } from "../context/Global";
import { useFirebase } from "../context/Firebase";

function WriteArticle() {
  const useglobal = useGlobal();
  const firebase = useFirebase();
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState("");
  const [imgurl, setImgurl] = useState("");

  function submitArticle() {
    if (useglobal.mainname !== "hanuman123" && useglobal.mainusrtype === "doctor") {
      firebase.writearticle(useglobal.mainname, topic, article, imgurl, 0);
      firebase.updateCounterForId1(topic + useglobal.mainname, -1);
      alert("✅ Article submitted successfully!");
    } else {
      alert("⚠️ Please Sign in as a Doctor");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">
          ✍️ Write an Article
        </h2>

        {/* Input Fields */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Topic</span>
          </label>
          <input
            type="text"
            placeholder="Enter topic of the article"
            className="input input-bordered w-full"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Paste image URL related to article"
            className="input input-bordered w-full"
            onChange={(e) => setImgurl(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Article Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Write your article here..."
            onChange={(e) => setArticle(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button onClick={submitArticle} className="btn btn-primary px-8">
            🚀 Submit Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteArticle;
