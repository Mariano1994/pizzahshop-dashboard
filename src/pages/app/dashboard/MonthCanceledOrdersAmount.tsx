import { Ban } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
const MonthCanceledOrdersAmount = () => {
  return (
    <Card>
          <CardHeader className="flex-row space-y-0 items-center justify-between p-b-2">
            <CardTitle className="text-base font-semibold">Pedidos Cancelados (mês)</CardTitle>
            <Ban className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>

          <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
               50
              </span>
              <p className=" text-xs text-muted-foreground ">
                <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em relação ao mês anterior
              </p>
          </CardContent>
        </Card>
  )
}

export default MonthCanceledOrdersAmount