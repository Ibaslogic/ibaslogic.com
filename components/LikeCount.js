import { useState, useEffect } from "react";

import { firebase } from "../lib/db";
import { BiLike } from "react-icons/bi";

const LikeCount = ({ id }) => {
  const [likes, setLikes] = useState("");
  const [liked, setLiked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const onLikes = (newLikes) => setLikes(newLikes.val());

    const fetchData = async () => {
      firebase.database().ref("likes").child(id).on("value", onLikes);
    };

    fetchData();

    return () => {
      firebase.database().ref("likes").child(id).off("value", onLikes);
    };
  }, [id]);

  const like = async (e) => {
    if (!liked) {
      e.preventDefault();

      const registerLike = () =>
        fetch(`/api/likes/incrementLikes?id=${encodeURIComponent(id)}`);

      registerLike();
      setLiked(true);
      setDisabled(true);
    } else {
      setDisabled(true);
    }
  };

  const btnDisabled = {
    color: "#000",
    cursor: "none",
    opacity: "0.3",
  };

  return (
    <div>
      <button onClick={like} style={disabled ? btnDisabled : null}>
        <BiLike /> {likes ? likes.toLocaleString() : "---"}
      </button>
    </div>
  );
};

export default LikeCount;
