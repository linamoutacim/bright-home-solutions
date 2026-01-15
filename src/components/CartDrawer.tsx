import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { ShoppingCart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
    const navigate = useNavigate();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="relative p-2 text-foreground hover:text-accent transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse-glow">
                            {totalItems}
                        </span>
                    )}
                </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col">
                <SheetHeader className="pb-6 border-b">
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-accent" />
                        Votre Panier ({totalItems})
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                                <ShoppingCart className="w-8 h-8 text-muted-foreground opacity-20" />
                            </div>
                            <div>
                                <p className="font-medium text-foreground">Votre panier est vide</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Découvrez nos offres et ajoutez des ampoules pour sécuriser votre maison.
                                </p>
                            </div>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 group">
                                <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse-glow" style={{ animationDuration: '3s' }}>
                                    <ShoppingBag className="w-8 h-8 text-muted-foreground/40" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-muted-foreground hover:text-destructive transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Pack de {item.itemQuantity} unités</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors text-xs font-bold"
                                            >
                                                -
                                            </button>
                                            <span className="w-4 text-center text-xs font-bold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors text-xs font-bold"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span className="font-bold text-sm text-accent">{(item.price * item.quantity).toFixed(2)}€</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <SheetFooter className="pt-6 border-t mt-auto">
                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground font-medium">Total</span>
                                <span className="text-2xl font-bold">{totalPrice.toFixed(2)}€</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground text-center">
                                Livraison gratuite incluse • Paiement 100% sécurisé
                            </p>
                            <Button
                                onClick={() => {
                                    navigate("/checkout");
                                }}
                                className="w-full py-6 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group"
                            >
                                Passer à la caisse
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};
