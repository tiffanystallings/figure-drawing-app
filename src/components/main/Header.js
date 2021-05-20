import StyledHeader from '../styled/StyledHeader';
import StyledHeading from '../styled/StyledHeading';
import StyleSubHeading from '../styled/StyledSubHeading';

export default function Header (props) {
    return(
        <StyledHeader>
            <StyledHeading>Bring Your Own Reference</StyledHeading>
            <StyleSubHeading>a simple drawing practice app</StyleSubHeading>
        </StyledHeader>
    )
}