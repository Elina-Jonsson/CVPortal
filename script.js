document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");
    const buttons = document.querySelectorAll("button");

    const projectInfo = {
        fourfinance: {
            title: "FourFinance",
            description:
            "A banking app that helps users manage savings and track expenses.",
        },
        xmas: {
            title: "X-mas Games",
            description: "A fun Christmas-themed game built with C#.",
        },
        panik: {
            title: "P-anik",
            description:
            "A smart parking app that helps users find available parking spots.",
        },
        school: {
            title: "Highschool",
            description:
            "A program to help admin to organize students, classes, teachers etc."
        }
    };

    buttons.forEach((button) => {
        const project = button.getAttribute("data-project");
        if (!project || !projectInfo[project]) return; 
        button.addEventListener("click", () => {
            modalTitle.textContent = projectInfo[project].title;
            modalDescription.textContent = projectInfo[project].description;
            modal.style.display = "flex";
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const selfPic = document.getElementById("self-pic");

    if (localStorage.getItem("easterEggBackground") === "true") {
        document.body.classList.add("easter-bg");
    }

     if (selfPic) {
        selfPic.addEventListener("click", () => {
            const activated = !document.body.classList.contains("easter-bg");
            document.body.classList.toggle("easter-bg");

            if (document.body.classList.contains("easter-bg")) {
                localStorage.setItem("easterEggBackground", "true");
                // show alert one time
                if (!localStorage.getItem("easterEggAlertShown")) {
                    alert("🎉 Congrats, you found one Easter egg!");
                    localStorage.setItem("easterEggAlertShown", "true");
                }
            } else {
                localStorage.removeItem("easterEggBackground");
            }
        });
    }

});

(function(){
    // dynamic modul
    const modal = document.createElement('div');
    modal.id = 'secret-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p></p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // listen to keyboard
    const secretCode = ['9','5','9','5'];
    let input = [];

    document.addEventListener('keydown', (e) => {
        input.push(e.key);
        if(input.length > secretCode.length){
            input.shift(); // håll bara de senaste 4 tangenterna
        }

        if(input.join('') === secretCode.join('')){
            modal.style.display = 'flex';
            modal.querySelector('p').textContent = "🎉 Surprise! You found an easter egg!";
        }
    });
})();