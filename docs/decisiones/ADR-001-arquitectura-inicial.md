# ADR-001: Adoptar una arquitectura modular como base inicial

## Estado

Aceptado

## Contexto

El proyecto requiere una arquitectura que permita desarrollar inicialmente las funcionalidades de gestión de usuarios, organizaciones, ubicaciones, dispositivos y eventos de seguridad.

Los principales drivers arquitectónicos identificados son la escalabilidad, seguridad, interoperabilidad, mantenibilidad, rendimiento, disponibilidad, auditabilidad y testabilidad.

El proyecto deberá evolucionar progresivamente durante las diferentes etapas del curso.

## Decisión

Se adoptará inicialmente una arquitectura modular, organizada mediante separación de responsabilidades entre presentación, aplicación, dominio, infraestructura e integración.

La solución se implementará inicialmente como una aplicación centralizada con módulos internos claramente separados.

La arquitectura deberá permitir incorporar posteriormente nuevas capacidades de integración y, cuando los requerimientos lo justifiquen, evolucionar hacia servicios independientes.

## Estructura inicial

La arquitectura estará organizada conceptualmente de la siguiente manera:

```text
Presentación / API
        ↓
Aplicación
        ↓
Dominio
        ↓
Infraestructura
        ↓
Integración
```

## Razones de la decisión

La arquitectura modular permitirá:

* Separar responsabilidades.
* Facilitar el mantenimiento.
* Reducir el acoplamiento entre componentes.
* Facilitar las pruebas.
* Organizar el desarrollo del sistema.
* Preparar la solución para una evolución arquitectónica posterior.
* Facilitar la incorporación de diferentes fuentes de eventos de videovigilancia.

## Alternativas consideradas

### Microservicios desde el inicio

Se considera como una alternativa futura, pero no se adoptará inicialmente debido a que el proyecto todavía se encuentra en una etapa de definición y construcción de sus módulos principales.

### Monolito sin separación modular

No se adopta porque dificultaría la separación de responsabilidades y la evolución posterior del sistema.

## Consecuencias positivas

* Mayor organización del código.
* Separación de responsabilidades.
* Facilita las pruebas.
* Facilita el mantenimiento.
* Permite una evolución progresiva de la arquitectura.

## Consecuencias negativas

* Requiere mantener una estructura interna organizada.
* La evolución hacia servicios independientes requerirá decisiones arquitectónicas adicionales.
* La separación modular deberá mantenerse durante todo el desarrollo.

## Relación con los drivers arquitectónicos

| Driver            | Relación con la decisión                                                         |
| ----------------- | -------------------------------------------------------------------------------- |
| Escalabilidad     | Permite organizar componentes para facilitar la evolución                        |
| Seguridad         | Facilita separar responsabilidades relacionadas con autenticación y autorización |
| Interoperabilidad | Permite aislar las integraciones mediante componentes específicos                |
| Mantenibilidad    | Reduce el acoplamiento entre módulos                                             |
| Rendimiento       | Permite optimizar componentes específicos                                        |
| Auditabilidad     | Permite separar las responsabilidades de auditoría                               |
| Testabilidad      | Facilita realizar pruebas sobre componentes independientes                       |
