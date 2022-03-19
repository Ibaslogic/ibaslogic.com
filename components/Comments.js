import { useRef, useState, useEffect } from "react";

const Comment = () => {
  const commentBoxRef = useRef();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const scriptEle = document.createElement("script");
    scriptEle.async = true;
    scriptEle.src = "https://utteranc.es/client.js";
    scriptEle.setAttribute("repo", "ibaslogic/comments");
    scriptEle.setAttribute("issue-term", "pathname");
    scriptEle.setAttribute("id", "utterances");
    scriptEle.setAttribute("theme", "github-light");
    scriptEle.setAttribute("crossorigin", "anonymous");
    if (commentBoxRef && commentBoxRef.current) {
      setLoading(true);
      commentBoxRef.current.appendChild(scriptEle);

      scriptEle.addEventListener("load", () => {
        const iframe = document.querySelector(".utterances-frame");
        iframe.addEventListener("load", () => setLoading(false));
      });
    } else {
      console.log(`Error with utterances comments on: ${commentBoxRef}`);
    }
  }, []);
  return (
    <>
      <h2 className="text-2xl sm:text-[1.65rem] mb-4 pb-5 font-semibold border-solid border-b border-[#f0f0f0]">
        Discussion
      </h2>
      {loading ? <p>One moment please...</p> : null}
      <div ref={commentBoxRef} />
    </>
  );
};
export default Comment;
