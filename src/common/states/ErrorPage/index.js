import { BiggerText, Button, ButtonText, Sign, Text, Wrapper } from "./styled";

const ErrorPage = () => (
    <Wrapper>
        <Sign />
        <BiggerText>Ooops! Something went wrong... </BiggerText>
        <Text>Please check your network connection<br /> and try again</Text>
        <Button
            to={"/movies"}
        >
            <ButtonText>
                Back to home page
            </ButtonText>
        </Button>
    </Wrapper >
);

export default ErrorPage;