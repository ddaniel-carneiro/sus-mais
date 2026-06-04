import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import type { RegisterForm } from "../../utils/interfaces";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import Select from "../../components/Select";
import { maskCPF } from "../../utils/functions";
import Logo from "../../components/Icons/Logo";

const SignUp: React.FC = () => {
  const { signUp } = useAuth();

  const [formState, setFormState] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    cpf: "",
    phone: "+55",
    role_id: 0,
  });

  console.log(formState)
  
  const options = [
    { name: 'Usuário', value: 2 },
    { name: 'Coletor', value: 3 },
  ]

  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: keyof RegisterForm,
  ) => {
    const { value } = event.target as HTMLInputElement;
    setFormState((prev) => {
      if (key === 'cpf')
        return { ...prev, [key]: maskCPF(value as string) };

      if (key === 'phone' && !value.includes("+55"))
        return { ...prev, [key]: '+55' + value }

      return { ...prev, [key]: value }
    });
  };

  return (
    <div className="flex h-screen bg-primary">
      <div className="flex flex-row m-auto h-1/2 w-1/2 shadow-lg">
        <div className="flex bg-secondary h-full w-[30%] rounded-l-lg items-center justify-center">
          <Logo />
        </div>

        <form
          onSubmit={(e) => signUp(e, formState)}
          className="flex flex-col justify-between bg-white h-full w-[70%] rounded-r-lg py-10"
        >
          <h1 className="text-primary font-bold text-3xl mx-auto">
            Seja Bem-vindo!
          </h1>

          <div className="flex flex-row gap-5 w-full h-auto justify-center">
            <div className="flex flex-col w-2/5 gap-3">
              <div className="flex flex-col gap-1">
                <Label additionalClasses="text-sm">Nome</Label>
                <Input
                  type="text"
                  value={formState.name}
                  placeholder="Digite seu nome"
                  onChange={(e) => handleChangeForm(e, "name")}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label additionalClasses="text-sm">Email</Label>
                <Input
                  type="email"
                  value={formState.email}
                  placeholder="Digite seu email"
                  onChange={(e) => handleChangeForm(e, "email")}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <Label additionalClasses="text-sm">Telefone (DDD + Numero)</Label>
                <Input
                  type="text"
                  value={formState.phone}
                  placeholder="Digite seu número"
                  maxLength={14}
                  onChange={(e) => handleChangeForm(e, "phone")}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-2/5 gap-3">
              <div className="flex flex-col gap-1">
                <Label additionalClasses="text-sm">CPF</Label>
                <Input
                  type="text"
                  value={formState.cpf}
                  placeholder="Digite seu CPF"
                  maxLength={14}
                  onChange={(e) => handleChangeForm(e, "cpf")}
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
              </div>

              <div className="flex flex-col gap-1">
                <Label additionalClasses="text-sm">Tipo de Acesso</Label>
                <Select
                  value={formState.role_id}
                  onChange={(e) => handleChangeForm(e, "role_id")}
                  options={options}
                  required
                />
              </div>

              <p className="flex justify-end text-xs text-[#485558] font-bold">
                Já tem acesso?
                <Link
                  className="ml-1 text-[#0000EE] hover:underline"
                  to="/login"
                >
                  Logue
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
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
