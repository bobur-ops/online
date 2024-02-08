import { SpinLoading } from "antd-mobile"
import styles from './LoadingFullScreen.module.css';

type LoadingFullScreenProps = {
  message?: string
}

export default function LoadingFullScreen(props: LoadingFullScreenProps) {
  return (
    <div className={styles['root']}>
      <SpinLoading style={{
        "--color": "rgb(var(--primary-rgb))",
      }} />
      {props.message && (
        <span>
          {props.message}
        </span>
      )}
    </div>
  )
}