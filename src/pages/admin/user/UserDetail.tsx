import { useParams, useSearchParams } from "react-router";

export default function UserDetail() {
    // Even any route if there is any parameter, they are called as params. We can access those params using useParams hook. 

    // In URL, there are two types of parameters. 
    // i) One is path parameter and 
    // ii) the other is query parameter. 
    // Path parameter is the one which is defined in the route path and query parameter is the one which is defined after the question mark in the URL. For example, in the URL /admin/users/abc?q=hello, abc is a path parameter and q=hello is a query parameter. `?` in URL is optional parameter which is query parameter, where q is the key and hello is the value of the query parameter. And query parameter is not need to define in the route path, it can be defined in the URL directly. But path parameter is need to define in the route path. For example, if we want to define a route for the above URL, we can define it as /admin/users/:username, where :username is the path parameter. And we can access the value of the username parameter using useParams hook. 
    // query parameter can be multiple in the URL. For example, /admin/users/abc?q=hello&sort=asc, in this URL there are two query parameters q and sort. We can access the value of these query parameters using useSearchParams hook.

    // useParams is used to access the path parameters in the URL. It returns an object with all the path parameters as key and their values as value.

    // In the above example, if we want to access the username parameter, we can use useParams hook and pass the type of the parameter as a generic type. In this case, the type of the username parameter is string. So we can use useParams<{ username: string }>() to access the username parameter. This will return an object with a key username and its value will be the value of the username parameter in the URL.
    // 
    // useSearchParams is used to access the query parameters in the URL. It returns an array with two elements. 
    // i) The first element is an object which has all the query parameters as key and their values as value. 
    // ii) The second element is a function which can be used to set the query parameters.

    // In the above example, if we want to access the q parameter, we can use useSearchParams hook. It will return an array with two elements. The first element is an object which has all the query parameters as key and their values as value. So we can use query.get("q") to access the value of the q parameter in the URL. i.e. query.get("q") will return "hello" in the above example.
    // In the above example, if we want to set the value of the q parameter, we can use the second element of the array returned by useSearchParams hook. It is a function which can be used to set the query parameters. We can use setQuery("q", "new value") to set the value of the q parameter in the URL to "new value". 

    const params = useParams<{ username: string }>();
    const [query, setQuery] = useSearchParams("");

    return <>
        User Detail: {params.username}
        <br />
        Query: {query.get("q")}, Search: {query.get("search")}, Sort: {query.get("sort")}
    </>
}