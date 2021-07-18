---
title: "Clean Agile y volviendo a los basics"
excerpt: "Después de tener un gran interés por entender los principios de agile, pude entender donde fallamos como equipos al intentar adoptar los principios"
cover:
  alt: "three men sitting while using laptops and watching man beside whiteboard photo – Free Business Image on Unsplash by @austindistel"
  src: "clean-agile.jpg"
date: "2021-07-17T00:00:00.000Z"
---

Cuando comencé en el mundo del desarrollo, _agile_ era algo que era muy sonado entre los desarrolladores, mis primeros acercamientos a los equipos que adoptaban la corriente del startup, impulsaban el uso de métodos como _Scrum_ y se hablaba mucho del "Manifesto ágil".

Como todo buen developer que va comenzando, yo, solo me subí al tren y trataba de seguir técnicas que otros desarrolladores y equipos con mas experiencia implementaban, no entendía muchas cosas pero asi comenzamos todos.

A medida que el tiempo pasaba y ganaba mas experiencia, comencé a cuestionarme el porque tomamos ciertas decisiones o adoptábamos estas técnicas, sumado a, que escuchaba una creciente de mis compañeros por cierto cuestionamiento a las herramientas que se aplican en _Scrum_.

## _A brand new project_

Esta serie de dudas iban creciendo en esos últimos años y terminó de explotar cuando comencé en un nuevo equipo, donde podia notar que la "transformación ágil" estaba en una etapa media-temprana, puedes darte cuenta de esto cuando vez que comienzan a haber roles definidos según el método que estes aplicando, _Product Owner_, _Scrum Master_ y también hay ceremonias definidas como el _Daily Scrum_, _Sprint Planning_, etc. pero se mantiene la resistencia al cambio por algunos integrantes de los equipos, donde sienten que no terminan de cuajar las etapas de planeación, pruebas, integración, etc. en su proceso de desarrollo, y también se siente que, con la transformación de roles, la toma de decisiones se diluye y la comunicación entre equipos se estrangula.

No era la primera vez que había notado ese efecto en los equipos, tampoco era primera vez que me introducían a un equipo "que hacia _agile_" a traves de _Scrum_ pero que en proceso de Onboarding no se compartían los principios y valores de _agile_ y solo estaba implícito que se usaba como método para administrar los proyectos.

Sinceramente yo también lo aceptaba de esa forma, cuando formaba parte de un equipo, escoger la técnica para administrar el proyecto parecía mas como un _item_ en un carrito de super.

- **Mike**: _"Bueno, para el Backend vamos a agarrar Node.js"_
- **Luis**: _"Y para el Front podemos usar React, quiero probar esta nueva librería para manejar el State"_
- **Mike**: _"Claro, y nos agarramos un Jira y hacemos Scrum. Tomamos los Daily y etc."_

No había mucho cuestionamiento, solo decidir sobre una serie de herramientas y listo.

## Cuando los problemas comienzan

A medida de que los proyectos, que comienzan de esa forma avanzan, se comienzan a ver las carencias sobre las decisiones tomadas inicialmente, puede no ser un problema muy grande, siempre a hay la flexibilidad de tomar un nuevo camino y experimentar con nuevas herramientas, pero el problema recae cuando se comienza a culpar a los métodos/técnicas como poco efectivas para el equipo o proyecto, sin analizar que tal vez los errores se están cometiendo desde no tener los _basics_.

- **Mike**: _"Creo que Scrum no es muy bueno, creo que debemos cambiar."_
- **Luis**: _"Cierto, tampoco estoy de acuerdo, escuche que Kanban es mas sencillo y moderno, podemos probarlo."_
- **Mike**: _"Suena buen, tampoco quiero tener los Daily ya tenemos muchas juntas"_

Eventualmente el problema se va a repetir y algún nuevo método o técnica surgirá como remplazo de esa sensación de fricción que comienzan a tener los equipos.

## Back to the basics

Cuando comencé a identificar estos síntomas en este ultimo equipo, decidí que esta vez tenia que parar, no estaba dispuesto a volver a pasar por esta misma experiencia una vez mas. Para hacer que esto cambie, yo tenia que cambiar, yo tenia que aprender mas sobre "¿Qué es _agile_?" y "¿Qué es _Scrum_?".

Agile fue creado por un grupo de programadores, que se preguntaban como administrar un proyecto de software, identificaban los problemas de las técnicas o herramientas que en ese momento tenían y cuestionaban la efectividad de las mismas, pero a diferencia de agarrar una nueva herramienta como alternativa inmediata, tenían que identificar cuales eran los problemas concretos de administrar un proyecto de software.

El siempre temido _Waterfall_ era la forma por defecto de administrar un proyecto y no solo de software, esta herramienta es un hijo directo de la Ingeniería industria en la teoría del _Scientific Management_, desarrollada con el propósito de administrar proyectos a traves de un análisis científico. Muchas de las técnicas que se implementan en este método, están relacionadas a la estandarizaron de herramientas, determinación de costos, tiempos y movimientos, etc. Definitivamente como herramienta era una obra maestra para la administración de proyectos, respaldada por un campo en desarrollo desde hace mucho mas tiempo que el software.

