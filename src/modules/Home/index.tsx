import React, {useState, useEffect} from 'react';
import useLastestMovies from '@hooks/useLastestMovies';
import { Background } from '@components/Background';
import * as Styled from './styles';
import Header from '@components/Header/Index';



const Home: React.FC = () => {
  const { getLastestMovies } = useLastestMovies();
  const [lastestList, setLastestList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const data = await getLastestMovies();
        setLastestList(data);
        console.log('data', data)
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
          </Styled.Wrapper>
        </Styled.Container>
      </Background>
  );
};

export default Home;