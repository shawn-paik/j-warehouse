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
		data.append('file', loadData.file);
		data.append('supplier', loadData.supplier);
		data.append('receivedDate', loadData.receivedDate);
		data.append('comments', loadData.comments);
		const config = { headers: { 'Content-Type': 'multipart/form-data' } };
		return axios.post('/api/loads', data, config);
	}
};
