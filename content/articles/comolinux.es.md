+++
title = 'Cómo volví a Linux'
date = 2025-10-26
draft = true

[taxonomies]
tags = ['artículos', 'tecnología']
+++

Hace dos semanas,
volví a instalar Linux en mi computadora personal.
Se podrían preguntar: por qué haría tal cosa?
Hay muchos factores que entran para responder esa pregunta,
pero se resume en dos cosas:
he estado perdiendo cada vez más confianza en Microsoft y en la calidad de Windows;
y simplemente, para la mayoría de los usos, Linux es realmente un mejor sistema.

- Comencé a usar Linux a los 9-10 años
- Cambié en 2016-2017 por una Chromebook, y luego cuando pude comprarme una laptop min de Windows 11

## Instalación

El panorama de distribuciones de Linux ha cambiado bastante 
desde la última vez que estuve dentro.
Ahora existen más y mejores distribuciones que nunca,
incluyendo algunas diseñadas 
para aprovechar los avances facilitados por Steam,
así haciendo lo más fácil posible la transición
para aquellos que usan Windows 
para jugar videojuegos.

Para este regreso,
luego de considerar las muchas opciones,
decidí optar por [openSUSE Tumbleweed](https://get.opensuse.org/tumbleweed/)
Esta distribución es distinguida 
por mantener su software súper actualizado,
lo cual a veces puede implicar algo de inestabilidad.
Como tiene una reputación y documentación de primera
y como soy un usuario lo suficientemente avanzado 
para resolver los problemas que surjan,
me pareció una excelente opción.

A los nuevos interesados en este mundo,
recomendaría distribuciones más conservadoras y estables,
particularmente la famosa [Linux Mint](https://linuxmint.com/).
A los jugadores de videojuegos en particular,
en internet se recomiendan mucho [Nobara](https://nobaraproject.org/)
y [Garuda](https://garudalinux.org/).

El proceso de instalación fue fácil.
Seguí las instrucciones en la página,
creando un USB con el disco de instalación montado.
Sobre openSUSE puedo decir que le convendría rediseñar el instalador, haha.
Linux Mint y las demás tienen excelentes experiencias de instalación.

Luego de la instalación,
la computadora estaba lista,
pero para terminar mi transición,
quería tener todo lo necesario para poder jugar videojuegos.
Mi computadora es una laptop,
por lo cual necesito usar una tarjeta gráfica externa 
si quiero jugar juegos demandantes;
en mi caso, es una NVIDIA RTX 3060.

En ese sentido, 
procedí a instalar los drivers/controladores
necesarios para que funcione.
Siguiendo las instrucciones del portal de openSUSE, 
instalé drivers viejos, 
pero desinstalarlos fue fácil para instalar los nuevos.
Un par de pasitos más y mi tarjeta gráfica estaba lista.

## Juegos

Ahora, aunque todo lo demás funcionaba como lo quería,
la verdadera prueba del fuego
sobre si podría volver a utilizar Linux tiempo completo
sería poner a funcionar mis videojuegos.
En particular, el juego más demandante que juego es Diablo IV:
decidí que, si podía ponerlo a funcionar, podría jugar cualquier otra cosa.
Si tienen la versión de Steam, el proceso es facilísimo.
Yo tengo la versión de Battle.net, 
así que explicaré lo que tuve que hacer; pero spoilers: tuve éxito.

El proceso comienza con instalar [Lutris](https://lutris.net/),
una plataforma con muchas herramientas para jugar en Linux.
Entre ellas, tienen botones de instalación fácil para muchos juegos.
Seguí los pasos en [el script de Diablo IV](https://lutris.net/games/diablo-iv/),
el cual instaló el lanzador de Battle.net.
Esto no funcionó de inmediato, 
así que explicaré qué debí hacer:
en el menú de configuración,
hay un sub-menú de "Actualizaciones",
donde permite actualizar la versión de Wine.
Hecho esto,
fue simple cuestión de seleccionar "GE-Proton (latest)"
en la pestaña de "Runner options" 
en la configuración de Battle.net en Lutris.
El lanzador se abrió y pude descargar y jugar el juego sin problemas.

<!-- - Tip: Si usan el monitor de recursos de KDE Plasma, no se lleven del monitor de carga del GPU. Solo dice de mi GPU integrado, al menos en mi caso. Usen `nvidia-smi` o el que les corresponda. -->

## Beneficios

Una pregunta válida es:
qué logras con todo esto?
Qué has ganado con toda esta migración?

Hay muchas cosas que me hacen considerar a Linux una mejor experiencia que Windows,
desde el punto de vista de usuario,
no solo como una persona técnica.
Una diferencia que se vuelve obvia 
es que es más fácil y mantenible
instalar y desinstalar software. 
Casi todo lo que necesito puede instalarse con un comando simple,
no tengo que ir a ninguna página de internet.
Asimismo, si desinstalo un programa,
puedo estar seguro de que no dejará folders vacíos
en lugares aleatorios.

Una diferencia que puede parecer menor,
pero es significativa,
es la estructura de carpetas.
En Windows, supuestamente tenemos nuestras carpetas de
`Documentos`, `Música`, `Imágenes`, etc.
Sin embargo, cualquiera que haya intentado trabajar con ellas
dirá de una vez que... bueno, no son prácticas.
Impredeciblemente, cualquier programa crea archivos y carpetas en ellas,
haciendo que se confundan con los archivos y carpetas que _nosotros_ como usuarios creamos.
Eso deja solo las carpetas de Descargas y el Escritorio como útiles.
En Linux simplemente no es el caso.
Las carpetas `Documents`, `Pictures`, `Music` y así sucesivamente 
solo tienen lo que nosotros decidimos poner en ellas.
Eso significa que es más fácil estar organizado. 

Hay cosas que son más técnicas 
y requieren un poco más de conocimiento para entender,
pero cuyo impacto se puede apreciar
incluso sin ser técnico.
En particular, una de las sorpresas más agradables que me he llevado 
ha sido que el sistema de archivo por excelencia de openSUSE,
llamado "Btrfs", no solo es más rápido, eficiente, 
y estable que el de Windows ("NTFS"),
sino que tiene capacidades muy útiles.
Entre otras, tiene un sistema de "instantáneas",
donde guarda el estado de los archivos de un momento en el tiempo,
como un tipo de respaldo automático.
Así, si sucede una corrupción de los archivos, 
es muy fácil retroceder a una versión anterior.
La que más me ha gustado ha sido lo que se llama "compresión transparente",
mediante la cual los archivos del disco se comprimen de manera automática,
ahorrando _mucho_ almacenamiento en el disco (≥ 13 GB)
a cambio de un costo imperceptible de rendimiento.

Y por supuesto, siendo yo una persona técnica,
puedo apreciar la muy mayor disponibilidad y compatibilidad
de herramientas de desarrollo y personalización.
Windows no se acerca al nivel de control 
que Linux provee al que está interesado en eso
sin requerirlo a los que no lo están.
Recientemente actualicé [mi página de software que uso],
así que si desean más información,
pueden encontrarla ahí.
