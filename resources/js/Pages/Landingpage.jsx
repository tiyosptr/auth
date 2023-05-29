import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Start from "@/Components/Start";
import Number from "@/Components/Number";
import Vfirst from "@/Components/Vfirst";
import Tfirst from "@/Components/Tfirst"
import Cfirst from "@/Components/Cfirst"
import { Head } from "@inertiajs/react";
import React from "react";
import Vacancy from "@/Pages/Vacancy";

export default function Landingpage(props) {
    return (
        <div>
            <Head title={props.title} />
            <Navbar />
            <div>
                <Hero />
                <Start />
                <Number />
                <Vfirst />
                <Tfirst />
                <Cfirst />
            </div>
            <div>
                <Navbar />
                <Vacancy />
            </div>
        </div>
    );
}
