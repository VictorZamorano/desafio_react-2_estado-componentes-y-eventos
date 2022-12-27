import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import "./App.css";
import Button from "./components/Button";

function App() {
	const passCredential = {
		account: "hola",
		password: 252525,
	};

	const [inputValue, setInputValue] = useState({ acc: "", pass: "" });
	const { acc, pass } = inputValue;
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!acc.trim() || !pass.trim()) {
			return setError(alert("Llena todos los campos"));
		}
		if (passCredential.password != pass) {
			alert("Ingresa la contraseña correcta");
		} else {
			alert("Bienvenido");
		}
	};

	return (
		<>
			<Header
				text="Desafío Estado de los componentes y eventos"
				classN="mb-4"
			/>
			<div className="container">
				<form action="" onSubmit={handleSubmit} className="row">
					<Input
						text="Nombre"
						type="text"
						placeholder="Ingresa un texto"
						name="acc"
						onChange={handleChange}
						value={acc}
						classN="form-control mb-3 text-center"
					/>
					<Input
						text="Contraseña"
						type="text"
						placeholder="Ingresa una contraseña"
						name="pass"
						onChange={handleChange}
						value={pass}
						classN="form-control text-center "
						mLength="6"
					/>

					<br />
					<Button
						text="Ingresar"
						type="submit"
						classN="btn btn-warning mt-3 ps-3 pe-3"
						// disabled={pass === "252525" ? false : true} Tambien se puede deshabilitar el button de esta manera y al escribir la contraseña correcta se habilita, no esta funcional con validacion
					/>
					{error ? error : null}
					<p className="mt-4 text-white">
						Debes adivinar la contraseña para poder ingresar a la pagina
					</p>
				</form>
			</div>
		</>
	);
}

export default App;
