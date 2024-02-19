import React from "react";
import { useImmer } from "use-immer";

const Immer = () => {
  const [person, setPerson] = useImmer({
    name: "Ali Ahsan Motin",
    artwork: {
      title: "Sky Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }
  return (
    <div>
      <label htmlFor="">
        Name :
        <input type="text" value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <label htmlFor="">
        Title :
        <input
          type="text"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <br />
      <label htmlFor="">
        Name :
        <input
          type="text"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <br />
      <label htmlFor="">
        Name :
        <input
          type="text"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <br />
      <div>
        <p>
          <i>{person.artwork.title}</i>
          {"by"}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </div>
  );
};

export default Immer;
