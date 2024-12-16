import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../../components/ui/chart"
import { useQuery } from "@tanstack/react-query"
import { getDailyRevenueInPeriod } from "../../../api/getDailyRevenueInPeriod"
import { DateRange } from "react-day-picker"
import { useMemo } from "react"


const chartConfig = {
  revenue: {
    label: "Recebimentos",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

interface RevenueChartProps {
  dateRange: DateRange | undefined,
  onDateChange:(date: DateRange | undefined) => void
}


const RevenueLineChart = ({dateRange}: RevenueChartProps) => {
  const {data: DailyRevenueInPeriod} = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn:()=>  getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to
    })
  })  

  // Formmatting the daily revenue data
  const formmatedDailyRevenuePeriod = useMemo(()=>{
    return DailyRevenueInPeriod?.map(item => {
      return {
        date: item.date,
        receipt: item.receipt / 100
      }
    })

  }, [DailyRevenueInPeriod])

  return (
  <ChartContainer config={chartConfig} className="h-48 w-full">
    <LineChart
        accessibilityLayer
        data={formmatedDailyRevenuePeriod}
        margin= {{
        left: 0,
        right: 12,
      }}
      >
      <CartesianGrid vertical={false}/>
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis dataKey="receipt"  
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
          dataKey="receipt"
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