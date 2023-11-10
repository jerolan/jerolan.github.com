---
title: "La arquitectura limpia no existe"
excerpt: "Contrario a lo que muchos asocian con Clean Architecture, el libro de Robert C. Martin no se limita a las cuatro capas propuestas en su famoso artículo, ni se enfoca en una prescripción rígida de la estructura de carpetas — salvo por una breve discusión en el último capítulo."
cover:
  alt: "Sere honesto contigo dev. No existe la Clean Architecture"
  src: "clean.jpg"
date: "2023-11-09T00:00:00.000Z"
---

Clean Architecture, un tema que se ha vuelto tan esencial en las conversaciones sobre las mejores prácticas en desarrollo de software que es casi imposible asistir a una entrevista técnica o leer un hilo de discusión sobre el tema sin encontrarlo. Es un término que nos promete un santo grial de la programación: separación, mantenibilidad, y un software que no solo funciona bien sino que también es una alegría para trabajar.

Cuando me sumergí por primera vez en el mundo de Clean Architecture, seguí un camino que muchos ingenieros recorren. Busqué en YouTube, blogs, etc. Y, como muchos, mi primer punto de referencia fue su artículo original en el Clean Code Blog.

Cuando las conversaciones sobre clean arquitecture comienzan con el siguiente diagrama, sabemos que no vamos a ir en una buena dirección:

