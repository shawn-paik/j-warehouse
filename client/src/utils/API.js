import axios from 'axios';

export default {
	

		
	getLoads: function() {
		return axios.get('/api/loads');
	},
	
	getLoad: function(id) {
		return axios.get('/api/loads/' + id);
	},
	
	deleteLoad: function(id) {
		return axios.delete('/api/loads/' + id);
	},
	
	saveLoad: function(loadData) {
		const data = new FormData();
		// data.append('files', loadData.files);
		data.append('supplier', loadData.supplier);
		data.append('receivedDate', loadData.receivedDate);
		data.append('comments', loadData.comments);
		for(const key of Object.keys(loadData.filesCollection)){
			data.append('filesCollection', loadData.filesCollection[key])
		};
		// const config = { headers: { 'Content-Type': 'multipart/form-data' } };
		return axios.post('/api/loads', data);
	},
	getOrders: function() {
		return axios.get('/api/orders');
	},
	
	getOrder: function(id) {
		return axios.get('/api/orders/' + id);
	},
	
	deleteOrder: function(id) {
		return axios.delete('/api/orders/' + id);
	},
	
	saveOrder: function(orderData) {
		const data = new FormData();
		data.append('supplier', orderData.supplier);
		data.append('orderDate', orderData.orderDate);
		data.append('comments', orderData.comments);
		for(const key of Object.keys(orderData.filesCollection)){
			data.append('filesCollection', orderData.filesCollection[key])
		};
		return axios.post('/api/orders', data);
	}
};
