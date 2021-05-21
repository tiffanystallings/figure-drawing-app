import styled, { withTheme } from "styled-components";

const PickerLabel = ({className, children}) => (
    <label className={className} htmlFor="file">{children}</label>
)

const FilePicker = ({className, onChange, disabled}) => (
    <input 
        className={className}
        id="file"
        type="file"
        multiple
        accept=".jpeg, .jpg, .gif, .png, .apng, .svg, .bmp"
        onChange={(e) => onChange(e.target.files)}
        disabled={disabled}
    />
)

const StyledLabel = styled(PickerLabel)`
    background-color: ${props => props.theme.button.bg};
    color: ${props => props.theme.button.fg};
    padding: 5px 100px;
    border-radius: 3px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    border: 5px solid ${props => props.theme.button.bg};
    transition: transform 0.5s ease-in-out;
    opacity: ${props => props.disabled ? '0.7' : '1'};

    &:hover {
        transform: scale(1.05);
    }
`

const StyledPicker = styled(FilePicker)`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    &:focus + label {
        outline: 1px dotted #000;
        outline: -webkit-focus-ring-color auto 5px;
    }
`

function StyledFilePicker(props) {
    const {onChange, disabled} = props;



    return (
        <>
            <StyledPicker onChange={onChange} disabled={disabled} />
            <StyledLabel disabled={disabled}>
                {disabled ? 'Loading... (This can take awhile for many large files)' : 'Add Images'}
            </StyledLabel>
        </>
    )
}

export default withTheme(StyledFilePicker);