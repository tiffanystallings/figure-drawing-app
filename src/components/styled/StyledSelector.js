import { useEffect, useState } from "react";
import InputNumber from "rc-input-number";
import styled, { withTheme } from "styled-components";
import "rc-input-number/assets/index.css";

const Input = (props) => (
    <InputNumber 
        id={props.name}
        className={props.className}
        min={0} 
        max={999}
        value={props.value}
        onChange={e => props.onChange(e)}
    />
);

const Label = (props) => (
    <label className={props.className} htmlFor={props.name}>{props.name}</label>
);

const StyledInput = styled(Input)`
    width: 70px;

    & span.rc-input-number-handler {
        background-color: ${props => props.theme.button.bg};
    }

    & span.rc-input-number-handler span {
        color: ${props => props.theme.button.fg};
        font-weight: bold;
    }

    & span.rc-input-number-handler:hover {
        background-color: ${props => props.theme.button.fg};
    }

    & span.rc-input-number-handler:hover span {
        color: ${props => props.theme.button.bg};
    }
`

const SelectorRow = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.displayArea.fg};
    margin-bottom: 5px;
`

const StyledLabel = styled(Label)`
    display: block;
    width: 100px;
`

function StyledSelector (props) {
    const {name, onValueChange} = props;
    const [value, setValue] = useState(0);
    const [lastValue, setLastValue] = useState(value);

    useEffect(() => {
        if (value !== lastValue) {
            onValueChange(value < lastValue ? -1 : 1);
        }
        
    }, [value, lastValue, onValueChange])

    const handleChange = (e) => {
        if (e !== value) {
            setLastValue(value);
            setValue(e); 
        }
    }

    return(
        <SelectorRow>
            <StyledLabel name={name} />
            <StyledInput name={name} onChange={e => handleChange(e)} value={value}/>
        </SelectorRow>
    )
}

export default withTheme(StyledSelector);

