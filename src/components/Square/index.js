import React from "react";

class Square extends React.Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <button className="square" onClick={() => onClick()}>
        {value}
      </button>
    );
  }
}

// function Square(props) {
//     return(
//         <button className='square' onClick={props.onClick}>
//             {props.value}
//         </button>
//     )

// }

export default Square;
