import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import type { LoginForm } from "../../utils/interfaces";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import Logo from "../../components/Icons/Logo";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [formState, setFormState] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof LoginForm,
  ) => {
    const { value } = event.target as HTMLInputElement;
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex h-screen bg-primary">
      <div className="flex flex-row m-auto h-1/2 w-1/2 shadow-lg">
        <div className="flex bg-secondary h-full w-[30%] rounded-l-lg items-center justify-center">
          <Logo />
        </div>

        <form
          onSubmit={(e) => signIn(e, formState)}
          className="flex flex-col justify-between bg-white h-full w-[70%] rounded-r-lg py-18"
        >
          <h1 className="text-primary font-bold text-3xl mx-auto">
            Bem-vindo de volta
          </h1>

          <div className="flex flex-col gap-5 w-[45%] h-auto mx-auto">
            <div className="flex flex-col gap-1">
              <Label additionalClasses="text-sm">Email</Label>
              <Input
                type="text"
                value={formState.email}
                placeholder="Digite seu email"
                onChange={(e) => handleChangeForm(e, "email")}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label additionalClasses="text-sm">Senha</Label>
              <Input
                type="password"
                value={formState.password}
                placeholder="Digite sua senha"
                onChange={(e) => handleChangeForm(e, "password")}
                required
              />

              <p className="flex justify-end text-xs text-[#485558] font-bold">
                Ainda não tem acesso?
                <Link
                  className="ml-1 text-[#0000EE] hover:underline"
                  to="/register"
                >
                  Registre-se
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex w-[45%] mx-auto">
            <Button
              additionalClasses="transition-btn"
              shadow
            >
              Logar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
