const Button = ({ type, text, classN, disabled }) => {
	return (
		<button type={type} className={classN} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
