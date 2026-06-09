# MVP — Plataforma Inmobiliaria (Comisionistas)

> Documento de referencia del proyecto. Consultarlo antes de agregar cualquier feature nuevo.
> Última actualización: 2026-06-09

---

## ¿Qué es este negocio?

Somos comisionistas de bienes raíces (persona natural). El modelo es:
1. Un propietario quiere vender su inmueble y nos contacta.
2. Nosotros lo publicamos y buscamos compradores.
3. Ganamos una comisión sobre el precio de venta.

**Esta página web es nuestra vitrina y herramienta de trabajo.** No es un marketplace de terceros.

---

## Objetivo de la plataforma

| Rol | Qué hace en la app |
|-----|--------------------|
| **Cliente (comprador)** | Ve propiedades, filtra, agenda cita, contacta |
| **Admin (nosotros)** | Sube/edita/elimina propiedades, ve leads y citas |

---

## Stack tecnológico definido

| Capa | Tecnología | Estado |
|------|-----------|--------|
| Frontend | React + TypeScript + Vite + Tailwind CSS | ✅ Existe |
| Base de datos | Supabase (PostgreSQL) | ⬜ Pendiente |
| Auth admin | Supabase Auth (JWT) | ⬜ Pendiente |
| Storage (imágenes/videos) | Supabase Storage | ⬜ Pendiente |
| Emails (contacto) | Resend | ⬜ Pendiente |
| Deploy | Vercel | ⬜ Pendiente |
| i18n | react-i18next (ES / EN) | ⬜ Pendiente |
| Dark/Light mode | next-themes (según sistema) | ⬜ Pendiente |

---

## Modelo de base de datos

### `properties` — Inventario de inmuebles
```
id               UUID (PK)
title            TEXT
description_es   TEXT
description_en   TEXT
price            NUMERIC
type             ENUM (casa, apartamento, finca, lote, local, otro)
status           ENUM (disponible, reservado, vendido)
city             TEXT
neighborhood     TEXT
address          TEXT
bedrooms         INTEGER
bathrooms        INTEGER
area             NUMERIC (m²)
land_area        NUMERIC (m²)
features         TEXT[] (array: piscina, garaje, etc.)
is_active        BOOLEAN
created_at       TIMESTAMP
updated_at       TIMESTAMP
```

### `property_media` — Imágenes y videos de cada inmueble
```
id               UUID (PK)
property_id      UUID (FK → properties)
url              TEXT
type             ENUM (image, video)
display_order    INTEGER
is_cover         BOOLEAN
created_at       TIMESTAMP
```

### `leads` — Clientes interesados
```
id               UUID (PK)
name             TEXT
email            TEXT
phone            TEXT
nationality      TEXT
preferred_lang   ENUM (es, en)
source           ENUM (contacto, cita, whatsapp)
notes            TEXT
created_at       TIMESTAMP
```

### `appointments` — Citas agendadas
```
id               UUID (PK)
property_id      UUID (FK → properties)
lead_id          UUID (FK → leads)
requested_date   DATE
requested_time   TIME
status           ENUM (pendiente, confirmada, cancelada)
notes            TEXT
created_at       TIMESTAMP
```

---

## Fases del proyecto

---

### FASE 1 — MVP (lanzable al público)

> Meta: una plataforma funcional que podamos usar en el negocio real.

#### Backend e infraestructura
- [ ] Crear proyecto en Supabase
- [ ] Definir tablas según modelo de DB arriba
- [ ] Configurar Row Level Security (RLS):
  - Público: solo leer propiedades activas
  - Admin autenticado: leer y escribir todo
- [ ] Configurar Supabase Storage (bucket para imágenes y videos)
- [ ] Configurar variables de entorno (`.env.local`, nunca en el código)
- [ ] Crear cuenta en Resend para envío de emails

#### Autenticación
- [ ] Eliminar login hardcodeado actual (usuario/contraseña en el código)
- [ ] Implementar login real con Supabase Auth
- [ ] Proteger todas las rutas `/admin/*` con sesión real

#### Panel Admin
- [ ] Listado de todas las propiedades con estado (activa/inactiva)
- [ ] Crear nueva propiedad (formulario completo con todos los campos)
- [ ] Editar propiedad existente
- [ ] Eliminar propiedad
- [ ] Subir imágenes a una propiedad (múltiples, ordenables, portada)
- [ ] Subir video a una propiedad
- [ ] Eliminar imágenes/videos individuales
- [ ] Ver lista de leads (clientes que contactaron)
- [ ] Ver lista de citas agendadas con estado

