import { redirect } from "next/navigation";
import { createClient } from "./client";
import { revalidatePath } from "next/cache";

export const checkUser = async () => {
  const supabase = createClient();

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error: any) {
    return null; // or handle the error as needed
  }
};
