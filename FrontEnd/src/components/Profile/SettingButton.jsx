const SettingButton = (props) => {
    const { text, onClick, color = 'error' } = props;

    return (
        <button
            type="button"
            className={`add-btn ${color}-btn-fill flex items-center justify-center`}
            onClick={onClick}
        >
            <span>{text}</span>
        </button>
    )
}

export default SettingButton;