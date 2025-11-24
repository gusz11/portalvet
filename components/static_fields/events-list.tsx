'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const events = [
    {
        id: 1,
        title: "Feira de adoção",
        imageUrl: "/images/event1.jpg", // Placeholder
        description: "Não compre, Adote!",
        link: "/adote"
    },
    {
        id: 2,
        title: "Bazar beneficente",
        imageUrl: "/images/event2.jpg", // Placeholder
        description: "Ajude nossa causa",
        link: "/bazar"
    },
    {
        id: 3,
        title: "Vacinação público",
        imageUrl: "/images/event3.jpg", // Placeholder
        description: "Proteja seu amigo",
        link: "/eventos/vacinacao"
    },
    {
        id: 4,
        title: "Castração gratuita",
        imageUrl: "/images/event4.jpg", // Placeholder
        description: "Controle populacional",
        link: "/eventos/castracao"
    },
];

export function EventsList() {
    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Eventos</h2>
                <p className="text-xl text-gray-600">Fique a par dos eventos que nós e nossos parceiros contribuímos</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event) => (
                        <Card key={event.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">{event.title}</h3>
                                    <p className="text-white/80 text-sm">{event.description}</p>
                                </div>
                            </div>
                            <CardFooter className="p-4 bg-white">
                                <Link href={event.link} className="w-full">
                                    <Button className="w-full bg-[#67BED9] hover:bg-[#5AADC7] text-white font-semibold rounded-lg">
                                        Saiba mais
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
