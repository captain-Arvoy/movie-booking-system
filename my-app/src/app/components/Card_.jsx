import Image from 'next/image'
export default function Card_() {
    return (
        <div className="card w-96 flex flex-row gap-8 p-8">
            <div className='p-32'>
                <figure><img src="/animal.jpg" alt="ranveer" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Animal</h2>
                </div>
            </div>
            <div className='p-32'>
                <figure><img src="/annaporani.jpg" alt="ranveer" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Animal</h2>
                </div>
            </div>
            <div className='p-32'>
                <figure><img src="/parking.jpg" alt="ranveer" height={700}/></figure>
                <div className="card-body">
                    <h2 className="card-title">Animal</h2>
                </div>
            </div>
        </div>
    );
}