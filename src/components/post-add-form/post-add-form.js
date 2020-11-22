import React, { Component } from "react";

import "./post-add-form.css";

export default class PostAddForm extends Component {
    render() {
        return (
            <button
                type="sumbit"
                className="btn-add"
                onClick={this.props.onAdd}
            >
                Добавить пользователя
            </button>
        );
    }
}
