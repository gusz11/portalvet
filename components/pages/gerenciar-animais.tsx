'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function GerenciarAnimais() {
    const [animals, setAnimals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnimals();
    }, []);

    async function fetchAnimals() {
        try {
            const response = await fetch('http://localhost:3001/animais_clinica');
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setAnimals(data);
        } catch (error) {
            console.error("Error fetching animals:", error);
            // Fallback mock data for demo if backend is down
            setAnimals([
                { id: 1, nome: "Filhote", race: "Gato", imageUrl: "/images/cat-avatar.png" },
                { id: 2, nome: "Serena", race: "Gato", imageUrl: "/images/cat-avatar.png" },
            ]);
            // alert("Erro ao carregar animais do servidor. Mostrando dados de exemplo."); // Removed alert to avoid spam on load
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = (id: number) => {
        alert("Funcionalidade de remoção não implementada no backend (apenas visual).");
        // Optimistic update for visual feedback
        setAnimals(animals.filter(a => a.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Gerenciar Animais</h1>
                        <p className="text-gray-600">Lista de animais cadastrados</p>
                    </div>
                    <Link href="/admin/animais/cadastro">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Novo Animal
                        </Button>
                    </Link>
                </div>

                {loading ? (
                    <div>Carregando...</div>
                ) : (
                    <div className="grid gap-4">
                        {animals.map((animal) => (
                            <Card key={animal.id || animal.nome} className="flex items-center p-4 justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="h-16 w-16 bg-gray-200 rounded-full overflow-hidden">
                                        <img
                                            src={animal.imageUrl || "/images/cat-avatar.png"}
                                            alt={animal.nome}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">{animal.nome}</h3>
                                        <p className="text-gray-500">{animal.race} - {animal.color}</p>
                                    </div>
                                </div>
                                <Button variant="destructive" size="icon" onClick={() => handleDelete(animal.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
