export const CatFactList = ({ data, loading }) => {
  return (
    <ol>
      {loading === false ? (
        data.data.map((fact, index) => (
          <li key={index}>
            {" "}
            <img src="src\assets\paws.png" alt="" className="cat-paw" />
            <p>{fact.fact}</p>{" "}
          </li>
        ))
      ) : (
        <p className="alert alert-info text-center">Loading...</p>
      )}
    </ol>
  );
};
