import os

# Definir la estructura de carpetas
project_structure = {
    "proyecto_turnos": {
        "backend": {
            "controllers": {},
            "middleware": {},
            "models": {},
            "routes": {}
        },
        "frontend": {
            "public": {},
            "src": {
                "components": {},
                "pages": {}
            }
        }
    }
}

# Función para crear carpetas recursivamente
def create_folders(base_path, structure):
    for folder, subfolders in structure.items():
        folder_path = os.path.join(base_path, folder)
        os.makedirs(folder_path, exist_ok=True)
        create_folders(folder_path, subfolders)

# Crear la estructura del proyecto
base_directory = "."  # Puedes cambiar esta ruta si quieres que se cree en otra ubicación
create_folders(base_directory, project_structure)

print("Estructura de carpetas creada correctamente.")
