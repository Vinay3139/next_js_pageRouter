import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../components/redux/userData/userData";

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Post({ data }) {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  dispatch(getUserData(data));
  //   console.log(userData);
  return (
    <p>
      <div>
        <div style={{ textAlign: "center" }}>
          <h4>User Post Data</h4>
        </div>
        {userData.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`posts/${post.id}`}>
                <p>
                  {post.id} &emsp; {post.title}
                </p>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </p>
  );
}
