import { ReactNode } from "react";
import styles from './MainLayout.module.css';
import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles['root']}>
      <Sidebar />
      <div className={styles['children-wrapper']}>
        {children}
      </div>
    </div>
  )
}