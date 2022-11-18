import { useState } from "react";
import Content from "../SubComponents/Content.js";
import InputField from "../SubComponents/InputField.js";
import SubPost from "../SubComponents/SubPost.js";
import Profile from "../SubComponents/Profile.js";

export default function Post({ jsonComment, onChangeJson }) {
  const [clickButton, setClickButton] = useState(true);
  const [idState, setIdState] = useState(0);
  const [replyText, setReplytext] = useState("");

  const onChangeJsons = (data, ids) => {
    onChangeJson(data, ids);
  };
  const mapItem = jsonComment.map((item) => {
    return (
      <li key={item.id} className="py-4">
        <Profile
          username={item.user.username}
          image={item.user.image.png}
          setIdState={setIdState}
          id={item.id}
          setClickButton={setClickButton}
          createdAt={item.createdAt}
        />
        <div className="">
          <Content content={item.content} />
          <InputField
            idState={idState}
            id={item.id}
            clickButtons={clickButton}
            setClickButtons={setClickButton}
            userName={item.user.username}
            setReplytexts={setReplytext}
            replyTexts={replyText}
            onChange={onChangeJsons}
            setIdState={setIdState}
            parentId={item.id}
          />
        </div>
        {/* <div>
          <SubPost
            setIdState={setIdState}
            id={item.id}
            reply={item.replies}
            idState={idState}
            clickButtons={clickButton}
            setClickButtons={setClickButton}
            setReplytexts={setReplytext}
            replyTexts={replyText}
            onChange={onChangeJsons}
          />
        </div> */}
      </li>
    );
  });

  return (
    <div className="p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <ul role="list" className="divide-y divide-gray-200">
        {mapItem}
      </ul>
    </div>
  );
}
