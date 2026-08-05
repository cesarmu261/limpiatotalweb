# Limpia Total Delicias — Sitio web

Sitio web para **Limpia Total Delicias**, negocio de lavado y limpieza profesional
de tapicería en Delicias, Chihuahua. Construido desde cero con **React + Vite**,
con navegación entre secciones/páginas y enlace directo a WhatsApp.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- [pnpm](https://pnpm.io/) instalado globalmente:
  ```bash
  npm install -g pnpm
  ```

## Cómo correr el proyecto en Visual Studio Code

1. Descomprime este `.zip` y abre la carpeta `limpia-total-delicias` en VS Code.
2. Abre una terminal integrada (``Ctrl + ` ``) e instala las dependencias:
   ```bash
   pnpm install
   ```
3. Levanta el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
4. Abre el enlace que aparece en la terminal (por defecto `http://localhost:5173`).
   El sitio se recarga automáticamente al guardar cambios.

## Compilar para producción

```bash
pnpm build
```

Esto genera la carpeta `dist/` lista para subir a cualquier hosting (Vercel,
Netlify, Hostinger, cPanel, etc.). Para previsualizar ese build localmente:

```bash
pnpm preview
```

## Estructura del proyecto

```
limpia-total-delicias/
├─ public/
│  └─ images/            # Fotos y logo del negocio (extraídos del PDF original)
├─ src/
│  ├─ components/         # Header, Footer, Hero, Servicios, WhatsApp flotante, etc.
│  ├─ pages/               # Home.jsx (landing) y Terms.jsx (/garantia)
│  ├─ data/content.js       # Todo el texto del sitio en un solo lugar
│  ├─ App.jsx                # Rutas (react-router-dom)
│  └─ index.css                # Sistema de diseño (colores, tipografía, layout)
└─ index.html
```

## Cosas que debes personalizar

Todo el contenido (servicios, proceso, garantía, frecuencia de lavado) ya está
tomado del material del negocio. Sólo falta que actualices esto en
`src/data/content.js`:

- **Redes sociales**: los enlaces de Facebook, Instagram y TikTok están como
  marcador de posición (`https://www.facebook.com/`, etc.) porque el PDF
  original no incluía las URLs reales. Búscalos y reemplázalos:
  ```js
  export const socials = [
    { name: "Facebook", url: "https://www.facebook.com/TU-PAGINA", icon: "facebook" },
    ...
  ];
  ```
- **Horario de atención**: en `src/components/Contact.jsx` se muestra
  "Lun – Sáb, 9:00–19:00" como ejemplo; ajústalo si es distinto.

El número de WhatsApp (+52 639 169 1563) ya está configurado en todos los
botones (header, sección de contacto, botón flotante y footer) con
`https://wa.me/526391691563`.

## Navegación / redirecciones

- El header y el footer enlazan a las secciones de la página de inicio
  (`Servicios`, `Proceso`, `Contacto`) con scroll suave.
- `Garantía` lleva a una página independiente (`/garantia`) con los 12 puntos
  completos de términos y condiciones.
- El botón verde flotante de WhatsApp es visible en todas las páginas, en
  escritorio y en móvil.

## Publicarlo en GoDaddy (hosting compartido / cPanel)

1. Genera el build de producción:
   ```bash
   pnpm build
   ```
   Esto crea la carpeta `dist/`. Incluye un archivo `.htaccess` (copiado desde
   `public/.htaccess`) con: redirección forzada a HTTPS, soporte para las
   rutas de React Router, cabeceras de seguridad básicas, bloqueo de archivos
   sensibles y caché/compresión.

2. Entra a tu cuenta de GoDaddy → tu Hosting → **Administrador de archivos**
   (o conéctate por **SFTP**, no FTP simple) y abre la carpeta `public_html`.

3. Sube **todo el contenido de `dist/`** (no la carpeta `dist` en sí, sino lo
   que está dentro) directo a `public_html`. Verifica que el `.htaccess` haya
   subido — en el Administrador de archivos activa "Mostrar archivos ocultos"
   si no lo ves.

4. Ve a tu hosting → **Administrar sitios SSL** y activa el SSL gratuito de
   GoDaddy en tu dominio (puede tardar unos minutos en propagarse).

5. Entra a `https://tudominio.com` y confirma que carga con el candado 🔒 y
   que las rutas internas (por ejemplo `https://tudominio.com/garantia`)
   funcionan aunque las abras directamente o recargues la página.

### Checklist de seguridad rápida

- [ ] SSL/HTTPS activo y forzado (candado en el navegador)
- [ ] 2FA activado en tu cuenta de GoDaddy
- [ ] Contraseña única para cPanel/FTP
- [ ] Subida por SFTP, no FTP sin cifrar
- [ ] Solo subiste el contenido de `dist/` (nunca `node_modules`, `.env`, ni
      el código fuente `src/`) — así no expones nada del proyecto
- [ ] `.htaccess` presente en `public_html`

## Responsive

El diseño está probado para verse correctamente desde 360px (móvil) hasta
pantallas de escritorio grandes, con un menú de hamburguesa en pantallas
angostas.
