const SettingButton = (props) => {
    const { icon, onClick } = props;

    return (
        <button
            className="action-btn"
            type="button"
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default SettingButton;