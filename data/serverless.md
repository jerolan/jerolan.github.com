---
title: "Aplicaciones Serverless"
excerpt: "Serverless es un enfoque de desarrollo de aplicaciones en la nube en el cual los desarrolladores se centran en escribir código de funciones individuales que se ejecutan en respuesta a eventos específicos."
cover:
  alt: "Photo by Thomas Couillard on Unsplash"
  src: "serverless.jpg"
date: "2023-07-20T00:00:00.000Z"
---

Serverless es un enfoque de desarrollo de aplicaciones en la nube en el cual los desarrolladores se centran en escribir código de funciones individuales que se ejecutan en respuesta a eventos específicos. Estas funciones son volatiles y escalan automáticamente según la demanda, sin la necesidad de gestionar la infraestructura. Con este enfoque, los desarrolladores pueden despreocuparse de la administración de servidores y centrarse en la lógica de la aplicación, lo que proporciona una mayor agilidad, escalabilidad automática y una reducción de costos al pagar solo por el tiempo de ejecución de las funciones.

La promesa de mayor agilidad, escalabilidad automática y reducción de costos en la arquitectura serverless depende del contexto y el caso de uso específico. Si bien es cierto que el modelo serverless puede brindar estos beneficios en muchos escenarios, es importante considerar la adecuación de esta arquitectura a las necesidades y características particulares de cada aplicación.

En algunos casos, la adopción de la arquitectura serverless puede generar mayores costos si no se planifica y optimiza adecuadamente. Por ejemplo, si una aplicación tiene una carga de trabajo constante y predecible, puede ser más rentable utilizar una infraestructura tradicional en lugar de funciones serverless, donde se paga por cada invocación de función y el tiempo de ejecución.

Por lo tanto, es esencial evaluar cuidadosamente el contexto y el caso de uso antes de decidir adoptar una arquitectura serverless. Se deben considerar factores como la variabilidad en la demanda, la naturaleza de la aplicación, los costos operativos y las necesidades de rendimiento. Al hacerlo, se podrá determinar si la arquitectura serverless realmente tiene sentido en el contexto particular y si proporcionará una mayor agilidad, escalabilidad automática y reducción de costos.

## Componentes clave

