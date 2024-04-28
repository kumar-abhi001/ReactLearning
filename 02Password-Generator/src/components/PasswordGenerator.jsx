import { useCallback, useEffect, useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [lenght, setLenght] = useState(8);
    const [isNumber, setIsNumber] = useState(false);
    const [isCharacter, setIsCharacter] = useState(false);
    

    const generatePassword = () => { 
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let num = '0123456789';
        let character = '!@#$%^&*()_+{}|:"<>?';
        let currPassword = '';
        if (isNumber) string += num;
        if (isCharacter) string += character;
        
        for (let i = 0; i < lenght; i++) {
            currPassword += string.charAt(Math.floor(Math.random() * string.length));
        }
        setPassword(currPassword);
    };

    const passwordGenerate = useCallback(generatePassword, [lenght, isNumber, isCharacter]);
    useEffect(passwordGenerate, [passwordGenerate]);
    return (
        <div className="border-solid border-2 border-white rounded-lg bg-gray-800 w-1/2 m-auto mt-6 text-orange-500">
            <h1 className="text-5xl text-white text-center mt-3 mb-3">Password Generator</h1>
            <div className="w-full flex justify-left shadow rounded-lg overflow-hidden mb-4 ml-4">
                <input type="text" className="outline-none w-3/4 py-1 px-3" value={password}/>
                <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-red-300"
                    onClick={() => { 
                        navigator.clipboard.writeText(password);
                    }}
                >Copy</button>
            </div>

            <div className="ml-5 mt-2 mb-5">
                <input type="range"
                    min={8} max={100}
                    value={lenght}
                    readOnly
                    onChange={(e) => {
                    setLenght(e.target.value); 
                }}/>
                <span className="ml-2">Length({lenght})</span>

                <input id="numberInput"
                    className="ml-5"
                    type="checkbox"
                    onChange={(e) => {
                    setIsNumber((prev) => !prev);
                }}/>
                <label htmlFor="numberInput" className="ml-1">Number</label>

                <input id="charInput"
                    className="ml-5"
                    type="checkbox"
                    onChange={(e) => {
                    setIsCharacter((prev) => !prev);
                }} />
                <label htmlFor="charInput" className="ml-1">Character</label>
            </div>
        </div>
    )
}

export default PasswordGenerator;