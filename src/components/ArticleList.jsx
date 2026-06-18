import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../store/articlesSlices";


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
        dispatch(addArticle());
        
    }

    return (<div>
        <h1>Hello</h1>

        <button onClick={handlerAddArticle}>add</button>
        

        <ul>
            { 
                articles.map((article) => (
                    <li>{article}</li>
                ))
            }
            
        </ul>
    </div>)
}
