import styled from "styled-components";
import iconDotted from "./dotted.svg";

export default styled.div`
  height: 14px;
  width: 4px;
  cursor: pointer;
  padding: 10px;
  margin-left: 15px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: all 0.1s ease-in-out;
  }

  &:before {
    content: "";
    background-image: url(${iconDotted});
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
