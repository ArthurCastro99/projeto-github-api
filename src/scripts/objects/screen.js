const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    this.userProfile.innerHTML = `
                  <div class="info">
                    <img src="${user.avatarUrl}" 
                    alt="Foto do perfil do usuário" />
                      <div class="data">
                        <h1> ${user.name ?? "Não possui nome cadastrado"} </h1>
                        <p> ${
                          user.bio ?? "Não possue biografia cadastrada"
                        } </p>
                        <p> &#128101; ${user.followersUrl ?? 0} Seguidores</p>
                        <p> &#128100; ${user.followingUrl ?? 0} Seguindo</p>
                      </div>
                  </div>
               `;

    console.log(user);

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `
          <li><a href="${repo.html_url}" target="_blank">${repo.name}<br>
          <br>
            <i>&#127860; ${repo.forks_count ?? "Sem forks"}</i>
            <i>&#10024; ${repo.stargazers_count ?? "Sem estrelas"}</i>
            <i>&#128064; ${repo.watchers_count ?? "Não watchers "}</i>
            <i>&#128187; ${repo.language ?? "Sem linguagem"}</i></a>
          </li>
          `)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
        <div class="repositories section">
          <h2>Repositórios</h2>
          <ul>
          ${repositoriesItens}
          </ul>
           
        </div>
      `;
    }
    console.log(repositoriesItens);

    const eventosFiltrados = user.events.filter(
      (event) => event.type === "PushEvent" || event.type === "CreateEvent"
    );

    let eventosHTML = "";

    eventosFiltrados.forEach((event) => {
      if (event.type === "PushEvent") {
        eventosHTML += `
        <li>
          <h3>${event.repo.name} </h3> 
          <p> - ${
            event.payload.commits?.[0]?.message ||
            "Sem mensagem no último commit."
          }
          </p>
        </li>
        `;
      } else if (event.type === "CreateEvent") {
        eventosHTML += `
        <li>
          <h3>${event.repo.name} </h3> 
          <p> - ${event.payload.ref_type || "Sem mensagem no último commit."}
          </p>
        </li>`;
      }
    });

    if (eventosHTML) {
      this.userProfile.innerHTML += `
          <div class="events section">
            <h2>Eventos</h2>
            <ul>
              ${eventosHTML}
            </ul>
          </div>
      `;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`;
  },
};

export { screen };
