import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from'../../../components/ui/card'
import RevenueLineChart from './RevenueLineChart'

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-rows justify-between gap-10 pb-8">
      <div className="space-y-1">
        <CardTitle className="text-base font-medium">Receite no periodo</CardTitle>
        <CardDescription>Receita diaria no periodo</CardDescription>           
      </div>
        <CardContent>
          <RevenueLineChart/>
      </CardContent>
          </CardHeader>
      </Card>
    )
}