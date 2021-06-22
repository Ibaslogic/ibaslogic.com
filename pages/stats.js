import useSWR from "swr";

import fetcher from "../lib/fetcher";

const Stats = () => {
  const { data } = useSWR("/api/views", fetcher);

  const pageViews = new Number(data?.total);

  return (
    <div>
      <p>{pageViews ? pageViews.toLocaleString() : "-"}</p>
    </div>
  );
};

export default Stats;
