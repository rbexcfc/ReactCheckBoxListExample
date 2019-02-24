import React, { Component } from 'react';
import Checkbox from './checkbox';

class App extends Component {
state ={
  organisations:[
    {id:"1", value:'Organisation 1', isChecked: false},
    {id:"2", value:'Organisation 2', isChecked: false},
    {id:"3", value:'Organisation 3', isChecked: false}
  ]
}

handleAllChecked =(e) =>{
  let organisations = this.state.organisations
  organisations.forEach(org => org.isChecked = e.target.checked)
  this.setState({organisations:organisations})
}

handleOrgChecked =(e) =>{
  let organisations = this.state.organisations
  organisations.forEach(org => {
    if(org.id === e.target.id)
    org.isChecked = e.target.checked
  })
  this.setState({organisations:organisations})
}

handleShareOrgs =(e) =>{
  let organisations = this.state.organisations
  const result = organisations.filter(org => org.isChecked).map(org=>{
    return(org.value)
  })

  if(result.length === 0){
    alert("At least one org must be selected")
  }
  alert(`Orgs to share = ${result}`)
}

  render() {
    return (
      <div className="App">
        <h1>Organisation Checkbox example</h1>
        <input type="checkbox" onChange={this.handleAllChecked} /> Check / Uncheck All
        <ul>
        {
          this.state.organisations.map((org) => {
            return (<Checkbox key={org.id} handleOrgChecked={this.handleOrgChecked}  {...org} />)
          })
        }
        </ul>
        <button onClick={this.handleShareOrgs}>Share Orgs</button>
      </div>
    )
  }
}

export default App

