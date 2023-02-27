export const SearchForm = ({ onHandlerSubmit }) => {
  return (
    <>
      <form onSubmit={onHandlerSubmit}>
        <input type="input" name="searchMovies"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