¿Que salio mal con _Waterfall_?, una razón importante y que pude conocer gracias a autores como Robert Martin, Martin Fowler, etc. es que mientras los proyectos de manufactura, son grandes proyectos de grandes costos y muy bien definidos, los proyectos en software no son, o al menos ninguno en el que yo haya trabajado o podido escuchar.

¿Por que _agile_ si?, el famoso manifesto que se predica en _agile_, efectivamente tiene la clave y asi lo pensaron los autores cuando llegaron a esta idea, los proyectos en software, son proyectos que tienden a cambiar, son proyectos en donde los requerimientos rara vez están bien definidos o no cambien, donde la estimación y control de los tiempos puede variar.

_Agile_ no propone una herramienta para que los proyectos de software sean exitosos, _agile_, propone una serie de principios, que si son bien cumplidos, es muy probable que un proyecto en software sea exitoso, son principios que requieren la colaboración constante por todas las partes del equipo, requieren comunicación oportuna riesgos e impedimentos, donde hay una constante validación con el usuario o cliente sobre las necesidades del proyecto y donde los cambios siempre son bienvenidos, siempre que puedan agregar valor al producto.

## En practica

Es difícil mapear los valores de _agile_ en un proyecto, es algo que requiere experiencia. Como el principiante que fuí, en el momento que lei el manifesto, no podia entender por que funcionaba, yo solo podia leer una serie de palabras que sonaban bien. _Agile_ requiere repetir mucho para entender, requiere mucha disciplina y para aquellos que ya lo han dominado, requiere mentoria.

Yo he visto a estos principios brillar en equipos sin ser consientes de ello.

- Cada vez que trataba de resolver un problema y me acercaba con otro desarrollador para compartir ideas sobre el problema y llegábamos a una solución.
- Cuanto había que tener sesiones para definir algunos requerimientos con otros equipos, de diferentes areas y en algunas veces, no técnicas.
- Cuando todo el equipo de desarrollo compartía el mismo objetivo que los clientes o el equipo de negocio y esto les permitía tener _ownership_.
- Cuando las opiniones de los individuos eran tomadas en cuenta para la mejora.
- Cuando el equipo de desarrollo tenia que jugar diferentes roles, a pesar de que su area de especialidad estaba en, por ejemplo Backend, y tenían que colaborar con equipos de desarrollo Mobil, Front, etc.

_Agile_ no necesita un marco de trabajo para funcionar, un equipo puede solo ser "ágil" y punto. Los métodos, frameworks, etc. solo hacen que los principios tengan vehículos para su mejor aplicación; Por ejemplo, en _Scrum_ tenemos los _Daily Scrum_, ¿que sucede en esta junta?, se comunica el avance y mas importante los riesgos, para que de forma oportuna se pueda tomar una decision que mitigue dicho riesgo.

Otro buen ejemplo son los Sprint Planning, si recordamos que los proyectos de software tienden a cambiar, los Planning son el lugar adecuado para pensar si el camino que se esta tomando en ese momento es el mejor y permite replantear las prioridades, también ayuda a que el equipo de desarrollo delimite muy bien las actividades que se tienen que hacer; un gran error es tomar una gran funcionalidad y quererla atacar por "partes" en diferentes Sprints, recordemos que la salida de cada Sprint tiene que ser algo funcional y lo mejor es delimitar en actividades que, en su unidad puedan funcionar de forma independiente y que a lo largo de los Sprints se puedan componer en una solución integral.

Yo también creo, que pensar las tareas de la forma descrita en este ultimo párrafo puede ser abstracto y difícil de lograr, pero nuevamente, solo con practica, mucha colaboración y comunicación se puede dominar.

## En conclusion

_Scrum_ o _Kanban_ o lo que salga mañana, van a tener algo en común, todos van a tener los mismo principios de _agile_, lo primero que he visto fallar en las organizaciones ágiles, son justamente esos principios, tenemos que dejar de enfocarnos en la herramienta y pensar por que realmente estos principios son valiosos.

_Agile_ como _Scrum_, son muy simples, _agile_ esta escrito en un solo [_page_](https://agilemanifesto.org/) de 13 párrafos y [la guiá Scrum](https://scrumguides.org/scrum-guide.html) a lo mucho tiene 8 elementos principales, ambos están hechos con el propósito de no generar un _overhead_ en quien lo implementa; dominar los principios y su correcta aplicación es difícil.

Lo mejor que podemos hacer como individuos es colaborar para que _agile_ funcione en nuestros equipos, no tenemos que tomar una postura _Gatekeeper_ y comenzar a predicar que antes de mover un solo dedo en el proyecto, todos tienen que memorizar los principios. Todo es un proceso de _push-and-pull_, repetir y repetir, explorar y colaborar.

Finalmente, recuerden que _agile_ ni _Scrum_ nacieron en un curso de certificación, y que cualquier documento expedido por alguna entidad certificadora no garantiza la correcta aplicación de los principios, _agile_ nació de un grupo de desarrolladores que querían hacer que las cosas funcionaran.
