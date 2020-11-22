import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            surname: this.props.surname,
            position: this.props.position,
            disabled: true,
            btnText: false,
        };
        this.changePersons = this.changePersons.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        if (e.target.name === "name") {
            this.setState({
                name: e.target.value,
            });
        } else {
            if (e.target.name === "surname") {
                this.setState({
                    surname: e.target.value,
                });
            } else {
                if (e.target.name === "position") {
                    this.setState({
                        position: e.target.value,
                    });
                }
            }
        }
    }

    changePersons(e) {
        e.preventDefault();
        this.setState({
            btnText: !this.state.btnText,
            disabled: !this.state.disabled,
        });
    }

    render() {
        const { disabled, btnText } = this.state;
        const { id, onDelete } = this.props;

        const icon = btnText
            ? "https://img.icons8.com/carbon-copy/100/000000/save.png"
            : "https://img.icons8.com/carbon-copy/100/000000/edit--v1.png";

        return (
            <>
                <span>{id}</span>
                <form>
                    <input
                        disabled={disabled}
                        name="name"
                        className="form-input"
                        type="text"
                        onChange={this.onValueChange}
                        value={this.state.name}
                    />
                    <input
                        disabled={disabled}
                        name="surname"
                        className="form-input"
                        type="text"
                        onChange={this.onValueChange}
                        value={this.state.surname}
                    />
                    <input
                        disabled={disabled}
                        name="position"
                        className="form-input"
                        type="text"
                        onChange={this.onValueChange}
                        value={this.state.position}
                    />
                </form>
                <div className="btns-items">
                    <button
                        type="submit"
                        className="btn-change"
                        onClick={this.changePersons}
                    >
                        <img className="img-change" src={icon}></img>
                    </button>
                    <button
                        type="button"
                        className="btn-delete"
                        onClick={onDelete}
                    >
                        <img
                            className="img-delete"
                            src="https://img.icons8.com/carbon-copy/100/000000/full-trash.png"
                        />
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </>
        );
    }
}
