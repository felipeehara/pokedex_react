
export const Header = () => {
    return(
        <div>
            <h1>
                <Title text="Pokédex"/>
            </h1>
        </div>
    );
}


interface titleProps {
    text: string;
}

export const Title = ({text}:titleProps) => {
    return(
        <div>
            <h1 className="text-yellow-500 text-shadow-blue text-6xl text-bold">{text}</h1>
        </div>
    );
}