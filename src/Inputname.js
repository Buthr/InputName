import { useState } from "react";



const Inputname = () => {
    const [name, setName] = useState('');
    return (
        <div className="Inputname">
            <h2>Name</h2>
            <form>
                <label>Name</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <button>Enter</button>    
                <p>{name}</p>    
            </form>
        </div>
    )
}

export default Inputname;
