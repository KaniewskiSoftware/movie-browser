import Button from "./Button";
import { Wrapper } from "./styled";

const Footer = () => (
  <Wrapper>
    <Button title="First" />
    <Button title="Previous" />
    <div>test</div>
    <Button rotate title="Next" />
    <Button rotate title="Last" />
  </Wrapper>
);

export default Footer;
