#!/bin/bash

# Función para generar módulo, controlador y servicio
generate_module_structure() {
    module=$1
    
    echo "Generando módulo para: $module"
    
    # Crear el módulo
    nest g mo $module --flat
    
    # Crear el controlador dentro del módulo
    nest g co $module/$module --flat
    
    # Crear el servicio dentro del módulo
    nest g s $module/$module --flat

    echo "Módulo, controlador y servicio generados para: $module"
}

# Función principal para preguntar y generar módulos
add_modules() {
    while true; do
        # Preguntar el nombre del módulo
        read -p "Introduce el nombre del módulo que deseas agregar: " module_name
        
        # Llamar a la función para generar el módulo
        generate_module_structure $module_name
        
        # Preguntar si se desean agregar más módulos
        read -p "¿Quieres agregar otro módulo? (si/no): " add_more
        
        # Verificar la respuesta; si es 'no', se sale del bucle
        if [[ "$add_more" != "si" ]]; then
            echo "Finalizando la creación de módulos."
            break
        fi
    done
}

# Iniciar la función principal para agregar módulos
add_modules
