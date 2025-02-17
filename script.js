document.addEventListener("DOMContentLoaded", () => {
    const teamList = document.getElementById("team-list");
    const showMoreButton = document.getElementById("show-more");
    let extraTeamsAdded = false;

    const teams = [
        { name: "Meeskond Alpha", description: "Kogenud arendajad.", technology: "Fullstack (JavaScript, Node.js)" },
        { name: "Meeskond Beta", description: "Noored ja ambitsioonikad koodikirjutajad.", technology: "Frontend (React, Vue)" }
    ];

    function displayTeams() {
        teamList.innerHTML = "";
        teams.forEach(team => {
            const div = document.createElement("div");
            div.classList.add("team-card");
            div.innerHTML = `
                <h3>${team.name}</h3>
                <p>${team.description}</p>
                <p><strong>Tehnoloogiad:</strong> ${team.technology}</p>
            `;
            teamList.appendChild(div);
        });
    }

    showMoreButton.addEventListener("click", () => {
        if (!extraTeamsAdded) {
            teams.push({ name: "Meeskond Gamma", description: "Mobiiliarenduse spetsialistid.", technology: "Mobiil (Flutter, Kotlin)" });
            teams.push({ name: "Meeskond Delta", description: "Backendi arendajad.", technology: "Backend (Python, Django)" });
            displayTeams();
            extraTeamsAdded = true;
            showMoreButton.disabled = true;
            showMoreButton.textContent = "Rohkem meeskondi pole";
        }
    });

    displayTeams();
});