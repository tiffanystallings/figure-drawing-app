import NumericInput from "react-numeric-input";
import styled, { withTheme } from "styled-components";

const Input = (props) => (
    <NumericInput 
        id={props.name}
        min={0} 
        max={999} 
        value={props.value}
        onChange={e => props.onChange(e)}
        style={{
            input: {
                width: 60,
                marginRight: 20
            },
            btn: {
                background: 'salmon',
                color: '#fff'
            }
        }}/>
);

const Label = (props) => (
    <label className={props.className} htmlFor={props.name}>{props.name}</label>
);

const SelectorRow = styled.div`
    display: flex;
    color: ${props => props.theme.displayArea.fg};
`

const StyledLabel = styled(Label)`
    display: block;
    width: 100px;
`

function StyledSelector (props) {
    const {name, value, onChange} = props;

    return(
        <SelectorRow>
            <StyledLabel name={name} />
            <Input name={name} value={value} onChange={onChange} />
        </SelectorRow>
    )
}

export default withTheme(StyledSelector);

