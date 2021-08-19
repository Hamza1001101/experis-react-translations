import { useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { addHistory, getUsername } from "../../util/Storage";
import { getTranslation } from "../../util/Translate";
import SignImage from "./singImage/SignImage";

const Translation = () => {
  const isLoggedIn = getUsername();
  const [formData, setFormData] = useState("");
  const [signImages, setSignImages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData === undefined) return alert("Invalid value ");
    if (formData.length === 0) return alert("Invalid value");

    if (parseInt(formData)) {
      setFormData(event.target.reset());

      return alert(
        "Text that contains symbols and non-english characters would be ignored"
      );
    }

    const signSequencePngs = getTranslation(formData);

    setSignImages(signSequencePngs);
    addHistory(formData);

    setFormData(event.target.reset());
  };

  const handleKeywordsChange = (event) => {
    const searchQuery = event.target.value.split(/[ ,.-]+/);

    setFormData(searchQuery);
  };

  return (
    <TranslationWrapper>
      <h1>Translation</h1>
      <div>
        {!isLoggedIn && <Redirect to="/homepage" />}

        <form id="form" onSubmit={handleSubmit}>
          <TranslationInput
            type="search"
            name="keywords"
            id="keywords"
            placeholder="Enter text..."
            onChange={handleKeywordsChange}
          />
          <TranslationButton>Translate</TranslationButton>
        </form>

        <SignWrapper>
          {signImages &&
            signImages.map((src, id) => <SignImage key={id} src={src} />)}
        </SignWrapper>
      </div>
    </TranslationWrapper>
  );
};

const TranslationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
`;
const TranslationInput = styled.input`
  width: 20rem;
  padding: 12px;
  border-radius: 4px;
  border: 1px black solid;
  outline: none;
`;

const TranslationButton = styled.button`
  padding: 12px;
  margin-left: 1rem;

  background-color: #28d;

  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  width: 8rem;

  :hover {
    background-color: #fff;
    color: #28d;
    border: #28d 1px solid;
  }
`;

const SignWrapper = styled.div`
  margin-top: 4rem;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #333;
  border-radius: 4px;
  background-color: #f8f8f8;
  width: 30rem;
  height: 150px;
`;

export default Translation;
