'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PawPrint, CalendarDays, PlusCircle, List } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Painel Administrativo</h1>
                    <p className="text-gray-600 mt-2">Gerencie os animais e eventos da clínica.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Animais Section */}
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="bg-blue-50 rounded-t-xl pb-8">
                            <div className="flex items-center space-x-4 mb-2">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <PawPrint size={32} />
                                </div>
                                <CardTitle className="text-2xl text-gray-800">Animais</CardTitle>
                            </div>
                            <CardDescription className="text-gray-600 text-lg">
                                Gerencie o cadastro de animais para adoção e tratamento.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <Link href="/admin/animais" className="block">
                                <Button variant="outline" className="w-full justify-start h-14 text-lg border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">
                                    <List className="mr-3" />
                                    Ver Lista de Animais
                                </Button>
                            </Link>
                            <Link href="/admin/animais/cadastro" className="block">
                                <Button className="w-full justify-start h-14 text-lg bg-blue-500 hover:bg-blue-600 text-white">
                                    <PlusCircle className="mr-3" />
                                    Cadastrar Novo Animal
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Eventos Section */}
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="bg-pink-50 rounded-t-xl pb-8">
                            <div className="flex items-center space-x-4 mb-2">
                                <div className="bg-pink-100 p-3 rounded-full text-pink-600">
                                    <CalendarDays size={32} />
                                </div>
                                <CardTitle className="text-2xl text-gray-800">Eventos</CardTitle>
                            </div>
                            <CardDescription className="text-gray-600 text-lg">
                                Crie e gerencie eventos, feiras e campanhas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            {/* No list view for events yet as per plan, just create */}
                            <Link href="/admin/eventos/cadastro" className="block">
                                <Button className="w-full justify-start h-14 text-lg bg-pink-500 hover:bg-pink-600 text-white">
                                    <PlusCircle className="mr-3" />
                                    Criar Novo Evento
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
