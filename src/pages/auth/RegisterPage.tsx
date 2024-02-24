/*Formik-Yup*/
import { useFormik } from 'formik';
import * as Yup from 'yup';

/*UI- Components*/
import Input from "../../components/ui/Input"
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            country: '',
            password: '',
            confirmPassword: '',
            aceptarTerminos: false
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4).required('Name must be at least 4 characters'),
            lastname: Yup.string().min(4).required('lastname must be at least 4 characters'),
            email: Yup.string().email().required('Invalid email address'),
            country: Yup.string().required('Select a country'),
            password: Yup.string().min(8).required('Password must be at least 8 characters'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm Password is required'),
            aceptarTerminos: Yup.boolean().oneOf(
                [true],
                "Must accept terms and conditions"
            )
        }),
        onSubmit: values => {
            console.log(values);
            navigate('/home')
        },
    });


    const INPUTSVALUES = [
        {
            placeholder: "Nombre de usuario",
            reference: "name",
            type: "text",
            error: formik.errors.name,
            value: formik.values.name,
            touche: formik.touched.name,
        },
        {
            placeholder: "Apellido",
            reference: "lastname",
            type: "text",
            error: formik.errors.lastname,
            value: formik.values.lastname,
            touche: formik.touched.lastname,
        },
        {
            placeholder: "Correo electronico",
            reference: "email",
            type: "email",
            error: formik.errors.email,
            value: formik.values.email,
            touche: formik.touched.email,
        },
        {
            placeholder: "Pais",
            reference: "country",
            type: "text",
            error: formik.errors.country,
            value: formik.values.country,
            touche: formik.touched.country,
        },
        {
            placeholder: "Contrasena",
            reference: "password",
            type: "password",
            error: formik.errors.password,
            value: formik.values.password,
            touche: formik.touched.password,
        },
        {
            placeholder: "Confirmar contrasena",
            reference: "confirmPassword",
            type: "password",
            error: formik.errors.confirmPassword,
            value: formik.values.confirmPassword,
            touche: formik.touched.confirmPassword,
        },
    ]

    return (
        <main className='w-full h-screen min-h-[500px] flex flex-col items-center gap-16 md:justify-center  '>

            <form className='flex flex-col justify-center items-center gap-4' onSubmit={formik.handleSubmit}>

                <div className='text-start self-start md:self-center md:text-center mt-4 md:mt-0'>
                    <h1 className="text-2xl font-semibold mb-2">Creá tu cuenta</h1>
                    <h6 className="text-base font-normal mb-1">Completá tu perfil</h6>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2' >

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
                </div>


                <div >
                    <div className="flex justify-center items-center gap-2 w-[20.5rem] md:w-auto">
                        <input
                            className="w-5 h-8"
                            type="checkbox"
                            name="aceptarTerminos"
                            checked={formik.values.aceptarTerminos}
                            onChange={formik.handleChange}
                        />

                        <p className="font-light text-sm text-justify"> Aceptos los Términos, Condiciones y Políticas de privacidad </p>
                    </div>
                    <div className={`h-6 ${formik.touched && formik.errors ? "opacity-100 text-red-500 text-xs p-1" : "opacity-0"}`}>
                        {formik.errors.aceptarTerminos}
                    </div>
                </div>


                <Button type='submit' >
                    Registrame
                </Button>
            </form>

        </main >
    )

}
export default RegisterPage