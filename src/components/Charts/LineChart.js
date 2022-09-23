import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
const LineChart = () => {
    return (
        <ChartComponent
            id='line-chart'
            height='420px'
            tooltip={{ enable: true }}
        >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>x
                {lineCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart