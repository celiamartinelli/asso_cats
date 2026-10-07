import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function UpdatePassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <form className="flex flex-col min-w-80 max-w-78 mx-auto border p-10 rounded-md shadow-md">
      <div>
        <h1 className="text-2xl font-medium">Nouveau mot de passe</h1>

        <p className="text-sm text-secondary-foreground mt-2">
          Choisissez votre nouveau mot de passe.
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-8">
        <Label htmlFor="password">Nouveau mot de passe</Label>

        <Input
          type="password"
          name="password"
          placeholder="Nouveau mot de passe"
          required
        />

        <Label htmlFor="confirmPassword" className="mt-2">
          Confirmer le mot de passe
        </Label>

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          required
        />

        <SubmitButton formAction={resetPasswordAction}>
          Modifier le mot de passe
        </SubmitButton>

        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
