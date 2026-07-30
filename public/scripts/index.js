import createCards from "./cards.js";

const btnSelecoes = document.getElementById('btnSelecoes');
const main = document.getElementById('conteudo');

btnSelecoes.addEventListener('click', async (event) => {
    event.preventDefault();
    main.innerHTML = '';
    const section = createSection("Seleções");
    await createCards(section);
    main.appendChild(section);
});

function createSection(titulo){
    const section = document.createElement('section');
    section.classList.add('shadow-sm', 'mx-auto', 'w-7/8');
    section.innerHTML = `
        <div class="bg-nightblue p-2">
            <h2 class="font-bold text-icewhite text-lg text-center">${titulo}</h2>
        </div>`;
    return section;
}