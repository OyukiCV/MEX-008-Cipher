window.cipher = {
	//str ='Holamundo'
	//offset = 2
	encode: (offset, str) => { //parámetros
		//funcion para encriptar
		//console.log(str)
		let encryptedChar = ''; // caracteres cifrados
		let encryptedStr = ''; //  texto cifrado
		str = str.toUpperCase(); //convierte texto a mayusculas
		for (let i = 0; i < str.length; i++) { //para recorrer el string
			let charASCII = str.charCodeAt(i);
			encryptedChar = ((charASCII - 65 + offset) % 26) + 65; //formula para posición ascii mayusculas + offset
			encryptedStr = encryptedStr + String.fromCharCode(encryptedChar); //devuelve caracter
		}
		return encryptedStr;
	},

	//para descifrar
	decode: (offset, str) => { //parámetros
		let decryptChar = ''; //caracteres descifr
		let decryptStr = '';  //text descifrado
		//str = str.toUpperCase(); //convierte texto a mayusculas
		for (let i = 0; i < str.length; i++) { //para recorrer el string
			let charASCII = str.charCodeAt(i);
			decryptChar = ((charASCII + 65 - offset) % 26) + 65; //formula para posición ascii - offset
			decryptStr = decryptStr + String.fromCharCode(decryptChar); //devuelve caracter
		}
		return decryptStr;
	}
};

// encode (str,2);


//  function descifrarMensaje() {

  //  descifrarMensaje()

  //  }

//};
