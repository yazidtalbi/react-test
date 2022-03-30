import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Misc/Input';
import '../../css/pages/login.css';
import '../../css/components/input.css';

import  useAuth  from '../hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(`L'email est obligatoire`)
    .email(`L'email est au mauvais format`),
  password: Yup.string().required('Le mot de passe est obligatoire').min(6),
});

const Login = () => {
   const { Login } = useAuth();
  const { handleSubmit, errors, touched, ...formik } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await Login(values.email, values.password);
    },
    validationSchema,
  });
  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit}>
        <h3 className='login__form__title'>Login</h3>
        <Input
          type='text'
          error={errors.email && touched.email ? errors.email : undefined}
          label='Email'
          placeholder='email@exemple.com'
          name='Email'
          onChange={formik.handleChange('email')}
          value={formik.values.email}
        />

        <Input
          label='Password'
          type='password'
          placeholder='password'
          name='password'
          error={
            errors.password && touched.password
              ? 'Mot de passe inférieur à 6 caractères'
              : undefined
          }
          onChange={formik.handleChange('password')}
          value={formik.values.password}
        />
        <button
          type='submit'
          style={{ marginTop: '20px' }}
          className='btn large full'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
