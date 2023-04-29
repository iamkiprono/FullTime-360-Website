fetch("https://blog-api-kiprono.onrender.com/blogs/")
  .then((res) => res.json())
  .then((data) => {
    const render = data
      .map((people) => {
        return `<div class="news-card">
        
        <img src= ${people.image}>
          <h4> ${people.title} </h4>
          <p>${people.blog}</p>
          
          </div>`;
      })
      .join("");

    document.querySelector(".card").innerHTML = render;
    
  });
