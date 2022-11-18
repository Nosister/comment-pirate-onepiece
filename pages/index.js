import { useState } from "react";
import Post from "./Components/MainComponents/Post";
import myData from "./Data/data.json";

export default function Home() {
  const [jsonComment, setJsonComment] = useState(myData.comments);

  const userName = myData.currentUser.username;
  const picture = myData.currentUser.image.png;
  const theid = Math.random().toString();

  const onChangeJson = (changeData, parentId) => {
    setJsonComment((prevState) => {
      
      return prevState.map((comment) => {
        return comment.id === parentId 
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: theid,
                  content: changeData,
                  user: { username: userName, image: { png: picture } },
                },
              ],
            }
          : comment;
      });
    });
  };


  

  return (
    <div className="mt-10 flex justify-center">
      <Post
        jsonComment={jsonComment}
        
        onChangeJson={onChangeJson}
      />
    </div>
  );
}
