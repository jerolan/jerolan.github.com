---
title: "Draft: Deja de pedirles a los agentes que trabajen como humanos"
excerpt: "Una reflexión en borrador sobre cómo repensar nuestros procesos de trabajo para desarrollar software con agentes."
cover:
  alt: "Imagen de portada del artículo"
  src: "aero/header.jpg"
date: "2026-11-04T12:00:00.000Z"
---

> **Draft:** Este artículo está en proceso de revisión.

## Antecedentes

Para comenzar, voy a hablar de cuando, como desarrolladores, descubrimos ChatGPT, aproximadamente en la generación de GPT-3.5 y el paso a la generación 4.

Comenzamos a darnos cuenta de que, además de hacer el código por nosotros, que en ese tiempo hacíamos a través de copiar y pegar desde el mismo ChatGPT, también tomaba control de otro trabajo que solíamos hacer de forma documental: generar reportes, hacer presentaciones, llenar documentos para managers y otros equipos, documentación del proyecto, documentación técnica, diseños técnicos, etcétera.

Recuerdo que varias personas en el equipo comenzaban a escribir historias de usuario y épicas que originalmente tal vez estaban vagamente definidas. El deseo de muchas personas comúnmente era tener historias de usuario altamente definidas. Aunque eso pudiera, entre paréntesis, considerarse una mala práctica por los autores originales de estas técnicas en Agile, aun así los equipos de desarrollo pedían tener definiciones muy amplias dentro de las historias de usuario.

Y ahí es donde una de las grandes habilidades de los LLMs es escribir mucho, ¿no? Y que al día de hoy es uno de los elementos de controversia más grandes: le preguntas una cosa y termina dándote un miniartículo para cada respuesta.

El siguiente paso natural era empezar a meter agentes como un medio de trabajo. Muchas aplicaciones comenzaron a integrar sus chatbots. Entonces tú abrías el chatbot y de pronto ya tenías algo muy similar a ChatGPT dentro de la página de alguna empresa.

La garantía o la ventaja que se supone que estos agentes incluían para ti en estas aplicaciones embebidas era que estaban conectados a la información de la empresa. Entonces podían resolver o hacer tareas para ti que estuvieran relacionadas con ese contexto.

El contexto es básicamente el rey siempre que hablamos del tema de agentes. Entonces todo lo que ayude a darle al agente el contexto más adecuado lo va a hacer trabajar de la mejor forma.

## Cuando el agente imita nuestro trabajo

Ahí es donde comenzamos a delegarle al agente trabajo que imite a otros humanos. Entonces teníamos pequeños agentes que fueran nuestros project managers, product managers, technical writers, etcétera. Todo ese trabajo que no quería hacer el humano escribiendo documentación extensa lo terminaba haciendo el agente.

Y al punto que hoy en día nos negamos hasta a leer texto generado por agentes. Escribir se ha mantenido como uno de los medios y mecanismos que el humano usa para que otro humano consuma. Y esa es una de las formas más esenciales de la comunicación humana. Entonces, cuando un humano ve que otro humano le ofrece contenido escrito por AI, lo primero que hace es rechazarlo. No todos. Al leer las primeras frases de un artículo que está escrito 100% con AI, generamos rechazo inmediato.

## La documentación como parte del flujo de trabajo

Aquí es donde el punto de inflexión en la tendencia actual de escribir código o hacer trabajo con agentes empieza a cambiar. Entonces empezamos a reevaluar realmente qué debería estar haciendo el agente por nuestra parte. Si al final estamos usando el agente y el trabajo generado por el agente como una muleta de nuestro trabajo, para luego hacer que el agente se comporte como humano.

Y me explico: para ejecutar una tarea de programación, por ejemplo, probablemente en tu organización usen al agente para definir historias de usuario, épicas o cualquier marco o framework que utilices para trabajar. Lo pones a escribir diseños técnicos para posteriormente presentarlos a algún manager, buscar alguna aprobación, compartirlos con el equipo y comenzar la implementación, implementación que nuevamente estará haciendo el agente.

Entonces toda esa documentación intermedia fue creada como una muleta para introducir al agente a tu flujo de trabajo. Algunas personas lo utilizan como excusa para decir que es el human in the loop.

Mi argumento aquí, o mi tesis, es que todo lo anterior en realidad es falso y hasta es equivocado poner a trabajar al agente como muleta para hacer lo que los humanos están haciendo. Lo que en realidad deberíamos estar haciendo es eliminar todos esos procesos que ya no necesitan al humano en medio o no forzarnos a tratar de entrometernos en el trabajo del agente.

El trabajo de los agentes, desde inicios de este año 2026, ha cambiado drásticamente. Leyendo [el último artículo que escribí sobre la forma en la que trabajo con agentes](/blog/como-utilizo-copilot-para-escribir-codigo), veo que en solo un año, y potencialmente menos de un año, seis meses, quedó completamente desactualizado. Y esa fue la segunda vez en la que ya había escrito ese artículo.

Entonces, en esta otra ocasión, es comenzar a buscar, pensar o repensar las cosas que hacemos que el agente haga imitando al humano, como una muleta de las cosas que todavía no sabemos cómo eliminar de nuestro proceso. Y este es uno de los cambios más trascendentales que estaremos viendo próximamente. Probablemente cuando vuelva a leer este artículo en algunos seis meses, me daré cuenta de que todas estas prácticas rápidamente han quedado también desactualizadas.

