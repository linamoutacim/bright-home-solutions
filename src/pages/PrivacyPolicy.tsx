import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

                <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            Chez <strong>LumiSense</strong>, nous accordons une importance primordiale à la protection de vos données personnelles. Cette politique de confidentialité détaille comment nous collectons, utilisons et protégeons vos informations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Collecte des données</h2>
                        <p>
                            Nous collectons des informations lorsque vous passez une commande sur notre site. Les données collectées incluent :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Votre nom et prénom</li>
                            <li>Votre adresse email</li>
                            <li>Votre adresse de livraison</li>
                            <li>Votre numéro de téléphone</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilisation des données</h2>
                        <p>
                            Les informations que nous recueillons sont utilisées pour :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Traiter et livrer vos commandes</li>
                            <li>Améliorer le service client</li>
                            <li>Vous contacter par email concernant vos commandes</li>
                            <li>Améliorer notre site internet</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Protection des informations</h2>
                        <p>
                            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies</h2>
                        <p>
                            Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. Cependant, cette utilisation des cookies n’est en aucune façon liée à des informations personnelles identifiables sur notre site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Consentement</h2>
                        <p>
                            En utilisant notre site, vous consentez à notre politique de confidentialité.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Vos droits</h2>
                        <p>
                            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à privacy@lumisense.com.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
