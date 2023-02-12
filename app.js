fetch("news.json")
  .then((res) => res.json())
  .then((data) => {
    
    const render = data
      .map((people) => {
        console.log(people);
        return `<div class="news-card">
        
        <img src= ${people.image}>
          <h3> ${people.news} </h3>
          <p>${people.text}</p>
          </div>`;
      })
      .join("");
    console.log(render);

    document.querySelector(".card").innerHTML = render;
  });
