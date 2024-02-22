import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment.js'

function ResultsTable({userInput}) {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
  // console.log(annualData)
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest earned(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(yearData => {
          const totalInterest = yearData.valueEndOfYear -
          yearData.annualInvestment * yearData.year - 
          initialInvestment;

          const totalCapital = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalCapital)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ResultsTable
