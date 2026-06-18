import { useDispatch, useSelector } from "react-redux";
import { addArticle, getArticleFromApi } from "../store/articlesSlices";
import { Spinner } from "./Spinner";


export function ArticleList() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles);

    function handlerAddArticle() {
        /*
        dispatch({
            type: 'articles/addArticle'
        })
        */
        //equivalent avec les actions créator :  dispatch(addArticle());
        dispatch(getArticleFromApi());
        
    }

    return (<div>
        <h1>Hello</h1>

        <button onClick={handlerAddArticle}>add</button>
        
        {articles.isPending && (
            <div>
                <p>haaaaaaaaaaa</p>
                <Spinner />
                </div>
        )}
        
        <ul>
            { 
                articles.articles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))
            }
            
        </ul>
    </div>)
}
