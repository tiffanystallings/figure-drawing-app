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
                    display="inline"
                    justify="center">
                    <p>
                        Hello there! This little tool is inspired by all of the great work already being done 
                        over at <StyledLink target="_blank" rel="noopener noreferrer" href="http://line-of-action.com">
                        Line-Of-Action</StyledLink>. I love their image cyling format, but wanted something I could use with
                        reference images stored locally on my device. I hope you find it as useful as I do!
                    </p>
                    <p>
                        Not all functionality is working yet, so stay tuned for more!
                    </p>
                    <p>
                        If this application is helpful to you and you'd like to support enhancements (such as more reliable hosting), 
                        small tips are always appreciated! That said, I plan to continue making little enhancements regardless 
                        (since I use this too), so do feel free to just sit back and enjoy. 😊
                    </p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/tcstallings">
                            <img 
                                alt="Buy me a coffee!"
                                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=tcstallings&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" 
                            />
                        </a>
                    </p>
                    <p>
                        - Tiffany
                    </p>
                    
                </StyledContentArea>
            </StyledContentArea>
        </section>
    )
}