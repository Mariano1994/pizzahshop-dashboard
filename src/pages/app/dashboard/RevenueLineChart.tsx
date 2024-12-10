import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../../components/ui/chart"


const chartData = [
  { date: "10/12", revenue: 18689 },
  { date: "11/12", revenue: 30879 },
  { date: "12/12", revenue: 23778 },
  { date: "13/12", revenue: 7369 },
  { date: "14/12", revenue: 7993 },
  { date: "15/12", revenue: 20789 },
  { date: "16/12", revenue: 21764 },
]


const chartConfig = {
  revenue: {
    label: "Recebimentos",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


const RevenueLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-48 w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin= {{
        left: 0,
        right: 12,
      }}
   >
    <CartesianGrid vertical={false} />
      <XAxis
        dataKey="date"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
 
      // tickFormatter={(value) => value.slice(0, 3)}
    />
    <YAxis dataKey="revenue"  
      tickLine={false}
      axisLine={false}
      tickMargin={8}
      width={100}
      tickFormatter={(value: number) => value.toLocaleString('en', {style: 'currency', currency: 'aoa'})}
      />
      
    <ChartTooltip
      cursor={false}
      content={<ChartTooltipContent hideLabel />}
    />
    <Line
      dataKey="revenue"
      type="linear"
      stroke="var(--color-revenue)"
      strokeWidth={2}
      dot={false}
    />
  </LineChart>
  </ChartContainer>
  )
}
export default RevenueLineChart