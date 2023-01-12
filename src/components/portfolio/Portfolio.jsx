import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: "https://cdn.dribbble.com/userupload/4254957/file/original-1e2db596c68189f27ff631404b010cea.png?compress=1&resize=1024x768",
    title: "Title 1",
    github: "https://github.com",
    demo: "https://dribbble.com/haloweb"
  },
  {
    id: 2,
    image: "https://cdn.dribbble.com/userupload/4055318/file/original-fee18713b6b1fc0aaeb37ea87bcdcf0d.png?compress=1&resize=1024x768",
    title: "Title 2",
    github: "https://github.com",
    demo: "https://dribbble.com/haloweb"
  },
  {
    id: 3,
    image: "https://cdn.dribbble.com/userupload/4004556/file/original-7d1dd24f2bffc76b8abdee31f374f708.png?compress=1&resize=1024x768",
    title: "Title 3",
    github: "https://github.com",
    demo: "https://dribbble.com/haloweb"
  },
  {
    id: 4,
    image: "https://cdn.dribbble.com/userupload/3819135/file/original-12e1585c7e6b34d5c5811a518fc94b46.png?compress=1&resize=1024x768",
    title: "Title 4",
    github: "https://github.com",
    demo: "https://dribbble.com/haloweb"
  },
  {
    id: 5,
    image: "https://cdn.dribbble.com/userupload/2842315/file/original-2980e480583af5a3262eb7fc90731ea3.png?compress=1&resize=1024x768",
    title: "Title 5",
    github: "https://github.com",
    demo: "https://dribbble.com/haloweb"
  },
  {
    id: 6,
    image: "https://cdn.dribbble.com/userupload/2919546/file/original-26217fe72f6e9140f90038f92045d1e0.png?compress=1&resize=1024x768",
    title: "Title 6",
    github: "https://github.com",
    demo: "https://dribbble.com/haloweb"
  }  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image"><img src={image} alt={title} /></div>
          <h3>Portfolio Item {title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
          )})
        }       
      </div>
    </section>
  )
}

export default Portfolio