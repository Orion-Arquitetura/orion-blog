import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  .img-url-input-div {
    border-radius: 4px;
    position: absolute;
    background: #2b9ce2;
    width: fit-content;
    padding: 10px;
    top: 50%;
    left: 50%;
    translate: -50%;
    display: none;
    z-index: 9;
    column-gap: 10px;
    align-items: center;
    
    & div {
      display: flex;
      width: fit-content;

      & button {
        padding-inline: 10px;
      }
    }

    &.visible {
      display: flex;
    }

    .img-url-input {
      width: 50%;
      position: relative;
      padding: 4px;
    }
  }
`;

export default function Quill() {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline"],
          ["image", "video", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
      },
    },
  });

  const [postContent, setPostContent] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputWrapperRef = useRef<HTMLDivElement | null>(null)
  const selectionRef = useRef<any>(quill ? quill.getSelection() : null) 

  function insertImage() {
    let value = inputRef.current!.value;

    if (value) {
      quill.insertEmbed(selectionRef.current.index, 'image', value);
    }

    inputWrapperRef.current?.classList.remove("visible")
    inputRef.current!.value = ""
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setPostContent(quillRef.current.firstChild.innerHTML);
      });

      quill.getModule("toolbar").addHandler("image", () => {
        const range = quill.getSelection()
        selectionRef.current = range

        if (inputWrapperRef.current?.classList.contains("visible")) {
          inputWrapperRef.current?.classList.remove("visible")
          return
        }
        inputWrapperRef.current?.classList.add("visible")
      });
    }

  }, [quill, quillRef]);

  return (
    <StyledWrapper>
      <div style={{ width: "90%", height: "500px", backgroundColor: "white" }}>
        <div className="img-url-input-div" ref={inputWrapperRef}>
          <div>
            URL da imagem:
          </div>
          <div>
            <input className="img-url-input" ref={inputRef} />
            <button onClick={insertImage}>Enviar</button>
            <button onClick={() => inputWrapperRef.current?.classList.remove("visible")}>Cancelar</button>
          </div>
        </div>
        <div ref={quillRef} style={{ backgroundColor: "white" }} />
      </div>
    </StyledWrapper>
  );
}
