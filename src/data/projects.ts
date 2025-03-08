import ecommerce from "../imgs/imgs_projects/ecommerce.png"
import gallery from "../imgs/imgs_projects/gallery.png"
import loginsignup from "../imgs/imgs_projects/loginsignup.png"
import playmusic from "../imgs/imgs_projects/playmusic.png"
import spacenews from "../imgs/imgs_projects/noticias.png"
import previsaotempo from "../imgs/imgs_projects/previsaotempo.png"
import cep from "../imgs/imgs_projects/cep.png"
import { ProjectsType } from "../types/ProjectsType";

const projects: ProjectsType = [
    {
        name: "Ecommerce",
        description: "Projeto ecommerce desenvolvido com React, Vite, Typescript, Tailwindcss, Redux e React Query. Esse projeto tem o intutito de mostrar as funcionalidades de um ecommerce front-end.",
        github: "https://github.com/jonathasdias/ecommerce.git",
        view: "https://webline-ecommerce.netlify.app/",
        image: ecommerce,
    },
    {
        name: "Gallery images page",
        description: "Site desenvolvido com html, css e javascript. É um site de exibição de imagens.",
        github: "https://github.com/jonathasdias/gallery-images-page.git",
        view: "https://gallery-images-page.netlify.app/",
        image: gallery,
    },
    {
        name: "Page login-signup",
        description: "É um site desenvolvido com html, css e javascript. Esse é um site para mostrar o design de uma página de login e signup.",
        github: "https://github.com/jonathasdias/page-login-signup.git",
        view: "https://site-signup-login.netlify.app/",
        image: loginsignup,
    },
    {
        name: "Play Music",
        description: "Esse é um site de gerenciamento de musicas, desenvolvido com html, tailwindcss e javascript.",
        github: "https://github.com/jonathasdias/gerenciador-de-musicas.git",
        view: "https://gerenciador-de-musicas.netlify.app/",
        image: playmusic,
    },
    {
        name: "Spacenews",
        description: "Esse é um site de noticias relacionadas ao espaço. Desenvolvido com as tecnologias: React js + vite e Tailwindcss.",
        github: "https://github.com/jonathasdias/site-de-noticias-espaciais.git",
        view: "https://site-spacenews.netlify.app/",
        image: spacenews,
    },
    {
        name: "Previsao do tempo",
        description: "É um projeto de mostrar o clima de cidades, desenvolvido em html, css e javascript.",
        github: "https://github.com/jonathasdias/previsao-do-tempo.git",
        view: "https://previsao-tempo-cidade.netlify.app/",
        image: previsaotempo,
    },
    {
        name: "Consulta de cep e auto complete formulario",
        description: "Projeto de consulta de cep e auto complete de formulario através do cep. Desenvolvido com html, javascript e tailwindcss.",
        github: "https://github.com/jonathasdias/consulta-de-cep-e-auto-complete-formulario.git",
        view: "https://check-zipcode.netlify.app/",
        image: cep,
    },
]

export default projects;