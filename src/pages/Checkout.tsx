import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, ChevronLeft, CreditCard, ShoppingBag, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cart.length === 0) {
            toast.error("Votre panier est vide");
            return;
        }

        // Simulate order processing
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
                loading: "Traitement de votre commande...",
                success: () => {
                    clearCart();
                    navigate("/");
                    return "Commande confirmée ! Vous allez recevoir un email de confirmation.";
                },
                error: "Une erreur est survenue lors du paiement.",
            }
        );
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <div className="text-center space-y-4 animate-slide-up">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                        <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h1 className="text-2xl font-bold">Votre panier est vide</h1>
                    <p className="text-muted-foreground">Découvrez nos produits pour commencer vos achats.</p>
                    <Button onClick={() => navigate("/")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Retour à la boutique
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-secondary/30 pb-20">
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="container py-4 flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <h1 className="text-xl font-bold">Finaliser ma commande</h1>
                </div>
            </div>

            <div className="container py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Order Form */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="bg-card p-6 rounded-2xl shadow-sm border space-y-6">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Truck className="w-5 h-5 text-accent" />
                                Informations de livraison
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="votre@email.com" required value={formData.email} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">Prénom</Label>
                                        <Input id="firstName" placeholder="Jean" required value={formData.firstName} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Nom</Label>
                                        <Input id="lastName" placeholder="Dupont" required value={formData.lastName} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Adresse</Label>
                                    <Input id="address" placeholder="123 Rue de la Lumière" required value={formData.address} onChange={handleInputChange} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="zipCode">Code Postal</Label>
                                        <Input id="zipCode" placeholder="75000" required value={formData.zipCode} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city">Ville</Label>
                                        <Input id="city" placeholder="Paris" required value={formData.city} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Téléphone</Label>
                                    <Input id="phone" type="tel" placeholder="06 12 34 56 78" required value={formData.phone} onChange={handleInputChange} />
                                </div>
                            </form>
                        </div>

                        <div className="bg-card p-6 rounded-2xl shadow-sm border space-y-6">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-accent" />
                                Paiement sécurisé
                            </h2>
                            <div className="p-4 bg-muted/50 rounded-xl border border-dashed text-center">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Le paiement sera traité de manière sécurisée.
                                </p>
                                <div className="flex justify-center gap-4 grayscale opacity-60">
                                    <div className="w-12 h-8 bg-white rounded border flex items-center justify-center font-bold text-[10px]">VISA</div>
                                    <div className="w-12 h-8 bg-white rounded border flex items-center justify-center font-bold text-[10px]">MC</div>
                                    <div className="w-12 h-8 bg-white rounded border flex items-center justify-center font-bold text-[10px]">PayPal</div>
                                </div>
                            </div>
                            <Button type="submit" form="checkout-form" className="w-full py-6 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                                Payer {totalPrice.toFixed(2)}€
                            </Button>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="space-y-6" style={{ animationDelay: "0.1s" }}>
                        <div className="bg-card p-6 rounded-2xl shadow-sm border sticky top-24">
                            <h2 className="text-lg font-semibold mb-6">Récapitulatif</h2>
                            <div className="divide-y max-h-[400px] overflow-y-auto pr-2">
                                {cart.map((item) => (
                                    <div key={item.id} className="py-4 flex gap-4">
                                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                            <ShoppingBag className="w-6 h-6 text-muted-foreground" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="font-medium">{item.name}</h3>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">Pack de {item.itemQuantity} unités</p>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                                                    <span className="text-sm font-medium">{item.quantity}</span>
                                                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                                </div>
                                                <span className="font-semibold">{(item.price * item.quantity).toFixed(2)}€</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Sous-total</span>
                                    <span>{totalPrice.toFixed(2)}€</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Livraison</span>
                                    <span className="text-success font-medium">Gratuite</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
                                    <span>Total</span>
                                    <span className="text-accent">{totalPrice.toFixed(2)}€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actual hidden form to handle submission */}
            <form id="checkout-form" onSubmit={handleSubmit} className="hidden"></form>
        </div>
    );
};

export default Checkout;
