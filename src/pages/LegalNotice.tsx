import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalNotice = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

                <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Édition du site</h2>
                        <p>
                            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>LumiSense</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                        </p>
                        <p className="mt-2">
                            <strong>Propriétaire du site :</strong> LumiSense Solutions Inc. <br />
                            <strong>Contact :</strong> contact@lumisense.com | 01 23 45 67 89 <br />
                            <strong>Adresse :</strong> 123 Rue de l'Innovation, 75001 Paris, France.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Propriété intellectuelle et contrefaçons</h2>
                        <p>
                            LumiSense Solutions Inc. est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                        </p>
                        <p className="mt-2">
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de LumiSense Solutions Inc.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Limitations de responsabilité</h2>
                        <p>
                            LumiSense Solutions Inc. ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site LumiSense.
                        </p>
                        <p className="mt-2">
                            LumiSense Solutions Inc. décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur LumiSense.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Hébergement</h2>
                        <p>
                            Le Site est hébergé par la société Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Droit applicable et attribution de juridiction</h2>
                        <p>
                            Tout litige en relation avec l’utilisation du site LumiSense est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LegalNotice;
