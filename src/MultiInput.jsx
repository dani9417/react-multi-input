import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class MultiInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  onItemChange = ({ target: { id, value } }) => {
    this.setState(prevState => {
      let newItems = [...prevState.items];
      newItems[id] = value;
      return {
        items: newItems
      };
    });
  };

  onItemDelete = ({ target: { id } }) => {
    this.setState(prevState => ({
      items: prevState.items.filter((_, i) => i !== +id)
    }));
  };

  save = () => {
    this.props.onChange(this.state.items);
  };

  render() {
    const { items } = this.state;
    const itemsToRender = [...items, ""];
    return (
      <div>
        <div className="wrapper">
          <div className="title">Test</div>
          <div className="inputs">
            {itemsToRender.map((item, idx) => {
              const deleteButton =
                idx !== items.length ? (
                  <i
                    id={idx}
                    onClick={this.onItemDelete}
                    className="material-icons"
                  >
                    close
                  </i>
                ) : null;
              return (
                <div key={idx} className="input-field">
                  <input
                    id={idx}
                    type="text"
                    value={item}
                    onChange={this.onItemChange}
                  />
                  <label className={item ? "active" : ""}>test attribute</label>
                  {deleteButton}
                </div>
              );
            })}
          </div>
        </div>
        <div className="buttons">
          <span className="blue-text button" onClick={this.save}>
            SAVE
          </span>
          <span className="button">CANCEL</span>
        </div>
      </div>
    );
  }
}

MultiInput.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiInput;
