import SocialNetwork from "@/components/MadeInHand/SocialNetwork";

export default function Contact() {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <section className="w-full h-3/4 bg-red-200">
        <h2>Comment nous contacter?</h2>
        <p>Par téléphone: 06 08 87 28 94</p>
        <p>Par mail: ecoledeschatsdupayshoudanais@gmail.com</p>
        <p>Via nos réseaux sociaux</p>
        <SocialNetwork />
        <p>ou sinon via les formulaire juste ci dessous</p>
      </section>
      <section></section>
    </div>
  );
}
