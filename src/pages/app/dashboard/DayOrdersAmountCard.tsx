import { Utensils } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { getDayOrdersAmount } from "../../../api/getDayOrdersAmount"
const DayOrdersAmountCard = () => {

  const {data: DayOrdersAmount} = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount
  })

  
  return (
    <Card>
          <CardHeader className="flex-row space-y-0 items-center justify-between p-b-2">
            <CardTitle className="text-base font-semibold">Total de pedidos (dia)</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>

          <CardContent className="space-y-1">
            {DayOrdersAmount && (
              <>
                <span className="text-2xl font-bold tracking-tight">
               {DayOrdersAmount.amount.toLocaleString('pt-Pt')}
              </span>
              {
                DayOrdersAmount.diffFromYesterday >= 0 ?   <p className=" text-xs text-muted-foreground ">
                <span className="text-emerald-500 dark:text-emerald-400">{DayOrdersAmount?.diffFromYesterday}%</span> em relação a ontem
              </p> :   
              
              <p className=" text-xs text-muted-foreground ">
                <span className="text-rose-500 dark:text-rose-400">-{DayOrdersAmount?.diffFromYesterday}%</span> em relação a ontem
              </p>
              }
              
              </>
            )}
          </CardContent>
        </Card>
  )
}

export default DayOrdersAmountCard