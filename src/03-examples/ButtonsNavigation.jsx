

export const ButtonsNavigation = ( { loading, decrement, increment } ) => {
  return (
    <div className="button-container-center">
      <button
        className="btn btn-primary"
        onClick={decrement}
        disabled={loading}
      >
        Previous Page
      </button>
      <button
        className="btn btn-primary"
        onClick={increment}
        disabled={loading}
      >
        Next Page
      </button>
    </div>
  );
};
