import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form';

export default function Simple() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to React Form
            </h1>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <input {...register('firstName')} />
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>
        </main>
    );
}
