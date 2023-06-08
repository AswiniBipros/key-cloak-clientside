import { getImageUrl } from "./Utils";

function MyCard({ children }) {
    return (
        <div >
            {children}
        </div>
    );
}

function Avatar({ person, size }) {
    return (
        <>
            <h1>Hello</h1>
            <img
                src={getImageUrl(person)}
                alt="no image available"
                width={size}
                height={size}
            >
            </img>
        </>
    );
}

export default function MyProfile() {
    return (
        <MyCard>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            >
            </Avatar>
        </MyCard>
    );
}