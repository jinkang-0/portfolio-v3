import { selectedRole } from "@/lib/store";
import type { Role } from "@/types/types";
import { useStore } from "@nanostores/react";
import styles from "./RoleDescription.module.scss";

interface RoleDescriptionProps {
  role: Role;
  order: number;
  children?: React.ReactNode;
}

export default function RoleDescription({
  role,
  order,
  children
}: RoleDescriptionProps) {
  const $selectedRole = useStore(selectedRole);

  return (
    <section
      className={`${styles.roleDesc} 
      ${$selectedRole === role ? styles.selected : ""}`}
      style={{
        marginTop: `${order * 2.75 + 0.5}rem`
      }}
    >
      <div className={styles.roleDescInner}>
        <div className={styles.divider}></div>
        <p>{children}</p>
      </div>
    </section>
  );
}
