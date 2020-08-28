import { useRouter } from 'next/router'

const Person = () => {
    const router = useRouter()
    return <h1>
        Post Id is {router.query.post}
    </h1>
}

export default Person;