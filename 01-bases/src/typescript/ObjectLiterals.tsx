interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
    houseNumber?: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: "Jorge",
        lastName: "Alvarez",
        age: 28,
        address: {
            street: "123 Main St",
            city: "Madrid",
            houseNumber: 45
        }
    }

    return (
        <>
            <h3>Object Literals in TypeScript</h3>
            <p>{JSON.stringify(person, null, 2)}</p>
        </>
    )
}
