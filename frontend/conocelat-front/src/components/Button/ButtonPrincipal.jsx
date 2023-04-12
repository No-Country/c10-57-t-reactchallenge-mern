export const ButtonPrincipal = ({ text, handleSearch }) => {
  return (
    <button
      className="bg-principal-blue px-4 py-2 rounded text-white hover:bg-blue-700"
      onClick={handleSearch}
    >
      {text}
    </button>
  );
};
