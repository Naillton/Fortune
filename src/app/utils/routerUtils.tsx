import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();
  const navigateTo = (path: string, delay?: number) => {
    if (delay) {
      setTimeout(() => router.push(path), delay);
    } else {
      router.push(path);
    }
  };
  return { navigateTo };
};