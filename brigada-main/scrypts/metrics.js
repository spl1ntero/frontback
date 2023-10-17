document.addEventListener("DOMContentLoaded", function () {
    const combinedData = localStorage.getItem("combinedData");
    if (!combinedData) {
        window.location.href = "index.html";
    } else {
        const userData = JSON.parse(combinedData).user;
        const healthData = JSON.parse(combinedData).health;
        const userContainer = document.getElementById("user-info");
        const healthContainer_symptoms = document.getElementById("health_symptoms-info");
        const healthContainer_health_condition = document.getElementById("health_condition-info");
        const healthContainer_pulse = document.getElementById("health_pulse-info");
        const healthContainer_sugar = document.getElementById("health_sugar");


        userContainer.innerHTML = `
            <a class="navbar-text mx-auto no-underline">${userData.username}</a>
        `;

        healthContainer_health_condition.innerHTML = `
            <p><strong>чувства:</strong> ${healthData.health_condition}</p>          
        `;

        healthContainer_symptoms.innerHTML = `
            <p><strong>Симптомы болезни:</strong> ${healthData.symptoms}</p>            
        `;

        healthContainer_pulse.innerHTML = `
            <p><strong>Пульс:</strong> ${healthData.pulse}</p>         
        `;

        healthContainer_sugar.innerHTML = `
            <p><strong>Сахар в крови:</strong> ${healthData.sugar}</p>       
        `;
    }
});
