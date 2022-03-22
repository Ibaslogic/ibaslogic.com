import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function ViewCounter({ slug }) {
  const { data } = useSWR(
    `/api/page-views?slug=${encodeURIComponent(`/` + slug + `/`)}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const views = data?.pageViews;

  return <>{`${views ? new Number(views).toLocaleString() : "–––"} views`}</>;
}
