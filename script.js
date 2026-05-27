document.addEventListener('DOMContentLoaded', () => {

const trendingData = [
    {name: 'act ii: date @ 8 (feat. Drake) - remix', artist: '4batz, Drake', image: './img/Trending_img/acc.jpg' },
    {name: 'If I Aint Got You', artist: 'Alicia Keys', image: './img/Trending_img/alicia.jpg' },
    {name: 'Bom te Encontrar', artist: 'Bk, João Gomes, Nansy Silvvz, Gigantes', image: './img/Trending_img/BtE.jpg' },
    {name: 'Infiel', artist: 'Marília Mendonça', image: './img/Trending_img/marilia.jpg' },
    {name: 'Regras da Loja', artist: 'Nill, BK, CrimeNow', image: './img/Trending_img/RdL.jpg' },
    {name: 'Ultralight Beam', artist: 'Kanye West', image: './img/Trending_img/ultralight.jpg' },
    {name: 'Vivos', artist: 'Bk, Baco Exu do Blues, Luccas Carlos, Nave Beatz', image: './img/Trending_img/vivos.jpg' },
];

const artistData = [
    {name: '2Pac', image: './img/Artistas_img/2Pac.jpg' },
    {name: 'BK', image: './img/Artistas_img/BK.jpg' },
    {name: 'BTS', image: './img/Artistas_img/BTS.jpg' },
    {name: 'Kanye West', image: './img/Artistas_img/KanyeWest.jpg' },
    {name: 'Michael Jackson', image: './img/Artistas_img/MichaelJackson.jpg' },
    {name: 'Racionais', image: './img/Artistas_img/Racionais.jpg' },
    {name: 'Veigh', image: './img/Artistas_img/Veigh.jpg' },
];

const albumsData = [
    {name: 'Arirang', artist: 'BTS', image: './img/Album_img/Arirang.jpg' },
    {name: 'Castelos e Ruínas', artist:'BK', image: './img/Album_img/C&R.jpg' },
    {name: 'Ladrão', artist:'Djonga', image: './img/Album_img/Djonga.jpg' },
    {name: 'Sobrevivendo no Inferno', artist:'Racionais', image: './img/Album_img/Survnf.jpg' },
    {name: 'Diretoria', artist:'Tasha & Tracie', image: './img/Album_img/T&T.jpg' },
    {name: 'Thriller', artist:'Michael Jackson', image: './img/Album_img/Thriller.jpg' },
    {name: 'ye', artist:'Kanye West', image: './img/Album_img/ye.jpg' },
];

    const trendingGrid = document.querySelector('.trending-grid')
    const artistsGrid = document.querySelector('.artists-grid')  
    const albumsGrid = document.querySelector('.albums-singles-grid')

    trendingData.forEach( trending => {
        const trendingCard = document.createElement('div')
        trendingCard.classList.add('trending-card')

        trendingCard.innerHTML = `
            <img src="${trending.image}" alt="imagem do ${trending.name}">
            <h3>${trending.name}</h3>
            <p>${trending.artist}</p>
        `

        trendingGrid.appendChild(trendingCard)

    })
        artistData.forEach( artist => {
        const artistsCard = document.createElement('div')
        artistsCard.classList.add('artists-card')

        artistsCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artist</p>
        `

        artistsGrid.appendChild(artistsCard)

    })
        albumsData.forEach( album => {
        const albumsCard = document.createElement('div')
        albumsCard.classList.add('albums-card')

        albumsCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `

        albumsGrid.appendChild(albumsCard)
    })

})