import Content from "./Content";
import InputField from "./InputField";

import Profile from "./Profile";

const SubPost = ({
  setIdState,
  id,
  reply,
  idState,
  clickButtons,
  setClickButtons,
  setReplytexts,
  replyTexts,
  onChange
}) => {
  const theReply =  reply
    ?.filter((x) => x.content.lenght !== 0)
    ?.map((items) => {
      return (
        <div
          key={items.id}
          className="p-2 mb-3 mt-2 ml-2 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <Profile
            username={items.user.username}
            image={items.user.image.png}
            setIdState={setIdState}
            id={items.id}
            setClickButton={setClickButtons}
            createdAt={items.createdAt}
          />
          <div>
            <Content content={items.content} />
            <InputField
              idState={idState}
              id={items.id}
              clickButtons={clickButtons}
              setClickButtons={setClickButtons}
              userName={items.user.username}
              setReplytexts={setReplytexts}
              replyTexts={replyTexts}
              onChange={onChange}
              setIdState={setIdState}
              parentId={id}
            />
          </div>
        </div>
      );
    });

  return <><div>{theReply}</div></>;
};

export default SubPost;
