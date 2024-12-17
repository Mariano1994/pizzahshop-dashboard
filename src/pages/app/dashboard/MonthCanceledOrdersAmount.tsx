import { Ban } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { getMonthCanceledOrdersAmount } from "../../../api/getMonthCanceledOrdersAmount"
import MetricCardSkeleton from "../dashboard/MetricCardSkeleton"
const MonthCanceledOrdersAmount = () => {

  const {data: MonthCanceledOrdersAmount} = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount
  })

  return (
    <Card>
          <CardHeader className="flex-row space-y-0 items-center justify-between p-b-2">
            <CardTitle className="text-base font-semibold">Pedidos Cancelados (mês)</CardTitle>
            <Ban className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>

          <CardContent className="space-y-1">
          {MonthCanceledOrdersAmount ? (
            <>
              <span className="text-2xl font-bold tracking-tight">
                 {MonthCanceledOrdersAmount.amount}
              </span>
             {
              MonthCanceledOrdersAmount.diffFromLastMonth >= 0 ?  
              <p className=" text-xs text-muted-foreground ">
              <span className="text-rose-500 dark:text-rose-400">{MonthCanceledOrdersAmount.diffFromLastMonth}%</span> em relação ao mês anterior
              </p> : 
             <p className=" text-xs text-muted-foreground ">
             <span className="text-emerald-500 dark:text-emerald-400">{MonthCanceledOrdersAmount.diffFromLastMonth}%</span> em relação ao mês anterior
           </p>
             }
            </>
          ) : <MetricCardSkeleton/> }
          </CardContent>
        </Card>
  )
}

export default MonthCanceledOrdersAmount