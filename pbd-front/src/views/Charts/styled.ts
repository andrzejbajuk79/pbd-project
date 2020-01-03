import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: flex-start;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button<{ isSelected?: boolean }>`
  background-color: #829cd0;
  padding: 0.5em 1.5em;
  border: 1px solid #000b4f;
  border-radius: 10px;
  color: white;
  margin: 1em 0;

  :hover {
    background-color: #20368f;
    cursor: pointer;
  }

  ${({ isSelected }) =>
    isSelected ? "border: 3px solid #000b4f;" : "border: 1px solid #000b4f;"}
`;
