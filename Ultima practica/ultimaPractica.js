/* 
    Nombre:Roberto Timal Ruiz
    ID: 000141192
    Correo: strtimalru@upana.edu.gt
*/
document.addEventListener("DOMContentLoaded", () => {
    const fetchUserButton = document.getElementById("fetchUser");
    const saveUserButton = document.getElementById("saveUser");
    const fullNameField = document.getElementById("fullName");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const profilePicture = document.getElementById("profilePicture");
    const savedUsersSelect = document.getElementById("savedUsers");
 
    // Cargar usuarios guardados del localStorage
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.forEach(user => addUserToSelect(user));
 
    // Función para obtener un usuario aleatorio
    fetchUserButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const user = data.results[0];
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const phone = user.phone;
            const picture = user.picture.large;
 
            // Rellenar el formulario
            fullNameField.value = fullName;
            emailField.value = email;
            phoneField.value = phone;
            profilePicture.src = picture;
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
        }
    });
 
    // Función para guardar un usuario
    saveUserButton.addEventListener("click", () => {
        const user = {
            fullName: fullNameField.value,
            email: emailField.value,
            phone: phoneField.value,
            picture: profilePicture.src,
        };
 
        // Validar datos
        //completar codigo aqui
        if (!user.fullName || !user.email  || !user.phone || !user.picture){
            alert("Por favor, completa todos los campos antes de guardar.");
            return;
        }
 
        // Guardar en localStorage
        //Completar còdigo
        savedUsers.push(user);
        localStorage.setItem("users", JSON.stringify(savedUsers));
        
        // Agregar al select
        addUserToSelect(user);
        alert("Usuario guardado exitosamente.");
    });
 
    // Función para agregar un usuario al select
    //Completar còdigo aqui
    function addUserToSelect(user){
        const option = document.createElement("option");
        option.text = user.fullName;
        option.value = user.email;
        savedUsersSelect.add(option);
    }
});