import axios from 'axios';
const API_URL = 'http://localhost:8000';



export default class ArticleTagService {

    getArticleTag(){
        const url = `${API_URL}/api/article/tag/`;
        return axios.get(url).then(response=>response.data);
    }

    createArticleTag(tag){
        const url = `${API_URL}/api/article/tag/`;
        return axios.post(tag, url);
    }

    updateArticleTag(tag){
        const url = `${API_URL}/api/article/tag/${tag.id}/`
        return axios.put(url);
    }

    deleteArticelTag(tag){
        const url = `${API_URL}/api/article/tag/${tag.id}/`
        return axios.delete(url);
    }
}
