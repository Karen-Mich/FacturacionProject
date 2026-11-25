# Sistema de Facturación

Frontend de un sistema de facturación hecho con **Angular 20** y **Angular Material**. Tiene un menú lateral, la pantalla de inicio de sesión y la gestión de clientes con tabla paginada y formulario. Todo está armado sobre una pequeña librería de componentes reutilizables.

> **Estado:** en desarrollo. La interfaz de clientes funciona con datos de ejemplo; la conexión con un backend y el módulo de facturas están pendientes (ver [Próximos pasos](#próximos-pasos)).

![Angular](https://img.shields.io/badge/Angular%2020-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-3F51B5?style=flat-square&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white)

## Funcionalidades

**Clientes** (`/clients`)
- Tabla con cédula, nombre, apellido y correo.
- Paginación de 5 registros por página.
- Botones para editar y eliminar en cada fila.
- Botones flotantes para agregar un cliente y descargar el listado.
- Formulario en un diálogo que sirve para crear y para editar, con validaciones: todos los campos obligatorios, apellido de al menos 4 caracteres y correo con formato válido.

**Inicio de sesión** (`/login`)
- Formulario con número de cédula y contraseña.

**Navegación**
- Menú lateral fijo con logo, accesos a Clientes, Facturas y Posts, el usuario actual y el botón de cerrar sesión.
- Cualquier ruta desconocida redirige a `/login`.

**Posts** (`/posts`)
- Página de práctica que consume la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) con `HttpClient` y RxJS.

## Componentes reutilizables

Están en `src/app/components` y se usan en las distintas pantallas:

| Componente | Para qué sirve |
|:--|:--|
| `app-table` | Tabla genérica: recibe los datos y la definición de columnas (`IMetaDataColumn`) y admite columnas extra, como la de acciones |
| `app-paginator` | Paginador que emite la página seleccionada |
| `app-keypad-button` | Grupo de botones flotantes configurables (icono, color, tooltip y acción) |
| `app-container` | Tarjeta contenedora con elevación |
| `app-input` | Campo de texto compatible con formularios de Angular (`ControlValueAccessor`) |
| `app-label` | Etiqueta con marca de campo obligatorio |
| `app-button` | Botón de Material con estilo configurable |
| `app-menu` | Menú lateral generado desde `MenuService` |

Los iconos SVG propios (logo, cliente, factura y usuario) se registran una sola vez en `IconService` y se usan con `<mat-icon svgIcon="...">`.

## Estructura

```
src/app/
├── auth/          # Inicio de sesión
├── clients/       # Listado y formulario de clientes
├── invoices/      # Módulo de facturas (pendiente)
├── posts/         # Práctica con HttpClient
├── components/    # Componentes reutilizables
├── interfaces/    # Tipos: IClient, IMetaDataColumn, IKeypadButton...
├── services/      # Menú e iconos
└── app.routes.ts  # Rutas
```

## Cómo ejecutarlo

Requisitos: Node.js 20.19 o superior (lo pide Angular 20).

```bash
git clone https://github.com/Karen-Mich/FacturacionProject.git
cd FacturacionProject
npm install --legacy-peer-deps
npm start
```

Abre `http://localhost:4200` en el navegador.

> Hace falta `--legacy-peer-deps` porque la versión de PrimeNG instalada declara una dependencia de Angular que choca con la del proyecto. PrimeNG todavía no se usa en ninguna pantalla, así que también se puede quitar del `package.json`.

Otros comandos:

```bash
npm run build   # compila para producción en dist/
npm test        # pruebas unitarias con Karma y Jasmine
```

El tamaño de página de las tablas se cambia en `src/environments/environment.development.ts` (`PAGE_SIZE`).

## Próximos pasos

- [ ] Conectar clientes a una API real (crear, editar, eliminar y descargar).
- [ ] Construir el módulo de facturas: emisión, detalle y cálculo de IVA.
- [ ] Autenticación real en el login y protección de rutas.
- [ ] Firmar los comprobantes electrónicos para el SRI con [sri-invoice-signer](https://github.com/Karen-Mich/sri-invoice-signer).

## Autora

**Karen Guatumillo** · [GitHub](https://github.com/Karen-Mich)
