import StyledContentArea from "../styled/StyledContentArea";
import StyledLink from "../styled/StyledLink";

export default function Introduction (props) {

    return (
        <section>
            <StyledContentArea
                margin="30px 0"
            >
                <StyledContentArea
                    width="1400px"
                    margin="0 auto"
                    justify="center">
                    This little application is designed to supplement (not replace) all of the great work done over at
                    &nbsp;
                    <StyledLink href="http://line-of-action.com">Line-Of-Action.</StyledLink>
                    It was created out of a simple wish to use references I've collected over time, and shared out of the belief 
                    that some other artists may also find this helpful. Images added are only ever read from your local computer 
                    -- not uploaded and stored anywhere. Feel free to checkout the source code and run this offline if you 
                    prefer!

                    Not all functionality is working yet, so stay tuned for more!
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}