## Comentarios y explicaciones que repiten el código

Entre este tipo de técnicas podemos hablar también de la forma en la que escribíamos código. Yo recuerdo que le pedía al agente agarrar una clase y llenarla de un montón de documentación, comentarios JSDoc o XMLDocs en el caso de .NET, solo porque a mí estéticamente me gusta y se me hace más legible ese tipo de código, no porque realmente estuviera leyendo esos comentarios. Comentarios que rápidamente también se vuelven obsoletos si simplemente imitan o describen lo que está haciendo el código.

Y aquí viene una parte muy importante ahora que la menciono. Cuando nosotros le pedimos al agente que explique una clase o explique un programa, usualmente lo hace de una forma muy tautológica. Básicamente es lo mismo que está escrito en código, pero escrito en texto en el idioma en el que tú hables, ya sea inglés o español. Si el código cambia, la narrativa va a cambiar. Si tú le pides al agente que explique código, no te dará una gran explicación, solo repetirá lo que está escrito en código. Tienes que buscar técnicas para que el agente realmente te dé una explicación valiosa.

Una gran explicación, así como otros autores hablan de las buenas pruebas en el código, no se hace a través de imitar lo que el código hace. Para eso mejor leo directamente el código, es mucho más fácil que leer la explicación de un agente que es exactamente lo mismo que el código, o que las pruebas imiten lo que el código hace.

Ahí es donde el buen diseño de pruebas también entra en juego, porque si el código cambia por un refactor, las pruebas no deberían cambiar, así como la explicación tampoco debería cambiar.

Entonces todo lo que escribíamos en documentos XML generados por agentes también eran simplemente tokens quemados de desarrollo. Repensemos las prácticas que hacíamos de programación, porque comienza a perder sentido que el código mismo incluya esos comentarios XML, headers de documentación, etcétera, porque finalmente tú puedes preguntarle directamente al agente.

A mí me daba mucha ilusión un proyecto llamado OpenWiki, al cual le dabas una base de código y generaba una documentación de esa misma base de código. Sin embargo, ahora que lo pienso bien, hasta ese tipo de proyectos pierden el sentido, pues finalmente ¿quién va a leer esa documentación? Absolutamente nadie, e inclusive es mejor que el agente lea el código directamente.

Si tú quieres pedirle al agente que implemente una librería, le das el repositorio.


## La documentación que aporta contexto

Eso no quiere decir que eliminemos toda documentación, todos los comentarios y cualquier otro de estos artefactos que rodean al código, diseños técnicos, etcétera, sino que nuevamente es repensar.

Algo que sí se justifica bien, como en el ejemplo anterior: si el código cambia y la explicación no, entonces la explicación tiene sentido. La explicación muchas veces tiene que acompañar al código para darle sentido a cómo diferentes componentes pueden entrelazarse.

Este contexto puede ser contexto de dominio, negocio, cosas que el agente no puede voltear y ver directamente porque viven en la mente de los stakeholders y dueños del negocio en sí. O ya estás hablando del dominio realmente. Entonces tú le agregas ese contexto adicional al agente para que entienda cuál es el fin de su trabajo.

## Planeación y artefactos para agentes

Entre otras prácticas, Matt Pocock tiene un pack de skills. Incluye ese proceso y ese procedimiento de generar especificaciones, tickets y finalmente generar artefactos para que el agente trabaje.

Eso, como decía, no quiere decir que eliminemos todos los tickets de Jira que teníamos en nuestro board. Sin embargo, hoy en día una práctica de planeación, refinamiento, etcétera, potencialmente pierde el sentido, porque finalmente tú le puedes dar al agente un trabajo sumamente complejo, refinarlo utilizando alguna de estas prácticas modernas de desarrollo agéntico, como las de pstack, de poteto, o las de Matt Pocock, rellenar los supuestos del agente y finalmente permitirle que ejecute.

Inclusive los artefactos generados por estos skills no necesariamente están hechos para que los humanos los lean. Están hechos para que el agente tenga contexto de su ejecución y finalmente terminan siendo desechables. En algunos casos, nuevamente, sí hay contexto y documentación que va a acompañar al código a largo plazo, pero no necesariamente todas estas explicaciones.

Entonces poner al agente a actuar como persona, creando tickets, documentación y diseños técnicos, pierde sentido y solo está quemando dinero. Sigue teniendo sentido escribir cosas humanas para otros humanos. Eso sigue teniendo todo el sentido.

## Verificación y herramientas reutilizables

Pero dejar de entrometernos nosotros en el trabajo de los agentes también implica darles lo que necesitan para trabajar. Como explica [Lauren con pstack](https://x.com/poteto/status/2094457600259842065), si el agente no tiene una forma de verificar lo que hizo, el humano termina convirtiéndose en el mecanismo de verificación para cada cambio.

Ahí es donde podemos comenzar a pensar en herramientas y conocimiento reutilizable: algo que construimos una vez y que después el agente puede volver a utilizar para entender el proyecto, ejecutar la aplicación y comprobar su trabajo.

Y creo que ese es el punto. No necesitamos conservar cada paso de nuestro proceso solo porque así trabajábamos antes. Necesitamos entender qué problema resolvía y encontrar la forma de resolverlo ahora que también trabajamos con agentes.
