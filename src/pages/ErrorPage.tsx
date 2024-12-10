import { Link } from "react-router"

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold ">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o <Link to="/" className="text-sky-500 dark:text-sky-400">Dashboard</Link>
      </p>
    </div>
  )
}

export default ErrorPage