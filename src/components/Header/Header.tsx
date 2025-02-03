import { Wrapper, Flex } from './Header.styles';
import ProblemSearch from '@/components/ProblemSearch';
import LangSelect from '@/components/LangSelect';
import Discussion from '../Discussion';

function Header() {
  return (
    <Wrapper>
      <ProblemSearch />
      <Flex>
        <Discussion />
        <LangSelect />
      </Flex>
    </Wrapper>
  );
}

export default Header;
