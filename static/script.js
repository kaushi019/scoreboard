document.addEventListener("DOMContentLoaded", function () {
    window.addPlayer = function () {
        const table = document.getElementById("scoreboard-body");
        const row = table.insertRow();

        // Player Name Column
        const nameCell = row.insertCell(0);
        nameCell.classList.add("player-name-cell");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Enter Name";
        nameInput.classList.add("name-input");

        const editButton = document.createElement("span");
        editButton.innerText = "Edit";
        editButton.classList.add("edit-btn");
        editButton.style.opacity = "0"; // Initially hidden

        // Save name on pressing Enter
        nameInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                if (nameInput.value.trim() !== "") {
                    nameInput.disabled = true;
                    editButton.style.opacity = "0.3"; // Show Edit
                } else {
                    alert("Player name cannot be empty!");
                }
            }
        });

        // Edit player name when clicking "Edit"
        editButton.onclick = function () {
            nameInput.disabled = false;
            nameInput.focus();
            editButton.style.opacity = "0"; // Hide Edit while editing
        };

        nameCell.appendChild(nameInput);
        nameCell.appendChild(editButton);

        // Total Score Column
        const totalScoreCell = row.insertCell(1);
        totalScoreCell.innerText = '0'; // Initial total score

        // Points Input Column
        const pointsCell = row.insertCell(2);
        const pointsInput = document.createElement("input");
        pointsInput.type = "number";
        pointsInput.placeholder = ""; // Set empty placeholder
        pointsInput.classList.add("points-input");

        // When user presses 'Enter', update Total Score
        pointsInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                let totalScore = parseInt(totalScoreCell.innerText) || 0;
                let points = parseInt(pointsInput.value) || 0;
                totalScoreCell.innerText = totalScore + points; // Update total score
                pointsInput.value = ""; // Reset points input
            }
        });

        pointsCell.appendChild(pointsInput);
    };
});
