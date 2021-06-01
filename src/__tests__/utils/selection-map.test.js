import selectionMap from "../../utils/selection-map";

test("selectionMap with legitimate data", () => {
  const series = [
    {
      id: "series-1x",
      title: "Tiger King",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      genre: "documentaries",
      maturity: "18",
      slug: "tiger-king",
    },
  ];
  const films = [
    {
      id: "film-1x",
      title: "The Prestige",
      description: "Great film...",
      genre: "drama",
      maturity: "15",
      slug: "the-prestige",
    },
  ];

  const slides = selectionMap({ series, films });

  expect(slides.series[0].title).toBe("Documentaries");
  expect(slides.series[0].data[0].title).toBe("Tiger King");
  expect(slides.series[0].data[0].description).toBe(
    "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters."
  );
  expect(slides.series[0].data[0].genre).toBe("documentaries");
  expect(slides.series[0].data[0].maturity).toBe("18");
  expect(slides.series[0].data[0].slug).toBe("tiger-king");

  expect(slides.films[0].title).toBe("Drama");
  expect(slides.films[0].data[0].title).toBe("The Prestige");
  expect(slides.films[0].data[0].description).toBe("Great film...");
  expect(slides.films[0].data[0].genre).toBe("drama");
  expect(slides.films[0].data[0].maturity).toBe("15");
  expect(slides.films[0].data[0].slug).toBe("the-prestige");
});
