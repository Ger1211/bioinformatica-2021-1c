**RETO I: Podrías buscar un ejemplo de macromoléculas que almacenen información sobre la "identidad" de un organismo dado?**

Un ejemplo de macromolécula que almacena información son los ácidos nucleicos, entre los cuales encontramos al ADN y ARN como los mas conocidos.

**RETO II: Proponé una forma de expresar la información contenida en la estructura primaria de las proteínas usando tipos de datos de los lenguajes de programación que conocés**

Puede ser una cadena de caracteres en el que cada uno indica un aminoácido diferente segun la nomenclatura de una letra.

**RETO III: ¿En qué tipo de datos podrías expresar la información de la estructura terciaria proteica?**

Podria usar un objeto con información sobre los ejes cartesianos para poder dibujar una proteina en 3D.

**RETO IV Rosalind Franklin es una científica muy relevante, que tuvo menos reconocimiento del merecido.¿Cuáles fueron sus contribuciones en este campo? ¿Qué nos cuenta su historia acerca del mundo de la ciencia?**

Rosalind Franklin fue una química y cristalógrafa británica quien fue imprescindible para el avance de la comprensión de la estructura del ADN y diversos campos de la ciencia. Una vez concluidos sus estudios sobre el ADN dirigio varias investigaciones sobre las estructuras moleculares de los virus (Como el virus de la polio y virus del mosaico del tabaco). Lamentablemente fallecio a la edad de 37 sin ser lo suficientemente reconocida por su gran aporte a la humanidad y la ciencia.

**RETO V:Proponé en pseudocódigo un programa que prediga la estructura secundaria que adoptará cada residuo(aminoácido) de la secuencia proteica dada, especificandola como H (si es una hélice), B (si es una hoja betaplegada) y L (si es un bucle o loop).**

>
>proteina = [Glu, Ala, Leu, Arg, His]
>
>predecirEstructuraSecundaria(proteina)
>  
> estructura
>  
>   for aminoacido in proteina
>   
>     estructura += aminoacido.clasificacion
>  
>   return estructura
>   

Cada aminoacido sabe su clasificacion, por lo que la estructura podria retornar una cadena "HHBHL" por ejemplo.

**RETO VI: ¿Qué hace distintos a dos individuos de una especie? Propone una forma de corroborar tu respuesta realizando un diagrama de un posible método computacional para dicho fin**

Lo que hace distintos a dos individuos de una especie es el ADN. Podriamos comparar las cadenas de nucleotidos de cada individuo mediante un programa:

>  adn1 = [CG,AT,CG,CG,CG,AT...]
>  
>  adn2 = [CG,AT,CG,CG,CG,AT...]
>  
> ADNsIguales(adn1, adn2)
>  
>  for (i= 0; i < adn1.size; i++)
>   
>     if !(adn1[i].equals(adn2[i]))
>     
>       return false
>  
>   return true

