import Link from 'next/link'

const List = ({ list }) => {


    console.log(list)
    return <div>
        <h1> List Page </h1>
        {
            list.map(e => (
                <div>
                    <Link as={`posts/${e.id}`} href="[posts]/[post]">
                        <a> {e.title} </a>
                    </Link>
                </div>
            ))
        }
    </div>
}


List.getInitialProps = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json()
    return { list: data }
}

export default List