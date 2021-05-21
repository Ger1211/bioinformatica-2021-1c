**RETO I: Intentemos, entonces alinear estas dos palabras, para comprender mejor el problema. Alineá en la siguiente table de comparaciones las palabras "BANANA" y "MANZANA".**

1)
>BANANA
>MANZANA

2)
>BAN-ANA
>MANZANA

3)
> BANANA
>MANZANA

La manera en la que consigo mas aciertos es la opción 2, pero eso no significa que sea la mejor ya que podria tener algún tipo de penalización por usar un gap en esa posición que terminara afectando el puntaje de la identidad.

**RETO II: En la siguiente tabla probá distintos alineamientos para las palabras "ANA" y "ANANA". Verás que en el margen superior izquierdo aparece un valor de identidad calculado para cada alineamiento que intentes.**

1)
>ANA--
>ANANA

Se logra una identidad de 0.6

2)
>A--NA
>ANANA

Se logra una identidad de 0.6

3)
>-A-NA
>ANANA

Se logra una identidad de 0.4

4)
>--ANA
>ANANA

Se logra una identidad de 0.6

Los puntajes no son todos iguales, y al igual que en el reto anterior la identidad se podría ver afectada por la penalización por los gaps que estamos introduciendo para mejorar el puntaje. 
Una forma que se me ocurre de calcularlo es dándole un valor a las coincidencias y diferencias para al finalizar el alineamiento tenga un puntaje calculado.

**RETO III: En la siguiente tabla probá distintos alineamientos para las palabras "ANA" y "ANANA". Verás que en el margen superior izquierdo aparece un valor de identidad calculado para cada alineamitno que intentes y un botón para cambiar la penalidad que se le otorga a dicho para el cálculo de identidad.**

Si la penalidad es 0 se nota que no influye en el valor obtenido para el cálculo de identidad, sin importar si el par de gaps está al comienzo, en el medio o al final.
Ahora bien, si aumento la penalidad a 1 puedo ver que ahora si tiene inferencia en el valor calculado para la identidad logrando que por cada gap se descuente un 0.2 al valor final (es decir, resta en lugar de sumar 0 o positivamente). 
De igual manera si aumento la penalidad a n el valor que se descuenta está dado por el cálculo de 
> -( n * 0.2) 
De manera que a medida que aumenta la penalidad obtengo una identidad más negativa. 

A mayor penalidad es más difícil lograr una identidad positiva para cualquier alineamiento dado sin importar cuales sean las cadenas a comparar.

**RETO IV: En la siguiente tabla probá distintos alineamientos para las secuencias nucleotídicas. Podrás ver las traducciones para cada secuencia.**

Lo que puedo observar en este caso es que puedo lograr una identidad de ~0.77 con el siguiente alineamiento
>TGC-GA-GG
>TGCCGAAGG

Como tengo dos pares de codones incompletos no se puede generar una traducción para cada codón.
En este caso si aumentamos la penalidad n veces se obtiene una identidad menor dada por el cálculo
> -( n * 0.1^)

Otra cosa que note es que cuando se comparan las traducciones dada por los codones la comparativa entre un gap y un aminoácido cualquiera es mejor que dos aminoácidos que son distintos.

**RETO VI: Utilizando la herramienta interactiva desarrollada por el Grupo de Bioinformática de Freiburg probá distintos ​Gap penalties para el ejemplo propuesto y observá lo que ocurre. Interpretando la recursión, explicá con tus palabras de dónde salen los valores de la matriz  que se construye. ¡Esquematiza tus conclusiones!

- Primero defino cuanto quiero que valga el match, dismatch y el gap. 
- Luego pongo una cadena en el eje x y otra en el eje y quedando de la siguiente manera
|D |  | A1| A2| C3| G4|
|  | 0|   |   |   |   |
|A1|  |   |   |   |   |
|A2|  |   |   |   |   |
|T3|  |   |   |   |   |
|C4|  |   |   |   |   |
|G5|  |   |   |   |   |	


Luego iniciando desde el 0 sumo por cada columna, el valor del gap elegido para la columna y fila 2. 
Para este caso el valor del gap fue -2

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |   |   |   |   |
|A2|-4 |   |   |   |   |
|T3|-6 |   |   |   |   |
|C4|-8 |   |   |   |   |
|G5|-10|   |   |   |   |

Ahora siguiendo el sistema de ecuaciones planteado por la recursión veo en que caso caigo

* Si ai == bi  entonces Di-1, j-1   +   m   
* Si ai != bi  entonces Di-1, j-1   +  d

Donde m es el valor del match elegido (para este caso es 1) y d es el valor de dismatch (para este caso es -1).
Analizo el primer caso y veo  que tanto el valor de i como de j es 1. Es por eso le corresponde la primera ecuación y me queda que el valor calculado es 0 + 1 ya que 0 lo denota la posición de la matriz D(0,0) y 1 por ser match.
Entonces llego a que el valor en la comparación entre A1 y A1 es = 1

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |  1|   |   |   |
|A2|-4 |   |   |   |   |
|T3|-6 |   |   |   |   |
|C4|-8 |   |   |   |   |
|G5|-10|   |   |   |   |

