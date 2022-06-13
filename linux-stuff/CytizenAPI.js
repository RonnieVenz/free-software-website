// Switch para modo oscuro

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('change', () => {
    let mainContent = document.body;
    mainContent.classList.toggle('dark');
});

// API de Cytizen

let dist = document.getElementById('distro');
let dist_v = document.getElementById('version-distro');
let dist_de = document.getElementById('desktop-env');
let dist_pkg = document.getElementById('distro-pkg');
let dist_desc = document.getElementById('distro-description');

let getDist_btn = document.getElementById('get-dist');

const distDB = "127.0.0.1:8080/api/distros";

let getDist = () => {
    fetch(distDB)
    .then((data) => {
        data.json();
        console.log(data.json());
    })
    .then((item) => {
        dist.innerHTML = item.name;
        dist_v.innerHTML = item.current_version;
        dist_de.innerHTML = item.desktop_environment;
        dist_pkg.innerHTML = item.package_manager;
        dist_desc.innerHTML = item.description;
    });
}

window.addEventListener("load", getDist);
getDist_btn.addEventListener("click", getDist);