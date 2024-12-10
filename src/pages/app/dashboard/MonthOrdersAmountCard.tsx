import { Utensils } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
const MonthOrdersAmountCard = () => {
  return (
    <Card>
          <CardHeader className="flex-row space-y-0 items-center justify-between p-b-2">
            <CardTitle className="text-base font-semibold">Total de pedidos (mês)</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>

          <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
               244
              </span>
              <p className=" text-xs text-muted-foreground ">
                <span className="text-emerald-500 dark:text-emerald-400">+8%</span> em relação ao mês passado
              </p>
          </CardContent>
        </Card>
  )
}

export default MonthOrdersAmountCard