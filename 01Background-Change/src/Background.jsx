import { useState } from "react";
import "./App.css";

function Background() {
    const [bgColor, setBgColor] = useState("#ffffff");
    return (
        <div style={{
                width: "100%",
                height: "100vh",
                backgroundColor: bgColor,    
        }}>
            <div style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-evenly",
                justifySelf: "center",
                alignItems: "baseline",
                position: "absolute",
                top: "90%",
                left: "30%",
            }}>
                <button style={{
                    backgroundColor: "red", color: "white", padding: "10px 20px"}} onClick={() => setBgColor("#ff0000")}>Red</button>
                <button style={{
                    backgroundColor: "#046c4e",
                    color: "white",
                    padding: "10px 20px"}} onClick={() => setBgColor("#046c4e")}>Green</button>
                <button style={{backgroundColor: "#0000ff", color: "whi te", padding: "10px 20px"}} onClick={() => setBgColor("#0000ff")}>Blue</button>
                <button style={{backgroundColor: "#e3a008", color: "white", padding: "10px 20px"}} onClick={() => setBgColor("#e3a008")}>Yellow</button>
                <button style={{backgroundColor: "", color: "black", padding: "10px 20px"}} onClick={() => setBgColor("white")}>White</button>
                <button style={{backgroundColor: "black", color: "white", padding: "10px 20px"}} onClick={() => setBgColor("black")}>Black</button>

            </div>
        </div>
    )
}

export default Background;