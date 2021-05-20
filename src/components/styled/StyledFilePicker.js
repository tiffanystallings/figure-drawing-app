import styled, { withTheme } from "styled-components";

function StyledFilePicker(props) {
    const {onChange, theme} = props;

    const PickerLabel = ({className, children}) => (
        <label className={className} htmlFor="file">{children}</label>
    )

    const FilePicker = ({className, onChange}) => (
        <input 
            className={className}
            id="file"
            directory="" 
            webkitdirectory="" 
            type="file"
            onChange={(e) => onChange(e.target.files)}
        />
    )

    const StyledLabel = styled(PickerLabel)`
        background-color: ${theme.button.bg};
        color: ${theme.button.fg};
        padding: 5px 100px;
        border-radius: 3px;
        cursor: pointer;
        border: 5px solid ${theme.button.bg};
        transition: transform 0.5s ease-in-out;

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

    return (
        <>
            <StyledPicker onChange={onChange} />
            <StyledLabel>Choose a directory...</StyledLabel>
        </>
    )
}

export default withTheme(StyledFilePicker);