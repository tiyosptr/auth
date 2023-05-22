import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Landingpage(props) {
    return (
        <div>
            <Head title={props.title} />
            <Navbar />
            <div>
                <Hero />
            </div>
        </div>
    );
}
