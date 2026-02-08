# Beatriz - Tu Médica de Familia

Sitio web personal profesional de la Dra. Beatriz, médica de familia.

## Descripción

Este es el sitio web corporativo que presenta los servicios profesionales de la Dra. Beatriz como médica de familia. El sitio está diseñado para ofrecer información sobre sus especialidades, experiencia y contacto.

## Características

✅ **Diseño Profesional** - Interfaz moderna y accesible  
✅ **Responsive** - Optimizado para todos los dispositivos  
✅ **SEO Optimizado** - Mejor visibilidad en buscadores  
✅ **Rápido y Ligero** - Carga optimizada para mejor experiencia  
✅ **Información Profesional** - Presentación completa de servicios  

## Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Estilos**: Tailwind CSS
- **Despliegue**: Netlify (configurado con netlify.toml)

## Estructura del Proyecto

```
.
├── landing-page/          # Sitio web principal
│   ├── index.html        # Página de inicio
│   ├── css/              # Estilos CSS
│   ├── js/               # Scripts JavaScript
│   ├── images/           # Imágenes y assets
│   └── data/             # Datos estáticos
├── .gitignore            # Archivos ignorados por Git
└── README.md             # Documentación del proyecto
```

## Despliegue

### Desarrollo Local

```bash
# 1. Clonar repositorio
git clone https://github.com/yourusername/beatriz-tu-medica-de-familia.git
cd beatriz-tu-medica-de-familia

# 2. Servir localmente
cd landing-page
python -m http.server 8000
# O usar cualquier servidor web local

# 3. Acceder al sitio
# http://localhost:8000
```

### Despliegue en Producción

El sitio está configurado para despliegue automático en Netlify:

1. **Conectar repositorio** a Netlify
2. **Configurar dominio** personalizado si es necesario
3. **Despliegue automático** en cada push a main

El archivo `netlify.toml` contiene la configuración de despliegue.

## Personalización

### Modificar Contenido

- **Texto**: Editar directamente en `landing-page/index.html`
- **Estilos**: Modificar en `landing-page/css/styles.css`
- **Imágenes**: Reemplazar archivos en `landing-page/images/`
- **Datos**: Actualizar en `landing-page/data/`

### SEO y Meta Tags

Los meta tags y configuración SEO están en el `<head>` de `index.html`:

```html
<!-- Meta tags básicos -->
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- Open Graph para redes sociales -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

## Mantenimiento

### Actualizar Contenido Regularmente

1. **Información de contacto** - Teléfono, email, consulta
2. **Servicios ofrecidos** - Especialidades y tratamientos
3. **Horarios de atención** - Disponibilidad actualizada
4. **Blog o noticias** - Si se implementa sección de noticias

### Optimización

- **Imágenes optimizadas** - Comprimir sin perder calidad
- **SEO local** - Google My Business integración
- **Analytics** - Google Analytics para seguimiento

## Contacto

Para consultas sobre el sitio web:

- **Email**: web@beatrizmedicafamilia.com
- **Teléfono**: +34 XXX XXX XXX

---

**Desarrollado con ❤️ para la Dra. Beatriz**
