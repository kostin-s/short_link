import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useActions } from '../../../hooks/useActions';
import { authType } from '../../../pages/Auth/auth.interface';
import WithoutAuth from '../WithoutAuth/WithoutAuth';

import styles from './AuthForm.module.scss';
import { IAuthFields } from './form.interface';

interface IAuthForm {
  type: authType;
  isLoading: boolean;
}

const AuthForm: FC<IAuthForm> = props => {
  const { isLoading, type } = props;
  const { register, login } = useActions();

  const { handleSubmit, control, reset } = useForm<IAuthFields>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IAuthFields> = data => {
    if (type === 'login') {
      login(data);
    }

    if (type === 'register') {
      register(data);
    }

    reset();
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Сервис сокращения ссылок</h2>
      <h3 className={styles.subtitle}>
        {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
      </h3>

      <Controller
        name='username'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Form.Item
            className={styles.input}
            validateStatus={error && 'error'}
            help={error && error.message}
          >
            <Input
              placeholder='Имя'
              value={value}
              onChange={onChange}
              disabled={isLoading}
            />
          </Form.Item>
        )}
        rules={{
          required: 'Имя пользователя обязателено!',
          minLength: {
            value: 6,
            message: 'Длина имени мин. 6 символов',
          },
        }}
      />

      <Controller
        name='password'
        control={control}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Form.Item
            className={styles.input}
            validateStatus={error && 'error'}
            help={error && error.message}
          >
            <Input
              placeholder='Пароль'
              value={value}
              onChange={onChange}
              disabled={isLoading}
              autoComplete='off'
              type='password'
            />
          </Form.Item>
        )}
        rules={{
          required: 'Пароль обязателен!',
          minLength: {
            value: 6,
            message: 'Длина пароля мин. 6 символов',
          },
        }}
      />

      <Button
        className={styles.button}
        onClick={handleSubmit(onSubmit)}
        loading={isLoading}
        type='primary'
      >
        {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
      </Button>

      <WithoutAuth />
    </form>
  );
};

export default AuthForm;
