import React from 'react';
import axios from 'axios';

class ArticleList extends React.Component
{
    state = 
    {
        articles: []
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/api')
        .then(res =>
            {
                this.setState(
                    {
                        articles: res.data
                    })
                console.log(res.data);
            })
    }
}

export default ArticleList;