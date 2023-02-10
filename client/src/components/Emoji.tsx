import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { FormikState, useFormikContext } from "formik";
import { MessageForm } from "../types/messageType";

type EmojiProp = {
  setEmoji: React.Dispatch<React.SetStateAction<any>>
}

const Emoji = ({setEmoji}:EmojiProp) => {
  const { values , resetForm} = useFormikContext<MessageForm>();
  
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const handlePicker = ()=> setIsPickerVisible(!isPickerVisible);

  useOnClickOutside(emojiPickerRef, () => handlePicker());
  

  return (
    <StyledEmoji>
      {isPickerVisible && (
        <div ref={emojiPickerRef} className="picker">
          <EmojiPicker
            onEmojiClick={e => {
                setEmoji(e.emoji)
                handlePicker()
            }}
          />
        </div>
      )}
      <button type="button" onClick={() =>  handlePicker()}>
      <i className="fas fa-smile"></i>
      </button>
    </StyledEmoji>
  );
};

const StyledEmoji = styled.div`
  position: relative;
  width: 45px;
  .picker {
    z-index: 11;
    bottom: 1rem;
    position: absolute;
  }
  button{
    border: none;
    height: 100%;
    width: 100%;
    border-radius: 8px 0 0 8px;
    font-size: 1.5rem;
    background: #f8f8f8;
  }
  button:hover{
    background: #e4e3e3;
  }
`;

export default Emoji;
