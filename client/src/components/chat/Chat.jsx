import "./chat.css";
import { useState } from "react";
export default function Chat() {
  const [chats, setChats] = useState([]);
  const [inputString, setInputString] = useState("");
  const inputStringChange = (e) => {
    setInputString(e.target.value);
  };
  const addUserChat = (e) => {
    if (e.length > 0) {
      setChats([e, ...chats]);
    }
  };

  return (
    <div className="chat-container">
      <div className="conversation">
        {chats.length > 0 ? (
          chats.map((msg) => {
            return (
              <div className="chat-box">
                <p>{msg}</p>
              </div>
            );
          })
        ) : (
          <div>meow</div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUserChat(inputString);
        }}
      >
        <textarea
          onChange={inputStringChange}
          name="user-chat-input"
          id="user-chat-input"
          rows="1"
          placeholder="Send gippity a message..."
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
}
