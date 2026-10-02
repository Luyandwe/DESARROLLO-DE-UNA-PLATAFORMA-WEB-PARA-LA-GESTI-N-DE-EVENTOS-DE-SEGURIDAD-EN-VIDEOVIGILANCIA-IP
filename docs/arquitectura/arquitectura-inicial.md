# Arquitectura inicial

## 1. Descripción

La plataforma utilizará inicialmente una arquitectura modular con separación de responsabilidades.

La solución estará organizada en componentes de presentación, aplicación, dominio, infraestructura e integración.

## 2. Vista general

```text
┌─────────────────────────────────────┐
│             FRONTEND                │
│           React + Vite              │
└──────────────────┬──────────────────┘
                   │
                   │ HTTP / REST
                   ▼
┌─────────────────────────────────────┐
│              BACKEND                │
│         Node.js + Express           │
│                                     │
│  ┌───────────────────────────────┐  │
│  │       Presentation / API      │  │
│  └───────────────┬───────────────┘  │
│                  ▼                  │
│  ┌───────────────────────────────┐  │
│  │          Application           │  │
│  └───────────────┬───────────────┘  │
│                  ▼                  │
│  ┌───────────────────────────────┐  │
│  │            Domain             │  │
│  └───────────────┬───────────────┘  │
│                  ▼                  │
│  ┌───────────────────────────────┐  │
│  │         Infrastructure        │  │
│  └───────────────┬───────────────┘  │
│                  ▼                  │
│  ┌───────────────────────────────┐  │
│  │          Integration          │  │
│  └───────────────────────────────┘  │
└──────────────────┬──────────────────┘
                   │
                   ▼
          ┌─────────────────┐
          │   PostgreSQL    │
          └─────────────────┘
```

## 3. Componentes

### Presentation / API

Responsable de recibir las solicitudes HTTP y devolver las respuestas correspondientes.

### Application

Contendrá los casos de uso del sistema, coordinando las operaciones necesarias para ejecutar las funcionalidades.

### Domain

Contendrá las entidades y reglas principales del negocio relacionadas con la gestión de eventos de seguridad.

### Infrastructure

Contendrá los mecanismos técnicos utilizados para persistencia de datos y otros servicios externos.

### Integration

Contendrá los adaptadores necesarios para integrar diferentes fuentes de eventos de videovigilancia.

## 4. Módulos funcionales iniciales

* Autenticación.
* Usuarios.
* Organizaciones.
* Ubicaciones.
* Dispositivos.
* Eventos.
* Asignaciones.
* Auditoría.
* Integraciones.

## 5. Evolución prevista

La arquitectura inicial deberá permitir evolucionar posteriormente hacia una arquitectura distribuida cuando los requerimientos y drivers arquitectónicos justifiquen dicha evolución.

Entre las posibles capacidades futuras se encuentran:

* Servicios independientes.
* Mensajería.
* Procesamiento de eventos.
* API Gateway.
* Notificaciones.
* Observabilidad avanzada.
