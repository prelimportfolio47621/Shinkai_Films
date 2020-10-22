const data = {
    filmArray: [
        {
            id: 'film-1',
            img: {
                src: 'https://m.media-amazon.com/images/M/MV5BMTg5ODA4MTY1OV5BMl5BanBnXkFtZTcwODYwMzAzMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
                alt: 'The Place Promised in Our Early Days poster'
            },
            title: 'The Place Promised in Our Early Days',
            releaseDate: 'November 20, 2004 (Japan)',
            summary: 'The story takes place in a alternate postwar period, in 1996, where Japan is divided. Hokkaido is ruled by the "Union" while Honshu and other southern islands are under US authority. A tall tower was built on Hokkaido, which could even be seen from Tokyo. In the summer of 1996, three middle-school students make a promise that they\'ll cross the border with a self-constructed plane and unravel the tower\'s secret, but their project was abandoned after the girl, Sayuri Sawatari, became mysteriously ill and transferred to Tokyo. Years later on the brink of another war Hiroki Fujisawa finds out that Sayuri had been in coma since then, and he asks Takuya Shirakawa to help him finding a way to wake her up.',
            imdbUrl: 'https://www.imdb.com/title/tt0381348/'
        },
        {
            id: 'film-2',
            img: {
                src: 'https://m.media-amazon.com/images/M/MV5BODJhZDU1MDYtMDQ0NS00N2JmLWI2ZDAtMGNmN2RmNWJhNzQ5L2ltYWdlXkEyXkFqcGdeQXVyNjY1OTY4MTk@._V1_UY268_CR4,0,182,268_AL_.jpg',
                alt: '5 Centimeters Per Second poster'
            },
            title: '5 Centimeters Per Second (2007)',
            releaseDate: 'March 3, 2007 (Japan)',
            summary: 'Told in three interconnected segments, we follow a young man named Takaki through his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love.',
            imdbUrl: 'https://www.imdb.com/title/tt0983213/'
        },
        {
            id: 'film-3',
            img: {
                src: 'https://m.media-amazon.com/images/M/MV5BMzZmZTQ4YjMtODgxYS00NDBlLTgyYWYtNWFkNjVhZGUyODRlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
                alt: 'Children Who Chase Lost Voices poster'
            },
            title: 'Children Who Chase Lost Voices (2011)',
            releaseDate: 'May 7, 2011 (Japan)',
            summary: 'A coming of age story involving young love and a mysterious music, coming from a crystal radio left as a memento by an absent father, that leads a young heroine deep into a hidden world.',
            imdbUrl: 'https://www.imdb.com/title/tt1839494/'
        },
        {
            id: 'film-4',
            img: {
                src: 'https://m.media-amazon.com/images/M/MV5BZDFlYTk5NTQtYTkxMC00NWIyLThiOTYtNjZjYTJhMWJhM2NiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg',
                alt: 'The Garden of Words poster'
            },
            title: 'The Garden of Words (2013)',
            releaseDate: 'May 31, 2013 (Japan)',
            summary: 'Takao, who dreams of becoming a shoemaker, skips school and is sketching shoes in a garden in the middle of Tokyo. He meets a mysterious woman, Yukino, who is older than him. Then, without arranging the times, the two start to see each other again and again, but only on rainy days.',
            imdbUrl: 'https://www.imdb.com/title/tt2591814/'
        },
        {
            id: 'film-5',
            img: {
                src: 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg',
                alt: 'Your Name poster'
            },
            title: 'Your Name (2016)',
            releaseDate: 'April 7, 2017 (USA)',
            summary: 'Mitsuha is the daughter of the mayor of a small mountain town. She\'s a straightforward high school girl who lives with her sister and her grandmother and has no qualms about letting it be known that she\'s uninterested in Shinto rituals or helping her father\'s electoral campaign. Instead she dreams of leaving the boring town and trying her luck in Tokyo. Taki is a high school boy in Tokyo who works part-time in an Italian restaurant and aspires to become an architect or an artist. Every night he has a strange dream where he becomes...a high school girl in a small mountain town.',
            imdbUrl: 'https://www.imdb.com/title/tt5311514/'
        },
        {
            id: 'film-6',
            img: {
                src: 'https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_UX182_CR0,0,182,268_AL_.jpg',
                alt: 'Weathering with You poster'
            },
            title: 'Weathering with You (2019)',
            releaseDate: 'January 17, 2020 (USA)',
            summary: 'A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.',
            imdbUrl: 'https://www.imdb.com/title/tt9426210/'
        }
    ]
}

const sourceList = document.getElementById('films').innerHTML;
const templateList = Handlebars.compile(sourceList);
const compiledHtmlList = templateList(data);
const filmList = document.querySelector('.film-list');
filmList.innerHTML = compiledHtmlList;

const sourceNav = document.getElementById('nav-menu');
const templateNav = Handlebars.compile(sourceNav);
const compiledHtmlNav = templateNav(data);
const navMenu = document.getElementById('nav-menu');
compiledHtmlNav.innerHTML = compiledHtmlNav;