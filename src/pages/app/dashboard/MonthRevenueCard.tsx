import { DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { getMonthOrdersRevenue } from "../../../api/getMonthOrdersRevenue"
import MetricCardSkeleton from "./metricCardSkeleton"
const MonthRevenueCard = () => {
  const {data: MonthOrdersRevenue} = useQuery({
    queryKey: ['metrics', 'month-revenue-orders-amount'],
    queryFn: getMonthOrdersRevenue
  })

  console.log(MonthOrdersRevenue)

  return (
    <Card>
          <CardHeader className="flex-row space-y-0 items-center justify-between p-b-2"> 
            <CardTitle className="text-base font-semibold">Total receitas (mês)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>

          <CardContent className="space-y-1">
           {
           
            MonthOrdersRevenue ? (
              <>
                <span className="text-2xl font-bold tracking-tight">
                {MonthOrdersRevenue.receipt.toLocaleString('pt', {
                  style: 'currency',
                  currency: 'AOA'
                })}
              </span>
           {
            MonthOrdersRevenue.diffFromLastMonth >= 0 ? 
            <p className=" text-xs text-muted-foreground ">
            <span className="text-emerald-500 dark:text-emerald-400">{MonthOrdersRevenue.diffFromLastMonth}%</span> em relação ao mês passado
          </p> :
             <p className=" text-xs text-muted-foreground ">
             <span className="text-rose-500 dark:text-rose-400">{MonthOrdersRevenue.diffFromLastMonth}%</span> em relação ao mês passado
           </p>
           }
              
              </>
            )
            
            : <MetricCardSkeleton/>}
          </CardContent>
        </Card>
  )
}

export default MonthRevenueCard