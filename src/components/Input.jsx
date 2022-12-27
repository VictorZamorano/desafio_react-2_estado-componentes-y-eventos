const Input = ({
	text,
	type,
	placeholder,
	classN,
	name,
	value,
	onChange,
	mLength,
}) => {
	return (
		<>
			<p>{text}</p>
			<input
				type={type}
				placeholder={placeholder}
				className={classN}
				name={name}
				onChange={onChange}
				value={value}
				maxLength={mLength}
			/>
		</>
	);
};

export default Input;
