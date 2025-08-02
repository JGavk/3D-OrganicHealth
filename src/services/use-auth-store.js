import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config.js";

const useAuthStore = create((set) => {
  // Listener para sesiones persistentes
  onAuthStateChanged(auth, (user) => {
    set({ userLooged: user || null });
  });

  return {
    userLooged: null,

    loginGoogleWithPopup: async () => {
      try {
        // ① hacemos el popup y esperamos el resultado
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        // ② aquí actualizamos el estado en el store
        set({ userLooged: result.user });
        return result;
      } catch (error) {
        console.error("Error en loginGoogleWithPopup:", error);
        throw error;
      }
    },

    logout: async () => {
      try {
        await signOut(auth);
        set({ userLooged: null });
      } catch (error) {
        console.error(error);
      }
    },
  };
});

export default useAuthStore;

