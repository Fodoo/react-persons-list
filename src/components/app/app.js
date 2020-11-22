import React, { Component } from "react";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "Иван",
                    surname: "Иванов",
                    position: "Менеджер",
                    id: 1,
                },
                {
                    name: "Сергей",
                    surname: "Сергеев",
                    position: "Сисадмин",
                    id: 2,
                },
                {
                    name: "Андрей",
                    surname: "Андреев",
                    position: "Архитектор",
                    id: 3,
                },
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id == id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr,
            };
        });
    }

    addItem(e) {
        e.preventDefault();
        const newItem = {
            name: "",
            surname: "",
            position: "",
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <PostAddForm onAdd={this.addItem} />
                <ul className="title-list">
                    <li className="title-list-item">№</li>
                    <li className="title-list-item">Имя</li>
                    <li className="title-list-item">Фамилия</li>
                    <li className="title-list-item">Должность</li>
                    <li className="title-list-item">Действие</li>
                </ul>
                <PostList posts={data} onDelete={this.deleteItem} />
            </div>
        );
    }
}
