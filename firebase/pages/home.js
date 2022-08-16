const axios = require("axios");

export const Home = (props) => {
  return props.poem ? (
    <div>
      <h2>{props.poem.title} </h2>
      {props.poem.lines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  ) : (
    <h1>Oops, SSR props were not passed!</h1>
  );
};

export async function getServerSideProps () {
  const response = await axios.get("https://poetrydb.org/title/Ozymandias");

  return { props: { poem: response.data[0] } };
}

export default Home;