#### Catálogo público (lo que ve el cliente)
- [ ] Conectar listado de propiedades a Supabase (reemplazar datos hardcodeados)
- [ ] Conectar página de detalle de propiedad a Supabase
- [ ] Filtros funcionales (tipo, ciudad, precio, habitaciones)
- [ ] Imágenes reales desde Supabase Storage

#### Captación de leads
- [ ] Formulario de contacto → guarda lead en DB + envía email al admin (Resend)
- [ ] Formulario "Agendar visita" → guarda cita en DB + envía email de confirmación

#### i18n — Español / Inglés
- [ ] Instalar y configurar `react-i18next`
- [ ] Traducir todos los textos de la UI (menú, botones, etiquetas)
- [ ] Campos de descripción de propiedades en ES y EN
- [ ] Selector de idioma visible en navbar

#### Dark / Light mode
- [ ] Configurar detección automática según preferencia del sistema
- [ ] Selector manual (toggle) en navbar
- [ ] Verificar que todos los componentes respetan el tema

#### Deploy
- [ ] Subir código a GitHub (repositorio privado)
- [ ] Conectar repositorio a Vercel
- [ ] Configurar variables de entorno en Vercel
- [ ] Dominio personalizado + HTTPS automático
- [ ] Prueba completa en producción antes de compartir

---

### FASE 2 — Post-lanzamiento

> Una vez el MVP esté estable y en uso real.

- [ ] Dashboard de citas con vista de calendario
- [ ] Botón de WhatsApp directo en cada propiedad
- [ ] SEO: meta tags, Open Graph (para compartir en redes), sitemap.xml
- [ ] Analytics: qué propiedades tienen más visitas
- [ ] Marcar lead como "contactado", "en negociación", "cerrado"
- [ ] Filtros con URL params (poder compartir búsqueda filtrada)
- [ ] Galería con soporte para videos de tour virtual (Mux o Cloudinary)

---

### FASE 3 — Escala e IA

> Cuando el negocio crezca y haya flujo constante de clientes.

- [ ] Agente IA (Claude API de Anthropic) integrado como chatbot
  - Responde preguntas sobre propiedades
  - Agenda citas automáticamente
  - Disponible en español e inglés
- [ ] Zona para que el propietario vendedor suba su inmueble directamente
- [ ] Comparador de propiedades
- [ ] Favoritos del usuario (guardar propiedades)
- [ ] Reportes y métricas del negocio

---

## Seguridad (no negociable para producción)

| Medida | Descripción |
|--------|-------------|
| **RLS en Supabase** | La DB rechaza escrituras sin auth, aunque alguien vea el código |
| **Variables de entorno** | Ninguna key secreta en el código fuente |
| **HTTPS** | Obligatorio (automático en Vercel) |
| **Validación de inputs** | Todo formulario se valida antes de tocar la DB |
| **Rate limiting** | Formularios de contacto protegidos contra spam/bots |
| **Auth JWT real** | Nada hardcodeado, sesiones con expiración |

> Nota: el código frontend siempre es público (así funciona internet). La seguridad
> real está en que la base de datos rechaza cualquier operación no autorizada (RLS).

---

## Costos de infraestructura estimados

| Servicio | Plan inicial | Costo |
|---------|-------------|-------|
| Supabase | Free tier (hasta 500MB DB, 1GB storage) | $0/mes |
| Vercel | Free tier (proyectos personales) | $0/mes |
| Resend | Free tier (100 emails/día) | $0/mes |
| Dominio | .com en Namecheap o similar | ~$12/año |
| **Total arranque** | | **~$12/año** |

Cuando el negocio crezca:
- Supabase Pro: $25/mes (8GB DB, 100GB storage)
- Vercel Pro: $20/mes (si se necesita más tráfico)

---

## Reglas del proyecto

1. **No agregar features que no estén en este documento** sin discutirlo primero.
2. **No construir lo de Fase 2 o 3 mientras Fase 1 no esté completa.**
3. **No hay base de datos real → no hay producto.** El backend es prioridad #1.
4. **El admin debe ser simple de usar.** No somos desarrolladores en el día a día.
5. **Todo texto visible al usuario debe estar en español E inglés** desde el inicio.

---

## Próximo paso inmediato

**Configurar Supabase:** crear el proyecto, las tablas, el Storage y el primer usuario admin.
Todo lo demás depende de esto.
