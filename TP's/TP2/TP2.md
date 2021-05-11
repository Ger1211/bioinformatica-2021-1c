**RETO I: Enumerá las diferencias que existen entre una célula procariota y eucariota**
 
 * Las células eucariotas poseen núcleo y las procariotas no.
 * Las células eucariotas son más grandes con respecto a las procariotas.
 * Las células procariotas poseen una pared celular mientra que las eucariotas una membrana celular.
 * Las procariotas ADN circular mientras las eucariotas su ADN se organiza en cromosomas.
 * Las eucariotas se dividen por mitosis celular mientras que las procariotas por fisión binaria.
 * Las procariotas possen organelas no membranosas mientras que las eucariotas poseen organelas divididas por membranas.
 * Las células procariotas son mas antiguas que las eucariotas.

**RETO II: Crea un programa sencillo en algún lenguaje de programación que conozcas que imprima una cadena de ARN codificante para el siguiente péptido (cadena corta de aminoácidos).**

**Sec1: ‘ATVEKGGKHKTGPNEKGKKIFVQKCSQCHTVLHGLFGRKTGQA'**

El ejercicio se encuentra resuelto en el archivo arn-codificante.js

**RETO III: Crea un programa sencillo en algún lenguaje de programación que conozcas que permita identificar las regiones promotoras de un gen, en una secuencia dada de ADN, considerando que tal región comienza y termina con la caja TATA**

Como invariante la cadena debe contener una región promotora
>
> function obtenerRegionPromotora(cadena) {
>   
>   return cadena.split('TATAAA')[1];
>
>}
>

**Diseñá un juego de mesa o un videojuego (hecho con la herramienta que más te guste) temático sobre expresión génica, con sus reglas y resúmen. Tené en cuenta que lo vas a tener que compartir con la clase. ¡El cielo es límite, a divertirse!**

Reglas del juego:

- El juego cuenta con un tablero, 80 cartas de bases nitrogenadas (20 de cada una), 10 proteinas, 126 aminoacidos (6 aminoacidos de cada uno) y  20 agentes desnaturalizantes (4 de cada uno)

1) Ambos jugadores roban una carta de proteina, esta les indicará que proteina deben formar.

2) Ambos jugadores roban 9 cartas de Bases nitrogenadas y 3 cartas del mazo de aminoacidos y desnaturalizantes.

3) Podran ir armando su proteinas bajando los aminoacidos correspondientes, para bajar un aminoacido, deben descartar las bases nitrogenadas (van al fondo del mazo de bases nitrogenadas) que conformen un aminoacido que tengan en la mano. Si no me sirve el aminoacido que tengo en la mano puedo descartarlo y robar 1 carta del mazo de aminoacidos y desnaturalizantes.

4) Si descarto un aminoacido y a mi oponente le sirve puede intercambiarlo por otro aminoacido que posea.

5) Una vez por turno deberan robar 1 carta de base nitrogenada y al siguiente turno 1 carta de aminoacidos o desnaturalizante.

6) Si tengo un agente de desnaturalización, puedo retrasar el trabajo del oponente al crear una proteina eliminando la cantidad de aminoacidos que digan en la descripción de la carta.

7) Cuando terminen de generar la proteina deberan finalizar el juego utilizando las bases nitrogenadas para generar el codon de STOP

8) El primero que genera el codon de STOP para la proteina que le tocó gana el juego.


