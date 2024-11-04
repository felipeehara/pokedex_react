import Link from 'next/link';


interface buttonsProps {
    rout: string;
    content: string;
}

export const ButtonsRoutes = ({rout,content}: buttonsProps) => {
    return(
        
            <button className='bg-blue-800 text-white p-4 rounded-sm text-2x hover:bg-yellow-500 hover:text-blue-800'>
                <Link href={rout}>{content}</Link>    
            </button> 
    );
}