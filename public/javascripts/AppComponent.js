import React, { Component } from 'react';

export default class MainComponent extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLoadPage = this.handleLoadPage.bind(this);
    this.handleSavePage = this.handleSavePage.bind(this);
  }
  handleChange (i, event) {
    event.persist();
    this.props.updateRow(i, event.target.value);
  }
  handleSavePage (event) {
    event.preventDefault();
    let pageName = document.getElementsByName('savedName')[0].value;
    let newPage = {};
    newPage[pageName] = this.props.rows;
    this.props.savePage(newPage);
    document.getElementsByName('savedName')[0].value = '';
  }
  handleLoadPage (event) {
    event.preventDefault();
    let pageName = document.getElementsByName('savedName')[0].value;
    this.props.loadPage(pageName);
  }
  render () {
    return (
      <table width="100%">
        <thead>
          <tr>
            <th colSpan={3}>
              <form><span>Name: </span><input name="savedName" /> <button onClick={this.handleLoadPage}>Load</button> <button onClick={this.handleSavePage}>Save</button></form>
            </th>
          </tr>
          <tr>
            <th>Enter Your JSON Style Here</th>
            <th>Here's what that would look like</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.rows && this.props.rows.map((row,i) => {
            return (
              <tr key={i}>
                <td width="50%"><textarea onChange={(event) => this.handleChange(i, event)} style={{width:"100%"}} value={JSON.stringify(row)}></textarea></td>
                <td width="50%"><div style={row} className="default-style">This is Row #{i}</div></td>
              </tr>
            )
          })
        }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><button onClick={this.props.addRow}>Add Row</button></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}