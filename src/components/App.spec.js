import {
  createCards,
  shuffle,

} from "../components/App.js";



const dataTest = {
  items: [
    {
      id: "captainAmerica",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72/standard_large.jpg",
    },
    {
      id: "hulk",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/5239b5d891fc1/standard_large.jpg",
    },
    {
      id: "ironMan",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/9/40/5239be60a67da/standard_large.jpg",
    },
    {
      id: "spiderMan",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/3/60/5317718f0a2e7/standard_large.jpg",
    },
    {
      id: "thor",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/c/20/5239be0b8ecd1/standard_large.jpg",
    },
    {
      id: "captainMarvel",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/standard_large.jpg",
    },
    {
      id: "antMan",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d/standard_large.jpg",
    },
    {
      id: "blackWidow",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/a/03/523219743a99b/standard_large.jpg",
    },
    {
      id: "deadPool",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99/standard_large.jpg",
    },
    {
      id: "wolverine",
      image:
        "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_large.jpg",
    },
  ],
};

describe("createCards", () => {
  it("debería ser una funcion", () => {
    expect(typeof createCards).toBe("function");
  });

  it("debería contener 20 cards", () => {
    const cards = createCards(dataTest);
    expect(cards.length).toEqual(20);
  });

  it("card debería tener la clase super", () => {
    const cards = createCards(dataTest);
    expect(cards[1].className).toEqual("super");
  });
 
});


describe("shuffle", () => {
  it("debería ser una funcion", () => {
      expect(typeof shuffle).toBe("function");
  });

  it('el id="hulk" no debe estar en la segunda posición', () => {
      shuffle(dataTest.items);
      expect(dataTest.items[1].id).not.toEqual("hulk");
  });

  it('el id="wolverine" no debe estar en la última posición', () => {
      shuffle(dataTest.items);
      expect(dataTest.items[9].id != "wolverine");
  });
});
  

