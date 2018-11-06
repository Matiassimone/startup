# Topic 4 - React



### Elecciones del Topic


:black_large_square: **LocalStorage**

Decidi utilizar **LocalStorage** para almacenar los datos de las peliculas y que estas se puedan levantar del **LocalStorage** cuando la App se inicia, ademas las peliculas se almacenan con un ID unico el cual puede utilizarse para editar o borrar.



### Elecciones Componentes


:black_large_square: **CustomForm**

Basandome en la idea de la reutilizacion de los componentes, decidi utilizar **CustomForm** tanto para agregar nuevas Movies, como para actualizarlas.

Por lo que, al recibir las props con los datos de la pelicula a actualizar, este autocompleta los input del formulario para que el usuario pueda actualizar su movie.


### Elecciones Redux


:black_large_square: **Redux**

Se utilizo redux con un Storage donde se almacena los estados de la aplicacion y ademas se utilizo un ActionCreators para simplificar la lectura del codigo.


:black_large_square: **React-Redux**

Se utilizo React-Redux para crear un componente presentacional en donde se renderizan las Movies. 