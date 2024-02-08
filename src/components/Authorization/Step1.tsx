import { AuthUserRole } from '@/lib/types'
import styles from'./Authorization.module.css'
import FancyButton from "@/components/ui/FancyButton";
import LinkButton from './ui/LinkButton';

type Step1Props = {
  prev: () => void;
  next: (role: AuthUserRole) => void
}

export default function Step1({ prev, next }: Step1Props) {

  return (
    <main className={styles['step1']}>
      <h1>Авторизация</h1>
      <FancyButton className="mb-4 mx-auto" onClick={() => next('guest')}>Войти как гость</FancyButton>
      <FancyButton className="mb-4 mx-auto" onClick={() => next('customer')}>Войти как заказчик</FancyButton>
      <FancyButton className="mx-auto" onClick={() => next('employee')}>Войти как сотрудник</FancyButton>
      <LinkButton onClick={() => prev()} className={styles['underground']}>назад</LinkButton>
    </main>
  )
}
