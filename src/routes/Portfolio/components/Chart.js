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
  responsive: true
}
class Chart extends React.Component {

  constructor (props) {
    super(props)
    this.timer = false
    this.state = {
      width: 300,
      height: 300,
      resizing: false
    }
  }

  _calculateDimensions = () => {
    let width = window.innerWidth ||
      document.documentElement.clientWidth||
      document.body.clientWidth

    let height = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    let size = Math.min(width, height) * 0.4
    return size
  }

  componentDidMount () {
    const size = this._calculateDimensions()
    this.setState({ width: size, height: size })

    window.onresize = () => {
      this.setState({ resizing: true })
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      this.timmer = setTimeout(() => {
        const size = this._calculateDimensions()
        this.setState({ width: size, height: size, resizing: false })
      }, 500)
    }
  }

  render () {
    let { props } = this
    const toRender = <div>
      <div className='row risk-chart__chart'>
        <h2>Risk Level {props.riskLevel}</h2>

        <Doughnut
          width={this.state.width}
          height={this.state.height}
          data={props.chartData}
          options={chartOptions} />
      </div>
      <div className='row risk-chart__slider'>
        <InputRange
          maxValue={props.riskLevelsCount}
          minValue={1}
          value={props.riskLevel}
          onChange={value => props.changeRiskLevel({ value })} />
      </div>
      <div className='row slider-label'>
        <h3>Risk Slider</h3>
      </div>
    </div>
    return (

      <div className='risk-chart row'>
        {(this.state.resizing) ? 'Loading...' : toRender }
      </div>
    )
  }
}
Chart.propTypes = {
  chartData: PropTypes.object,
  riskLevel: PropTypes.number,
  changeRiskLevel: PropTypes.func,
  riskLevelsCount: PropTypes.number
}

export default Chart
