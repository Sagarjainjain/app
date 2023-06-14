import React from "react";
import "./inputaccord.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiPerson } from "react-icons/gi";
import { BiHotel } from "react-icons/bi";

class InputAccord extends React.Component {
  constructor(){
    super() 
      this.state = {
        isOpen: false,
        person: 1,
        rooms: 1,
      };
  
  }
  componentDidMount() {
  }
    handlestatetrue = () => {
      this.setState({ isOpen: true });
      // this.setState({isOpen: this.state.isOpen = true})
    }
    handlestatefalse = () => {
      this.setState({ isOpen: false });
    //  this.setState({isOpen: this.state.isOpen = false})
    }

  handleincreasevalue = () => {
    this.setState({ person: this.state.person + 1 });
  };
  handledecreasevalue = () => {
    if (this.state.person === 0) {
      this.setState({ person: this.state.person - 0 });
    } else {
      this.setState({ person: this.state.person - 1 });
    }
  };

  handleroomincrease = () => {
    this.setState({ rooms: this.state.rooms + 1 });
  };

  handleroomdecrease = () => {
        if (this.state.rooms === 0) {
          this.setState({ rooms: this.state.rooms - 0 });
        } else {
          this.setState({ rooms: this.state.rooms - 1 });
        }
  }
  render() {
    return (
      <div className="ey-input_accord">
        <div className="ey-input_accord-card">
          <div className="ey-input_accord-input">
            <p>{this.state.person} Adult</p>
            <p>{this.state.rooms} Rooms</p>
          </div>
          {this.state.isOpen ? (
            <IoIosArrowUp onClick={() => this.handlestatefalse()} />
          ) : (
            <IoIosArrowDown onClick={() => this.handlestatetrue()} />
          )}
        </div>
        {this.state.isOpen && (
          <div className="ey-collapsed-card">
            <div className="ey-collaped-card-input">
              <div className="ey-collaped-card-input_person">
                <GiPerson size={20} />
                <p>Person</p>
              </div>
              <div className="ey-collaped-card-input_change">
                <button
                  type="button"
                  onClick={() => this.handledecreasevalue()}
                >
                  -
                </button>
                <p>{this.state.person}</p>
                <button
                  type="button"
                  onClick={() => this.handleincreasevalue()}
                >
                  +
                </button>
              </div>
            </div>
            <div className="ey-collaped-card-input">
              <div className="ey-collaped-card-input_person">
                <BiHotel size={20} />
                <p>Rooms</p>
              </div>
              <div className="ey-collaped-card-input_change">
                <button type="button" onClick={() => this.handleroomdecrease()}>
                  -
                </button>
                <p>{this.state.rooms}</p>
                <button type="button" onClick={() => this.handleroomincrease()}>
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// const InputAccord = () => {
//     const [personvalue, setPersonValue] = ("0")
//     // const person = 0;
//     const rooms = 0;
//     const handleperson = () => {

//     }
//   return (
//     <div className="ey-input_accord">
//       <div className="ey-input_accord-card">
//         <div className="ey-input_accord-input">
//           <p>{personvalue} Adult</p>
//           <p>{rooms} Rooms</p>
//         </div>
//         {isOpen ? (
//           <IoIosArrowUp onClick={() => setIsOpen(false)} />
//         ) : (
//           <IoIosArrowDown onClick={() => setIsOpen(true)} />
//         )}
//       </div>
//       {isOpen &&
//       <div className="ey-collapsed-card">
//         <div className="ey-collaped-card-input">
//           <div className="ey-collaped-card-input_person">
//             <GiPerson size={20} />
//             <p>Person</p>
//           </div>
//           <div className="ey-collaped-card-input_change">
//             <button type='button' >-</button>
//             <p>{personvalue}</p>
//             <button type='button' onClick={() => handleperson} >+</button>
//           </div>
//         </div>
//         <div className="ey-collaped-card-input">
//           <div className="ey-collaped-card-input_person">
//             <BiHotel size={20} />
//             <p>Rooms</p>
//           </div>
//           <div className="ey-collaped-card-input_change">
//             <button type='button' >-</button>
//             <p>{rooms}</p>
//             <button type='button' >+</button>
//           </div>
//         </div>

//       </div>
//       }
//     </div>
//   );
// }

export default InputAccord;
