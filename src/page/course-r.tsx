import React from 'react';

function CoursePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-50">
            

            <main className="container mx-auto px-6 py-12 md:py-24">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Comment faire un CV</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Un bon CV est essentiel pour décrocher un entretien. Voici quelques conseils pour créer un CV efficace.
                </p>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Choisissez un format de CV</h2>
                    <p className="text-gray-600 mb-4">
                        Il existe plusieurs formats de CV, tels que le CV chronologique, fonctionnel ou combiné. Choisissez celui qui met le mieux en valeur votre parcours.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Incluez vos informations de contact</h2>
                    <p className="text-gray-600 mb-4">
                        Assurez-vous d'inclure votre nom, adresse, numéro de téléphone et adresse e-mail en haut de votre CV.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">3. Rédigez un résumé ou un objectif</h2>
                    <p className="text-gray-600 mb-4">
                        Un résumé ou un objectif bien rédigé peut attirer l'attention des recruteurs et leur donner une idée de vos compétences et de vos objectifs professionnels.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Détaillez votre expérience professionnelle</h2>
                    <p className="text-gray-600 mb-4">
                        Listez vos emplois précédents en commençant par le plus récent. Incluez le nom de l'entreprise, votre poste, les dates d'emploi et une description de vos responsabilités et réalisations.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Mentionnez votre formation</h2>
                    <p className="text-gray-600 mb-4">
                        Indiquez vos diplômes, le nom des établissements fréquentés et les dates de graduation. Si vous êtes un jeune diplômé, placez cette section avant l'expérience professionnelle.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Ajoutez des compétences et certifications</h2>
                    <p className="text-gray-600 mb-4">
                        Mentionnez les compétences pertinentes pour le poste que vous visez, ainsi que les certifications que vous avez obtenues.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">7. Relisez et formatez votre CV</h2>
                    <p className="text-gray-600 mb-4">
                        Relisez attentivement votre CV pour corriger les fautes d'orthographe et de grammaire. Assurez-vous que le format est cohérent et facile à lire.
                    </p>
                </section>
            </main>

            
        </div>
    );
}

export default CoursePage;