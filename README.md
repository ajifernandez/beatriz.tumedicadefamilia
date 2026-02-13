# Dra. Beatriz Jiménez Canet - Página Web Profesional

Sitio web profesional de la Dra. Beatriz Jiménez Canet, médica de familia en Motril, Granada. Presenta sus servicios médicos, experiencia profesional y opciones de contacto.

## Descripción

Este sitio web está diseñado para ofrecer información profesional sobre la Dra. Beatriz Jiménez Canet, incluyendo sus especialidades médicas, experiencia en el sector sanitario y datos de contacto. El sitio está optimizado para ofrecer una excelente experiencia de usuario y posicionamiento en buscadores.

## Características

✅ **Diseño Profesional** - Interfaz limpia y accesible  
✅ **Totalmente Responsive** - Adaptable a todos los dispositivos  
✅ **SEO Avanzado** - Optimizado para motores de búsqueda  
✅ **Rendimiento** - Carga rápida y experiencia de usuario fluida  
✅ **Accesibilidad** - Cumple con estándares de accesibilidad web  
✅ **Legal** - Incluye aviso legal y política de privacidad  
✅ **Integración con Redes Sociales** - Enlaces a perfiles profesionales  

## Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Estilos**: CSS personalizado con Tailwind CSS
- **Optimización**: Imágenes optimizadas, carga diferida
- **SEO**: Metaetiquetas, Schema.org, sitemap.xml
- **Despliegue**: Netlify (configurado con netlify.toml)
- **Dominio**: beatriztumedicadefamilia.familia-jimenez.es

## Estructura del Proyecto

```
.
├── landing-page/               # Sitio web principal
│   ├── index.html             # Página de inicio
│   ├── aviso-legal.html       # Página de aviso legal
│   ├── politica-privacidad.html # Política de privacidad
│   ├── css/                   # Estilos CSS
│   ├── js/                    # Scripts JavaScript
│   ├── images/                # Imágenes y assets
│   ├── data/                  # Datos estáticos
│   ├── favicon.ico            # Icono del sitio
│   ├── robots.txt             # Instrucciones para motores de búsqueda
│   └── sitemap.xml            # Mapa del sitio para SEO
├── .gitignore                 # Archivos ignorados por Git
└── README.md                  # Documentación del proyecto
```

## Despliegue

### Desarrollo Local

```bash
# 1. Clonar repositorio
git clone https://github.com/ajifernandez/beatriz.tumedicadefamilia.git
cd beatriz.tumedicadefamilia

# 2. Servir localmente
cd landing-page
python -m http.server 8000
# O usar cualquier servidor web local

# 3. Acceder al sitio
# http://localhost:8000
```

### Despliegue en Producción

El sitio está configurado para despliegue automático en Netlify con el dominio personalizado `beatriztumedicadefamilia.familia-jimenez.es`.

Configuración de despliegue en `netlify.toml`:
- Redirección de HTTP a HTTPS
- Configuración de cabeceras de seguridad
- Optimización de caché
- Redirección de errores 404

El despliegue se realiza automáticamente al hacer push a la rama `main`.

## Personalización

### Actualizar Información Profesional

1. **Datos de contacto**: Actualizar en `index.html`
   - Teléfono, email y dirección
   - Horario de atención
   - Aseguradoras médicas aceptadas

2. **Contenido de servicios**:
   - Especialidades médicas
   - Procedimientos realizados
   - Información sobre consultas y seguimiento

3. **Documentación legal**:
   - `aviso-legal.html`: Datos profesionales y legales
   - `politica-privacidad.html`: Información sobre tratamiento de datos

### SEO y Meta Tags

El sitio incluye una configuración SEO completa en `index.html`:

- Metaetiquetas descriptivas
- Open Graph para redes sociales
- Schema.org para perfil médico
- Sitemap.xml para indexación
- Configuración de robots.txt

### Estilos y Diseño

- **CSS personalizado**: En `css/styles.css`
- **Imágenes**: Almacenadas en `images/`
- **Fuentes**: Google Fonts (Lato y Playfair Display)
- **Iconos**: Usando favicon en múltiples formatos

## Mantenimiento

### Tareas Periódicas

1. **Actualización de información**
   - Revisar y actualizar horarios de atención
   - Verificar datos de contacto
   - Actualizar listado de aseguradoras aceptadas

2. **Optimización SEO**
   - Revisar palabras clave en metaetiquetas
   - Actualizar sitemap.xml cuando se añadan nuevas páginas
   - Verificar enlaces rotos

3. **Rendimiento**
   - Optimizar imágenes antes de subirlas
   - Minificar CSS y JavaScript
   - Verificar tiempos de carga

4. **Seguridad**
   - Renovar certificados SSL
   - Revisar configuraciones de seguridad en Netlify
   - Actualizar dependencias si se utilizan

## Aseguradoras Aceptadas

El sitio menciona la colaboración con las principales aseguradoras médicas. Asegúrese de mantener actualizada la lista de aseguradoras con las que trabaja la Dra. Beatriz Jiménez Canet.

## Documentación Legal

El sitio incluye:
- Aviso Legal (`aviso-legal.html`)
- Política de Privacidad (`politica-privacidad.html`)
- Configuración de cookies

Estos documentos deben mantenerse actualizados según la legislación vigente en materia de protección de datos y comercio electrónico.

## Contacto

Para consultas sobre el sitio web:

- **Email**: web@beatrizmedicafamilia.com
- **Teléfono**: +34 XXX XXX XXX

---

**Desarrollado con ❤️ para la Dra. Beatriz**