![Clean arquitecture?](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Este articulo se enfoca principalmente en comprender a que se refieren los elementos presentados en el articulo de Uncle Bob y contrastarlos contra lo que el libro: Clean Architecture nos dice.

Siguiendo alguno de los ejemplos que alguno de estos blogs en internet nos puedas dar, nos encontramos con que la arquitectura limpia se ve algo así:

```
- src
- - application
- - domain
- - infrastructure
- - interfaces
```

El problema de esto es que es meramente un ejemplo, no quiere decir que tu aplicación o todas las aplicaciones deban verse de esta forma. De hecho el mismo blog de Uncle Bob nos dice:

> Only Four Circles? No, the circles are schematic. You may find that you need more than just these four. There’s no rule that says you must always have just these four. However, The Dependency Rule always applies.

## De que trata Clean Architecture, el libro?

Contrario a lo que muchos asocian con Clean Architecture, el libro de Robert C. Martin no se limita a las cuatro capas propuestas en su famoso artículo, ni se enfoca en una prescripción rígida de la estructura de carpetas — salvo por una breve discusión en el último capítulo.

El libro comienza estableciendo un marco para entender la "Arquitectura y Diseño" y alerta sobre los riesgos de no invertir en un buen diseño. Aquí, el autor argumenta convincentemente que los costos de mantenimiento y desarrollo pueden dispararse con el tiempo si la arquitectura no es sólida desde el comienzo.

Respecto a los paradigmas de programación, Martin nos lleva a través de un recorrido que subraya cómo el software es usualmente la combinación de varios de estos paradigmas y no dogmáticamente uno sobre otro.

Sobre todo, el libro es un tratado sobre principios — desde los principios SOLID hasta los principios de Componentes, Arquitectura y Capas —, culminando en la discusión de patrones de diseño comunes que sirven para cumplir con lo que podría considerarse el corazón de Clean Architecture: _The Dependency Rule_.

## The Dependency Rule y la verdadera esencia de Clean Architecture

Si pudiera ejemplificar brevemente la esencia de Clean Architecture en un ejemplo de código, seria algo asi:

```ts
import React, { useReducer, useCallback, FormEvent } from "react";

// Esta interfaz representa el contrato para la capa de lógica de negocio.
// Define la regla de negocio específica de la aplicación para crear un usuario.
interface ICreateUserService {
  (data: { name: string; email: string }): Promise<void>;
}

// Este hook representa la implementación del caso de uso.
// Idealmente debería estar en un archivo separado y podría mejorarse
// inyectando dependencias que realicen las solicitudes de red reales,
// haciéndolo más adaptable a cambios en servicios externos.
function useCreateUserService(): ICreateUserService {
  const execute = useCallback(async ({ name, email }) => {
    // Aquí es donde normalmente interactuarías con un servicio externo,
    // como una API. La interacción con la API debería ser extraída a un
    // módulo separado para adherirse al Principio de Inversión de Dependencias.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.debug(`User created: ${name} (${email})`);
  }, []);

  return execute;
}

// This represents the initial state of the form and should be self-explanatory.
const initialState = {
  name: "",
  email: "",
  loading: false,
};

type State = typeof initialState;

type Action = {
  type: "SET_NAME" | "SET_EMAIL" | "SET_LOADING" | "RESET_FORM";
  payload?: Partial<State>;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload!.name! };
    case "SET_EMAIL":
      return { ...state, email: action.payload!.email! };
    case "SET_LOADING":
      return { ...state, loading: action.payload!.loading! };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

// Este componente representa parte de la capa UI.
// Debería ser responsable solo de renderizar y delegar interacciones de usuario
// a los casos de uso/reglas de negocio.
function UserForm({ createUser }: { createUser: ICreateUserService }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Este callback representa la interacción del usuario con el formulario.
  // Podria ser extraido a un componente separado para adherirse al Principio de Responsabilidad Única.
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      dispatch({ type: "SET_LOADING", payload: { loading: true } });
      try {
        await createUser({ name: state.name, email: state.email });
        dispatch({ type: "RESET_FORM" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: { loading: false } });
      }
    },
    [createUser, state],
  );

  // Los elementos del formulario deberían extraerse en componentes separados
  // para adherirse al Principio de Responsabilidad Única.
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: { name: e.target.value } })
        }
      />
      <br />
      <input
        placeholder="email"
        type="email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: { name: e.target.value } })
        }
      />
      <br />
      <button disabled={state.loading} type="submit">
        Create User
      </button>
    </form>
  );
}

// Este componente App es parte de la capa más externa que compone la UI con los casos de uso.
export default function App() {
  const createUser = useCreateUserService();
  return <UserForm createUser={createUser} />;
}

```

El código satisface a la Clean Architecture dado que:

Separación de preocupaciones: El código intenta separar las responsabilidades dividiendo la lógica en funciones y componentes. La interfaz ICreateUserService define un contrato para la creación de usuarios, y el hook useCreateUserService implementa esta lógica. Esto es coherente con los principios de Clean Architecture de separar las reglas de negocio de la UI.

La Regla de Dependencia: La Regla de Dependencia establece que las dependencias deben apuntar hacia adentro, desde las capas externas (como la UI) hacia las capas internas (como la lógica de negocio y los datos). En el código proporcionado, el componente UserForm depende de ICreateUserService, lo que es un buen ejemplo de inversión de dependencias y la separación entre la UI y la lógica de negocio.

Principios SOLID: El principio de Inversión de Dependencias (D en SOLID) está presente en la interfaz ICreateUserService.

## En conclusión

Como lo dice el buen libro de [Eric Eliot, Composing Software](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea). La composicion es la esencia de la programación. El ejemplo que vimos se reduce a aplicar en React simple composicion, de forma que, todos los principios y reglas que conforman la arquitectura tienen un mismo origen que la programacion misma y la Rule of Dependency es solo un alias de la composicion.

El proceso de diseño y arquitectura no se basa en seguir un ejemplo o una guia MVC, MVP, MVVM, etc. Se basa en entender los principios y reglas que de tan herramientas y patrones de diseño, y aplicarlos de forma que se adapten a tu problema. No existe una estructura definida llamada "Clean Arquitecture" por Uncle Bob. Uncle Bob solo nos dio una guia de los principios y reglas que el usa para diseñar software, y que tu puedes usar para diseñar el tuyo.

Alguna otra referencia que me gusta muchos sobre separaciones por capas [Packages as layers, not groups](https://www.gobeyond.dev/packages-as-layers/).
