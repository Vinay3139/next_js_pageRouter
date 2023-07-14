import { Button } from "@mui/material";
import Link from "next/link";

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default function UserId({ data }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Link href="/">
        <Button variant="contained">Home</Button>
      </Link>
      <p>PostId</p>
      <div>
        <h2>
          {data.id}
          {data.title}
        </h2>
        <h5>{data.body}</h5>
      </div>
    </div>
  );
}
