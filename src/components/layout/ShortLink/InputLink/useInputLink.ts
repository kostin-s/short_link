import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useActions } from '../../../../hooks/useActions';
import { makeId } from '../../../../shared/string/makeId';
import { makeShortLink } from '../../../../shared/string/makeShortLink';
import { IShortLink } from '../../../../store/api/api.interface';
import { ILinkInfo, IShortLinkForm } from '../shortLink.interface';

export const useInputLink = (
  updateLink: Dispatch<SetStateAction<ILinkInfo>>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addLink } = useActions();

  const { handleSubmit, control, reset } = useForm<IShortLinkForm>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IShortLinkForm> = data => {
    setIsLoading(true);

    const key = makeId(5);
    const result: IShortLink = {
      key,
      counter: 1,
      short: makeShortLink(key),
      target: data.link,
    };

    addLink(result);

    updateLink(prev => ({
      ...prev,
      short: result.short,
      target: result.target,
      show: true,
    }));

    reset();

    setIsLoading(false);
  };

  return useMemo(
    () => ({
      onSubmit,
      handleSubmit,
      control,
      isLoading,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [control, handleSubmit, isLoading],
  );
};
