import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import DatePicker from 'react-datepicker';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, FormBtn } from '../../components/Form';
import styles from '../../mystyle.module.css'; 

class Loads extends Component {
	state = {
		loads: [],
		supplier: '',
        receivedDate: new Date(),
        // items: [],a
		filesCollection: null,
		comments:'',
		load: null,
		showForm: false
	};

	fileInput = React.createRef();

	componentDidMount() {
		this.loadLoads();
	}

	getLoad = (id) =>{
		API.getLoad(id)
			.then(res=> {
				this.setState({load:res.data})
				console.log(res.data);
			})
			.catch(err=>console.log(err));
	}

	loadLoads = () => {
		API.getLoads()
            .then(res =>{
				this.setState({ loads: res.data,
					supplier: '',
					receivedDate: new Date(),
					filesCollection: null,
					comments: '',
				})
			})
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
                receivedDate: this.state.receivedDate,
				filesCollection: this.state.filesCollection,
				comments: this.state.comments
            };
			
            API.saveLoad(load)
                .then((res) => {
					document.getElementById('file-input').value="";
					this.loadLoads()
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
						<Jumbotron>
							{this.state.loads.length ? (
								<List>
									{this.state.loads.map(load => (
										<ListItem key={load._id}>
											<button onClick={() => {this.getLoad(load._id)}}>
												<strong>
													{new Date(load.receivedDate).toLocaleDateString()} - {load.supplier}
												</strong>
											</button>
											{/* <DeleteBtn onClick={() => this.deleteLoad(load._id)} /> */}
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
							<h1>Load</h1>
							{this.state.load != null ? 
								<ul>
									<li>Date Received: {new Date(this.state.load.receivedDate).toLocaleDateString()}</li>
									<li>Comments: {this.state.load.comments}</li>
									<li>Supplier: {this.state.load.supplier}</li>
									{this.state.load.files.length > 0 && 
										<React.Fragment>
											<li>Attached Files: </li>
											<ul>
												{this.state.load.files.map((v, i)=>{
													return (
														<li><a href={v.location} target="_blank" rel="noreferrer noopener">{v.fileName}</a></li>
													)
												})}
											</ul>
										</React.Fragment>										
									}
									{/* getfile */}
									{/* <li>{this.state.load.files}</li> */}
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
																	selected={this.state.receivedDate}
																	onChange={this.onChangeReceivedDate}
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
									Submit Load
								</FormBtn>
							</form>}
						
					</Col>
				</Row>
			</Container>
			
		);
	}
}

export default Loads;
