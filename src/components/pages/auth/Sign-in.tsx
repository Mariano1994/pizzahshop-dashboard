import { Helmet } from "react-helmet-async"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { toast } from "sonner"


const FormSignIn = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof FormSignIn>



const SignIn = () => {
const {handleSubmit, register, formState:{isSubmitting}} = useForm<SignInForm>()

async function handleSigin (data: SignInForm) {

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    toast.success('Enviamos um link de autenticacao para o seu e-mail.', {
      action: {
        label: 'Reenviar',
        onClick: ()=> {handleSigin(data)}
      }
    })
  } catch (error) {
    toast.error('Credencias invalidas')
  }
 
}

  return (
 <>
  <Helmet title="Login"/>
 <div className="p-8">
    <div className="w-[350px] flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
      </div>

<form className=" space-y-4" onSubmit={handleSubmit(handleSigin)}>
  <div className="space-y-2">
    <Label htmlFor="email">Informa o seu e-mail</Label>
    <Input id="email" type="email" {...register('email')}/>
  </div>
  <Button disabled={isSubmitting} type="submit" className="w-full disabled:cursor-not-allowed">Acessar painel</Button>
</form>
    </div>
 </div>
 </>
  )
}
export default SignIn