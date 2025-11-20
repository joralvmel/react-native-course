export const BasicTypes = () => {
    const name: string = "Jorge Alvarez";
    const age: number = 28;
    const isActive: boolean = false;

    const skills: string[] = ["HTML", "CSS", "JS", "TS"];

    return (
        <>
            <h3>Basic Types in TypeScript</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Active: {isActive ? "Si" : "No"}</p>
            <p>Skills: {skills.join(", ")}</p>
        </>
    )
};
