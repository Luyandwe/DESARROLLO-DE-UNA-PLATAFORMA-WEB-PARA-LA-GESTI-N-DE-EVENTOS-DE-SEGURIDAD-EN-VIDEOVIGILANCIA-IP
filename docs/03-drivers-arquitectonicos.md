# Drivers arquitectónicos

Los drivers arquitectónicos son los requisitos y restricciones que tienen una influencia significativa sobre las decisiones de arquitectura del sistema.

## 1. Escalabilidad

La plataforma deberá permitir el crecimiento progresivo de organizaciones, ubicaciones, dispositivos y eventos de seguridad sin requerir modificaciones estructurales significativas.

### Justificación

El sistema puede comenzar con una cantidad limitada de dispositivos y posteriormente incorporar nuevos establecimientos y fuentes de eventos.

---

## 2. Seguridad

La plataforma deberá controlar el acceso a las funcionalidades y proteger la información relacionada con usuarios, organizaciones y eventos de seguridad.

### Justificación

Los eventos gestionados pueden contener información sensible y las operaciones deberán estar restringidas según los permisos de cada usuario.

---

## 3. Interoperabilidad

La plataforma deberá permitir la integración con diferentes sistemas y fuentes de videovigilancia.

### Justificación

Los dispositivos y sistemas de videovigilancia pueden utilizar diferentes mecanismos de comunicación e integración.

---

## 4. Mantenibilidad

La solución deberá separar responsabilidades y componentes para facilitar la modificación y evolución del sistema.

### Justificación

El proyecto incorporará progresivamente nuevas funcionalidades y componentes durante su desarrollo.

---

## 5. Rendimiento

La plataforma deberá procesar las operaciones de consulta y gestión de eventos de manera eficiente.

### Justificación

Los sistemas de videovigilancia pueden producir múltiples eventos que requieren registro y atención.

---

## 6. Disponibilidad

La plataforma deberá mantenerse disponible para permitir la gestión y seguimiento de los eventos de seguridad.

### Justificación

La gestión de eventos requiere que los operadores puedan acceder al sistema cuando sea necesario.

---

## 7. Auditabilidad

Las operaciones relevantes realizadas sobre los eventos deberán quedar registradas.

### Justificación

La trazabilidad permite conocer las acciones realizadas durante el ciclo de vida de un evento.

---

## 8. Testabilidad

Los componentes principales de la plataforma deberán poder ser probados de manera automatizada.

### Justificación

Las pruebas permitirán verificar el comportamiento de los componentes durante la evolución del sistema.

---

# Priorización inicial

| Prioridad | Driver            |
| --------- | ----------------- |
| Alta      | Seguridad         |
| Alta      | Escalabilidad     |
| Alta      | Interoperabilidad |
| Alta      | Mantenibilidad    |
| Media     | Rendimiento       |
| Media     | Disponibilidad    |
| Media     | Auditabilidad     |
| Media     | Testabilidad      |

## Influencia sobre la arquitectura

Los drivers identificados orientarán las decisiones arquitectónicas posteriores. En particular, la separación de responsabilidades, la utilización de interfaces y adaptadores, el control de acceso, la documentación de decisiones y la posibilidad de incorporar nuevas integraciones deberán considerarse durante el diseño de la solución.
