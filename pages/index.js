import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
  const estiloDaHome2 = {
    //backgroundColor: 'yellow'
  };
  const textoAbertura = 'Bem vindo ao nosso site do projeto integrador!!!';

  //console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estiloDaHome2}>
        {textoAbertura}
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
        </div>
    </>
  )
};

export default HomePage

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// };

/** ``serve para concatenar strings no js
 *  {} abriu chaves estamos no terreno do js
 */
const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    gap: 16px;

  }
  `;

function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
};

function Timeline(propriedades) {
  //console.log('Dentro do componente', propriedades.playlists);
  const playlistsNames = Object.keys(propriedades.playlists);
  return (
    <StyledTimeline>
      {
        playlistsNames.map(
          function (playlistsName) {
            const videos = propriedades.playlists[playlistsName];
            //console.log(playlistsName);
            //console.log(videos);
            return (
              <section>
                <h2>
                  {playlistsName}
                </h2>
                <div>
                  {videos.map(
                    function (video) {
                      return (
                        <a href={video.url}>
                          <img src={video.thumb} />
                          <span>
                            {video.title}
                          </span>
                        </a>
                      )
                    }
                  )}
                </div>
              </section>
            )
          }
        )
      }
    </StyledTimeline>
  )
};