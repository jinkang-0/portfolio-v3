import type { Role } from "@/types/types";
import { atom } from "nanostores";

export const selectedRole = atom<Role | null>(null);
