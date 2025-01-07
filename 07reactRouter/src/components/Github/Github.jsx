// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/VishalKSaklathi')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div className="flex justify-evenly mt-4">
                <img src={data.avatar_url} alt="Git picture" className="rounded-lg shadow-lg" width={300} />
                <div>
                    Admin Name: {data.name}<br />
                    Github followers: {data.followers}<br />
                    Public repos: {data.public_repos}<br />
                    Type: {data.user_view_type}<br />
                    <a href={data.html_url}> Git Profile</a>
                </div>

            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/VishalKSaklathi')
    return response.json()
}