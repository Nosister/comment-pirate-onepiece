const ReplyButton = ({ setClickButton, id, setIdState }) => {
  const clickButton = () => {
    setClickButton(false);
  setIdState(id);
  };

  const theButton = (
    <button
      onClick={clickButton}
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      reply
    </button>
  );

  return <div>{theButton}</div>;
};

export default ReplyButton;
