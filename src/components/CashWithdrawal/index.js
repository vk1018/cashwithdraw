import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-con">
        <div className="card">
          <div className="profile-con">
            <div className="profile-logo">V</div>
            <p className="profile-name">Vamsi</p>
          </div>

          <div className="withdraw-con">
            <p className="text">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="withdraw-text">In Rupees</p>
            </div>
          </div>

          <p className="withdraw-sub-heading">Withdraw</p>
          <p className="withdraw-side-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-con">
            {denominationsList.map(each => (
              <DenominationItem
                denominationItem={each}
                withdrawAmount={this.withdrawAmount}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
