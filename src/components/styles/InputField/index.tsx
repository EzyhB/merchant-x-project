import { SyntheticEvent, useState } from "react";
import styled from "styled-components";

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

const InputBorder = styled.div`
  max-width: 380px;
  border: 1px solid #ddd;
  border-radius: 0.9rem;
  background: #f1f1f1;

  display: flex;
  flex-direction: row-reverse;

  @media only screen and (min-width: 0px) {
    width: 190px;
  }
  @media only screen and (min-width: 900px) {
    width: 380px;
  }
`;
const InputForm = styled.form`
  max-width: 380px;

  margin: auto;

  @media only screen and (min-width: 0px) {
    width: 190px;
  }
  @media only screen and (min-width: 900px) {
    width: 380px;
  }
`;

const MicIcon = styled.i`
  width: 24px;
  height: 24px;
  margin: 0.3rem 0.3rem;
  background: url("./images/micIcon.png");
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
`;

const SearchIcon = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  margin: 0.5rem 0.2rem 0 0.2rem;
  background: url("./images/searchIcon.png");
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
`;

const InputBar = styled.input`
  padding: 0.6rem;

  border: none;
  border-radius: 0.8rem;
  background: none;
  width: 100%;
`;

let searchItem = "";

export function InputField() {
  const [searchFor, setSearchFor] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const checkIfInputEmpty = () => {
    if (searchItem.trim().length > 1) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form[1] as HTMLInputElement;
    console.log(input.value);
  };

  const startDistation = () => {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      const { webkitSpeechRecognition }: IWindow = window as any;
      const recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = (e: SyntheticEvent) => {
        const event = e as any;
        const result = event.results as SpeechRecognitionResultList;
        const resultText = result[0] as SpeechRecognitionResult;

        searchItem = resultText[0].transcript;
        checkIfInputEmpty();
        setSearchFor(searchItem);

        recognition.stop();
      };

      recognition.onerror = () => {
        recognition.stop();
      };
    }
  };
  return (
    <InputForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      id="form-submit"
    >
      <InputBorder>
        {isEmpty ? (
          <MicIcon
            onClick={() => {
              startDistation();
            }}
          />
        ) : (
          <SearchIcon type="submit" />
        )}

        <InputBar
          type="text"
          title="Search for a Pokemon..."
          placeholder="Search for a Pokemon..."
          value={searchFor}
          onChange={(e) => {
            searchItem = e.target.value;
            setSearchFor(searchItem);
            checkIfInputEmpty();
          }}
        ></InputBar>
      </InputBorder>
    </InputForm>
  );
}
