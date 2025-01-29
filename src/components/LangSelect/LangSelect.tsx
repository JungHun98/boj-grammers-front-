import { Wrapper } from './LangSelect.style';
import { useUpdateLanguage, Language } from '@/store/codeStroe';
import { defaultCode } from '@/utils/consts';

function LangSelect() {
  const updateLang = useUpdateLanguage();

  const languageOptions = Object.keys(defaultCode).map((lang) => (
    <option key={lang}>{lang}</option>
  ));

  return (
    <Wrapper>
      <select
        onChange={(e) => updateLang(e.target.value as Language)}
        defaultValue="java"
      >
        {languageOptions}
      </select>
    </Wrapper>
  );
}

export default LangSelect;
