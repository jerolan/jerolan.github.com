---
title: "Aplicaciones Serverless"
excerpt: "Después de tener un gran interés por entender los principios de agile, pude entender donde fallamos como equipos al intentar adoptar los principios"
cover:
  alt: "three men sitting while using laptops and watching man beside whiteboard photo – Free Business Image on Unsplash by @austindistel"
  src: "clean-agile.jpg"
date: "2021-07-17T00:00:00.000Z"
---

Serverless es un enfoque de desarrollo de aplicaciones en la nube en el cual los desarrolladores se centran en escribir código de funciones individuales que se ejecutan en respuesta a eventos específicos. Estas funciones son volatiles y se escalan automáticamente según la demanda, sin la necesidad de gestionar la infraestructura. Con este enfoque, los desarrolladores pueden despreocuparse de la administración de servidores y centrarse en la lógica de la aplicación, lo que proporciona una mayor agilidad, escalabilidad automática y una reducción de costos al pagar solo por el tiempo de ejecución de las funciones.

Es cierto que la afirmación sobre la mayor agilidad, escalabilidad automática y reducción de costos en la arquitectura serverless depende del contexto y el caso de uso específico. Si bien es cierto que el modelo serverless puede brindar estos beneficios en muchos escenarios, es importante considerar la adecuación de esta arquitectura a las necesidades y características particulares de cada aplicación.

En algunos casos, la adopción de la arquitectura serverless puede generar mayores costos si no se planifica y optimiza adecuadamente. Por ejemplo, si una aplicación tiene una carga de trabajo constante y predecible, puede ser más rentable utilizar una infraestructura tradicional en lugar de funciones serverless, donde se paga por cada invocación de función y el tiempo de ejecución.

Por lo tanto, es esencial evaluar cuidadosamente el contexto y el caso de uso antes de decidir adoptar una arquitectura serverless. Se deben considerar factores como la variabilidad en la demanda, la naturaleza de la aplicación, los costos operativos y las necesidades de rendimiento. Al hacerlo, se podrá determinar si la arquitectura serverless realmente tiene sentido en el contexto particular y si proporcionará una mayor agilidad, escalabilidad automática y reducción de costos.

La adopción del modelo serverless vino de la mano con la migracion que la empresa realizo para comenzar a la nube. Aunque no todos los equipos necesariamente trabajan con funciones Lambda, cada uno puede elegir el enfoque más adecuado según el caso de uso, como el uso de contenedores y un orquestador de servicios o máquinas on-premises. Sin embargo, la opción de serverless simplifica la administración y el escalado de servicios, liberando a los desarrolladores de tareas que anteriormente requerían la intervención de los DevOps. Esto ha permitido un enfoque "shift-left" en el trabajo, otorgando a los desarrolladores más autonomía y la capacidad de centrarse en la lógica de la aplicación.

## Componentes clave

> Para fines de todos estos ejemplos estare utilizando [Serverless Framwork](https://www.serverless.com/) y [AWS] (https://aws.amazon.com/).

La verdad de server-"less" es que en efecto si hay servidores y para ello necesitamos a los proveedores de servicios en la nube, como AWS Lambda, Azure Functions y Google Cloud Functions, estos ofrecen las plataformas y herramientas necesarias para implementar y ejecutar funciones serverless. Estos proveedores se encargan de la administración de la infraestructura subyacente, el escalado automático, la seguridad y el monitoreo, permitiendo a los desarrolladores enfocarse en la lógica de la aplicación.

Además de los proveedores de servicios en la nube anteriores, también existen proveedores de servicios más especializados que se enfocan en ofrecer servicios específicos para la arquitectura serverless, como Supabase (Ofreciendo servicios de base de datos y otras utilidades al estilo Firebase), Vercel (Con despliegue y alojamiento de aplicaciones web estáticas y de funciones edge).

### Funciones y Triggers

Dado que uno de los objetivos de serverless es que como desarrolladores nos enfoquemos menos en la infraestructura y mas en la logica de nuestra aplicacion, el componente clave para esto son las funciones lambda, estas funciones encapsulan una única "unidad de trabajo". AWS ofrece runtimes para diferentes lenguajes como Nodejs, Golang, Python, etc.

Una propiedad de estas funciones es que son elásticas. Esto significa que pueden manejar cargas de trabajo variables y adaptarse automáticamente a los cambios en la demanda. Cada función se ejecuta en su propio entorno *aislado*. Estas funaciones usualmente se pagan por una relacion entre invocaciones, tiempo de ejecución y recursos asignados (memoria). 

En el caso de Amazon, una forma común de invocar las funciones Lambda es a través de llamadas HTTP, similar a una API REST. Las funciones se asocian a un endpoint que recibe los argumentos de la llamada HTTP y los transmite a la función correspondiente. Esto te permite aplicar lógica de aplicación, como obtener elementos de un carrito de compras u otras acciones.

Cuando comencé a trabajar en este modelo, me costó entender que gran parte de las responsabilidades que solía delegar al framework de mi aplicación, como procesar el cuerpo JSON a una estructura conocida, deserializar headers o implementar autenticación, ahora son delegadas al proveedor de servicios. Esta transición a la arquitectura serverless puede resultar un poco extraña, ya que todo lo que solía hacer Express por mí, en el caso de AWS Lambda, es reemplazado por los servicios proporcionados por el proveedor.

Antes, en mi aplicación, el código se vería así:

```js
const express = require('express');
const jwt = require('jwt');
const authorizer = require('./authorizer');

const app = express();

app.post('/hello', authorizer, (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
```

En Lambda, el código se vería así:

```js
export function hello(event) {
  const { name } = JSON.parse(event.body);
  return {
    message: message: `Hello, ${name}!`,
  };
}
```

Podemos ver como en Lambda se delega más responsabilidad al proveedor de servicios, como el enrutamiento y la configuración del servidor, ya que se encarga de recibir los eventos y ejecutar las funciones correspondientes.

Asi como podemos invocar una Lambda a travez de una llamada HTTP, este apenas solo es uno de los tantos triggers que podemos usar para ejecutar nuestras funciones, dado que en serverless debemos pasar menos tiempo escribiendo nuestra infraestructura y delegandola al proveedor, podemos escuchar cambios en bases de datos, mensajes en colas, temporizadores, subidas de archivos, entre otros.

Los eventos y triggers permiten que las aplicaciones serverless sean reactivas y basadas en eventos. Esto significa que las funciones solo se ejecutan cuando se necesita en respuesta a eventos específicos, lo que ahorra recursos y garantiza que la capacidad de la aplicación se ajuste automáticamente según la demanda.

## Patrones y principios

Un punto crucial que hubiera sido útil conocer antes de adentrarme en el mundo de serverless es que, a diferencia de los servicios monolíticos o de la forma tradicional de desarrollar aplicaciones, en serverless se requiere implementar patrones de aplicaciones distribuidas o microservicios de manera inherente.

Como mencionamos anteriormente, las funciones Lambda representan unidades de trabajo individuales. Para desarrollar un flujo de aplicación completo en un entorno serverless, es necesario dividirlo en varios procesos y considerar cuidadosamente cómo distribuir y comunicar la lógica entre ellos.
 
Para ilustrar algunos de los patrones y buenas prácticas que implementamos en serverless, desarrollaremos un caso práctico de aplicación: Supongamos que tenemos un sistema de pedidos y deseamos verificar si un usuario tiene el saldo suficiente para realizar dicho pedido.