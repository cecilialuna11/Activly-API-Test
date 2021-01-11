import axios from 'axios'

export default {
    getData: () => 
    axios({
        'method': 'GET',
        'url': 'https://cat-fact.herokuapp.com/facts/random?',
        'params': {
            'amount': 10
        }

    })
}
