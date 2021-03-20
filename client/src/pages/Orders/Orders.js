import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, FormBtn } from '../../components/Form';
import styles from '../../mystyle.module.css'; 

class Orders extends Component {
	state = {
		orders: [],
		supplier: '',
        orderDate: new Date(),
        // items: [],a
		filesCollection: null,
		comments:'',
		order: null,
		showForm: false
	};

	fileInput = React.createRef();

	componentDidMount() {
		this.loadOrders();
	}

	getOrder = (id) =>{
		API.getOrder(id)
			.then(res=> {
				this.setState({order:res.data})
				console.log(res.data);
			})
			.catch(err=>console.log(err));
	}

	loadOrders = () => {
		API.getOrders()
            .then(res =>{
				this.setState({ orders: res.data,
					supplier: '',
					orderDate: new Date(),
					filesCollection: null,
					comments: '',
				})
			})
			.catch(err => console.log(err));
	};

	deleteOrder = id => {
		API.deleteOrder(id)
			.then(res => this.loadOrders())
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
        debugger;
		event.preventDefault();
        if (this.state.supplier && this.state.comments) {
            const order = {
                supplier: this.state.supplier,
                orderDate: this.state.orderDate,
				filesCollection: this.state.filesCollection,
				comments: this.state.comments
            };
			
            API.saveOrder(order)
                .then((res) => {
					document.getElementById('file-input').value="";
					this.loadOrders()
				})
                .catch(err => console.log(err));
        }
	};

	setShow = () => {this.setState({
		showForm: !this.state.showForm
	})};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron style={{height: "700px"}}>
							{this.state.orders.length ? (
								<List style={{height:"700px"}}>
									{this.state.orderss.map(order => (
										<ListItem key={order._id}>
											<button onClick={() => {this.getOrder(order._id)}}>
												<strong>
													{new Date(order.orderDate).toLocaleDateString()} - {order.supplier}
												</strong>
											</button>
											<DeleteBtn onClick={() => this.deleteOrder(order._id)} />
										</ListItem>
									))}
								</List>
							) : (
								<h3>No Results to Display</h3>
							)}
						</Jumbotron>
					</Col>
					

					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1>Order</h1>
							{this.state.order != null ? 
								<ul>
									<li>Date Ordered: {new Date(this.state.order.orderDate).toLocaleDateString()}</li>
									<li>Comments: {this.state.order.comments}</li>
									<li>Supplier: {this.state.order.supplier}</li>
									{this.state.order.files.length > 0 && 
										<React.Fragment>
											<li>Attached Files: </li>
											<ul>
												{this.state.order.files.map((v, i)=>{
													return (
														<li><a href={v.location} target="_blank" rel="noreferrer noopener">{v.fileName}</a></li>
													)
												})}
											</ul>
										</React.Fragment>										
									}
								</ul>  
							: null}
						</Jumbotron>
						<button onClick={() => {this.setShow()}} value="Form" className={styles.marginBottom20}>Form</button>
								{this.state.showForm && <form className={styles.formMarginRight}>
															<Input
									value={this.state.supplier}
									onChange={this.handleInputChange}
									name="supplier"
									placeholder="Supplier (required)"
								/>
								<textarea className={styles.marginBottom20, styles.textArea}
									value={this.state.comments}
									onChange={this.handleInputChange}
									name="comments"
									placeholder="Comments (required)"
									></textarea>
								
															<DatePicker className={styles.margin15}
																	selected={this.state.orderDate}
																	onChange={this.onChangeOrderDate}
															/>
								<Input
									onChange={this.handleInputChange}
									name="filesCollection"
									type="file"
									multiple
									id="file-input"
								/>

								<FormBtn
									disabled={!(this.state.supplier && this.state.comments)}
									onClick={this.handleFormSubmit}
								>
									Submit Order
								</FormBtn>
							</form>}
						
					</Col>
				</Row>
			</Container>
			
		);
	}
}

export default Orders;
