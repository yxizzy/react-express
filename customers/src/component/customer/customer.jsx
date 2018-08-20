import React, { Component } from 'react';
import './customer.css';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customers: []
        }
    }

    componentDidMount(){
        fetch('/api/customers')
            .then (res => res.json())
            .then(Customers => this.setState({Customers} ));

        }
    render() {
        return (
            <div className="customers">
                {this.state.Customers.map(customer => 
                    <li key={customer.id}>{customer.firstName} {customer.lastname}</li>

                ) }
            </div>
        );
    }
}

export default Customers;
