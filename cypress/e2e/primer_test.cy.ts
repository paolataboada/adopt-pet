describe('mi_primer_prueba', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173'); // Ir a la página de login
	});

	it('Debe mostrar el formulario de inicio de sesión', () => {
		cy.get('h2').should('contain', 'Login'); // Verificar el título del login
		cy.get('input[name="username"]').should('be.visible'); // Verificar que el campo username está presente
		cy.get('input[name="password"]').should('be.visible'); // Verificar que el campo password está presente
		cy.get('button[type="submit"]').should('contain', 'Login'); // Verificar botón de login
		cy.get('p').should('contain', '¿No tienes una cuenta?'); // Verificar el texto del enlace de registro
		cy.get('a[href="/sign-up"]').should('contain', 'Regístrate'); // Verificar enlace de registro
	});

	it('Debe mostrar un error con credenciales incorrectas', () => {
		cy.get('input[name="username"]').type('usuario@ejemplo.com'); // Ingresar username
		cy.get('input[name="password"]').type('claveIncorrecta'); // Ingresar contraseña incorrecta
		cy.get('button[type="submit"]').click(); // Clic en el botón de login
		cy.get('p').should('contain', 'Only letters, numbers and underscores are allowed.'); // Verificar mensaje de error
	});
});

// Endpoints Tests
describe('Get pets', () => {
	it('Should return list of pets with status available', () => {
		cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.an('array');
			expect(response.body.length).to.be.greaterThan(0);
		});
	});
});
