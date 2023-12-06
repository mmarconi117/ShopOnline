import { Categories } from './Categories';
import { FashionSection } from './FashionSection';
import {WelcomeSection} from './WelcomeSection';
/*import { Fashion } from './Fashion';*/

export const Menu = () => {
  return (
    <div className="bg-[#F0F0F0] flex gap-5 pt-3 px-12 pb-10 max-[850px]:p-0">
        <Categories></Categories>
        <FashionSection></FashionSection>
        <WelcomeSection></WelcomeSection>
    </div>
  )
}

