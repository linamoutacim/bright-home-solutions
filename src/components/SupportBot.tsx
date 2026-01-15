import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    type: "bot" | "user";
    text: string;
    timestamp: Date;
}

const FAQ_RESPONSES: Record<string, string> = {
    "livraison": "Nos délais de livraison sont de 3 à 5 jours ouvrés. La livraison est GRATUITE pour les packs de 3 et 6 ampoules !",
    "installation": "C'est un jeu d'enfant ! Il suffit de visser l'ampoule comme une ampoule classique E27. Elle se connecte ensuite à votre téléphone en moins de 30 secondes.",
    "garantie": "Toutes nos ampoules Lumini sont garanties 2 ans. Si vous n'êtes pas satisfait, vous avez 30 jours pour nous les renvoyer.",
    "application": "L'application Lumini est disponible gratuitement sur l'App Store et Google Play Store.",
    "economie": "Grâce à notre capteur radar ultra-précis, vous pouvez réduire votre facture d'éclairage jusqu'à 80% en évitant les oublis.",
    "stock": "Oui, nous avons actuellement du stock disponible pour tous nos packs. Les commandes passées avant 14h sont expédiées le jour même !"
};

export const SupportBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            type: "bot",
            text: "Bonjour ! Je suis l'assistant Lumini. Comment puis-je vous aider aujourd'hui ?",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            type: "user",
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            let responseText = "Je ne suis pas sûr de comprendre. Pourriez-vous préciser votre question sur la livraison, l'installation ou la garantie ?";

            const lowerInput = userMsg.text.toLowerCase();
            for (const [key, value] of Object.entries(FAQ_RESPONSES)) {
                if (lowerInput.includes(key)) {
                    responseText = value;
                    break;
                }
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: "bot",
                text: responseText,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-card border rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <Bot className="w-6 h-6 text-accent-foreground" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Assistant Lumini</p>
                                <p className="text-[10px] text-primary-foreground/70 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                                    Réponse instantanée
                                </p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex flex-col max-w-[85%]",
                                    msg.type === "user" ? "ml-auto items-end" : "items-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "p-3 rounded-2xl text-sm shadow-sm",
                                        msg.type === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-white border text-foreground rounded-tl-none"
                                    )}
                                >
                                    {msg.text}
                                </div>
                                <span className="text-[10px] text-muted-foreground mt-1 px-1">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
                                <div className="bg-white border p-3 rounded-2xl rounded-tl-none">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestions */}
                    <div className="p-2 border-t bg-white flex gap-2 overflow-x-auto no-scrollbar">
                        {["Livraison", "Installation", "Garantie", "Économies"].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => {
                                    setInputValue(tag);
                                    handleSend();
                                }}
                                className="whitespace-nowrap px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Input area */}
                    <div className="p-4 bg-white border-t">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="flex gap-2"
                        >
                            <Input
                                placeholder="Écrivez votre question..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="rounded-xl border-secondary focus-visible:ring-accent"
                            />
                            <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl flex-shrink-0">
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110",
                    isOpen ? "bg-white text-primary rotate-90" : "bg-accent text-accent-foreground"
                )}
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-accent border-2 border-white text-[10px] font-bold text-white items-center justify-center">1</span>
                    </span>
                )}
            </button>

            {/* Welcome Message Pop-up (only if closed) */}
            {!isOpen && (
                <div className="absolute right-20 bottom-3 mr-4 bg-white p-3 rounded-2xl shadow-xl border whitespace-nowrap animate-in fade-in slide-in-from-right-5 duration-500 hidden md:block">
                    <p className="text-sm font-bold text-navy flex items-center gap-2">
                        Besoin d'aide ? <span className="text-xl">👋</span>
                    </p>
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white border-r border-t rotate-45" />
                </div>
            )}
        </div>
    );
};
