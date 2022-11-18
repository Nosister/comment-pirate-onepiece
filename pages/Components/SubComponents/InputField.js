const InputField = ({
  idState,
  id,
  clickButtons,
  setClickButtons,
  userName,
  setReplytexts,
  replyTexts,
  onChange,
  setIdState,
  parentId,
}) => {
  const buttonStyle =
    "inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  const buttonStylered =
    "inline-flex items-center rounded-md border border-transparent bg-red-300 px-3 py-2 text-sm font-medium leading-4 text-slate-50 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

  const clickButton = (event) => {
    event.preventDefault();
    setClickButtons(true);
  };

  const changeHandler = (event) => {
    setReplytexts(event.target.value);
  };
  const submitTriger = (event) => {
    event.preventDefault();
    id !== parentId ? setIdState(parentId) : setIdState(id);
    replyTexts.trim().length === 0 ? null : onChange(replyTexts, parentId);
    setReplytexts("");
    setClickButtons(true);
  };

  const input = (
    <div className="p-4">
      {" "}
      <form>
        <textarea
          rows="4"
          cols="50"
          placeholder={`@${userName}`}
          onChange={changeHandler}
          className="border p-4 rounded-xl max-w-lg"
        />
      </form>
      <div className="flex justify-end">
        <button onClick={submitTriger} className={buttonStyle}>
          enter
        </button>
        &nbsp;
        <button onClick={clickButton} className={`${buttonStylered} `}>
          close
        </button>
      </div>
    </div>
  );

  const theInput = id === idState && !clickButtons ? input : null;
  return (
    <>
      <div>{theInput}</div>
    </>
  );
};

export default InputField;
