import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.gif'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Game of Amazons with minimax AI : Python|PyQt5',
    github: 'https://github.com/harsdua/Amazons-with-MINIMAX',
    demo: 'https://youtube.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Candy Crush Clone : C++|FLTK',
    github: 'https://github.com/harsdua/RhombusCrush',
    demo: 'https://youtube.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Quoridor : C++|SQLite|Qt5',
    github: 'https://github.com/harsdua/Quoridor',
    demo: 'https://youtube.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coloring k-degenerate Graphs in Linear Time with k colors : Java',
    github: 'https://github.com/harsdua/degen-coloring',

    demo: 'https://youtube.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Image compressor : Bash',
    github: 'https://github.com/harsdua/image-compressor',

    demo: 'https://youtube.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Local Chatroom : C++',

    github: 'https://github.com/harsdua/chatroom-sockets',

    demo: 'https://youtube.com'
  }
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
    <div className="portfolio_header">
    <h1> Portfolio </h1>
    </div>

    <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => {
          return (      
          <article key= {id} className='portfolio__item'>
          <div className="portfolio__item image">
            <img src={image} alt={title} />
            </div>
  
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' rel="noreferrer noopener" target="_blank"> Details</a>
          {/* <a href={demo} className='btn btn-primary' rel="noreferrer noopener" target="_blank"> Live Demo</a> */}
          </div>
        </article>
        )
      })
      }
      </div>

  </section>
  )
}

export default Portfolio