import { useRouter } from 'next/router'

const Person = () => {
    const router = useRouter()
    return <h1>
        Person name is {router.query.person}
    </h1>
}

export default Person;