Ahora procedo con el caso a comparar A1 y A2. Como i y j son distintos, le coprresponde la segunda ecuación y me queda que el valor calculado es _ + (-1) ya que el _ lo denota la posición de la matriz D(0,1) y -1 por ser dismatch.
Entonces llego a que el valor en la comparación entre A1 y A1 es = _

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |  1|   |   |   |
|A2|-4 |   |   |   |   |
|T3|-6 |   |   |   |   |
|C4|-8 |   |   |   |   |
|G5|-10|   |   |   |   |

Siguiendo esta lógica y esos cálculos se completa la matriz.

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |  1| -1| -3| -5|
|A2|-4 |   |  2| -2| -6|
|T3|-6 |   | -2|  1| -3|
|C4|-8 |   |   | -1|  0|
|G5|-10|   |   | -5|  0|

**RETO VII: calculá el E-value y % identidad utilizando el programa Blast de la siguiente secuencia input usando 20000 hits, un e-value de 100 y tomando aquellos hits con un mínimo de 70% cobertura. Observe y discuta el comportamiento de : E-value vs. % id, Score vs % id, Score vs E-value**

Secuencia: VVGGLGGYMLGSAMSRPIIHFGSDYEDRYYRENMHRYPNQVYYRPMDEYSNQNNFVHDCVNITIKQHTV TTTTKGENFTETDVKMMERVVEQMCITQYERESQAYYQRGSSMVLFSSPPVILLISFLIFLIVG

Estos valores están relacionados cuando varia uno, varian también los otros dos. 
El e-value es mi valor de referencia para saber que tan certera es esa proteina en esa cadena, cuando menor sea el valor mas confianza nos transmite. 
Corriendo en blast la proteina que tiene el menor e-value también tiene el mayor score y porcentaje de identidad, es decir que era la misma proteína. 
De igual forma, hay varias secuencias que disminuye el e-value pero el porcentaje de identidad sigue siendo 100%, viendo esto entre el score para desempatar y así puedo ver cual es la proteina que comparada con toda esta base de datos es la mas cercana o directamente es la misma

**RETO VIII: Realizá nuevas búsquedas usando la mitad de la secuencia problema y para un cuarto de la secuencia original. Compará los gráficos obtenidos.¿Qué conclusiones puede sacas?**

Al usar la mitad de la secuencia, cambiaron los valores. No solo el e-value más confiable es mayor que el valor con la cadena original, sino que el valor máximo también es mucho menor. Estos cambios también se reflejan con el resultado ya que también cambio la proteína con un coverage del 100%, antes era "prion protein precursor [Homo sapiens]" ahora con la secuencia por la mitad es "Chain A, Major prion protein". 
Todos estos valores se ven también y más agraviados cuando menor sea la longitud de la cadeana, con un cuarto de la misma el e-value paso de ser un valor negativo a ser 85 el max valu de casi 300 puntos a 23 pero la identidad como en los casos anteriores es 100% y da como resultado "biotin--[acetyl-CoA-carboxylase] ligase [Halorubrum saccharovorum]". Algo también para resaltar que llama mucho la atención es que los primeros dos resultados eran proteinas que se encontraban en el humano y esta última es una bacteria, es decir que dependiendo de la longitud de la cadena no solo altera los valores de evalu y maxscore sino de que estoy buscando y en que organismo aparece.

**RETO IX: Utilizando ​BLAST utilice búsquedas de similitud secuencial para identificar a la siguiente proteína:MIDKSAFVHPTAIVEEGASIGANAHIGPFCIVGPHVEIGEGTVLKSHVVVNGHTKIGRDNEIYQFASIGEVNQDLKYAGEPTRVEIGDRNRIRESVTIHRGTVQGGGLTKVGSDNLLMINAHIAHDCTVGNRCILANNATLAGHVSVDDFAIIGGMTAVHQFCIIGAHVMVGGCSGVAQDVPPYVIAQGNHATPFGVNIEGLKRRGFSREAITAIRNAYKLIYRSGKTLDEVKPEIAELAETYPEVKAFTDFFARSTRGLIR**

Pertenece a la familia de [Escherichia coli K-12], es decir es una enzima. La función de esta proteina es la de catalizar reacciones químicas. 
Según NCBI taxonomy browser, esta enzima pertenece a la familia de los enterobacterias.

Según BLAST utilizando la base de datos PDB se encuentran unas 30 coincidencias de secuencias.
Ahora bien, si cambio la base de datos a "nr" nos encontramos con que las coincidencias son mayores a 100 y encuentra una mayor coincidencia con la familia de Protoebacterias.

**RETO X: Realizá una nueva corrida del BLASTp, utilizando la misma secuencia, pero ahora contra la base de datos PDB. ¿Se obtienen los mismo resultados? ¿Qué tipo de resultados (hits) se recuperan? ¿Cuándo nos podría ser útil este modo de corrida?**

Luego de realizar la comparación de la secuencia contra PDB da otro resultado, no podría ser que es totalmente diferente pero si que no es el mismo "UDP N-ACETYLGLUCOSAMINE O-ACYLTRANSFERASE" vs "UDP N-ACETYLGLUCOSAMINE O-ACYLTRANSFERASE" en la primera hay siete posibles organismo que poseen esta proteina mientras que en la segunda solo dos, pero esos dos son dos de los siete de la primer cadena. 
Viendo esto puedo asumir que en las bases de datos tienen cargados ambas cadenas pero con diferentes mutaciónes o datos de la mismas, ya que en ambas queries me dieron 100% de identidad, es decir que esa cadena era la misma que me estaba dando pero el resultado no es el mismo.