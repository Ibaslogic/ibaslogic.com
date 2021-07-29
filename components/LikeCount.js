import { useState, useEffect } from "react";

import useSWR from "swr";

import fetcher from "../lib/fetcher";

// import { firebase } from "../lib/db";
import { BiLike } from "react-icons/bi";

const LikeCount = ({ id }) => {
  const { data } = useSWR(
    `/api/likes/increment-likes?id=${encodeURIComponent(id)}`,
    fetcher
  );
  const likes = new Number(data?.total);

  // useEffect(() => {
  //   const registerLike = () =>
  //     fetch(`/api/likes/increment-likes?id=${encodeURIComponent(id)}`, {
  //       method: "POST",
  //     });

  //   registerLike();
  // }, [id]);

  const handleLikes = async (e) => {
    e.preventDefault();

    const registerLike = () =>
      fetch(`/api/likes/increment-likes?id=${encodeURIComponent(id)}`, {
        method: "POST",
      });

    registerLike();
  };

  // const [likes, setLikes] = useState(0);
  // const [liked, setLiked] = useState(false);
  // const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  //   const onLikes = (newLikes) => setLikes(newLikes.val());

  //   const fetchData = async () => {
  //     firebase.database().ref("likes").child(id).on("value", onLikes);
  //   };

  //   fetchData();

  //   return () => {
  //     firebase.database().ref("likes").child(id).off("value", onLikes);
  //   };
  // }, [id]);

  // const like = async (e) => {
  //   if (!liked) {
  //     e.preventDefault();

  //     const registerLike = () =>
  //       fetch(`/api/likes/increment-likes?id=${encodeURIComponent(id)}`, {
  //         method: "POST",
  //       });

  //     registerLike();
  //     setLiked(true);
  //     setDisabled(true);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  // const btnDisabled = {
  //   color: "#000",
  //   cursor: "none",
  //   opacity: "0.2",
  // };

  return (
    <div className="lg:cust_line mt-8">
      <button
        className="grid grid-cols-2 gap-x-2 items-center text-lg focus:outline-none"
        onClick={handleLikes}
        // style={disabled ? btnDisabled : null}
      >
        <BiLike /> {likes > 0 ? likes.toLocaleString() : "---"}
      </button>
    </div>
  );
};

export default LikeCount;
