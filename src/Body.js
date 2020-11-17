import React from "react";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      expressen: {},
      loading: false
    };
  }

  componentDidMount() {
    /*this.setState({ loading: true });
    fetch(
      "http://carbonateapiprod.azurewebsites.net/api/v1/mealprovidingunits/4dce0df9-c6e7-46cf-d2a7-08d558129279/dishoccurrences"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          expressen: data
        });
      });*/

    this.setState({ loading: true });

    let cachedMenu;

    if (localStorage.getItem("cached-menu"))
      cachedMenu = JSON.parse(localStorage.getItem("cached-menu"));

    // setting cachedMenu to null if it wasn't stored today
    if (cachedMenu && new Date().toDateString() !== cachedMenu.date)
      cachedMenu = null;

    // if cachedMenu still got value, it means we can use it as valid cache for today
    if (cachedMenu)
      this.setState({
        isLoaded: true,
        items: cachedMenu.value
      });
    else
      fetch(
        "https://carbonateapiprod.azurewebsites.net/api/v1/mealprovidingunits/4dce0df9-c6e7-46cf-d2a7-08d558129279/dishoccurrences"
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading: false,
            expressen: data
          });
        });
  }

  render() {
    const meat = this.state.loading
      ? "loading..."
      : this.state.expressen && this.state.expressen[0]
      ? this.state.expressen[0].displayNames[0].dishDisplayName
      : null;

    const veg = this.state.loading
      ? "loading..."
      : this.state.expressen && this.state.expressen[1]
      ? this.state.expressen[1].displayNames[0].dishDisplayName
      : null;

    return (
      <div>
        <h1 className="headerMeat">Kokboken:</h1>
        <b className="menu">{meat}</b>
        <h1 className="headerVeg">Veg:</h1>
        <b className="menu">{veg}</b>
      </div>
    );
  }
}
export default Body;
