# USDOT - Sitio Web Profesional

Sitio web moderno y elegante para USDOT, empresa de desarrollo de software y consultoría tecnológica.

## 🚀 Características

- ⚛️ **React 18** + **Vite** para desarrollo rápido
- 🎨 **Tailwind CSS** para estilos modernos y responsivos
- 🌊 **Animaciones suaves** y efectos visuales profesionales
- 📱 **100% Responsive** - se adapta perfectamente a todos los dispositivos
- 🎯 **Componentes modulares** - código limpio y organizado
- ⚡ **Alto rendimiento** - optimizado para carga rápida

## 📁 Estructura del Proyecto

```
usdot-react-app/
├── public/               # Archivos públicos estáticos
├── src/
│   ├── components/       # Componentes de React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── TechStack.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/          # Estilos globales
│   │   └── globals.css
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📦 Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#73b94c',  // Verde principal de USDOT
    dark: '#5a9a3a',
    light: '#90d15f',
  }
}
```

### Componentes
Cada sección es un componente independiente en `src/components/`:
- **Navbar.jsx** - Navegación principal con menú móvil
- **Hero.jsx** - Sección principal con CTA
- **Services.jsx** - Servicios ofrecidos
- **Portfolio.jsx** - Proyectos destacados
- **Process.jsx** - Proceso de trabajo
- **TechStack.jsx** - Tecnologías utilizadas
- **Contact.jsx** - Información de contacto
- **Footer.jsx** - Pie de página

### Estilos Globales
Los estilos y animaciones personalizadas están en `src/styles/globals.css`.

## 🔧 Tecnologías Utilizadas

- **React 18** - Framework de UI
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Framework de CSS utility-first
- **PostCSS** - Procesador de CSS
- **Framer Motion** - Biblioteca de animaciones (opcional)

## 📝 Próximos Pasos

1. **Agregar imágenes reales** de proyectos en la carpeta `public/`
2. **Configurar formulario de contacto** con backend
3. **Implementar analytics** (Google Analytics, etc.)
4. **Optimizar SEO** con meta tags y sitemap
5. **Agregar blog** con contenido técnico
6. **Integrar CMS** para gestión de contenido

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Configurar gh-pages
```

## 📞 Contacto

- **Email:** contacto@usdot.com
- **Teléfono:** +1 (234) 567-8900
- **Website:** usdot.com

## 📄 Licencia

© 2024 USDOT. Todos los derechos reservados.

---

Desarrollado con ❤️ por USDOT
