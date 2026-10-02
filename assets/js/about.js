document.addEventListener('DOMContentLoaded', () => {
    loadStacks();
    loadEducations();
    loadJobs();
})

//  Load Stack List
function loadStacks() {
    fetch('./assets/data/stacks.json')
        .then(response => response.json())
        .then(datas => {
            if (datas.length == 0) {
                console.log('Aucune compétence trouvée')
            }
            else {
                datas.forEach(data => {
                    const div = document.createElement("div");
                    div.classList = "item";
                    div.innerHTML = `                    
                    <img src="./assets/images/${data.icon}.png" alt="Icône ${data.title}" />
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    <ul>
                        ${data.stacks.map(stack => `
                                <li>${stack}</li>
                            `).join("")}
                    </ul>
                    `
                    document.querySelector("#stack-list").append(div)
                });
            };
        });
};

// Load Education List
function loadEducations() {
    fetch('./assets/data/educations.json')
        .then(response => response.json())
        .then(datas => {
            if (datas.length == 0) {
                console.log('Aucune formation trouvée')
            }
            else {
                datas.forEach(data => {
                    const div = document.createElement("div");
                    div.classList = "item";
                    div.innerHTML = `                    
                    <div class="category">
                        <img src="./assets/images/${data.category}.png" alt="Icône ${data.title}" >
                        <span>${data.category}</span>
                    </div >
                    <h3>${data.title}</h3>
                    <p>${data.school} - ${data.date}</p>
                    `
                    document.querySelector("#education-list").append(div)
                });
            };
        });
};

// Load Job List
function loadJobs() {
    fetch('./assets/data/jobs.json')
        .then(response => response.json())
        .then(datas => {
            if (datas.length == 0) {
                console.log('Aucun emploi trouvé')
            }
            else {
                datas.forEach(data => {
                    const div = document.createElement("div");
                    div.classList = "item";
                    div.innerHTML = `
                    <div div class= "category" >
                        <img src="./assets/images/emploi.png" alt="Icône emploi">
                        <span>emploi</span>
                    </div>
                    <h3>${data.title}</h3>
                    <p>${data.enterprise} - ${data.date}</p>
                    <p>${data.description}</p>
                    `
                    document.querySelector("#job-list").append(div)
                });
            };
        });
}