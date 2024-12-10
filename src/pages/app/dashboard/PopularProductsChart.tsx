import { BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import {PiePopularProductChart} from "./PiePopularProductChart"

const PopularProductsChart = ()=> {
  return (
    <Card className="col-span-3">
    <CardHeader className="pb-8">
    <div className="flex items-center justify-between">
      <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
      <BarChart className="w-4 h-4 text-muted-foreground"/>        
    </div>
      <CardContent>
        <PiePopularProductChart/>
    </CardContent>
        </CardHeader>
    </Card>
  )
  
}

export default PopularProductsChart