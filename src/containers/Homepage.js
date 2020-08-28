import Link from 'next/link'

const Homepage = () => {

    const peoples = [
        { v: 'person', name: 'John' },
        { v: 'person', name: 'Doe' },
        { v: 'person', name: 'Traversy' }
    ]

    return <div>
        <h1> Hello World! </h1>
        {
            peoples.map(e => (
                <div>
                    <Link as={`${e.v}/${e.name}`} href="[persons]/[person]">
                        <a> {e.name} </a>
                    </Link>
                </div>
            ))
        }
    </div>
}

export default Homepage