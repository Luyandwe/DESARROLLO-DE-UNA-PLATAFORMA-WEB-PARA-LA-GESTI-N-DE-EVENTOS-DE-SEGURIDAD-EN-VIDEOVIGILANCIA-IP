# Escenarios de calidad

Los escenarios de calidad permiten describir de manera concreta cómo deberá responder la arquitectura ante situaciones relacionadas con los atributos de calidad identificados.

## 1. Escenario de escalabilidad

| Elemento  | Descripción                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Fuente    | Administrador del sistema                                                                                   |
| Estímulo  | Se incorporan nuevas organizaciones y dispositivos de videovigilancia                                       |
| Artefacto | Plataforma de gestión de eventos                                                                            |
| Entorno   | Sistema en funcionamiento                                                                                   |
| Respuesta | La plataforma incorpora los nuevos elementos sin requerir modificaciones estructurales significativas       |
| Medida    | El crecimiento deberá realizarse mediante la incorporación de nuevos registros y componentes de integración |

---

## 2. Escenario de seguridad

| Elemento  | Descripción                                                                |
| --------- | -------------------------------------------------------------------------- |
| Fuente    | Usuario no autorizado                                                      |
| Estímulo  | Intenta acceder a una funcionalidad restringida                            |
| Artefacto | API de la plataforma                                                       |
| Entorno   | Sistema en funcionamiento                                                  |
| Respuesta | El sistema rechaza la operación y registra el intento cuando corresponda   |
| Medida    | Solo los usuarios con los permisos necesarios podrán ejecutar la operación |

---

## 3. Escenario de interoperabilidad

| Elemento  | Descripción                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| Fuente    | Nuevo sistema de videovigilancia                                                             |
| Estímulo  | Se requiere incorporar una nueva fuente de eventos                                           |
| Artefacto | Capa de integración                                                                          |
| Entorno   | Sistema en funcionamiento                                                                    |
| Respuesta | Se incorpora un adaptador para traducir la información al modelo utilizado por la plataforma |
| Medida    | La incorporación no deberá requerir modificaciones en las reglas principales del dominio     |

---

## 4. Escenario de rendimiento

| Elemento  | Descripción                                                                 |
| --------- | --------------------------------------------------------------------------- |
| Fuente    | Operador de monitoreo                                                       |
| Estímulo  | Realiza una consulta de eventos                                             |
| Artefacto | API de eventos                                                              |
| Entorno   | Sistema en funcionamiento                                                   |
| Respuesta | El sistema procesa la consulta y devuelve los resultados                    |
| Medida    | Las consultas deberán ejecutarse de manera eficiente bajo la carga esperada |

---

## 5. Escenario de auditabilidad

| Elemento  | Descripción                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| Fuente    | Usuario autenticado                                                                          |
| Estímulo  | Modifica el estado de un evento                                                              |
| Artefacto | Módulo de gestión de eventos                                                                 |
| Entorno   | Sistema en funcionamiento                                                                    |
| Respuesta | El cambio de estado queda registrado junto con la información necesaria para su trazabilidad |
| Medida    | Debe ser posible identificar quién realizó la operación y cuándo fue realizada               |

---

## 6. Escenario de mantenibilidad

| Elemento  | Descripción                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| Fuente    | Equipo de desarrollo                                                                                  |
| Estímulo  | Se requiere modificar o agregar una funcionalidad                                                     |
| Artefacto | Módulo de la plataforma                                                                               |
| Entorno   | Evolución del sistema                                                                                 |
| Respuesta | El cambio se realiza dentro del componente correspondiente sin afectar innecesariamente otros módulos |
| Medida    | Las responsabilidades deberán mantenerse separadas mediante una estructura modular                    |

---

## Resumen

Los escenarios definidos servirán como referencia para las decisiones arquitectónicas del proyecto. Las decisiones deberán buscar una solución que responda a los drivers identificados y permita evolucionar la plataforma durante las siguientes etapas del proyecto.
