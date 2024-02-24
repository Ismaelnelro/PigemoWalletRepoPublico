import { Link, useNavigate } from 'react-router-dom';


/*Formik-Yup*/
import { useFormik } from 'formik';
import * as Yup from 'yup';

/*UI- Components*/
import Input from "../../components/ui/Input"
import Button from '../../components/ui/Button';


/*Image*/
import logoPigmeo from '/assets/brand/logoPigmeoL.svg'
import facebook from '/assets/brand/facebook.svg'
import google from '/assets/brand/google.svg'

const LoginPage = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Invalid email address'),
            password: Yup.string().min(8).required('Password must be at least 8 characters'),
        }),
        onSubmit: values => {
            console.log(values);
            navigate('/home')
        },
    });


    const INPUTSVALUES = [

        {
            placeholder: "Correo electronico",
            reference: "email",
            type: "email",
            error: formik.errors.email,
            value: formik.values.email,
            touche: formik.touched.email,
        },

        {
            placeholder: "Contrasena",
            reference: "password",
            type: "password",
            error: formik.errors.password,
            value: formik.values.password,
            touche: formik.touched.password,
        },

    ]

    return (
        <main className='w-full h-screen min-h-[500px] grid justify-center items-center'>

            <form className='flex flex-col justify-center items-center gap-6' onSubmit={formik.handleSubmit}>

                <img src={logoPigmeo} alt="logo" className="w-80" />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-1' >

                    {INPUTSVALUES.map((input, index) => (
                        <div key={index}>
                            <Input
                                placeholder={input.placeholder}
                                id={input.reference}
                                name={input.reference}
                                type={input.type}
                                error={input.error}
                                value={input.value}
                                touched={input.touche}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                    ))}

                    <div className="w-full flex justify-center mb-4">
                        <Link
                            to="/resetPassword/request"
                            className="text-primary self-start underline w-full"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                </div>
                <Button type='submit' >
                    Iniciar sesión
                </Button>
            </form>

            <section className='flex flex-col justify-center gap-5 m-auto'>
                <span className='border border-slate-950 
                border-b-transparent
                border-l-transparent
                border-r-transparent
                w-[20.5rem] 
                relative
                '>
                    <p className='
                    text-base
                    font-normal
                    absolute 
                    -top-4 
                    left-1/2 
                    -translate-x-1/2 
                    px-4
                    bg-white '>o iniciá con</p>
                </span>
                <div className='flex justify-center items-center gap-14'>
                    <img src={facebook} alt="logo facebook" />
                    <img src={google} alt="logo google" />
                </div>
            </section>
        </main >
    )

}
export default LoginPage