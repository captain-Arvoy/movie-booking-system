import Link from "next/link"

export default function Navbar() {
    let imageLink = "data:image/png;base64,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"
    return (
        <div className="navbar bg-neutral text-neutral-content mb-4">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href='/'>Movie Booking System</Link>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="profile" src={imageLink} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between text-black">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><Link className="text-black" href='#'>Settings</Link></li>
                    <li><Link className="text-black" href='/booking-page'>book Ticket</Link></li>
                    <li><Link className="text-black" href='/logout'>Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}