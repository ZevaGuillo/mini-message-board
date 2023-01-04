import styled from "styled-components";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean | undefined;
};

const Button = ({ type, disabled }: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}>
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0h24v24H0z"
          fill="none"></path>
        <path
          d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
          fill="currentColor"></path>
      </svg>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 15px 15px;
  border-radius: 10px;
  background-color: black;

  &:hover {
    background: rgba(116, 77, 77, 0.774);
    transition: 0.5s;
  }

  & svg {
    color: #fff;
  }
`;

export default Button;
