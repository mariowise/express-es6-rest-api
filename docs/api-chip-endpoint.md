# API Pre-CHIP Endpoint

Google Form attributes

```
- zonal (rm, norte, centro, sur)
- region inmobiliaria √
- nombre contacto inmobiliaria √
- correo electrónico inmobiliaria √
- nombre inmobiliaria √
- nombre proyecto √
- fecha entrega proyecto √
- monto propiedad √
- monto solicitado √
- rut √
- nombre completo √
- renta fija √
- renta variable √
- email cliente √
- tipo profesion (univ, tecnico, particular, sin estudios) √
- nacionalidad √
- telefono cliente √
- subsidio (si, no) √
- fecha nacimiento √
- renta complementaria (codeudor, aval) √
- rut codeudor √
- nombre codeudor √
- renta codeudor √
- comentario √
```

## Entities

```
Inmobiliaria
- nombre
- region
- nombreContacto
- emailContacto

Proyecto
- codigoInmobiliaria
- nombre
- region
- fechaEntrega
- nombreContacto
- emailContacto

Persona
- rut
- nombre
- apellido paterno
- apellido materno
- nacionalidad 
- fechaNacimiento

Solicitud
- codigoInmobiliaria
- codigoProyecto
- zonal
- nombreContactoInmobiliaria
- emailContactoInmobiliaria
- rut
- email
- montoPropiedad
- montoSolicitado
- rentaFija
- rentaVariable
- tipoProfesion
- telefono
- subsidio
- rentaComplementaria
- rutCodeudorAval
- rentaCodeudorAval
- comentario
```

## Endpoints

```
/inmobiliarias
/proyectos
/personas
/solicitudes
```


