import React from 'react'
import Photo from "./profil/imgSrc"
import FullName from "./profil/fullName";
import Bio from "./profil/bio";
import Profession from "./profil/profession";
import image from "./profil/img/selim.png"


const styleObject = { color: "blue", textAlign: 'center' }



class App extends React.Component {
  state = {
    show: false,
    timer: 0
  }
  handleClick = () => {
    this.setState({ show: !this.state.show })
  }
  componentDidMount() {
    // trouve un moyen de change chaque second le state de time +1 avec la methode setInterval et this.setState({})

    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000)
  }
  render() {
    return (
      <div style={styleObject}>

        <h1>{this.state.timer}</h1>
        <button onClick={this.handleClick}> ClickMe</button>
        { this.state.show && <div>
          <Photo image={image} />
          <FullName fullname={"selim"} />
          <Profession profession={"pro"} />
          <Bio bio={"bio"} />
        </div>
        }


      </div>

    );
  }
}

export default App;