import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'
import './Chart.scss'

const chartOptions = {
  legend: {
    position: 'top'
  },
  maintainAspectRatio: true,
  responsive:true

}
export const Chart = (props) => (
  <div className='risk-chart'>
    <div className='row risk-chart__chart'>
      <h2>Risk Level {props.riskLevel}</h2>
      <Doughnut width={100} height={100} data={props.chartData} options={chartOptions} />
    </div>
    <div className='row risk-chart__slider'>
      <InputRange

        formatLabel={value => `Risk ${value}`}
        maxValue={props.riskLevelsCount}
        minValue={1}
        value={props.riskLevel}
        onChange={value => props.changeRiskLevel({ value })} />
    </div>
  </div>
)

Chart.propTypes = {
  chartData: PropTypes.object,
  riskLevel: PropTypes.number,
  changeRiskLevel: PropTypes.func,
  riskLevelsCount: PropTypes.number
}

export default Chart
