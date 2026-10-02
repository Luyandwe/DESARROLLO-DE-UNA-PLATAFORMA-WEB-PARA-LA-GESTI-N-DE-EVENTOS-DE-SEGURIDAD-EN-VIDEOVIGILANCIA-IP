# Requisitos del sistema

## Requisitos funcionales

| Código | Requisito                                                                  |
| ------ | -------------------------------------------------------------------------- |
| RF01   | El sistema deberá permitir la autenticación de usuarios.                   |
| RF02   | El sistema deberá permitir gestionar roles y permisos.                     |
| RF03   | El sistema deberá permitir gestionar usuarios.                             |
| RF04   | El sistema deberá permitir gestionar organizaciones.                       |
| RF05   | El sistema deberá permitir gestionar ubicaciones.                          |
| RF06   | El sistema deberá permitir gestionar dispositivos de videovigilancia.      |
| RF07   | El sistema deberá permitir registrar eventos de seguridad.                 |
| RF08   | El sistema deberá permitir clasificar eventos.                             |
| RF09   | El sistema deberá permitir establecer la prioridad de los eventos.         |
| RF10   | El sistema deberá permitir asignar eventos a responsables.                 |
| RF11   | El sistema deberá permitir realizar seguimiento de los eventos.            |
| RF12   | El sistema deberá permitir registrar el cierre de los eventos.             |
| RF13   | El sistema deberá permitir consultar y filtrar eventos.                    |
| RF14   | El sistema deberá registrar las operaciones relevantes para auditoría.     |
| RF15   | El sistema deberá permitir la integración con fuentes externas de eventos. |

## Requisitos no funcionales

| Código | Atributo          | Requisito                                                                                                         |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| RNF01  | Escalabilidad     | La plataforma deberá permitir incorporar progresivamente nuevos dispositivos, organizaciones, usuarios y eventos. |
| RNF02  | Seguridad         | El sistema deberá proteger el acceso a las funcionalidades según los permisos del usuario.                        |
| RNF03  | Rendimiento       | El sistema deberá responder de manera eficiente ante las operaciones habituales.                                  |
| RNF04  | Disponibilidad    | La plataforma deberá estar disponible para la gestión de eventos.                                                 |
| RNF05  | Mantenibilidad    | La solución deberá mantener separadas sus responsabilidades para facilitar modificaciones.                        |
| RNF06  | Interoperabilidad | La plataforma deberá permitir la integración con diferentes fuentes de eventos de videovigilancia.                |
| RNF07  | Testabilidad      | Los componentes principales deberán poder ser sometidos a pruebas automatizadas.                                  |
| RNF08  | Auditabilidad     | Las operaciones relevantes deberán quedar registradas para permitir su trazabilidad.                              |
| RNF09  | Observabilidad    | La plataforma deberá generar información que permita supervisar su funcionamiento.                                |
| RNF10  | Desplegabilidad   | La solución deberá facilitar su despliegue mediante contenedores.                                                 |
