import {Link} from "react-router-dom";
import {Logo, StyledHeader, Wrapper} from "./styled";
import png from "./Logo.png";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => (
	<StyledHeader>
		<Wrapper>
			<Link to={"/movies"}>
				<Logo src={png} alt="logo"/>
			</Link>
			<Navigation/>
		</Wrapper>
		<Search/>
	</StyledHeader>
);

export default Header;
