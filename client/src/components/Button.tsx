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
        viewBox="0 0 512 512">
        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
      </svg>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 20px 20px;
  border-radius:  0 8px 8px 0;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: 0.5s all ease-out;

  &:hover {
    background: #ffffff;
    box-shadow: 10px 10px 20px #ededed, -10px -10px 20px #ffffff;
  }
  & svg {
    fill: var(--dark);
  }

  &:hover svg {
    fill: #504464;
  }

  &:disabled {
    background: linear-gradient(145deg, #f0efef, #ffffff);
    box-shadow: 6px 6px 12px #f3f3f3, -6px -6px 12px #f1eded;
  }

  &:disabled svg {
    cursor: wait;
    fill: #cac9c9;
  }
`;

export default Button;
