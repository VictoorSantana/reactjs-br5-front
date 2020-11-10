

export default {

    post: async (data, servico) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        return fetch('http://127.0.0.1:5000/api/' + servico, requestOptions)
            .then(response => { return response.text() })
            .then(result => { return result })
            .catch(error => { return error });

    },


    getc: async (data, servico) => {

        var raw = "";

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch('http://127.0.0.1:5000/api/' + servico, requestOptions)
            .then(response => { return response.text() })
            .then(result => { return result })
            .catch(error => { return error });
    },

    delete: async (data, servico) => {

        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        return fetch('http://127.0.0.1:5000/api/' + servico, requestOptions)
            .then(response => { return response.text() })
            .then(result => { return result })
            .catch(error => { return error });

    }

}