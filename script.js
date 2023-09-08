document.addEventListener("DOMContentLoaded", function () {
    const reminderForm = document.getElementById("reminder-form");
    const reminderList = document.getElementById("reminder-list");

    reminderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const reminderText = document.getElementById("reminder").value;
        const reminderDate = document.getElementById("reminder-date").value;

        if (reminderText.trim() === "" || reminderDate.trim() === "") {
            alert("Please enter both reminder text and date/time.");
            return;
        }

        const reminderItem = document.createElement("li");
        reminderItem.innerHTML = `
            ${reminderText}
            <span>${reminderDate}</span>
        `;

        reminderList.appendChild(reminderItem);

        // Clear form inputs
        document.getElementById("reminder").value = "";
        document.getElementById("reminder-date").value = "";
    });
});
