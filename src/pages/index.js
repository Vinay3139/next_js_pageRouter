import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./components/redux/userData/userData";
import styles from "../styles/Home.module.css";
/**
 *  fetch user Data with getStaticProps
 * @returns
 */

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

/**
 * Show user Data
 * @param {*} param0
 * @returns
 */
export default function Home({ data }) {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  dispatch(getUserData(data));
  return (
    <>
      <Link href="/posts">
        <Button variant="contained">Post</Button>
      </Link>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
