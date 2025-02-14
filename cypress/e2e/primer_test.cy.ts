/// <reference types="cypress"/>

describe('mi_primer_prueba', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173'); // Ir a la página de login
		cy.contains('Login').should('be.visible');
	});

	it('TC1: Debe mostrar el formulario de inicio de sesión', () => {
		cy.get('h2').should('contain', 'Login'); // Verificar el título del login
		cy.get('input[name="username"]').should('be.visible'); // Verificar que el campo username está presente
		cy.get('input[name="password"]').should('be.visible'); // Verificar que el campo password está presente
		cy.get('button[type="submit"]').should('contain', 'Login'); // Verificar botón de login
		cy.get('p').should('contain', '¿No tienes una cuenta?'); // Verificar el texto del enlace de registro
		cy.get('a[href="/sign-up"]').should('contain', 'Regístrate'); // Verificar enlace de registro
	});
	
	it('TC2: Debe iniciar sesión con credenciales válidas y no con credenciales inválidas', () => {
		cy.get('input[name="username"]').type('usuarioejemplocom'); // Ingresar username
		cy.get('input[name="password"]').type('Pas123@'); // Ingresar contraseña, min 6
		cy.get('button[type="submit"]').click(); // Clic en el botón de login
		cy.url().should('include', '/pets'); // Verificar que redirige a pets
		cy.get('h1').should('contain', 'Pets');
		cy.wait(1000); // Espera para la respuesta del servidor
		cy.get('button').contains('Logout').click(); // Clic en el botón de logout
		cy.url().should('eq', 'http://localhost:5173/login'); // Verificar que regresa al inicio
		//cy.get('button[class="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"]').click(); // Clic en el botón de logout
	});

	it('TC3: Debe redirigir a la página de registro al hacer clic en "Regístrate"', () => {
		cy.get('a[href="/sign-up"]').should('contain', 'Regístrate').click(); // Buscar el enlace de "Regístrate" y hacer clic
		cy.url().should('include', '/sign-up'); // Verificar que la URL cambió a la de registro
		cy.get('h2').should('contain', 'Registro');  // Verificar el título de la página de registro
		cy.get('input[name="username"]').type('usuarioejemplocom'); // Ingresar username
		cy.get('input[name="firstName"]').type('firstName'); // Ingresar firstName
		cy.get('input[name="lastName"]').type('lastName'); // Ingresar lastName
		cy.get('input[name="email"]').type('email@gmail.com'); // Ingresar email
		cy.get('input[name="password"]').type('Pas123@'); // Ingresar contraseña, min 6
		cy.get('input[name="phone"]').type('9852614214'); // Ingresar phone
		cy.wait(1000); // Espera para la respuesta del servidor
		cy.get('button[type="submit"]').should('contain', 'Registrarse').click(); // Clic en el botón de login
		cy.url().should('eq', 'http://localhost:5173/login'); // Verificar que regresa al inicio
	});

});


// Endpoints Tests

/*
describe('Get pets', () => {
	it('Should return list of pets with status available', () => {
		cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((response) => {
			expect(response.status).to.eq(200);

			//expect(response.body).to.be.an('array');
			//expect(response.body.length).to.be.greaterThan(0);
			// Filtrar y mostrar los nombres de los pets disponibles
			const availablePets = response.body.map((pet) => pet.name || 'Unnamed Pet');

			// Mostrar en la consola de Cypress
			console.log('Available Pets:', availablePets);

			// Mostrar en el panel de Cypress
			cy.log('Available Pets: ' + availablePets.join(', '));

			// Verificar que todos los pets tienen el estado "available"
			response.body.forEach((pet) => {
				expect(pet.status).to.eq('available');
			});

		});
	});
});
*/

/*
describe('Mostrar mascotas disponibles en formato JSON', () => {
	it('Debe obtener las mascotas disponibles y mostrarlas en formato JSON', () => {
		cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available')
			.then((response) => {
				expect(response.status).to.eq(200); // Verifica que la petición fue exitosa
				const pets = response.body;

				// Insertar el JSON en el DOM
				cy.document().then((doc) => {
					const pre = doc.createElement('pre'); // Elemento <pre> para formato JSON
					pre.style.whiteSpace = 'pre-wrap';
					pre.style.wordBreak = 'break-word';
					pre.style.fontFamily = 'monospace';
					pre.textContent = JSON.stringify(pets, null, 2); // Formato JSON legible

					doc.body.appendChild(pre);
				});
			});
	});
});
*/