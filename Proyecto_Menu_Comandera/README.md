# Menú Interactivo de Pedidos para Cadena de Comida Rápida

Este proyecto es una aplicación web que simula el proceso de realizar pedidos en una cadena de comida rápida. Desarrollado con **HTML**, **CSS**, **Bootstrap**, **JavaScript** y **LocalStorage**, ofrece una experiencia completa de gestión de pedidos. Además de la interfaz de usuario para la selección de productos, incorpora una pantalla de seguimiento de pedidos estilo **Kanban**, donde los pedidos avanzan a través de distintas etapas, permitiendo una visualización y confirmación desde la cocina en tiempo real.

## Funcionalidades Principales

- **Selección de Productos:** Los usuarios pueden navegar por el menú, organizado en categorías como hamburguesas, bebidas, postres, etc., y seleccionar los productos para añadirlos a su pedido.
- **Gestión del Pedido en Tiempo Real:** El resumen del pedido se actualiza instantáneamente, mostrando los productos seleccionados, sus precios y el total.
- **Almacenamiento en LocalStorage:** Los datos del pedido se almacenan temporalmente en **LocalStorage**, lo que permite a los usuarios mantener su selección incluso si recargan la página o salen temporalmente de la aplicación.
- **Seguimiento de Pedidos Estilo Kanban:** Una pantalla especial de "Gestión de Pedidos" permite visualizar el progreso de los pedidos desde que se generan hasta que son entregados. Los pedidos avanzan a través de diferentes columnas de estado (por ejemplo: "En Proceso", "Preparando", "Listo para Entrega"), actualizándose en tiempo real.
- **Interacción desde la Cocina:** El personal de cocina puede acceder a esta pantalla para confirmar la preparación de los pedidos. Al marcar un pedido como completado, se actualiza automáticamente tanto en la vista de pedidos del cliente como en la vista de la cocina.
- **Reloj de Progreso:** Cada pedido incluye un reloj que indica el tiempo transcurrido desde que fue generado, ayudando al personal a priorizar los pedidos y mantener un flujo eficiente de trabajo.
- **Diseño Responsive:** La interfaz está optimizada para funcionar tanto en dispositivos móviles como de escritorio, ofreciendo una experiencia fluida y adaptable a diferentes pantallas.

## Estructura de Pantallas

1. **Pantalla de Inicio:** Muestra un menú con categorías principales (hamburguesas, bebidas, acompañamientos) y acceso rápido a la selección de productos.

2. **Menú de Productos:** Lista de productos dentro de cada categoría, con imágenes, descripciones y precios. Los usuarios pueden seleccionar productos y ver más detalles antes de añadirlos al pedido.

3. **Resumen del Pedido:** Un panel lateral o modal muestra el pedido en tiempo real, con la opción de ajustar las cantidades o eliminar productos. El total del pedido se actualiza automáticamente.

4. **Pantalla de Gestión de Pedidos (Kanban):** Esta pantalla muestra todos los pedidos realizados en formato de tarjetas, organizadas en diferentes columnas que representan las etapas del pedido:
   - **Pendiente:** Pedido recibido, pero no procesado.
   - **En Proceso:** Pedido está siendo preparado.
   - **Listo para Entregar:** Pedido preparado, listo para ser entregado al cliente.
   
   Los pedidos se mueven entre las columnas en función de la interacción desde la cocina.
![menu digital](https://github.com/user-attachments/assets/c80a7c9f-b4b5-46f4-96ca-ae89df31d02c)

5. **Pantalla de Cocina:** El personal de cocina accede a esta pantalla para visualizar los pedidos en progreso y actualizar el estado de cada uno. Los cambios se reflejan en la vista de pedidos del cliente y el reloj se detiene al completar un pedido.

## Tecnologías Utilizadas

- **HTML:** Estructura del contenido y organización del sitio.
- **CSS:** Estilos personalizados y diseño responsivo.
- **Bootstrap:** Para el diseño responsive y componentes como botones, tarjetas y paneles.
- **JavaScript:** Para manejar la interactividad del sitio, la actualización de los pedidos en tiempo real, y la gestión del estado de los pedidos.
- **LocalStorage:** Almacenamiento temporal de los datos de los pedidos en el navegador, sin necesidad de una base de datos externa.
- **Kanban (Gestión de Pedidos):** Implementado con **JavaScript**, permite mover los pedidos entre columnas y gestionar su progreso de manera visual.

![menu de pedidos  en preparacion](https://github.com/user-attachments/assets/da1d46b4-0c15-4ec7-8dda-92302575daeb)