> Para fines de todos estos ejemplos estare utilizando [Serverless Framwork](https://www.serverless.com/) y [AWS] (https://aws.amazon.com/).

La verdad de server-"less" es que en efecto si hay servidores y para ello necesitamos a los proveedores de servicios en la nube como: AWS Lambda, Azure Functions y Google Cloud Functions. Estos proveedores se encargan de la administración de la infraestructura, el escalado automático, la seguridad y el monitoreo, permitiendo a los desarrolladores enfocarse en la lógica de la aplicación.

Además de los proveedores de servicios en la nube anteriores, también existen proveedores de servicios más especializados que se enfocan en ofrecer servicios específicos para la arquitectura serverless, como Supabase (Ofreciendo servicios de base de datos y otras utilidades al estilo Firebase), Vercel (Con despliegue y alojamiento de aplicaciones web estáticas y de funciones edge).

### Funciones y Triggers

Dado que uno de los objetivos de serverless es que como desarrolladores nos enfoquemos menos en la infraestructura y mas en la logica de nuestra aplicacion, el componente clave para esto son las funciones lambda, estas funciones encapsulan una única "unidad de trabajo". AWS ofrece runtimes para diferentes lenguajes como Nodejs, Golang, Python, etc.

Una propiedad de estas funciones es que son elásticas. Esto significa que pueden manejar cargas de trabajo variables y adaptarse automáticamente a los cambios en la demanda. Cada función se ejecuta en su propio entorno _aislado_. Estas funaciones usualmente se pagan por una relacion entre invocaciones, tiempo de ejecución y recursos asignados (memoria).

En el caso de Amazon, una forma común de invocar las funciones Lambda es a través de llamadas HTTP, similar a una API REST. Las funciones se asocian a un endpoint que recibe los argumentos de la llamada HTTP y los transmite a la función correspondiente. Esto te permite aplicar lógica de aplicación, como obtener elementos de un carrito de compras u otras acciones.

Cuando comencé a trabajar en este modelo, me costó entender que gran parte de las responsabilidades que solía delegar al framework de mi aplicación, como deserializar JSONs, obtener headers o implementar autenticación, ahora son delegadas al proveedor de servicios. Esta transición a la arquitectura serverless puede resultar un poco extraña, ya que todo lo que solía hacer, por ejemplo, Express por mí, en el caso de AWS Lambda, es reemplazado por los servicios proporcionados por el proveedor.

Antes, en mi aplicación, el código podria ver así:

```js
const express = require("express");
const jwt = require("jwt");
const authorizer = require("./authorizer");

const app = express();

app.post("/hello", authorizer, (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
```

En AWS Lambda, el código se vería así:

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

Un punto crucial que hubiera sido útil conocer antes de adentrarme en el mundo de serverless es que, a diferencia de los servicios monolíticos o de la forma tradicional de desarrollar aplicaciones, en serverless requiere implementar patrones de aplicaciones distribuidas o microservicios de manera inherente.

Como mencionamos anteriormente, las funciones Lambda representan unidades de trabajo individuales. Para desarrollar un flujo de aplicación completo en un entorno serverless, es necesario dividirlo en varios procesos y considerar cuidadosamente cómo distribuir y comunicar la lógica entre ellos.

Para ilustrar algunos de los patrones y buenas prácticas que implementamos en serverless, desarrollaremos un caso práctico de aplicación: Supongamos que tenemos un sistema de pedidos y deseamos verificar si un usuario tiene el saldo suficiente para realizar dicho pedido.

### Patrones de datos

Repositorios: El término "repositorios" puede tener diferentes definiciones y contextos. En el ámbito del diseño orientado a dominio, los repositorios son una forma de persistir y acceder al estado de las "entidades de dominio". Se enfocan en la gestión y manipulación de objetos del dominio, encapsulando la lógica de acceso a datos específicos. Por lo tanto, en este contexto, los repositorios no se utilizan para abstraer y encapsular el acceso a los datos en general en una aplicación.

Si necesitas una abstracción que te ayude a probar tus aplicaciones al eliminar la dependencia con una base de datos específica o si buscas una forma de desacoplar y reemplazar la estrategia utilizada para almacenar los datos, es posible que no necesites utilizar directamente los repositorios. En su lugar, puedes considerar el uso de un DataStore o cualquier otra abstracción que te permita lograr estos objetivos. Es importante tener en cuenta que los repositorios son un término asociado específicamente con el diseño orientado a dominio y están destinados a manejar la persistencia y acceso a los objetos del dominio.

```typescript
// domain.ts
export interface IRepository<T extends Entity> {
  add(entity: T): void;
  update(entity: T): void;
  get(id: string): Promise<T | null>;
}
```

Unit of Work (Unidad de Trabajo): El patrón Unit of Work se utiliza para agrupar transacciones y cambios en la base de datos en una única unidad coherente. Para mi interpretacion, pudieran verse como una evolucion a los Repositorios, asi como estos, el Unit Of Work es una forma de agrupar transacciones entre entidades de dominio.

Pueden ser tan simples como una interfaz pero pudieras instanciar tantas, como transacciones de dominio tengas.

```typescript
// domain.ts
export interface IUnitOfWork {
  transactionId: string;
  commit(): Promise<void>;
}
```

Un error común que podemos cometer al no utilizar Unit of Work es la creación de transacciones separadas. Esto puede llevar a inconsistencias en los datos en caso de que una de las transacciones falle.

En este caso, si la actualización del usuario (userRepo.update(user)) se ejecuta correctamente pero la adición de la transacción (transactRepo.add(transaction)) falla, los datos quedarán en un estado inconsistente. El saldo del usuario se habrá reducido, pero la transacción no se habrá registrado.

```typescript
function main() {
  const amount = 10;
  const transaction = transaction.new(amount);
  user.reduceBalance(amount);

  // se crean dos transacciones separadas
  // en caso de que una falle, generaste inconsitencia de datos
  await userRepo.update(user);
  await transactRepo.add(transaction);
}
```

Una posible solución sería implementar el objeto de transacción que nuestro ORM nos ofrezca.

```typescript
function main() {
  const amount = 10;
  const transaction = transaction.new(amount);
  user.reduceBalance(amount);

  // estamos generando acoplamiento con nuestra base de datos.
  const dbTransact = db.beginTran();
  await userRepo.update(user, dbTransact);
  await transactRepo.add(transaction, dbTransact);
  dbTransact.commit();
}
```

Al utilizar Unit of Work, las operaciones se agrupan dentro de una única transacción coherente. Si alguna operación falla, la transacción se revierte en su totalidad, manteniendo la consistencia de los datos. De esta manera, se evitan las inconsistencias y se garantiza la integridad de los datos en caso de errores durante el procesamiento.

```typescript
function main() {
  const amount = 10;
  const transaction = transaction.new(amount);
  user.reduceBalance(amount);

  // internamente los repositorios tienen acceso al UnitOfWork
  userRepo.update(user);
  transactRepo.add(transaction);
  unitOfWork.commit();
}
```

### Patrones resiliente (Let it crash)

La resiliencia es la capacidad de una aplicación para recuperarse de errores. Mientras que en las API HTTP cliente-servidor, un usuario puede volver a enviar una solicitud si falla, ¿qué sucede cuando la solicitud falla entre dos servicios o al intentar alcanzar un servicio externo? En esos casos, no hay un usuario que vuelva a emitir la solicitud.

Para abordar esta problemática, implementamos patrones resilientes que permiten a nuestra aplicación recuperarse de fallos y seguir funcionando incluso en situaciones de catástrofe. AWS Lambda, por defecto, ofrece la opción de reintentar una operación de una función Lambda en caso de error. Además, cuando se combina con herramientas como SNS, SQS o EventBridge, se dispone de un conjunto de herramientas que permiten reintentar y repetir eventos en caso de fallos.

Dentro de nuestra aplicación, podemos aplicar internamente el patrón Retry (Reintentar), configurando operaciones de reintentos en caso de fallas transitorias. Esto permite que la aplicación serverless vuelva a intentar la operación después de un error, mejorando así la tolerancia a fallos y la estabilidad del sistema.

```typescript
await retryWithExponentialBackoff(() => {
  return eventBridgeClient.putEvents({
    Entries: [
      {
        EventBusName: process.env.INTEGRATION_EVENTS_EVENT_BUS!,
        Source: process.env.INTEGRATION_EVENTS_SOURCE!,
        DetailType: item.name,
        Detail: JSON.stringify(item),
      },
    ],
  });
});
```

Además del patrón Retry, te recomendaría explorar otros patrones que puedes implementar según tu caso de uso, como el Circuit Breaker, Bulkhead o Fallback. Estos patrones forman parte de las Application Resiliency Patterns (Patrones de Resiliencia de Aplicaciones) y pueden proporcionar estrategias adicionales para garantizar la resiliencia y la robustez de tu aplicación.

Puedes encontrar más información sobre estos patrones y su implementación en el enlace proporcionado: (Reliability patterns)[https://learn.microsoft.com/en-us/azure/well-architected/resiliency/reliability-patterns].

### Patrones de concurrencia

En el contexto de las operaciones de lectura y escritura de datos, la concurrencia es un aspecto crítico que debe considerarse para garantizar un comportamiento correcto y consistente en entornos donde múltiples procesos o hilos pueden acceder a los mismos datos al mismo tiempo. Dado que estamos en un entorno serverless debemos recordar que cada proceso opera independiente y nuestra aplicacion puede escalar y ser atendida por muchos proceso al mismo tiempo.

Optimistic vs Pessimistic Concurrency (Concurrencia Optimista vs Pesimista): Estos patrones se refieren a diferentes enfoques para manejar la concurrencia en las operaciones de lectura y escritura de datos. La concurrencia optimista asume que no habrá conflictos de escritura concurrentes y permite que las operaciones continúen sin bloqueos. La concurrencia pesimista, por otro lado, utiliza mecanismos de bloqueo o exclusión mutua para garantizar que no se produzcan conflictos durante las operaciones concurrentes.

Dependiendo del diseño de tu aplicación, la estrategia de concurrencia que elijas será la más adecuada para tus necesidades. Sin embargo, es importante destacar que estos patrones de concurrencia deben complementarse con el enfoque de resiliencia mencionado anteriormente. En ambos casos, es probable que debas capturar excepciones asociadas a operaciones concurrentes y realizar reintentos para manejar situaciones de falla.

Podemos ver como en nuestro repositorio se aplica una versión controlada para la entidad. Antes de realizar la actualización, se verifica que la versión actual de la entidad en la base de datos coincida con la versión esperada. Si hay alguna discrepancia, la operación de actualización no se lleva a cabo. Esto garantiza que no se realicen actualizaciones concurrentes que puedan sobrescribir cambios realizados por otras transacciones.

```typescript
update: (entity: Domain.Entity): void => {
  const { id, ...entityValues } = entity;
  entityValues.version++;
  console.info(convertObjectToDynamoDBUpdate(entityValues));
  const {
    UpdateExpression,
    ExpressionAttributeValues,
    ExpressionAttributeNames,
  } = convertObjectToDynamoDBUpdate(entityValues);
  unitOfWork.register([
    {
      Update: {
        TableName: tableName,
        Key: { id: { S: id } },
        UpdateExpression: UpdateExpression,
        ConditionExpression: "#version = :currentVersion",
        ExpressionAttributeNames: {
          "#version": "version",
          ...ExpressionAttributeNames,
        },
        ExpressionAttributeValues: {
          ":currentVersion": { N: `${entityValues.version - 1}` },
          ...ExpressionAttributeValues,
        },
      },
    },
  ]);
},
```

### Patrones distribuidos

En entornos distribuidos, donde los sistemas se componen de múltiples componentes interconectados, es fundamental contar con patrones y prácticas que faciliten la coordinación, escalabilidad y manejo de datos.

CQRS (Command Query Responsibility Segregation): Este patrón separa las operaciones de lectura (queries) y escritura (commands) en diferentes modelos de datos y lógica de negocio. CQRS no es nada magico, si no la simple separacion entre las escrituras y las lecturas.

La principal motivación para dividir estos casos es que cada uno tiene necesidades diferentes. En el caso de las lecturas, podemos optimizar su eficiencia al omitir el uso del patrón repositorio y acceder directamente a los datos que necesitamos mediante consultas (queries) directas. Además, podemos implementar una capa de caché para mejorar aún más el rendimiento.

Por otro lado, las escrituras demandan validaciones más rigurosas y la implementación de todas las reglas de negocio. También implica cargar los datos relacionados entre las diferentes tablas para construir un registro válido y seguro.

Al separar las responsabilidades de lectura y escritura, podemos optimizar el rendimiento de las consultas y garantizar la integridad de los datos en las operaciones de escritura. Esto permite un diseño más flexible y escalable, ya que podemos ajustar cada modelo y lógica de negocio según sus necesidades específicas.

Es importante destacar que la implementación de CQRS puede agregar complejidad a la arquitectura de una aplicación. Por lo tanto, se recomienda evaluar cuidadosamente si los beneficios de separar las operaciones de lectura y escritura superan los costos adicionales de desarrollo y mantenimiento.

SAGAS: El patrón SAGAS se utiliza para coordinar y gestionar transacciones distribuidas y eventos en un sistema. En el contexto serverless, este patrón puede aplicarse para gestionar flujos de trabajo complejos que implican múltiples funciones y servicios, asegurando que las operaciones se realicen de manera consistente y coordinada.

Event Sourcing (Almacenamiento de Eventos): En este patrón, se almacenan los eventos que representan los cambios realizados en el sistema en lugar del estado actual. Esto permite reconstruir el estado actual a partir de los eventos almacenados y también facilita la auditoría y la trazabilidad de los cambios.

### En conclusion

En conclusión, los patrones discutidos en esta sección son conceptos clave que hubiera sido beneficioso conocer antes de desarrollar aplicaciones serverless y distribuidas. Aprender y aplicar estos patrones puede marcar una diferencia significativa en la calidad y el rendimiento de nuestras aplicaciones.

Es importante tener en cuenta que no se debe aplicar cada patrón de manera indiscriminada en todos los servicios e infraestructura. Cada decisión tecnológica y arquitectónica debe evaluarse en función del caso de uso y las necesidades específicas. No existe una solución única para todos los escenarios. Sin embargo, comprender estos patrones y tenerlos en mente nos brinda herramientas adicionales para abordar desafíos comunes y mejorar nuestras aplicaciones.

Además, es fundamental tener en cuenta que las aplicaciones son evolutivas. A medida que evolucionan y crecen, es posible que se requiera aplicar alguno de los patrones aprendidos aquí. La comprensión de estos conceptos nos brinda la base y la capacidad para adaptar nuestras aplicaciones a medida que las necesidades cambian.
