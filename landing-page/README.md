# Beatriz Tu Médica de Familia - Landing Page

## 🌐 Web Profesional Independiente

Esta es la landing page profesional de la Dra. Beatriz, diseñada con ❤️ para presentar sus servicios médicos de forma elegante y accesible.

### 🎯 Propósito

Una presencia digital profesional que refleje la calidez y profesionalidad de la Dra. Beatriz como médica de familia, conectando con pacientes que buscan atención médica cercana y de calidad.

### 🚀 Deploy en Netlify

1. **Crear cuenta en Netlify**
2. **Conectar repositorio GitHub**
3. **Configurar dominio**: `beatriztumedicadefamilia.com`
4. **Deploy automático** con cada push

### 📁 Estructura

```
landing-page/
├── index.html              # Landing page principal
├── css/                     # Estilos (extraer de index.html)
├── js/                      # JavaScript (extraer de index.html)
├── images/                  # Imágenes y assets
├── netlify.toml            # Configuración Netlify
└── README.md               # Este archivo
```

### 🔧 Configuración

#### DNS Settings
```
A beatriztumedicadefamilia.com -> Netlify IP (recommended)
CNAME www.beatriztumedicadefamilia.com -> beatriztumedicadefamilia.netlify.app
```

#### Environment Variables
No necesarias - sitio estático

### 📱 Características

- ✅ **Responsive**: Mobile-first design
- ✅ **SEO Optimized**: Meta tags, semantic HTML
- ✅ **Fast Loading**: CDN global, cache headers
- ✅ **Secure**: HTTPS automático, security headers
- ✅ **Accessible**: WCAG 2.1 AA compliance

### 🔄 Flujo de Usuario

1. **Landing Page** → Descubrir a la Dra. Beatriz y sus servicios
2. **Información de Contacto** → Llamar o WhatsApp al Contigo Centro Médico
3. **Visita Presencial** → Consulta en Calle Río Duero, nº 5, Motril

### 🏥 Centro Médico Asociado

**Contigo Centro Médico Integral**
- 📍 **Dirección**: Calle Río Duero, nº 5 (MOTRIL)
- 📞 **Teléfono**: 958 87 60 16
- 📱 **WhatsApp**: 623 61 41 67
- ⏰ **Horario**: L-V 9:00-20:00, Sábados 9:00-14:00

### 📊 Analytics

Opcional: Añadir Google Analytics o Netlify Analytics

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 🎨 Branding

- **Colores**: Consistentes con app médica
- **Tipografía**: misma familia tipográfica
- **Imágenes: Fotos profesionales reales
- **Iconos**: Conjunto consistente

### 📈 SEO

#### Meta Tags
```html
<meta name="description" content="Dra. Beatriz - Médica de familia en [Ciudad]. Consultas generales, ecografía clínica, chequeos de salud. Atención cercana y profesional.">
<meta property="og:title" content="Dra. Beatriz - Tu Médica de Familia">
<meta property="og:description" content="Atención médica familiar con enfoque humano y profesional">
<meta property="og:image" content="/images/og-image.jpg">
```

#### Structured Data
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dra. Beatriz",
  "medicalSpecialty": "Family Medicine",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Ciudad]",
    "addressRegion": "[Provincia]"
  }
}
</script>
```

### 🚀 Deploy Commands

```bash
# Local development
npx netlify dev

# Deploy preview
npx netlify deploy

# Production deploy
git push origin main
```

### 🔗 Links Importantes

- **Instagram**: https://instagram.com/beatriz.tumedicadefamilia
- **Centro Médico**: ../contigo_centro_medico/index.html
- **Contacto Directo**: 958 87 60 16 | WhatsApp: 623 61 41 67

### 📞 Información de Contacto

La landing page integra directamente la información del Contigo Centro Médico:
1. **Ubicación clara** del centro médico
2. **Horario completo** de atención
3. **Contacto directo** teléfono y WhatsApp
4. **Enlace** al sitio web del centro

### 🔄 Actualizaciones

- **Contenido**: Editar `index.html`
- **Estilos**: Modificar CSS inline o crear archivos separados
- **Imágenes**: Reemplazar en carpeta `images/`
- **Deploy**: Automático con Git

### 📈 Métricas

Monitorizar en Netlify Dashboard:
- **Visitors**: Tráfico único
- **Page Views**: Páginas visitadas
- **Conversion Rate**: Clicks a "Pide tu cita"
- **Bounce Rate**: Tiempo en sitio

---

**Nota**: Esta landing page está diseñada con ❤️ especialmente para la Dra. Beatriz, reflejando su calidez humana y profesionalismo médico. Es una presencia digital independiente que conecta directamente con pacientes buscando atención médica de calidad en Motril.

**Desarrollado con amor para la doctora** 🏥❤️
