import { FC, useState } from 'react';

import InputLink from './InputLink/InputLink';
import ResultLink from './ResultLink/ResultLink';
import { ILinkInfo } from './shortLink.interface';

const ShortLink: FC = () => {
  const [infoLink, setInfoLink] = useState<ILinkInfo>({
    show: false,
    short: '',
    target: '',
  });

  return (
    <div>
      <InputLink updateLink={setInfoLink} />
      {infoLink.show && (
        <ResultLink short={infoLink.short} target={infoLink.target} />
      )}
    </div>
  );
};

export default ShortLink;
