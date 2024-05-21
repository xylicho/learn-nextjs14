// import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constans";

export const metadata = {
  title: "Home",
};

export async function getMovies() {
  // const response = await fetch(API_URL);
  // const json = await response.json();
  // return json;
  return 1;
}

export default async function HomePage() {
  const movies = await getMovies();
  console.log(movies)
  return (
    // <p>d</p>
    <div className={styles.container}>
      {/* {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))} */}
    </div>
  );
}
