import { useState } from 'react'
import { DateRangePicker } from '../../../components/DatePickerRange'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from'../../../components/ui/card'
import { Label } from '../../../components/ui/label'
import RevenueLineChart from './RevenueLineChart'
import { DateRange } from 'react-day-picker'
import {subDays} from 'date-fns'

export function RevenueChart() {
  const [dateRange, setDateRange ] = useState<DateRange | undefined>({
    from: subDays(new Date, 7) ,
    to: new Date(),
  })
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-rows justify-between gap-10 pb-8">
        <div className='flex items-center justify-between'>  
          <div className="space-y-1">
              <CardTitle className="text-base font-medium">Receite no periodo</CardTitle>
              <CardDescription>Receita diaria no periodo</CardDescription>           
          </div>
          <div className='flex items-center gap-3'>
            <Label>Periodo</Label>
            <DateRangePicker date={dateRange} onDateChange={setDateRange}/>
          </div>
        </div>
        <CardContent>
          <RevenueLineChart dateRange={dateRange} onDateChange={setDateRange}/>
        </CardContent>
          </CardHeader>
      </Card>
    )
}