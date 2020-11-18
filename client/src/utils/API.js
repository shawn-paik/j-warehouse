import axios from 'axios';

export default {
	// Gets all books
	getBooks: function() {
		return axios.get('/api/books');
	},
	// Gets the book with the given id
	getBook: function(id) {
		return axios.get('/api/books/' + id);
	},
	// Deletes the book with the given id
	deleteBook: function(id) {
		return axios.delete('/api/books/' + id);
	},
	// Saves a book to the database
	saveBook: function(bookData) {
		return axios.post('/api/books', bookData);
	},

		
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
		data.append('files', loadData.files);
		data.append('supplier', loadData.supplier);
		data.append('receivedDate', loadData.receivedDate);
		data.append('comments', loadData.comments);
		const config = { headers: { 'Content-Type': 'multipart/form-data' } };
		return axios.post('/api/loads', data, config);
	}
};
