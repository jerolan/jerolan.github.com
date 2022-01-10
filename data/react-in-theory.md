---
title: "React en teoría"
excerpt: "Probable que en el futuro algo pudiera reemplazar a React como biblioteca, confió en que el `modelo` de React prevalecería por mucho más tiempo."
cover:
  alt: "selective focus photography of multicolored confetti lot photo – Free Texture Image on Unsplash by @ninjason"
  src: "react-in-theory.jpg"
date: "2022-01-09T00:00:00.000Z"
---

> Este post fue originalmente publicado para [Yellowme en React In Theory](https://medium.com/yellowme/react-in-theory-70379c23fbfc).

Hace algún tiempo leyendo en Twitter, cuando Vue comenzaba a ganar popularidad, la comunidad le preguntó a Dan Abramov, "The React Guru" desde React 16, si el pensaba que en algún momento React como biblioteca sería reemplazada por alguna otra alternativa, señalando el ese tiempo a Vue.

Respondió que era algo probable que en el futuro algo pudiera reemplazar a React como biblioteca, pero confiaba en que el `modelo` de React prevalecería por mucho más tiempo.

## Cual es el “modelo” de React?

La explicación que se muestra aquí se basa en una descripción "formalizada" del repositorio ["react-basic"](https://github.com/reactjs/react-basic). También explican que se trata de un intento de tener un modelo mental de cómo “funciona” el mecanismo interno, pero que en la práctica, como todo, es algo más complejo.

### Transformación

> La premisa central de React es que las interfaces de usuario son simplemente una proyección de datos en una "forma diferente". La misma entrada da la misma salida. Una simple función pura.

He leído la frase citada de varios autores; como Erick Eliot y el propio React Team Core. Escribimos funciones todo el tiempo cuando desarrollamos software, funciones donde transformamos argumentos en una "derivación" de los mismos como respuesta.

En React podemos tener:

```jsx
function Greeting({ name }) {
  return <p>{`Hello, ${name}`}</p>;
}
```

Y esto puede ser perfectamente lo mismo que esto:

```js
function greeting(name) {
  return `Hello, ${name}`;
}
```

React mantiene la esencia de la programación en solo código Javascript.

### Abstracción

Todos los problemas de software se resuelven con [indirección](https://es.wikipedia.org/wiki/Indirecci%C3%B3n). Esta es la capacidad de referirnos a los datos de forma diferente a su valor y la aplicación de esta técnica en React es muy transparente.

Nuevamente con el ejemplo anterior, la función (componente) `Greeting` nos permite referirnos a él sin tener que pensar que en realidad es un elemento DOM o un elemento en React, sabemos por su nombre y argumentos que podría presentar un un mensaje de saludo al nombre dado como un argumento.

### Composición

La composición es la esencia de la programación, tomar un problema y dividirlo en partes más pequeñas para finalmente construir una solución completa combinando pequeñas soluciones.

> In my first high school programming class, I was told that software development is “the act of breaking a complex problem down into smaller problems, and composing simple solutions to form a complete solution to the complex problem.” — Erick Eliot

React nos da la capacidad de desarrollar interfaces complejas a partir de pequeños elementos reutilizables de IU.

```jsx
function Header() {
  // we assume that we have a function
  // from which we get a user
  // in our application
  const user = useUser();

  // without having to modify the behavior
  // of Greeting we can use the same element
  // in different parts of our application
  return (
    <div>
      <Greeting name={user.name} />
      <nav>
        <a href="/profile">Perfil</a>
      </nav>
    </div>
  );
}
```

### State

Cuando miro otras bibliotecas similares a React, lo mas interesante siempre es su "propuesta" para manejar el estado de la aplicación.

Las IU podrían ser proyecciones puras de los datos enviados desde cualquier origen a los clientes, pero hay un intermediario que no podemos controlar, el Usuario. El "estado" podría ser la combinación de los datos en nuestra aplicación y las interacciones del usuario.

Entre sus diferentes ventajas, tenemos la capacidad de "viajar en el tiempo" conociendo el estado de la aplicación en un punto determinado, estos patrones se ven fuertemente representados en librerías como Redux.

Una única función que se encarga de combinar las interacciones del usuario y los datos de la aplicación:

```js
function countReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
```

Podemos describir las interacciones del usuario que implementan las posibles transformaciones de estado:

```jsx
function increment() {
  dispatch({ type: "increment" });
}
```

## Más allá de JavaScript

En mi camino de aprendizaje he podido observar cómo funcionan las bibliotecas como SwiftUI y Flutter. En mi opinión, encajan bien con el "modelo" React.

Es claro ver que, no importa que nuevas bibliotecas o tecnologías aparezcan, muchas de ellas conservan la misma escénica que descubrí en React.

Finalmente es importante mencionar que los puntos descritos aquí no son un invento nuevo del equipo de React, como mencione en varios puntos, estos son la escénica de la programación y verlos implementados de esta forma, a mi parecer elegante, es lo que me mantiene siempre motivado a seguir explorando React como tecnología.

---

Algunos enlaces externos que utilizo como inspiración y referencia

- [reactjs/react-basic](https://github.com/reactjs/react-basic)
- [Pure UI from Guillermo Rauch](https://rauchg.com/2015/pure-ui)
- [SwiftUI](https://developer.apple.com/xcode/swiftui/)
- [Jetpack Compose](https://developer.android.com/jetpack/compose)
- [Flutter](https://flutter.dev/)
- [XState](https://xstate.js.org/)
