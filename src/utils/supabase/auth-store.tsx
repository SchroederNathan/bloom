import { create } from "zustand";
import { createClient } from "./client"; // Make sure this path is correct

// interface User {
//   id: string;
//   email: string;
//   // Add other user properties you might have
// }

interface AuthStore {
  user: any | null;
  setUser: (user: any | null) => void;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  logout: async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      set({ user: null });
    } else {
      console.error("Logout failed:", error.message);
    }
  },
}));

export default useAuthStore;
