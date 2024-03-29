const CloseButton = ({ update }) => {
  return (
    <button
      className="bg-white hover:bg-f1-black hover:text-white hover:border-white border w-56 text-f1-black font-bold py-3 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
      type="button"
      onClick={update}
    >
      Close
    </button>
  );
};

export default CloseButton;
