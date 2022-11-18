import ReplyButton from "./ReplyButton.js";
import Image from "next/image.js";

const Profile = ({
  username,
  image,
  setIdState,
  id,
  setClickButton,
  createdAt,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <Image width={40} height={40} src={image} alt="profile picture" />
        <div> &nbsp; &nbsp;</div>
        <div>
          {" "}
          <strong>{username}</strong>
          <p className="text-xs text-slate-400">{createdAt}</p>
        </div>
      </div>
      <ReplyButton
        setClickButton={setClickButton}
        id={id}
        setIdState={setIdState}
      />
    </div>
  );
};

export default Profile;
