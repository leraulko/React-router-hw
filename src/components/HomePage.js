import React from "react";
import Header from "./Header";

export default function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <h1>MOUNTAIN</h1>
            <p>
                Minimal and flexible project management tool that's going to  save you one day every month.
            </p>
            <button>
                Get Started — it's FREE
            </button>
        </div>
    );
};