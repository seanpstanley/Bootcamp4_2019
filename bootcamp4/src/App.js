import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      selectedData: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  addedUpdate(code, name, latitude, longitude, address) {
    const newID = this.state.selectedData.length + 1;
    const building = {
      id: newID,
      code: code,
      name: name,
      coordinates: { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
      address: address
    };
    this.setState({
      selectedData: this.state.selectedData.concat(building)
    })
  }

  removedUpdate(id) {
    this.setState({
      selectedData: this.state.selectedData
        .filter(building => {
          return (
            building.id !== id
          )
        })
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="header">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <b>Code Building</b>
                      </td>
                    </tr>
                  </tbody>
                  <BuildingList
                    data = {this.state.selectedData}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <RemoveBuilding
                selectedBuilding = {this.state.selectedBuilding}
                removedUpdate = {this.removedUpdate.bind(this)}
              />
              <ViewBuilding
                data = {this.state.selectedData}
                selectedBuilding = {this.state.selectedBuilding}
              />
            </div>
            <div className="row2">
              <AddBuilding
                addedUpdate = {this.addedUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;