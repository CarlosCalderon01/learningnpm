# Features

- Type of dependency?
- what is node_modules folder?
- List Commands!

## - Type of dependency?

In Node.js projects, it's common to have a file called package.json that describes the project's dependencies, their versions, and other details. When you install a package using npm, you can choose to automatically include the dependency in this package.json file using the --save or --save-dev options along with the installation commands.

--save: In older versions of npm, --save was used to indicate that a dependency was required for the application to run in production. For example:

	npm install package-name --save

This would install the package and also add the corresponding entry in the dependencies section of the package.json file. This allowed other developers cloning your project to install all necessary dependencies by simply running npm install.

--save-dev: The --save-dev option is used to specify that a dependency is only required during development and is not crucial for the application to run in production. For example:

	npm install package-name --save-dev


This installs the package and adds it to the devDependencies section in package.json. Development dependencies typically consist of tools, libraries, or plugins used for development tasks such as unit testing, file minification, etc.

Starting from npm 5.0, the --save option is no longer necessary to add dependencies to package.json. Dependencies are automatically added to the dependencies section when you use npm install.

To summarize:

Use --save or simply npm install package-name to add a dependency that's needed for both development and production execution (this is the default behavior of npm 5.0+).
Use --save-dev or npm install package-name --save-dev to add a dependency that's only needed for development.
These options allow you to effectively manage and share your project's dependencies, ensuring that others can replicate your development environment easily.
## - What is node_modules folder?

## - List commands!

### - Only Command:

	- npm init --yes
	- npm install [package]
	- npm uninstall [package]
	- npm update [package]
	- npm outdated
	- npm list
	- npm start
	- npm test
	- npm run [script]
	- npm search [package]
	- npm info [package]
	- npm publish
	- npm version [type]
	- npm config
	- npm help [package]

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

- npm init: Inicia la creación de un nuevo archivo package.json interactivo que describe tu proyecto y sus dependencias.
- npm init --y
- npm install [paquete]: Instala un paquete específico y lo agrega como dependencia en tu proyecto. Puedes usar la opción -g para instalar paquetes globalmente.
- npm install: Instala todas las dependencias listadas en el archivo package.json de tu proyecto.
- npm uninstall [paquete]: Desinstala un paquete específico y lo elimina de las dependencias de tu proyecto.
- npm update [paquete]: Actualiza un paquete específico a su última versión.
- npm outdated: Muestra una lista de paquetes que están desactualizados en tu proyecto.
- npm list: Muestra una lista de todaas las dependencias de tu proyecto.
- npm start: Ejecuta la aplicación o el script de inicio definido en tu archivo package.json.
- npm test: Ejecuta las pruebas definidas en tu archivo package.json.
- npm run [script]: Ejecuta un script personalizado definido en tu archivo package.json.
- npm search [paquete]: Busca paquetes en el registro de npm.
- npm info [paquete]: Muestra información detallada sobre un paquete.
- npm publish: Publica tu propio paquete en el registro de npm si estás desarrollando y compartiendo tu propia biblioteca o aplicación.
- npm version [tipo]: Incrementa la versión de tu proyecto según el tipo especificado (major, minor, patch).
- npm config: Configura opciones de npm, como establecer el registro predeterminado o configurar opciones de proxy.
- npm help [comando]: Muestra la documentación de ayuda para un comando específico.

#End