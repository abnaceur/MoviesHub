import React from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import "./Movies.css";
import "../App.css";

const fakeMovies = [
  {
    id: 0,
    name: "The Walking Dead",
    year: "2010",
    rating: 2,
    coverImage:
      "http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg",
  },
  {
    id: 1,
    name: "Game of Throne",
    year: "2010",
    rating: 5,
    coverImage:
      "http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg",
  },
  {
    id: 2,
    name: "Harry Potter à l'école des sorciers",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/564x/bf/80/95/bf8095a03e5f3dc642e043d078aa1cfd.jpg",
  },
  {
    id: 3,
    name: "Harry Potter et la Chambre des secrets",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/d3/99/e4/d399e4b82c9ac29ec85297745f5f4284.jpg",
  },
  {
    id: 4,
    name: "Harry Potter et le Prisonnier d’Azkaban",
    year: "2001",
    rating: 2,
    coverImage:
      "https://i.pinimg.com/736x/b0/37/8b/b0378b48e5f4ec374cbbda21c8d23853.jpg",
  },
  {
    id: 5,
    name: "Harry Potter et la Coupe de feu",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/a6/f3/ff/a6f3ff850b4f75f96d6c4a410522e544.jpg",
  },
  {
    id: 6,
    name: "Harry Potter et l’Ordre du phénix",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/34/8a/b2/348ab2be327259e018fcab97cf620dbf.jpg",
  },
  {
    id: 7,
    name: "Harry Potter et le Prince de sang-mêlé",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/originals/df/b1/1d/dfb11ddf8cfd03a08f52c5c5dc4e2569.jpg",
  },
  {
    id: 8,
    name: "Harry Potter et les Reliques de la Mort (partie 1)",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/af/bf/4e/afbf4e7fbe5000c39ddc55a5919bc53c.jpg",
  },
  {
    id: 9,
    name: "Harry Potter et les Reliques de la Mort (partie 2)",
    year: "2001",
    rating: 4,
    coverImage:
      "http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg",
  },
  {
    id: 10,
    name: "The Walking Dead",
    year: "2010",
    rating: 2,
    coverImage:
      "http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg",
  },
  {
    id: 11,
    name: "Game of Throne",
    year: "2010",
    rating: 5,
    coverImage:
      "http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg",
  },
  {
    id: 12,
    name: "Harry Potter à l'école des sorciers",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/564x/bf/80/95/bf8095a03e5f3dc642e043d078aa1cfd.jpg",
  },
  {
    id: 13,
    name: "Harry Potter et la Chambre des secrets",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/d3/99/e4/d399e4b82c9ac29ec85297745f5f4284.jpg",
  },
  {
    id: 14,
    name: "Harry Potter et le Prisonnier d’Azkaban",
    year: "2001",
    rating: 2,
    coverImage:
      "https://i.pinimg.com/736x/b0/37/8b/b0378b48e5f4ec374cbbda21c8d23853.jpg",
  },
  {
    id: 15,
    name: "Harry Potter et la Coupe de feu",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/a6/f3/ff/a6f3ff850b4f75f96d6c4a410522e544.jpg",
  },
  {
    id: 16,
    name: "Harry Potter et l’Ordre du phénix",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/34/8a/b2/348ab2be327259e018fcab97cf620dbf.jpg",
  },
  {
    id: 17,
    name: "Harry Potter et le Prince de sang-mêlé",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/originals/df/b1/1d/dfb11ddf8cfd03a08f52c5c5dc4e2569.jpg",
  },
  {
    id: 18,
    name: "Harry Potter et les Reliques de la Mort (partie 1)",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/af/bf/4e/afbf4e7fbe5000c39ddc55a5919bc53c.jpg",
  },
  {
    id: 19,
    name: "Harry Potter et les Reliques de la Mort (partie 2)",
    year: "2001",
    rating: 4,
    coverImage:
      "http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg",
  },
  {
    id: 20,
    name: "The Walking Dead",
    year: "2010",
    rating: 2,
    coverImage:
      "http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg",
  },
  {
    id: 21,
    name: "Game of Throne",
    year: "2010",
    rating: 5,
    coverImage:
      "http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg",
  },
  {
    id: 22,
    name: "Harry Potter à l'école des sorciers",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/564x/bf/80/95/bf8095a03e5f3dc642e043d078aa1cfd.jpg",
  },
  {
    id: 23,
    name: "Harry Potter et la Chambre des secrets",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/d3/99/e4/d399e4b82c9ac29ec85297745f5f4284.jpg",
  },
  {
    id: 24,
    name: "Harry Potter et le Prisonnier d’Azkaban",
    year: "2001",
    rating: 2,
    coverImage:
      "https://i.pinimg.com/736x/b0/37/8b/b0378b48e5f4ec374cbbda21c8d23853.jpg",
  },
  {
    id: 25,
    name: "Harry Potter et la Coupe de feu",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/a6/f3/ff/a6f3ff850b4f75f96d6c4a410522e544.jpg",
  },
  {
    id: 26,
    name: "Harry Potter et l’Ordre du phénix",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/34/8a/b2/348ab2be327259e018fcab97cf620dbf.jpg",
  },
  {
    id: 27,
    name: "Harry Potter et le Prince de sang-mêlé",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/originals/df/b1/1d/dfb11ddf8cfd03a08f52c5c5dc4e2569.jpg",
  },
  {
    id: 28,
    name: "Harry Potter et les Reliques de la Mort (partie 1)",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/af/bf/4e/afbf4e7fbe5000c39ddc55a5919bc53c.jpg",
  },
  {
    id: 29,
    name: "Harry Potter et les Reliques de la Mort (partie 2)",
    year: "2001",
    rating: 4,
    coverImage:
      "http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg",
  },
  {
    id: 30,
    name: "The Walking Dead",
    year: "2010",
    rating: 2,
    coverImage:
      "http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg",
  },
  {
    id: 31,
    name: "Game of Throne",
    year: "2010",
    rating: 5,
    coverImage:
      "http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg",
  },
  {
    id: 32,
    name: "Harry Potter à l'école des sorciers",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/564x/bf/80/95/bf8095a03e5f3dc642e043d078aa1cfd.jpg",
  },
  {
    id: 33,
    name: "Harry Potter et la Chambre des secrets",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/d3/99/e4/d399e4b82c9ac29ec85297745f5f4284.jpg",
  },
  {
    id: 34,
    name: "Harry Potter et le Prisonnier d’Azkaban",
    year: "2001",
    rating: 2,
    coverImage:
      "https://i.pinimg.com/736x/b0/37/8b/b0378b48e5f4ec374cbbda21c8d23853.jpg",
  },
  {
    id: 35,
    name: "Harry Potter et la Coupe de feu",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/a6/f3/ff/a6f3ff850b4f75f96d6c4a410522e544.jpg",
  },
  {
    id: 36,
    name: "Harry Potter et l’Ordre du phénix",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/34/8a/b2/348ab2be327259e018fcab97cf620dbf.jpg",
  },
  {
    id: 37,
    name: "Harry Potter et le Prince de sang-mêlé",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/originals/df/b1/1d/dfb11ddf8cfd03a08f52c5c5dc4e2569.jpg",
  },
  {
    id: 38,
    name: "Harry Potter et les Reliques de la Mort (partie 1)",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/af/bf/4e/afbf4e7fbe5000c39ddc55a5919bc53c.jpg",
  },
  {
    id: 39,
    name: "Harry Potter et les Reliques de la Mort (partie 2)",
    year: "2001",
    rating: 4,
    coverImage:
      "http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg",
  },
  {
    id: 40,
    name: "The Walking Dead",
    year: "2010",
    rating: 2,
    coverImage:
      "http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg",
  },
  {
    id: 41,
    name: "Game of Throne",
    year: "2010",
    rating: 5,
    coverImage:
      "http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg",
  },
  {
    id: 42,
    name: "Harry Potter à l'école des sorciers",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/564x/bf/80/95/bf8095a03e5f3dc642e043d078aa1cfd.jpg",
  },
  {
    id: 43,
    name: "Harry Potter et la Chambre des secrets",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/d3/99/e4/d399e4b82c9ac29ec85297745f5f4284.jpg",
  },
  {
    id: 44,
    name: "Harry Potter et le Prisonnier d’Azkaban",
    year: "2001",
    rating: 2,
    coverImage:
      "https://i.pinimg.com/736x/b0/37/8b/b0378b48e5f4ec374cbbda21c8d23853.jpg",
  },
  {
    id: 45,
    name: "Harry Potter et la Coupe de feu",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/a6/f3/ff/a6f3ff850b4f75f96d6c4a410522e544.jpg",
  },
  {
    id: 46,
    name: "Harry Potter et l’Ordre du phénix",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/736x/34/8a/b2/348ab2be327259e018fcab97cf620dbf.jpg",
  },
  {
    id: 47,
    name: "Harry Potter et le Prince de sang-mêlé",
    year: "2001",
    rating: 4,
    coverImage:
      "https://i.pinimg.com/originals/df/b1/1d/dfb11ddf8cfd03a08f52c5c5dc4e2569.jpg",
  },
  {
    id: 48,
    name: "Harry Potter et les Reliques de la Mort (partie 1)",
    year: "2001",
    rating: 3,
    coverImage:
      "https://i.pinimg.com/564x/af/bf/4e/afbf4e7fbe5000c39ddc55a5919bc53c.jpg",
  },
  {
    id: 49,
    name: "Harry Potter et les Reliques de la Mort (partie 2)",
    year: "2001",
    rating: 4,
    coverImage:
      "http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg",
  },
];

const Movies = () => {
  return (
    <div className="movies_pages_container">
      <div className="filter_container">
        <Filter />
      </div>
      <div className="movies_container">
        <MovieList movies={fakeMovies} />
      </div>
    </div>
  );
};

export default Movies;
