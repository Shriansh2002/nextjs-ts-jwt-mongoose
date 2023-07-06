import { ChangeEvent } from 'react';

interface InputFieldProps {
	id: string;
	label: string;
	type: 'text' | 'email' | 'password';
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
	id,
	label,
	type,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<div className="mb-6">
			<label htmlFor={id} className="block mb-1 font-medium">
				{label}:
			</label>
			<input
				className="input__field_style"
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputField;
