import { Button, Form, Input } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';
import { Controller } from 'react-hook-form';

import { validUrl } from '../../../../shared/validate';
import { ILinkInfo } from '../shortLink.interface';

import styles from './InputLink.module.scss';
import { useInputLink } from './useInputLink';

interface IInputLinkProps {
  updateLink: Dispatch<SetStateAction<ILinkInfo>>;
}

const InputLink: FC<IInputLinkProps> = ({ updateLink }) => {
  const { control, handleSubmit, isLoading, onSubmit } =
    useInputLink(updateLink);

  return (
    <div className={styles.short}>
      <Controller
        name='link'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Form.Item
            className={styles.input}
            validateStatus={error && 'error'}
            help={error && error.message}
          >
            <Input
              placeholder='Введите ссылку'
              value={value}
              onChange={onChange}
              disabled={isLoading}
            />
          </Form.Item>
        )}
        rules={{
          required: 'Введите ссылку!',
          pattern: {
            value: validUrl,
            message: 'Введите валидную ссылку',
          },
        }}
      />

      <Button
        className={styles.button}
        onClick={handleSubmit(onSubmit)}
        loading={isLoading}
        type='primary'
      >
        Сократить
      </Button>
    </div>
  );
};

export default InputLink;
