import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <div className="hero">
        <h1>Football and Movies Hub</h1>

        <p>
          Welcome to my entertainment website where you can explore
          football and movies content.
        </p>

        <img src="/stadium.jfif" width="400" />
        <img src="/movies.jfif" width="400" />
      </div>

      <div>
        <h2>Introduction</h2>

        <p>
          This is a simple project.
        </p>
      </div>

      <div>
        <h2>Navigation</h2>

        <Link to="/football">Go to Football Page</Link>

        <br /><br />

        <Link to="/movies">Go to Movies Page</Link>
      </div>

    </div>
  );
}

export default Home;