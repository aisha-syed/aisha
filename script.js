
let projectsLoaded = false;

async function loadProjects() {
    if (projectsLoaded) {
        alert('Projects already loaded!');
        return;
    }

    projectsLoaded = true;
    const projects = await fetch('http://127.0.0.1:5500/Website%20Series/Week%203/fakeAPI.json').then(resp => resp.json());
    console.log("fetch successful");
    const projectsContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        const projectSkills = project.skills.map(skill => `<li>${skill}</li>`).join('\n');
        projectElement.innerHTML = `
            <img src="${project.picture}" alt="${project.name}" />
            <h3><a href="${project.link}" target="_blank">${project.name}</a></h3>
            <p>${project.description}</p>
            <ul>${projectSkills}</ul>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

addEventListener('scroll', async () => {
    const scrollButton = document.createElement('a');
    scrollButton.classList.add('scroll-button');
    scrollButton.href = '#';
    scrollButton.innerText = 'Up';
    document.body.appendChild(scrollButton);
    await new Promise(r => setTimeout(r, 4000));
    scrollButton.remove();
});
