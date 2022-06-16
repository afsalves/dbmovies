import React, {useState, useEffect} from 'react';
import useDBMovies from '@hooks/useDBMovies';
import { Background } from '@components/Background';
import * as Styled from './styles';
import {Header} from '@components/Header/Index';
import {HorizontalCarousel} from '@components/HorizontalCarousel';



const Home: React.FC = () => {
  const { getLastestMovies } = useDBMovies();
  const [lastestList, setLastestList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const data = await getLastestMovies();
        setLastestList(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, [getLastestMovies]);


  return (
      <Background>
        <Styled.Container>
          <Styled.Wrapper>
          <Header />
          <HorizontalCarousel title = {'Most popular'} data={lastestList}/>
          </Styled.Wrapper>
        </Styled.Container>
      </Background>
  );
};

export default Home;