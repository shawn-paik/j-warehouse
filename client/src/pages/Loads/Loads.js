import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import DatePicker from 'react-datepicker';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, FormBtn } from '../../components/Form';

class Loads extends Component {
	state = {
		loads: [],
		supplier: '',
        receivedDate: new Date(),
        // items: [],
		files: [],
		comments:''
	};

	componentDidMount() {
		this.loadLoads();
	}

	loadLoads = () => {
		API.getLoads()
            .then(res => this.setState({ loads: res.data,
                supplier: '',
                receivedDate: new Date(),
                // items: [],
				files: [],
				comments: ''
                })
            )
			.catch(err => console.log(err));
	};

	deleteLoad = id => {
		API.deleteLoad(id)
			.then(res => this.loadLoads())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		if(event.target.files && event.target.files.length > 0){
            const {name, files} = event.target;
            this.setState({
                [name]: files
            })
        }else{
            const { name, value } = event.target;      
            this.setState({
                [name]: value
            });
        }
	};

	handleFormSubmit = event => {
		event.preventDefault();
        if (this.state.supplier && this.state.comments) {
            const load = {
                supplier: this.state.supplier,
                // items: this.state.items,
                receivedDate: this.state.receivedDate,
				files: this.state.files,
				comments: this.state.comments
            };
            API.saveLoad(load)
                .then(res => this.loadLoads())
                .catch(err => console.log(err));
        }
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
                            <h1>Create Load</h1>
						</Jumbotron>
						<form>
                            <Input
								value={this.state.supplier}
								onChange={this.handleInputChange}
								name="supplier"
								placeholder="Supplier (required)"
							/>
							<Input
								value={this.state.comments}
								onChange={this.handleInputChange}
								name="comments"
								placeholder="Comments (required)"
							/>
                            <DatePicker
                                selected={this.state.receivedDate}
                                onChange={this.onChangeReceivedDate}
                            />
                            {/* <Input
								value={this.state.items}
								onChange={this.handleInputChange}
								name="items"
								placeholder="Items (required)"
							/> */}
							<Input
								onChange={this.handleInputChange}
								name="files"
                                type="file"
                                multiple
							/>

							<FormBtn
								disabled={!(this.state.supplier && this.state.comments)}
								onClick={this.handleFormSubmit}
							>
								Submit Load
							</FormBtn>
						</form>
					</Col>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1>Loads</h1>
						</Jumbotron>
						{this.state.loads.length ? (
							<List>
								{/* {this.state.loads.map(load => (
									<ListItem key={load._id}>
										<Link to={'/loads/' + load._id}>
											<strong>
												{load.receivedDate} - {load.supplier}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteLoad(load._id)} />
									</ListItem>
								))} */}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Loads;
