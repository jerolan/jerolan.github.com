# Deja de contarle a tus stakeholders cómo lo implementaste

## Lo que aprendí haciendo pitches

Antes de meterme de lleno en la programación, me gustaba ir a eventos como Startup Weekend y a hackatones. Ahí está este concepto del *pitch*: tienes unos cuantos minutos, a veces cinco, para explicar tu idea y convencer a otras personas de que vale la pena votar por ella. Si te pasas esos cinco minutos explicando cómo la vas a construir, quizá nadie alcance a entender qué estás proponiendo.

Por esos años también conocí la [regla 10/20/30 de Guy Kawasaki](https://guykawasaki.com/the_102030_rule/): diez diapositivas, veinte minutos y una fuente de al menos treinta puntos. Lo que aprendí haciendo esos pitches me ha ayudado muchísimo para presentarles ideas a directores, managers y otras personas no técnicas.

Hace tiempo, en una presentación con mis compañeros de equipo, les compartí algunas de esas técnicas para comunicarnos de forma más proactiva con nuestros stakeholders. Menciono la programación porque es lo que tengo más cerca, pero no creo que esto sea exclusivo de quienes escribimos código.

## Decir mucho sin decir nada

Una de las cosas que les decía a mis compañeros era esta:

> Un stakeholder pierde la atención tan pronto como empiezo a hablar del cambio en el *stored procedure* de la base de datos de respaldo, del *backup* y demás. Son palabras que dicen mucho, pero que al final no dicen nada. ¿Qué cambió para la persona que usa el sistema o para el negocio?

Y creo que también pasa al revés. Si en cada demo le hablamos a un stakeholder del *stored procedure*, tarde o temprano va a empezar a preguntar por el *stored procedure*. Lo acostumbramos a prestar atención a un detalle técnico cuando a lo mejor lo que necesita entender es cómo funciona el negocio, qué cambió o qué decisión le toca tomar.

## Un lenguaje que podamos compartir

En programación tenemos un concepto que mucha gente referencia: [*Domain-Driven Design*, de Eric Evans](https://www.domainlanguage.com/ddd/reference/). Y, aunque lo citamos mucho, no siempre parece que lo pongamos en práctica. Una de sus ideas es el *lenguaje ubicuo*: que quienes construyen el software y quienes conocen el negocio usen las mismas palabras para hablar de cómo funciona ese negocio. Lo valioso no es que todas las palabras sean sencillas. Es que signifiquen lo mismo para las dos partes.

En tecnología hacemos mucho esto de hablar con abstracciones. Para explicar algo, a veces basta una analogía. Pienso en los divulgadores científicos y en el gato de Schrödinger. Podemos seguir la historia del gato sin saber hacer las cuentas de la mecánica cuántica. El gato es parte de un experimento mental: no es una descripción literal de cómo funciona el mundo. Sirve para que alguien que no se dedica a la física pueda entrar a la conversación.

## Cuando lo complicado se vuelve una excusa

A veces usamos un concepto muy técnico porque algo sí es difícil y queremos comunicarlo. Pero también puede servir de excusa. Si la persona que te escucha no entiende lo que estás diciendo, ¿cómo va a distinguir entre algo que de verdad es difícil y algo que simplemente se dejó mal hecho?

Antes de la IA, por ejemplo, a veces se usaba una explicación muy técnica para justificar por qué no se escribían tests. Ahora parece que hay tests para todo, gracias a la IA. Lo digo medio en broma, pero usar una explicación complicada para que el stakeholder dé por bueno un trabajo que no está bien hecho es otra cosa.

En una demo o en una retrospectiva, yo empezaría por lo que pasó y por lo que puede hacer el equipo con esa información. Si el detalle de implementación ayuda a entenderlo, ahí sí vale la pena contarlo.

## Esto también pasa fuera de la programación

Piensa en cuando vas al médico, al nutriólogo o con un contador y te explican algo usando conceptos que tú no tienes por qué conocer. A lo mejor la explicación es correcta, pero sales sin entender qué significa para ti o qué tienes que hacer después. Es la misma sensación que puede tener alguien al salir de una demo de software.

No siempre es una excusa. A veces, como profesional, estás tan acostumbrado a hablar de cierta forma que ya no te das cuenta de qué parte de tu explicación no se entiende. Por eso creo que vale la pena aprender un poco de los divulgadores: usar palabras que la otra persona conozca, una analogía cuando ayude y el detalle técnico cuando de verdad haga falta.

En tu próxima demo, prueba empezar por lo que cambió para la persona que usa el sistema. Si después alguien te pregunta cómo lo implementaste, ahí sí cuéntale lo del *stored procedure*.
