import { Utensils } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { getMonthOrdersAmount } from "../../../api/getMonthOrdersAmount"
const MonthOrdersAmountCard = () => {

  const {data: MonthOrdersAmount} = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount
  })
  return (
    <Card>
          <CardHeader className="flex-row space-y-0 items-center justify-between p-b-2">
            <CardTitle className="text-base font-semibold">Total de pedidos (mês)</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>

          <CardContent className="space-y-1">
             {MonthOrdersAmount && (
              <>
                 <span className="text-2xl font-bold tracking-tight">
                  {MonthOrdersAmount.amount}
              </span>
              {
                MonthOrdersAmount.diffFromLastMonth >= 0 ? 
                <p className=" text-xs text-muted-foreground ">
                <span className="text-emerald-500 dark:text-emerald-400">+{MonthOrdersAmount.diffFromLastMonth}%</span> em relação ao mês passado
              </p> : 
                <p className=" text-xs text-muted-foreground ">
                <span className="text-rose-500 dark:text-rose-400">{MonthOrdersAmount.diffFromLastMonth}%</span> em relação ao mês passado
              </p>
              }
              </>

             )}
          </CardContent>
        </Card>
  )
}

export default MonthOrdersAmountCard