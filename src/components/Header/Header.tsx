import { Wrapper } from './Header.styles';
import ProblemSearch from '@/components/ProblemSearch';
import LangSelect from '@/components/LangSelect';

function Header() {
  return (
    <Wrapper>
      <ProblemSearch />
      <LangSelect />
    </Wrapper>
  );
}

export default Header;
