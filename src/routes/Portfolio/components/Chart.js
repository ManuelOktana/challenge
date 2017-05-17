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
  maintainAspectRatio: false,
  responsive:true
}
export const Chart = (props) => (
  <div className='risk-chart'>
    <div className='risk-chart__chart'>
      <h2>Risk Level {props.riskLevel}</h2>
      <Doughnut width={100} height={250} data={props.chartData} options={chartOptions} />
    </div>
    <div className='risk-chart__slider'>
      <InputRange
        maxValue={8}
        minValue={1}
        value={props.riskLevel}
        onChange={value => props.changeRiskLevel({ value })} />
    </div>
  </div>
)

Chart.propTypes = {
  chartData: PropTypes.object,
  riskLevel: PropTypes.number,
  changeRiskLevel: PropTypes.func
}

export default Chart
