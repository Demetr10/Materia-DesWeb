const listaPosts = [{

    titulo: "titulo",
    descricao: "shdkhkkhksdkalkhlkdhkldkhfhkfkd",
    imgUrl: "img.webp",
},
{
    titulo: "titulo",
    descricao: "shdkhkkhksdkalkhlkdhkldkhfhkfkd",
    imgUrl: "img.webp",
},
{
    titulo: "titulo",
    descricao: "shdkhkkhksdkalkhlkdhkldkhfhkfkd",
    imgUrl: "img.webp",
},
{
    titulo: "titulo",
    descricao: "shdkhkkhksdkalkhlkdhkldkhfhkfkd",
    imgUrl: "img.webp",
}];

var container = document.querySelector(".cont");

listaPosts.forEach((elemento) => {
    let card =
        `<div class="cont">
    <div class="card">
        <div class="card-img">
            <figure>
                <img src="${elemento.imgUrl}" alt="sukuna">
            </figure>
        </div>
        <div class="card-text">
            <h2>${elemento.titulo}   </h2>
            <p>${elemento.descricao}</p>
            <a href=""> ver mais </a>
        </div>
    </div>
</div>
    `
    container.innerHTML += card;
})