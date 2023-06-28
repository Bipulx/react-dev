import React from 'react'
import Column from "../components/column"
//React fragment
const table = () => {
  return (
    <div>
      <table>
        <tbody>
            <tr>
                <Column/>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default table
