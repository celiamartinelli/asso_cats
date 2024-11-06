import { createClient } from "@/utils/supabase/server";

export default function ImageCat() {
  async function downloadImage(path: string) {
    const supabase = createClient();
    try {
      // call supabase storage to download the image - appeler le stockage supabase pour télécharger l'image
      const { data, error } = await (await supabase).storage
        .from("cat_image")
        .download(path);

      if (error) {
        throw error;
      }

      const fr = new FileReader();
      fr.readAsDataURL(data);
      fr.onload = () => {};
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  }
  return (
    <div>
      <h1>ImageCat</h1>
    </div>
  );
}
