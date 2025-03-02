import { useStore } from "@nanostores/react";
import { selectedRole } from "@/lib/store";
import styles from "./RoleToggle.module.scss";

interface RoleToggleProps {
  title: string;
}

export default function RoleToggle({ title }: RoleToggleProps) {
  const $selectedRole = useStore(selectedRole);

  return (
    <button
      className={`${styles.role} ${
        $selectedRole === title ? styles.selected : ""
      }`}
      onClick={() => {
        if ($selectedRole === title) {
          selectedRole.set(null);
        } else {
          selectedRole.set(title);
        }
      }}
    >
      <h5>{title}</h5>
    </button>
  );
}
