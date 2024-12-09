import { Helmet } from "react-helmet-async"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { toast } from "sonner"
import { Link, useNavigate } from "react-router"


const FormSignUp = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
})

type SignInForm = z.infer<typeof FormSignUp>



const SignUp = () => {
const {handleSubmit, register, formState:{isSubmitting}} = useForm<SignInForm>()

const navigate = useNavigate()
async function handleSigUp (data: SignInForm) {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    toast.success("Restaurante criado com sucesso", {
      action: {
        label: 'Login',
        onClick: ()=> {navigate('/sign-in')}
      }
    })
  } catch (error) {
    toast.error('Erro ao cadastrar restaurant')
  }
 
}

  return (
 <>
  <Helmet title="Cadastro"/>
 <div className="p-8">
 <Button variant="outline" asChild className=" absolute top-8 right-8 ">
      <Link to='/sign-in'>
      Fazer Login
      </Link>
    </Button>
    <div className="w-[350px] flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Criar conta gratis</h1>
        <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas</p>
      </div>

<form className=" space-y-4" onSubmit={handleSubmit(handleSigUp)}>
  <div className="space-y-2">
    <Label htmlFor="restaurantName">Informa o nome do seu estabelecimento</Label>
    <Input id="restaurantName" type="text" {...register('restaurantName')} required/>
  </div>

  <div className="space-y-2">
    <Label htmlFor="managerName">Informa o seu nome</Label>
    <Input id="manegerName" type="text" {...register('managerName')} required/>
  </div>

  <div className="space-y-2">
    <Label htmlFor="email">Informa o seu e-mail</Label>
    <Input id="email" type="email" {...register('email')} required/>
  </div>

  <div className="space-y-2">
    <Label htmlFor="phone">Telefone</Label>
    <Input id="phone" type="tel" {...register('phone')} required/>
  </div>
  <Button disabled={isSubmitting} type="submit" className="w-full disabled:cursor-not-allowed">Finalizar cadastro</Button>

  <p className="p-6 text-sm leading-relaxed text-muted-foreground text-center ">Ao continuar voce concorda com os nossos termos de servços e políticas de privacidade</p>
</form>
    </div>
 </div>
 </>
  )
}
export default SignUp