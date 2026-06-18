import { useSelector } from "react-redux";


export function ArticleList() {
    const articles = useSelector((state) => state.articles);

    return (<div>
        <h1>Hello</h1>

        <ul>
            { 
                articles.map((article) => (
                    <li>{article}</li>
                ))
            }
            
        </ul>
    </div>)
}
