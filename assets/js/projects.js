document.addEventListener('DOMContentLoaded', () => {
    loadProjects()
})

//  Load Project List
function loadProjects() {
    fetch('./assets/data/projects.json')
        .then(response => response.json())
        .then(datas => {
            if (datas.length == 0) {
                console.log('Aucun projet trouvé')
            }
            else {
                datas.reverse().forEach(data => {
                    const div = document.createElement("div");
                    div.classList = "item";
                    div.innerHTML = `                    
                    <img src="./assets/images/screenshot-${data.image_name}.png" alt="Screenshot title">
                    <div>
                        <ul>
                            ${data.technologies.map(technology => `
                            <li>${technology}</li>
                            `).join('')}
                        </ul>
                        <h3>${data.title}</h3>
                        <p>${data.description}</p>
                        <div>
                            <a target="_blank" href="${data.github_url}" class="btn btn-secondary">
                            <img src="./assets/images/icon-git.png" alt="Icône GitHub" />
                            Lien GitHub
                            </a>
                            <a target="_blank" href="${data.demo_url}" class="btn btn-primary">
                            Voir la démo →
                            </a>
                        </div>
                    </div>
                    `
                    document.querySelector("#project-list").append(div)
                });
            };
        });
};