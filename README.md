# NominaSmart

NominaSmart: Inteligencia y eficiencia en la gestión de nóminas.

## Descripción

NominaSmart es una aplicación web diseñada para simplificar y optimizar el proceso de gestión de nóminas. Con una interfaz intuitiva y funcionalidades potentes, NominaSmart permite a las empresas manejar eficientemente la información salarial de sus empleados, ofreciendo seguridad, precisión y facilidad de uso.

## Características principales

- **Autenticación robusta**: Sistema de login y registro con email/contraseña y Google.
- **Gestión completa de registros**: Añadir, editar, eliminar y visualizar entradas de nómina.
- **Cálculos automáticos**: Cálculo de pagos basado en horas trabajadas y tarifa por hora.
- **Interfaz responsiva**: Diseño adaptable para una experiencia óptima en diferentes dispositivos.
- **Alertas y confirmaciones**: Sistema de notificaciones para acciones importantes.
- **Persistencia de datos**: Almacenamiento seguro en Firebase Firestore.
- **Estado de autenticación persistente**: Mantiene la sesión del usuario.
- **Impresión de reportes**: Función para imprimir reportes completos de nómina.
- **Exportación a Excel**: Capacidad de descargar todos los registros en formato Excel.

## Tecnologías utilizadas

- React
- Redux
- Firebase (Autenticación y Firestore)
- CSS (con animaciones de Animate.css)
- Font Awesome (para iconos)
- react-to-print (para funcionalidad de impresión)
- xlsx (para exportación a Excel)

## Componentes principales

1. **LoginScreen**: Maneja la autenticación de usuarios.
2. **RegisterScreen**: Permite a nuevos usuarios crear una cuenta.
3. **AppScreen**: Pantalla principal que muestra y gestiona los registros de nómina.
4. **FormAdd**: Componente para agregar nuevos registros de nómina.
5. **Elements**: Muestra cada registro individual y permite editarlo o eliminarlo.
6. **EditarRegistroForm**: Formulario para editar registros existentes.
7. **Navbar**: Barra de navegación con opciones de usuario.
8. **LoadingScreen**: Pantalla de carga para mejorar la experiencia de usuario.

## Funcionalidades detalladas

- Autenticación de usuarios (email/contraseña y Google)
- Registro de nuevos usuarios
- Creación, lectura, actualización y eliminación de registros de nómina
- Cálculos automáticos de pagos
- Persistencia de datos en Firebase Firestore
- Manejo de estado global con Redux
- Interfaz de usuario responsiva y animada
- Impresión de reportes completos de nómina
- Exportación de todos los registros a formato Excel

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Maxcerva12/NominaSmart.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd NominaSmart

   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

4. Configura las credenciales de Firebase en un archivo `.env`

5. Inicia la aplicación:

   ```bash
   npm start

   ```

La aplicación debería estar ahora corriendo en `http://localhost:3000`.

## Modo de uso

1. **Inicio de sesión / Registro**:

   - Al abrir la aplicación, se mostrará la pantalla de inicio de sesión.
   - Si es un nuevo usuario, haga clic en "Regístrate aquí" para crear una cuenta.
   - Puede iniciar sesión con su email y contraseña o utilizando su cuenta de Google.

2. **Pantalla principal**:

   - Después de iniciar sesión, verá la pantalla principal con la lista de registros de nómina.
   - En la parte superior derecha encontrará botones para imprimir la nómina y exportar a Excel.

3. **Agregar un nuevo registro**:

   - Haga clic en el botón "Agregar" en la parte superior de la lista de registros.
   - Complete los campos requeridos: nombre, apellidos, número de identificación, horas trabajadas y tarifa por hora.
   - Haga clic en "Enviar" para agregar el nuevo registro.

4. **Editar un registro**:

   - En la lista de registros, haga clic en el icono de edición (lápiz) junto al registro que desea modificar.
   - Actualice los campos necesarios en el formulario que aparece.
   - Haga clic en "Guardar cambios" para actualizar el registro.

5. **Eliminar un registro**:

   - En la lista de registros, haga clic en el icono de eliminación (papelera) junto al registro que desea borrar.
   - Confirme la acción en el cuadro de diálogo que aparece.

6. **Imprimir nómina**:

   - Haga clic en el botón "Imprimir" en la esquina superior derecha.
   - Se abrirá una ventana de vista previa de impresión con la tabla de nómina.
   - Confirme la impresión en el diálogo de su navegador.

7. **Exportar a Excel**:

   - Haga clic en el botón "Exportar a Excel" en la esquina superior derecha.
   - Se descargará automáticamente un archivo Excel con todos los registros de nómina.

8. **Cerrar sesión**:
   - Para cerrar sesión, haga clic en el botón de "Cerrar sesión" en la barra de navegación.

## Configuración de Firebase

Asegúrate de configurar correctamente Firebase en tu proyecto:

1. Crea un proyecto en Firebase Console
2. Habilita la autenticación por email/contraseña y Google
3. Configura Firestore Database
4. Añade las credenciales de tu proyecto Firebase al archivo de configuración

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Enlace del proyecto:

- [NominaSmart](https://nominasmart.netlify.app/login)

## Contacto

Maximiliano Cervantes Mendoza - mc349821@Gmail.com

---

¿Si necesitas ayuda con alguna parte del proyecto? ¡No dudes en contactarme!

- [LinkedIn](https://www.linkedin.com/in/maximiliano-cervantes-ing/)

- [GitHub](https://github.com/Maxcerva12)
