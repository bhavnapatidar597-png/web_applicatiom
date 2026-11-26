// Shuruat ke liye 2 sample entries
let patients = [
    { token: "T-101", name: "Riya Sharma", dept: "General Physician", status: "Done" },
    { token: "T-102", name: "Aman Verma", dept: "Dental", status: "Waiting" }
];

const form = document.getElementById("bookingForm");
const tableBody = document.getElementById("tableBody");
const waitCount = document.getElementById("waitCount");

// Table ko screen par dikhane ka function
function showQueue() {
    tableBody.innerHTML = "";
    let waiting = 0;

    for (let i = 0; i < patients.length; i++) {
        let p = patients[i];
        if (p.status === "Waiting") {
            waiting++;
        }

        let row = `<tr>
            <td><b>${p.token}</b></td>
            <td>${p.name}</td>
            <td>${p.dept}</td>
            <td>${p.status}</td>
            <td>
                ${p.status === "Waiting"
                ? `<button class="done-btn" onclick="completePatient(${i})">Done</button>`
                : "✓"}
            </td>
        </tr>`;

        tableBody.innerHTML += row;
    }

    waitCount.innerText = waiting;
}

// Naya patient add karne ke liye
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("name").value;
    let deptInput = document.getElementById("dept").value;
    let newToken = "T-" + (101 + patients.length);

    patients.push({
        token: newToken,
        name: nameInput,
        dept: deptInput,
        status: "Waiting"
    });

    form.reset();
    showQueue();
});

// Patient ka status 'Done' karne ke liye
function completePatient(index) {
    patients[index].status = "Done";
    showQueue();
}

// Page load hote hi list dikhayein
showQueue();