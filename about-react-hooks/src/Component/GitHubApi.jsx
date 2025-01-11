import React, { useEffect, useState } from "react";
import { getGitHubData } from "../util/githubApi";

export default function GitHubApi() {
    const [username, setUsername] = useState("rahulranjann");
    const [value, setValue] = useState(username);
    const [data, setData] = useState([]);
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        getGitHubData(username).then((data) => {
            setData(data);
            setValue("");
        })  
    },[username]);
    const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Fetching GitHub data for:", username);
    // const url = `https://api.github.com/users/${username}`;
    // fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         console.log(data.repos_url);
    //         setData(data);
    //         setRepo(data.repos_url);
    //     });

    // setUsername("");

    setUsername(value);
};

return (
<div className="parent">
    <div className="parent-center">
        <div className="heading">
            <h1>GitHub API</h1>
            <div className="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(0, 0, 0, 1)" }}
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                </svg>
            </div>
        </div>
        <div className="input-container">
         <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="username"
                id="name"
                placeholder="Enter GitHub username"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAq9JREFUSEvllkuIjmEUx3//jEsWFrNxvyTTIFEWFlhIoQkbuZVCMwhNSjKRjRUL5FIjasYtUmTBQtiwomxQlFuRDJpIodwd75meV998833v+8xXM7PwLN/3nPN7znme8z+P6KOlPuISBTazAcAMoAYYBrwFngN3Jf2oZPOZYDMbC+wHFgGDSgC+ApeB7ZJed2cDZcFmthk4CHi2ees7sFHSqTzD9H9JsJl5ltuC0a+kvMeAm8AT4AUwHpgIzAU2AP2C7S5Je2LgXcBmtgk4Gpz9HBdKeloumJlNTc7/KjAy2KyQdCEP3glsZpOAB0D/kN1sSe/zgpjZKOA2MBr4AtRKepPlVwy+ngSYD/hNdeeXedD0v5lNA+5BR6eckbQmCmxm1cCHYHxI0tZYaAH8PLAS+ARUS/pdLsa/jM1sKXAxGM6UdKcC8DIgPd/MGIXgLcDhABsi6XMF4HHh1rvrWkmnYzLemfRs2gpVWWXKuOEDgW/hf5OkfTFg78fjwXC4pHcVZDwCaAt+yyWlR9clVGGp5wE3gkWdpGsVgBcDV4LfFEmPYjIeDHwMEtkiaX0F4LPAKsBc27MGSHEfXwKWAH+S2zlZkktk1Ap9fD8YtyZDY11UH7uRmbkGe3l8ErlczpLUnkc2szFBuVw2XQtqJHn1yq5SWt0AtASPV8ACSY8zbvL0oNVDg01zIrONeZstN532Jm2xIzj7dPKhcatgOtX6USTf5gBe0uI4DZJOdCvj1DhMqSNAVd7ugZ/hQeDql65MeN4LxM/8AFAHuDgUL9fik8nH3UkXtJlZfTKhWmPgsW8uh/qba0J4c/nUegY8lJQqVQevBLxekm+u04oCR5S6k0mA+wX1+N6aqyWdKzTqEXBB5im8UVJzr4AD3NXPe7qpV0odczQ9Vuo8+P8H/gvzS+Ifyt+yCwAAAABJRU5ErkJggg=="/>
                </div>
            </button>
         </form>
        </div>
    </div>
    <div className="result-container">
        <div className="result">
        <div className="avatar">
            <div className="img">
                <img src={data.avatar_url} alt="" />
            </div>
            <div className="info">
            <div className="name">
                <h1>{data.name}</h1>
                <h6>{data.bio}</h6>
            </div>
            <div className="peoples">
                <div className="people">
                    <p>{data.followers}: Followers</p>
                </div>
                <div className="people">
                    <p>{data.following}: Following</p>
                </div>
                <div className="people">
                    <p>{data.public_repos}: Public Repo.</p>
                </div>
            </div>
            {/* <div className="top-repos">
                <ul>{repo}</ul>
            </div> */}
            <div className="img-status">
                        <table>
                        <tr>
                            <td valign="top" width="50%">
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${data.login}&show_icons=true&count_private=true&hide_border=true`}
                                align="left"
                                style={{ width: '100%' }}
                                alt="GitHub Stats"
                            />
                        </td>
                        <td valign="top" width="50%">
                            <div style={{ textAlign: 'right' }}>
                                <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${data.login}&hide_border=true&layout=compact`}
                                style={{ width: '100%' }}
                                alt="Top Languages"
                                />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
);}
